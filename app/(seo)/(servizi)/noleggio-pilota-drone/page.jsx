import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Noleggio pilota drone | DroneGuard",
  description:
    "Trova piloti drone disponibili per lavori professionali, riprese aeree, ispezioni e servizi tecnici in tutta Italia."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova il pilota drone giusto per il tuo progetto
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Il noleggio di un pilota drone rappresenta una soluzione pratica per
    aziende, professionisti e privati che necessitano di servizi aerei senza
    dover acquistare attrezzature o ottenere certificazioni specifiche.
    Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
    candidature da piloti drone interessati a svolgere il lavoro.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    I piloti registrati sulla piattaforma operano in diversi settori,
    dall'edilizia all'agricoltura, dalle riprese video agli eventi,
    passando per ispezioni tecniche, monitoraggio cantieri, rilievi,
    fotogrammetria e termografia con drone.
  </p>

  <p className="leading-8 text-gray-300">
    Ogni richiesta può essere personalizzata indicando località, tipologia
    di servizio, tempistiche e dettagli del progetto, permettendo ai
    professionisti di candidarsi in base alle proprie competenze e
    disponibilità.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Quando può essere utile
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Un pilota drone può essere richiesto per riprese aeree di eventi,
      matrimoni, immobili, strutture industriali, cantieri, terreni,
      impianti fotovoltaici e numerose altre attività professionali.
    </p>

    <p className="leading-8 text-gray-300">
      Grazie alla varietà di operatori presenti sulla piattaforma è
      possibile trovare professionisti con esperienza in diversi ambiti e
      dotati di attrezzature specifiche per il lavoro richiesto.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video aeree</li>
      <li>✅ Fotografia con drone</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Rilievi topografici</li>
      <li>✅ Fotogrammetria</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Servizi per eventi e matrimoni</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona il noleggio su DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard non assegna direttamente i lavori e non propone preventivi
    predefiniti. La piattaforma mette in contatto clienti e piloti drone
    registrati permettendo ai professionisti interessati di candidarsi alle
    richieste pubblicate.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Dopo aver pubblicato il lavoro potrai valutare le candidature ricevute,
    confrontare esperienza, disponibilità e tipologia di servizio offerto
    dai piloti.
  </p>

  <p className="leading-8 text-gray-300">
    Questo sistema consente di trovare il professionista più adatto alle
    proprie esigenze mantenendo piena libertà nella scelta finale.
  </p>
</div>
      </section>
    </main>
  )
}