import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per valutazione immobile | DroneGuard",
  description:
    "Trova piloti drone per foto e video utili alla valutazione visiva di immobili, ville, terreni, condomini, capannoni, coperture e proprietà in vendita."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Documentazione visiva per immobili
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per valutazione immobile
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi valutare visivamente un immobile prima di venderlo, acquistarlo,
            ristrutturarlo, presentarlo a un cliente o mostrarlo a un tecnico?
            Con DroneGuard puoi trovare piloti drone disponibili per realizzare
            foto aeree, video panoramici e riprese esterne utili a osservare
            meglio ville, case indipendenti, condomini, palazzine, terreni,
            capannoni, coperture, facciate, cortili, giardini, accessi, parcheggi,
            terrazzi e aree difficili da vedere da terra. Il drone non sostituisce
            una perizia tecnica, una valutazione immobiliare professionale o un
            sopralluogo specialistico, ma può offrire una documentazione visiva
            chiara per capire meglio lo stato generale di una proprietà e
            preparare il passo successivo.
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
              Visione dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può mostrare coperture, facciate, spazi esterni, confini,
              accessi e parti dell'immobile che da terra sono difficili da
              osservare.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto alla valutazione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono aiutare proprietari, agenzie, tecnici e
              investitori a comprendere meglio il contesto e lo stato visivo della
              proprietà.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima del sopralluogo
            </h2>
            <p className="leading-7 text-gray-300">
              Una prima documentazione drone può essere utile prima di organizzare
              visite, interventi, preventivi, verifiche tecniche o lavori di
              manutenzione.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per una valutazione visiva
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando si deve valutare un immobile, spesso è importante avere una
              visione completa dell'esterno. Da terra si possono vedere facciate,
              ingressi e una parte degli spazi esterni, ma non sempre è possibile
              osservare bene tetti, coperture, terrazzi, cortili interni, confini,
              pendenze del terreno, accessi secondari, aree retrostanti, piazzali
              o parti alte della struttura. Il drone può fornire immagini utili
              per capire meglio l'insieme della proprietà.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questo può essere utile in molti casi: prima di acquistare una casa,
              prima di mettere in vendita una villa, prima di valutare un terreno,
              prima di chiedere un preventivo per lavori, prima di controllare una
              copertura o prima di presentare un immobile a un potenziale
              investitore. Le immagini aeree possono aiutare a individuare meglio
              spazi, ostacoli, punti da approfondire, contesto, accessibilità e
              caratteristiche esterne.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
              da piloti drone interessati. Puoi descrivere il tipo di immobile, la
              zona, cosa vuoi osservare e il materiale che ti serve: foto, video,
              panoramiche, immagini ravvicinate o documentazione visiva generale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Immobili che puoi documentare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ville e case indipendenti</li>
              <li>✅ Appartamenti con terrazzi</li>
              <li>✅ Condomini e palazzine</li>
              <li>✅ Terreni edificabili o agricoli</li>
              <li>✅ Capannoni e magazzini</li>
              <li>✅ Rustici e casali</li>
              <li>✅ Immobili da ristrutturare</li>
              <li>✅ Coperture e tetti</li>
              <li>✅ Facciate e cortili</li>
              <li>✅ Proprietà con giardino o piscina</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto e video per capire meglio lo stato dell'immobile
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una valutazione immobiliare richiede competenze, documenti e controlli
            specifici. Il drone non sostituisce un tecnico, un perito, un geometra,
            un architetto o un agente immobiliare, ma può fornire un supporto
            visivo molto utile. Le immagini dall'alto possono mostrare parti
            dell'edificio che normalmente richiederebbero scale, ponteggi,
            piattaforme o accessi difficili. In questo modo è possibile ottenere
            una prima panoramica e decidere quali aspetti approfondire.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per esempio, un proprietario può voler controllare lo stato esterno di
            una casa prima di venderla. Un'agenzia può voler raccogliere materiale
            per presentare meglio una proprietà. Un investitore può voler vedere
            un terreno o un fabbricato prima di organizzare una visita. Un tecnico
            può usare le immagini come supporto preliminare per capire quali punti
            osservare durante un sopralluogo reale.
          </p>

          <p className="leading-8 text-gray-300">
            Le riprese drone possono essere archiviate, condivise con
            professionisti, inserite in una scheda informativa, usate in una
            presentazione o semplicemente consultate per avere una visione più
            completa della proprietà.
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
                Crea il tuo account come cliente, proprietario, agenzia,
                professionista, tecnico o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'immobile, la zona, cosa vuoi osservare e il materiale
                fotografico o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti drone interessati possono candidarsi e proporti la loro
                disponibilità per il servizio.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta il professionista più adatto in base al tipo di immobile,
                alla zona e al risultato desiderato.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di acquistare un immobile
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando si valuta un acquisto, può essere utile vedere l'immobile da
              più prospettive. Il drone può mostrare tetto, confini, accessi,
              spazi esterni, vicinanza ad altre costruzioni, esposizione,
              parcheggi, strada di arrivo, giardino, terreno o eventuali parti
              difficili da osservare durante una visita veloce.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale non sostituisce controlli tecnici o documentali,
              ma può aiutare a preparare meglio domande, verifiche e sopralluoghi
              successivi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di vendere o ristrutturare
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di mettere in vendita una proprietà o iniziare una
              ristrutturazione, può essere utile avere una documentazione visiva
              dello stato esterno. Il drone può aiutare a mostrare coperture,
              facciate, terrazzi, cortili, spazi verdi, accessi e parti alte
              dell'edificio.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere condivise con agenzie, imprese,
              professionisti o potenziali acquirenti, rendendo più chiara la
              situazione iniziale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa chiedere al pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ottenere un servizio utile, spiega bene cosa vuoi valutare
            visivamente. Puoi chiedere foto del tetto, riprese della facciata,
            immagini del terreno, vista del giardino, riprese degli accessi,
            panoramiche della zona, foto dei confini, immagini di cortili interni,
            video della proprietà dall'alto o materiale generale da condividere
            con un tecnico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Se l'immobile è da vendere, puoi chiedere immagini più ordinate e
            promozionali. Se invece vuoi solo capire lo stato esterno, puoi
            chiedere riprese più descrittive. Se devi inviare il materiale a un
            professionista, puoi specificare quali punti devono essere ripresi con
            maggiore attenzione.
          </p>

          <p className="leading-8 text-gray-300">
            Il pilota dovrà valutare sicurezza, privacy, condizioni meteo,
            ostacoli, presenza di persone, edifici vicini, linee elettriche, spazi
            di decollo e regole applicabili. DroneGuard mette in contatto cliente
            e professionista, ma la fattibilità del volo viene valutata dal pilota
            scelto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per valutazione immobile
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e un breve video di una
              casa indipendente che devo valutare prima della vendita. Vorrei
              vedere il tetto, le facciate, il giardino, gli accessi, il terreno
              circostante e il contesto della zona. Il materiale servirà come
              prima documentazione visiva da condividere con agenzia e tecnico.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire che il servizio ha
            finalità documentativa e che le immagini devono aiutare a osservare
            meglio lo stato generale della proprietà.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per valutazione immobile?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla zona, alla distanza, alla durata del
            servizio, alla complessità dell'immobile e al tipo di materiale
            richiesto. Una semplice documentazione fotografica può avere un costo
            diverso rispetto a un video più completo con riprese da più
            angolazioni, immagini ravvicinate, panoramiche del contesto e consegna
            di materiale selezionato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di immobile incide. Una villa con terreno, un condominio,
            un capannone, un terreno edificabile o una casa da ristrutturare
            richiedono riprese diverse. Per questo è utile descrivere bene cosa
            vuoi osservare e quale uso farai delle immagini.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare il lavoro, ricevere candidature e scegliere il
            pilota drone più adatto in base al tipo di immobile e al risultato
            desiderato.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Crediti su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione.
            Pubblicare un lavoro costa 5 crediti, quindi puoi iniziare cercando un
            pilota drone per una valutazione visiva preliminare di un immobile,
            una casa, un terreno, un condominio o un capannone.
          </p>

          <p className="leading-8 text-gray-300">
            I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
            Rispondere o candidarsi a un annuncio costa 5 crediti. Questo sistema
            permette di collegare chi cerca un servizio drone con chi è disponibile
            a svolgerlo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può servire per valutare un immobile?
              </h3>
              <p className="text-gray-300">
                Sì, può fornire una documentazione visiva utile per osservare
                meglio esterni, tetto, facciate, terreno, accessi e contesto
                dell'immobile.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini drone valgono come perizia?
              </h3>
              <p className="text-gray-300">
                No, il drone non sostituisce perizie, valutazioni immobiliari,
                verifiche urbanistiche, controlli catastali o sopralluoghi tecnici
                professionali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso condividere il materiale con un tecnico?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono essere condivisi con tecnici, agenzie,
                imprese o professionisti, secondo gli accordi presi con il pilota.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per immobili da ristrutturare?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può essere utile per osservare esterni, coperture,
                facciate, cortili, accessi e stato generale visibile
                dell'immobile.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per valutazione immobile
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video utili alla valutazione visiva
            di immobili, ville, condomini, terreni, capannoni, coperture,
            facciate, accessi, giardini e proprietà da vendere o ristrutturare.
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