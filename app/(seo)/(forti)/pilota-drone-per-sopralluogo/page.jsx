import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota drone per sopralluogo | DroneGuard",
  description:
    "Trova un pilota drone per sopralluogo visivo. Pubblica una richiesta per foto, video, controlli dall'alto, tetti, cantieri, terreni, immobili e strutture."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Sopralluoghi visivi con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Pilota drone per sopralluogo
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di un pilota drone per un sopralluogo visivo? Con
            DroneGuard puoi pubblicare una richiesta e trovare operatori drone
            disponibili per realizzare foto, video e documentazione dall'alto di
            cantieri, tetti, terreni, capannoni, immobili, condomini, strutture,
            aree esterne, coperture, piazzali e zone difficili da osservare da
            terra. Il drone può essere utile per avere una prima visione generale
            del luogo, capire meglio spazi e accessi, documentare lo stato di una
            zona e raccogliere materiale visivo da condividere con tecnici,
            imprese, clienti, amministratori o professionisti.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Cerca un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sopralluogo dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini aeree per osservare meglio un'area prima di un
              intervento, una valutazione, una manutenzione o un lavoro tecnico.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video del luogo
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può produrre materiale visivo utile per documentare
              accessi, ostacoli, spazi, coperture, strutture, terreni e aree
              difficili da controllare.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per privati e aziende
            </h2>
            <p className="leading-7 text-gray-300">
              Il servizio può essere richiesto da proprietari, imprese,
              amministratori, tecnici, agenzie immobiliari, aziende e
              professionisti.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un sopralluogo con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un sopralluogo con drone può essere utile quando devi osservare un
              luogo dall'alto prima di prendere decisioni, organizzare lavori,
              valutare accessi o capire meglio lo stato generale di un'area. A
              volte da terra non si riesce ad avere una visione completa: un
              tetto può essere troppo alto, un terreno troppo grande, un cantiere
              troppo complesso o una struttura troppo difficile da osservare da un
              solo punto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di raccogliere foto e video da prospettive
              diverse, offrendo una panoramica più chiara di spazi, confini,
              pendenze, coperture, ostacoli, accessi, strutture vicine e parti
              difficili da raggiungere. Questo non sostituisce una perizia, un
              rilievo tecnico o una valutazione professionale, ma può fornire una
              documentazione visiva utile per preparare meglio il passo
              successivo.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi spiegare cosa deve essere osservato, indicare
              la zona e ricevere candidature da piloti drone interessati. In
              questo modo puoi scegliere il professionista più adatto in base al
              tipo di sopralluogo, al luogo e al materiale che desideri ricevere.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Sopralluoghi che puoi richiedere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Sopralluogo terreno con drone</li>
              <li>✅ Sopralluogo cantiere dall'alto</li>
              <li>✅ Controllo tetto e copertura</li>
              <li>✅ Foto e video di immobili</li>
              <li>✅ Verifica accessi e spazi esterni</li>
              <li>✅ Documentazione aree difficili</li>
              <li>✅ Controllo piazzali e capannoni</li>
              <li>✅ Riprese prima di un intervento</li>
              <li>✅ Materiale visivo per tecnici o imprese</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Sopralluogo drone per cantieri, terreni e immobili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei cantieri, un sopralluogo con drone può aiutare a documentare lo
            stato dell'area, l'avanzamento dei lavori, la disposizione dei mezzi,
            gli accessi, i materiali presenti, le zone operative e le parti
            difficili da osservare da terra. Le immagini dall'alto possono essere
            utili per imprese edili, direttori lavori, coordinatori, tecnici,
            committenti o clienti che vogliono avere una visione generale del
            cantiere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un terreno, il drone può essere richiesto per osservare confini,
            pendenze, accessi, strade vicine, vegetazione, aree libere, manufatti
            presenti o condizioni generali del lotto. Questo può essere utile
            prima di una vendita, di un acquisto, di una pulizia, di una
            progettazione, di una valutazione preliminare o di un intervento.
          </p>

          <p className="leading-8 text-gray-300">
            Nel settore immobiliare, invece, il drone può aiutare a documentare
            una proprietà dall'esterno, mostrando tetti, giardini, cortili,
            terrazzi, facciate, aree circostanti e posizione dell'immobile. Le
            immagini possono essere utili per agenzie, proprietari, investitori,
            tecnici o clienti interessati a comprendere meglio il contesto.
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
                Crea il tuo account come cliente, azienda, tecnico, agenzia,
                amministratore o pilota drone.
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
                3. Pubblica il sopralluogo
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il luogo, il motivo del sopralluogo, la zona e il tipo
                di materiale fotografico o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al lavoro.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di un intervento
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di iniziare lavori, manutenzioni, pulizie, ristrutturazioni o
              verifiche tecniche, può essere utile raccogliere una prima
              documentazione visiva. Il drone può mostrare punti di accesso,
              ostacoli, aree da liberare, coperture, zone alte, distanze e parti
              che da terra non si vedono bene.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può aiutare a spiegare meglio la situazione a chi
              dovrà intervenire, riducendo dubbi iniziali e rendendo più chiara
              l'organizzazione del sopralluogo tecnico successivo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Per documentare lo stato dei luoghi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un sopralluogo con drone può essere richiesto anche per documentare
              lo stato dei luoghi in una certa data. Le immagini possono essere
              utili per confronti futuri, archivi fotografici, comunicazioni tra
              professionisti, report interni o semplice documentazione visiva.
            </p>

            <p className="leading-8 text-gray-300">
              Se vuoi creare un archivio ordinato, puoi chiedere al pilota foto
              da più angolazioni, video panoramici e riprese specifiche dei punti
              più importanti.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per sopralluogo con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi bene il tipo di luogo:
            cantiere, terreno, tetto, immobile, capannone, condominio, piazzale,
            area agricola, struttura industriale o zona esterna. Indica la città,
            la zona, il motivo del sopralluogo e cosa vuoi ottenere dal materiale
            raccolto. Una richiesta dettagliata permette al pilota di capire
            meglio tempi, complessità e fattibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Specifica se ti servono foto, video, panoramiche generali, riprese
            ravvicinate, immagini di accessi, confini, tetti, coperture, aree
            operative, zone danneggiate o punti particolari. Puoi anche indicare
            se il materiale deve essere usato per un tecnico, per un'impresa, per
            un cliente, per un amministratore, per una vendita immobiliare o per
            un archivio personale.
          </p>

          <p className="leading-8 text-gray-300">
            È importante ricordare che ogni volo deve rispettare sicurezza,
            privacy, condizioni meteo, ostacoli, spazio disponibile e normative
            applicabili. Sarà il pilota a valutare se il sopralluogo può essere
            svolto e in che modo organizzarlo.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per sopralluogo drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per un sopralluogo visivo di un terreno in
              provincia di Roma. Mi servono foto dall'alto e un breve video per
              osservare accessi, confini, vegetazione, pendenze e strutture
              presenti. Vorrei usare il materiale per una prima valutazione prima
              di organizzare un sopralluogo tecnico.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo così aiuta il pilota a capire il luogo, l'obiettivo del
            lavoro, il tipo di materiale richiesto e il livello di dettaglio
            necessario.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un sopralluogo con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un sopralluogo con drone può variare in base alla zona,
            alla durata del lavoro, alla complessità del luogo, al tipo di
            materiale richiesto e alla distanza da percorrere. Un sopralluogo
            semplice su un piccolo terreno può essere diverso da un controllo su
            un cantiere esteso, un capannone industriale, un condominio alto o una
            struttura complessa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di consegna può incidere sul preventivo. Alcuni clienti
            chiedono solo foto e video grezzi, altri vogliono una selezione
            ordinata di immagini, riprese da punti precisi, video più curati o un
            piccolo report visivo. Per questo è utile spiegare subito il risultato
            desiderato.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette di
            pubblicare la richiesta e ricevere candidature da piloti drone
            interessati. Cliente e professionista potranno poi accordarsi sui
            dettagli del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso cercare un pilota drone per un sopralluogo?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta e ricevere
                candidature da piloti drone disponibili nella tua zona.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il sopralluogo con drone vale come perizia?
              </h3>
              <p className="text-gray-300">
                No, il drone può fornire materiale visivo utile, ma non
                sostituisce perizie, diagnosi tecniche o valutazioni professionali
                quando necessarie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usarlo per un terreno?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video di terreni, lotti, aree agricole,
                aree edificabili, piazzali e zone esterne.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiederlo per un cantiere?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta per documentare cantieri, stato
                lavori, accessi, mezzi, materiali e aree operative.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare la richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I
                nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente il sopralluogo?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per sopralluogo
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per sopralluoghi visivi, foto, video, controlli dall'alto,
            cantieri, terreni, immobili, coperture, capannoni, condomini e aree
            difficili da osservare da terra.
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