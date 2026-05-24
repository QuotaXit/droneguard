"use client"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import {
  Plane,
  Briefcase,
  UserPlus,
  Search,
  Send,
  CheckCircle2,
  CreditCard,
  ShieldCheck,
  Users,
  ClipboardList,
  MapPin,
  Bell,
  ArrowRight
} from "lucide-react"

export default function ComeFunzionaPage() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] px-4 py-12 md:px-10">
        <div className="mx-auto max-w-7xl">
          <section className="rounded-3xl border border-white/10 bg-[#140a3a]/90 p-8 md:p-12">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-400">
                DroneGuard
              </p>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Il marketplace per trovare o offrire servizi con drone
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                DroneGuard collega clienti che hanno bisogno di riprese,
                ispezioni, mappature, termografia, sorveglianza o altri servizi
                professionali con piloti drone disponibili a candidarsi ai lavori.
              </p>
            </div>
          </section>

          <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-green-400">
                <Plane size={28} />
              </div>

              <h2 className="text-3xl font-bold">
                Sei un pilota?
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Registrati come pilota, completa il tuo profilo professionale,
                inserisci drone, certificazioni, esperienza, città e servizi
                offerti. Una volta dentro, puoi consultare la bacheca lavori e
                candidarti agli annunci pubblicati dai clienti.
              </p>

              <div className="mt-6 space-y-4">
                <InfoRow icon={<UserPlus size={20} />} text="Crea il tuo profilo pilota" />
                <InfoRow icon={<Search size={20} />} text="Cerca lavori disponibili nella bacheca" />
                <InfoRow icon={<Send size={20} />} text="Invia la tua candidatura con il prezzo proposto" />
                <InfoRow icon={<CheckCircle2 size={20} />} text="Se il cliente ti sceglie, ricevi i dati del lavoro" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#140a3a] p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                <Briefcase size={28} />
              </div>

              <h2 className="text-3xl font-bold">
                Sei un cliente?
              </h2>

              <p className="mt-4 leading-7 text-gray-300">
                Pubblica un lavoro indicando servizio richiesto, luogo, data,
                descrizione e dettagli principali. I piloti interessati potranno
                candidarsi. Tu potrai vedere le candidature, confrontare i profili
                e scegliere il pilota più adatto.
              </p>

              <div className="mt-6 space-y-4">
                <InfoRow icon={<ClipboardList size={20} />} text="Pubblica un annuncio di lavoro" />
                <InfoRow icon={<Users size={20} />} text="Ricevi candidature dai piloti" />
                <InfoRow icon={<MapPin size={20} />} text="Invia i dati precisi solo al pilota scelto" />
                <InfoRow icon={<Bell size={20} />} text="Gestisci tutto dalla dashboard cliente" />
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <h2 className="text-3xl font-bold">
              Come funziona passo dopo passo
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
              <StepCard
                number="01"
                title="Registrazione"
                text="Scegli se registrarti come pilota o come cliente. Ogni ruolo ha una dashboard dedicata."
              />

              <StepCard
                number="02"
                title="Profilo o annuncio"
                text="Il pilota completa il profilo. Il cliente pubblica un lavoro con le informazioni principali."
              />

              <StepCard
                number="03"
                title="Candidatura"
                text="Il pilota vede il lavoro, propone la sua offerta e invia la candidatura."
              />

              <StepCard
                number="04"
                title="Scelta finale"
                text="Il cliente valuta le candidature e accetta il pilota che ritiene più adatto."
              />
            </div>
          </section>

          <section className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <FeatureCard
              icon={<CreditCard size={26} />}
              title="Sistema a crediti"
              text="DroneGuard usa i crediti per accedere alle funzioni della piattaforma. I piloti possono ricevere crediti iniziali e acquistarne altri quando necessario."
            />

            <FeatureCard
              icon={<ShieldCheck size={26} />}
              title="Profili professionali"
              text="Ogni pilota può mostrare foto profilo, esperienza, certificazioni, drone utilizzato, città, servizi e biografia."
            />

            <FeatureCard
              icon={<CheckCircle2 size={26} />}
              title="Gestione chiara"
              text="Dashboard separate per piloti e clienti, storico lavori, candidature, dati lavoro, notifiche e riepiloghi."
            />
          </section>

          <section className="mt-10 rounded-3xl border border-white/10 bg-[#140a3a] p-8 md:p-10">
            <h2 className="text-3xl font-bold">
              Quali servizi puoi trovare su DroneGuard?
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300 md:grid-cols-4">
              <ServiceItem text="Mappatura" />
              <ServiceItem text="Fotogrammetria" />
              <ServiceItem text="Matrimoni" />
              <ServiceItem text="Eventi" />
              <ServiceItem text="Sorveglianza" />
              <ServiceItem text="Ispezioni tetti" />
              <ServiceItem text="Ispezioni industriali" />
              <ServiceItem text="Agricoltura" />
              <ServiceItem text="Video cinematici" />
              <ServiceItem text="Immobiliare" />
              <ServiceItem text="Monitoraggio cantieri" />
              <ServiceItem text="Termografia" />
              <ServiceItem text="Ricerca dispersi" />
              <ServiceItem text="FPV" />
              <ServiceItem text="Pubblicità" />
              <ServiceItem text="Turismo" />
            </div>
          </section>

          <section className="mt-10 rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">
            <h2 className="text-3xl font-bold">
              DroneGuard
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Che tu sia un pilota in cerca di nuovi lavori o un cliente che
              cerca un servizio con drone, DroneGuard ti aiuta a gestire tutto
              in modo semplice, veloce e professionale.
            </p>

          </section>
        </div>
      </main>
    </div>
  )
}

function InfoRow({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-200">
      <span className="text-green-400">
        {icon}
      </span>
      <span>{text}</span>
    </div>
  )
}

function StepCard({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
      <p className="text-sm font-bold text-green-400">
        {number}
      </p>

      <h3 className="mt-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {text}
      </p>
    </div>
  )
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-green-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-400">
        {text}
      </p>
    </div>
  )
}

function ServiceItem({ text }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
      {text}
    </div>
  )
}