import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per frane e smottamenti | DroneGuard",
  description:
    "Trova piloti drone per frane, smottamenti, dissesti, versanti, terreni instabili, documentazione visiva, sopralluoghi e monitoraggio ambientale."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per ambiente e territorio
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per frane e smottamenti
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi documentare una frana, uno smottamento, un dissesto del terreno,
            un versante instabile, una scarpata, una strada danneggiata, un terreno
            agricolo colpito da cedimenti o un'area difficile da raggiungere in
            sicurezza? Con DroneGuard puoi pubblicare una richiesta e trovare
            piloti drone disponibili per realizzare foto aeree, video di
            sopralluogo, immagini dall'alto e documentazione visiva utile a
            tecnici, proprietari, agronomi, geologi, imprese, amministratori,
            enti locali, consulenti e professionisti che devono osservare meglio
            lo stato dell'area.
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
              Frane e cedimenti
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per documentare movimenti del
              terreno, scarpate, versanti, strade danneggiate e aree interessate
              da dissesti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Sopralluoghi visivi
            </h2>
            <p className="text-gray-300">
              Ottieni immagini di zone difficili da raggiungere da terra, utili
              per una prima documentazione e per condividere la situazione con
              tecnici e professionisti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Monitoraggio nel tempo
            </h2>
            <p className="text-gray-300">
              Richiedi riprese periodiche per confrontare l'evoluzione visiva
              dell'area e conservare un archivio fotografico ordinato.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per frane e smottamenti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Frane, smottamenti e dissesti possono interessare aree difficili da
              raggiungere, terreni in pendenza, versanti instabili, strade
              secondarie, scarpate, zone agricole, corsi d'acqua, muri di
              contenimento, sentieri e proprietà private. In molti casi osservare
              l'area solo da terra non basta per capire l'estensione visiva del
              fenomeno e la posizione delle zone più colpite.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di ottenere una visione dall'alto senza dover
              entrare subito nell'area interessata. Le immagini possono mostrare
              il distacco del terreno, la zona di accumulo, eventuali crepe
              visibili, la relazione con strade, case, terreni, recinzioni, fossi,
              alberi, scarpate e aree circostanti. Questo materiale può essere
              utile per descrivere meglio la situazione a tecnici e professionisti.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce valutazioni geologiche, verifiche tecniche,
              perizie, rilievi ufficiali o decisioni di sicurezza. È uno strumento
              di supporto visivo che può aiutare a documentare l'area e a
              comunicare con maggiore chiarezza lo stato dei luoghi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per frane e smottamenti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di frane e dissesti</li>
              <li>✅ Video di sopralluogo su versanti e scarpate</li>
              <li>✅ Riprese di strade, terreni e zone danneggiate</li>
              <li>✅ Documentazione visiva per tecnici e proprietari</li>
              <li>✅ Immagini per report, comunicazioni e preventivi</li>
              <li>✅ Riprese prima e dopo interventi di sistemazione</li>
              <li>✅ Monitoraggio visivo periodico dell'area</li>
              <li>✅ Foto di fossi, corsi d'acqua e pendii</li>
              <li>✅ Supporto visivo per geologi, imprese ed enti locali</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per versanti, scarpate e terreni instabili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I dissesti del terreno possono svilupparsi in modo irregolare e
            coinvolgere aree più ampie di quanto sembri a prima vista. Una frana
            può interessare un versante, una strada, un terreno agricolo, una
            scarpata dietro un edificio, un tratto vicino a un fosso o un'area
            con vegetazione fitta. Le riprese drone possono aiutare a vedere
            meglio l'insieme dell'area e a documentare la posizione dei punti
            interessati.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini dall'alto possono essere utili per mostrare la direzione
            dello smottamento, la zona di distacco, la zona di accumulo, eventuali
            ostacoli, recinzioni coinvolte, muri danneggiati, accessi interrotti,
            alberi inclinati, scoli d'acqua, terreni agricoli e aree circostanti.
            Questo può aiutare nella comunicazione con geologi, tecnici, imprese,
            amministratori e proprietari.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni area interessata da frana deve essere trattata con prudenza. Il
            pilota drone dovrà valutare distanza, sicurezza del decollo,
            autorizzazioni, condizioni meteo, presenza di persone e limiti
            operativi della zona.
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
                Crea il tuo account come proprietario, tecnico, impresa,
                amministratore, consulente, ente, professionista o pilota drone.
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
                Descrivi l'area, la città, il tipo di dissesto, le zone da
                riprendere e il materiale che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità operative, tempi e consegna dei file.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione per tecnici, geologi e imprese
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando bisogna descrivere una frana o uno smottamento a un tecnico,
              avere immagini chiare può semplificare molto il primo confronto. Le
              foto aeree possono mostrare l'estensione visiva dell'area, la
              posizione del terreno ceduto, gli accessi, la distanza da edifici,
              strade, muri, fossi e altri elementi importanti del contesto.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini drone non sono una perizia, ma possono aiutare geologi,
              imprese, tecnici e proprietari a capire meglio cosa osservare durante
              un sopralluogo e quali zone meritano maggiore attenzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Materiale per enti, amministratori e proprietari
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In alcuni casi frane e smottamenti interessano strade private,
              terreni agricoli, aree condominiali, proprietà rurali, zone comunali
              o accessi condivisi. Le immagini dall'alto possono essere utili per
              comunicare la situazione a enti, amministratori, proprietari,
              assicurazioni, imprese e soggetti coinvolti.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale può essere inserito in email, report fotografici,
              richieste di intervento, archivi, documentazione prima e dopo lavori
              di sistemazione o comunicazioni interne.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Riprese prima e dopo interventi di messa in sicurezza
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere richiesto sia prima sia dopo un intervento.
            Prima dei lavori, le immagini possono documentare lo stato iniziale
            della frana, la posizione del dissesto, la situazione del versante, gli
            accessi e le zone più colpite. Dopo l'intervento, le riprese possono
            mostrare sistemazioni del terreno, opere di contenimento, pulizia,
            ripristino di strade, canalizzazioni, drenaggi, reti o altre attività
            realizzate da imprese e tecnici.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il confronto prima e dopo può essere utile per proprietari, committenti,
            amministratori, imprese, tecnici e soggetti che devono conservare una
            memoria visiva del lavoro svolto. Le immagini possono anche aiutare a
            raccontare in modo più chiaro la trasformazione dell'area.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi richiedere una singola uscita oppure più riprese nel
            tempo, in base alla durata degli interventi e alla necessità di
            documentazione.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Terreni agricoli
            </h2>
            <p className="text-gray-300">
              Riprese per uliveti, vigneti, campi, colline, strade poderali,
              fossi, scarpate e terreni interessati da cedimenti o smottamenti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Strade e accessi
            </h2>
            <p className="text-gray-300">
              Foto e video di strade private, sentieri, accessi rurali, rampe,
              muri di sostegno, cunette, scarpate e zone con danni visibili.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ambiente e territorio
            </h2>
            <p className="text-gray-300">
              Materiale visivo per documentare dissesti, versanti, corsi d'acqua,
              pendii, aree verdi, zone rurali e interventi di ripristino.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene
            l'area e il tipo di documentazione che ti serve. Puoi indicare la
            città, la zona, se si tratta di una frana, uno smottamento, un cedimento
            del terreno, una strada danneggiata, una scarpata, un terreno agricolo
            o un versante da osservare.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi foto generali, video panoramici, immagini
            di dettaglio, riprese prima e dopo un intervento, documentazione per
            un tecnico, materiale per assicurazione, immagini per un'impresa o
            riprese periodiche per confrontare l'evoluzione visiva dell'area.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso al terreno, presenza
            di strade chiuse o zone non sicure, punto di decollo possibile,
            referente sul posto, orari preferiti, eventuali limitazioni dell'area e
            modalità di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per frana o smottamento
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di uno
              smottamento su un terreno in pendenza. Mi servono riprese dall'alto
              della zona di distacco, della parte di accumulo, della strada
              vicina, del fosso e dell'area circostante. Il materiale verrà usato
              per condividere la situazione con un tecnico e con un'impresa che
              dovrà valutare un possibile intervento.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di area,
            le zone da riprendere, la finalità del servizio e le attenzioni
            operative necessarie.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per frane e smottamenti?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla distanza, alla
            raggiungibilità dell'area, alla durata delle riprese, alla complessità
            del luogo, alla presenza di zone difficili o non sicure, al numero di
            aree da documentare e al tipo di materiale finale richiesto. Una
            semplice documentazione fotografica ha un costo diverso rispetto a un
            servizio con video, più punti di ripresa e monitoraggio periodico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcuni clienti chiedono solo file
            grezzi, altri preferiscono foto selezionate, video brevi, cartelle
            ordinate, immagini divise per area o materiale pronto da allegare a
            email, report, richieste di intervento o documenti da condividere con
            tecnici e imprese.
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
                Posso usare il drone per documentare una frana?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per documentare frane,
                smottamenti, versanti, scarpate, terreni agricoli, strade
                danneggiate e aree difficili da osservare da terra.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un geologo o una perizia?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce solo documentazione visiva. Per valutazioni
                tecniche, geologiche, perizie e decisioni di sicurezza servono
                professionisti abilitati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere riprese prima e dopo i lavori?
              </h3>
              <p className="text-gray-300">
                Sì, puoi indicare nella richiesta se vuoi documentare lo stato
                iniziale dell'area e poi il risultato dopo interventi di
                sistemazione o ripristino.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si può fare il volo in una zona pericolosa?
              </h3>
              <p className="text-gray-300">
                Dipende dalle condizioni del luogo. Il pilota deve valutare
                sicurezza, punto di decollo, distanza, autorizzazioni, presenza di
                persone e limiti operativi prima di effettuare il servizio.
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
            Trova un pilota drone per frane e smottamenti
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi visivi,
            documentazione di frane, smottamenti, dissesti, versanti, scarpate,
            strade danneggiate, terreni agricoli e aree interessate da cedimenti.
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