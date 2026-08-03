import { redirect } from "next/navigation"

import CertificationsManagementClient from "./CertificationsManagementClient"
import { requireTeamAccess } from "@/lib/team/access"

export const dynamic = "force-dynamic"

export default async function CertificationsPage() {
  const {
    permissions
  } = await requireTeamAccess()

  const canView =
    permissions.includes(
      "certifications.view"
    )

  const canReview =
    permissions.includes(
      "certifications.review"
    )

  if (!canView) {
    redirect("/admin")
  }

  return (
    <CertificationsManagementClient
      canReview={canReview}
    />
  )
}