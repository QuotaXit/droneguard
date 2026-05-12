import Link from "next/link"

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
    <section className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl font-bold font-[var(--font-krona)] sm:text-4xl md:text-5xl">
          Come funziona per i piloti
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-300 mt-4 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Iscriviti, trova lavori nella bacheca e candidati. Se vieni scelto, ricevi i dettagli precisi del lavoro direttamente nella tua dashboard.
        </p>

        {/* GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {steps.map((step, i) => (

            <div
              key={i}
              className="relative min-h-[580px] rounded-3xl border border-white/20 bg-[#10173E]/80 p-7 text-left backdrop-blur-md sm:p-9"
            >

              {/* NUMBER */}
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#7B5CFF] to-[#A855F7] text-xl font-bold shadow-lg">
                {step.number}
              </div>

              {/* TITLE */}
              <h3 className="mb-5 text-2xl font-bold leading-tight">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-base leading-7 text-gray-200">
                {step.desc}
              </p>

              {/* STEP 1 */}
              {step.type === "profile" && (

                <div className="absolute bottom-9 left-7 right-7 rounded-2xl bg-white p-5 text-black shadow-2xl sm:left-9 sm:right-9">

                  <div className="flex items-center gap-5">

                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-purple-100 overflow-hidden">

                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
                        alt="Drone"
                        className="h-10 w-10 object-contain"
                      />

                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="text-xl font-bold">
                        Profilo pilota
                      </p>

                      <p className="mt-2 text-base leading-6 text-gray-700">
                        Drone, città, servizi e certificazioni in evidenza.
                      </p>

                    </div>

                  </div>

                 <Link href="/register">
  <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#7B5CFF] to-[#A855F7] px-4 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-90">
    Completa profilo
  </button>
</Link>

                </div>

              )}

              {/* STEP 2 */}
              {step.type === "job" && (

                <div className="absolute bottom-9 left-7 right-7 rounded-2xl bg-white p-5 text-black shadow-2xl sm:left-9 sm:right-9">

                  <div className="flex gap-5">

                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400"
                      alt="Riprese aeree immobile"
                      className="h-28 w-28 shrink-0 rounded-xl object-cover"
                    />

                    <div className="min-w-0 flex-1">

                      <p className="text-xl font-bold leading-tight">
                        Riprese aeree immobile — Roma
                      </p>

                      <p className="mt-3 text-base leading-6 text-gray-700">
                        Cliente cerca pilota drone per riprese video e foto.
                      </p>

                      <p className="mt-3 text-sm text-gray-500">
                        📍 Roma, Lazio
                      </p>

                    </div>

                  </div>

                </div>

              )}

              {/* STEP 3 */}
              {step.type === "earnings" && (

                <div className="absolute bottom-9 left-7 right-7 sm:left-9 sm:right-9">

                  <div className="relative">

                    {/* CARD BACK 1 */}
                    <div className="absolute left-8 top-8 h-full w-full rounded-2xl bg-white/50 shadow-xl" />

                    {/* CARD BACK 2 */}
                    <div className="absolute left-4 top-4 h-full w-full rounded-2xl bg-white/70 shadow-xl" />

                    {/* MAIN CARD */}
                    <div className="relative z-10 rounded-2xl bg-white p-7 text-black shadow-2xl">

                      <div className="flex items-center gap-6">

                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
                          ✓
                        </div>

                        <div>

                          <p className="text-2xl font-bold">
                            Lavoro accettato
                          </p>

                          <p className="mt-3 text-base leading-6 text-gray-700">
                            Contatti e dettagli disponibili in “Dati lavoro”.
                          </p>

                        </div>

                      </div>

                    </div>

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