import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per magazzini logistici | DroneGuard",
  description:
    "Trova piloti drone per magazzini logistici, poli logistici, piazzali, coperture, aree di carico, documentazione visiva e video aziendali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per logistica e aziende
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per magazzini logistici
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi realizzare foto aeree o video di un magazzino logistico, un polo
            distributivo, un deposito merci, un centro di stoccaggio, un'area di
            carico e scarico, un piazzale aziendale, una copertura industriale o
            una struttura dedicata alla logistica? Con DroneGuard puoi pubblicare
            una richiesta e trovare piloti drone disponibili per realizzare
            immagini dall'alto, riprese video, documentazione visiva, sopralluoghi
            esterni e materiale utile ad aziende, responsabili logistici, facility
            manager, proprietari, tecnici, imprese e professionisti che devono
            mostrare, controllare o documentare meglio l'area.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Trova un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aree di carico e scarico
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video di baie di carico, rampe, accessi, piazzali,
              parcheggi mezzi, zone operative e percorsi interni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Coperture e strutture
            </h2>
            <p className="text-gray-300">
              Ottieni immagini di tetti, gronde, lucernari, facciate, impianti
              esterni, pannelli fotovoltaici e coperture del magazzino.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale aziendale
            </h2>
            <p className="text-gray-300">
              Usa riprese e foto per report, presentazioni, sito web, social,
              comunicazioni interne, portfolio e documentazione della struttura.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per un magazzino logistico
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I magazzini logistici spesso occupano superfici molto grandi e
              comprendono aree esterne complesse: piazzali, accessi per camion,
              parcheggi, rampe, baie di carico, recinzioni, depositi esterni,
              coperture, facciate, zone di manovra e percorsi interni. Fotografare
              tutto da terra può essere difficile, soprattutto quando serve una
              visione completa dell'intera struttura.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di osservare il magazzino dall'alto e creare una
              documentazione visiva più chiara. Le immagini possono mostrare la
              disposizione degli spazi, il rapporto tra edificio e piazzali, gli
              accessi principali, le aree operative, le zone di carico e scarico,
              le coperture e gli spazi che devono essere valorizzati o controllati.
            </p>

            <p className="leading-8 text-gray-300">
              Le riprese drone possono essere utili sia per esigenze pratiche,
              come manutenzioni e documentazione interna, sia per esigenze
              commerciali, come presentazioni aziendali, contenuti per il sito web,
              video istituzionali e materiale da mostrare a clienti, partner o
              investitori.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per magazzini logistici
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di magazzini e poli logistici</li>
              <li>✅ Video aziendali di depositi e centri distributivi</li>
              <li>✅ Riprese di piazzali, accessi e aree di manovra</li>
              <li>✅ Immagini di baie di carico e rampe</li>
              <li>✅ Documentazione visiva per report interni</li>
              <li>✅ Controllo visivo di coperture e facciate</li>
              <li>✅ Foto per manutenzioni e preventivi</li>
              <li>✅ Materiale per sito web, social e presentazioni</li>
              <li>✅ Riprese prima e dopo lavori su aree logistiche</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per piazzali, accessi e zone operative
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un magazzino logistico non è composto solo dall'edificio principale.
            Spesso la parte più importante è l'organizzazione degli spazi esterni:
            accessi per mezzi pesanti, parcheggi camion, piazzali di manovra,
            rampe, baie di carico, aree di sosta, depositi temporanei, recinzioni,
            cancelli, strade interne e collegamenti con la viabilità esterna.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini dall'alto possono aiutare a mostrare come è organizzata
            l'area, dove si trovano i percorsi principali, quali zone sono
            utilizzate per carico e scarico e come si presenta il magazzino nel
            suo insieme. Questo può essere utile per report aziendali, valutazioni
            interne, presentazioni commerciali o documentazione prima e dopo un
            intervento di sistemazione del piazzale.
          </p>

          <p className="leading-8 text-gray-300">
            Il drone può anche essere utile per documentare lavori su asfalti,
            recinzioni, illuminazione esterna, segnaletica, nuove aree di
            parcheggio, ampliamenti, sistemazioni del piazzale o modifiche agli
            accessi.
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
                Crea il tuo account come azienda, responsabile logistico,
                proprietario, facility manager, tecnico o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ricevi crediti
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
                Descrivi il magazzino, la città, le aree da riprendere e il tipo
                di foto o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità operative, tempi e consegna dei file.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Video aziendali per logistica e distribuzione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un video drone può valorizzare molto un magazzino logistico. Le
              riprese dall'alto mostrano dimensioni, ordine, accessibilità,
              posizione, piazzali, flussi esterni e struttura generale. Questo
              tipo di contenuto può essere utile per presentare l'azienda a
              clienti, fornitori, partner, investitori o nuovi collaboratori.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale può essere usato su sito web, social, brochure digitali,
              presentazioni, video istituzionali, pagine aziendali, campagne
              commerciali e comunicazioni interne.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Documentazione per manutenzioni e controlli visivi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Oltre alla comunicazione, il drone può essere richiesto per creare
              documentazione visiva utile a manutenzioni e controlli esterni.
              Coperture, gronde, lucernari, facciate, impianti esterni, pannelli
              fotovoltaici, recinzioni e piazzali possono essere fotografati in
              modo ordinato.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini non sostituiscono verifiche tecniche o ispezioni
              specialistiche, ma possono aiutare a capire meglio quali zone
              richiedono attenzione e a comunicare con imprese e professionisti.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per coperture, facciate e impianti esterni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Molti magazzini logistici hanno coperture molto grandi, spesso con
            lucernari, pannelli fotovoltaici, canali di scolo, gronde, guaine,
            impianti tecnici, sistemi di ventilazione e superfici difficili da
            vedere da terra. Il drone consente di ottenere immagini generali e
            dettagliate della parte superiore dell'edificio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Questo può essere utile in caso di infiltrazioni, manutenzioni,
            lavori programmati, pulizia gronde, controllo visivo dopo eventi
            meteo, documentazione per assicurazioni o preparazione di interventi
            su tetti e facciate. Il materiale raccolto può essere condiviso con
            tecnici, responsabili aziendali, proprietà o imprese incaricate.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi richiedere immagini della copertura completa,
            dettagli di zone specifiche, riprese dei lati del fabbricato, foto del
            piazzale e video panoramici della struttura.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Centri distributivi
            </h2>
            <p className="text-gray-300">
              Riprese per poli logistici, hub distributivi, magazzini merci,
              depositi, piattaforme di smistamento e grandi strutture operative.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aree esterne
            </h2>
            <p className="text-gray-300">
              Foto e video di piazzali, parcheggi, rampe, baie di carico,
              accessi, recinzioni, spazi di manovra e zone di deposito.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Comunicazione aziendale
            </h2>
            <p className="text-gray-300">
              Materiale visivo per sito web, social, presentazioni, report,
              portfolio, documenti commerciali e contenuti istituzionali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            magazzino e il tipo di risultato che vuoi ottenere. Puoi indicare la
            città, la zona, la dimensione indicativa della struttura, il tipo di
            attività logistica, le aree esterne da riprendere e se ti servono foto,
            video o entrambi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi immagini del piazzale, delle baie di
            carico, dei parcheggi, degli accessi, della copertura, dei pannelli
            fotovoltaici, delle facciate, delle recinzioni o una panoramica
            completa dell'intero complesso logistico.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come orari disponibili, presenza
            di camion o mezzi in movimento, referente sul posto, aree di decollo,
            eventuali limitazioni operative, necessità di coordinarsi con la
            sicurezza interna e modalità di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per magazzino logistico
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un magazzino
              logistico. Mi servono riprese dall'alto dell'edificio, del piazzale,
              delle baie di carico, degli accessi camion, dei parcheggi, della
              copertura e delle aree esterne. Il materiale verrà usato per
              presentazione aziendale, documentazione interna e aggiornamento del
              sito web.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            struttura, le aree da riprendere, l'obiettivo del servizio e il tipo di
            consegna desiderata.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per magazzini logistici?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla dimensione della
            struttura, alla durata delle riprese, alla complessità dell'area, alla
            presenza di zone operative, al numero di punti da documentare e al tipo
            di materiale finale. Una semplice serie di foto aeree ha un costo
            diverso rispetto a un video aziendale completo o a una documentazione
            dettagliata di coperture, piazzali e accessi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcune aziende chiedono solo file
            grezzi, altre preferiscono foto selezionate, video montati, cartelle
            ordinate, immagini divise per area o materiale pronto per sito web,
            social, report, presentazioni e comunicazioni commerciali.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio più adatto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per un magazzino logistico?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per documentare
                magazzini, depositi, piazzali, aree di carico, accessi, coperture
                e strutture logistiche.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le riprese possono essere usate per il sito aziendale?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere materiale fotografico o video da usare per
                sito web, social, presentazioni, brochure digitali e comunicazione
                aziendale.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può riprendere la copertura del magazzino?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere immagini di tetti, lucernari, gronde, pannelli
                fotovoltaici, impianti esterni e facciate. Per valutazioni tecniche
                servono comunque professionisti competenti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard realizza direttamente il servizio?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi
                piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per magazzini logistici
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video aziendali, sopralluoghi
            visivi, documentazione di magazzini logistici, poli distributivi,
            piazzali, accessi, coperture, baie di carico, aree operative e
            strutture aziendali.
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