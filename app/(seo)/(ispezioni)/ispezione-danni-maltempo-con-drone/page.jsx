import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione danni maltempo con drone | DroneGuard",
  description:
    "Richiedi un'ispezione danni da maltempo con drone. Trova piloti drone per controlli visivi di tetti, coperture, gronde, pannelli, facciate, terrazzi e strutture danneggiate."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni danni da maltempo con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione danni maltempo con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Dopo vento forte, grandine, pioggia intensa, temporali o eventi
            atmosferici improvvisi, può essere difficile capire subito se un
            tetto, una copertura, una facciata, una gronda, un terrazzo o una
            struttura esterna ha subito danni. Con DroneGuard puoi pubblicare una
            richiesta e trovare piloti drone disponibili per realizzare foto e
            video dall'alto. Il drone può aiutare proprietari, amministratori,
            aziende, tecnici e imprese a ottenere una prima documentazione visiva
            delle zone difficili da raggiungere, prima di organizzare sopralluoghi
            tecnici, manutenzioni, riparazioni o richieste di preventivo.
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
              Controllo dopo temporali
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di tetti, terrazzi, facciate, gronde, pluviali,
              pensiline, pannelli, comignoli e parti esterne colpite dal
              maltempo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video dei danni
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può documentare tegole spostate, parti rovinate, elementi
              piegati, infiltrazioni visibili, rami caduti, detriti o danni
              esterni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima di riparare
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con tecnici, imprese,
              amministratori, manutentori o assicurazioni per una prima
              valutazione visiva.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione danni da maltempo con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione con drone dopo il maltempo può essere utile quando si
              sospettano danni su parti alte o difficili da osservare da terra.
              Dopo un temporale, una grandinata o una giornata di vento forte,
              possono verificarsi spostamenti di tegole, danni a gronde e
              pluviali, rottura di lucernari, infiltrazioni, caduta di rami,
              distacco di elementi esterni, danni a pannelli fotovoltaici o
              problemi su pensiline e coperture leggere.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Spesso il problema non è visibile immediatamente. Una macchia
              interna può comparire giorni dopo, una gronda può essersi ostruita,
              un pannello può risultare lesionato, una tegola può essersi mossa o
              una copertura può aver accumulato detriti. Il drone permette di
              raccogliere immagini dall'alto senza dover salire subito sul tetto
              o organizzare accessi in quota solo per una prima verifica visiva.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto non sostituisce una perizia tecnica, una
              verifica strutturale o una valutazione assicurativa ufficiale, ma
              può aiutare a mostrare meglio la situazione e a decidere quali
              professionisti coinvolgere per i passaggi successivi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Tetti dopo vento o grandine</li>
              <li>✅ Tegole spostate o rotte</li>
              <li>✅ Gronde e pluviali danneggiati</li>
              <li>✅ Terrazzi e lastrici solari</li>
              <li>✅ Pensiline, tettoie e carport</li>
              <li>✅ Pannelli fotovoltaici visibili</li>
              <li>✅ Lucernari e comignoli</li>
              <li>✅ Facciate con segni di distacco</li>
              <li>✅ Detriti, rami o materiali caduti</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione drone per case, condomini, aziende e capannoni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nelle abitazioni private, il drone può aiutare a controllare tetti,
            coperture, terrazzi, lucernari, comignoli e gronde dopo un evento di
            maltempo. Le immagini possono essere utili al proprietario per capire
            se chiamare un tecnico, un'impresa o un manutentore.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, l'amministratore può richiedere una documentazione
            visiva delle parti comuni, come coperture, lastrici solari,
            cornicioni, facciate, gronde, pluviali e balconi. Questo può rendere
            più semplice comunicare con i condomini e mostrare ai professionisti
            incaricati quali zone sembrano aver subito danni.
          </p>

          <p className="leading-8 text-gray-300">
            Anche capannoni, magazzini, aziende, ristoranti, hotel e strutture
            commerciali possono richiedere un controllo visivo con drone dopo
            temporali, vento o grandine, soprattutto quando le coperture sono
            estese e difficili da controllare rapidamente da terra.
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
                Descrivi evento, zona, tipo di immobile, danni sospetti e
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
              Documentazione per tecnici e imprese
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo un evento atmosferico, descrivere il danno solo a parole può
              essere difficile. Foto e video dall'alto possono mostrare meglio la
              posizione del problema, la zona interessata, l'accessibilità e la
              presenza di ostacoli o detriti.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può essere inviato a tecnici, imprese edili,
              lattonieri, manutentori o professionisti prima del sopralluogo,
              aiutandoli a capire meglio il contesto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di salire sul tetto
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Salire su un tetto dopo vento, pioggia o grandine può essere
              complesso e rischioso. Il drone può offrire una prima visione
              esterna senza accesso diretto alla copertura, documentando le zone
              che sembrano più importanti.
            </p>

            <p className="leading-8 text-gray-300">
              Sarà poi un professionista qualificato a valutare eventuali
              interventi, verifiche tecniche, riparazioni o misure di sicurezza
              necessarie.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione danni da maltempo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di evento:
            vento forte, grandine, pioggia intensa, temporale, caduta di rami o
            altro episodio. Scrivi il tipo di immobile, la città, la zona, il
            numero indicativo di piani e le parti da controllare, come tetto,
            terrazzo, gronda, facciata, lucernario, pannelli, pensiline o
            coperture.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega cosa vuoi documentare: tegole spostate, infiltrazioni,
            elementi caduti, rotture visibili, gronde piegate, pannelli
            danneggiati, sporco accumulato, ristagni o parti esterne rovinate.
            Puoi richiedere foto panoramiche, video dall'alto, immagini
            ravvicinate o riprese da più lati dell'edificio.
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
            Esempio di richiesta per ispezione danni maltempo
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva dopo il maltempo su un
              condominio in provincia di Roma. Dopo vento e pioggia intensa sono
              comparse infiltrazioni e vorrei foto e video di tetto, gronde,
              pluviali e lucernari. Il materiale servirà all'amministratore e al
              tecnico per valutare un sopralluogo.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di evento, le
            zone da documentare, il materiale richiesto e lo scopo del controllo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione danni da maltempo con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla distanza del pilota,
            all'altezza dell'edificio, alla dimensione della copertura, al numero
            di punti da controllare e al tipo di materiale richiesto. Un controllo
            rapido di un tetto è diverso da una documentazione completa di un
            condominio, un capannone o una struttura estesa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per zona, riprese ravvicinate, video panoramici o una
            raccolta dei punti principali da inviare a tecnici e imprese.
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
                Posso usare il drone dopo una grandinata?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video di tetti, coperture, pannelli,
                lucernari, gronde e altre parti esterne visibili.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone fa una perizia assicurativa?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Per perizie,
                valutazioni tecniche o pratiche assicurative servono
                professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per amministratori di condominio?
              </h3>
              <p className="text-gray-300">
                Sì, può aiutare a raccogliere immagini delle parti comuni da
                mostrare a tecnici, imprese, condomini o manutentori.
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
            Trova un pilota drone per controllare danni da maltempo
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi dopo vento, grandine, pioggia,
            temporali, danni su tetti, coperture, gronde, terrazzi, facciate,
            pannelli e strutture esterne.
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