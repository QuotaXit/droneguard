import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per vendere casa | DroneGuard",
  description:
    "Usa foto e video con drone per valorizzare una casa in vendita. Trova piloti drone per immobili, ville, terreni, agenzie immobiliari e annunci professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Immobili in vendita con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per vendere casa
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Vuoi vendere casa e presentarla in modo più professionale? Con
            DroneGuard puoi trovare piloti drone disponibili per realizzare foto,
            video e riprese aeree di immobili, ville, appartamenti con terrazzo,
            casali, terreni, giardini, cortili, piscine, accessi e spazi esterni.
            Le immagini dall’alto possono aiutare a raccontare meglio il valore
            di una proprietà, mostrando non solo l’immobile, ma anche il contesto:
            posizione, esposizione, aree verdi, strade vicine, distanza dal mare,
            campagna circostante, parcheggi, pertinenze e caratteristiche che da
            terra spesso non si vedono bene.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Trova un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Annunci più completi
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video aerei possono rendere l’annuncio immobiliare più
              chiaro, più ricco e più interessante per chi cerca casa online.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Valorizza gli esterni
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può mostrare giardino, piscina, terrazzi, accessi,
              parcheggi, confini, panorama e contesto intorno all’immobile.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per privati e agenzie
            </h2>
            <p className="leading-7 text-gray-300">
              Il servizio può essere richiesto da proprietari, agenzie
              immobiliari, investitori, costruttori e professionisti del settore.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per vendere un immobile
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando una persona guarda un annuncio immobiliare online, le prime
              immagini fanno spesso la differenza. Una casa può avere spazi
              esterni importanti, una buona posizione, un panorama interessante o
              un terreno intorno, ma se tutto questo non viene mostrato bene,
              l’annuncio rischia di sembrare incompleto. Il drone permette di
              creare una presentazione più ampia e più emozionale, utile per
              far capire subito il valore dell’immobile.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le riprese dall’alto possono essere particolarmente utili per
              ville, case indipendenti, casali, rustici, aziende agricole,
              immobili di lusso, strutture ricettive, terreni edificabili,
              appartamenti con grandi terrazzi e proprietà con piscina o giardino.
              In questi casi non basta mostrare solo le stanze interne: è
              importante far vedere anche ciò che circonda la casa.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard ti aiuta a pubblicare una richiesta e ricevere
              candidature da piloti drone interessati. Potrai spiegare il tipo di
              immobile, la zona, il materiale che ti serve e scegliere il
              professionista più adatto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi mostrare con il drone
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Vista generale della casa</li>
              <li>✅ Giardino, cortile e piscina</li>
              <li>✅ Terrazzi, attici e coperture</li>
              <li>✅ Accessi e strada di arrivo</li>
              <li>✅ Confini e terreno circostante</li>
              <li>✅ Panorama e contesto</li>
              <li>✅ Distanza da mare, colline o servizi</li>
              <li>✅ Facciate e spazi esterni</li>
              <li>✅ Video emozionale per annuncio</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video con drone per annunci immobiliari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un annuncio immobiliare ben costruito deve aiutare il potenziale
            acquirente a capire subito cosa sta guardando. Le foto interne sono
            importanti, ma spesso non bastano. Il drone può aggiungere una visione
            esterna completa, utile per mostrare l’immobile nel suo insieme e per
            far percepire meglio spazi, proporzioni e posizione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per una villa, ad esempio, le immagini aeree possono mostrare il
            rapporto tra casa, giardino, piscina, parcheggio e ingresso. Per un
            casale possono far vedere campi, strade bianche, alberi, colline e
            terreno. Per un appartamento con terrazzo possono evidenziare la vista
            e l’esposizione. Per un terreno edificabile possono aiutare a capire
            confini, accessi, pendenze e contesto urbano.
          </p>

          <p className="leading-8 text-gray-300">
            Il materiale realizzato dal pilota può essere utilizzato per portali
            immobiliari, sito dell’agenzia, social network, brochure digitali,
            presentazioni al cliente e campagne promozionali.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea un account come cliente, proprietario, agenzia immobiliare
                o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l’immobile, la zona e il tipo di foto o video che vuoi
                realizzare.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti la loro
                disponibilità.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta il professionista più adatto in base al servizio che ti
                serve.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Ideale per ville e case indipendenti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le ville e le case indipendenti hanno spesso elementi che meritano
              di essere mostrati dall’alto: giardino, piscina, vialetto, ingresso,
              parcheggi, esposizione, distanza dalle altre abitazioni e panorama.
              Una ripresa con drone può rendere l’annuncio più completo e dare al
              cliente una percezione immediata degli spazi.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di contenuto può essere utile anche per immobili di
              pregio, seconde case, case al mare, casali in campagna e proprietà
              con grandi esterni.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Utile per agenzie immobiliari
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Per un’agenzia immobiliare, offrire foto e video con drone può
              diventare un modo per distinguere gli annunci più importanti.
              Presentare una proprietà con immagini curate aumenta la qualità
              percepita del servizio e può aiutare il proprietario a vedere
              l’immobile valorizzato in modo più professionale.
            </p>

            <p className="leading-8 text-gray-300">
              Puoi richiedere riprese singole per un immobile oppure cercare
              piloti disponibili per collaborazioni ricorrenti nella tua zona.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta efficace
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando pubblichi una richiesta su DroneGuard, indica il tipo di
            immobile da fotografare: villa, appartamento, casale, terreno,
            rustico, attico, capannone o struttura ricettiva. Specifica la città,
            la zona, la presenza di spazi esterni e il risultato che vuoi
            ottenere. Una descrizione chiara aiuta il pilota a valutare meglio il
            lavoro.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi indicare se ti servono solo foto, solo video, entrambi, riprese
            panoramiche, immagini ravvicinate, video breve per social, materiale
            per portali immobiliari o contenuti più emozionali per una
            presentazione. Se hai già una scaletta, puoi scriverla direttamente
            nella richiesta.
          </p>

          <p className="leading-8 text-gray-300">
            Ricorda che il volo deve essere sempre valutato dal pilota in base a
            sicurezza, privacy, meteo, ostacoli, aree vicine e regole applicabili.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di una
              villa in vendita in provincia di Roma. Vorrei mostrare la casa
              dall’esterno, il giardino, la piscina, l’ingresso, la strada di
              accesso e il contesto intorno all’immobile. Il materiale servirà per
              un annuncio immobiliare online.”
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per vendere casa?
              </h3>
              <p className="text-gray-300">
                Sì, puoi cercare un pilota drone per realizzare foto e video
                utili a valorizzare l’immobile in vendita.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Serve solo per ville?
              </h3>
              <p className="text-gray-300">
                No, può essere utile anche per appartamenti con terrazzo, casali,
                terreni, rustici, capannoni, case vacanza e strutture ricettive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare un lavoro?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard fa direttamente le riprese?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per vendere casa
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica una richiesta su DroneGuard e trova piloti drone disponibili
            per realizzare foto e video immobiliari, riprese aeree di case,
            ville, terreni, casali, attici, giardini, piscine e immobili in
            vendita.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
              Registrati gratis
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}