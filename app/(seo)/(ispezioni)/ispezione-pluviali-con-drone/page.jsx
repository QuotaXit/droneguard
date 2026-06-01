import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione pluviali con drone | DroneGuard",
  description:
    "Richiedi un'ispezione pluviali con drone. Trova piloti drone per controlli visivi di pluviali, gronde, facciate, scarichi, discendenti, infiltrazioni e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni pluviali con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione pluviali con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare pluviali, discendenti, gronde, scarichi esterni,
            raccordi, facciate o punti alti dove l'acqua potrebbe creare
            infiltrazioni e danni? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per realizzare foto e video
            dall'esterno. Il drone può essere utile per amministratori di
            condominio, proprietari, imprese edili, tecnici, manutentori e
            professionisti che vogliono ottenere una prima documentazione visiva
            prima di organizzare pulizie, riparazioni, verifiche o interventi più
            complessi.
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
              Controllo visivo pluviali
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di pluviali, discendenti, raccordi, staffe,
              gronde, scarichi, facciate, curve, bocchettoni e punti danneggiati.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video in quota
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere le parti alte dell'edificio da diverse
              angolazioni, mostrando zone che spesso non sono visibili da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Utile per infiltrazioni
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono aiutare a mostrare meglio perdite, macchie,
              parti staccate, discendenti ostruiti o raccordi da controllare.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione pluviali con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione pluviali con drone può essere utile quando bisogna
              osservare tubazioni esterne, discendenti e scarichi posizionati in
              alto, lungo facciate o in punti difficili da raggiungere. I pluviali
              possono presentare rotture, spostamenti, staffe allentate, curve
              danneggiate, raccordi aperti, macchie di umidità, ristagni,
              vegetazione, sporco o segni di perdita dell'acqua piovana.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Da terra spesso non si riesce a capire dove si trova il problema.
              Il drone può raccogliere immagini ravvicinate e panoramiche della
              facciata, mostrando il percorso del pluviale, i collegamenti con la
              gronda, le zone vicine a balconi e cornicioni, gli scarichi
              inferiori e i punti in cui l'acqua potrebbe fuoriuscire o
              raggiungere parti dell'edificio.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce una verifica tecnica, una
              videoispezione interna o l'intervento di un professionista, ma può
              fornire una prima documentazione visiva utile per capire meglio la
              situazione e decidere se contattare una ditta, un lattoniere, un
              manutentore o un tecnico.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Pluviali condominiali</li>
              <li>✅ Discendenti su facciate alte</li>
              <li>✅ Raccordi tra gronda e scarico</li>
              <li>✅ Curve, staffe e fissaggi</li>
              <li>✅ Macchie di umidità sulla facciata</li>
              <li>✅ Segni di perdita o rottura</li>
              <li>✅ Zone vicine a balconi e cornicioni</li>
              <li>✅ Scarichi esterni di tetti e terrazzi</li>
              <li>✅ Punti difficili da osservare da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione pluviali per condomini, case e capannoni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, i pluviali possono attraversare più piani e collegare
            gronde, terrazzi, lastrici solari e scarichi inferiori. Quando si
            notano macchie in facciata, gocciolamenti, distacchi, parti storte o
            problemi dopo forti piogge, un controllo visivo con drone può aiutare
            l'amministratore a raccogliere immagini da mostrare a tecnici e
            imprese.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nelle abitazioni private, ville e case indipendenti, il drone può
            documentare pluviali installati su tetti inclinati, pareti laterali,
            cortili interni, tettoie o zone dove non è semplice arrivare con una
            scala. Le immagini possono essere utili prima di una pulizia, una
            sostituzione o una riparazione.
          </p>

          <p className="leading-8 text-gray-300">
            Anche capannoni, magazzini, aziende, ristoranti e strutture
            commerciali possono richiedere un'ispezione con drone per osservare
            scarichi esterni, pluviali industriali, gronde alte e punti in cui
            l'acqua piovana potrebbe creare problemi alla facciata o alla
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
                Crea il tuo account come cliente, amministratore, proprietario,
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
                Descrivi edificio, zona, problema visibile, altezza indicativa e
                tipo di foto o video richiesti.
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
              Dopo pioggia forte o maltempo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo temporali, vento forte o piogge intense, può essere utile
              controllare visivamente lo stato dei pluviali. Il drone può
              documentare tubi spostati, staffe piegate, raccordi aperti,
              gocciolamenti, sporco accumulato o parti vicine alla gronda che
              sembrano danneggiate.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto può essere mostrato a un'impresa o a un
              manutentore prima di programmare un intervento di riparazione,
              pulizia o sostituzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di ponteggi o piattaforme
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di installare ponteggi, noleggiare piattaforme o mandare
              personale in quota, può essere utile avere una prima visione
              dall'esterno. Il drone può mostrare dove si trova il possibile
              problema e quali parti del pluviale meritano un controllo più
              approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              Questa documentazione preliminare può rendere più chiara la
              richiesta di preventivo e aiutare il professionista a capire meglio
              il tipo di intervento necessario.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione pluviali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            condominio, villa, casa indipendente, capannone, negozio, hotel,
            ristorante, magazzino o struttura commerciale. Scrivi la città, la
            zona, il numero indicativo di piani e il lato dell'edificio da
            controllare. Specifica se il pluviale è su facciata, cortile interno,
            lato strada, copertura, terrazzo o area difficilmente accessibile.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche cosa vuoi documentare: perdita d'acqua, macchie,
            distacco, tubo piegato, staffa rotta, raccordo aperto, gronda
            collegata, scarico ostruito o semplice stato generale. Puoi chiedere
            foto panoramiche, video dall'alto, riprese ravvicinate o immagini dei
            punti più importanti.
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
            Esempio di richiesta per ispezione pluviale con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva dei pluviali di un
              condominio in provincia di Roma. Vorrei foto e video dei
              discendenti sul lato cortile perché dopo la pioggia si vedono
              macchie sulla facciata e possibili perdite dai raccordi. Il
              materiale servirà all'amministratore e all'impresa per valutare un
              intervento di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di edificio, il
            problema da documentare, il materiale richiesto e l'utilizzo finale
            delle immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione pluviali con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione pluviali con drone può variare in base alla
            zona, alla distanza del pilota, all'altezza dell'edificio, al numero
            di lati da controllare, alla complessità del volo e al tipo di
            materiale richiesto. Un controllo rapido di un singolo pluviale è
            diverso da una documentazione completa di più discendenti su un
            condominio o un capannone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per facciata, riprese ravvicinate dei raccordi, video
            panoramici o una raccolta dei punti più importanti da condividere con
            un tecnico.
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
                Posso usare il drone per controllare i pluviali?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dall'esterno.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone pulisce o ripara il pluviale?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Pulizia e
                riparazione devono essere svolte da professionisti o imprese
                qualificate.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare anche gronde e raccordi?
              </h3>
              <p className="text-gray-300">
                Sì, se visibili dall'esterno e se il volo è fattibile, il pilota
                può documentare gronde, raccordi, curve, staffe e scarichi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per amministratori di condominio?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono essere utili per mostrare lo stato dei
                pluviali a tecnici, imprese, condomini o manutentori.
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
            Trova un pilota drone per ispezionare pluviali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di pluviali, discendenti, gronde,
            scarichi, raccordi, facciate, infiltrazioni, macchie, perdite e punti
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