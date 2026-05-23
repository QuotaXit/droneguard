import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Lavora come Pilota Drone | DroneGuard",
  description:
    "Scopri come lavorare come pilota drone, quali servizi offrire e come usare DroneGuard per candidarti alle richieste dei clienti."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Lavorare con i droni
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Lavora come Pilota Drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Lavorare come pilota drone significa mettere a disposizione
            competenze, attrezzatura e professionalità per aiutare clienti,
            aziende e privati a realizzare riprese aeree, foto professionali,
            ispezioni tecniche, monitoraggi, rilievi e contenuti visivi di
            qualità. Il drone non è più soltanto uno strumento creativo, ma una
            soluzione utile in molti settori: edilizia, immobili, agricoltura,
            turismo, eventi, matrimoni, sicurezza, cantieri e controlli tecnici.
            Con DroneGuard puoi creare il tuo profilo pilota e candidarti alle
            richieste pubblicate dai clienti.
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
            Cosa significa lavorare come pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il lavoro del pilota drone può cambiare molto in base al tipo di
            servizio richiesto. In alcuni casi il cliente cerca immagini aeree
            emozionali per raccontare un evento, valorizzare una struttura
            ricettiva o promuovere un immobile. In altri casi serve un lavoro
            più tecnico, come il controllo di un tetto, l'ispezione di una
            facciata, il monitoraggio di un cantiere o la raccolta di immagini
            utili per rilievi e analisi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per questo motivo non basta saper far volare un drone. Un pilota
            professionale deve capire la richiesta, valutare il contesto,
            comunicare in modo chiaro con il cliente e proporre un servizio
            adatto all'obiettivo. La differenza spesso non la fa solo il drone
            utilizzato, ma la capacità di trasformare una richiesta generica in
            un lavoro ben organizzato.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard nasce proprio per facilitare questo incontro: da una
            parte i clienti pubblicano una richiesta, dall'altra i piloti
            possono candidarsi ai lavori più adatti alla propria esperienza.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Crea il profilo
            </h2>
            <p className="text-gray-300">
              Presenta zona, servizi, esperienza, attrezzatura e disponibilità.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Trova richieste reali
            </h2>
            <p className="text-gray-300">
              Consulta i lavori pubblicati dai clienti e scegli quelli adatti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Invia candidatura
            </h2>
            <p className="text-gray-300">
              Rispondi con una proposta chiara, professionale e personalizzata.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quali lavori può fare un pilota drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un pilota drone può offrire servizi molto diversi tra loro. Nel
              settore video e fotografico può lavorare per matrimoni, eventi,
              attività commerciali, hotel, agriturismi, agenzie immobiliari,
              cantieri, aziende e professionisti che vogliono contenuti visivi
              più moderni e coinvolgenti.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Nel settore tecnico, invece, il drone viene usato per osservare
              aree difficili da raggiungere, documentare lo stato di strutture,
              controllare coperture, impianti fotovoltaici, facciate, terreni,
              edifici, infrastrutture o zone operative. In questi casi il valore
              del servizio è legato alla rapidità, alla sicurezza e alla qualità
              della documentazione raccolta.
            </p>

            <p className="leading-8 text-gray-300">
              Più il pilota riesce a spiegare bene il proprio servizio, più sarà
              semplice per il cliente capire quando e perché contattarlo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Foto aeree professionali</li>
              <li>✅ Video per matrimoni ed eventi</li>
              <li>✅ Servizi per immobili e turismo</li>
              <li>✅ Ispezioni tetti e facciate</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Controllo pannelli fotovoltaici</li>
              <li>✅ Rilievi e mappature con drone</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come iniziare a lavorare con DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per iniziare puoi registrarti come pilota drone e completare il tuo
            profilo con le informazioni più importanti. È utile indicare la
            città o la zona in cui lavori, i servizi che offri, la tua
            esperienza e il tipo di lavori che puoi svolgere. Un profilo chiaro
            aiuta il cliente a capire subito se sei adatto alla sua richiesta.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Dopo la registrazione puoi consultare le richieste pubblicate dai
            clienti e candidarti a quelle più interessanti. Ogni candidatura
            dovrebbe essere scritta con attenzione: evita messaggi troppo
            generici e spiega in modo semplice come puoi aiutare il cliente, che
            tipo di servizio puoi offrire e perché sei disponibile per quel
            lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            In questo modo DroneGuard diventa uno strumento pratico per
            trasformare la tua competenza con il drone in nuove opportunità
            professionali.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Perché usare DroneGuard per lavorare come pilota drone
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Visibilità
              </h3>
              <p className="text-sm text-gray-300">
                Puoi essere presente in una piattaforma dedicata ai servizi con
                drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Richieste mirate
              </h3>
              <p className="text-sm text-gray-300">
                Puoi candidarti a lavori pubblicati da clienti interessati.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Profilo professionale
              </h3>
              <p className="text-sm text-gray-300">
                Mostri in modo ordinato servizi, competenze e area di lavoro.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Nuove opportunità
              </h3>
              <p className="text-sm text-gray-300">
                Ogni richiesta può diventare un nuovo contatto o un lavoro reale.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Consigli per ottenere più lavori come pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per aumentare le possibilità di lavorare è importante presentarsi in
            modo serio e professionale. Il cliente deve percepire affidabilità,
            non solo entusiasmo. Una descrizione curata, una comunicazione
            educata e una proposta chiara possono fare la differenza rispetto ad
            altri piloti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Cerca di spiegare sempre cosa puoi realizzare, quali informazioni ti
            servono prima del lavoro e quali risultati il cliente può aspettarsi.
            Se lavori in più settori, organizza bene i servizi: eventi,
            immobili, ispezioni, cantieri, agricoltura o rilievi. Questo rende
            il profilo più leggibile e aumenta la fiducia.
          </p>

          <p className="leading-8 text-gray-300">
            Lavorare come pilota drone richiede costanza. Ogni candidatura ben
            scritta, ogni lavoro completato e ogni contatto gestito bene possono
            aiutarti a costruire una presenza più forte nel tempo.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Inizia a lavorare come pilota drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati gratuitamente su DroneGuard, crea il tuo profilo e
            candidati alle richieste pubblicate dai clienti che cercano servizi
            con drone.
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