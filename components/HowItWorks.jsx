export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Crea il tuo profilo",
      desc: "Mostra le tue certificazioni, la tua esperienza e i tuoi lavori precedenti per distinguerti",
      type: "profile"
    },
    {
      number: "2",
      title: "Sfoglia e Sblocca Lavori",
      desc: "Esplora le missioni disponibili. Iscriviti per sbloccare dettagli completi, budget e contatti dei clienti.",
      type: "job"
    },
    {
      number: "3",
      title: "Ricevi Lavori",
      desc: "Connettiti direttamente con i clienti e ottieni progetti di droni di alta qualità",
      type: "earnings"
    }
  ]

  return (
    <section className="relative px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f2a] to-[#0a0d1f]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl font-bold font-[var(--font-krona)] sm:text-4xl md:text-5xl">
          How it works?
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Dai rilievi nei cantieri alla mappatura agricola — tutti i servizi commerciali con droni in un’unica piattaforma.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/30 bg-[#0F1535] p-5 text-left sm:p-8"
            >
              
              {/* NUMBER */}
              <div className="w-10 h-10 flex items-center justify-center rounded-lg mb-6 font-bold bg-gradient-to-br from-[#7B5CFF] to-[#A855F7]">
                {step.number}
              </div>

              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-300 text-sm mb-6">
                {step.desc}
              </p>

              {/* STEP 1 */}
              {step.type === "profile" && (
                <div className="flex flex-col gap-3 rounded-xl bg-white p-3 text-black sm:flex-row sm:items-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-10 h-10 rounded-md"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Milena</p>
                    <p className="text-xs text-gray-600">
                      Dai rilievi nei cantieri alla mappatura agricola — tutti i servizi commerciali con droni in un’unica piattaforma.
                    </p>
                  </div>
                  <button className="rounded-md bg-purple-500 px-2 py-2 text-xs text-white sm:py-1">
                    Vedi i Lavori
                  </button>
                </div>
              )}

              {/* STEP 2 */}
              {step.type === "job" && (
                <div className="bg-white text-black rounded-xl p-3 text-sm">
                  <p className="font-semibold">Real Estate Aerial Shoot – Rome</p>
                  <p className="text-xs text-gray-600 mt-1">
                    Cerco un pilota di droni certificato per le riprese di un immobile di fascia alta.
                  </p>
                </div>
              )}

              {step.type === "earnings" && (
  <div className="relative mt-8 w-full sm:w-[90%]">
    
    {/* CARD DIETRO 2 */}
    <div className="absolute top-6 left-6 w-full bg-white text-black rounded-xl p-4 shadow-md opacity-70 z-10" />

    {/* CARD DIETRO 1 */}
    <div className="absolute top-3 left-3 w-full bg-white text-black rounded-xl p-4 shadow-lg opacity-70 z-20" />

    {/* CARD PRINCIPALE */}
    <div className="relative bg-white text-black rounded-xl p-5 shadow-2xl z-30">
      <p className="text-xl font-bold">+347€</p>
      <p className="text-sm text-gray-700 mt-2">
        Progetto completato con successo #438472874
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
