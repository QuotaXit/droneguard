import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Foto immobiliari con drone | DroneGuard",
  description:
    "Trova piloti drone per foto immobiliari, immagini aeree di ville, case, terreni, casali, agenzie immobiliari, strutture ricettive e immobili di pregio."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per foto immobiliari professionali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Foto immobiliari con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Le foto immobiliari con drone permettono di valorizzare case, ville,
            terreni, casali, appartamenti di pregio, strutture ricettive e immobili
            commerciali mostrando la proprietà da una prospettiva più ampia,
            elegante e completa. Le immagini aeree aiutano a raccontare non solo
            l'immobile, ma anche il contesto: giardino, piscina, accessi, panorama,
            terreno, posizione, vicinanza ai servizi, distanza dal mare, aree verdi
            e caratteristiche esterne che spesso non emergono dalle fotografie
            tradizionali. Con DroneGuard puoi trovare piloti drone disponibili per
            realizzare foto immobiliari professionali per agenzie, privati,
            property manager, costruttori, architetti e professionisti del settore.
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
              Annunci più curati
            </h2>
            <p className="text-gray-300">
              Le foto aeree possono rendere un annuncio immobiliare più completo,
              più professionale e più capace di attirare l'attenzione di chi cerca
              casa o valuta un investimento.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Vista dall'alto
            </h2>
            <p className="text-gray-300">
              Il drone mostra l'immobile nel suo contesto, evidenziando spazi
              esterni, terreno, accessi, parcheggi, giardino, piscina, confini e
              panorama.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Contenuti per agenzie
            </h2>
            <p className="text-gray-300">
              Le immagini possono essere usate su portali immobiliari, sito web
              dell'agenzia, social network, brochure digitali e presentazioni per
              clienti venditori.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare foto con drone nel settore immobiliare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nel mercato immobiliare le immagini sono decisive. Prima ancora di
              leggere una descrizione dettagliata, molte persone valutano un
              immobile guardando le fotografie. Se le foto sono curate,
              professionali e mostrano bene il valore della proprietà, l'annuncio
              ha più possibilità di essere aperto, salvato e richiesto. Le foto
              immobiliari con drone aggiungono un livello di comunicazione in più,
              perché mostrano l'immobile da una prospettiva che normalmente non è
              disponibile con una fotocamera tradizionale.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone è particolarmente utile quando la proprietà ha spazi esterni
              importanti o una posizione da valorizzare. Una villa con giardino,
              un casale in campagna, un terreno edificabile, una casa vista mare,
              un agriturismo, un hotel, un capannone o un immobile di pregio possono
              essere raccontati meglio dall'alto. Le immagini aeree permettono di
              mostrare dimensioni, accessibilità, esposizione, panorama,
              pertinenze, confini indicativi, parcheggi, piscina, verde e rapporto
              con il territorio circostante.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
              interessati a realizzare il servizio. Puoi indicare la città, il tipo
              di immobile, il risultato desiderato e ricevere candidature da
              operatori disponibili nella tua zona.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Foto aeree utili per
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ville e case indipendenti</li>
              <li>✅ Casali, rustici e agriturismi</li>
              <li>✅ Terreni agricoli ed edificabili</li>
              <li>✅ Immobili di pregio e proprietà panoramiche</li>
              <li>✅ Hotel, B&B e strutture ricettive</li>
              <li>✅ Capannoni e immobili commerciali</li>
              <li>✅ Nuove costruzioni e cantieri completati</li>
              <li>✅ Agenzie immobiliari e property manager</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto con drone per agenzie immobiliari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per un'agenzia immobiliare, avere fotografie aeree professionali può
            aiutare a distinguere gli annunci dalla concorrenza. Molti immobili
            vengono presentati con immagini simili tra loro, spesso limitate agli
            interni o alla facciata. Le foto con drone permettono invece di
            raccontare meglio il valore della proprietà e di creare una scheda più
            completa, soprattutto quando il contesto esterno è parte importante
            della vendita.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una villa può essere valorizzata mostrando il giardino, la piscina, il
            vialetto e la posizione rispetto al quartiere. Un terreno può essere
            presentato evidenziando forma, accessi e contesto. Un casale può essere
            raccontato insieme alla campagna circostante. Una struttura turistica
            può mostrare spazi esterni, parcheggi, aree comuni e panorama. In tutti
            questi casi, le immagini dall'alto aiutano l'utente a capire meglio
            cosa sta guardando.
          </p>

          <p className="leading-8 text-gray-300">
            Le fotografie possono essere usate sui principali portali immobiliari,
            sul sito dell'agenzia, nelle campagne social, nelle brochure digitali e
            nelle presentazioni rivolte ai proprietari. Mostrare che l'agenzia cura
            anche la parte visiva può essere un vantaggio quando si acquisiscono
            nuovi immobili da vendere.
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
                Crea gratuitamente il tuo account come cliente, agenzia immobiliare
                o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ottieni crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50
                crediti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi immobile, città, tipo di foto, obiettivo e risultato che
                vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti la propria
                disponibilità.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Foto per ville, terreni e casali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ville, terreni e casali sono tra gli immobili che beneficiano di più
              dalle fotografie con drone. In questi casi, il valore non è dato solo
              dagli interni, ma anche dagli spazi esterni e dal contesto. Una foto
              dall'alto può mostrare il giardino, la piscina, la strada di accesso,
              il terreno circostante, la posizione della casa e la relazione con il
              panorama.
            </p>

            <p className="leading-8 text-gray-300">
              Per un terreno, il drone può aiutare a far capire meglio estensione,
              forma, accessibilità e caratteristiche dell'area. Per un casale o una
              villa, invece, può valorizzare privacy, verde, esposizione, vista e
              pertinenze esterne.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Foto per social, annunci e brochure
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le foto immobiliari con drone possono essere usate in molti modi.
              Possono arricchire un annuncio, diventare immagini di copertina per
              i portali, essere pubblicate sui social, essere inserite in una
              brochure digitale o usate dall'agenzia per presentare meglio un
              immobile a potenziali acquirenti.
            </p>

            <p className="leading-8 text-gray-300">
              Quando pubblichi la richiesta su DroneGuard, puoi specificare se ti
              servono foto orizzontali, verticali, panoramiche, immagini dettagliate
              degli spazi esterni, scatti del terreno o una serie completa da usare
              insieme alle fotografie degli interni.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per foto immobiliari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta per foto immobiliari con
            drone e ricevere candidature da operatori interessati. È utile indicare
            la città, il tipo di immobile, la presenza di spazi esterni, l'obiettivo
            delle immagini e il formato che ti serve. Ad esempio, puoi richiedere
            foto per vendere una villa, promuovere un casale, mostrare un terreno,
            valorizzare un immobile vista mare, documentare una struttura ricettiva
            o creare contenuti per un'agenzia immobiliare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere candidature più precise, specifica se ti servono solo
            scatti aerei o anche un servizio più completo. Puoi indicare se vuoi
            immagini panoramiche, foto ravvicinate della proprietà, scatti del
            contesto, foto del giardino, della piscina, del terreno, degli accessi,
            dei parcheggi o delle aree vicine. Più la richiesta è chiara, più sarà
            semplice trovare un pilota adatto.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utilizzata da agenzie immobiliari, privati,
            costruttori, architetti, property manager, hotel, agriturismi, società
            immobiliari e professionisti che vogliono creare contenuti visivi più
            efficaci per promuovere una proprietà.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le foto con drone aiutano un annuncio immobiliare?
              </h3>
              <p className="text-gray-300">
                Sì, possono rendere l'annuncio più completo e professionale,
                soprattutto quando l'immobile ha spazi esterni, vista, terreno,
                giardino, piscina o una posizione interessante.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Per quali immobili conviene usare il drone?
              </h3>
              <p className="text-gray-300">
                Il drone è utile per ville, casali, terreni, immobili di pregio,
                strutture turistiche, capannoni, hotel, agriturismi, nuove
                costruzioni e proprietà con spazi esterni importanti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto per social e portali?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi specificare se ti servono immagini per
                portali immobiliari, sito web, social network, campagne
                pubblicitarie o brochure digitali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente foto immobiliari?
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
                crediti gratuiti dopo la registrazione, mentre i piloti ricevono
                50 crediti gratuiti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per foto immobiliari
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare foto immobiliari, immagini
            aeree di ville, case, terreni, casali, immobili di pregio, strutture
            ricettive, annunci professionali e contenuti per agenzie immobiliari.
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