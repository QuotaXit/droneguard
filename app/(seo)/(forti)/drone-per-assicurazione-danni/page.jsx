import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per assicurazione danni | DroneGuard",
  description:
    "Trova un pilota drone per documentare danni visibili da inviare ad assicurazione, tecnico o impresa. Foto e video di tetti, coperture, grondaie, immobili, capannoni e strutture."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Documentazione visiva per danni e pratiche
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per assicurazione danni
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di foto e video dall'alto per documentare danni visibili
            su un immobile, un tetto, una copertura, un capannone, una grondaia,
            una facciata, un terrazzo o una struttura colpita da maltempo,
            caduta rami, vento, grandine, infiltrazioni o altri eventi? Con
            DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare materiale fotografico e video da condividere
            con assicurazioni, tecnici, imprese, amministratori, manutentori o
            professionisti. Il drone può aiutare a osservare parti difficili da
            raggiungere e a raccogliere una documentazione visiva chiara prima di
            organizzare sopralluoghi, preventivi o verifiche più approfondite.
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
              Foto danni dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di tetti, grondaie, coperture, facciate,
              terrazzi, camini, pannelli fotovoltaici e parti alte difficili da
              vedere da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale da inviare
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video possono essere condivisi con assicurazione, perito,
              tecnico, impresa, amministratore o manutentore per spiegare meglio
              la situazione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima del sopralluogo
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a raccogliere una prima documentazione visiva
              prima di salire sul tetto, montare ponteggi o organizzare un
              intervento tecnico.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando usare il drone per documentare danni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo un danno a un edificio, spesso servono immagini chiare per
              spiegare cosa è successo e quali parti sembrano coinvolte. Da terra
              però non sempre si riesce a vedere tutto: tetti, grondaie, comignoli,
              terrazzi, facciate alte, coperture industriali e pannelli
              fotovoltaici possono essere difficili da controllare senza scale,
              piattaforme, ponteggi o personale specializzato. Il drone può
              offrire una prima visuale dall'alto e aiutare a documentare le zone
              interessate.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questo tipo di servizio può essere utile dopo grandine, vento forte,
              pioggia intensa, temporali, caduta rami, infiltrazioni sospette,
              distacchi visibili, danni a coperture, problemi alle grondaie o
              rotture su parti esterne dell'immobile. Le immagini non sostituiscono
              una perizia, una valutazione assicurativa o una diagnosi tecnica, ma
              possono essere un supporto visivo utile da inviare a chi dovrà
              valutare il danno o organizzare un sopralluogo.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il danno, indicare la zona, spiegare
              che materiale ti serve e ricevere candidature da piloti drone
              disponibili. La piattaforma mette in contatto clienti e operatori,
              lasciando poi al cliente la scelta del professionista più adatto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi documentare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Danni visibili su tetti</li>
              <li>✅ Tegole spostate o rotte</li>
              <li>✅ Grondaie e pluviali danneggiati</li>
              <li>✅ Coperture industriali</li>
              <li>✅ Pannelli fotovoltaici dopo grandine</li>
              <li>✅ Camini, comignoli e lucernari</li>
              <li>✅ Terrazzi e lastrici solari</li>
              <li>✅ Facciate, cornicioni e parti alte</li>
              <li>✅ Rami caduti e danni esterni</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Foto drone da inviare ad assicurazione, tecnico o impresa
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Quando devi spiegare un danno, avere immagini chiare può fare la
            differenza. Una descrizione scritta spesso non basta, soprattutto se
            il problema riguarda una parte alta dell'edificio o una zona non
            facilmente raggiungibile. Foto e video realizzati con drone possono
            mostrare la copertura, il punto danneggiato, la zona circostante e le
            parti da controllare con maggiore attenzione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il materiale può essere utile da inviare a una compagnia assicurativa,
            a un perito, a un tecnico, a un'impresa edile, a un amministratore di
            condominio o a una ditta di manutenzione. Non significa che il drone
            certifichi il danno o sostituisca documenti ufficiali, ma può aiutare
            a rendere più chiara la situazione prima di una valutazione
            professionale.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi chiedere al pilota immagini generali e riprese più ravvicinate,
            così da avere sia una visione complessiva dell'edificio sia dettagli
            utili delle parti interessate. Nella richiesta è importante indicare
            come userai il materiale, così il pilota potrà organizzare meglio il
            servizio.
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
                Crea gratuitamente il tuo account come cliente, proprietario,
                amministratore, azienda, tecnico o pilota drone.
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
                Descrivi il danno, il tipo di edificio, la zona e il materiale
                fotografico o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al servizio richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per tetto danneggiato
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il tetto è una delle parti più esposte agli eventi atmosferici.
              Grandine, vento, pioggia intensa e caduta di rami possono causare
              danni visibili o situazioni da verificare. Il drone può riprendere
              tegole, coppi, guaine, comignoli, lucernari, antenne, grondaie e
              punti difficili da raggiungere.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere condivise con un tecnico o una ditta per
              capire se conviene organizzare un sopralluogo diretto, una
              manutenzione o un intervento più approfondito.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per danni su capannoni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Capannoni, magazzini e strutture industriali hanno spesso coperture
              molto ampie, grondaie lunghe, lucernari e impianti installati sul
              tetto. Dopo un evento atmosferico, il drone può aiutare a ottenere
              una panoramica generale e a documentare eventuali parti da
              controllare.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese possono essere utili per responsabili aziendali,
              manutentori, tecnici, imprese o professionisti incaricati di
              valutare lo stato della struttura.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per danni a pannelli fotovoltaici, grondaie e facciate
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            I pannelli fotovoltaici possono essere esposti a grandine, vento,
            sporco, rami e altri elementi esterni. Un drone può realizzare
            immagini dall'alto dell'impianto e della copertura su cui è installato,
            così da ottenere una prima documentazione visiva. Se ti serve una
            verifica tecnica, una termografia o un controllo specialistico, è
            importante scriverlo chiaramente nella richiesta.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche grondaie e pluviali possono subire danni o ostruzioni dopo il
            maltempo. Foglie, rami e detriti possono accumularsi nei canali di
            scolo e impedire il corretto deflusso dell'acqua. Le immagini con
            drone possono aiutare a mostrare accumuli visibili o punti critici da
            far controllare a una ditta specializzata.
          </p>

          <p className="leading-8 text-gray-300">
            Facciate, cornicioni, terrazzi, balconi e parti alte dell'edificio
            possono essere documentati con foto e video, sempre nel rispetto di
            sicurezza, privacy e regole applicabili. Il pilota dovrà valutare la
            fattibilità del volo in base al luogo e alle condizioni operative.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta drone per assicurazione danni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi prima di tutto il tipo
            di danno e l'evento che lo ha causato: vento, grandine, temporale,
            pioggia intensa, caduta rami, infiltrazioni, rottura visibile,
            problema alle grondaie o danno a una copertura. Indica poi il tipo di
            edificio: villetta, condominio, capannone, azienda, casa indipendente,
            immobile commerciale, struttura agricola o edificio in ristrutturazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Specifica quali parti devono essere riprese: tetto, grondaie,
            facciata, camino, pannelli fotovoltaici, terrazzo, lucernari,
            cornicioni, copertura industriale o area esterna. Scrivi anche se il
            materiale deve essere inviato a un'assicurazione, a un tecnico, a una
            ditta, a un amministratore o a un perito. Questo aiuta il pilota a
            capire il livello di dettaglio richiesto.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi chiedere foto generali, video, riprese ravvicinate, immagini da
            più angolazioni o una selezione ordinata del materiale. È utile
            indicare anche altezza dell'edificio, accessi, cortili, ostacoli,
            alberi, cavi, antenne, strade vicine e spazi disponibili per il volo.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta drone per assicurazione danni
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per documentare i danni visibili sul tetto
              di una villetta dopo grandine e vento forte. Mi servono foto e video
              della copertura, delle grondaie, del camino e dei pannelli
              fotovoltaici. Vorrei usare il materiale per inviarlo
              all'assicurazione e mostrarlo a una ditta che dovrà valutare un
              eventuale intervento.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Un testo di questo tipo aiuta il pilota a capire subito che il
            materiale serve per documentare un danno e che sono importanti sia le
            immagini generali sia quelle dei punti più critici.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per assicurazione danni?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per documentare danni può variare in
            base alla città, al tipo di edificio, alla complessità del volo, alla
            durata del lavoro, alle parti da riprendere e al materiale richiesto.
            Un controllo su una villetta può essere diverso da un'ispezione su un
            condominio, un capannone, una copertura industriale o un impianto
            fotovoltaico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere. Alcuni clienti chiedono solo foto e
            video grezzi, altri vogliono immagini selezionate, riprese più
            ravvicinate, video ordinati o una raccolta fotografica più chiara da
            inviare a professionisti e soggetti interessati. Più la richiesta è
            precisa, più sarà facile ricevere candidature adatte.
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
                Posso usare foto drone per l'assicurazione?
              </h3>
              <p className="text-gray-300">
                Puoi richiedere foto e video da condividere con assicurazione,
                tecnico o professionista. L'accettazione del materiale dipende
                dalle richieste della compagnia e dai soggetti coinvolti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone certifica ufficialmente il danno?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce materiale visivo. Certificazioni, perizie,
                valutazioni tecniche e pratiche ufficiali devono essere gestite da
                professionisti abilitati o dai soggetti competenti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto del tetto dopo grandine?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta per foto e video di tetti,
                coperture, grondaie, lucernari, camini e pannelli fotovoltaici
                dopo grandine o maltempo.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usarlo per un condominio?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere materiale visivo per condomini, ville,
                capannoni, aziende, case indipendenti e strutture esterne.
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
                DroneGuard esegue direttamente il servizio?
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
            Trova un pilota drone per documentare danni
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto e video di danni visibili su tetti,
            grondaie, coperture, facciate, pannelli fotovoltaici, condomini,
            capannoni, terrazzi, immobili e strutture difficili da osservare da
            terra.
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