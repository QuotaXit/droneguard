import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione lucernari con drone | DroneGuard",
  description:
    "Richiedi un'ispezione lucernari con drone. Trova piloti drone per controlli visivi di lucernari, coperture, tetti, vetri, guarnizioni, infiltrazioni e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni lucernari con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione lucernari con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare lucernari, finestre da tetto, cupolini, vetri,
            guarnizioni, coperture trasparenti o punti difficili da raggiungere
            dall'esterno? Con DroneGuard puoi pubblicare una richiesta e trovare
            piloti drone disponibili per realizzare foto e video dall'alto. Il
            drone può essere utile per proprietari, amministratori di condominio,
            aziende, capannoni, tecnici e imprese che vogliono ottenere una prima
            documentazione visiva dello stato dei lucernari prima di interventi,
            manutenzioni, pulizie, verifiche per infiltrazioni o richieste di
            preventivo.
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
              Controllo visivo lucernari
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di lucernari, cupolini, vetri, guarnizioni,
              telai, raccordi, scossaline, coperture e punti deteriorati.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video della copertura
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere il lucernario da più angolazioni, mostrando
              parti che spesso non sono visibili dal basso o dall'interno.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Utile per infiltrazioni
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono aiutare a mostrare meglio macchie, guarnizioni
              rovinate, vetri sporchi, raccordi danneggiati o ristagni vicini.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione lucernari con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione lucernari con drone può essere utile quando bisogna
              osservare una finestra da tetto, un cupolino o una copertura
              trasparente senza salire direttamente sulla copertura. I lucernari
              possono trovarsi su tetti inclinati, coperture piane, capannoni,
              magazzini, condomini, ville, locali commerciali o strutture
              industriali dove l'accesso non è semplice.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Da terra o dall'interno dell'edificio spesso si vede solo una parte
              del problema. Il drone può documentare lo stato esterno del
              lucernario, il collegamento con la copertura, la presenza di
              sporco, foglie, ristagni, vetri rotti, crepe, telai danneggiati,
              guarnizioni consumate, scossaline sollevate o punti dove potrebbero
              formarsi infiltrazioni.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce una perizia tecnica, una
              prova d'acqua, una diagnosi di infiltrazione o una verifica
              professionale. Può però fornire una prima documentazione visiva
              chiara, utile per capire meglio la situazione e decidere se
              coinvolgere un tecnico, un'impresa, un serramentista o un
              manutentore.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Lucernari su tetti inclinati</li>
              <li>✅ Cupolini su coperture piane</li>
              <li>✅ Vetri e pannelli trasparenti</li>
              <li>✅ Guarnizioni e telai esterni</li>
              <li>✅ Scossaline e raccordi</li>
              <li>✅ Ristagni o sporco vicino al lucernario</li>
              <li>✅ Crepe, rotture o parti rovinate</li>
              <li>✅ Coperture di capannoni e magazzini</li>
              <li>✅ Punti difficili da raggiungere</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione lucernari per case, condomini e capannoni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nelle abitazioni private, un lucernario può essere collegato a
            mansarde, sottotetti, scale interne, bagni, cucine o ambienti che
            ricevono luce dall'alto. Quando compaiono macchie, gocce, umidità o
            dubbi sulla tenuta, avere immagini esterne può aiutare a capire se
            la zona attorno al lucernario presenta elementi visibili da
            approfondire.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, il controllo può essere richiesto dall'amministratore
            per documentare lucernari comuni, coperture trasparenti, accessi
            luce, cupolini del vano scala o elementi presenti sul lastrico
            solare. Le immagini possono essere condivise con condomini, tecnici e
            imprese prima di organizzare un intervento diretto.
          </p>

          <p className="leading-8 text-gray-300">
            Nei capannoni industriali e nei magazzini, i lucernari possono essere
            numerosi e distribuiti su superfici ampie. Il drone può aiutare a
            ottenere una panoramica generale della copertura e a individuare
            visivamente zone sporche, pannelli opacizzati, elementi danneggiati o
            parti da far verificare a un professionista.
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
                Crea il tuo account come cliente, proprietario, amministratore,
                tecnico, azienda o pilota drone.
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
                Descrivi edificio, copertura, posizione dei lucernari e tipo di
                foto o video che vuoi ricevere.
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
              Prima di salire sulla copertura
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare un accesso in quota, una piattaforma, un
              ponteggio o un intervento diretto sul tetto, può essere utile
              ottenere immagini dall'alto. Il drone può mostrare la posizione dei
              lucernari, lo stato generale della copertura e i punti che meritano
              maggiore attenzione.
            </p>

            <p className="leading-8 text-gray-300">
              Questa fase preliminare può aiutare a spiegare meglio il problema a
              un tecnico, a un'impresa o a un manutentore, rendendo più chiara la
              richiesta di intervento.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione per pulizia e manutenzione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I lucernari possono accumulare sporco, foglie, polvere, detriti o
              residui che riducono la luminosità e possono favorire ristagni
              vicino ai raccordi. Le immagini con drone possono essere utili
              prima di programmare una pulizia o una manutenzione esterna.
            </p>

            <p className="leading-8 text-gray-300">
              Puoi chiedere foto panoramiche della copertura, immagini
              ravvicinate dei lucernari e video dei punti più importanti da
              mostrare a chi dovrà eseguire il lavoro.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione lucernari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            casa, villa, condominio, capannone, magazzino, ufficio, hotel,
            struttura commerciale o edificio industriale. Scrivi la città, la
            zona, il numero indicativo di piani e il tipo di copertura. Se lo
            sai, specifica se il lucernario si trova su tetto inclinato,
            copertura piana, lastrico solare o pannello di copertura industriale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega cosa vuoi documentare: vetro rotto, sporco, infiltrazione,
            guarnizione rovinata, telaio esterno, scossalina, ristagno,
            collegamento con il tetto, cupolino opacizzato o semplice stato
            generale. Puoi chiedere foto, video, riprese ravvicinate, panoramiche
            o immagini da più lati del lucernario.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni volo deve rispettare sicurezza, privacy, condizioni meteo,
            ostacoli, presenza di persone, spazi disponibili e normative
            applicabili. Sarà il pilota a valutare fattibilità, modalità e limiti
            del servizio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ispezione lucernari con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva di alcuni lucernari su
              un capannone in provincia di Roma. Vorrei foto e video dei vetri,
              delle guarnizioni e delle zone vicine perché si vedono possibili
              infiltrazioni dall'interno. Il materiale servirà al tecnico e
              all'impresa per valutare un intervento di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di edificio, il
            punto da controllare, il problema visibile e il materiale richiesto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione lucernari con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione lucernari con drone può variare in base alla
            città, alla distanza del pilota, all'altezza dell'edificio, alla
            dimensione della copertura, al numero di lucernari da controllare e
            al tipo di materiale richiesto. Un controllo rapido di un singolo
            lucernario su una casa è diverso da una documentazione completa di
            molti cupolini su un capannone industriale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            chiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per zona, riprese da più angolazioni, video panoramici o una
            raccolta dei punti più importanti da condividere con un tecnico.
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
                Posso usare il drone per controllare lucernari?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dall'esterno.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone individua la causa di un'infiltrazione?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. La causa deve essere
                valutata da un tecnico o da un professionista qualificato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare guarnizioni e scossaline?
              </h3>
              <p className="text-gray-300">
                Sì, se visibili dall'esterno e se il volo è fattibile, il pilota
                può documentare guarnizioni, telai, scossaline e raccordi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per capannoni industriali?
              </h3>
              <p className="text-gray-300">
                Sì, può essere utile per documentare lucernari, cupolini e
                coperture estese prima di pulizie, manutenzioni o controlli.
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
                DroneGuard esegue direttamente l'ispezione?
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
            Trova un pilota drone per ispezionare lucernari
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di lucernari, cupolini, finestre da
            tetto, coperture, guarnizioni, vetri, scossaline, infiltrazioni e
            punti difficili da osservare da terra.
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