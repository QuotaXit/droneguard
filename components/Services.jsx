export default function Services() {
    const services = [
    {
      title: "Riprese aeree",
      desc: "Foto e video dall’alto per immobili, eventi, turismo, attività e contenuti promozionali.",
      icon: "📷"
    },
    {
      title: "Rilievi e mappature",
      desc: "Rilievi fotogrammetrici, mappature del territorio e supporto al monitoraggio di cantieri e aree.",
      icon: "🗺️"
    },
    {
      title: "Ispezioni tecniche",
      desc: "Controlli visivi di tetti, facciate, impianti, infrastrutture e zone difficilmente accessibili.",
      icon: "🔍"
    },
    {
      title: "Agricoltura",
      desc: "Supporto al monitoraggio di colture e terreni, in base alle attrezzature e alle competenze del pilota.",
      icon: "🌾"
    },
    {
      title: "Eventi e videografia",
      desc: "Riprese aeree per matrimoni, eventi, produzioni video, attività turistiche e contenuti aziendali.",
      icon: "🎥"
    },
    {
      title: "Modellazione 3D",
      desc: "Creazione di modelli tridimensionali tramite fotogrammetria per edifici, terreni e progetti tecnici.",
      icon: "📦"
    }
  ]

  return (
    <section className="relative text-white py-24 px-6">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 max-w-6xl mx-auto">

         {/* TESTI SOTTO */}
        <div className="text-center mt-16 mb-20">

          <h2 className="text-3xl md:text-4xl font-bold font-[var(--font-krona)]">
  Servizi con drone
</h2>

          <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
  Dalle riprese aeree alle ispezioni, dalla mappatura
  all’agricoltura: pubblica la tua richiesta e trova
  piloti con competenze adatte al servizio.
</p>

        </div>

        {/* GRID SOPRA */}
        <div className="grid md:grid-cols-3 gap-6">

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