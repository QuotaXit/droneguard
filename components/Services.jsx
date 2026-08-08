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
  <section className="relative overflow-hidden border-b border-white/5 bg-[#0A0F27]">
    {/* SFONDO */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.06] blur-[120px]" />

      <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-green-500/[0.04] blur-[100px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

      {/* TESTATA */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
          Servizi professionali
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Servizi con drone
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Dalle riprese aeree alle ispezioni, dalla mappatura
          all&apos;agricoltura: pubblica la tua richiesta e trova
          piloti con competenze adatte al servizio.
        </p>
      </div>

      {/* GRID */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111735] p-6 transition duration-300 hover:-translate-y-1 hover:border-green-400/20 hover:bg-[#141D40]"
          >
            {/* GLOW HOVER */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-green-400/[0.04] blur-3xl transition group-hover:bg-green-400/[0.08]" />

            <div className="relative">

              {/* ICONA + NUMERO */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-green-400/15 bg-green-400/[0.07] text-2xl">
                  {item.icon}
                </div>

                <span className="text-xs font-semibold tracking-[0.18em] text-gray-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* TESTO */}
              <h3 className="mt-6 text-lg font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {item.desc}
              </p>

              {/* DETTAGLIO FINALE */}
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-green-400 opacity-70 transition group-hover:opacity-100">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                Servizio DroneGuard
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* NOTA FINALE */}
      <div className="mt-8 flex justify-center">
        <p className="rounded-full border border-white/[0.07] bg-white/[0.03] px-5 py-2.5 text-center text-xs text-gray-500 sm:text-sm">
          La disponibilità dei servizi dipende dalle competenze
          e dalle attrezzature dei piloti presenti sulla piattaforma.
        </p>
      </div>
    </div>
  </section>
)
}