import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Quanto costa un pilota drone? Prezzi e preventivi | DroneGuard",
  description:
    "Scopri quanto costa un pilota drone per riprese aeree, ispezioni, eventi, edilizia, fotovoltaico e rilievi professionali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi servizi drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Quanto costa un pilota drone?
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il costo di un pilota drone può variare in base al tipo di
            servizio richiesto, alla durata del lavoro, alla località,
            all'esperienza del professionista e alle attrezzature utilizzate.
            Riprese video, fotografie aeree, ispezioni tecniche, rilievi
            topografici, termografia e monitoraggio cantieri hanno esigenze
            differenti e possono richiedere competenze specifiche.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
                Richiedi preventivi gratuiti
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Riprese video
            </h2>

            <p className="text-gray-300">
              Eventi, aziende, immobili e produzioni video professionali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Ispezioni tecniche
            </h2>

            <p className="text-gray-300">
              Tetti, facciate, impianti industriali e pannelli fotovoltaici.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Rilievi professionali
            </h2>

            <p className="text-gray-300">
              Fotogrammetria, topografia e monitoraggio del territorio.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Da cosa dipende il costo di un pilota drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Non esiste un prezzo unico valido per tutti i servizi drone.
            Ogni lavoro presenta caratteristiche differenti e può richiedere
            competenze specifiche. Una semplice ripresa aerea per un immobile
            avrà generalmente costi diversi rispetto a un'ispezione tecnica
            di una struttura industriale o a un rilievo fotogrammetrico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Tra gli elementi che influenzano maggiormente il preventivo
            troviamo la durata dell'intervento, la distanza da percorrere,
            la complessità dell'operazione, l'eventuale necessità di
            autorizzazioni e il tipo di drone utilizzato.
          </p>

          <p className="leading-8 text-gray-300">
            Alcuni servizi richiedono inoltre sensori specifici come
            termocamere, camere multispettrali o attrezzature professionali
            per rilievi e mappature ad alta precisione.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Servizi più richiesti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              I piloti drone vengono richiesti per numerose attività in
              ambito privato e professionale. Le riprese aeree per eventi,
              matrimoni e immobili sono tra i servizi più popolari, ma negli
              ultimi anni è cresciuta molto anche la domanda di ispezioni
              tecniche e monitoraggi industriali.
            </p>

            <p className="leading-8 text-gray-300">
              Settori come edilizia, energia, agricoltura e infrastrutture
              utilizzano sempre più frequentemente i droni per ottenere dati,
              immagini e documentazione in tempi rapidi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Attività disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Riprese video professionali</li>
              <li>✅ Fotografie aeree</li>
              <li>✅ Ispezioni tecniche</li>
              <li>✅ Monitoraggio cantieri</li>
              <li>✅ Rilievi topografici</li>
              <li>✅ Termografia con drone</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come ottenere più preventivi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare gratuitamente una richiesta
            specificando il servizio desiderato, la località e le tue
            esigenze. I piloti interessati possono candidarsi e proporti
            la propria disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare professionisti
            differenti e valutare tempi, esperienza e modalità operative.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni pilota può presentare la propria proposta in base alle
            caratteristiche del lavoro richiesto.
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
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Pubblica il lavoro
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                Descrivi il servizio richiesto.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Ricevi candidature
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il professionista
              </h3>

              <p className="text-sm leading-6 text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa mediamente un pilota drone?
              </h3>

              <p className="text-gray-300">
                Dipende dal tipo di servizio richiesto e dalla complessità del lavoro.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere più preventivi?
              </h3>

              <p className="text-gray-300">
                Sì, pubblicando una richiesta puoi ricevere candidature da più piloti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente il servizio?
              </h3>

              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone registrati.
              </p>
            </div>

          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone vicino a te
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Pubblica gratuitamente la tua richiesta e ricevi candidature
            da piloti drone interessati al tuo progetto.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
              Registrati gratis
            </button>
          </Link>
        </div>

      </section>
    </main>
  )
}