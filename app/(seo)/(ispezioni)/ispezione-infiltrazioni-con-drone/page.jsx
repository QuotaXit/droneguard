import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione infiltrazioni con drone | DroneGuard",
  description:
    "Richiedi un'ispezione infiltrazioni con drone. Trova piloti drone per controlli visivi di tetti, terrazzi, gronde, facciate, coperture, pluviali e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni infiltrazioni con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione infiltrazioni con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai macchie di umidità, gocciolamenti, segni d'acqua, problemi su
            tetti, terrazzi, coperture, gronde, pluviali o facciate? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto e video delle parti esterne
            dell'edificio. Il drone può essere utile per ottenere una prima
            documentazione visiva delle zone difficili da raggiungere, prima di
            chiamare un tecnico, un'impresa, un manutentore o un professionista
            incaricato di verificare l'origine del problema.
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
              Controllo visivo esterno
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di tetti, terrazzi, guaine, gronde, pluviali,
              facciate, scossaline, bocchettoni, lucernari e punti dove l'acqua
              può entrare.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere zone alte o difficili da osservare da
              terra, mostrando meglio ristagni, tegole spostate, sporco,
              crepe o parti rovinate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Utile prima del tecnico
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con geometri, imprese,
              amministratori, manutentori o professionisti prima di un
              sopralluogo più approfondito.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione infiltrazioni con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione infiltrazioni con drone può essere richiesta quando in
              un immobile compaiono macchie sul soffitto, umidità sulle pareti,
              gocciolamenti, intonaco rovinato o segni che fanno pensare a un
              problema proveniente dalla copertura. Spesso la causa non è
              immediatamente visibile da terra: potrebbe trovarsi su un tetto
              inclinato, su un terrazzo, vicino a un lucernario, accanto a una
              canna fumaria, lungo una gronda o in corrispondenza di un pluviale.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può aiutare a raccogliere materiale visivo delle parti
              esterne, mostrando la zona dall'alto e da diverse angolazioni. Le
              immagini possono evidenziare ristagni d'acqua, tegole spostate,
              guaine deteriorate, scossaline rovinate, scarichi ostruiti,
              foglie accumulate, crepe, macchie, distacchi o elementi che
              meritano un controllo più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              È importante chiarire che il drone non individua da solo la causa
              tecnica dell'infiltrazione e non sostituisce una perizia, una prova
              d'acqua o una valutazione professionale. Può però fornire una base
              visiva utile per spiegare meglio il problema a chi dovrà intervenire.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Zone che puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Tetti inclinati e coperture</li>
              <li>✅ Terrazzi e lastrici solari</li>
              <li>✅ Guaine e impermeabilizzazioni visibili</li>
              <li>✅ Gronde, pluviali e scarichi</li>
              <li>✅ Lucernari, comignoli e canne fumarie</li>
              <li>✅ Facciate con macchie di umidità</li>
              <li>✅ Scossaline e raccordi</li>
              <li>✅ Ristagni d'acqua o sporco accumulato</li>
              <li>✅ Punti alti difficili da raggiungere</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione infiltrazioni per condomini, case e immobili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, le infiltrazioni possono interessare appartamenti
            all'ultimo piano, vani scala, terrazzi condominiali, balconi,
            facciate, coperture comuni o locali tecnici. Un amministratore può
            richiedere immagini con drone per documentare la situazione prima di
            convocare un tecnico, contattare un'impresa o valutare un intervento
            di manutenzione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nelle abitazioni private, ville e case indipendenti, il drone può
            essere utile quando non è semplice salire sul tetto o osservare bene
            una zona alta. Le foto possono mostrare il collegamento tra copertura,
            gronde, terrazzi, comignoli, pannelli, lucernari e altri elementi che
            possono influire sul deflusso dell'acqua.
          </p>

          <p className="leading-8 text-gray-300">
            Anche aziende, capannoni, magazzini, hotel, ristoranti e strutture
            commerciali possono richiedere un controllo visivo con drone per
            documentare coperture estese, lucernari, pluviali industriali,
            pannelli, tettoie e zone dove l'acqua potrebbe creare danni o
            infiltrazioni.
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
                Descrivi il problema, la zona dell'immobile, le macchie visibili
                e il tipo di immagini che vuoi ricevere.
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
              Prima di lavori e riparazioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di avviare lavori su tetto, terrazzo, gronda o facciata, può
              essere utile raccogliere immagini della zona sospetta. Il drone può
              aiutare a capire quali parti esterne mostrare al tecnico e quali
              punti meritano una verifica più precisa durante il sopralluogo.
            </p>

            <p className="leading-8 text-gray-300">
              Questa documentazione preliminare può rendere più chiara la
              richiesta di preventivo e ridurre spiegazioni confuse, soprattutto
              quando il problema si trova in alto o in una zona poco visibile.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Dopo pioggia, vento o maltempo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo piogge intense, vento forte o grandine, possono comparire
              nuove macchie o peggiorare infiltrazioni già presenti. Il drone può
              documentare tegole spostate, gronde ostruite, ristagni, scossaline
              rovinate e altri elementi esterni visibili.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere archiviate o condivise con
              amministratori, imprese e tecnici per decidere i passaggi
              successivi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione infiltrazioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            condominio, villa, casa indipendente, capannone, magazzino, hotel,
            ristorante, negozio o struttura commerciale. Scrivi la città, la
            zona, il numero indicativo di piani e dove si vede il problema
            all'interno o all'esterno dell'edificio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega cosa vuoi documentare: tetto, terrazzo, gronda, pluviale,
            lucernario, canna fumaria, facciata, guaina, scossalina, scarico o
            zona dove si sospetta il passaggio dell'acqua. Puoi chiedere foto
            panoramiche, video dall'alto, immagini ravvicinate o riprese da più
            lati della copertura.
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
            Esempio di richiesta per ispezione infiltrazioni con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva di un tetto e di un
              terrazzo condominiale in provincia di Roma. Nell'appartamento
              all'ultimo piano sono comparse macchie di umidità e vorrei foto e
              video di guaina, scarichi, gronde e punti vicini ai lucernari. Il
              materiale servirà all'amministratore e al tecnico per valutare un
              sopralluogo.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il problema, la zona da
            documentare, il tipo di immagini richieste e l'utilizzo finale del
            materiale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione infiltrazioni con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione infiltrazioni con drone può variare in base
            alla città, alla distanza del pilota, all'altezza dell'edificio, alla
            dimensione della copertura, al numero di zone da documentare e al
            tipo di materiale richiesto. Un controllo rapido di un punto del
            tetto è diverso da una documentazione completa di un intero
            condominio o capannone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per zona, riprese ravvicinate, video panoramici o una
            raccolta dei punti principali da condividere con un tecnico.
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
                Il drone trova la causa dell'infiltrazione?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. La causa deve essere
                valutata da un tecnico o da un professionista qualificato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso controllare tetti, terrazzi e gronde?
              </h3>
              <p className="text-gray-300">
                Sì, se il volo è fattibile e sicuro, il pilota può documentare
                tetti, terrazzi, gronde, scarichi, pluviali e zone esterne.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per un amministratore di condominio?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono essere utili per mostrare la situazione a
                condomini, tecnici, imprese e manutentori.
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
            Trova un pilota drone per ispezione infiltrazioni
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di tetti, terrazzi, gronde,
            pluviali, facciate, lucernari, guaine, coperture e punti difficili da
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