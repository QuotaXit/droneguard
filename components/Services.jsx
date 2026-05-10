export default function Services() {
  const services = [
    {
      title: "Riprese Aeree",
      desc: "Immagini ad alta risoluzione per immobili, eventi e campagne di marketing.",
      icon: "📷"
    },
    {
      title: "Sondaggi e Mappatura",
      desc: "Rilievi topografici accurati e mappature per edilizia e ingegneria.",
      icon: "🗺️"
    },
    {
      title: "Ispezione",
      desc: "Ispezioni infrastrutturali, energetiche e industriali con reporting dettagliato.",
      icon: "🔍"
    },
    {
      title: "Agricoltura",
      desc: "Immagini cinematografiche di droni per film, pubblicità e produzioni aziendali.",
      icon: "🌾"
    },
    {
      title: "Videografia",
      desc: "Fotografie ad alta risoluzione per immobili, eventi e campagne di marketing.",
      icon: "🎥"
    },
    {
      title: "Modellazione 3D",
      desc: "Modelli 3D basati su fotogrammetria per architettura e piani urbani.",
      icon: "📦"
    }
  ]

  return (
    <section className="relative text-white py-24 px-6">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-krona)]">
          Accesso su Richiesta a Servizi Professionali di Droni
        </h2>

       <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
  Dai rilievi del cantiere alle mappature agricole — ogni servizio di droni commerciali, una piattaforma.
</p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {services.map((item, i) => (
            <div
              key={i}
              className="border border-white/20 rounded-xl p-6 text-left bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
            >
              
              {/* ICON */}
              <div className="text-2xl mb-3">
                {item.icon}
              </div>

              {/* TITLE CARD */}
              <h3 className="font-semibold font-[var(--font-krona)]">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-gray-300 mt-2">
                {item.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}