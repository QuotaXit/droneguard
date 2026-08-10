import {
  redirect
} from "next/navigation"

import {
  requireTeamAccess
} from "@/lib/team/access"

import VerificationManagementClient from "./VerificationManagementClient"


export const dynamic =
  "force-dynamic"


export default async function CertificationsPage() {

  const {
    permissions
  } =
    await requireTeamAccess()


  const canView =
    permissions.includes(
      "certifications.view"
    )


  const canReview =
    permissions.includes(
      "certifications.review"
    )


  if (!canView) {
    redirect(
      "/admin"
    )
  }


  return (
    <VerificationManagementClient
      canReview={
        canReview
      }
    />
  )
}