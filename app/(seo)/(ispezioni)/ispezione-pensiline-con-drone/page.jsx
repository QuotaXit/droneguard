import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione pensiline con drone | DroneGuard",
  description:
    "Richiedi un'ispezione pensiline con drone. Trova piloti drone per controlli visivi di pensiline, tettoie, coperture leggere, ingressi, carport, strutture esterne e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni pensiline con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione pensiline con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare una pensilina, una tettoia, una copertura esterna,
            un ingresso, un carport, una struttura leggera o una copertura
            difficile da osservare da terra? Con DroneGuard puoi pubblicare una
            richiesta e trovare piloti drone disponibili per realizzare foto e
            video dall'alto. Il drone può essere utile per proprietari,
            amministratori, aziende, negozi, condomini, strutture ricettive,
            tecnici e imprese che vogliono ottenere una prima documentazione
            visiva prima di manutenzioni, riparazioni, verifiche per danni,
            infiltrazioni o richieste di preventivo.
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
              Controllo visivo pensiline
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di pensiline, tettoie, coperture leggere,
              ingressi, carport, strutture esterne, lastre, fissaggi e parti
              rovinate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere la copertura da più angolazioni, mostrando
              zone che spesso non sono visibili dal basso o dalla strada.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima della manutenzione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con tecnici, imprese,
              amministratori, manutentori o proprietari prima di programmare un
              intervento.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione pensiline con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione pensiline con drone può essere utile quando bisogna
              osservare lo stato di una copertura esterna senza salire
              direttamente sulla struttura. Pensiline, tettoie, coperture di
              ingressi, carport, passaggi pedonali, aree esterne di negozi,
              hotel, condomini, aziende o capannoni possono presentare danni,
              sporco, ristagni, crepe, parti deformate, fissaggi allentati o
              elementi rovinati dal tempo.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Da terra spesso si vede solo la parte inferiore della pensilina,
              mentre la parte superiore rimane nascosta. Il drone può fornire una
              prospettiva dall'alto e documentare lastre, pannelli, lamiere,
              guaine, scossaline, canaline, scarichi, raccordi, viti, staffe,
              profili e punti in cui possono accumularsi foglie, acqua o detriti.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce una perizia tecnica o una
              verifica strutturale, ma può fornire una prima documentazione
              visiva utile per capire meglio la situazione e decidere se
              coinvolgere un tecnico, un'impresa, un fabbro, un lattoniere o un
              manutentore.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Pensiline condominiali</li>
              <li>✅ Tettoie di ingressi e portoni</li>
              <li>✅ Carport e coperture per auto</li>
              <li>✅ Coperture leggere di negozi e aziende</li>
              <li>✅ Lamiere, pannelli e lastre</li>
              <li>✅ Staffe, viti e fissaggi visibili</li>
              <li>✅ Ristagni d'acqua e sporco accumulato</li>
              <li>✅ Danni dopo vento o maltempo</li>
              <li>✅ Punti difficili da osservare da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione pensiline per condomini, aziende e abitazioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, le pensiline possono trovarsi sopra ingressi,
            portoni, rampe, posti auto, passaggi pedonali o aree comuni. Quando
            ci sono infiltrazioni, gocciolamenti, parti rovinate o segnalazioni
            dei condomini, avere immagini dall'alto può aiutare l'amministratore
            a capire meglio quali punti mostrare a un tecnico o a un'impresa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per negozi, uffici, hotel, ristoranti, strutture ricettive e aziende,
            una pensilina può avere anche un valore estetico e funzionale. Una
            copertura esterna rovinata, sporca o danneggiata può creare problemi
            di immagine, sicurezza, infiltrazioni o manutenzione. Il drone può
            documentare lo stato della struttura senza interrompere
            necessariamente le normali attività.
          </p>

          <p className="leading-8 text-gray-300">
            Anche nelle abitazioni private, ville e case indipendenti, il drone
            può essere utile per controllare tettoie esterne, coperture di
            terrazzi, pergolati coperti, pensiline sopra cancelli o carport
            installati in cortile.
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
                Crea il tuo account come cliente, proprietario, amministratore,
                azienda, tecnico o pilota drone.
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
                Descrivi pensilina, zona, altezza, problema visibile e tipo di
                foto o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Ricevi candidature dai piloti drone interessati e scegli il
                professionista più adatto al servizio richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Dopo vento, grandine o maltempo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo vento forte, temporali, grandine o piogge intense, può essere
              utile controllare visivamente lo stato della pensilina. Il drone
              può documentare pannelli spostati, lastre danneggiate, elementi
              piegati, canaline o scarichi ostruiti e parti esterne che meritano
              un controllo più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto può essere mostrato a un'impresa, a un
              tecnico o a un manutentore per valutare un intervento di
              riparazione, pulizia o sostituzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione prima dei lavori
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di richiedere un preventivo, può essere utile inviare foto
              chiare della pensilina. Il drone può produrre immagini generali e
              dettagli dei punti più importanti, come fissaggi, raccordi,
              coperture, bordi, scossaline e zone dove l'acqua tende ad
              accumularsi.
            </p>

            <p className="leading-8 text-gray-300">
              Una documentazione ordinata rende più semplice spiegare il problema
              e può aiutare il professionista a comprendere meglio il tipo di
              intervento richiesto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione pensiline
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di struttura:
            pensilina condominiale, tettoia di ingresso, copertura di negozio,
            carport, pensilina aziendale, copertura di passaggio pedonale,
            struttura esterna di hotel, ristorante o abitazione privata. Scrivi
            la città, la zona, l'altezza indicativa e se la pensilina è vicina a
            strade, cortili, parcheggi, finestre o altri ostacoli.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche cosa vuoi documentare: danni da maltempo, infiltrazioni,
            ristagni, lamiere rovinate, pannelli trasparenti, staffe, viti,
            scossaline, canaline, scarichi, sporco, foglie, crepe o semplice
            stato generale. Puoi chiedere foto panoramiche, video dall'alto,
            riprese ravvicinate o immagini dei punti più importanti.
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
            Esempio di richiesta per ispezione pensilina con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva di una pensilina
              condominiale in provincia di Roma. Vorrei foto e video della parte
              superiore perché dopo il maltempo ci sono gocciolamenti e alcune
              zone sembrano danneggiate. Il materiale servirà all'amministratore
              e all'impresa per valutare un intervento di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di struttura, il
            problema da documentare, il materiale richiesto e l'utilizzo finale
            delle immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione pensiline con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione pensiline con drone può variare in base alla
            zona, alla distanza del pilota, all'altezza della struttura, alla
            dimensione della copertura, alla complessità del volo e al tipo di
            materiale richiesto. Un controllo rapido di una piccola pensilina è
            diverso da una documentazione completa di più tettoie o coperture
            estese.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per zona, riprese da più angolazioni, video panoramici o una
            raccolta dei punti più importanti da condividere con un tecnico.
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
                Posso usare il drone per controllare una pensilina?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dall'alto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce una verifica tecnica?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Eventuali problemi
                strutturali o tecnici devono essere valutati da professionisti
                qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare tettoie e carport?
              </h3>
              <p className="text-gray-300">
                Sì, se il volo è fattibile e sicuro, il pilota può documentare
                tettoie, carport, coperture leggere e strutture esterne.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile dopo il maltempo?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono aiutare a documentare danni visibili,
                elementi spostati, ristagni, sporco o parti rovinate dopo vento,
                pioggia o grandine.
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
            Trova un pilota drone per ispezionare pensiline
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di pensiline, tettoie, coperture
            leggere, carport, ingressi, strutture esterne, fissaggi, pannelli,
            lamiere e punti difficili da osservare da terra.
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