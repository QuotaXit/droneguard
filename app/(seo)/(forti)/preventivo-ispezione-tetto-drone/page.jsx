import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo ispezione tetto con drone | DroneGuard",
  description:
    "Richiedi un preventivo per ispezione tetto con drone. Trova piloti drone per controllare coperture, tegole, grondaie, camini, terrazzi, condomini, ville e capannoni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi per tetti e coperture
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo ispezione tetto con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare un tetto, una copertura, una grondaia o un camino
            senza salire fisicamente sull'edificio? Con DroneGuard puoi
            pubblicare una richiesta e trovare piloti drone disponibili per
            realizzare foto e video dall'alto di tetti, tegole, coperture,
            guaine, terrazzi, comignoli, grondaie, lucernari, antenne e parti
            difficili da osservare da terra. Il drone può essere utile per
            raccogliere una prima documentazione visiva, capire meglio lo stato
            esterno della copertura e condividere il materiale con un tecnico,
            un'impresa edile, un amministratore di condominio o un manutentore.
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
              Controllo tetti
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi foto e video dall'alto per osservare tegole, guaine,
              coperture, terrazzi, camini, comignoli, lucernari, antenne e
              parti alte dell'edificio.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Dopo vento o maltempo
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a documentare danni visibili dopo vento
              forte, grandine, pioggia intensa, caduta rami o altri eventi
              atmosferici.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale per tecnici
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con imprese edili,
              manutentori, amministratori, geometri o professionisti prima di
              organizzare un intervento.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione tetto con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione del tetto con drone può essere utile quando devi
              osservare una copertura alta, inclinata, ampia, fragile o
              difficilmente raggiungibile. In molti casi, per controllare un
              tetto da vicino, sarebbe necessario utilizzare scale, ponteggi,
              piattaforme elevatrici o personale specializzato. Il drone non
              sostituisce un controllo tecnico diretto, ma può fornire una prima
              visione dall'alto e aiutare a capire quali punti meritano maggiore
              attenzione.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questa soluzione viene richiesta spesso da proprietari di case,
              amministratori di condominio, imprese edili, tecnici, geometri,
              architetti, agenzie immobiliari e aziende che vogliono controllare
              lo stato esterno di una copertura. Le riprese possono mostrare
              elementi visibili come tegole spostate, grondaie piene, parti
              rotte, accumuli di foglie, comignoli danneggiati, antenne,
              lucernari, guaine deteriorate o zone che da terra non si riescono
              a vedere.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il tipo di tetto, la zona, il
              motivo del controllo e il risultato che vuoi ottenere. I piloti
              interessati possono candidarsi e proporti la propria disponibilità.
              In questo modo puoi scegliere il professionista più adatto in base
              al luogo, al tipo di edificio e al materiale richiesto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Tetto di villetta privata</li>
              <li>✅ Copertura di condominio</li>
              <li>✅ Tegole, coppi e guaine</li>
              <li>✅ Grondaie e canali di scolo</li>
              <li>✅ Camini e comignoli</li>
              <li>✅ Terrazzi e lastrici solari</li>
              <li>✅ Lucernari, antenne e impianti</li>
              <li>✅ Capannoni e coperture industriali</li>
              <li>✅ Danni dopo vento, pioggia o grandine</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione tetto con drone per privati, condomini e aziende
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un privato può richiedere un'ispezione con drone per controllare il
            tetto della propria casa, una villetta, una casa di campagna, un
            terrazzo o una copertura difficile da raggiungere. Spesso il problema
            nasce dopo un temporale, una perdita d'acqua, una macchia sul soffitto
            o un dubbio sulle condizioni del tetto. Le foto dall'alto possono
            aiutare a capire se ci sono parti visibilmente danneggiate o se è
            necessario chiamare un tecnico per un controllo più approfondito.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Un amministratore di condominio può invece usare il drone per
            raccogliere materiale visivo da condividere con i condomini, con
            un'impresa edile o con un professionista incaricato. In un condominio,
            salire sul tetto può richiedere accessi particolari, permessi,
            dispositivi di sicurezza e organizzazione. Un primo controllo visivo
            con drone può essere utile per documentare la situazione e decidere
            se procedere con un intervento.
          </p>

          <p className="leading-8 text-gray-300">
            Anche aziende, capannoni, magazzini, strutture industriali e attività
            commerciali possono richiedere un'ispezione tetto con drone. Le
            coperture industriali sono spesso molto ampie e difficili da osservare
            completamente da terra. Il drone può realizzare panoramiche generali,
            immagini di dettaglio e video utili per manutenzione, report interni,
            controlli visivi e archivi fotografici.
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
                Crea il tuo account come cliente, azienda, amministratore,
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
                Descrivi il tetto, la zona, il problema, il tipo di edificio e
                il materiale che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi valutare il
                professionista più adatto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Controllo tetto dopo maltempo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo vento forte, grandine, pioggia intensa o caduta di rami, può
              essere utile osservare la copertura dall'alto. Il drone può
              documentare eventuali danni visibili, tegole spostate, zone
              scoperte, grondaie piene, parti rotte o elementi che sembrano fuori
              posizione. Questo materiale può essere utile prima di contattare
              una ditta o un tecnico.
            </p>

            <p className="leading-8 text-gray-300">
              Se la richiesta riguarda un danno urgente, scrivilo chiaramente
              nell'annuncio. Indica anche se il materiale ti serve per una prima
              valutazione, per un amministratore, per un'assicurazione, per una
              ditta di manutenzione o per un archivio personale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Controllo tetto prima di lavori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di una ristrutturazione, una manutenzione, un rifacimento
              della copertura o un intervento sulle grondaie, le immagini con
              drone possono aiutare a capire meglio lo stato dell'edificio. Una
              visione dall'alto permette di osservare accessi, pendenze, ostacoli,
              comignoli, impianti presenti e punti che richiedono attenzione.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale fotografico può essere condiviso con imprese,
              progettisti, manutentori o professionisti per preparare meglio il
              sopralluogo e ridurre le incertezze iniziali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione tetto con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, è importante scrivere una
            richiesta chiara. Indica prima di tutto il tipo di edificio:
            villetta, condominio, capannone, edificio commerciale, struttura
            agricola, casa indipendente o immobile in ristrutturazione. Specifica
            poi la città o la zona, l'altezza indicativa, la presenza di cortili,
            strade, alberi, cavi, antenne o altri ostacoli che potrebbero
            influenzare il volo.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche cosa vuoi controllare: tegole, guaina, grondaie, camino,
            lucernari, terrazzo, copertura industriale o danni dopo maltempo. Puoi
            scrivere se ti servono solo fotografie, un video, entrambe le cose,
            materiale grezzo oppure una selezione ordinata di immagini. Più il
            risultato richiesto è chiaro, più il pilota potrà capire se è adatto
            al lavoro.
          </p>

          <p className="leading-8 text-gray-300">
            Ricorda che sarà sempre il pilota a valutare la fattibilità del volo
            in base a sicurezza, meteo, privacy, ostacoli, area operativa e regole
            applicabili. DroneGuard mette in contatto clienti e piloti, ma il
            servizio viene svolto dal professionista scelto dal cliente.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ispezione tetto
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllare il tetto di una villetta in
              provincia di Roma dopo il forte vento. Mi servono foto e video della
              copertura, delle grondaie e del camino per capire se ci sono danni
              visibili. L'edificio ha due piani e vorrei ricevere il materiale nei
              prossimi giorni per mostrarlo a un tecnico.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo aiuta il pilota a capire subito il luogo, il
            tipo di edificio, il motivo del controllo, il materiale richiesto e il
            livello di urgenza.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione tetto con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione tetto con drone può variare in base alla
            zona, alla complessità del volo, al tipo di edificio, al tempo
            necessario, al materiale richiesto e alla presenza di eventuali
            ostacoli. Un controllo semplice su una villetta può essere diverso da
            un'ispezione su un grande condominio, un capannone industriale o una
            copertura complessa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il risultato finale può incidere. Alcuni clienti chiedono solo
            foto e video grezzi, altri preferiscono immagini selezionate, video
            ordinati, riprese ravvicinate o un piccolo report fotografico. Per
            questo è importante spiegare il più possibile cosa ti serve.
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
                Posso richiedere un preventivo per ispezionare un tetto?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per ispezione
                tetto con drone e ricevere candidature da piloti disponibili.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce un tecnico?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce materiale visivo utile, ma non sostituisce
                verifiche tecniche, diagnosi professionali, perizie o sopralluoghi
                specialistici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere il controllo delle grondaie?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video di grondaie, canali di scolo,
                pluviali, bordi del tetto e punti difficili da vedere da terra.
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
                Posso richiedere foto e video?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare nella richiesta se vuoi foto, video,
                materiale grezzo, riprese ravvicinate o una selezione ordinata di
                immagini.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Chi valuta se il volo è possibile?
              </h3>
              <p className="text-gray-300">
                Il pilota valuta la fattibilità del volo in base a sicurezza,
                meteo, privacy, ostacoli, area operativa e normative applicabili.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo per ispezione tetto con drone
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controllare tetti, coperture, tegole, grondaie,
            camini, terrazzi, condomini, ville, capannoni e strutture difficili
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