import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Pilota Drone Catania | Trova Piloti Drone a Catania | DroneGuard",
  description:
    "Cerchi un pilota drone a Catania? Pubblica gratuitamente il tuo lavoro e ricevi candidature da piloti drone per riprese, ispezioni, eventi e servizi professionali."
}

export default function PilotaDroneCataniaPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova un pilota drone a Catania per qualsiasi progetto
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Se stai cercando un pilota drone a Catania per riprese video,
    fotografie aeree, eventi, immobili, ispezioni tecniche o servizi
    professionali, DroneGuard ti permette di pubblicare una richiesta e
    ricevere candidature da operatori drone interessati al tuo progetto.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Attraverso la piattaforma puoi entrare in contatto con professionisti
    disponibili a lavorare a Catania e provincia, confrontando diverse
    candidature prima di scegliere il pilota più adatto alle tue esigenze.
  </p>

  <p className="leading-8 text-gray-300">
    Una sola richiesta consente di raggiungere più operatori drone,
    semplificando la ricerca e riducendo i tempi necessari per trovare il
    professionista ideale.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Riprese aeree per turismo, eventi e aziende
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      Le fotografie e i video realizzati con drone vengono utilizzati per
      promuovere attività commerciali, strutture ricettive, immobili,
      eventi, stabilimenti turistici e iniziative aziendali. Le immagini
      aeree permettono di valorizzare luoghi e strutture da prospettive
      particolarmente coinvolgenti.
    </p>

    <p className="leading-8 text-gray-300">
      Sempre più aziende scelgono le riprese con drone per migliorare la
      comunicazione online e presentare servizi e prodotti attraverso
      contenuti professionali ad alto impatto visivo.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi più richiesti a Catania
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese video professionali</li>
      <li>✅ Fotografie aeree</li>
      <li>✅ Eventi e matrimoni</li>
      <li>✅ Hotel e strutture turistiche</li>
      <li>✅ Immobili e terreni</li>
      <li>✅ Monitoraggio cantieri</li>
      <li>✅ Ispezioni tecniche</li>
      <li>✅ Termografia con drone</li>
      <li>✅ Rilievi topografici</li>
    </ul>
  </div>
</div>

<div className="mb-14 grid gap-6 md:grid-cols-3">
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Registrazione gratuita
    </h2>

    <p className="text-gray-300">
      Crea un account e accedi ai servizi di DroneGuard.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Pubblica la richiesta
    </h2>

    <p className="text-gray-300">
      Descrivi il lavoro richiesto e specifica la località.
    </p>
  </div>

  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
    <h2 className="mb-3 text-xl font-semibold">
      Ricevi candidature
    </h2>

    <p className="text-gray-300">
      I piloti drone interessati possono candidarsi direttamente al tuo annuncio.
    </p>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Come funziona DroneGuard
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    I clienti ricevono 10 crediti gratuiti dopo la registrazione e possono
    pubblicare una richiesta utilizzando 5 crediti. I piloti drone ricevono
    invece 50 crediti gratuiti e possono candidarsi agli annunci spendendo
    5 crediti per ogni candidatura inviata.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Questo sistema permette di mettere in contatto clienti e professionisti
    realmente interessati ai lavori pubblicati sulla piattaforma, favorendo
    candidature più qualificate.
  </p>

  <p className="leading-8 text-gray-300">
    Una volta terminati i crediti gratuiti, è possibile acquistare nuovi
    pacchetti crediti per continuare a utilizzare DroneGuard.
  </p>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Piloti drone disponibili a Catania e provincia
  </h2>

  <p className="leading-8 text-gray-300">
    Pubblica gratuitamente la tua richiesta su DroneGuard e ricevi
    candidature da piloti drone disponibili a Catania per riprese aeree,
    eventi, immobili, turismo, monitoraggio cantieri, termografia,
    fotogrammetria e servizi professionali con drone.
  </p>
</div>
      </section>
    </main>
  )
}