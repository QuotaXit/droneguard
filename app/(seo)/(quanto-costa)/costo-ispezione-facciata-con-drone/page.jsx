import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Costo ispezione facciata con drone | DroneGuard",
  description:
    "Scopri il costo di un'ispezione facciata con drone. Richiedi preventivi da piloti drone per controlli, verifiche e documentazione tecnica."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi ispezioni facciate
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Costo ispezione facciata con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'ispezione di una facciata con drone permette di verificare lo
            stato di conservazione di edifici, condomini, strutture storiche,
            capannoni e immobili commerciali senza la necessità di installare
            ponteggi o utilizzare piattaforme elevatrici. Grazie alle immagini
            ad alta definizione è possibile individuare crepe, infiltrazioni,
            distacchi di intonaco e altre criticità strutturali. Il costo di
            un'ispezione facciata con drone dipende dalle dimensioni
            dell'edificio, dall'altezza della struttura e dal tipo di
            documentazione richiesta.
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
              Condomini
            </h2>

            <p className="text-gray-300">
              Verifiche di facciate residenziali e parti comuni.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Edifici storici
            </h2>

            <p className="text-gray-300">
              Controlli visivi senza interventi invasivi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Strutture industriali
            </h2>

            <p className="text-gray-300">
              Ispezioni rapide di grandi superfici verticali.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché ispezionare una facciata con drone
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le facciate degli edifici sono costantemente esposte agli agenti
            atmosferici e con il tempo possono presentare deterioramenti,
            infiltrazioni, crepe o distacchi di materiale. Individuare questi
            problemi in fase iniziale può evitare interventi più costosi in
            futuro.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Utilizzando un drone è possibile acquisire immagini dettagliate
            anche nelle zone più difficili da raggiungere. Questo consente di
            effettuare controlli preliminari e verifiche periodiche senza
            interrompere le attività dell'edificio.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini raccolte possono essere utilizzate da amministratori,
            tecnici, ingegneri, architetti e imprese per pianificare interventi
            di manutenzione o ristrutturazione.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il costo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il costo dell'ispezione dipende dall'altezza dell'edificio,
              dall'estensione della facciata, dalla complessità dell'area e
              dalla tipologia di materiale richiesto.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni clienti richiedono semplici fotografie ad alta
              definizione, mentre altri necessitano di video tecnici, report
              fotografici o documentazione dettagliata da utilizzare per
              manutenzioni e verifiche professionali.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Controlli più richiesti
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Verifica crepe e fessurazioni</li>
              <li>✅ Controllo infiltrazioni</li>
              <li>✅ Analisi stato intonaco</li>
              <li>✅ Ispezione balconi</li>
              <li>✅ Documentazione fotografica</li>
              <li>✅ Verifiche manutentive</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere un'ispezione facciata
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta indicando il tipo di
            edificio, la località e le verifiche che desideri effettuare. I
            piloti drone interessati possono candidarsi e proporti la propria
            disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature ti permette di confrontare professionisti
            differenti e scegliere la soluzione più adatta alle tue esigenze.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma mette in contatto clienti e piloti drone in tutta
            Italia per controlli tecnici e ispezioni professionali.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea gratuitamente il tuo account.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Pubblica la richiesta</h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'edificio da ispezionare.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Ricevi candidature</h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il professionista</h3>
              <p className="text-sm leading-6 text-gray-300">
                Valuta le candidature ricevute.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}