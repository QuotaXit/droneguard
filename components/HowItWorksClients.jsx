import Link from "next/link"

export default function HowItWorksClients() {
  const steps = [
    {
      number: "1",
      title: "Pubblica il tuo lavoro",
      desc: "Descrivi il servizio che ti serve: riprese aeree, fotografie, eventi, matrimoni, edilizia, ispezioni, agricoltura o altri lavori con drone. La pubblicazione richiede solo pochi minuti.",
      type: "publish",
    },
    {
      number: "2",
      title: "Ricevi candidature",
      desc: "I piloti drone interessati possono candidarsi al tuo annuncio. Potrai valutare i professionisti disponibili, la città, i servizi offerti e le informazioni del loro profilo.",
      type: "applications",
    },
    {
      number: "3",
      title: "Scegli il pilota",
      desc: "Quando trovi il professionista giusto, accetti la candidatura e invii i dettagli precisi del lavoro. Il pilota riceverà le informazioni necessarie per organizzare e svolgere il servizio.",
      type: "choose",
    },
  ]

  return (
    <section className="relative overflow-hidden px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0D1F] via-[#0F1B4D] to-[#0B0F2A]" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h2 className="text-3xl font-bold font-[var(--font-krona)] sm:text-4xl md:text-5xl">
          Come funziona ( Clienti )
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Pubblica gratuitamente la tua richiesta e ricevi candidature da piloti drone professionisti in tutta Italia.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
                   className="relative min-h-[650px] rounded-3xl border border-white/20 bg-[#10173E]/80 p-7 text-left backdrop-blur-md sm:p-9"            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#22C55E] to-[#14B8A6] text-xl font-bold shadow-lg">
                {step.number}
              </div>

              <h3 className="mb-5 text-2xl font-bold leading-tight">
                {step.title}
              </h3>

              <p className="text-base leading-7 text-gray-200">
                {step.desc}
              </p>

              {step.type === "publish" && (
                <div className="absolute top-[300px] left-7 right-7 rounded-2xl bg-white p-5 text-black shadow-2xl sm:left-9 sm:right-9">
                  <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                    Nuova richiesta
                  </p>

                  <p className="mt-3 text-xl font-bold leading-tight">
                    Riprese drone per evento — Roma
                  </p>

                  <p className="mt-3 text-base leading-6 text-gray-700">
                    Cerco pilota drone per video e foto durante un evento privato.
                  </p>

                  <div className="mt-4 rounded-xl bg-gray-100 p-3 text-sm text-gray-700">
                    📍 Roma, Lazio <br />
                    🎥 Riprese video e foto aeree
                  </div>

                  <Link href="/register">
                    <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-[#22C55E] to-[#14B8A6] px-4 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-90">
                      Pubblica il tuo lavoro
                    </button>
                  </Link>
                </div>
              )}

              {step.type === "applications" && (
                <div className="absolute top-[330px] left-7 right-7 rounded-2xl bg-white p-5 text-black shadow-2xl sm:left-9 sm:right-9">
                  <p className="text-sm font-bold uppercase tracking-wide text-green-600">
                    Candidature ricevute
                  </p>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-xl border border-gray-200 p-4">
                      <p className="font-bold">Pilota drone certificato</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Disponibile per riprese aeree, eventi e immobili.
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-4">
                      <p className="font-bold">Operatore drone professionale</p>
                      <p className="mt-1 text-sm text-gray-600">
                        Attrezzatura professionale e portfolio disponibile.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {step.type === "choose" && (
                <div className="absolute top-[340px] left-7 right-7 sm:left-9 sm:right-9">
                  <div className="relative">
                    <div className="absolute left-8 top-8 h-full w-full rounded-2xl bg-white/50 shadow-xl" />
                    <div className="absolute left-4 top-4 h-full w-full rounded-2xl bg-white/70 shadow-xl" />

                    <div className="relative z-10 rounded-2xl bg-white p-7 text-black shadow-2xl">
                      <div className="flex items-center gap-6">
                        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
                          ✓
                        </div>

                        <div>
                          <p className="text-2xl font-bold">
                            Pilota scelto
                          </p>

                          <p className="mt-3 text-base leading-6 text-gray-700">
                            Contatti e dettagli disponibili nella tua dashboard.
                          </p>
                        </div>
                      </div>

                      <Link href="/register">
                        <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-[#22C55E] to-[#14B8A6] px-4 py-3 text-base font-semibold text-white shadow-lg transition hover:opacity-90">
                          Inizia ora
                        </button>
                      </Link>
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