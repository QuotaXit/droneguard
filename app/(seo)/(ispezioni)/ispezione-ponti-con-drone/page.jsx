import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione ponti con drone | DroneGuard",
  description:
    "Trova piloti drone per ispezione ponti, viadotti, infrastrutture, strutture alte, piloni, campate e documentazione fotografica tecnica."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per ispezione ponti e infrastrutture
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione ponti con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'ispezione ponti con drone è una soluzione utile per ottenere una
            documentazione visiva di ponti, viadotti, passerelle, piloni, campate,
            sottostrutture, spalle, parapetti e parti difficili da osservare da
            terra. Le riprese aeree permettono di raccogliere immagini e video da
            prospettive diverse, aiutando tecnici, enti, imprese, amministrazioni
            e professionisti a visualizzare meglio lo stato esterno
            dell'infrastruttura. Con DroneGuard puoi trovare piloti drone
            disponibili per ispezioni visive, documentazione fotografica,
            monitoraggio infrastrutturale e supporto a sopralluoghi tecnici,
            sempre nel rispetto della sicurezza, delle autorizzazioni e delle
            regole operative previste.
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
              Visione ravvicinata
            </h2>
            <p className="text-gray-300">
              Il drone può riprendere parti alte, laterali o difficili da
              osservare, offrendo immagini utili per una prima analisi visiva
              dell'infrastruttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione tecnica
            </h2>
            <p className="text-gray-300">
              Foto e video possono essere raccolti per report, archivi,
              sopralluoghi, confronti temporali e materiale da condividere con
              professionisti incaricati.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Supporto ai controlli
            </h2>
            <p className="text-gray-300">
              Le immagini con drone non sostituiscono una verifica tecnica, ma
              possono aiutare a individuare punti da approfondire con ispezioni
              specialistiche.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare un drone per ispezionare un ponte
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ponti e viadotti sono opere complesse, spesso caratterizzate da
              parti alte, spazi difficili da raggiungere, superfici esposte agli
              agenti atmosferici e punti non facilmente osservabili durante un
              normale sopralluogo da terra. Il drone può offrire una visione più
              completa dell'infrastruttura, consentendo di documentare elementi
              visibili come campate, piloni, intradossi, parapetti, giunti,
              appoggi, spalle, superfici esterne e zone laterali.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              L'utilizzo del drone può essere particolarmente utile quando serve
              raccogliere una prima documentazione visiva, verificare lo stato
              generale di un'opera, confrontare immagini nel tempo o fornire
              materiale a tecnici e imprese incaricate di approfondimenti. Le
              riprese dall'alto e da diverse angolazioni possono aiutare a capire
              meglio dove concentrare controlli successivi, soprattutto quando
              l'infrastruttura si trova sopra corsi d'acqua, strade, aree verdi,
              terreni irregolari o zone non facilmente accessibili.
            </p>

            <p className="leading-8 text-gray-300">
              È importante precisare che un'ispezione con drone è una
              documentazione visiva e non sostituisce verifiche strutturali,
              perizie, prove tecniche o valutazioni ingegneristiche. Tuttavia può
              rappresentare un supporto molto utile per organizzare il lavoro,
              ridurre sopralluoghi preliminari complessi e fornire immagini chiare
              ai professionisti coinvolti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa si può documentare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Piloni, campate e parti laterali del ponte</li>
              <li>✅ Intradossi, parapetti e superfici esterne</li>
              <li>✅ Giunti, appoggi e zone visibili da approfondire</li>
              <li>✅ Spalle, muri laterali e aree sotto l'infrastruttura</li>
              <li>✅ Danni visibili dopo eventi atmosferici</li>
              <li>✅ Vegetazione, ostacoli o accumuli nelle aree vicine</li>
              <li>✅ Documentazione fotografica per report tecnici</li>
              <li>✅ Confronto visivo prima e dopo interventi</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezioni visive per ponti, viadotti e passerelle
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            L'ispezione visiva con drone può essere richiesta per ponti stradali,
            piccoli ponti comunali, passerelle pedonali, viadotti, attraversamenti
            su fossi o corsi d'acqua, ponticelli agricoli, infrastrutture private
            e opere situate in zone difficili da raggiungere. In molti casi,
            l'obiettivo non è sostituire il lavoro del tecnico, ma ottenere una
            panoramica visiva chiara dell'opera e delle sue parti esterne.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini possono essere utili per amministrazioni locali, enti,
            aziende, consorzi, studi tecnici, ingegneri, geometri, imprese di
            manutenzione e proprietari di infrastrutture private. Un report
            fotografico può aiutare a mostrare lo stato dell'opera, evidenziare
            zone che meritano attenzione, comunicare meglio con i professionisti
            incaricati e programmare eventuali sopralluoghi più approfonditi.
          </p>

          <p className="leading-8 text-gray-300">
            In alcuni casi il drone può essere utile anche per documentare il
            contesto circostante: accessi, vegetazione, erosione visibile, presenza
            di acqua, ostacoli, accumuli di materiale, condizioni dell'area sotto
            il ponte o stato dei percorsi vicini. Queste informazioni visive
            possono essere importanti per pianificare interventi di manutenzione,
            pulizia, messa in sicurezza o approfondimento tecnico.
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
                Crea gratuitamente il tuo account come cliente, tecnico, azienda
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
                Descrivi il ponte, la zona, il tipo di immagini richieste e il
                risultato che ti serve.
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
              Documentazione dopo maltempo o eventi critici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo piogge intense, piene, vento forte, frane, smottamenti o altri
              eventi critici, può essere necessario documentare rapidamente lo
              stato esterno di un ponte o di un viadotto. Il drone può aiutare a
              raccogliere immagini delle parti visibili, delle aree laterali, del
              corso d'acqua, delle spalle, della vegetazione e di eventuali
              accumuli presenti nelle vicinanze dell'infrastruttura.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può essere condiviso con tecnici, imprese o
              amministrazioni per valutare se programmare un sopralluogo più
              approfondito. Le immagini non hanno valore di diagnosi strutturale,
              ma possono rendere più chiara la situazione iniziale e aiutare a
              organizzare gli interventi successivi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Controllo periodico e confronto nel tempo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un altro uso interessante del drone riguarda la documentazione
              periodica. Fotografare o filmare un ponte in momenti diversi
              permette di confrontare lo stato visivo dell'opera nel tempo,
              conservando un archivio ordinato di immagini. Questo può essere
              utile per manutenzioni programmate, verifiche successive a lavori,
              controlli annuali o monitoraggi richiesti da enti e professionisti.
            </p>

            <p className="leading-8 text-gray-300">
              Per ottenere un confronto più utile è importante richiedere immagini
              coerenti, scattate da angolazioni simili e con una descrizione chiara
              delle parti da documentare. DroneGuard può aiutare a trovare piloti
              disponibili per questo tipo di attività visiva.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per ponti e infrastrutture
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta specifica per ispezionare
            un ponte con drone. È utile indicare la città, la zona, il tipo di
            infrastruttura, l'obiettivo del servizio, le parti da riprendere e il
            formato richiesto. Ad esempio, puoi richiedere foto dettagliate,
            riprese video, panoramiche dell'intera opera, immagini delle campate,
            documentazione delle spalle o riprese delle aree sotto il ponte.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta chiara aiuta i piloti drone a valutare meglio il lavoro.
            Per questo è importante specificare se il ponte si trova vicino a una
            strada trafficata, sopra un corso d'acqua, in un'area urbana, vicino a
            linee elettriche, in una zona privata o in un contesto che richiede
            particolari autorizzazioni. Il pilota potrà valutare condizioni,
            sicurezza, fattibilità e modalità operative.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utile per enti locali, aziende, studi di
            ingegneria, geometri, imprese di manutenzione, amministratori,
            consorzi, proprietari di infrastrutture private e professionisti che
            vogliono ottenere una documentazione visiva più completa prima di
            programmare controlli o interventi.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può ispezionare un ponte?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può acquisire immagini e video delle parti visibili
                di un ponte, come campate, piloni, parapetti, spalle e zone
                difficili da osservare da terra.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                L'ispezione con drone sostituisce una verifica strutturale?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Valutazioni
                strutturali, perizie e decisioni tecniche devono essere affidate a
                professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere immagini dopo una piena o un evento meteo?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta per documentare visivamente lo
                stato esterno del ponte e dell'area circostante dopo eventi meteo,
                piogge intense o situazioni critiche.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente le ispezioni?
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
            Trova un pilota drone per ispezionare un ponte
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare ispezioni visive di ponti,
            viadotti, passerelle, piloni, campate, spalle, parapetti e
            infrastrutture da documentare con foto e video professionali.
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