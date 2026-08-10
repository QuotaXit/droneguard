import {
  NextResponse
} from "next/server"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"


export const runtime =
  "nodejs"

export const dynamic =
  "force-dynamic"


function jsonError(
  message,
  status = 400
) {
  return NextResponse.json(
    {
      success: false,
      error: message
    },
    {
      status,
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}


function canSeeNotification(
  notification,
  permissions
) {
  const required =
    String(
      notification
        ?.required_permission ||
      ""
    ).trim()

  if (!required) {
    return true
  }

  return (
    permissions.includes("*") ||
    permissions.includes(
      required
    )
  )
}


function mapNotification(
  item,
  readIds
) {
  return {
    id:
      item.id,

    category:
      item.category,

    severity:
      item.severity,

    title:
      item.title,

    message:
      item.message || "",

    href:
      item.href || null,

    requiredPermission:
      item.required_permission ||
      null,

    sourceType:
      item.source_type ||
      null,

    sourceId:
      item.source_id ||
      null,

    createdAt:
      item.created_at,

    read:
      readIds.has(
        item.id
      )
  }
}


/*
 * =====================================================
 * GET
 * Ultime notifiche visibili al membro Team.
 * =====================================================
 */
export async function GET() {
  try {

    const {
      user,
      access
    } =
      await getTeamAccess()


    if (!user) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }


    if (!access?.active) {
      return jsonError(
        "Accesso Team non autorizzato.",
        403
      )
    }


    const permissions =
      Array.isArray(
        access.permissions
      )
        ? access.permissions
        : []


    const adminSupabase =
      createAdminSupabaseClient()


    /*
     * Recuperiamo più righe del necessario
     * perché successivamente filtriamo
     * in base ai permessi del membro Team.
     */
    const {
      data:
        notificationRows,
      error:
        notificationsError
    } =
      await adminSupabase
        .from(
          "team_notifications"
        )
        .select(`
          id,
          event_key,
          category,
          severity,
          title,
          message,
          href,
          required_permission,
          source_type,
          source_id,
          actor_user_id,
          metadata,
          created_at
        `)
        .order(
          "created_at",
          {
            ascending:
              false
          }
        )
        .limit(100)


    if (
      notificationsError
    ) {
      console.error(
        "[team-notifications] caricamento notifiche fallito:",
        notificationsError
      )

      return jsonError(
        "Impossibile caricare le notifiche.",
        500
      )
    }


    const visibleRows =
      (
        notificationRows ||
        []
      )
        .filter(
          (notification) =>
            canSeeNotification(
              notification,
              permissions
            )
        )
        .slice(
          0,
          30
        )


    const visibleIds =
      visibleRows
        .map(
          (item) =>
            item.id
        )
        .filter(Boolean)


    let readIds =
      new Set()


    if (
      visibleIds.length >
      0
    ) {

      const {
        data:
          readRows,
        error:
          readsError
      } =
        await adminSupabase
          .from(
            "team_notification_reads"
          )
          .select(
            "notification_id"
          )
          .eq(
            "user_id",
            user.id
          )
          .in(
            "notification_id",
            visibleIds
          )


      if (readsError) {
        console.error(
          "[team-notifications] caricamento letture fallito:",
          readsError
        )

        return jsonError(
          "Impossibile caricare lo stato delle notifiche.",
          500
        )
      }


      readIds =
        new Set(
          (
            readRows ||
            []
          ).map(
            (row) =>
              row.notification_id
          )
        )
    }


    const notifications =
      visibleRows.map(
        (item) =>
          mapNotification(
            item,
            readIds
          )
      )


    const unreadCount =
      notifications.filter(
        (item) =>
          !item.read
      ).length


    return NextResponse.json(
      {
        success: true,

        unreadCount,

        notifications
      },
      {
        headers: {
          "Cache-Control":
            "private, no-store, max-age=0"
        }
      }
    )

  } catch (error) {

    console.error(
      "[team-notifications] GET unexpected error:",
      error
    )

    return jsonError(
      "Errore durante il caricamento delle notifiche.",
      500
    )
  }
}


/*
 * =====================================================
 * PATCH
 *
 * action:
 * - read
 * - read_all
 * =====================================================
 */
export async function PATCH(
  request
) {
  try {

    const origin =
      request.headers.get(
        "origin"
      )

    if (
      !origin ||
      origin !==
        request.nextUrl.origin
    ) {
      return jsonError(
        "Origine della richiesta non autorizzata.",
        403
      )
    }


    const {
      user,
      access
    } =
      await getTeamAccess()


    if (!user) {
      return jsonError(
        "Devi effettuare l'accesso.",
        401
      )
    }


    if (!access?.active) {
      return jsonError(
        "Accesso Team non autorizzato.",
        403
      )
    }


    const permissions =
      Array.isArray(
        access.permissions
      )
        ? access.permissions
        : []


    let body

    try {
      body =
        await request.json()
    } catch {
      return jsonError(
        "Dati non validi."
      )
    }


    const action =
      String(
        body?.action ||
        ""
      )
        .trim()
        .toLowerCase()


    const adminSupabase =
      createAdminSupabaseClient()


    /*
     * ===============================================
     * SEGNA UNA NOTIFICA COME LETTA
     * ===============================================
     */
    if (
      action === "read"
    ) {

      const notificationId =
        String(
          body
            ?.notificationId ||
          ""
        ).trim()


      if (
        !notificationId
      ) {
        return jsonError(
          "Notifica non valida."
        )
      }


      const {
        data:
          notification,
        error:
          notificationError
      } =
        await adminSupabase
          .from(
            "team_notifications"
          )
          .select(`
            id,
            required_permission
          `)
          .eq(
            "id",
            notificationId
          )
          .maybeSingle()


      if (
        notificationError
      ) {
        return jsonError(
          "Impossibile controllare la notifica.",
          500
        )
      }


      if (!notification) {
        return jsonError(
          "Notifica non trovata.",
          404
        )
      }


      if (
        !canSeeNotification(
          notification,
          permissions
        )
      ) {
        return jsonError(
          "Non sei autorizzato a leggere questa notifica.",
          403
        )
      }


      const {
        error
      } =
        await adminSupabase
          .from(
            "team_notification_reads"
          )
          .upsert(
            {
              notification_id:
                notificationId,

              user_id:
                user.id,

              read_at:
                new Date()
                  .toISOString()
            },
            {
              onConflict:
                "notification_id,user_id"
            }
          )


      if (error) {
        console.error(
          "[team-notifications] aggiornamento lettura fallito:",
          error
        )

        return jsonError(
          "Impossibile aggiornare la notifica.",
          500
        )
      }


      return NextResponse.json(
        {
          success:
            true
        }
      )
    }


    /*
     * ===============================================
     * SEGNA TUTTE LE NOTIFICHE VISIBILI COME LETTE
     * ===============================================
     */
    if (
      action ===
      "read_all"
    ) {

      const {
        data:
          notificationRows,
        error:
          notificationsError
      } =
        await adminSupabase
          .from(
            "team_notifications"
          )
          .select(`
            id,
            required_permission
          `)
          .order(
            "created_at",
            {
              ascending:
                false
            }
          )
          .limit(100)


      if (
        notificationsError
      ) {
        return jsonError(
          "Impossibile caricare le notifiche.",
          500
        )
      }


      const visibleRows =
        (
          notificationRows ||
          []
        )
          .filter(
            (notification) =>
              canSeeNotification(
                notification,
                permissions
              )
          )
          .slice(
            0,
            30
          )


      if (
        visibleRows.length ===
        0
      ) {
        return NextResponse.json(
          {
            success:
              true
          }
        )
      }


      const now =
        new Date()
          .toISOString()


      const rows =
        visibleRows.map(
          (notification) => ({
            notification_id:
              notification.id,

            user_id:
              user.id,

            read_at:
              now
          })
        )


      const {
        error
      } =
        await adminSupabase
          .from(
            "team_notification_reads"
          )
          .upsert(
            rows,
            {
              onConflict:
                "notification_id,user_id"
            }
          )


      if (error) {
        console.error(
          "[team-notifications] read_all fallito:",
          error
        )

        return jsonError(
          "Impossibile segnare le notifiche come lette.",
          500
        )
      }


      return NextResponse.json(
        {
          success:
            true
        }
      )
    }


    return jsonError(
      "Azione non valida."
    )

  } catch (error) {

    console.error(
      "[team-notifications] PATCH unexpected error:",
      error
    )

    return jsonError(
      "Errore durante l'aggiornamento delle notifiche.",
      500
    )
  }
}