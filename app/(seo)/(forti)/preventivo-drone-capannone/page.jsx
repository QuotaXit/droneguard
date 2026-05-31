import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo drone capannone | DroneGuard",
  description:
    "Richiedi un preventivo drone per capannone. Trova piloti drone per ispezioni visive di coperture industriali, tetti, grondaie, pannelli fotovoltaici, piazzali e strutture aziendali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi drone per capannoni e aziende
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo drone capannone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di controllare un capannone, una copertura industriale,
            un magazzino, un piazzale aziendale o una struttura produttiva con
            drone? Con DroneGuard puoi pubblicare una richiesta e trovare piloti
            drone disponibili per realizzare foto, video e ispezioni visive
            dall'alto di tetti industriali, grondaie, pannelli fotovoltaici,
            facciate, lucernari, aree esterne, recinzioni, parcheggi, accessi e
            zone difficili da osservare da terra. Il drone può essere utile per
            raccogliere materiale visivo prima di una manutenzione, dopo un
            evento atmosferico, durante un controllo programmato o per documentare
            lo stato generale di una struttura aziendale.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi un preventivo
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Coperture industriali
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi foto e video dall'alto di tetti, guaine, lamiere,
              lucernari, canali di scolo, grondaie e parti alte del capannone.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Piazzali e aree esterne
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a documentare piazzali, accessi, parcheggi,
              recinzioni, aree di carico, zone operative e spazi intorno alla
              struttura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale per aziende
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere utili per manutenzione, report interni,
              preventivi tecnici, verifiche visive e documentazione dello stato
              dei luoghi.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un drone per capannone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un capannone industriale, un magazzino o una struttura aziendale
              può avere coperture molto ampie, grondaie lunghe, lucernari,
              impianti installati sul tetto, pannelli fotovoltaici, facciate
              alte, piazzali esterni e aree operative difficili da osservare
              completamente da terra. In questi casi il drone può offrire una
              visione dall'alto e produrre materiale fotografico o video utile
              per capire meglio lo stato generale della struttura.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il servizio può essere richiesto dopo vento forte, pioggia intensa,
              grandine, infiltrazioni sospette, problemi alle grondaie,
              manutenzioni programmate, lavori sulla copertura, installazione o
              controllo di pannelli fotovoltaici, verifiche su piazzali o
              documentazione dello stato esterno dell'azienda. Il drone non
              sostituisce una verifica tecnica diretta, ma può aiutare a ottenere
              una prima documentazione visiva da condividere con professionisti,
              imprese o manutentori.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta dettagliata, indicare
              il tipo di capannone, la zona, la parte da controllare e il
              materiale desiderato. I piloti drone interessati possono candidarsi
              e proporti la propria disponibilità.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Tetto di capannone industriale</li>
              <li>✅ Copertura in lamiera o guaina</li>
              <li>✅ Grondaie e canali di scolo</li>
              <li>✅ Lucernari e aperture sul tetto</li>
              <li>✅ Pannelli fotovoltaici su capannone</li>
              <li>✅ Piazzali e aree di carico</li>
              <li>✅ Facciate e parti alte</li>
              <li>✅ Recinzioni, accessi e parcheggi</li>
              <li>✅ Danni visibili dopo maltempo</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione drone per copertura industriale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le coperture industriali possono essere molto estese e difficili da
            controllare a vista. Un capannone può avere tetti in lamiera, guaine,
            pannelli sandwich, lucernari, impianti tecnici, canali di scolo,
            grondaie, antenne, camini, bocchette, pannelli fotovoltaici e altre
            strutture installate nella parte superiore. Salire sulla copertura
            richiede attenzione, sicurezza e spesso l'intervento di personale
            specializzato. Il drone può aiutare a osservare dall'alto la
            situazione prima di organizzare un controllo diretto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini raccolte possono mostrare parti visibili della copertura,
            zone con accumuli di materiale, ristagni, elementi spostati, danni
            evidenti, lucernari sporchi o rotti, grondaie piene, parti difficili
            da raggiungere e punti che meritano un approfondimento tecnico. Il
            materiale può essere condiviso con un'impresa, un manutentore, un
            tecnico aziendale, un responsabile sicurezza o un professionista
            incaricato.
          </p>

          <p className="leading-8 text-gray-300">
            Una richiesta ben descritta aiuta il pilota a capire se deve
            realizzare panoramiche generali, riprese ravvicinate, foto di punti
            specifici, video della copertura o materiale utile per un report
            interno. Più il contesto è chiaro, più sarà facile ricevere
            candidature adatte.
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
                Crea il tuo account come cliente, azienda, tecnico, responsabile,
                professionista o pilota drone.
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
                3. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il capannone, la zona, la parte da controllare, il tipo
                di materiale richiesto e l'obiettivo dell'ispezione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al servizio.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per pannelli fotovoltaici su capannone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Molti capannoni industriali hanno pannelli fotovoltaici installati
              sulla copertura. Il drone può essere richiesto per osservare la
              disposizione dei pannelli, documentare lo stato visivo
              dell'impianto, riprendere le file dall'alto e mostrare eventuali
              zone difficili da vedere da terra.
            </p>

            <p className="leading-8 text-gray-300">
              Se ti serve un controllo più specifico, ad esempio con termografia
              o attrezzatura particolare, è importante indicarlo subito nella
              richiesta. Non tutti i piloti dispongono della stessa dotazione, e
              specificare il risultato desiderato aiuta a ricevere candidature più
              pertinenti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per piazzali aziendali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Oltre alla copertura, il drone può essere utile per documentare
              piazzali, parcheggi, aree di carico e scarico, recinzioni, accessi,
              strade interne, zone di deposito, aree operative e spazi esterni
              intorno al capannone.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può servire per report interni, presentazioni,
              valutazioni preliminari, controllo dello stato dei luoghi,
              documentazione aziendale o confronto con fornitori e professionisti.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per danni dopo vento, pioggia o grandine
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Dopo un evento atmosferico intenso, una copertura industriale può
            presentare danni visibili, elementi spostati, parti sollevate,
            lucernari rotti, grondaie piene, accumuli di materiale o zone in cui
            l'acqua non defluisce correttamente. In questi casi il drone può
            aiutare a raccogliere immagini dall'alto senza dover salire subito
            sulla copertura.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le foto e i video possono essere utili per mostrare la situazione a
            un tecnico, a una ditta di manutenzione, a un responsabile aziendale
            o a un professionista incaricato. Possono anche aiutare a individuare
            i punti più critici da verificare durante un successivo sopralluogo
            diretto.
          </p>

          <p className="leading-8 text-gray-300">
            Quando pubblichi la richiesta, indica se il controllo è urgente, se
            c'è stato un evento atmosferico preciso, quale parte del capannone ti
            preoccupa e se ti servono immagini generali o riprese più dettagliate
            di una zona specifica.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta drone per capannone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi il tipo di struttura:
            capannone industriale, magazzino logistico, officina, stabilimento,
            deposito, azienda agricola, struttura commerciale o edificio
            produttivo. Indica la città, la zona, la dimensione indicativa della
            copertura e la parte da controllare. Puoi specificare se ti servono
            immagini del tetto, dei pannelli fotovoltaici, delle grondaie, dei
            lucernari, delle facciate, dei piazzali o delle aree esterne.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche il motivo della richiesta: manutenzione programmata,
            danno dopo maltempo, controllo prima di lavori, documentazione per un
            tecnico, verifica di un impianto, immagini per report interno o
            sopralluogo preliminare. Puoi chiedere foto, video, riprese
            panoramiche, riprese ravvicinate o una selezione ordinata di immagini
            da condividere con altri professionisti.
          </p>

          <p className="leading-8 text-gray-300">
            È utile indicare eventuali ostacoli o condizioni particolari:
            presenza di cavi, antenne, impianti sul tetto, aree industriali
            trafficate, mezzi in movimento, spazi stretti, recinzioni, accessi
            controllati o necessità di coordinarsi con personale aziendale. Sarà
            il pilota a valutare sicurezza, meteo, privacy, ostacoli e regole
            applicabili.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta drone per capannone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllare la copertura di un capannone
              industriale in provincia di Roma dopo il forte vento. Mi servono
              foto e video del tetto, delle grondaie, dei lucernari e dei
              pannelli fotovoltaici installati sulla copertura. Vorrei usare il
              materiale per mostrarlo a una ditta di manutenzione e capire se ci
              sono danni visibili o punti da verificare.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo aiuta il pilota a capire il contesto, il tipo
            di struttura, le parti da riprendere, il motivo dell'ispezione e il
            materiale richiesto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per capannone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per capannone può variare in base alla
            città, alla dimensione della struttura, alla complessità del volo,
            alla durata del lavoro, al materiale richiesto e alla presenza di
            ostacoli o vincoli operativi. Un controllo semplice di una piccola
            copertura può essere diverso da un'ispezione completa di un grande
            capannone industriale, un magazzino logistico o un impianto con
            pannelli fotovoltaici.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna richiesta può incidere. Alcune aziende chiedono
            solo foto e video grezzi, altre preferiscono immagini selezionate,
            riprese dettagliate, video ordinati, materiale per report interni o
            documentazione da inviare a tecnici e fornitori. Per questo è utile
            spiegare chiaramente cosa vuoi ottenere prima di ricevere le
            candidature.
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
                Posso richiedere un drone per controllare un capannone?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per controlli
                visivi con drone su capannoni, coperture industriali, piazzali,
                grondaie, facciate e impianti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può controllare il tetto del capannone?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può realizzare foto e video della copertura, se il
                volo è fattibile e il pilota valuta sicure le condizioni
                operative.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere immagini dei pannelli fotovoltaici?
              </h3>
              <p className="text-gray-300">
                Sì, puoi chiedere foto e video dei pannelli fotovoltaici
                installati sulla copertura del capannone o in aree esterne.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un tecnico?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce materiale visivo utile, ma non sostituisce
                verifiche tecniche, perizie, diagnosi professionali o controlli
                specialistici.
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
                DroneGuard esegue direttamente il servizio?
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
            Richiedi un preventivo drone per capannone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controllare capannoni industriali, coperture,
            grondaie, pannelli fotovoltaici, lucernari, piazzali, accessi,
            facciate, magazzini e strutture aziendali difficili da osservare da
            terra.
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