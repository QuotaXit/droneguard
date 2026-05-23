import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Richiedi Preventivo Drone | DroneGuard",
  description:
    "Richiedi un preventivo per servizi drone: riprese aeree, eventi, matrimoni, immobili, ispezioni, cantieri e lavori professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivo servizi drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Richiedi Preventivo Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un preventivo per un servizio drone? Con DroneGuard
            puoi pubblicare una richiesta e ricevere candidature da piloti drone
            interessati al tuo lavoro. Che si tratti di riprese aeree,
            fotografie professionali, matrimonio, evento, immobile, ispezione
            tecnica, monitoraggio cantiere o servizio per azienda, puoi spiegare
            cosa ti serve e confrontare le proposte ricevute.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Richiedi un preventivo
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quando richiedere un preventivo drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Richiedere un preventivo è utile quando vuoi capire quanto può
            costare un servizio con drone e quale professionista può occuparsi
            del lavoro. Il costo può cambiare in base alla zona, alla durata
            dell'intervento, al tipo di servizio, alla complessità del luogo e
            alla consegna richiesta.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una ripresa video per un evento non ha le stesse esigenze di
            un'ispezione di un tetto o di un monitoraggio cantiere. Per questo è
            importante descrivere bene il lavoro, così i piloti possono valutare
            la richiesta e proporti un'offerta più precisa.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard non devi scegliere subito: pubblichi la richiesta,
            ricevi candidature e valuti il pilota più adatto alle tue esigenze.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese e foto
            </h2>
            <p className="text-gray-300">
              Preventivi per video aerei, fotografie professionali, eventi,
              matrimoni e contenuti promozionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Immobili e aziende
            </h2>
            <p className="text-gray-300">
              Servizi drone per case, ville, terreni, hotel, attività
              commerciali e imprese.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni e cantieri
            </h2>
            <p className="text-gray-300">
              Preventivi per tetti, facciate, fotovoltaico, cantieri,
              capannoni e controlli tecnici.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il prezzo di un servizio drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il prezzo di un servizio drone può variare molto. Una semplice
              sessione fotografica può richiedere meno tempo rispetto a un video
              completo con montaggio, una giornata di riprese o un'ispezione
              tecnica più dettagliata. Anche la distanza, la difficoltà del
              luogo e il tipo di risultato richiesto incidono sul preventivo.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Per ricevere proposte più utili, conviene indicare il maggior
              numero possibile di informazioni: città, data indicativa, tipo di
              servizio, durata prevista, luogo, obiettivo finale e materiale
              desiderato. In questo modo i piloti possono capire meglio il lavoro
              e proporti una soluzione adatta.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard ti permette di confrontare più candidature senza dover
              cercare manualmente ogni singolo operatore.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Puoi richiedere preventivi per
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Fotografie aeree professionali</li>
              <li>✅ Matrimoni, feste ed eventi</li>
              <li>✅ Immobili, ville e terreni</li>
              <li>✅ Video per aziende e attività</li>
              <li>✅ Ispezione tetti e facciate</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Servizi drone per agricoltura</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona la richiesta su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il funzionamento è semplice: ti registri, pubblichi una richiesta e
            descrivi il servizio drone di cui hai bisogno. Puoi indicare la zona
            del lavoro, il tipo di intervento, la data indicativa e tutti i
            dettagli utili per aiutare i piloti a capire meglio il progetto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            I piloti interessati possono candidarsi alla tua richiesta. Tu puoi
            valutare le candidature, confrontare le informazioni ricevute e
            scegliere con chi proseguire. Ogni pilota può proporti la propria
            soluzione in base alla disponibilità, all'esperienza e al tipo di
            servizio richiesto.
          </p>

          <p className="leading-8 text-gray-300">
            Questo ti aiuta a trovare un professionista senza perdere tempo in
            ricerche casuali o contatti poco mirati.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedere un preventivo è semplice
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm text-gray-300">
                Crea il tuo account cliente su DroneGuard.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica
              </h3>
              <p className="text-sm text-gray-300">
                Descrivi il servizio drone che vuoi richiedere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi
              </h3>
              <p className="text-sm text-gray-300">
                Attendi le candidature dei piloti interessati.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli
              </h3>
              <p className="text-sm text-gray-300">
                Confronta le proposte e scegli il pilota adatto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta efficace
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta ben scritta aiuta i piloti a risponderti meglio.
            Specifica il tipo di servizio, ad esempio riprese video,
            fotografie, ispezione, monitoraggio o evento. Aggiungi la città, la
            data o il periodo indicativo e spiega il risultato che vuoi ottenere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Se hai esigenze particolari, inseriscile subito: durata del lavoro,
            consegna dei file, montaggio video, numero di foto, accessibilità del
            luogo o presenza di aree sensibili. Più informazioni fornisci, più
            sarà facile ricevere preventivi coerenti con il progetto.
          </p>

          <p className="leading-8 text-gray-300">
            Anche se non conosci bene il mondo dei droni, puoi descrivere il tuo
            obiettivo finale: saranno i piloti a proporti la soluzione più
            adatta.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi ora un preventivo drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica la tua richiesta su DroneGuard e ricevi candidature da
            piloti drone disponibili per servizi professionali in Italia.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
              Pubblica richiesta gratis
            </button>
          </Link>
        </div>

      </section>
    </main>
  )
}