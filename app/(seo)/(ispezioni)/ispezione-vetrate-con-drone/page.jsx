import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione vetrate con drone | DroneGuard",
  description:
    "Richiedi un'ispezione vetrate con drone. Trova piloti drone per controlli visivi di facciate vetrate, finestre alte, pareti continue, vetri, telai, guarnizioni e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni vetrate con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione vetrate con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare vetrate alte, facciate continue, finestre difficili
            da raggiungere, pareti in vetro, telai esterni, guarnizioni o pannelli
            trasparenti installati su edifici, uffici, hotel, condomini o locali
            commerciali? Con DroneGuard puoi pubblicare una richiesta e trovare
            piloti drone disponibili per realizzare foto e video dall'esterno. Il
            drone può essere utile per proprietari, amministratori, aziende,
            tecnici, manutentori e imprese che vogliono ottenere una prima
            documentazione visiva prima di pulizie, riparazioni, verifiche per
            infiltrazioni o richieste di preventivo.
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
              Controllo visivo vetrate
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di vetrate esterne, finestre alte, facciate
              continue, vetri, telai, guarnizioni, raccordi, pannelli e punti
              danneggiati.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video dall'esterno
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere la facciata da più angolazioni, mostrando
              zone alte o laterali che spesso non sono visibili bene da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Utile per manutenzione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con tecnici, imprese,
              amministratori, vetrai, serramentisti o manutentori prima di un
              intervento.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione vetrate con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione vetrate con drone può essere utile quando bisogna
              osservare parti esterne di un edificio che non sono facilmente
              raggiungibili. Le vetrate alte, le facciate continue, i grandi
              infissi, le finestre su piani superiori e i pannelli trasparenti
              possono presentare sporco, crepe, vetri lesionati, guarnizioni
              rovinate, telai deformati, infiltrazioni, condensa, macchie o
              elementi da controllare prima di una manutenzione.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Da terra spesso si vede solo una parte della facciata e molti
              dettagli restano poco chiari. Il drone può raccogliere foto e video
              da diverse quote, mostrando meglio i punti critici, le zone laterali,
              gli angoli, i collegamenti con la muratura, i profili esterni e le
              parti vicine a balconi, terrazzi, coperture o cornicioni.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce una verifica tecnica, una
              perizia, una prova di tenuta o l'intervento di un professionista
              qualificato. Può però fornire una prima documentazione visiva utile
              per capire meglio la situazione e decidere se coinvolgere un
              tecnico, un'impresa, un vetraio o un serramentista.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Facciate vetrate</li>
              <li>✅ Vetrate alte di uffici e hotel</li>
              <li>✅ Finestre difficili da raggiungere</li>
              <li>✅ Telai, profili e guarnizioni esterne</li>
              <li>✅ Vetri lesionati o pannelli rovinati</li>
              <li>✅ Macchie, sporco e aloni visibili</li>
              <li>✅ Zone con possibili infiltrazioni</li>
              <li>✅ Pareti continue e superfici trasparenti</li>
              <li>✅ Punti difficili da osservare da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione vetrate per uffici, condomini, hotel e negozi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Negli edifici direzionali e negli uffici, le vetrate possono coprire
            superfici molto ampie e svilupparsi su più piani. In questi casi,
            avere una documentazione esterna può aiutare a capire quali zone
            richiedono pulizia, riparazione, sostituzione di elementi o controllo
            più approfondito da parte di un tecnico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            In hotel, ristoranti, showroom, negozi e strutture commerciali, le
            vetrate hanno anche un forte impatto sull'immagine del luogo. Vetri
            sporchi, pannelli danneggiati o guarnizioni rovinate possono essere
            difficili da valutare senza una vista dall'esterno. Il drone può
            documentare la situazione e aiutare a preparare una richiesta di
            preventivo più chiara.
          </p>

          <p className="leading-8 text-gray-300">
            Anche condomini, palazzi, ville e immobili in vendita possono
            richiedere foto e video di vetrate, finestre alte, chiusure esterne,
            veranda, pareti trasparenti o infissi difficili da osservare da terra.
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
                azienda, tecnico o pilota drone.
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
                Descrivi edificio, vetrate da controllare, altezza, zona e tipo
                di foto o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Ricevi candidature dai piloti drone interessati e scegli il
                professionista più adatto al controllo richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di pulizie o riparazioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare una pulizia in quota, una piattaforma, un
              intervento su vetri o una verifica da parte di un serramentista, può
              essere utile raccogliere immagini della facciata. Il drone può
              mostrare quali vetrate sembrano più sporche, quali pannelli
              presentano segni visibili e dove si trovano i punti più difficili.
            </p>

            <p className="leading-8 text-gray-300">
              Questa documentazione può aiutare a spiegare meglio il lavoro da
              svolgere e a inviare informazioni più precise alle imprese
              incaricate.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Dopo vento, grandine o urti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo maltempo, grandine, vento forte, lavori esterni o possibili
              urti, può essere utile documentare lo stato delle vetrate. Il drone
              può riprendere eventuali crepe visibili, pannelli danneggiati,
              profili spostati o zone da mostrare a un tecnico.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini non danno una diagnosi tecnica, ma possono rendere più
              semplice capire quali punti approfondire e quali professionisti
              coinvolgere.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione vetrate
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            ufficio, condominio, hotel, negozio, ristorante, showroom, palazzo,
            villa, edificio commerciale o struttura industriale. Scrivi la città,
            la zona, il numero indicativo di piani e il lato dell'edificio da
            controllare. Specifica se si tratta di facciata vetrata, finestre
            alte, parete continua, veranda o pannelli trasparenti.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche il motivo della richiesta: vetro lesionato, sporco,
            pulizia da programmare, infiltrazione, guarnizione rovinata, telaio
            danneggiato, controllo dopo grandine o semplice documentazione visiva.
            Puoi chiedere foto panoramiche, video dall'esterno, riprese
            ravvicinate o immagini da più angolazioni.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni volo deve rispettare sicurezza, privacy, condizioni meteo,
            riflessi, ostacoli, presenza di persone, spazi disponibili e
            normative applicabili. Sarà il pilota a valutare fattibilità,
            modalità e limiti del servizio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ispezione vetrate con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva delle vetrate esterne
              di un edificio commerciale in provincia di Roma. Vorrei foto e
              video dei vetri alti, dei telai e delle guarnizioni perché alcune
              zone sembrano sporche e ci sono possibili infiltrazioni. Il
              materiale servirà al tecnico e all'impresa per valutare pulizia e
              manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di edificio, i
            punti da documentare, il problema visibile e l'utilizzo finale delle
            immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione vetrate con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione vetrate con drone può variare in base alla
            zona, alla distanza del pilota, all'altezza dell'edificio, alla
            dimensione della facciata, al numero di vetrate da documentare e al
            tipo di materiale richiesto. Un controllo rapido di alcune finestre è
            diverso da una documentazione completa di una facciata vetrata su più
            piani.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per piano, lato dell'edificio, zona o punto critico, oppure
            una raccolta più completa da condividere con un tecnico.
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
                Posso usare il drone per controllare vetrate alte?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dall'esterno.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce una verifica tecnica?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Vetri, telai,
                infiltrazioni e sicurezza devono essere valutati da professionisti
                qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare telai e guarnizioni?
              </h3>
              <p className="text-gray-300">
                Sì, se visibili dall'esterno e se il volo è fattibile, il pilota
                può documentare telai, profili, guarnizioni e raccordi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile prima di una pulizia in quota?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono aiutare a capire quali vetrate sono più
                sporche, difficili da raggiungere o da mostrare all'impresa di
                pulizia.
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
            Trova un pilota drone per ispezionare vetrate
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di vetrate, facciate continue,
            finestre alte, telai, guarnizioni, vetri, pannelli trasparenti,
            infiltrazioni e punti difficili da osservare da terra.
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