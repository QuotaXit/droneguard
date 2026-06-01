import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione cornicioni con drone | DroneGuard",
  description:
    "Richiedi un'ispezione cornicioni con drone. Trova piloti drone per controlli visivi di cornicioni, frontalini, facciate, balconi, gronde, crepe, distacchi e punti alti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni cornicioni con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione cornicioni con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare cornicioni, bordi di copertura, frontalini,
            gronde, elementi sporgenti o parti alte della facciata? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto e video ravvicinati delle zone da
            osservare. Il drone può essere utile per amministratori di
            condominio, tecnici, imprese edili, proprietari e professionisti che
            vogliono ottenere una prima documentazione visiva di punti difficili
            da raggiungere da terra, senza dover organizzare subito ponteggi,
            piattaforme o accessi complessi.
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
              Controllo visivo dei cornicioni
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di cornicioni, frontalini, bordi di copertura,
              gronde, parti sporgenti, crepe, macchie o distacchi visibili.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese da punti alti
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può osservare zone alte dell'edificio da più angolazioni,
              raccogliendo foto e video utili per una prima valutazione visiva.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Utile prima dei lavori
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono aiutare a capire quali punti mostrare a
              tecnici, imprese, amministratori o professionisti incaricati.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione cornicioni con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione dei cornicioni con drone può essere richiesta quando
              bisogna osservare parti alte di un edificio che non sono facilmente
              visibili da terra. Cornicioni, bordi di copertura, elementi
              decorativi, gronde, frontalini e parti sporgenti possono presentare
              crepe, macchie, distacchi di intonaco, rigonfiamenti, infiltrazioni
              o segni di deterioramento che meritano un controllo più attento.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              In molti casi, prima di chiamare una ditta, installare un ponteggio
              o noleggiare una piattaforma, può essere utile avere una prima
              raccolta di immagini. Il drone permette di osservare il cornicione
              da prospettive diverse, avvicinandosi visivamente ai punti più
              importanti e documentando lo stato generale dell'edificio.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto non sostituisce una perizia tecnica, una
              diagnosi strutturale o una valutazione professionale. Tuttavia può
              essere molto utile per mostrare la situazione a un tecnico, a un
              amministratore, a un'impresa edile o a un proprietario prima di
              decidere il passo successivo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Cornicioni condominiali</li>
              <li>✅ Frontalini e bordi di copertura</li>
              <li>✅ Gronde e zone vicine al tetto</li>
              <li>✅ Crepe e fessurazioni visibili</li>
              <li>✅ Distacchi di intonaco</li>
              <li>✅ Macchie di umidità o infiltrazioni</li>
              <li>✅ Elementi sporgenti della facciata</li>
              <li>✅ Balconi e sottobalconi vicini</li>
              <li>✅ Punti alti difficili da vedere da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione cornicioni per condomini, palazzi e immobili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, il controllo dei cornicioni può diventare importante
            quando ci sono segnalazioni di parti rovinate, caduta di piccoli
            frammenti, macchie anomale, crepe visibili o dubbi sullo stato
            esterno dell'edificio. Un drone può aiutare a documentare le zone
            alte senza dover osservare tutto solo dal basso, dove spesso i
            dettagli risultano poco chiari.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un amministratore di condominio, avere foto e video ordinati può
            semplificare la comunicazione con i condomini, con il tecnico
            incaricato o con le imprese che devono preparare un preventivo. Le
            immagini possono mostrare quali facciate sono interessate, dove si
            trovano i punti critici e quali parti meritano un sopralluogo più
            approfondito.
          </p>

          <p className="leading-8 text-gray-300">
            Anche proprietari di ville, edifici privati, capannoni, strutture
            commerciali o immobili in vendita possono richiedere un controllo
            visivo con drone per documentare lo stato dei cornicioni prima di
            lavori, ristrutturazioni, manutenzioni o valutazioni immobiliari.
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
                Indica edificio, zona, altezza indicativa, lati da controllare e
                tipo di immagini richieste.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di ponteggi, cestelli o piattaforme
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare un intervento più impegnativo, un controllo
              visivo con drone può aiutare a capire meglio la situazione. Le
              immagini possono mostrare dove sono presenti segni evidenti di
              degrado, quali punti sembrano più critici e quali facciate
              richiedono maggiore attenzione.
            </p>

            <p className="leading-8 text-gray-300">
              Questo non elimina la necessità di un sopralluogo tecnico quando
              serve, ma può aiutare a prepararlo meglio, evitando spiegazioni
              confuse e fornendo al professionista una base visiva da cui
              partire.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Foto ordinate dei punti critici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Puoi chiedere al pilota drone di realizzare foto panoramiche
              dell'edificio e immagini più ravvicinate dei cornicioni da
              controllare. Il materiale può essere organizzato per lato del
              fabbricato, piano, prospetto, zona o punto specifico.
            </p>

            <p className="leading-8 text-gray-300">
              Una documentazione ordinata può essere utile per confronti futuri,
              riunioni condominiali, richieste di preventivo, pratiche interne o
              comunicazioni tra proprietari, amministratori, tecnici e imprese.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione cornicioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi il tipo di immobile:
            condominio, palazzo, villa, capannone, edificio commerciale o
            struttura privata. Indica la città, la zona, il numero indicativo di
            piani, il lato dell'edificio da controllare e il motivo della
            richiesta. Specifica se ti servono foto, video, riprese ravvicinate o
            una panoramica generale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile indicare anche il problema che vuoi documentare: crepe,
            distacchi, infiltrazioni, macchie, parti rovinate, caduta di
            materiale, verifica prima dei lavori o semplice controllo visivo. Più
            la richiesta è chiara, più il pilota potrà capire il tipo di servizio
            richiesto e valutare tempi, fattibilità e modalità del volo.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni ispezione deve rispettare sicurezza, privacy, condizioni meteo,
            ostacoli, spazio disponibile, presenza di persone e normative
            applicabili. Sarà il pilota a valutare se il volo può essere svolto e
            come organizzarlo in modo corretto.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ispezione cornicioni con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva dei cornicioni di un
              condominio in provincia di Roma. Vorrei foto e video dei lati
              esterni dell'edificio perché sono visibili crepe e possibili
              distacchi di intonaco. Il materiale servirà all'amministratore e al
              tecnico per valutare un intervento di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta scritta in questo modo aiuta il pilota a capire subito
            il luogo, il problema da documentare, il tipo di immagini richieste e
            l'utilizzo finale del materiale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione cornicioni con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione cornicioni con drone può variare in base
            alla città, alla distanza del pilota, all'altezza dell'edificio, al
            numero di lati da controllare, alla complessità del contesto e al
            tipo di materiale richiesto. Un controllo rapido su una sola facciata
            è diverso da una documentazione completa di un intero condominio o di
            un edificio molto esteso.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di consegna può incidere sul preventivo. Alcuni clienti
            chiedono solo foto e video grezzi, altri preferiscono una selezione
            ordinata, immagini divise per prospetto, riprese ravvicinate dei
            punti critici o un piccolo archivio fotografico più completo.
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
                Posso usare il drone per controllare i cornicioni?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dei
                cornicioni.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                L'ispezione con drone sostituisce una perizia?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva, ma non sostituisce
                una perizia tecnica o una valutazione professionale quando
                necessaria.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per un amministratore di condominio?
              </h3>
              <p className="text-gray-300">
                Sì, può essere utile per mostrare lo stato dei cornicioni a
                condomini, tecnici, imprese o professionisti incaricati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare anche gronde e frontalini?
              </h3>
              <p className="text-gray-300">
                Sì, se il volo è fattibile e sicuro, il pilota può documentare
                anche gronde, frontalini, bordi di copertura e zone vicine.
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
            Trova un pilota drone per ispezionare cornicioni
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di cornicioni, frontalini, gronde,
            facciate, balconi, bordi di copertura, crepe, distacchi e punti alti
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