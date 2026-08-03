import { redirect } from "next/navigation"

export default async function LegacyJobDetailPage({
  params
}) {
  const { id } = await params

  redirect(
    `/dashboard-client/jobs/${encodeURIComponent(id)}/candidates`
  )
}