import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Quanto Guadagna un Pilota Drone | DroneGuard",
  description:
    "Scopri quanto guadagna un pilota drone, quali fattori influenzano i compensi e come trovare nuove opportunità di lavoro nel settore."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Carriera e lavoro con i droni
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Quanto Guadagna un Pilota Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Una delle domande più frequenti per chi vuole entrare nel settore
            dei droni riguarda i possibili guadagni. Il compenso di un pilota
            drone può variare in base all'esperienza, ai servizi offerti,
            all'attrezzatura utilizzata, alla località e alla tipologia di
            clienti con cui collabora.
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
            Da cosa dipende il guadagno di un pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Non esiste una tariffa unica valida per tutti. Alcuni piloti
            lavorano occasionalmente, mentre altri gestiscono attività
            professionali strutturate offrendo servizi a imprese, enti pubblici
            e professionisti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il guadagno può dipendere dal numero di lavori svolti, dalla
            specializzazione scelta e dalla capacità di trovare nuovi clienti.
          </p>

          <p className="leading-8 text-gray-300">
            Un pilota specializzato in rilievi tecnici o termografia potrebbe
            operare in mercati differenti rispetto a chi si occupa di eventi e
            riprese video.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Esperienza
            </h2>

            <p className="text-gray-300">
              Le competenze influenzano il valore dei servizi offerti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Specializzazione
            </h2>

            <p className="text-gray-300">
              Alcuni settori richiedono competenze più specifiche.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Clienti
            </h2>

            <p className="text-gray-300">
              Il numero di incarichi ricevuti influisce sui guadagni.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Settori più richiesti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I piloti drone possono lavorare in numerosi settori. Alcuni si
              concentrano sulla produzione video, altri sulle fotografie aeree,
              mentre molti professionisti si specializzano in attività tecniche.
            </p>

            <p className="leading-8 text-gray-300">
              La diversificazione dei servizi può aumentare le opportunità di
              lavoro e la possibilità di ricevere nuove richieste.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Attività richieste
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
            Come trovare più lavori come pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Oltre alla formazione e all'esperienza, è importante trovare canali
            efficaci per entrare in contatto con nuovi clienti. Molti piloti
            utilizzano siti web, portfolio, social network e marketplace per
            aumentare la propria visibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard consente ai piloti di candidarsi ai lavori pubblicati dai
            clienti e di entrare in contatto con persone che stanno cercando
            servizi professionali con drone.
          </p>

          <p className="leading-8 text-gray-300">
            Avere accesso a nuove opportunità può contribuire a far crescere la
            propria attività nel tempo.
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
                Inserisci esperienza e attrezzature.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Trova richieste
              </h3>
              <p className="text-sm text-gray-300">
                Visualizza i lavori pubblicati.
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
            Inizia a trovare nuovi clienti
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard e candidati ai lavori
            pubblicati dai clienti.
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