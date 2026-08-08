import Link from "next/link"

export default function HowItWorksClients() {
    const steps = [
    {
      number: "1",
      title: "Pubblica la tua richiesta",
      desc: "Descrivi il servizio con drone di cui hai bisogno, indica luogo, data e informazioni utili. La richiesta sarà visibile ai piloti presenti sulla piattaforma.",
      type: "publish",
    },
    {
      number: "2",
      title: "Ricevi le candidature",
      desc: "I piloti interessati possono candidarsi alla tua richiesta. Puoi consultare le informazioni disponibili sui loro profili e scegliere quello più adatto alle tue esigenze.",
      type: "applications",
    },
    {
      number: "3",
      title: "Scegli il pilota",
      desc: "Accetta la candidatura che preferisci e condividi i dati necessari per organizzare il servizio. Il pagamento del lavoro viene gestito direttamente tra cliente e pilota, al di fuori di DroneGuard.",
      type: "choose",
    },
  ]

  return (
  <section className="relative overflow-hidden border-b border-white/5 bg-[#0C1230]">
    {/* SFONDO */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/[0.035] blur-[130px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full border border-green-400/20 bg-green-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-300">
          Per i clienti
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Come funziona per i clienti
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Pubblica ciò di cui hai bisogno, ricevi le candidature
          dei piloti e scegli liberamente con chi organizzare
          il servizio.
        </p>
      </div>

      {/* STEPS */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {steps.map((step, i) => (
          <article
            key={i}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111735] p-5 transition duration-300 hover:-translate-y-1 hover:border-green-400/20 hover:bg-[#141D40] sm:p-6"
          >
            {/* NUMERO */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500 text-lg font-black text-black shadow-lg shadow-green-500/10">
                {step.number}
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                Step {step.number}
              </span>
            </div>

            {/* TESTO */}
            <div className="mt-5">
              <h3 className="text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {step.desc}
              </p>
            </div>

            {/* ESEMPIO 1 */}
            {step.type === "publish" && (
              <div className="mt-6 flex-1 rounded-2xl border border-white/10 bg-white p-4 text-black shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-green-600">
                    Nuova richiesta
                  </p>

                  <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-semibold text-green-700">
                    Nuovo
                  </span>
                </div>

                <h4 className="mt-3 text-base font-bold leading-snug">
                  Riprese drone per evento — Roma
                </h4>

                <p className="mt-2 text-xs leading-5 text-gray-600">
                  Cerco pilota drone per video e foto durante
                  un evento privato.
                </p>

                <div className="mt-4 grid gap-2">
                  <div className="rounded-xl bg-gray-100 px-3 py-2 text-xs text-gray-700">
                    📍 Roma, Lazio
                  </div>

                  <div className="rounded-xl bg-gray-100 px-3 py-2 text-xs text-gray-700">
                    🎥 Riprese video e foto aeree
                  </div>
                </div>

                <Link
                  href="/register?type=cliente"
                  className="mt-4 flex w-full items-center justify-center rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400"
                >
                  Richiedi un volo
                </Link>
              </div>
            )}

            {/* ESEMPIO 2 */}
            {step.type === "applications" && (
              <div className="mt-6 flex-1 rounded-2xl border border-white/10 bg-white p-4 text-black shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-green-600">
                    Candidature ricevute
                  </p>

                  <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-600">
                    2 piloti
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-gray-200 p-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm">
                        👤
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          Pilota drone certificato
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-600">
                          Disponibile per riprese aeree,
                          eventi e immobili.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 p-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm">
                        👤
                      </div>

                      <div>
                        <p className="text-sm font-bold">
                          Operatore drone professionale
                        </p>

                        <p className="mt-1 text-xs leading-5 text-gray-600">
                          Attrezzatura professionale e
                          portfolio disponibile.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ESEMPIO 3 */}
            {step.type === "choose" && (
              <div className="relative mt-6 flex-1 pb-3 pr-3">
                <div className="absolute bottom-0 right-0 h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-2xl bg-white/20" />

                <div className="absolute bottom-1.5 right-1.5 h-[calc(100%-12px)] w-[calc(100%-12px)] rounded-2xl bg-white/40" />

                <div className="relative z-10 rounded-2xl border border-white/10 bg-white p-5 text-black shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600">
                    ✓
                  </div>

                  <h4 className="mt-4 text-lg font-bold">
                    Pilota scelto
                  </h4>

                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Contatti e dettagli disponibili nella tua
                    dashboard.
                  </p>

                  <Link
                    href="/register?type=cliente"
                    className="mt-5 flex w-full items-center justify-center rounded-xl bg-green-500 px-4 py-3 text-sm font-bold text-black transition hover:bg-green-400"
                  >
                    Crea account cliente
                  </Link>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>

      {/* CHIUSURA */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Tre semplici passaggi per trovare il pilota adatto
          al servizio richiesto.
        </p>
      </div>
    </div>
  </section>
)
}