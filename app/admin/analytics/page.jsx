import {
  requireTeamAccess
} from "@/lib/team/access"

import {
  createAdminSupabaseClient
} from "@/lib/supabase/admin"

import AnalyticsDashboardClient from "./AnalyticsDashboardClient"

export const dynamic =
  "force-dynamic"

export default async function AnalyticsPage() {
  await requireTeamAccess(
    "dashboard.view"
  )

  const adminSupabase =
    createAdminSupabaseClient()

  const {
    data,
    error
  } =
    await adminSupabase.rpc(
      "get_site_analytics_dashboard"
    )

  if (error) {
    console.error(
      "[analytics-admin] load failed:",
      error
    )
  }

  return (
    <AnalyticsDashboardClient
      data={
        data || null
      }
      hasError={
        Boolean(error)
      }
    />
  )
}