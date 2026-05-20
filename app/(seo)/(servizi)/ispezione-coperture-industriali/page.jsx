import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione coperture industriali | DroneGuard",
  description:
    "Trova piloti drone per l'ispezione di coperture industriali, capannoni e strutture produttive."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
  <Navbar />

  <section className="mx-auto max-w-6xl px-6 py-20">
    <h1 className="mb-6 text-4xl font-bold">
      Ispezione coperture industriali
    </h1>

    <p className="mb-8 text-lg leading-8 text-gray-300">
      Le ispezioni delle coperture industriali con drone consentono di
      verificare rapidamente lo stato di capannoni, tetti industriali,
      magazzini, stabilimenti produttivi e strutture commerciali senza
      interrompere le attività aziendali. Grazie a fotografie e video ad alta
      risoluzione è possibile individuare infiltrazioni, danni, usura,
      deterioramenti e altre criticità in modo sicuro ed efficiente.
      Su DroneGuard puoi trovare piloti drone qualificati per controlli e
      monitoraggi di coperture industriali in tutta Italia.
    </p>

    <div className="grid gap-6 md:grid-cols-3 mb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Controllo tetti industriali
        </h2>
        <p className="text-gray-300">
          Ispezioni dettagliate di coperture, capannoni e strutture produttive
          senza l'utilizzo di ponteggi o piattaforme elevatrici.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Individuazione anomalie
        </h2>
        <p className="text-gray-300">
          Rilevazione di infiltrazioni, crepe, danni strutturali e problemi
          che potrebbero compromettere la sicurezza della copertura.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h2 className="mb-3 text-xl font-semibold">
          Riduzione dei costi
        </h2>
        <p className="text-gray-300">
          I droni permettono di eseguire controlli rapidi e sicuri riducendo
          tempi di intervento e costi operativi.
        </p>
      </div>
    </div>

    <h2 className="mb-4 text-2xl font-bold">
      Trova un pilota drone per coperture industriali
    </h2>

    <p className="mb-8 text-gray-300 leading-8">
      Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
      candidature da operatori drone interessati. Potrai confrontare le
      offerte ricevute e scegliere il professionista più adatto per
      ispezioni di capannoni, coperture industriali, stabilimenti produttivi,
      magazzini e strutture commerciali.
    </p>

    <Link href="/register">
      <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black">
        Richiedi un'ispezione
      </button>
    </Link>
  </section>
</main>
  )
}