import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Cookie Policy | DroneGuard",
  description:
    "Informativa sui cookie tecnici, sulla memoria locale e sui servizi esterni utilizzati da DroneGuard.",
}

const CONTROLLER = {
  name: "Silvio Gavioli",
  address:
    "Via aurelia, Roma, Italia",
  email: "assistenza@droneguard.it",
}

const ADDRESS_IS_INCOMPLETE = CONTROLLER.address.includes("[")

function Section({ number, title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl sm:p-8">
      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
        {children}
      </div>
    </section>
  )
}

function ToolRow({ name, type, provider, purpose, duration }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
      <div className="p-4 font-semibold text-white break-words">{name}</div>
      <div className="p-4">{type}</div>
      <div className="p-4">{provider}</div>
      <div className="p-4">{purpose}</div>
      <div className="p-4">{duration}</div>
    </div>
  )
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
            Informativa cookie e tecnologie simili
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Cookie Policy
          </h1>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            Ultimo aggiornamento: 9 agosto 2026
          </p>

          <p className="mt-4 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            Questa Cookie Policy descrive i cookie tecnici, la memoria locale del
            browser e i collegamenti a servizi esterni presenti nella versione di
            DroneGuard esaminata alla data di aggiornamento. Integra la{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        {ADDRESS_IS_INCOMPLETE && (
          <div className="mb-8 rounded-3xl border border-red-400/40 bg-red-400/10 p-5 text-red-100 sm:p-6">
            <p className="font-bold">Dato da completare prima della pubblicazione</p>
            <p className="mt-2 leading-7">
              Inserisci civico, CAP, Comune e Provincia nell’indirizzo del titolare.
            </p>
          </div>
        )}

        <div className="space-y-10">
          <Section number="1" title="Titolare e contatti">
            <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
              <p>
                <strong className="text-white">Titolare:</strong> {CONTROLLER.name}
              </p>
              <p>
                <strong className="text-white">Qualifica:</strong> persona fisica
              </p>
              <p>
                <strong className="text-white">Domicilio:</strong>{" "}
                {CONTROLLER.address}
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href={`mailto:${CONTROLLER.email}`}
                  className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
                >
                  {CONTROLLER.email}
                </a>
              </p>
            </div>
          </Section>

          <Section number="2" title="Cosa sono cookie e tecnologie simili">
            <p>
              I cookie sono piccoli file che un sito può salvare nel browser per
              riconoscere una sessione, mantenere l’accesso o ricordare impostazioni.
              Il local storage è una memoria del browser simile, ma i suoi valori non
              vengono inviati automaticamente al server a ogni richiesta.
            </p>

            <p>
              Gli strumenti strettamente necessari al servizio possono essere usati
              senza consenso preventivo. Gli strumenti analytics non assimilabili ai
              tecnici, pubblicitari o di profilazione richiedono invece il consenso
              quando previsto dalla normativa.
            </p>
          </Section>

          <Section number="3" title="Configurazione attuale di DroneGuard">
            <div className="rounded-2xl border border-green-400/30 bg-green-400/10 p-5 text-green-100">
              <p className="font-bold text-green-200">
                Alla data di aggiornamento risultano attivi soltanto strumenti
                tecnici o funzionali.
              </p>
              <p className="mt-2">
                Nella versione applicativa analizzata non risultano installati Meta
                Pixel, Google Analytics, Google Ads, Google Tag Manager, Microsoft
                Clarity, Vercel Analytics, Hotjar, TikTok Pixel, LinkedIn Insight Tag
                o altri sistemi pubblicitari e di profilazione.
              </p>
            </div>

            <p>
              In questa configurazione DroneGuard non utilizza il consenso cookie per
              attivare analytics o marketing. Prima di introdurre uno di tali
              strumenti, questa informativa e il meccanismo di consenso dovranno
              essere aggiornati e lo script dovrà rimanere bloccato fino alla scelta
              dell’utente.
            </p>
          </Section>

          <Section number="4" title="Cookie e memoria locale utilizzati">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm lg:grid-cols-5 lg:divide-x lg:divide-y-0">
                <div className="bg-[#080C22] p-4 font-semibold text-white">Nome</div>
                <div className="bg-[#080C22] p-4 font-semibold text-white">Tipo</div>
                <div className="bg-[#080C22] p-4 font-semibold text-white">Fornitore</div>
                <div className="bg-[#080C22] p-4 font-semibold text-white">Finalità</div>
                <div className="bg-[#080C22] p-4 font-semibold text-white">Durata</div>
              </div>

              <ToolRow
                name="Cookie con prefisso sb-…"
                type="Cookie tecnico di prima parte"
                provider="Supabase / DroneGuard"
                purpose="Autenticazione, sessione, rinnovo dei token, conferma dell’accesso e sicurezza"
                duration="Sessione o fino alla scadenza tecnica configurata; può essere rinnovato mentre l’account è utilizzato"
              />

              <ToolRow
                name="droneguard-cookie-notice"
                type="Local storage tecnico"
                provider="DroneGuard"
                purpose="Ricorda che l’utente ha visualizzato l’informativa sintetica sui soli strumenti tecnici"
                duration="Massimo 6 mesi, salvo cancellazione anticipata dal browser o cambio di versione"
              />

              <ToolRow
                name="pilot_job_earnings"
                type="Local storage funzionale"
                provider="DroneGuard"
                purpose="Salva sul dispositivo del pilota gli importi che egli annota nello storico dei lavori"
                duration="Fino alla modifica o cancellazione da parte dell’utente o del browser"
              />

              <ToolRow
                name="droneguard-cookie-consent (versione precedente)"
                type="Local storage legacy"
                provider="DroneGuard"
                purpose="Vecchia registrazione delle preferenze analytics e marketing; non attiva strumenti nella versione aggiornata"
                duration="Rimossa dal nuovo componente o cancellabile dalle impostazioni del browser"
              />
            </div>

            <p>
              I nomi dei cookie Supabase possono variare in base al riferimento del
              progetto e possono essere suddivisi in più parti quando il valore è
              lungo. Sono necessari per mantenere la sessione dell’utente e non sono
              usati per pubblicità.
            </p>
          </Section>

          <Section number="5" title="Servizi esterni e cookie dei rispettivi domini">
            <p>
              Alcune funzioni collegano il browser o il server a servizi esterni.
              Questi servizi possono ricevere indirizzo IP, user agent, data e ora e
              altri dati tecnici della richiesta. Eventuali cookie impostati sui loro
              domini sono disciplinati dalle rispettive informative.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">Stripe</h3>
                <p>
                  Quando l’utente viene reindirizzato al checkout, Stripe può usare
                  cookie propri necessari a pagamento, sicurezza e prevenzione delle
                  frodi. Tali cookie sono gestiti sul dominio di Stripe.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  OpenStreetMap / Nominatim
                </h3>
                <p>
                  La ricerca di una località può trasmettere al servizio il testo
                  digitato e i dati tecnici della connessione. Non viene usato da
                  DroneGuard per finalità pubblicitarie.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Unsplash e RandomUser
                </h3>
                <p>
                  Alcune immagini decorative o predefinite sono richieste a server
                  esterni, che possono ricevere dati tecnici della connessione.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Supabase, Vercel, Resend e Aruba
                </h3>
                <p>
                  Supportano autenticazione, hosting, email e infrastruttura. I
                  trattamenti sono descritti più diffusamente nella Privacy Policy.
                </p>
              </div>
            </div>
          </Section>

          <Section number="6" title="Banner e informativa sintetica">
            <p>
              Poiché nella configurazione attuale non risultano strumenti non
              necessari, non viene richiesto di “accettare” o “rifiutare” cookie
              pubblicitari. Il componente aggiornato mostra una semplice informativa
              sui soli strumenti tecnici e memorizza per un massimo di sei mesi che
              l’avviso è stato visualizzato.
            </p>

            <p>
              Il collegamento “Informazioni cookie” nel footer consente di riaprire
              l’avviso e consultare questa pagina. L’eventuale mancata conferma
              dell’avviso non impedisce l’utilizzo del sito, perché non si tratta di
              una richiesta di consenso.
            </p>
          </Section>

          <Section number="7" title="Come cancellare cookie e memoria locale">
            <p>
              L’utente può cancellare cookie e dati locali dalle impostazioni del
              browser. La rimozione dei cookie di autenticazione può disconnettere
              l’account; la cancellazione di <code>pilot_job_earnings</code> elimina
              dal dispositivo le annotazioni economiche inserite dal pilota.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.05] p-5">
                <h3 className="mb-2 font-semibold text-white">Google Chrome</h3>
                <p className="text-sm leading-7 text-gray-300">
                  Impostazioni → Privacy e sicurezza → Dati dei siti e autorizzazioni.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.05] p-5">
                <h3 className="mb-2 font-semibold text-white">Microsoft Edge</h3>
                <p className="text-sm leading-7 text-gray-300">
                  Impostazioni → Cookie e autorizzazioni sito → Gestisci ed elimina.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.05] p-5">
                <h3 className="mb-2 font-semibold text-white">Mozilla Firefox</h3>
                <p className="text-sm leading-7 text-gray-300">
                  Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.05] p-5">
                <h3 className="mb-2 font-semibold text-white">Safari</h3>
                <p className="text-sm leading-7 text-gray-300">
                  Impostazioni o Preferenze → Privacy → Gestisci dati siti web.
                </p>
              </div>
            </div>
          </Section>

          <Section number="8" title="Trasferimenti internazionali">
            <p>
              I fornitori tecnici possono utilizzare infrastrutture o subfornitori
              esterni allo Spazio Economico Europeo. Le garanzie e le informazioni
              sui trasferimenti sono descritte nella Privacy Policy e nelle
              informative dei singoli fornitori.
            </p>
          </Section>

          <Section number="9" title="Modifiche alla configurazione">
            <p>
              Ogni introduzione di analytics, pixel pubblicitari, remarketing,
              mappe incorporate, video esterni o altri strumenti non necessari deve
              essere preceduta da una verifica tecnica e giuridica. Quando richiesto,
              lo strumento dovrà essere bloccato fino al consenso e questa Cookie
              Policy dovrà indicare nome, fornitore, finalità e durata.
            </p>
          </Section>

          <Section number="10" title="Contatti">
            <p>
              Per informazioni su cookie, memoria locale e trattamento dei dati
              personali puoi scrivere a:
            </p>

            <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
              <a
                href={`mailto:${CONTROLLER.email}`}
                className="break-words text-lg font-semibold text-green-300 underline underline-offset-4 sm:text-xl"
              >
                {CONTROLLER.email}
              </a>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
