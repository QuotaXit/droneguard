import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione pannelli sandwich con drone | DroneGuard",
  description:
    "Richiedi un'ispezione pannelli sandwich con drone. Trova piloti drone per controlli visivi di coperture industriali, capannoni, pannelli, lamiere, infiltrazioni e danni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni pannelli sandwich con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione pannelli sandwich con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare pannelli sandwich, coperture industriali, tetti di
            capannoni, lamiere grecate, giunti, fissaggi, lucernari, scossaline o
            zone dove potrebbero esserci infiltrazioni? Con DroneGuard puoi
            pubblicare una richiesta e trovare piloti drone disponibili per
            realizzare foto e video dall'alto. Il drone può essere utile per
            aziende, proprietari di capannoni, amministratori, imprese,
            manutentori, tecnici e professionisti che vogliono ottenere una prima
            documentazione visiva dello stato della copertura prima di
            organizzare interventi, riparazioni, pulizie, manutenzioni o richieste
            di preventivo.
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
              Controllo coperture industriali
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di pannelli sandwich, lamiere, giunti, fissaggi,
              scossaline, colmi, lucernari, gronde e punti visibili della
              copertura.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può documentare superfici estese, falde, zone laterali e
              punti difficili da osservare da terra o dall'interno del capannone.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima della manutenzione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con tecnici, imprese,
              lattonieri, manutentori o proprietari prima di programmare un
              intervento.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione pannelli sandwich con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione pannelli sandwich con drone può essere utile quando
              bisogna osservare una copertura industriale senza salire
              direttamente sul tetto. I pannelli sandwich sono spesso installati
              su capannoni, magazzini, officine, depositi, stabilimenti, strutture
              logistiche, aziende agricole e immobili produttivi. Sono superfici
              estese, esposte a sole, vento, pioggia, grandine, dilatazioni,
              sporco, foglie, urti e normale deterioramento nel tempo.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Da terra è difficile capire se ci sono pannelli deformati, lamiere
              sollevate, fissaggi mancanti, viti rovinate, giunti aperti,
              scossaline spostate, colmi danneggiati, lucernari crepati, ristagni
              d'acqua o zone dove potrebbe entrare acqua. Il drone può raccogliere
              foto e video dall'alto, mostrando la copertura da più angolazioni e
              aiutando a individuare visivamente i punti che meritano un controllo
              tecnico più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce una verifica tecnica, una
              perizia, una prova di tenuta o un intervento professionale in quota.
              Può però fornire una documentazione visiva utile per spiegare meglio
              il problema, richiedere un preventivo più chiaro e capire quali zone
              della copertura devono essere analizzate da un professionista.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Pannelli sandwich su capannoni</li>
              <li>✅ Lamiere grecate e coperture metalliche</li>
              <li>✅ Viti, fissaggi e punti di ancoraggio</li>
              <li>✅ Giunti, scossaline e colmi</li>
              <li>✅ Lucernari industriali e cupolini</li>
              <li>✅ Gronde e pluviali della copertura</li>
              <li>✅ Pannelli sollevati o deformati</li>
              <li>✅ Danni da vento, pioggia o grandine</li>
              <li>✅ Punti difficili da osservare da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione pannelli sandwich per capannoni e aziende
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei capannoni industriali, una copertura danneggiata può creare
            problemi importanti: infiltrazioni, gocciolamenti, deterioramento
            degli isolanti, danni a merci, macchinari, uffici interni o aree di
            lavoro. Avere immagini dall'alto può aiutare il proprietario o il
            responsabile della struttura a capire meglio lo stato generale del
            tetto e a mostrare la situazione a chi dovrà intervenire.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere utile anche per magazzini logistici, officine,
            depositi, serre, stalle, strutture agricole, supermercati, palestre,
            centri commerciali, stabilimenti produttivi e coperture metalliche di
            grandi dimensioni. In questi casi, controllare tutto da terra è quasi
            impossibile e una panoramica aerea può rendere più chiara la
            situazione.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere usate per preparare una manutenzione,
            richiedere preventivi, documentare danni dopo maltempo, controllare
            una zona sospetta o creare un archivio visivo dello stato della
            copertura nel tempo.
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
                Crea il tuo account come cliente, azienda, proprietario,
                manutentore, tecnico o pilota drone.
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
                Descrivi capannone, copertura, problema visibile, zona e tipo di
                immagini che vuoi ricevere.
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
              Dopo grandine, vento o pioggia intensa
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo eventi atmosferici intensi, i pannelli sandwich possono
              presentare segni visibili di danno, deformazioni, fissaggi
              allentati, parti sollevate, ammaccature o zone dove l'acqua si
              accumula. Il drone può documentare la copertura senza dover salire
              subito in quota.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto può essere mostrato a un tecnico, a
              un'impresa o a un manutentore per valutare se servono interventi di
              riparazione, pulizia, sigillatura o sostituzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di un preventivo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando devi chiedere un preventivo per sistemare una copertura
              industriale, avere foto chiare può aiutare molto. Le immagini
              possono mostrare estensione della copertura, punti danneggiati,
              accessi, ostacoli, lucernari, gronde, impianti presenti e zone dove
              serve maggiore attenzione.
            </p>

            <p className="leading-8 text-gray-300">
              Una documentazione ordinata può rendere più semplice il confronto
              tra proprietario, responsabile aziendale, tecnico e impresa
              incaricata.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione pannelli sandwich
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            capannone, magazzino, deposito, stabilimento, officina, supermercato,
            struttura agricola, edificio commerciale o copertura industriale.
            Scrivi la città, la zona, l'altezza indicativa e la dimensione
            approssimativa della copertura, se la conosci.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche cosa vuoi documentare: pannelli sollevati, lamiere
            danneggiate, infiltrazioni, lucernari, fissaggi, giunti, scossaline,
            gronde, sporco accumulato, danni da grandine o stato generale della
            copertura. Puoi chiedere foto panoramiche, video dall'alto, immagini
            ravvicinate o riprese dei punti più importanti.
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
            Esempio di richiesta per ispezione pannelli sandwich con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva della copertura di un
              capannone in provincia di Roma. Vorrei foto e video dei pannelli
              sandwich, dei lucernari e delle scossaline perché dopo la pioggia
              sono comparse infiltrazioni interne. Il materiale servirà al tecnico
              e all'impresa per valutare un intervento di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di copertura, il
            problema da documentare, il materiale richiesto e lo scopo finale
            delle immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione pannelli sandwich con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione pannelli sandwich con drone può variare in
            base alla città, alla distanza del pilota, all'altezza del capannone,
            alla dimensione della copertura, alla complessità del volo e al tipo
            di materiale richiesto. Un controllo rapido di una zona precisa è
            diverso da una documentazione completa di tutta la copertura
            industriale.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per lato, riprese ravvicinate dei punti critici, video
            panoramici o una raccolta completa da condividere con tecnici e
            imprese.
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
                Posso usare il drone per controllare pannelli sandwich?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per foto e video della copertura.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone ripara la copertura?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Riparazioni,
                sigillature e verifiche tecniche devono essere svolte da
                professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile dopo una grandinata?
              </h3>
              <p className="text-gray-300">
                Sì, può essere utile per documentare ammaccature, pannelli
                danneggiati, lucernari rotti, parti spostate o zone da far
                verificare.
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
            Trova un pilota drone per ispezionare pannelli sandwich
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di pannelli sandwich, coperture
            industriali, capannoni, lamiere, lucernari, scossaline, gronde,
            infiltrazioni e punti difficili da osservare da terra.
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