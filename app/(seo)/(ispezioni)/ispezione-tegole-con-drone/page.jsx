import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione tegole con drone | DroneGuard",
  description:
    "Richiedi un'ispezione tegole con drone. Trova piloti drone per controlli visivi di tetti, coperture, tegole rotte, tegole spostate, infiltrazioni, gronde e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni tegole con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione tegole con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare tegole rotte, tegole spostate, coppi, colmi, gronde,
            tetti inclinati, coperture difficili da raggiungere o zone dove
            potrebbero esserci infiltrazioni? Con DroneGuard puoi pubblicare una
            richiesta e trovare piloti drone disponibili per realizzare foto e
            video dall'alto. Il drone può essere utile per proprietari,
            amministratori di condominio, imprese edili, tecnici, manutentori e
            professionisti che vogliono ottenere una prima documentazione visiva
            dello stato del tetto prima di salire in copertura, richiedere un
            preventivo o organizzare un sopralluogo tecnico.
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
              Controllo visivo tegole
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di tegole, coppi, colmi, bordi di copertura,
              scossaline, gronde, camini, lucernari e punti visibili del tetto.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video del tetto
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere la copertura da più angolazioni, mostrando
              zone alte che spesso non sono visibili da terra o dalle finestre.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima della riparazione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con tecnici, imprese,
              manutentori, amministratori o proprietari prima di programmare un
              intervento.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione tegole con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione tegole con drone può essere utile quando bisogna
              osservare il tetto senza salire direttamente sulla copertura. Dopo
              vento forte, pioggia intensa, grandine o semplici segni di
              deterioramento, alcune tegole possono risultare spostate, rotte,
              mancanti, inclinate o non più correttamente allineate. In altri
              casi possono comparire macchie interne, infiltrazioni o gocciolamenti
              che fanno sospettare un problema sulla copertura.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Da terra non sempre è possibile capire cosa sta succedendo. Il
              drone può raccogliere foto e video dall'alto, mostrando lo stato
              generale del tetto, le zone vicine a gronde e pluviali, i raccordi
              con camini e lucernari, le scossaline, i colmi, le file di tegole e
              le parti dove potrebbero accumularsi foglie, rami, sporco o acqua.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce una verifica tecnica, una
              perizia o l'intervento di un professionista qualificato. Può però
              fornire una prima documentazione visiva utile per capire quali zone
              meritano attenzione e per spiegare meglio il problema a chi dovrà
              effettuare il sopralluogo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Tegole rotte o spostate</li>
              <li>✅ Coppi e colmi del tetto</li>
              <li>✅ Tetti inclinati e coperture alte</li>
              <li>✅ Zone vicine a camini e lucernari</li>
              <li>✅ Scossaline e raccordi visibili</li>
              <li>✅ Grotte, gronde e bordi di copertura</li>
              <li>✅ Sporco, foglie o rami accumulati</li>
              <li>✅ Danni dopo vento o grandine</li>
              <li>✅ Punti difficili da osservare da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione tegole per case, ville e condomini
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nelle case indipendenti e nelle ville, il tetto può essere difficile
            da osservare in modo completo. Alcune falde possono essere visibili
            solo parzialmente, altre possono trovarsi sopra cortili, giardini,
            terrazzi o zone non facilmente accessibili. Il drone può aiutare a
            documentare l'intera copertura e a mostrare eventuali punti da
            sottoporre a un tecnico o a un'impresa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, un controllo visivo delle tegole può essere utile
            quando l'amministratore riceve segnalazioni di infiltrazioni,
            macchie all'ultimo piano, distacchi, danni dopo maltempo o dubbi
            sullo stato della copertura. Le immagini dall'alto possono essere
            condivise con condomini, tecnici e imprese per rendere più chiara la
            situazione.
          </p>

          <p className="leading-8 text-gray-300">
            Anche immobili in vendita, rustici, casali, agriturismi, strutture
            ricettive e fabbricati rurali possono beneficiare di una
            documentazione visiva del tetto, soprattutto quando la copertura è
            ampia, vecchia o difficile da controllare senza accessi in quota.
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
                Descrivi tetto, zona, problema visibile, altezza indicativa e
                tipo di immagini che vuoi ricevere.
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
              Dopo vento, pioggia o grandine
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo eventi atmosferici intensi, può essere utile controllare se la
              copertura presenta tegole spostate, rotture, accumuli di materiale
              o parti visibilmente danneggiate. Il drone può documentare il tetto
              senza dover organizzare subito una salita in quota.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto può essere mostrato a un tecnico o a
              un'impresa per valutare se servono interventi di riparazione,
              pulizia, sostituzione o manutenzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di un preventivo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando si richiede un preventivo per sistemare il tetto, avere foto
              chiare può aiutare a spiegare meglio il problema. Le immagini
              possono mostrare le falde interessate, le parti più rovinate e le
              zone dove l'intervento potrebbe essere necessario.
            </p>

            <p className="leading-8 text-gray-300">
              Una documentazione ordinata può ridurre dubbi iniziali e rendere
              più semplice il confronto tra proprietario, amministratore, tecnico
              e impresa incaricata.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione tegole
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            casa indipendente, villa, condominio, rustico, casale, agriturismo,
            edificio commerciale o struttura privata. Scrivi la città, la zona,
            il numero indicativo di piani e il tipo di tetto, se lo conosci.
            Specifica se si tratta di copertura in tegole, coppi, tetto inclinato
            o falde difficili da raggiungere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche cosa vuoi documentare: tegole spostate, tegole rotte,
            infiltrazioni, danni dopo maltempo, zone vicino a camini, lucernari,
            gronde o scossaline. Puoi chiedere foto panoramiche, video dall'alto,
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
            Esempio di richiesta per ispezione tegole con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva delle tegole di una
              casa in provincia di Roma. Dopo vento forte ho notato alcune macchie
              sul soffitto e vorrei foto e video del tetto, soprattutto vicino a
              gronde, camino e lucernario. Il materiale servirà al tecnico e
              all'impresa per valutare un eventuale intervento.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di immobile, il
            problema da documentare, il materiale richiesto e l'utilizzo finale
            delle immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione tegole con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione tegole con drone può variare in base alla
            città, alla distanza del pilota, all'altezza dell'edificio, alla
            dimensione della copertura, alla complessità del volo e al tipo di
            materiale richiesto. Un controllo rapido di una piccola falda è
            diverso da una documentazione completa di un tetto condominiale o di
            un immobile molto esteso.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per lato del tetto, riprese ravvicinate dei punti critici,
            video panoramici o una raccolta da condividere con un tecnico.
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
                Posso usare il drone per controllare tegole rotte?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per foto e video della copertura.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone ripara il tetto?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Riparazioni e
                valutazioni tecniche devono essere svolte da professionisti
                qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile dopo il maltempo?
              </h3>
              <p className="text-gray-300">
                Sì, può essere utile dopo vento, pioggia o grandine per
                documentare danni visibili, tegole spostate o parti rovinate.
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
            Trova un pilota drone per ispezionare tegole
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di tegole, coppi, tetti inclinati,
            gronde, lucernari, camini, coperture, infiltrazioni e punti difficili
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