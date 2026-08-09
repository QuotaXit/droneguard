import Link from "next/link"

export default function HowItWorks() {
    const steps = [
    {
      number: "1",
      title: "Crea il tuo profilo pilota",
      desc: "Registrati gratuitamente e inserisci città, esperienza, drone, servizi offerti e certificazioni. Mantieni il profilo aggiornato per permettere ai clienti di conoscere meglio le tue competenze.",
      type: "profile"
    },
    {
      number: "2",
      title: "Consulta la Bacheca lavori",
      desc: "Visualizza le richieste pubblicate dai clienti e candidati ai lavori compatibili con la tua zona, le tue attrezzature e i servizi che offri.",
      type: "job"
    },
    {
      number: "3",
      title: "Se vieni scelto, organizza il lavoro",
      desc: "Quando un cliente accetta la tua candidatura, trovi nella dashboard i dati necessari per organizzare il servizio. Il pagamento del lavoro viene gestito direttamente tra cliente e pilota, al di fuori di DroneGuard.",
      type: "earnings"
    }
  ]

  return (
  <section className="relative overflow-hidden border-b border-white/5 bg-[#0C1230]">
    {/* SFONDO */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.04] blur-[130px]" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-500/[0.035] blur-[100px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex rounded-full border border-purple-400/20 bg-purple-400/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">
          Per i piloti
        </div>

        <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
          Come funziona per i piloti
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Crea il tuo profilo, consulta le richieste disponibili
          e candidati ai lavori più adatti alle tue competenze.
        </p>
      </div>

      {/* STEPS */}
      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
        {steps.map((step, i) => (
          <article
            key={i}
            className="group flex flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111735] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-400/20 hover:bg-[#141D40] sm:p-6"
          >
            {/* NUMERO */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500 text-lg font-black text-white shadow-lg shadow-purple-500/10">
                {step.number}
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-600">
                Step {step.number}
              </span>
            </div>

            {/* TESTO */}
            <div className="mt-5">
              <h3 className="text-xl font-bold leading-snug text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {step.desc}
              </p>
            </div>

            {/* STEP 1 */}
            {step.type === "profile" && (
  <div className="mt-6 flex-1 rounded-2xl border border-purple-400/15 bg-[#0B1028] p-5 shadow-xl">
    <div className="flex items-center gap-4">
      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 bg-purple-400/10">
        <img
          src="/images/droneguard-cta.png"
          alt="DroneGuard"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="min-w-0">
        <p className="font-bold text-white">
          Profilo pilota
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-400">
          Città, esperienza, drone, servizi
          e certificazioni.
        </p>
      </div>
    </div>

    <div className="mt-5 grid grid-cols-2 gap-2">
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-gray-600">
          Profilo
        </p>

        <p className="mt-1 text-xs font-semibold text-gray-200">
          Professionale
        </p>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-gray-600">
          Competenze
        </p>

        <p className="mt-1 text-xs font-semibold text-gray-200">
          In evidenza
        </p>
      </div>
    </div>

    <Link
      href="/register?type=pilot"
      className="mt-5 flex w-full items-center justify-center rounded-xl bg-purple-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-purple-400"
    >
      Crea profilo pilota
    </Link>
  </div>
)}

            {/* STEP 2 */}
            {step.type === "job" && (
  <div className="mt-6 flex-1 rounded-2xl border border-purple-400/15 bg-[#0B1028] p-5 shadow-xl">
    <div className="flex items-center justify-between gap-3">
      <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-purple-300">
        Riprese aeree
      </span>

      <span className="h-2 w-2 rounded-full bg-green-400" />
    </div>

    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-600">
      Richiesta disponibile
    </p>

    <h4 className="mt-2 text-lg font-bold leading-snug text-white">
      Riprese aeree immobile — Roma
    </h4>

    <p className="mt-3 text-sm leading-6 text-gray-400">
      Cliente cerca pilota drone per riprese
      video e foto.
    </p>

    <div className="mt-5 space-y-2">
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-gray-600">
          Posizione
        </p>

        <p className="mt-1 text-xs font-semibold text-gray-300">
          📍 Roma, Lazio
        </p>
      </div>

      <div className="rounded-xl border border-white/[0.06] bg-white/[0.035] px-3 py-3">
        <p className="text-[10px] uppercase tracking-wider text-gray-600">
          Tipologia
        </p>

        <p className="mt-1 text-xs font-semibold text-gray-300">
          Riprese video e foto aeree
        </p>
      </div>
    </div>

    <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-4">
      <span className="text-xs text-gray-600">
        Nuovo lavoro
      </span>

      <span className="text-xs font-semibold text-purple-300">
        Visualizza richiesta →
      </span>
    </div>
  </div>
)}

            {/* STEP 3 */}
            {step.type === "earnings" && (
  <div className="mt-6 flex-1 rounded-2xl border border-green-400/15 bg-[#0B1028] p-5 shadow-xl">
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-green-400/20 bg-green-400/10 text-2xl font-bold text-green-400">
      ✓
    </div>

    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-green-400">
      Candidatura
    </p>

    <h4 className="mt-2 text-lg font-bold text-white">
      Candidatura accettata
    </h4>

    <p className="mt-3 text-sm leading-6 text-gray-400">
      I dati necessari per organizzare il servizio
      sono disponibili nella sezione “Dati lavoro”.
    </p>

    <div className="mt-5 rounded-xl border border-green-400/15 bg-green-400/[0.06] p-4">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-green-400">
        Stato
      </p>

      <div className="mt-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-green-400" />

        <p className="text-sm font-bold text-green-300">
          Pilota selezionato
        </p>
      </div>
    </div>
  </div>
)}
          </article>
        ))}
      </div>
    </div>
  </section>
)
}