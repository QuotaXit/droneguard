"use client"

import {
  useState
} from "react"

import {
  BadgeCheck,
  ShieldCheck
} from "lucide-react"

import CertificationsManagementClient from "./CertificationsManagementClient"
import PilotCertificationsClient from "./PilotCertificationsClient"
import InsurancesManagementClient from "./InsurancesManagementClient"
import ManualInsuranceClient from "./ManualInsuranceClient"


export default function VerificationManagementClient({
  canReview
}) {

  const [
    activeTab,
    setActiveTab
  ] = useState(
    "certifications"
  )

  const [
    insuranceRefreshKey,
    setInsuranceRefreshKey
  ] = useState(0)


  function refreshInsurances() {
    setInsuranceRefreshKey(
      (
        current
      ) =>
        current + 1
    )
  }


  return (
    <div className="space-y-6">

      <section className="rounded-2xl border border-white/10 bg-[#0B1028] p-2">

        <div className="grid grid-cols-2 gap-2">

          <button
            type="button"
            onClick={() =>
              setActiveTab(
                "certifications"
              )
            }
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
              activeTab ===
              "certifications"
                ? "bg-green-500 text-black"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <BadgeCheck
              size={18}
            />

            Certificazioni
          </button>


          <button
            type="button"
            onClick={() =>
              setActiveTab(
                "insurances"
              )
            }
            className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition ${
              activeTab ===
              "insurances"
                ? "bg-green-500 text-black"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <ShieldCheck
              size={18}
            />

            Assicurazioni
          </button>

        </div>

      </section>


      {activeTab ===
      "certifications" ? (

        <div className="space-y-10">

          <CertificationsManagementClient
            canReview={
              canReview
            }
          />

          <PilotCertificationsClient
            canReview={
              canReview
            }
          />

        </div>

      ) : (

        <div className="space-y-6">

          <ManualInsuranceClient
            canReview={
              canReview
            }
            onCreated={
              refreshInsurances
            }
          />

          <InsurancesManagementClient
            key={
              insuranceRefreshKey
            }
            canReview={
              canReview
            }
          />

        </div>
      )}

    </div>
  )
}