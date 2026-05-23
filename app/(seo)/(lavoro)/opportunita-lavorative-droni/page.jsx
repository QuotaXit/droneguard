import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Opportunità Lavorative Droni | DroneGuard",
  description:
    "Scopri le opportunità lavorative nel settore droni e come trovare clienti per riprese, ispezioni, rilievi e servizi professionali con DroneGuard."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Carriera con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Opportunità Lavorative Droni
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il settore dei droni continua a crescere e sempre più aziende,
            professionisti e privati utilizzano servizi aerei per fotografie,
            video, monitoraggi, controlli tecnici, rilievi e documentazione.
            Questo crea nuove opportunità lavorative per i piloti drone che
            vogliono trasformare una passione o una competenza tecnica in una
            vera attività professionale. Con DroneGuard puoi entrare in contatto
            con clienti che pubblicano richieste e cercano operatori drone per
            svolgere lavori in tutta Italia.
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
            Perché il settore dei droni è in crescita
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Negli ultimi anni i droni sono diventati strumenti di lavoro sempre
            più diffusi. Le aziende cercano soluzioni rapide, sicure ed
            efficienti per raccogliere immagini, controllare strutture,
            documentare cantieri e realizzare contenuti promozionali. In molti
            casi il drone permette di ridurre tempi e costi rispetto ai metodi
            tradizionali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il settore degli eventi, del turismo e del mercato immobiliare
            utilizza sempre più spesso riprese aeree per valorizzare luoghi,
            attività e proprietà. Questo significa che un pilota drone può
            trovare opportunità in ambiti molto diversi tra loro.
          </p>

          <p className="leading-8 text-gray-300">
            Le opportunità lavorative non riguardano soltanto chi realizza video
            spettacolari, ma anche chi offre servizi tecnici, documentazione e
            supporto operativo a professionisti e aziende.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Settore creativo
            </h2>

            <p className="text-gray-300">
              Riprese video, matrimoni, eventi, turismo, marketing e contenuti
              promozionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Settore tecnico
            </h2>

            <p className="text-gray-300">
              Ispezioni, monitoraggi, controlli strutturali e documentazione
              professionale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Settore operativo
            </h2>

            <p className="text-gray-300">
              Supporto per edilizia, agricoltura, rilievi e gestione del
              territorio.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Dove trovare opportunità lavorative con i droni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molti piloti iniziano cercando clienti attraverso passaparola,
              social network o collaborazioni locali. Queste strategie possono
              funzionare, ma spesso richiedono molto tempo prima di ottenere
              risultati concreti.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Un'alternativa consiste nell'utilizzare piattaforme dedicate che
              mettono in contatto clienti e operatori drone. In questo modo il
              pilota può visualizzare richieste già pubblicate e candidarsi solo
              ai lavori che corrispondono alle proprie competenze e alla propria
              area geografica.
            </p>

            <p className="leading-8 text-gray-300">
              Questo approccio permette di concentrarsi su opportunità reali e
              ridurre il tempo dedicato alla ricerca di nuovi contatti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Opportunità più richieste
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Video aziendali con drone</li>
              <li>✅ Riprese matrimonio</li>
              <li>✅ Fotografia immobiliare</li>
              <li>✅ Ispezioni tetti e facciate</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Controllo impianti fotovoltaici</li>
              <li>✅ Rilievi e mappature</li>
              <li>✅ Servizi per agricoltura</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come aumentare le possibilità di trovare lavoro
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un profilo professionale completo è uno degli strumenti più
            importanti per ottenere nuovi incarichi. I clienti vogliono sapere
            quali servizi offri, dove lavori e quali risultati puoi fornire.
            Una descrizione chiara e ben organizzata aiuta a trasmettere
            affidabilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile anche specializzarsi in alcuni settori specifici. Alcuni
            piloti si concentrano su matrimoni ed eventi, altri su immobili,
            edilizia, ispezioni o agricoltura. Comunicare chiaramente le proprie
            competenze rende più semplice essere scelti dai clienti.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni candidatura dovrebbe essere personalizzata e dimostrare che hai
            compreso la richiesta pubblicata dal cliente.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrazione
              </h3>
              <p className="text-sm text-gray-300">
                Crea gratuitamente il tuo account pilota.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Profilo
              </h3>
              <p className="text-sm text-gray-300">
                Inserisci competenze, città e servizi offerti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Richieste
              </h3>
              <p className="text-sm text-gray-300">
                Consulta le richieste pubblicate dai clienti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Lavoro
              </h3>
              <p className="text-sm text-gray-300">
                Candidati ai progetti più interessanti per te.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Costruire una carriera nel settore drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le opportunità lavorative con i droni possono crescere nel tempo.
            Ogni nuovo incarico può portare esperienza, nuovi contatti e nuove
            collaborazioni. Per questo è importante lavorare con serietà,
            rispettare gli accordi e mantenere una comunicazione professionale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche i lavori più piccoli possono diventare occasioni per ampliare
            il portfolio e dimostrare le proprie capacità. Un cliente
            soddisfatto può tornare a richiedere nuovi servizi o consigliare il
            pilota ad altre persone.
          </p>

          <p className="leading-8 text-gray-300">
            Con costanza e professionalità è possibile costruire una presenza
            sempre più solida nel mercato dei servizi con drone.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Scopri nuove opportunità con DroneGuard
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente, completa il tuo profilo e candidati alle
            richieste pubblicate dai clienti che cercano piloti drone.
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