"use client"

import Navbar from "@/components/Navbar"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] text-white">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-14">
        <h1 className="text-5xl font-bold mb-6">
          Privacy Policy & Termini di Utilizzo
        </h1>

        <p className="text-gray-300 text-lg leading-8 mb-10">
          Ultimo aggiornamento: 2026
        </p>

        <div className="space-y-10">

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              1. Informazioni sul servizio
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              DroneGuard è una piattaforma online che mette in contatto clienti e piloti drone professionisti.
              Gli utenti possono pubblicare annunci di lavoro relativi a riprese aeree, mappature,
              termografia, ispezioni, eventi, sorveglianza e altri servizi professionali con droni.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-4">
              I piloti possono candidarsi ai lavori proponendo la propria offerta economica.
              Il cliente seleziona il pilota preferito direttamente dalla piattaforma.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-4">
              DroneGuard NON gestisce pagamenti diretti tra cliente e pilota per i lavori svolti.
              Gli accordi economici relativi ai servizi vengono gestiti autonomamente tra le parti.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              2. Sistema crediti
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              La piattaforma utilizza un sistema di crediti digitali.
            </p>

            <ul className="mt-5 space-y-3 text-gray-300 text-lg list-disc pl-6">
              <li>I piloti possono ricevere crediti gratuiti alla registrazione.</li>
              <li>I crediti possono essere acquistati tramite Stripe.</li>
              <li>I crediti servono esclusivamente per utilizzare funzionalità della piattaforma.</li>
              <li>I crediti non rappresentano valuta reale.</li>
              <li>I crediti acquistati non sono convertibili in denaro.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              3. Dati raccolti
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-4">
              Durante la registrazione e l’utilizzo della piattaforma possono essere raccolti:
            </p>

            <ul className="space-y-3 text-gray-300 text-lg list-disc pl-6">
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

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              4. Utilizzo dei dati
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              I dati raccolti vengono utilizzati esclusivamente per:
            </p>

            <ul className="mt-5 space-y-3 text-gray-300 text-lg list-disc pl-6">
              <li>Creazione e gestione account</li>
              <li>Pubblicazione annunci</li>
              <li>Gestione candidature</li>
              <li>Notifiche e comunicazioni interne</li>
              <li>Gestione crediti e acquisti</li>
              <li>Sicurezza della piattaforma</li>
              <li>Prevenzione abusi e frodi</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              5. Sicurezza
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              DroneGuard utilizza sistemi di autenticazione e protezione dati tramite Supabase,
              connessioni HTTPS e servizi cloud protetti.
            </p>

            <p className="text-gray-300 leading-8 text-lg mt-4">
              Le password non vengono salvate in chiaro.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              6. Responsabilità utenti
            </h2>

            <ul className="space-y-3 text-gray-300 text-lg list-disc pl-6">
              <li>Gli utenti sono responsabili delle informazioni pubblicate.</li>
              <li>I piloti devono possedere le certificazioni richieste dalla normativa vigente.</li>
              <li>DroneGuard non è responsabile degli accordi economici tra utenti.</li>
              <li>DroneGuard non garantisce l’esecuzione dei lavori pubblicati.</li>
            </ul>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              7. Eliminazione account
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Gli utenti possono richiedere la cancellazione del proprio account contattando il supporto o dalla pagina "impostazioni"
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              8. Cookie
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              La piattaforma può utilizzare cookie tecnici e di autenticazione per garantire il corretto funzionamento del servizio.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              9. Modifiche ai termini
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              DroneGuard può aggiornare questa Privacy Policy e i Termini di Utilizzo in qualsiasi momento.
            </p>
          </section>

          <section className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h2 className="text-3xl font-bold mb-4">
              10. Contatti
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Per informazioni o richieste relative alla privacy:
            </p>

            <p className="mt-4 text-green-400 text-xl font-semibold">
              Visita la pagina Contattaci o scrivici direttamente a:
              assistenza@droneguard.it
            </p>
          </section>

        </div>
      </div>
    </div>
  )
}