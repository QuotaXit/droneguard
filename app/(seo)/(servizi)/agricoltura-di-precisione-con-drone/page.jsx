import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Agricoltura di precisione con drone | DroneGuard",
  description:
    "Trova professionisti drone per monitoraggio colture, agricoltura di precisione e analisi dei terreni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Agricoltura di precisione con drone
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      I droni stanno trasformando il settore agricolo grazie alla possibilità
      di raccogliere dati accurati su colture e terreni in tempi rapidi.
      Attraverso sensori avanzati, immagini ad alta risoluzione e rilievi
      aerei, è possibile monitorare lo stato delle coltivazioni, individuare
      eventuali criticità e ottimizzare gli interventi agricoli. Su DroneGuard
      puoi trovare operatori specializzati in agricoltura di precisione per
      aziende agricole, agronomi e professionisti del settore.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Monitoraggio colture
        </h2>
        <p className="text-gray-300">
          Controlla la salute delle coltivazioni e identifica rapidamente aree
          che richiedono attenzione o interventi specifici.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Analisi dei terreni
        </h2>
        <p className="text-gray-300">
          Raccogli informazioni dettagliate sui terreni per migliorare la
          gestione delle risorse e la produttività agricola.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Rilievi multispettrali
        </h2>
        <p className="text-gray-300">
          Utilizza tecnologie avanzate per ottenere dati utili alla valutazione
          dello stato vegetativo delle colture.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un operatore drone per l'agricoltura
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica la tua richiesta su DroneGuard e ricevi candidature da piloti
      drone qualificati. Potrai confrontare le proposte ricevute e scegliere il
      professionista più adatto per monitoraggi agricoli, rilievi
      multispettrali e servizi dedicati all'agricoltura di precisione.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Trova un professionista
      </button>
    </Link>
  </section>
</main>
  )
}