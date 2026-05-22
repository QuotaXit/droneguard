import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Prezzo ispezione impianto fotovoltaico con drone | DroneGuard",
  description:
    "Scopri il prezzo di un'ispezione fotovoltaica con drone. Richiedi preventivi da piloti drone per controlli e monitoraggio di pannelli solari."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Prezzi ispezioni fotovoltaiche
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Prezzo ispezione impianto fotovoltaico con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'ispezione di impianti fotovoltaici con drone è uno dei servizi
            più richiesti nel settore energetico. Grazie alle riprese aeree e,
            quando necessario, alle termocamere professionali, è possibile
            controllare rapidamente pannelli solari, coperture e grandi campi
            fotovoltaici senza interrompere il funzionamento dell'impianto.
            Il prezzo di un'ispezione fotovoltaica varia in base alla
            dimensione dell'impianto, alla tipologia di analisi richiesta e
            alla documentazione finale necessaria.
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
              Impianti residenziali
            </h2>

            <p className="text-gray-300">
              Controlli di pannelli installati su abitazioni e condomini.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Impianti industriali
            </h2>

            <p className="text-gray-300">
              Verifiche su grandi coperture e strutture produttive.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Parchi fotovoltaici
            </h2>

            <p className="text-gray-300">
              Monitoraggio di impianti estesi e produzione energetica.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Perché utilizzare il drone per il fotovoltaico
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Gli impianti fotovoltaici possono occupare superfici molto ampie e
            richiedere controlli periodici per garantire il corretto
            funzionamento dei pannelli. L'utilizzo del drone permette di
            acquisire immagini dettagliate in tempi ridotti e di controllare
            aree difficilmente accessibili.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini raccolte consentono di individuare anomalie visive,
            danneggiamenti, accumuli di sporco e situazioni che potrebbero
            influenzare il rendimento dell'impianto. In presenza di sensori
            termici è possibile eseguire verifiche ancora più approfondite.
          </p>

          <p className="leading-8 text-gray-300">
            Questa tecnologia viene utilizzata da privati, aziende,
            manutentori, installatori e gestori di impianti energetici.
          </p>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Da cosa dipende il prezzo dell'ispezione
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il prezzo di un'ispezione fotovoltaica dipende dalla superficie
              dell'impianto, dal numero di pannelli da controllare, dalla
              località e dal tipo di documentazione richiesta.
            </p>

            <p className="leading-8 text-gray-300">
              Alcuni clienti richiedono semplici fotografie aeree, mentre altri
              necessitano di report tecnici dettagliati, video professionali o
              controlli periodici programmati nel tempo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi disponibili
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Ispezione pannelli solari</li>
              <li>✅ Monitoraggio impianti</li>
              <li>✅ Controlli periodici</li>
              <li>✅ Documentazione fotografica</li>
              <li>✅ Verifiche tecniche</li>
              <li>✅ Controllo parchi fotovoltaici</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come richiedere un'ispezione fotovoltaica
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta indicando la tipologia
            di impianto, la località e il tipo di verifica desiderata. I
            piloti drone interessati possono candidarsi e proporti la propria
            disponibilità.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Ricevere più candidature consente di confrontare professionisti
            differenti e scegliere quello più adatto alle proprie esigenze.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma semplifica la ricerca di operatori drone per
            controlli e monitoraggi di impianti fotovoltaici in tutta Italia.
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
                Descrivi l'impianto da controllare.
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