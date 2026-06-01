import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione parapetti con drone | DroneGuard",
  description:
    "Richiedi un'ispezione parapetti con drone. Trova piloti drone per controlli visivi di parapetti, ringhiere, balconi, terrazzi, facciate, fissaggi e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni parapetti con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione parapetti con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare parapetti, ringhiere, balaustre, muretti di
            protezione, balconi, terrazzi o bordi di copertura difficili da
            osservare da terra? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per realizzare foto e video
            dall'esterno. Il drone può essere utile per amministratori di
            condominio, proprietari, tecnici, imprese edili, manutentori e
            professionisti che vogliono ottenere una prima documentazione visiva
            prima di lavori, manutenzioni, verifiche, riparazioni o richieste di
            preventivo.
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
              Controllo visivo parapetti
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di parapetti, ringhiere, muretti, balaustre,
              fissaggi, frontalini, balconi, terrazzi e parti deteriorate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video ravvicinati
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere parapetti e bordi esterni da più
              angolazioni, mostrando parti che spesso non sono visibili dal
              basso.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Per condomini e immobili
            </h2>
            <p className="leading-7 text-gray-300">
              Un servizio utile per amministratori, proprietari, geometri,
              architetti, imprese, tecnici e manutentori.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione parapetti con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione parapetti con drone può essere utile quando bisogna
              osservare elementi esterni posti in quota, come ringhiere di
              balconi, parapetti di terrazzi, muretti perimetrali, balaustre,
              bordi di copertura e protezioni installate su facciate o lastrici
              solari. In molti edifici queste parti non sono facilmente
              controllabili da terra e possono richiedere una documentazione
              visiva prima di procedere con interventi più complessi.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può raccogliere foto e video utili per osservare crepe,
              distacchi, ruggine, fissaggi visibili, parti deformate, macchie,
              deterioramento del cemento, vernici rovinate, elementi spostati o
              zone in cui il parapetto sembra danneggiato. Le immagini possono
              essere condivise con un tecnico, un'impresa, un amministratore o un
              proprietario per una prima valutazione.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce una verifica tecnica, una
              certificazione di sicurezza o una perizia strutturale. Può però
              fornire una prima base visiva utile per capire quali punti meritano
              maggiore attenzione e come organizzare eventuali sopralluoghi o
              manutenzioni.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Parapetti di balconi</li>
              <li>✅ Ringhiere esterne</li>
              <li>✅ Balaustre e muretti perimetrali</li>
              <li>✅ Parapetti di terrazzi e lastrici solari</li>
              <li>✅ Fissaggi e staffe visibili</li>
              <li>✅ Crepe, ruggine o parti rovinate</li>
              <li>✅ Frontalini e bordi vicini</li>
              <li>✅ Zone dopo vento o maltempo</li>
              <li>✅ Punti difficili da osservare da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione parapetti per condomini, terrazzi e balconi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, parapetti e ringhiere possono trovarsi su molti piani,
            lungo facciate diverse o su terrazzi comuni. Quando un amministratore
            riceve segnalazioni di parti rovinate, elementi arrugginiti, muretti
            lesionati o dubbi sulla manutenzione, il drone può aiutare a
            documentare la situazione esterna senza limitarsi alla sola visuale
            dal basso.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per proprietari di appartamenti, ville, attici e immobili in vendita,
            le immagini con drone possono essere utili per mostrare lo stato di
            balconi, terrazzi e parapetti esterni prima di lavori, ristrutturazioni
            o richieste di preventivo. Il materiale può anche servire per
            confrontare lo stato attuale con controlli futuri.
          </p>

          <p className="leading-8 text-gray-300">
            Anche imprese edili, geometri, architetti, amministratori e
            manutentori possono utilizzare la documentazione visiva per spiegare
            meglio un problema, preparare un sopralluogo o valutare quali zone
            approfondire con strumenti e competenze adeguate.
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
                Descrivi edificio, parapetti da controllare, zona, altezza e tipo
                di foto o video che vuoi ricevere.
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
              Prima di lavori o manutenzioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di montare ponteggi, usare piattaforme o programmare
              interventi più impegnativi, può essere utile raccogliere immagini
              dei parapetti da controllare. Il drone può mostrare dove si trovano
              i punti più evidenti, quali lati dell'edificio sono interessati e
              quali zone meritano un controllo tecnico più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              Questo materiale può rendere più chiara la richiesta di preventivo
              e aiutare il professionista a capire meglio il tipo di intervento
              richiesto.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Dopo vento, urti o deterioramento
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo vento forte, maltempo, lavori precedenti o semplici segni di
              invecchiamento, può essere utile documentare lo stato dei parapetti.
              Il drone può evidenziare parti visibili danneggiate, elementi
              inclinati, fissaggi da verificare, macchie o zone dove il materiale
              appare deteriorato.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere archiviate o condivise con tecnici,
              imprese, amministratori e proprietari per decidere i passaggi
              successivi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione parapetti
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            condominio, villa, attico, palazzo, terrazzo, struttura commerciale,
            hotel, ufficio o edificio privato. Scrivi la città, la zona, il
            numero indicativo di piani e il lato dell'edificio da controllare.
            Specifica se si tratta di parapetti in muratura, ringhiere metalliche,
            balaustre, muretti di terrazzo o protezioni perimetrali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche il motivo della richiesta: crepe, ruggine, distacchi,
            parti rovinate, verifica prima dei lavori, controllo dopo maltempo,
            richiesta dell'amministratore o semplice documentazione visiva. Puoi
            chiedere foto panoramiche, video esterni, immagini ravvicinate o
            riprese da più angolazioni.
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
            Esempio di richiesta per ispezione parapetti con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva dei parapetti di un
              condominio in provincia di Roma. Vorrei foto e video delle ringhiere
              e dei muretti dei balconi perché sono visibili alcune parti rovinate
              e zone con ruggine. Il materiale servirà all'amministratore e al
              tecnico per valutare un intervento di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di edificio, i
            punti da documentare, il problema visibile e l'utilizzo finale delle
            immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione parapetti con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione parapetti con drone può variare in base alla
            zona, alla distanza del pilota, all'altezza dell'edificio, al numero
            di balconi o terrazzi da controllare, alla complessità del volo e al
            tipo di materiale richiesto. Un controllo rapido su pochi parapetti è
            diverso da una documentazione completa di più facciate condominiali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per piano, lato dell'edificio, zona o punto critico, oppure
            una raccolta più completa da condividere con un tecnico.
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
                Posso usare il drone per controllare parapetti e ringhiere?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dall'esterno.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone certifica la sicurezza del parapetto?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. La sicurezza deve
                essere valutata da un tecnico o professionista qualificato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare anche balconi e terrazzi?
              </h3>
              <p className="text-gray-300">
                Sì, se il volo è fattibile e sicuro, il pilota può documentare
                parapetti, balconi, terrazzi, ringhiere e zone vicine.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per amministratori di condominio?
              </h3>
              <p className="text-gray-300">
                Sì, le immagini possono essere utili per mostrare lo stato dei
                parapetti a condomini, tecnici, imprese o manutentori.
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
            Trova un pilota drone per ispezionare parapetti
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di parapetti, ringhiere, balconi,
            terrazzi, balaustre, muretti, fissaggi, facciate e punti difficili da
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