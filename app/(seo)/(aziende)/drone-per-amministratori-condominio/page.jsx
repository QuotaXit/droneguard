import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per amministratori di condominio | DroneGuard",
  description:
    "Trova piloti drone per amministratori di condominio, ispezioni tetti, facciate, grondaie, coperture, terrazzi, danni e documentazione fotografica condominiale."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per amministratori di condominio
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per amministratori di condominio
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Gli amministratori di condominio hanno spesso bisogno di verificare
            tetti, coperture, facciate, grondaie, terrazzi, cortili, antenne,
            canne fumarie e parti comuni difficili da osservare da terra. Il drone
            può essere un supporto molto utile per ottenere foto e video dall'alto,
            documentare lo stato dell'edificio, individuare situazioni da
            approfondire e raccogliere materiale visivo da condividere con
            condomini, tecnici, imprese, assicurazioni e professionisti incaricati.
            Con DroneGuard puoi trovare piloti drone disponibili per ispezioni
            visive condominiali, riprese tecniche e documentazione fotografica
            professionale.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezione tetti e coperture
            </h2>
            <p className="text-gray-300">
              Il drone permette di osservare dall'alto tetti, guaine, tegole,
              terrazzi condominiali e coperture senza dover arrivare subito con
              mezzi più invasivi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Controllo facciate e grondaie
            </h2>
            <p className="text-gray-300">
              Foto e video possono aiutare a documentare facciate, balconi,
              cornicioni, grondaie, pluviali e punti alti dell'edificio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione per assemblee
            </h2>
            <p className="text-gray-300">
              Le immagini raccolte possono essere mostrate ai condomini per
              spiegare meglio problemi, interventi, preventivi e manutenzioni.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone in condominio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In molti condomini le parti più importanti da controllare sono anche
              quelle più difficili da raggiungere. Tetti, terrazzi tecnici,
              grondaie, facciate alte, cornicioni, antenne, pannelli, canne
              fumarie e coperture non sempre sono visibili in modo chiaro dal
              basso. Prima di organizzare interventi più complessi, può essere
              utile avere una prima documentazione fotografica o video realizzata
              con drone, così da capire meglio la situazione e valutare quali
              professionisti coinvolgere.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Per un amministratore di condominio, avere immagini chiare può
              semplificare la comunicazione con i condomini. Durante un'assemblea
              è molto più facile spiegare un problema mostrando fotografie e video
              reali dell'edificio, invece di affidarsi solo a descrizioni verbali.
              Il drone può aiutare a rendere più comprensibili infiltrazioni,
              danni visibili, tegole spostate, parti deteriorate, guaine rovinate,
              distacchi, accumuli nelle grondaie o situazioni che richiedono un
              sopralluogo tecnico più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard non esegue direttamente i servizi, ma mette in contatto
              clienti e piloti drone. L'amministratore può pubblicare una richiesta,
              descrivere il condominio, indicare la zona, spiegare cosa serve e
              ricevere candidature da operatori interessati. In questo modo è più
              semplice trovare un professionista disponibile per riprese,
              ispezioni visive e documentazione fotografica condominiale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone utili per condomini
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ispezione visiva di tetti e coperture</li>
              <li>✅ Foto e video di facciate condominiali</li>
              <li>✅ Controllo grondaie, pluviali e cornicioni</li>
              <li>✅ Documentazione danni dopo maltempo</li>
              <li>✅ Riprese di terrazzi, lastrici solari e antenne</li>
              <li>✅ Foto per assemblee condominiali</li>
              <li>✅ Supporto visivo per preventivi e manutenzioni</li>
              <li>✅ Materiale fotografico per tecnici e imprese</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per tetti, facciate, grondaie e parti comuni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno degli utilizzi più richiesti in ambito condominiale riguarda
            l'ispezione visiva delle coperture. Un tetto condominiale può avere
            tegole spostate, guaine danneggiate, accumuli di sporco, punti di
            ristagno, danni da vento, elementi deteriorati o zone difficili da
            osservare senza salire fisicamente sulla struttura. Il drone può
            fornire immagini ravvicinate e panoramiche, utili per avere una prima
            idea dello stato generale della copertura e per decidere se coinvolgere
            un tecnico, un'impresa o un manutentore specializzato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche le facciate possono essere documentate con maggiore chiarezza
            grazie alle riprese dall'alto. Balconi, frontalini, cornicioni,
            intonaci, elementi decorativi, pluviali e parti superiori dell'edificio
            possono essere ripresi da diverse angolazioni. Questo materiale può
            essere utile per valutazioni preliminari, richieste di preventivo,
            confronto tra condomini, pratiche assicurative o semplicemente per
            conservare una documentazione aggiornata dello stato del fabbricato.
          </p>

          <p className="leading-8 text-gray-300">
            Il drone può essere utile anche dopo eventi atmosferici intensi, come
            vento forte, grandine o piogge abbondanti. In questi casi
            l'amministratore può avere bisogno di capire rapidamente se ci sono
            danni visibili su coperture, antenne, pannelli, camini, grondaie o
            altre parti comuni. Una documentazione fotografica ordinata può aiutare
            a comunicare meglio la situazione ai condomini e ai professionisti
            coinvolti.
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
                Crea gratuitamente il tuo account come cliente, amministratore o
                pilota drone.
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
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il condominio, la zona, il problema e il tipo di immagini
                che ti servono.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti la propria
                disponibilità.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Immagini utili per assemblee e decisioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Uno dei problemi più comuni nella gestione condominiale è far
              comprendere chiaramente ai condomini la necessità di un intervento.
              Quando si parla di tetti, facciate, terrazzi o grondaie, molti
              condomini non vedono direttamente il problema e possono avere dubbi
              sui lavori da approvare. Le immagini con drone possono rendere la
              situazione più evidente e aiutare l'amministratore a presentare la
              questione in modo ordinato.
            </p>

            <p className="leading-8 text-gray-300">
              Foto e video possono essere allegati a comunicazioni, mostrati in
              assemblea, inviati a imprese per ottenere preventivi più precisi o
              condivisi con tecnici incaricati di una valutazione. In questo modo
              il condominio può prendere decisioni con una base visiva più chiara.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Supporto per manutenzioni e preventivi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di richiedere un intervento di manutenzione, può essere utile
              raccogliere immagini aggiornate dell'area interessata. Un'impresa
              che deve fare un preventivo per un tetto, una grondaia, una facciata
              o una copertura può avere bisogno di capire meglio la situazione.
              Il drone può fornire materiale visivo utile, soprattutto quando non
              è possibile osservare bene il punto da terra.
            </p>

            <p className="leading-8 text-gray-300">
              Il servizio con drone non sostituisce una perizia tecnica, ma può
              rappresentare una fase preliminare molto utile. Le immagini raccolte
              possono aiutare a decidere se procedere con un sopralluogo, richiedere
              un preventivo, programmare una manutenzione o approfondire un danno
              segnalato dai condomini.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per condomini e amministratori
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard l'amministratore può pubblicare una richiesta specifica
            per il proprio condominio. È possibile indicare la città, la zona, il
            tipo di edificio, il numero indicativo di piani, la parte da controllare
            e il risultato desiderato. Ad esempio, puoi richiedere foto del tetto,
            video della facciata, immagini di una grondaia, documentazione dopo un
            evento meteo o riprese generali delle parti comuni esterne.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta chiara aiuta i piloti drone a capire meglio il lavoro e
            a candidarsi in modo più preciso. È utile specificare se servono solo
            fotografie, video grezzi, un breve montaggio, immagini ravvicinate,
            riprese panoramiche o materiale da condividere con tecnici e imprese.
            È importante anche indicare eventuali vincoli di orario, accesso,
            presenza di cortili interni o necessità di coordinamento con il
            condominio.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utile per amministratori di condominio,
            studi di amministrazione, tecnici, imprese di manutenzione, condomini
            e proprietari che vogliono ottenere una documentazione visiva più
            chiara prima di valutare interventi su parti comuni.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone è utile per controllare un tetto condominiale?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può aiutare a ottenere immagini e video della
                copertura, utili per una prima valutazione visiva e per capire se
                servono ulteriori verifiche tecniche.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le immagini in assemblea condominiale?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini raccolte possono essere utili per spiegare meglio
                un problema ai condomini, mostrare lo stato di una parte comune e
                supportare la discussione su manutenzioni o preventivi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce una perizia tecnica?
              </h3>
              <p className="text-gray-300">
                No, il drone può fornire documentazione visiva, ma eventuali
                valutazioni tecniche, perizie o decisioni sugli interventi devono
                essere affidate a professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente le ispezioni?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone. Il servizio viene svolto dal professionista scelto
                dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti dopo la registrazione, mentre i piloti ricevono
                50 crediti gratuiti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per il tuo condominio
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare ispezioni visive, foto di
            tetti, video di facciate, documentazione di grondaie, riprese di
            terrazzi e immagini utili per amministratori di condominio.
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