import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione canne fumarie con drone | DroneGuard",
  description:
    "Richiedi un'ispezione canne fumarie con drone. Trova piloti drone per controlli visivi esterni di comignoli, camini, tetti, coperture, cornicioni e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni canne fumarie con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione canne fumarie con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare visivamente canne fumarie, comignoli, camini,
            torrini, terminali di scarico o elementi presenti sulla copertura?
            Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto e video dall'alto delle parti esterne
            difficili da osservare da terra. Il drone può essere utile per
            proprietari, amministratori di condominio, tecnici, imprese edili,
            manutentori e professionisti che hanno bisogno di una prima
            documentazione visiva prima di organizzare interventi, verifiche,
            manutenzioni o sopralluoghi più approfonditi.
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
              Controllo esterno
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di comignoli, canne fumarie, camini, terminali,
              coperture, scossaline, tegole vicine e punti visibili dall'esterno.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può raccogliere materiale visivo da diverse angolazioni,
              utile per osservare zone alte, tetti inclinati e parti difficili da
              raggiungere.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima della manutenzione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono aiutare a spiegare meglio la situazione a
              tecnici, manutentori, fumisti, imprese edili o amministratori.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione canne fumarie con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione con drone può essere utile quando bisogna osservare
              l'esterno di una canna fumaria o di un comignolo senza salire
              direttamente sul tetto. In molti edifici, soprattutto condomini,
              ville, case indipendenti, strutture ricettive, ristoranti o
              immobili con coperture complesse, alcune parti non sono visibili da
              terra e richiedono una prospettiva dall'alto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può aiutare a documentare lo stato esterno di comignoli,
              terminali, cappelli, murature, scossaline, tegole vicine, crepe,
              macchie, distacchi, parti inclinate, elementi spostati o zone
              deteriorate. Questo tipo di materiale può essere utile prima di
              chiamare un tecnico, un fumista, un'impresa o un manutentore.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce verifiche interne, prove
              tecniche, manutenzioni obbligatorie o valutazioni professionali,
              ma può fornire una prima documentazione visiva chiara delle parti
              esterne e aiutare a capire quali punti meritano maggiore
              attenzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Canne fumarie esterne</li>
              <li>✅ Comignoli e camini</li>
              <li>✅ Cappelli e terminali</li>
              <li>✅ Scossaline e raccordi</li>
              <li>✅ Tegole vicine alla canna fumaria</li>
              <li>✅ Crepe o distacchi visibili</li>
              <li>✅ Macchie e segni di deterioramento</li>
              <li>✅ Coperture e tetti inclinati</li>
              <li>✅ Punti alti difficili da vedere da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione drone per camini, comignoli e coperture
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le canne fumarie si trovano spesso in punti scomodi: tetti inclinati,
            coperture alte, condomini, ville, edifici storici, capannoni,
            ristoranti o strutture con accessi complessi. In queste situazioni,
            ottenere immagini dall'alto può essere utile per capire lo stato
            generale dell'elemento e mostrare a un professionista eventuali
            anomalie visibili.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può fotografare il comignolo da più lati, riprendere il
            collegamento con la copertura, mostrare tegole spostate, parti
            lesionate, intonaci deteriorati, cappelli inclinati o elementi
            esterni che sembrano danneggiati. Le immagini possono essere utili
            per una prima valutazione, per richiedere preventivi o per preparare
            un sopralluogo tecnico.
          </p>

          <p className="leading-8 text-gray-300">
            Per condomini e amministratori, la documentazione visiva può aiutare
            anche a comunicare meglio con i proprietari, con i tecnici incaricati
            o con le imprese che dovranno valutare eventuali interventi sulla
            copertura.
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
                proprietario, azienda o pilota drone.
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
                Descrivi immobile, zona, altezza, tipo di copertura e parti della
                canna fumaria da documentare.
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
              Prima di salire sul tetto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare accessi in quota, piattaforme, ponteggi o
              interventi diretti sulla copertura, può essere utile raccogliere
              immagini dall'alto. Il drone può mostrare lo stato esterno della
              canna fumaria e aiutare a capire se servono controlli più
              approfonditi da parte di un professionista.
            </p>

            <p className="leading-8 text-gray-300">
              Questa fase preliminare può aiutare a ridurre dubbi iniziali,
              rendere più chiara la richiesta di intervento e fornire materiale
              visivo utile a chi dovrà valutare il lavoro.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Materiale utile per tecnici e manutentori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Puoi chiedere al pilota drone foto generali della copertura,
              immagini ravvicinate del comignolo, video panoramici e dettagli dei
              punti più importanti. Il materiale può essere condiviso con
              fumisti, imprese, tecnici, amministratori o proprietari.
            </p>

            <p className="leading-8 text-gray-300">
              Una documentazione ordinata rende più semplice spiegare il problema
              e può aiutare il professionista a capire meglio dove concentrare
              l'attenzione durante il sopralluogo.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione canne fumarie
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            condominio, villa, casa indipendente, ristorante, agriturismo,
            capannone, hotel o struttura privata. Scrivi la città, la zona,
            l'altezza indicativa dell'edificio e il tipo di copertura, se lo
            conosci. Specifica se la canna fumaria si trova su tetto piano, tetto
            inclinato, terrazzo, copertura industriale o zona difficilmente
            accessibile.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche cosa vuoi documentare: comignolo danneggiato, cappello
            inclinato, crepe, macchie, infiltrazioni, tegole vicine, scossaline,
            parte esterna della canna fumaria o semplice controllo visivo prima
            di una manutenzione. Puoi richiedere foto, video, riprese da più lati
            o immagini ravvicinate dei punti più importanti.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni volo deve rispettare sicurezza, privacy, condizioni meteo,
            ostacoli, spazio disponibile, presenza di persone e normative
            applicabili. Sarà il pilota a valutare se il servizio può essere
            svolto e con quali modalità.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ispezione canna fumaria con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllo visivo esterno di una canna
              fumaria su un tetto in provincia di Roma. Vorrei foto e video del
              comignolo, del cappello e delle tegole vicine perché devo mostrare
              il materiale a un tecnico prima di organizzare una manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di immobile, il
            punto da controllare, il materiale richiesto e lo scopo della
            documentazione.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione canne fumarie con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione canne fumarie con drone può variare in base
            alla zona, alla distanza del pilota, all'altezza dell'edificio, al
            tipo di copertura, alla complessità del volo e al materiale richiesto.
            Un controllo semplice di un comignolo su una villetta è diverso da
            una documentazione completa su un condominio alto o su una struttura
            con più terminali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate, riprese da più angolazioni, video panoramici o una raccolta
            dei punti più importanti da condividere con un tecnico.
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
                Posso usare il drone per controllare una canna fumaria?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per foto e video della parte esterna.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone controlla anche l'interno della canna fumaria?
              </h3>
              <p className="text-gray-300">
                No, questa pagina riguarda il controllo visivo esterno dall'alto.
                Per verifiche interne servono professionisti e strumenti adatti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile prima di chiamare un manutentore?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono aiutare a mostrare meglio la situazione a
                un tecnico, un fumista, un'impresa o un amministratore.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare anche tegole e scossaline vicine?
              </h3>
              <p className="text-gray-300">
                Sì, se il volo è fattibile e sicuro, il pilota può documentare
                anche le parti visibili della copertura vicine alla canna fumaria.
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
            Trova un pilota drone per ispezionare canne fumarie
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi esterni di canne fumarie, comignoli,
            camini, coperture, tegole, scossaline, tetti e punti difficili da
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