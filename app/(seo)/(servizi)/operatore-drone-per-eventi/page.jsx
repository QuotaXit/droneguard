import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Operatore drone per eventi | DroneGuard",
  description:
    "Trova piloti drone per matrimoni, eventi, concerti e manifestazioni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Riprese aeree per eventi e occasioni speciali
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    Un operatore drone può aggiungere una prospettiva unica a qualsiasi
    evento, catturando immagini e video spettacolari dall'alto. Le riprese
    aeree consentono di valorizzare location, partecipanti e momenti
    importanti attraverso contenuti coinvolgenti e professionali.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Dalle cerimonie private agli eventi aziendali, fino a concerti,
    manifestazioni sportive e iniziative pubbliche, i droni permettono di
    documentare l'evento da punti di vista difficilmente raggiungibili con
    videocamere tradizionali.
  </p>

  <p className="leading-8 text-gray-300">
    Attraverso DroneGuard puoi pubblicare una richiesta e ricevere
    candidature da piloti drone interessati a realizzare riprese aeree per
    il tuo evento.
  </p>
</div>

<div className="mb-14 grid gap-10 md:grid-cols-2">
  <div>
    <h2 className="mb-4 text-3xl font-bold">
      Eventi più richiesti
    </h2>

    <p className="mb-5 leading-8 text-gray-300">
      I piloti drone vengono frequentemente richiesti per matrimoni,
      cerimonie, feste private, concerti, eventi aziendali, inaugurazioni,
      raduni, gare sportive e manifestazioni pubbliche.
    </p>

    <p className="leading-8 text-gray-300">
      Ogni evento presenta esigenze differenti e può richiedere attrezzature,
      esperienza o modalità operative specifiche in base alla location e al
      numero di partecipanti.
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
    <h3 className="mb-5 text-2xl font-bold">
      Servizi disponibili
    </h3>

    <ul className="space-y-4 text-gray-300">
      <li>✅ Riprese aeree per matrimoni</li>
      <li>✅ Video per eventi aziendali</li>
      <li>✅ Copertura di concerti e spettacoli</li>
      <li>✅ Manifestazioni sportive</li>
      <li>✅ Eventi pubblici e privati</li>
      <li>✅ Fotografie aeree professionali</li>
      <li>✅ Video promozionali</li>
      <li>✅ Contenuti per social media</li>
    </ul>
  </div>
</div>

<div className="mb-14">
  <h2 className="mb-4 text-3xl font-bold">
    Trova il professionista più adatto
  </h2>

  <p className="mb-5 leading-8 text-gray-300">
    DroneGuard è una piattaforma che mette in contatto clienti e piloti
    drone. Dopo aver pubblicato il tuo annuncio, i professionisti
    interessati possono candidarsi alla richiesta.
  </p>

  <p className="mb-5 leading-8 text-gray-300">
    Potrai valutare le candidature ricevute, confrontare esperienza,
    attrezzatura utilizzata, disponibilità e tipologia di servizio offerto.
  </p>

  <p className="leading-8 text-gray-300">
    In questo modo potrai scegliere il pilota drone più adatto alle esigenze
    del tuo evento e ottenere contenuti aerei professionali per valorizzare
    ogni momento importante.
  </p>
</div>
      </section>
    </main>
  )
}