export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Crea il tuo profilo pilota",
      desc: "Registrati gratis, aggiungi esperienza, città, drone, servizi offerti e certificazioni. Un profilo completo aumenta le possibilità di essere scelto dai clienti.",
      type: "profile"
    },
    {
      number: "2",
      title: "Sfoglia la Bacheca lavori",
      desc: "Entra nella Bacheca lavori, guarda gli annunci pubblicati dai clienti e candidati ai lavori più adatti alla tua zona e ai tuoi servizi.",
      type: "job"
    },
    {
      number: "3",
      title: "Ricevi i dati e lavora",
      desc: "Se il cliente accetta la tua candidatura, ricevi i dati precisi del lavoro. Il pagamento viene gestito direttamente tra cliente e pilota, fuori dalla piattaforma.",
      type: "earnings"
    }
  ]

  return (
    <section className="relative px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f2a] to-[#0a0d1f]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-[var(--font-krona)] sm:text-4xl md:text-5xl">
          Come funziona per i piloti
        </h2>

        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Iscriviti, trova lavori nella bacheca e candidati. Se vieni scelto, ricevi i dettagli precisi del lavoro direttamente nella tua dashboard.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/30 bg-[#0F1535] p-5 text-left sm:p-8"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-6 font-bold bg-gradient-to-br from-[#7B5CFF] to-[#A855F7]">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                {step.desc}
              </p>

              {step.type === "profile" && (
                <div className="flex flex-col gap-3 rounded-xl bg-white p-3 text-black sm:flex-row sm:items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0F1535] text-lg">
                    🚁
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-semibold">
                      Profilo pilota
                    </p>

                    <p className="text-xs text-gray-600">
                      Drone, città, servizi e certificazioni in evidenza.
                    </p>
                  </div>

                  <button className="rounded-md bg-purple-500 px-2 py-2 text-xs text-white sm:py-1">
                    Completa profilo
                  </button>
                </div>
              )}

              {step.type === "job" && (
                <div className="bg-white text-black rounded-xl p-3 text-sm">
                  <p className="font-semibold">
                    Riprese aeree immobile — Roma
                  </p>

                  <p className="text-xs text-gray-600 mt-1">
                    Cliente cerca pilota drone per riprese video e foto.
                  </p>
                </div>
              )}

              {step.type === "earnings" && (
                <div className="relative mt-8 w-full sm:w-[90%]">
                  <div className="absolute top-6 left-6 w-full bg-white text-black rounded-xl p-4 shadow-md opacity-70 z-10" />

                  <div className="absolute top-3 left-3 w-full bg-white text-black rounded-xl p-4 shadow-lg opacity-70 z-20" />

                  <div className="relative bg-white text-black rounded-xl p-5 shadow-2xl z-30">
                    <p className="text-xl font-bold">
                      Lavoro accettato
                    </p>

                    <p className="text-sm text-gray-700 mt-2">
                      Contatti e dettagli disponibili in " Dati Lavoro".
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}