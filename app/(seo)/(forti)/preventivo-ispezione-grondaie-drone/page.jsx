import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo ispezione grondaie con drone | DroneGuard",
  description:
    "Richiedi un preventivo per ispezione grondaie con drone. Trova piloti drone per controllare grondaie, pluviali, canali di scolo, tetti, coperture e danni visibili."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi per grondaie e pluviali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo ispezione grondaie con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare grondaie, pluviali, canali di scolo o bordi del
            tetto senza salire sull'edificio? Con DroneGuard puoi pubblicare una
            richiesta e trovare piloti drone disponibili per realizzare foto e
            video dall'alto di grondaie, tetti, coperture, terrazzi, cornicioni,
            pluviali e punti difficili da osservare da terra. Il drone può essere
            utile per individuare accumuli visibili di foglie, rami, detriti,
            sporco, ostruzioni, parti danneggiate o zone che potrebbero richiedere
            un intervento di pulizia, manutenzione o riparazione.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi un preventivo
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Controllo grondaie
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini dall'alto per osservare grondaie, pluviali,
              canali di scolo, bordi del tetto, terrazzi e punti difficili da
              vedere da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foglie e detriti
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a documentare accumuli visibili di foglie,
              rami, sporco, materiale portato dal vento o possibili ostruzioni
              nei canali di scolo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima della manutenzione
            </h2>
            <p className="leading-7 text-gray-300">
              Le foto possono essere condivise con una ditta di pulizia grondaie,
              un manutentore, un amministratore o un tecnico prima di organizzare
              l'intervento.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione grondaie con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Le grondaie sono una parte importante dell'edificio perché
              raccolgono e indirizzano l'acqua piovana lontano dalla copertura e
              dalle facciate. Quando si riempiono di foglie, terra, rami, detriti
              o altri materiali, l'acqua può defluire male e creare problemi
              visibili come ristagni, gocciolamenti, macchie, infiltrazioni,
              umidità sulle pareti o danni alle parti esterne dell'immobile.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Spesso però controllare le grondaie da terra è difficile. Su
              condomini, ville alte, capannoni, edifici commerciali o strutture
              con tetti complessi, non sempre si riesce a vedere cosa succede
              nella parte superiore. Il drone può fornire una prima visione
              dall'alto e aiutare a capire se è necessario chiamare una ditta per
              la pulizia, una manutenzione o un sopralluogo tecnico.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il problema, indicare il tipo di
              edificio e ricevere candidature da piloti drone disponibili. Il
              materiale raccolto può essere utile per documentare la situazione,
              confrontarsi con un professionista e decidere il prossimo passo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Grondaie di villetta privata</li>
              <li>✅ Grondaie condominiali</li>
              <li>✅ Pluviali e canali di scolo</li>
              <li>✅ Bordi del tetto e cornicioni</li>
              <li>✅ Terrazzi e coperture piane</li>
              <li>✅ Accumuli di foglie e detriti</li>
              <li>✅ Danni dopo vento o temporali</li>
              <li>✅ Coperture di capannoni</li>
              <li>✅ Zone difficili da vedere da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione grondaie per case, condomini e capannoni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un proprietario privato può richiedere un controllo con drone quando
            nota acqua che scende male, macchie vicino alle pareti, gocciolamenti
            anomali, umidità, ristagni o sospetti accumuli nella grondaia. In
            questi casi, le immagini dall'alto possono aiutare a vedere se sono
            presenti foglie, rami, sporco evidente o parti che sembrano rotte,
            spostate o ostruite.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un amministratore di condominio può utilizzare il drone per
            documentare lo stato delle grondaie prima di convocare una ditta,
            preparare una manutenzione o condividere materiale con i condomini.
            In un condominio, controllare grondaie e canali di scolo può essere
            più complicato perché l'edificio è alto, gli accessi al tetto possono
            essere limitati e spesso serve organizzare l'intervento con anticipo.
          </p>

          <p className="leading-8 text-gray-300">
            Anche aziende, magazzini, capannoni industriali e strutture
            commerciali possono richiedere immagini con drone per osservare
            grondaie e coperture molto ampie. In questi casi il drone può
            realizzare panoramiche generali e riprese più ravvicinate delle zone
            critiche, aiutando a creare una documentazione visiva utile per
            manutenzione e controlli periodici.
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
                Crea gratuitamente il tuo account come cliente, azienda,
                amministratore, tecnico o pilota drone.
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
                Spiega quali grondaie devono essere controllate, il tipo di
                edificio, la zona e il materiale che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al lavoro.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Controllo dopo pioggia intensa
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo una pioggia forte, può capitare di vedere acqua uscire da
              punti insoliti, colare lungo la facciata o ristagnare in zone dove
              non dovrebbe. Un drone può aiutare a osservare la parte alta
              dell'edificio e documentare eventuali accumuli, parti ostruite o
              situazioni visibili che meritano un controllo più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere utili per mostrare il problema a una
              ditta specializzata, a un amministratore, a un tecnico o a un
              manutentore prima di salire fisicamente sul tetto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Controllo prima della pulizia
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di programmare una pulizia delle grondaie, può essere utile
              capire quali punti sono più pieni, quali zone sono raggiungibili e
              se l'intervento riguarda una parte specifica o tutto il perimetro
              dell'edificio. Il drone può fornire una panoramica iniziale e
              aiutare a organizzare meglio il lavoro.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto non sostituisce la valutazione di chi esegue
              la manutenzione, ma può rendere più chiara la situazione e ridurre
              le incertezze prima dell'intervento.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione grondaie con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, è importante descrivere bene
            l'edificio e il problema. Indica se si tratta di una villetta, un
            condominio, un capannone, un edificio commerciale, una struttura
            agricola o un immobile in ristrutturazione. Scrivi anche la città, la
            zona, il numero indicativo di piani e se le grondaie si trovano su un
            lato specifico dell'edificio o lungo tutto il perimetro.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega cosa vuoi ottenere: foto delle grondaie, video panoramico,
            riprese ravvicinate dei pluviali, controllo di accumuli, verifica
            dopo temporale, documentazione prima della pulizia o materiale da
            inviare a un tecnico. Puoi anche indicare se l'edificio ha cortili,
            alberi, fili, antenne, strade vicine, spazi stretti o altri elementi
            che potrebbero influenzare le operazioni di volo.
          </p>

          <p className="leading-8 text-gray-300">
            Ricorda che il drone può fornire materiale visivo utile, ma non
            sostituisce una verifica tecnica diretta. Sarà il pilota a valutare la
            fattibilità del volo in base a sicurezza, meteo, ostacoli, privacy,
            area operativa e regole applicabili.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ispezione grondaie
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllare le grondaie di un
              condominio di quattro piani in provincia di Roma. Dopo le ultime
              piogge abbiamo notato acqua che scende male su un lato
              dell'edificio. Vorrei foto e video delle grondaie, dei pluviali e
              dei canali di scolo per capire se ci sono accumuli visibili o parti
              da far controllare a una ditta.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta scritta in questo modo aiuta il pilota a capire subito
            il tipo di edificio, il problema, il materiale richiesto e le parti da
            riprendere.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione grondaie con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione grondaie con drone può variare in base alla
            città, al tipo di edificio, all'altezza, alla durata del lavoro, al
            materiale richiesto e alla complessità operativa. Un controllo su una
            villetta può essere diverso da un'ispezione su un condominio alto, un
            capannone industriale o una copertura molto estesa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il risultato finale può cambiare il preventivo. Alcuni clienti
            chiedono solo foto veloci, altri vogliono video, riprese ravvicinate,
            una selezione ordinata di immagini o un piccolo report fotografico da
            condividere con un amministratore o una ditta. Più la richiesta è
            dettagliata, più sarà facile ricevere candidature adatte.
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
                Posso controllare le grondaie con un drone?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard per ricevere
                candidature da piloti disponibili a realizzare foto e video delle
                grondaie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone vede se la grondaia è ostruita?
              </h3>
              <p className="text-gray-300">
                Il drone può mostrare accumuli visibili, foglie, rami e detriti,
                ma non sostituisce una verifica tecnica o una pulizia diretta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiederlo per un condominio?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere un controllo per condomini, ville, capannoni,
                edifici commerciali e altre strutture.
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
                Posso chiedere foto ravvicinate?
              </h3>
              <p className="text-gray-300">
                Sì, nella richiesta puoi indicare se vuoi foto generali, video o
                riprese più ravvicinate di punti specifici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Chi decide se il volo è fattibile?
              </h3>
              <p className="text-gray-300">
                Il pilota valuta sicurezza, meteo, privacy, ostacoli, spazio di
                volo, area operativa e normative applicabili.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo per ispezione grondaie con drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controllare grondaie, pluviali, canali di scolo,
            tetti, coperture, condomini, ville, capannoni e strutture difficili
            da osservare da terra.
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