import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione balconi con drone | DroneGuard",
  description:
    "Richiedi un'ispezione balconi con drone. Trova piloti drone per controlli visivi di balconi, frontalini, sottobalconi, parapetti, facciate, distacchi, crepe e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni balconi con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione balconi con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di controllare balconi, frontalini, sottobalconi,
            parapetti, cornicioni o parti esterne difficili da raggiungere? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto e video ravvicinati delle zone da
            osservare. Il drone può essere utile per amministratori di
            condominio, proprietari, tecnici, imprese edili e professionisti che
            vogliono ottenere una prima documentazione visiva senza dover
            necessariamente montare subito ponteggi, piattaforme o sistemi di
            accesso complessi.
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
              Controllo visivo balconi
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di balconi, frontalini, sottobalconi, parapetti,
              ringhiere, crepe, macchie, distacchi o parti rovinate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video ravvicinati
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può raccogliere materiale visivo da diverse angolazioni,
              utile per osservare meglio punti alti o difficili da vedere da
              terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per condomini e tecnici
            </h2>
            <p className="leading-7 text-gray-300">
              Un servizio utile per amministratori, proprietari, geometri,
              architetti, imprese, periti e manutentori.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione balconi con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione balconi con drone può essere richiesta quando bisogna
              osservare lo stato esterno di un edificio senza avere una visione
              chiara da terra. I balconi, soprattutto nei condomini alti, possono
              presentare parti difficili da controllare: frontalini, spigoli,
              sottobalconi, giunti, ferri scoperti, intonaco deteriorato,
              infiltrazioni, macchie di umidità, crepe o piccoli distacchi.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone non sostituisce una perizia tecnica, una diagnosi
              strutturale o un controllo professionale eseguito da un tecnico
              abilitato, ma può offrire una documentazione visiva molto utile per
              capire meglio dove intervenire, quali zone approfondire e come
              organizzare un eventuale sopralluogo successivo.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il condominio o l'immobile, indicare
              cosa vuoi controllare e ricevere candidature da piloti drone
              interessati. In questo modo puoi scegliere un operatore in base
              alla zona, alla disponibilità e al tipo di materiale fotografico o
              video richiesto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Frontalini dei balconi</li>
              <li>✅ Sottobalconi e intradossi</li>
              <li>✅ Parapetti e ringhiere</li>
              <li>✅ Crepe e fessurazioni visibili</li>
              <li>✅ Distacchi di intonaco</li>
              <li>✅ Macchie di umidità o infiltrazioni</li>
              <li>✅ Cornicioni vicini ai balconi</li>
              <li>✅ Facciate condominiali</li>
              <li>✅ Punti alti difficili da osservare</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione balconi per condomini, amministratori e proprietari
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, il controllo dei balconi può diventare importante
            quando ci sono segnalazioni da parte dei residenti, dubbi su parti
            ammalorate, necessità di programmare lavori o richieste di
            documentazione prima di contattare un'impresa. Il drone può aiutare a
            osservare più balconi in modo ordinato, raccogliendo foto e video da
            diverse quote e prospettive.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per un amministratore di condominio, avere immagini chiare può
            facilitare la comunicazione con condomini, tecnici e imprese. Il
            materiale raccolto può essere condiviso con un geometra, un
            architetto, un ingegnere o una ditta incaricata di valutare eventuali
            interventi di manutenzione.
          </p>

          <p className="leading-8 text-gray-300">
            Anche un proprietario privato può richiedere un'ispezione con drone
            per documentare lo stato di un balcone, di un terrazzo o di una
            facciata esterna prima di lavori, vendite, acquisti, ristrutturazioni
            o semplici verifiche visive.
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
                azienda o pilota drone.
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
                Descrivi balconi, edificio, zona, altezza indicativa e tipo di
                materiale che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Ricevi candidature dai piloti drone e scegli il professionista
                più adatto al controllo richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di ponteggi o piattaforme
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare un intervento più costoso o complesso, può
              essere utile raccogliere una prima documentazione visiva. Il drone
              può mostrare quali balconi sembrano più deteriorati, dove sono
              presenti macchie o fessure e quali zone meritano un controllo più
              approfondito da parte di un tecnico.
            </p>

            <p className="leading-8 text-gray-300">
              Questa fase preliminare può aiutare a ridurre incertezze e a
              spiegare meglio la situazione all'impresa o al professionista che
              dovrà poi valutare il lavoro.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione ordinata
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Puoi chiedere al pilota drone di realizzare foto generali
              dell'edificio, immagini ravvicinate dei balconi interessati e video
              panoramici per mostrare il contesto. Il materiale può essere
              organizzato per lato dell'edificio, piano, zona o punto da
              controllare.
            </p>

            <p className="leading-8 text-gray-300">
              Una documentazione ordinata può essere utile per confronti futuri,
              riunioni condominiali, richieste di preventivo o comunicazioni tra
              amministratore, tecnici e imprese.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione balconi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di edificio, la
            città, il numero indicativo di piani, il lato da controllare e il
            problema che vuoi documentare. Specifica se ti servono foto,
            video, riprese ravvicinate, panoramiche generali o immagini di punti
            specifici come frontalini, sottobalconi, ringhiere o cornicioni.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Puoi anche indicare se il materiale deve essere usato da un tecnico,
            da un'impresa edile, da un amministratore, da un proprietario o per
            una prima valutazione interna. Più la richiesta è chiara, più il
            pilota potrà capire il tipo di lavoro, la complessità del volo e il
            risultato richiesto.
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
            Esempio di richiesta per ispezione balconi con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva dei balconi di un
              condominio in provincia di Roma. Vorrei foto e video dei frontalini
              e dei sottobalconi perché sono presenti crepe e possibili distacchi
              di intonaco. Il materiale servirà all'amministratore e al tecnico
              per valutare un intervento di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo aiuta il pilota a capire il luogo, il motivo
            del controllo, il tipo di immagini richieste e l'utilizzo finale del
            materiale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione balconi con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione balconi con drone può variare in base alla
            città, alla distanza del pilota, all'altezza dell'edificio, al numero
            di balconi da controllare, alla complessità del contesto e al tipo di
            materiale richiesto. Un controllo rapido su pochi balconi è diverso
            da un'ispezione completa di un intero condominio con più facciate.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono una selezione
            ordinata, immagini divise per lato dell'edificio, brevi clip video o
            una raccolta più precisa dei punti critici.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette al
            cliente di pubblicare la richiesta e ai piloti drone di candidarsi.
            Cliente e professionista potranno poi accordarsi sui dettagli del
            servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per controllare i balconi?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per foto e video dei balconi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                L'ispezione con drone sostituisce una perizia?
              </h3>
              <p className="text-gray-300">
                No, il drone può fornire documentazione visiva, ma non sostituisce
                una perizia tecnica o una valutazione professionale quando
                necessaria.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono fotografare frontalini e sottobalconi?
              </h3>
              <p className="text-gray-300">
                Sì, se il volo è fattibile e sicuro, il pilota può realizzare
                immagini dei frontalini, dei sottobalconi e dei punti visibili
                dall'esterno.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per un amministratore di condominio?
              </h3>
              <p className="text-gray-300">
                Sì, può essere utile per raccogliere materiale visivo da mostrare
                a tecnici, imprese, condomini o proprietari.
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
            Trova un pilota drone per ispezionare balconi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di balconi, frontalini,
            sottobalconi, parapetti, facciate condominiali, cornicioni e punti
            esterni difficili da osservare da terra.
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