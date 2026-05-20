import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Fotogrammetria con drone | DroneGuard",
  description:
    "Trova piloti drone per fotogrammetria, modellazione 3D, ortofoto e rilievi professionali."
}

export default function FotogrammetriaConDronePage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Fotogrammetria con drone
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      La fotogrammetria con drone consente di acquisire immagini aeree ad alta
      risoluzione e trasformarle in ortofoto, modelli tridimensionali, nuvole
      di punti e mappe georeferenziate. Questa tecnologia viene utilizzata in
      edilizia, topografia, infrastrutture, agricoltura e pianificazione del
      territorio, offrendo dati accurati in tempi ridotti rispetto ai metodi
      tradizionali. Su DroneGuard puoi trovare operatori drone specializzati in
      fotogrammetria e rilievi professionali in tutta Italia.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Ortofoto e mappe
        </h2>
        <p className="text-gray-300">
          Produzione di ortofoto ad alta precisione e mappe dettagliate per
          analisi, progettazione e documentazione tecnica.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Modelli 3D
        </h2>
        <p className="text-gray-300">
          Creazione di modelli tridimensionali di edifici, terreni,
          infrastrutture e aree di interesse professionale.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Rilievi ad alta precisione
        </h2>
        <p className="text-gray-300">
          Acquisizione dati accurata per geometri, architetti, ingegneri,
          studi tecnici e aziende.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un operatore per fotogrammetria con drone
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
      candidature da piloti drone qualificati. Potrai confrontare le offerte
      ricevute e scegliere il professionista più adatto per rilievi
      fotogrammetrici, modellazione 3D, ortofoto e acquisizione dati
      georeferenziati.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400">
        Richiedi preventivi
      </button>
    </Link>
  </section>
</main>
  )
}