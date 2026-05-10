"use client"

import Navbar from "@/components/Navbar"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] text-white">
      <Navbar />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Privacy Policy & Termini di Utilizzo
        </h1>

        <p className="mb-10 text-base leading-8 text-gray-300 sm:text-lg">
          Ultimo aggiornamento: 2026
        </p>

        <div className="space-y-10">

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              1. Informazioni sul servizio
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              DroneGuard è una piattaforma online che mette in contatto clienti e piloti drone professionisti.
              Gli utenti possono pubblicare annunci di lavoro relativi a riprese aeree, mappature,
              termografia, ispezioni, eventi, sorveglianza e altri servizi professionali con droni.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
              I piloti possono candidarsi ai lavori proponendo la propria offerta economica.
              Il cliente seleziona il pilota preferito direttamente dalla piattaforma.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
              DroneGuard NON gestisce pagamenti diretti tra cliente e pilota per i lavori svolti.
              Gli accordi economici relativi ai servizi vengono gestiti autonomamente tra le parti.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              2. Sistema crediti
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              La piattaforma utilizza un sistema di crediti digitali.
            </p>

            <ul className="mt-5 space-y-3 pl-6 text-base text-gray-300 sm:text-lg list-disc">
              <li>I piloti possono ricevere crediti gratuiti alla registrazione.</li>
              <li>I crediti possono essere acquistati tramite Stripe.</li>
              <li>I crediti servono esclusivamente per utilizzare funzionalità della piattaforma.</li>
              <li>I crediti non rappresentano valuta reale.</li>
              <li>I crediti acquistati non sono convertibili in denaro.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              3. Dati raccolti
            </h2>

            <p className="mb-4 text-base leading-8 text-gray-300 sm:text-lg">
              Durante la registrazione e l’utilizzo della piattaforma possono essere raccolti:
            </p>

            <ul className="space-y-3 pl-6 text-base text-gray-300 sm:text-lg list-disc">
              <li>Nome</li>
              <li>Cognome</li>
              <li>Data di nascita</li>
              <li>Indirizzo email</li>
              <li>Password criptata</li>
              <li>Città</li>
              <li>Informazioni professionali</li>
              <li>Certificazioni drone</li>
              <li>Modelli di drone utilizzati</li>
              <li>Partita IVA e ragione sociale (per clienti business)</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              4. Utilizzo dei dati
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              I dati raccolti vengono utilizzati esclusivamente per:
            </p>

            <ul className="mt-5 space-y-3 pl-6 text-base text-gray-300 sm:text-lg list-disc">
              <li>Creazione e gestione account</li>
              <li>Pubblicazione annunci</li>
              <li>Gestione candidature</li>
              <li>Notifiche e comunicazioni interne</li>
              <li>Gestione crediti e acquisti</li>
              <li>Sicurezza della piattaforma</li>
              <li>Prevenzione abusi e frodi</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              5. Sicurezza
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              DroneGuard utilizza sistemi di autenticazione e protezione dati tramite Supabase,
              connessioni HTTPS e servizi cloud protetti.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
              Le password non vengono salvate in chiaro.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              6. Responsabilità utenti
            </h2>

            <ul className="space-y-3 pl-6 text-base text-gray-300 sm:text-lg list-disc">
              <li>Gli utenti sono responsabili delle informazioni pubblicate.</li>
              <li>I piloti devono possedere le certificazioni richieste dalla normativa vigente.</li>
              <li>DroneGuard non è responsabile degli accordi economici tra utenti.</li>
              <li>DroneGuard non garantisce l’esecuzione dei lavori pubblicati.</li>
            </ul>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              7. Eliminazione account
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              Gli utenti possono richiedere la cancellazione del proprio account contattando il supporto o dalla pagina "impostazioni"
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              8. Cookie
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              La piattaforma può utilizzare cookie tecnici e di autenticazione per garantire il corretto funzionamento del servizio.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              9. Modifiche ai termini
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              DroneGuard può aggiornare questa Privacy Policy e i Termini di Utilizzo in qualsiasi momento.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              10. Contatti
            </h2>

            <p className="text-base leading-8 text-gray-300 sm:text-lg">
              Per informazioni o richieste relative alla privacy:
            </p>

            <p className="mt-4 break-words text-lg font-semibold text-green-400 sm:text-xl">
              Visita la pagina Contattaci o scrivici direttamente a:
              assistenza@droneguard.it
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}
