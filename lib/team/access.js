import { redirect } from "next/navigation"
import { createServerSupabaseClient } from "@/lib/supabase/server"

export async function getTeamAccess() {
  const supabase = await createServerSupabaseClient()

  const {
    data: { user },
    error: userError
  } = await supabase.auth.getUser()

  if (userError || !user) {
    return {
      user: null,
      access: null
    }
  }

  const { data: access, error: accessError } = await supabase
    .rpc("get_my_team_access")
    .maybeSingle()

  if (accessError || !access?.active) {
    return {
      user,
      access: null
    }
  }

  return {
    user,
    access
  }
}

export async function requireTeamAccess(requiredPermission = null) {
  const { user, access } = await getTeamAccess()

  if (!user) {
    redirect("/login")
  }

  if (!access) {
    redirect("/")
  }

  const permissions = Array.isArray(access.permissions)
    ? access.permissions
    : []

  if (
    requiredPermission &&
    !permissions.includes(requiredPermission)
  ) {
    redirect("/admin")
  }

  return {
    user,
    access,
    permissions
  }
}