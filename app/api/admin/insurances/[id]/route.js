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


function hasPermission(
  access,
  permission
) {
  return (
    Array.isArray(
      access?.permissions
    ) &&
    access.permissions.includes(
      permission
    )
  )
}


function isValidUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    String(value || "")
  )
}


function cleanText(
  value,
  maxLength
) {
  return String(value || "")
    .replace(/\u0000/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(
      0,
      maxLength
    )
}


function normalizeDate(
  value
) {
  const raw =
    String(value || "")
      .trim()

  if (!raw) {
    return null
  }

  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(
      raw
    )
  ) {
    return null
  }

  const date =
    new Date(
      `${raw}T00:00:00Z`
    )

  if (
    Number.isNaN(
      date.getTime()
    )
  ) {
    return null
  }

  if (
    date
      .toISOString()
      .slice(0, 10) !==
    raw
  ) {
    return null
  }

  return raw
}


async function getRequestId(
  context
) {
  const params =
    await context.params

  return String(
    params?.id || ""
  ).trim()
}


/*
 * =====================================================
 * PATCH
 * Modifica una polizza verificata.
 * =====================================================
 */
export async function PATCH(
  request,
  context
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


    const requestId =
      await getRequestId(
        context
      )


    if (
      !isValidUuid(
        requestId
      )
    ) {
      return jsonError(
        "Assicurazione non valida."
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


    if (
      !hasPermission(
        access,
        "certifications.review"
      )
    ) {
      return jsonError(
        "Non hai il permesso di modificare assicurazioni.",
        403
      )
    }


    let body

    try {
      body =
        await request.json()
    } catch {
      return jsonError(
        "Dati della richiesta non validi."
      )
    }


    const insuranceCompany =
      cleanText(
        body?.insuranceCompany,
        150
      )


    const policyNumber =
      cleanText(
        body?.policyNumber,
        100
      )


    const validFromRaw =
      String(
        body?.validFrom || ""
      ).trim()


    const validUntilRaw =
      String(
        body?.validUntil || ""
      ).trim()


    const validFrom =
      validFromRaw
        ? normalizeDate(
            validFromRaw
          )
        : null


    const validUntil =
      normalizeDate(
        validUntilRaw
      )


    const reason =
      cleanText(
        body?.reason,
        1000
      )


    if (
      insuranceCompany.length <
      2
    ) {
      return jsonError(
        "Inserisci la compagnia assicurativa."
      )
    }


    if (
      policyNumber.length <
      2
    ) {
      return jsonError(
        "Inserisci il numero della polizza."
      )
    }


    if (
      validFromRaw &&
      !validFrom
    ) {
      return jsonError(
        "La data di inizio non è valida."
      )
    }


    if (!validUntil) {
      return jsonError(
        "Inserisci una data di scadenza valida."
      )
    }


    if (
      validFrom &&
      validFrom >
        validUntil
    ) {
      return jsonError(
        "La data di inizio non può essere successiva alla scadenza."
      )
    }


    if (
      reason.length <
      10
    ) {
      return jsonError(
        "Inserisci una motivazione di almeno 10 caratteri."
      )
    }


    const adminSupabase =
      createAdminSupabaseClient()


    const {
      data: result,
      error
    } =
      await adminSupabase.rpc(
        "admin_update_pilot_insurance",
        {
          p_actor_user_id:
            user.id,

          p_request_id:
            requestId,

          p_insurance_company:
            insuranceCompany,

          p_policy_number:
            policyNumber,

          p_valid_from:
            validFrom,

          p_valid_until:
            validUntil,

          p_reason:
            reason
        }
      )


    if (error) {
      console.error(
        "[admin-insurance-update] RPC failed:",
        error
      )

      const message =
        String(
          error.message || ""
        ).toUpperCase()


      if (
        message.includes(
          "ASSICURAZIONE_NON_TROVATA"
        )
      ) {
        return jsonError(
          "Assicurazione non trovata.",
          404
        )
      }


      if (
        message.includes(
          "ASSICURAZIONE_IN_ATTESA"
        )
      ) {
        return jsonError(
          "Una richiesta in attesa deve essere approvata o rifiutata.",
          409
        )
      }


      if (
        message.includes(
          "ASSICURAZIONE_NON_APPROVATA"
        )
      ) {
        return jsonError(
          "Puoi modificare soltanto un'assicurazione approvata.",
          409
        )
      }


      if (
        message.includes(
          "ASSICURAZIONE_GIA_REGISTRATA"
        )
      ) {
        return jsonError(
          "Esiste già un'assicurazione con questi dati.",
          409
        )
      }


      if (
        message.includes(
          "POLIZZA_SCADUTA"
        )
      ) {
        return jsonError(
          "Non puoi impostare una polizza già scaduta.",
          409
        )
      }


      if (
        message.includes(
          "PERMESSO_ASSICURAZIONI_NEGATO"
        )
      ) {
        return jsonError(
          "Non hai il permesso di modificare questa assicurazione.",
          403
        )
      }


      return jsonError(
        "Non è stato possibile modificare l'assicurazione.",
        500
      )
    }


    return NextResponse.json(
      {
        success: true,
        message:
          "Assicurazione modificata correttamente.",
        result
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
      "[admin-insurance-update] unexpected error:",
      error
    )

    return jsonError(
      "Errore durante la modifica dell'assicurazione.",
      500
    )
  }
}


/*
 * =====================================================
 * DELETE
 * Elimina la registrazione assicurativa.
 * =====================================================
 */
export async function DELETE(
  request,
  context
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


    const requestId =
      await getRequestId(
        context
      )


    if (
      !isValidUuid(
        requestId
      )
    ) {
      return jsonError(
        "Assicurazione non valida."
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


    if (
      !hasPermission(
        access,
        "certifications.review"
      )
    ) {
      return jsonError(
        "Non hai il permesso di eliminare assicurazioni.",
        403
      )
    }


    let body

    try {
      body =
        await request.json()
    } catch {
      return jsonError(
        "Dati della richiesta non validi."
      )
    }


    const reason =
      cleanText(
        body?.reason,
        1000
      )


    if (
      reason.length <
      10
    ) {
      return jsonError(
        "Inserisci una motivazione di almeno 10 caratteri."
      )
    }


    const adminSupabase =
      createAdminSupabaseClient()


    const {
      data: result,
      error
    } =
      await adminSupabase.rpc(
        "admin_delete_pilot_insurance",
        {
          p_actor_user_id:
            user.id,

          p_request_id:
            requestId,

          p_reason:
            reason
        }
      )


    if (error) {
      console.error(
        "[admin-insurance-delete] RPC failed:",
        error
      )

      const message =
        String(
          error.message || ""
        ).toUpperCase()


      if (
        message.includes(
          "ASSICURAZIONE_NON_TROVATA"
        )
      ) {
        return jsonError(
          "Assicurazione non trovata.",
          404
        )
      }


      if (
        message.includes(
          "PERMESSO_ASSICURAZIONI_NEGATO"
        )
      ) {
        return jsonError(
          "Non hai il permesso di eliminare questa assicurazione.",
          403
        )
      }


      if (
        message.includes(
          "MOTIVAZIONE_NON_VALIDA"
        )
      ) {
        return jsonError(
          "Inserisci una motivazione valida.",
          400
        )
      }


      return jsonError(
        "Non è stato possibile eliminare l'assicurazione.",
        500
      )
    }


    /*
     * Se il documento appartiene al bucket
     * assicurazioni, lo eliminiamo.
     *
     * Se deriva dal documento ENAC,
     * la RPC restituisce should_delete_file=false.
     */
    let storageWarning =
      null


    if (
      result
        ?.should_delete_file ===
        true &&
      result
        ?.storage_bucket &&
      result
        ?.storage_path
    ) {

      const {
        error:
          storageError
      } =
        await adminSupabase
          .storage
          .from(
            result
              .storage_bucket
          )
          .remove([
            result
              .storage_path
          ])


      if (storageError) {
        console.error(
          "[admin-insurance-delete] storage cleanup failed:",
          storageError
        )

        /*
         * La registrazione DB è già stata
         * eliminata correttamente.
         * Non trasformiamo questo in errore 500.
         */
        storageWarning =
          "La registrazione è stata eliminata, ma il file dovrà essere ripulito dallo Storage."
      }
    }


    return NextResponse.json(
      {
        success: true,

        message:
          "Assicurazione eliminata correttamente.",

        warning:
          storageWarning,

        result
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
      "[admin-insurance-delete] unexpected error:",
      error
    )

    return jsonError(
      "Errore durante l'eliminazione dell'assicurazione.",
      500
    )
  }
}