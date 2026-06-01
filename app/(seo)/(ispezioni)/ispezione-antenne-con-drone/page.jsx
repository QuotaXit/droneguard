import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione antenne con drone | DroneGuard",
  description:
    "Richiedi un'ispezione antenne con drone. Trova piloti drone per controlli visivi di antenne, parabole, ripetitori, pali, tetti, staffe, cavi e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni antenne con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione antenne con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare antenne, parabole, pali, ripetitori, staffe, cavi,
            supporti o elementi installati su tetti e coperture? Con DroneGuard
            puoi pubblicare una richiesta e trovare piloti drone disponibili per
            realizzare foto e video dall'alto. Il drone può essere utile per
            proprietari, amministratori di condominio, aziende, tecnici,
            installatori, manutentori e professionisti che vogliono ottenere una
            prima documentazione visiva di punti difficili da raggiungere senza
            dover salire subito sul tetto, montare ponteggi o usare piattaforme.
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
              Controllo visivo antenne
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di antenne TV, parabole, pali, supporti, staffe,
              cavi, fissaggi, tiranti e parti installate in copertura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video in quota
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere l'impianto da più angolazioni e mostrare
              dettagli che spesso non sono visibili da terra o dalle finestre.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Utile prima della manutenzione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con antennisti, tecnici,
              amministratori o imprese prima di programmare un intervento.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione antenne con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione antenne con drone può essere utile quando bisogna
              osservare elementi installati su tetti, terrazzi, lastrici solari,
              capannoni o coperture difficili da raggiungere. Antenne, parabole,
              pali e supporti possono essere esposti a vento, pioggia, vibrazioni,
              deterioramento dei fissaggi, spostamenti, cavi danneggiati o parti
              non più allineate.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Da terra spesso non è possibile capire bene lo stato dell'impianto.
              Il drone può offrire una prospettiva ravvicinata e realizzare foto
              o video dei punti più importanti, come staffe, tiranti, basi di
              fissaggio, collegamenti, cavi, passaggi sulla copertura e parti
              vicine a camini, lucernari, gronde o altri ostacoli.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce l'intervento di un antennista
              o di un tecnico qualificato, ma può fornire una prima documentazione
              visiva utile per capire se serve una manutenzione, una riparazione,
              una rimozione o una verifica più approfondita.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Antenne TV su tetti e terrazzi</li>
              <li>✅ Parabole e supporti esterni</li>
              <li>✅ Pali, staffe e fissaggi</li>
              <li>✅ Cavi visibili e passaggi in copertura</li>
              <li>✅ Tiranti e punti di ancoraggio</li>
              <li>✅ Ripetitori e piccoli apparati esterni</li>
              <li>✅ Elementi spostati dal vento</li>
              <li>✅ Zone vicine a camini o lucernari</li>
              <li>✅ Punti difficili da osservare da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione antenne per condomini, case e aziende
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, le antenne possono essere installate su parti comuni,
            terrazzi di copertura, lastrici solari o tetti inclinati. Quando
            arriva una segnalazione di segnale debole, parabola spostata, palo
            inclinato, cavo danneggiato o supporto deteriorato, avere immagini
            dall'alto può aiutare l'amministratore a mostrare la situazione a un
            antennista o a un tecnico prima di organizzare l'intervento.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per una casa privata, una villa o un piccolo edificio, il drone può
            documentare antenne installate in punti alti o scomodi, evitando una
            prima salita sul tetto solo per capire cosa è visibile dall'esterno.
            Le immagini possono essere utili anche dopo temporali, vento forte o
            lavori in copertura.
          </p>

          <p className="leading-8 text-gray-300">
            Anche aziende, capannoni, strutture ricettive, uffici e immobili
            commerciali possono richiedere un controllo visivo con drone per
            documentare apparati esterni, antenne, parabole, punti di fissaggio e
            cavi presenti su coperture estese.
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
                Crea il tuo account come cliente, amministratore, tecnico,
                azienda, proprietario o pilota drone.
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
                Descrivi edificio, zona, tipo di antenna, copertura e immagini
                che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Ricevi candidature dai piloti interessati e scegli il
                professionista più adatto al servizio richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di chiamare un antennista
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare un intervento diretto, può essere utile
              raccogliere immagini dell'impianto. Il drone può mostrare se
              l'antenna sembra spostata, se il palo appare inclinato, se alcuni
              cavi sono visibili o se ci sono parti che meritano un controllo più
              accurato.
            </p>

            <p className="leading-8 text-gray-300">
              Questa documentazione non risolve il problema tecnico, ma può
              aiutare a spiegare meglio la situazione al professionista e a
              preparare un intervento più mirato.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Dopo vento, temporali o lavori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo vento forte, pioggia intensa, grandine o lavori sul tetto,
              può essere utile verificare visivamente lo stato di antenne,
              parabole e supporti. Il drone può documentare eventuali elementi
              spostati, cavi fuori posizione o parti vicine alla copertura che
              sembrano danneggiate.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto può essere archiviato, condiviso con un
              amministratore o mostrato al tecnico incaricato della manutenzione.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione antenne
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            condominio, villa, casa indipendente, capannone, hotel, ufficio o
            struttura commerciale. Scrivi la città, la zona, il numero indicativo
            di piani e il tipo di copertura, se lo conosci. Specifica se si
            tratta di antenna TV, parabola, palo, ripetitore, impianto condiviso o
            apparato esterno da documentare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche il motivo della richiesta: segnale debole, antenna
            spostata, controllo dopo vento forte, verifica di cavi, documentazione
            prima di una manutenzione, richiesta dell'amministratore o semplice
            controllo visivo. Puoi chiedere foto ravvicinate, video panoramici,
            immagini da più lati o una panoramica generale della copertura.
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
            Esempio di richiesta per ispezione antenna con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva di alcune antenne su un
              condominio in provincia di Roma. Vorrei foto e video di antenne,
              pali, staffe e cavi perché dopo il vento alcuni condomini hanno
              segnalato problemi di ricezione. Il materiale servirà
              all'amministratore e all'antennista per valutare un intervento.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di impianto, il
            problema da documentare, il materiale richiesto e l'utilizzo finale
            delle immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione antenne con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione antenne con drone può variare in base alla
            zona, alla distanza del pilota, all'altezza dell'edificio, alla
            complessità della copertura, al numero di antenne o parabole da
            documentare e al tipo di materiale richiesto. Un controllo rapido di
            una singola antenna è diverso da una documentazione completa di più
            impianti su un condominio o un capannone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per punto, riprese da più angolazioni, video panoramici o una
            raccolta dei dettagli principali da inviare al tecnico.
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
                Posso usare il drone per controllare antenne e parabole?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dall'esterno.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone ripara l'antenna?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. La riparazione deve
                essere eseguita da un antennista o da un tecnico qualificato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare staffe e cavi?
              </h3>
              <p className="text-gray-300">
                Sì, se visibili dall'esterno e se il volo è fattibile, il pilota
                può documentare staffe, cavi, pali, supporti e fissaggi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per amministratori di condominio?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono essere utili per mostrare lo stato
                dell'impianto a tecnici, antennisti, condomini o imprese.
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
            Trova un pilota drone per ispezionare antenne
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di antenne, parabole, pali, staffe,
            cavi, supporti, ripetitori, tetti, coperture e punti difficili da
            osservare da terra.
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