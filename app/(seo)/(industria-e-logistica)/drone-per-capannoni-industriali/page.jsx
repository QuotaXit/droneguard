import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per capannoni industriali | DroneGuard",
  description:
    "Trova piloti drone per capannoni industriali, ispezioni visive, coperture, tetti, facciate, fotovoltaico, magazzini e documentazione aziendale."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per industria e logistica
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per capannoni industriali
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare visivamente un capannone industriale, una copertura,
            un tetto, un impianto fotovoltaico, una facciata, un piazzale, una
            zona di carico e scarico, un magazzino, uno stabilimento produttivo o
            un edificio aziendale? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per realizzare foto aeree, video di
            sopralluogo, documentazione visiva, riprese dall'alto e immagini utili
            a imprese, tecnici, proprietari, responsabili manutenzione,
            amministratori, facility manager e professionisti che devono osservare
            meglio lo stato esterno della struttura.
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
              Coperture industriali
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per osservare tetti, lucernari,
              canali, gronde, pannelli, guaine e superfici estese del capannone.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piazzali e aree esterne
            </h2>
            <p className="text-gray-300">
              Ottieni immagini di accessi, parcheggi, aree di manovra, zone di
              carico, depositi esterni e spazi aziendali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione aziendale
            </h2>
            <p className="text-gray-300">
              Usa foto e video per manutenzioni, preventivi, report interni,
              archivi, comunicazioni e controllo visivo dello stabile.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un capannone industriale
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I capannoni industriali spesso hanno coperture molto estese,
              facciate alte, lucernari, gronde, canali, pannelli fotovoltaici,
              camini, impianti esterni, piazzali e zone difficili da osservare
              completamente da terra. Salire sulla copertura o utilizzare mezzi di
              sollevamento solo per una prima verifica può essere complesso,
              costoso o poco pratico.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può offrire una panoramica rapida e dettagliata dello stato
              esterno del capannone. Le immagini dall'alto possono aiutare a
              individuare zone da approfondire, parti deteriorate visibili,
              accumuli, ristagni, gronde ostruite, pannelli sporchi, lucernari,
              superfici danneggiate o aree che necessitano di manutenzione.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce verifiche tecniche, perizie o controlli
              professionali, ma può diventare un supporto visivo molto utile per
              organizzare interventi, richiedere preventivi, documentare lo stato
              dell'immobile e comunicare meglio con tecnici, imprese e responsabili
              aziendali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per capannoni industriali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di coperture industriali</li>
              <li>✅ Video di sopralluogo su capannoni e stabilimenti</li>
              <li>✅ Riprese di gronde, lucernari e canali</li>
              <li>✅ Documentazione visiva per manutenzioni</li>
              <li>✅ Immagini per preventivi e report aziendali</li>
              <li>✅ Controllo visivo di pannelli fotovoltaici</li>
              <li>✅ Riprese di piazzali, accessi e aree esterne</li>
              <li>✅ Foto prima e dopo interventi sul capannone</li>
              <li>✅ Materiale per tecnici, imprese e proprietà</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per tetti, coperture e lucernari industriali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le coperture dei capannoni possono avere dimensioni importanti e
            includere guaine, pannelli, lastre, lucernari, canali di scolo,
            comignoli, sfiati, impianti fotovoltaici, parapetti e zone tecniche.
            Quando serve capire lo stato della copertura, il drone permette di
            raccogliere immagini dall'alto senza dover raggiungere fisicamente
            ogni punto della struttura.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese possono essere utili in caso di infiltrazioni, manutenzioni
            programmate, pulizia gronde, controllo lucernari, verifica visiva di
            superfici esterne, documentazione dopo eventi meteo, preparazione di
            lavori o confronto con imprese specializzate. Una panoramica aerea può
            mostrare meglio la disposizione generale della copertura e aiutare a
            individuare le zone su cui concentrare un controllo tecnico.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere condivise con responsabili manutenzione,
            facility manager, proprietà, assicurazioni, tecnici, amministratori e
            imprese incaricate degli interventi.
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
                Crea il tuo account come azienda, proprietario, tecnico,
                responsabile manutenzione, amministratore o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ricevi crediti
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
                Descrivi il capannone, la città, le aree da riprendere e il tipo
                di foto o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità operative e consegna del materiale.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Supporto per manutenzioni e preventivi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando un'azienda deve programmare una manutenzione, riparare una
              copertura, pulire gronde, controllare lucernari o chiedere un
              preventivo, avere immagini aeree può rendere più semplice il primo
              confronto con tecnici e imprese. Il materiale visivo aiuta a
              descrivere la struttura, le aree interessate e le condizioni esterne
              generali.
            </p>

            <p className="leading-8 text-gray-300">
              Le foto con drone non sostituiscono il sopralluogo tecnico, ma
              possono aiutare a spiegare meglio il problema, ridurre dubbi iniziali
              e preparare un intervento più ordinato.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Immagini per proprietà e responsabili aziendali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Proprietari, responsabili di stabilimento, facility manager e
              amministratori possono usare le immagini drone per capire meglio lo
              stato dell'immobile. Questo è utile soprattutto quando il capannone è
              grande, quando la copertura non è facilmente accessibile o quando
              bisogna condividere informazioni con più persone.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere archiviate, inserite in report, inviate
              via email o usate per confrontare lo stato della struttura prima e
              dopo un intervento.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per piazzali, accessi e aree logistiche
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Oltre alla copertura, un capannone industriale comprende spesso aree
            esterne importanti: piazzali, parcheggi, zone di carico e scarico,
            accessi per mezzi pesanti, rampe, depositi esterni, recinzioni,
            percorsi interni e aree di manovra. Il drone può offrire una visione
            chiara dell'intero contesto aziendale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese possono essere utili per documentare lo stato del piazzale,
            programmare lavori di sistemazione, mostrare l'organizzazione degli
            spazi, realizzare materiale per presentazioni aziendali o conservare
            una panoramica aggiornata della struttura.
          </p>

          <p className="leading-8 text-gray-300">
            In alcuni casi le immagini possono servire anche per valorizzare
            l'azienda, mostrando dall'alto stabilimento, magazzini, uffici,
            parcheggi, aree verdi, accessi e spazi operativi.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Stabilimenti produttivi
            </h2>
            <p className="text-gray-300">
              Riprese per aziende, fabbriche, reparti produttivi, aree esterne,
              coperture, piazzali e strutture industriali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Magazzini e depositi
            </h2>
            <p className="text-gray-300">
              Foto e video per magazzini logistici, depositi, aree di carico,
              parcheggi mezzi, spazi esterni e coperture estese.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Manutenzione immobili
            </h2>
            <p className="text-gray-300">
              Materiale visivo per controlli periodici, interventi su coperture,
              pulizia gronde, impermeabilizzazioni e lavori programmati.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            capannone e il risultato desiderato. Puoi indicare la città, la zona,
            la dimensione indicativa della struttura, il tipo di copertura, la
            presenza di impianti fotovoltaici, lucernari, gronde, piazzali o aree
            esterne da riprendere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto della copertura completa,
            dettagli di alcune zone, video panoramici, immagini per preventivi,
            documentazione per manutenzione, riprese prima e dopo un intervento o
            materiale da condividere con tecnici e responsabili aziendali.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso allo stabilimento,
            presenza di aree di decollo, orari preferiti, referente sul posto,
            eventuali limitazioni operative, necessità di coordinarsi con il
            personale aziendale e modalità di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per capannone industriale
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un capannone
              industriale. Mi servono immagini della copertura, dei lucernari,
              delle gronde, dei pannelli fotovoltaici, delle facciate e del
              piazzale esterno. Il materiale verrà usato per una prima
              documentazione visiva, per richiedere preventivi di manutenzione e
              per condividerlo con tecnici e responsabili aziendali.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            struttura, le aree da riprendere, l'obiettivo del servizio e il tipo di
            consegna desiderata.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per capannoni industriali?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per capannoni industriali può variare in
            base alla città, alla dimensione della struttura, alla durata delle
            riprese, alla complessità dell'area, al numero di zone da documentare
            e al tipo di consegna richiesta. Una semplice panoramica della
            copertura può avere un costo diverso rispetto a un servizio completo
            con foto, video, dettagli e riprese di piazzali o impianti esterni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il materiale finale incide sul prezzo. Alcune aziende chiedono
            solo file grezzi, altre preferiscono foto selezionate, video brevi,
            cartelle ordinate, immagini divise per area o materiale pronto da
            allegare a report, email, preventivi o documenti interni.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio più adatto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per controllare un capannone?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per ottenere una
                documentazione visiva di copertura, facciate, piazzali, lucernari,
                gronde e aree esterne.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può riprendere i pannelli fotovoltaici?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere immagini visive dei pannelli presenti sulla
                copertura. Per analisi tecniche specifiche o termografiche servono
                strumenti e competenze adeguate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere immagini per un preventivo?
              </h3>
              <p className="text-gray-300">
                Sì, puoi usare le immagini per spiegare meglio la situazione a
                tecnici e imprese, anche se il sopralluogo tecnico resta sempre
                necessario per valutazioni definitive.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente il servizio?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
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
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi
                piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per capannoni industriali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi visivi,
            documentazione di coperture industriali, capannoni, stabilimenti,
            piazzali, facciate, gronde, lucernari, pannelli fotovoltaici e aree
            esterne aziendali.
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