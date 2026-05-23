import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Trova Pilota Drone in Italia | DroneGuard",
  description:
    "Trova un pilota drone in Italia per riprese aeree, matrimoni, eventi, immobili, ispezioni, cantieri e servizi professionali con DroneGuard."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Piloti drone in Italia
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Trova Pilota Drone in Italia
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Cerchi un pilota drone in Italia per realizzare riprese aeree,
            fotografie professionali, video per eventi, contenuti immobiliari,
            ispezioni tecniche, monitoraggi o servizi con drone per aziende?
            Con DroneGuard puoi pubblicare una richiesta e ricevere candidature
            da piloti drone interessati al tuo lavoro. È una soluzione semplice
            per entrare in contatto con operatori disponibili nella tua zona,
            confrontare le proposte e scegliere il professionista più adatto.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Pubblica una richiesta
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quando serve un pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un pilota drone può essere utile in molte situazioni diverse. Un
            privato può cercarlo per un matrimonio, una festa, un evento
            speciale o per ottenere immagini aeree di una proprietà. Un'azienda
            può aver bisogno di riprese promozionali, foto per il sito web,
            contenuti social, video istituzionali o materiale visivo per
            presentare un'attività.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche professionisti tecnici, amministratori, imprese edili e studi
            immobiliari possono utilizzare il drone per controllare tetti,
            facciate, capannoni, terreni, cantieri, impianti fotovoltaici o aree
            difficili da raggiungere. In questi casi il drone permette di
            ottenere immagini chiare e dettagliate senza ricorrere subito a
            soluzioni più complesse.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard ti aiuta a descrivere il lavoro di cui hai bisogno e a
            ricevere proposte dai piloti drone interessati.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Eventi e matrimoni
            </h2>
            <p className="text-gray-300">
              Riprese aeree per cerimonie, feste, eventi privati e momenti
              speciali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aziende e immobili
            </h2>
            <p className="text-gray-300">
              Foto e video per attività, strutture ricettive, case, ville,
              terreni e annunci.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni e cantieri
            </h2>
            <p className="text-gray-300">
              Controlli visivi, monitoraggi, rilievi e documentazione tecnica
              con drone.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Come trovare un pilota drone vicino a te
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Trovare un pilota drone può sembrare semplice, ma non sempre è
              facile capire chi sia davvero disponibile, quale servizio offra e
              se sia adatto al lavoro richiesto. Cercare online può portare a
              molti risultati generici, profili social non aggiornati o contatti
              che non rispondono.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Con DroneGuard il processo è più diretto: pubblichi la tua
              richiesta, indichi il tipo di servizio, la zona, il periodo e le
              informazioni principali. I piloti interessati possono candidarsi e
              tu puoi valutare le proposte ricevute.
            </p>

            <p className="leading-8 text-gray-300">
              In questo modo non devi contattare decine di operatori a caso, ma
              puoi aspettare candidature da professionisti interessati al tuo
              incarico.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Puoi cercare piloti per
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video con drone</li>
              <li>✅ Foto aeree professionali</li>
              <li>✅ Matrimoni, feste ed eventi</li>
              <li>✅ Video per aziende e attività</li>
              <li>✅ Foto per immobili e terreni</li>
              <li>✅ Ispezione tetti e facciate</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Servizi drone per agricoltura</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché usare DroneGuard per trovare un pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard è pensato per mettere in contatto clienti e piloti drone.
            Se hai bisogno di un servizio, non devi sapere già quale operatore
            contattare: puoi pubblicare la richiesta e lasciare che siano i
            piloti interessati a proporsi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo è utile soprattutto quando non conosci il settore e vuoi
            capire quale soluzione sia più adatta. Un pilota può proporti una
            ripresa video, un servizio fotografico, un'ispezione visiva o un
            lavoro più tecnico in base alle informazioni che inserisci nella
            richiesta.
          </p>

          <p className="leading-8 text-gray-300">
            Più la richiesta è chiara, più sarà facile ricevere candidature
            adatte e confrontare le proposte in modo ordinato.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Pubblica
              </h3>
              <p className="text-sm text-gray-300">
                Inserisci la richiesta e descrivi il servizio drone che ti serve.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ricevi
              </h3>
              <p className="text-sm text-gray-300">
                I piloti interessati possono candidarsi al tuo lavoro.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Confronta
              </h3>
              <p className="text-sm text-gray-300">
                Valuta le candidature e scegli il professionista più adatto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Organizza
              </h3>
              <p className="text-sm text-gray-300">
                Definisci i dettagli del lavoro direttamente con il pilota.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una buona richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per trovare il pilota drone giusto è importante spiegare bene di
            cosa hai bisogno. Indica il tipo di servizio, la città o la zona, la
            data indicativa, il luogo del lavoro e l'obiettivo finale. Ad
            esempio, una richiesta per un matrimonio sarà diversa da una
            richiesta per ispezionare un tetto o realizzare foto di un immobile.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Se hai già un'idea precisa, puoi aggiungere dettagli su durata,
            numero di riprese, tipo di consegna desiderata o eventuali esigenze
            particolari. Se invece non sai cosa chiedere, puoi descrivere il
            risultato che vuoi ottenere e lasciare spazio ai piloti per proporti
            una soluzione.
          </p>

          <p className="leading-8 text-gray-300">
            Una richiesta completa aiuta i piloti a rispondere meglio e ti
            permette di ricevere candidature più utili.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova subito un pilota drone in Italia
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica una richiesta su DroneGuard e ricevi candidature da piloti
            drone disponibili per riprese, eventi, immobili, ispezioni e servizi
            professionali.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
              Pubblica richiesta gratis
            </button>
          </Link>
        </div>

      </section>
    </main>
  )
}