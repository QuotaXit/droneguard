import {
  NextResponse
} from "next/server"

import {
  getTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

export const dynamic =
  "force-dynamic"

export const runtime =
  "nodejs"

const ROLE_KEY_PATTERN =
  /^[a-z][a-z0-9_]{1,49}$/

const PERMISSION_KEY_PATTERN =
  /^[a-z][a-z0-9_.]{2,99}$/

const EDITABLE_ROLES =
  new Set([
    "admin",
    "support",
    "finance",
    "content",
    "technical"
  ])

function jsonError(
  message,
  status = 400,
  extra = {}
) {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...extra
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

function hasValidOrigin(request) {
  const origin =
    request.headers.get("origin")

  if (!origin) {
    return false
  }

  try {
    return (
      new URL(origin).origin ===
      new URL(request.url).origin
    )
  } catch {
    return false
  }
}

function normalizePermissionKeys(
  value
) {
  if (!Array.isArray(value)) {
    return null
  }

  const normalized =
    value
      .map((permissionKey) =>
        String(
          permissionKey || ""
        )
          .trim()
          .toLowerCase()
      )
      .filter(Boolean)

  return [
    ...new Set(normalized)
  ].sort()
}

export async function GET() {
  const {
    user,
    access
  } = await getTeamAccess()

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

  if (
    !permissions.includes(
      "team.permissions.manage"
    )
  ) {
    return jsonError(
      "Non hai il permesso di gestire i permessi dei ruoli.",
      403
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  const [
    rolesResult,
    catalogResult,
    assignmentsResult,
    membersResult
  ] = await Promise.all([
    adminSupabase
      .from("team_roles")
      .select(`
        role_key,
        name,
        description,
        is_system
      `)
      .neq(
        "role_key",
        "owner"
      )
      .order(
        "name",
        {
          ascending: true
        }
      ),

    adminSupabase
      .from("team_permissions")
      .select(`
        permission_key,
        name,
        description,
        category
      `)
      .order(
        "category",
        {
          ascending: true
        }
      )
      .order(
        "name",
        {
          ascending: true
        }
      ),

    adminSupabase
      .from(
        "team_role_permissions"
      )
      .select(`
        role_key,
        permission_key
      `)
      .neq(
        "role_key",
        "owner"
      )
      .order(
        "role_key",
        {
          ascending: true
        }
      )
      .order(
        "permission_key",
        {
          ascending: true
        }
      ),

    adminSupabase
      .from("team_members")
      .select(`
        role_key,
        active
      `)
      .neq(
        "role_key",
        "owner"
      )
  ])

  if (rolesResult.error) {
    console.error(
      "[team-permissions] Errore caricamento ruoli:",
      rolesResult.error
    )

    return jsonError(
      "Impossibile caricare i ruoli Team.",
      500
    )
  }

  if (catalogResult.error) {
    console.error(
      "[team-permissions] Errore caricamento catalogo:",
      catalogResult.error
    )

    return jsonError(
      "Impossibile caricare il catalogo dei permessi.",
      500
    )
  }

  if (assignmentsResult.error) {
    console.error(
      "[team-permissions] Errore caricamento assegnazioni:",
      assignmentsResult.error
    )

    return jsonError(
      "Impossibile caricare i permessi assegnati.",
      500
    )
  }

  if (membersResult.error) {
    console.error(
      "[team-permissions] Errore caricamento membri:",
      membersResult.error
    )

    return jsonError(
      "Impossibile calcolare i membri associati ai ruoli.",
      500
    )
  }

  const assignmentMap =
    new Map()

  for (
    const assignment of
    assignmentsResult.data || []
  ) {
    if (
      !assignmentMap.has(
        assignment.role_key
      )
    ) {
      assignmentMap.set(
        assignment.role_key,
        []
      )
    }

    assignmentMap
      .get(
        assignment.role_key
      )
      .push(
        assignment.permission_key
      )
  }

  const memberCountMap =
    new Map()

  const activeMemberCountMap =
    new Map()

  for (
    const member of
    membersResult.data || []
  ) {
    memberCountMap.set(
      member.role_key,
      (
        memberCountMap.get(
          member.role_key
        ) || 0
      ) + 1
    )

    if (member.active) {
      activeMemberCountMap.set(
        member.role_key,
        (
          activeMemberCountMap.get(
            member.role_key
          ) || 0
        ) + 1
      )
    }
  }

  const roles =
    (rolesResult.data || [])
      .filter((role) =>
        EDITABLE_ROLES.has(
          role.role_key
        )
      )
      .map((role) => ({
        roleKey:
          role.role_key,

        name:
          role.name,

        description:
          role.description || "",

        isSystem:
          Boolean(
            role.is_system
          ),

        permissions:
          assignmentMap.get(
            role.role_key
          ) || [],

        memberCount:
          memberCountMap.get(
            role.role_key
          ) || 0,

        activeMemberCount:
          activeMemberCountMap.get(
            role.role_key
          ) || 0
      }))

  const permissionCatalog =
    (catalogResult.data || [])
      .filter(
        (permission) =>
          permission.permission_key !==
            "team.owner.manage" &&
          permission.permission_key !==
            "team.permissions.manage"
      )
      .map((permission) => ({
        permissionKey:
          permission.permission_key,

        name:
          permission.name,

        description:
          permission.description || "",

        category:
          String(
            permission.category || "other"
          )
            .trim()
            .toLowerCase()
      }))

  return NextResponse.json(
    {
      success: true,
      roles,
      permissionCatalog
    },
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}

export async function PUT(
  request
) {
  if (!hasValidOrigin(request)) {
    return jsonError(
      "Origine della richiesta non autorizzata.",
      403
    )
  }

  const {
    user,
    access
  } = await getTeamAccess()

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

  if (
    !permissions.includes(
      "team.permissions.manage"
    )
  ) {
    return jsonError(
      "Non hai il permesso di modificare i permessi dei ruoli.",
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

  const roleKey =
    String(
      body?.roleKey || ""
    )
      .trim()
      .toLowerCase()

  const permissionKeys =
    normalizePermissionKeys(
      body?.permissionKeys
    )

  const reason =
    String(
      body?.reason || ""
    )
      .replace(/\u0000/g, "")
      .trim()
      .slice(0, 500)

  if (
    !ROLE_KEY_PATTERN.test(
      roleKey
    ) ||
    !EDITABLE_ROLES.has(
      roleKey
    )
  ) {
    return jsonError(
      "Ruolo Team non modificabile."
    )
  }

  if (!permissionKeys) {
    return jsonError(
      "La lista dei permessi non è valida."
    )
  }

  if (
    permissionKeys.length > 100
  ) {
    return jsonError(
      "Sono stati inviati troppi permessi."
    )
  }

  const invalidPermissionKeys =
    permissionKeys.filter(
      (permissionKey) =>
        !PERMISSION_KEY_PATTERN.test(
          permissionKey
        )
    )

  if (
    invalidPermissionKeys.length > 0
  ) {
    return jsonError(
      "Uno o più permessi non sono validi."
    )
  }

  if (
    permissionKeys.includes(
      "team.owner.manage"
    ) ||
    permissionKeys.includes(
      "team.permissions.manage"
    )
  ) {
    return jsonError(
      "I permessi riservati all'Owner non possono essere assegnati.",
      403
    )
  }

  if (
    reason.length < 10 ||
    reason.length > 500
  ) {
    return jsonError(
      "La motivazione deve contenere da 10 a 500 caratteri."
    )
  }

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data,
    error
  } = await adminSupabase
    .rpc(
      "admin_replace_team_role_permissions",
      {
        p_actor_user_id:
          user.id,

        p_role_key:
          roleKey,

        p_permission_keys:
          permissionKeys,

        p_reason:
          reason
      }
    )
    .single()

  if (error) {
    console.error(
      "[team-permissions] Errore aggiornamento atomico:",
      error
    )

    const message =
      String(
        error.message || ""
      ).toUpperCase()

    if (
      message.includes(
        "GESTIONE_PERMESSI_RISERVATA_OWNER"
      ) ||
      message.includes(
        "OPERATORE_NON_AUTORIZZATO_GESTIONE_PERMESSI"
      )
    ) {
      return jsonError(
        "La gestione dei permessi è riservata all'Owner.",
        403
      )
    }

    if (
      message.includes(
        "OPERATORE_TEAM_NON_ATTIVO"
      )
    ) {
      return jsonError(
        "Il tuo account Team non è attivo.",
        403
      )
    }

    if (
      message.includes(
        "RUOLO_TEAM_NON_TROVATO"
      )
    ) {
      return jsonError(
        "Ruolo Team non trovato.",
        404
      )
    }

    if (
      message.includes(
        "PERMESSI_OWNER_NON_MODIFICABILI"
      )
    ) {
      return jsonError(
        "I permessi del ruolo Owner non possono essere modificati.",
        403
      )
    }

    if (
      message.includes(
        "PERMESSI_TEAM_NON_VALIDI"
      )
    ) {
      return jsonError(
        "Uno o più permessi non esistono nel catalogo.",
        400
      )
    }

    if (
      message.includes(
        "PERMESSI_RISERVATI_OWNER"
      )
    ) {
      return jsonError(
        "Non puoi assegnare permessi riservati all'Owner.",
        403
      )
    }

    if (
      message.includes(
        "MOTIVAZIONE_TEAM_NON_VALIDA"
      )
    ) {
      return jsonError(
        "La motivazione deve contenere da 10 a 500 caratteri."
      )
    }

    return jsonError(
      "Impossibile aggiornare i permessi del ruolo.",
      500
    )
  }

  if (!data) {
    return jsonError(
      "L'aggiornamento non ha restituito un risultato valido.",
      500
    )
  }

  return NextResponse.json(
    {
      success: true,

      result: {
        changed:
          Boolean(data.changed),

        roleKey:
          data.role_key,

        roleName:
          data.role_name,

        permissions:
          Array.isArray(
            data.permissions
          )
            ? data.permissions
            : [],

        added:
          Array.isArray(
            data.added
          )
            ? data.added
            : [],

        removed:
          Array.isArray(
            data.removed
          )
            ? data.removed
            : []
      },

      message:
        data.changed
          ? "Permessi del ruolo aggiornati correttamente."
          : "I permessi del ruolo erano già aggiornati."
    },
    {
      headers: {
        "Cache-Control":
          "private, no-store, max-age=0"
      }
    }
  )
}