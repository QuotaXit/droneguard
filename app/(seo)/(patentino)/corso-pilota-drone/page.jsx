import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Corso Pilota Drone | DroneGuard",
  description:
    "Scopri come funziona un corso pilota drone, quali competenze si apprendono e come iniziare una carriera nel settore dei droni professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Formazione professionale drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Corso Pilota Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Frequentare un corso pilota drone rappresenta uno dei primi passi
            per chi desidera entrare nel settore dei droni professionali.
            Attraverso la formazione è possibile acquisire competenze teoriche
            e pratiche utili per operare in sicurezza e comprendere la normativa
            che regola le attività con drone.
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
            Perché seguire un corso pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il mercato dei droni continua a crescere e sempre più aziende
            utilizzano queste tecnologie per attività professionali. Un corso
            pilota drone aiuta a comprendere le regole operative, la sicurezza
            del volo e le procedure necessarie per gestire correttamente un
            drone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Oltre alla teoria, la formazione consente di sviluppare una maggiore
            consapevolezza nell'utilizzo delle attrezzature e nella gestione dei
            diversi scenari operativi.
          </p>

          <p className="leading-8 text-gray-300">
            Una preparazione adeguata rappresenta una base importante per chi
            vuole trasformare la passione per i droni in una professione.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Normativa
            </h2>

            <p className="text-gray-300">
              Comprendere regole e responsabilità operative.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sicurezza
            </h2>

            <p className="text-gray-300">
              Imparare a pianificare e gestire correttamente i voli.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Opportunità professionali
            </h2>

            <p className="text-gray-300">
              Accedere a nuovi settori lavorativi con drone.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Cosa può fare un pilota drone professionista
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo la formazione molti piloti scelgono di specializzarsi in uno
              o più settori. Alcuni lavorano nella produzione video, altri nelle
              ispezioni tecniche, nella fotogrammetria o nell'agricoltura di
              precisione.
            </p>

            <p className="leading-8 text-gray-300">
              La versatilità dei droni permette di offrire servizi molto diversi
              tra loro e di sviluppare competenze specifiche in base ai propri
              interessi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Settori principali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video professionali</li>
              <li>✅ Fotografia aerea</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Termografia</li>
              <li>✅ Fotogrammetria</li>
              <li>✅ Agricoltura di precisione</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Eventi e matrimoni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come iniziare a lavorare con i droni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una volta completata la formazione, molti piloti iniziano a creare
            un portfolio, costruire una rete di contatti e promuovere i propri
            servizi. Trovare clienti rappresenta spesso la sfida principale per
            chi entra nel settore.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per questo motivo molti professionisti utilizzano marketplace e
            piattaforme dedicate per entrare in contatto con persone che stanno
            cercando servizi con drone.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard nasce proprio per aiutare i piloti a trovare nuove
            opportunità lavorative e candidarsi ai progetti pubblicati dai
            clienti.
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
                Crea gratuitamente il tuo account.
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
                Invia la tua candidatura ai clienti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Inizia il tuo percorso da pilota drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e scopri nuove opportunità
            nel settore dei droni professionali.
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