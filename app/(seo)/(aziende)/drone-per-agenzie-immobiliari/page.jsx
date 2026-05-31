import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per agenzie immobiliari | DroneGuard",
  description:
    "Trova piloti drone per agenzie immobiliari, video di ville, terreni, case in vendita, immobili di pregio e contenuti promozionali professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per agenzie immobiliari
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per agenzie immobiliari
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le agenzie immobiliari hanno sempre più bisogno di contenuti visivi
            professionali per valorizzare case, ville, terreni, casali, immobili
            commerciali e proprietà di pregio. Le riprese con drone permettono di
            mostrare un immobile da una prospettiva più completa, elegante e
            coinvolgente rispetto alle semplici foto tradizionali. Con DroneGuard
            puoi trovare piloti drone disponibili per realizzare riprese aeree,
            video promozionali, fotografie dall'alto e contenuti utili per annunci
            immobiliari, siti web, social network e presentazioni commerciali.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Video immobiliari più efficaci
            </h2>
            <p className="text-gray-300">
              Le riprese aeree aiutano a raccontare meglio gli spazi, la posizione
              dell'immobile, il contesto esterno e il valore complessivo della
              proprietà.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto aeree per annunci
            </h2>
            <p className="text-gray-300">
              Le fotografie con drone possono rendere più professionali gli
              annunci online, distinguendo l'agenzia dalla concorrenza.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Valorizzazione del territorio
            </h2>
            <p className="text-gray-300">
              Ville, terreni, casali e strutture ricettive possono essere mostrati
              insieme al panorama, agli accessi, ai confini e ai servizi vicini.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone nel settore immobiliare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel mercato immobiliare l'immagine conta moltissimo. Un annuncio con
              foto curate, video professionali e riprese aeree riesce a comunicare
              più valore, a generare maggiore fiducia e ad attirare l'attenzione
              di potenziali acquirenti. Il drone è particolarmente utile quando
              l'immobile ha spazi esterni, giardini, piscina, vista panoramica,
              ampio terreno, posizione interessante o caratteristiche difficili da
              spiegare con immagini scattate da terra.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Per un'agenzia immobiliare, avere contenuti di qualità può fare la
              differenza tra un annuncio ignorato e un annuncio che viene aperto,
              guardato e ricordato. Le riprese con drone possono essere utilizzate
              per portali immobiliari, pagine social, campagne pubblicitarie,
              schede immobile, video YouTube, presentazioni per clienti venditori
              e materiale promozionale dell'agenzia.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard nasce proprio per semplificare la ricerca di professionisti
              del settore drone. L'agenzia può pubblicare una richiesta, indicare
              la zona, il tipo di immobile, il servizio desiderato e ricevere
              candidature da piloti interessati.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi utili per agenzie immobiliari
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese aeree di ville e case indipendenti</li>
              <li>✅ Video immobiliari per annunci online</li>
              <li>✅ Fotografie aeree professionali</li>
              <li>✅ Riprese di terreni edificabili o agricoli</li>
              <li>✅ Video promozionali per immobili di pregio</li>
              <li>✅ Riprese di casali, agriturismi e strutture ricettive</li>
              <li>✅ Contenuti per social e campagne pubblicitarie</li>
              <li>✅ Documentazione visiva dello stato dell'immobile</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per immobili, ville e terreni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone può aiutare l'agenzia immobiliare a creare contenuti
            più completi e professionali. Le immagini dall'alto sono ideali per
            mostrare l'accesso alla proprietà, la distanza dal mare, la vicinanza
            al centro abitato, la posizione rispetto alle strade principali, la
            presenza di aree verdi, giardini, piscine, parcheggi, pertinenze e
            confini del terreno.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per gli immobili di pregio, le riprese aeree possono trasmettere una
            percezione più esclusiva e curata. Per i terreni, invece, il drone può
            aiutare a mostrare l'estensione dell'area, l'accessibilità, la forma
            del lotto e il contesto circostante. Per strutture ricettive come
            agriturismi, B&B, hotel, camping e stabilimenti balneari, un video con
            drone può diventare un vero contenuto promozionale.
          </p>

          <p className="leading-8 text-gray-300">
            Attraverso DroneGuard puoi cercare operatori drone disponibili nella
            tua zona e pubblicare una richiesta specifica. Non devi perdere tempo
            a contattare professionisti a caso: descrivi il lavoro e attendi le
            candidature dei piloti interessati.
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
                Crea gratuitamente il tuo account come cliente o come pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ottieni crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50 crediti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Inserisci zona, immobile, servizio richiesto e dettagli del progetto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono rispondere alla tua richiesta.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Quando conviene usare un drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone è particolarmente indicato quando l'immobile ha un valore
              visivo che non emerge completamente dalle fotografie classiche. Una
              villa con giardino, una casa con vista panoramica, un terreno molto
              grande o un casale immerso nel verde possono essere raccontati meglio
              con immagini dall'alto.
            </p>

            <p className="leading-8 text-gray-300">
              Anche per immobili commerciali, capannoni, hotel, stabilimenti
              balneari e strutture turistiche, il drone può aiutare a comunicare
              dimensioni, accessibilità, posizione e potenzialità della proprietà.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              A chi è utile questa pagina
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Questa pagina è pensata per agenzie immobiliari, consulenti,
              property manager, società di investimento, studi tecnici e privati
              che vogliono valorizzare meglio un immobile in vendita o in affitto.
            </p>

            <p className="leading-8 text-gray-300">
              Pubblicare una richiesta su DroneGuard può essere utile anche quando
              l'agenzia deve realizzare contenuti per più immobili e vuole trovare
              un operatore drone affidabile nella stessa zona.
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
                Il drone è utile per vendere casa?
              </h3>
              <p className="text-gray-300">
                Sì, soprattutto quando l'immobile ha spazi esterni, vista,
                posizione interessante o caratteristiche che si capiscono meglio
                dall'alto. Le riprese aeree possono rendere l'annuncio più
                professionale e più completo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso trovare un pilota drone vicino alla mia agenzia?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta indicando la zona
                del servizio. I piloti interessati potranno candidarsi in base alla
                disponibilità e alla distanza.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente video immobiliari?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone. Il servizio viene svolto dal professionista scelto
                dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali immobili conviene usare il drone?
              </h3>
              <p className="text-gray-300">
                Il drone è utile per ville, casali, terreni, agriturismi, hotel,
                stabilimenti balneari, capannoni, immobili commerciali e proprietà
                con spazi esterni importanti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per la tua agenzia immobiliare
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica la tua richiesta e ricevi candidature
            da piloti drone interessati a realizzare video immobiliari, foto aeree,
            riprese di ville, terreni, casali e proprietà da valorizzare online.
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