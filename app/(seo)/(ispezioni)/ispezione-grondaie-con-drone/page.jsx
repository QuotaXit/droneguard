import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione grondaie con drone | DroneGuard",
  description:
    "Trova piloti drone per ispezione grondaie, pluviali, tetti, coperture, cornicioni, canali di scolo e documentazione fotografica dall'alto."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per controllo grondaie e pluviali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione grondaie con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'ispezione grondaie con drone è una soluzione utile per controllare
            visivamente canali di scolo, pluviali, cornicioni, tetti, coperture,
            terrazzi, punti di raccolta dell'acqua e parti alte degli edifici
            difficili da osservare da terra. Le grondaie ostruite, danneggiate o
            deformate possono causare infiltrazioni, ristagni, umidità, danni alle
            facciate e problemi alla copertura. Con immagini e video realizzati
            dall'alto è possibile ottenere una prima documentazione visiva della
            situazione e capire se servono interventi di pulizia, manutenzione o
            approfondimento tecnico. Con DroneGuard puoi trovare piloti drone
            disponibili per ispezioni visive di grondaie, tetti, facciate e parti
            comuni di edifici privati, condomini, capannoni e strutture aziendali.
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
              Controllo canali di scolo
            </h2>
            <p className="text-gray-300">
              Il drone può riprendere dall'alto grondaie, canali di raccolta e
              punti dove foglie, rami, sporco o detriti possono bloccare il
              normale deflusso dell'acqua.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione fotografica
            </h2>
            <p className="text-gray-300">
              Foto e video possono essere utili per proprietari, amministratori,
              tecnici e imprese che devono valutare una manutenzione o preparare
              un preventivo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Meno accessi complicati
            </h2>
            <p className="text-gray-300">
              Prima di usare scale, ponteggi o piattaforme, una ripresa con drone
              può aiutare a capire meglio dove si trova il problema e quanto è
              estesa la zona da controllare.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché controllare le grondaie con un drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le grondaie hanno un ruolo fondamentale nella protezione di un
              edificio. Servono a raccogliere e convogliare l'acqua piovana,
              evitando che scenda lungo facciate, balconi, cornicioni e murature.
              Quando una grondaia è ostruita, danneggiata o deformata, l'acqua può
              accumularsi, uscire dai bordi, infiltrarsi in punti critici o causare
              macchie, umidità e deterioramento delle superfici esterne.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il problema è che spesso le grondaie sono difficili da controllare.
              Su ville, condomini, capannoni, palazzine, edifici storici e
              strutture alte, non sempre è possibile vedere bene lo stato dei
              canali di scolo dal basso. Il drone può offrire una prima visione
              ravvicinata, permettendo di osservare accumuli di foglie, rami,
              terriccio, nidi, detriti, parti rotte, giunzioni aperte, pluviali
              ostruiti o punti dove l'acqua potrebbe non defluire correttamente.
            </p>

            <p className="leading-8 text-gray-300">
              L'ispezione con drone non sostituisce il lavoro di un tecnico o di
              un'impresa specializzata, ma può essere un supporto molto utile per
              capire se serve un intervento, documentare la situazione e inviare
              immagini chiare a chi dovrà occuparsi della manutenzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa si può osservare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Grondaie ostruite da foglie e detriti</li>
              <li>✅ Canali di scolo pieni o sporchi</li>
              <li>✅ Pluviali danneggiati o scollegati</li>
              <li>✅ Punti di ristagno dell'acqua</li>
              <li>✅ Cornicioni e bordi della copertura</li>
              <li>✅ Danni visibili dopo vento o temporali</li>
              <li>✅ Zone difficili da vedere da terra</li>
              <li>✅ Stato generale del tetto vicino alla grondaia</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione grondaie per condomini, ville e capannoni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, il controllo delle grondaie può essere molto importante
            per prevenire infiltrazioni e danni alle parti comuni. Un
            amministratore può richiedere immagini dall'alto per mostrare ai
            condomini lo stato della copertura, dei canali di scolo e dei pluviali.
            Questo materiale può essere utile in assemblea, nelle comunicazioni
            interne o per richiedere preventivi a imprese di manutenzione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nelle ville e nelle case indipendenti, il drone può aiutare il
            proprietario a capire se le grondaie sono piene di foglie, se un
            tratto risulta danneggiato o se ci sono punti in cui l'acqua non
            defluisce correttamente. Questo è particolarmente utile dopo periodi
            di pioggia intensa, vento forte, caduta di rami o accumulo di foglie
            durante l'autunno.
          </p>

          <p className="leading-8 text-gray-300">
            Per capannoni, magazzini, aziende agricole e strutture industriali, il
            drone può essere ancora più utile perché le coperture sono spesso
            ampie, alte e difficili da ispezionare. Una documentazione fotografica
            dall'alto può aiutare a individuare zone critiche, accumuli lungo i
            canali di scolo, problemi sui pluviali o punti dove programmare una
            manutenzione.
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
                Crea gratuitamente il tuo account come cliente, amministratore,
                tecnico o pilota drone.
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
                Descrivi edificio, zona, altezza indicativa e grondaie da
                controllare.
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
              Dopo pioggia, vento o foglie accumulate
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo eventi meteo intensi, molte grondaie possono riempirsi di
              foglie, rami, sporco o detriti. Anche il vento può spostare tegole,
              elementi metallici, scossaline o parti vicine al bordo della
              copertura. Il drone può aiutare a controllare rapidamente la zona e
              a ottenere immagini utili prima di decidere se programmare una
              pulizia o una riparazione.
            </p>

            <p className="leading-8 text-gray-300">
              Questa documentazione può essere condivisa con manutentori,
              lattonieri, imprese edili o tecnici incaricati, così da spiegare
              meglio il problema e rendere più semplice la valutazione
              dell'intervento.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Supporto per preventivi e manutenzione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Spesso, prima di fare un preventivo, un'impresa deve capire dove si
              trova il problema, quanto è lunga la grondaia da controllare e quali
              punti sono più difficili da raggiungere. Le foto con drone possono
              fornire una prima base visiva utile, soprattutto quando l'edificio è
              alto o la copertura non è facilmente accessibile.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone può essere utile anche per controlli periodici, ad esempio
              prima della stagione delle piogge o dopo lunghi periodi di caduta
              foglie. Una manutenzione programmata può aiutare a prevenire danni
              più costosi e problemi improvvisi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per controllare grondaie e pluviali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard ti permette di pubblicare una richiesta specifica per
            ispezionare grondaie e pluviali con drone. Puoi indicare la città, il
            tipo di edificio, il numero indicativo di piani, la presenza di cortili
            interni, il lato della copertura da controllare e il tipo di materiale
            che ti serve. Ad esempio, puoi richiedere fotografie ravvicinate,
            video panoramici, immagini dei pluviali, controllo delle grondaie dopo
            un temporale o documentazione da inviare a un'impresa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta chiara aiuta i piloti drone a capire meglio il servizio
            e a candidarsi in modo più preciso. È utile spiegare se il controllo
            riguarda tutto l'edificio o solo una parte, se ci sono ostacoli, alberi,
            cavi, cortili stretti o zone con poco spazio di manovra. Anche sapere
            se le immagini servono per un amministratore, un tecnico, un
            proprietario o un'impresa può aiutare a impostare meglio il lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma è utile per privati, amministratori di condominio,
            imprese edili, manutentori, lattonieri, geometri, architetti, aziende
            e proprietari che vogliono ottenere una documentazione visiva più
            chiara prima di programmare un intervento sulle grondaie.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può vedere se una grondaia è ostruita?
              </h3>
              <p className="text-gray-300">
                Sì, in molti casi il drone può acquisire immagini utili per
                osservare accumuli di foglie, sporco, detriti o punti in cui
                l'acqua potrebbe non defluire correttamente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                L'ispezione con drone sostituisce la manutenzione?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. La pulizia, la
                riparazione e la valutazione tecnica devono essere svolte da
                professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto per un preventivo?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere immagini da condividere con imprese,
                manutentori, tecnici o amministratori per spiegare meglio la
                situazione.
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
            Trova un pilota drone per ispezionare le grondaie
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare ispezioni visive di grondaie,
            pluviali, tetti, canali di scolo, cornicioni, coperture e parti alte
            dell'edificio.
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