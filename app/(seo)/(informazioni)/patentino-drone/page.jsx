import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Patentino Drone | DroneGuard",
  description:
    "Scopri cos'è il patentino drone, quali attestati esistono e come iniziare il percorso per diventare pilota drone professionista."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Formazione piloti drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Patentino Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il patentino drone è uno degli argomenti più cercati da chi vuole
            iniziare a utilizzare i droni in modo professionale. Negli ultimi
            anni il settore è cresciuto rapidamente e sempre più persone
            desiderano lavorare con i droni in ambiti come fotografia aerea,
            videomaking, edilizia, agricoltura, termografia, fotogrammetria e
            monitoraggio del territorio.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Registrati come pilota
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cos'è il patentino drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando si parla di patentino drone si fa generalmente riferimento
            agli attestati necessari per pilotare droni in determinati contesti
            operativi. Il percorso formativo permette di acquisire conoscenze
            sulla normativa, sulla sicurezza del volo e sulla gestione delle
            operazioni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ottenere una formazione adeguata rappresenta un passo importante
            per chi desidera utilizzare il drone in modo più professionale e
            sviluppare competenze spendibili nel mercato del lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            Molti piloti iniziano il proprio percorso proprio partendo dagli
            attestati più richiesti e dall'apprendimento delle regole operative.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Normativa
            </h2>

            <p className="text-gray-300">
              Conoscere regole e responsabilità del pilota.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sicurezza
            </h2>

            <p className="text-gray-300">
              Imparare a gestire le operazioni in modo corretto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Opportunità
            </h2>

            <p className="text-gray-300">
              Accedere al settore professionale dei droni.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché ottenere il patentino drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Sempre più aziende cercano professionisti in grado di utilizzare i
            droni per raccogliere dati, realizzare contenuti video o eseguire
            controlli tecnici. Una formazione adeguata può aiutare a sviluppare
            competenze richieste in numerosi settori.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            I droni vengono utilizzati in edilizia, agricoltura, industria,
            turismo, immobiliare, energia e monitoraggio ambientale. Questo
            rende il settore particolarmente interessante per chi desidera
            acquisire nuove competenze professionali.
          </p>

          <p className="leading-8 text-gray-300">
            Oltre alla formazione teorica è importante accumulare esperienza di
            volo e imparare a utilizzare correttamente la propria attrezzatura.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Dove può lavorare un pilota drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo aver acquisito competenze e formazione, molti piloti scelgono
              di offrire servizi professionali a privati, aziende e studi
              tecnici.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni si specializzano nella produzione video, altri nelle
              ispezioni, nella fotogrammetria, nella termografia o nel
              monitoraggio di infrastrutture e cantieri.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Settori principali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Fotografia aerea</li>
              <li>✅ Riprese video professionali</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Termografia</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Agricoltura di precisione</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Immobiliare ed eventi</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come trovare lavoro come pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una volta completata la formazione, molti piloti cercano nuovi
            clienti attraverso siti web, social network, passaparola e
            marketplace dedicati ai servizi con drone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard permette ai piloti di candidarsi ai lavori pubblicati dai
            clienti e di entrare in contatto con persone che stanno cercando un
            professionista per servizi con drone.
          </p>

          <p className="leading-8 text-gray-300">
            Questo sistema aiuta a creare nuove opportunità lavorative e ad
            aumentare la visibilità dei professionisti del settore.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard per i piloti
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm text-gray-300">
                Crea gratuitamente il tuo profilo.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Completa il profilo
              </h3>
              <p className="text-sm text-gray-300">
                Inserisci competenze e attrezzature.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Cerca lavori
              </h3>
              <p className="text-sm text-gray-300">
                Visualizza le richieste pubblicate.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Candidati
              </h3>
              <p className="text-sm text-gray-300">
                Invia la tua candidatura.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Inizia la tua carriera nel settore drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e scopri nuove opportunità
            professionali nel mondo dei droni.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
              Registrati gratis
            </button>
          </Link>
        </div>

      </section>
    </main>
  )
}