import "server-only"

import { createClient } from "@supabase/supabase-js"

export function createAdminSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL

  const supabaseSecretKey =
    process.env.SUPABASE_SECRET_KEY ||
    process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    throw new Error(
      "Variabile NEXT_PUBLIC_SUPABASE_URL mancante."
    )
  }

  if (!supabaseSecretKey) {
    throw new Error(
      "Variabile SUPABASE_SECRET_KEY mancante."
    )
  }

  return createClient(
    supabaseUrl,
    supabaseSecretKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
      }
    }
  )
}