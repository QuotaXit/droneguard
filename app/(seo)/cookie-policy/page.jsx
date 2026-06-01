import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Cookie Policy | DroneGuard",
  description:
    "Cookie Policy di DroneGuard. Informazioni sull'uso di cookie tecnici, preferenze, statistiche, marketing e strumenti di tracciamento presenti sul sito.",
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Informativa Cookie
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Cookie Policy
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            La presente Cookie Policy descrive le modalità con cui DroneGuard
            utilizza cookie, tecnologie simili, strumenti di memorizzazione locale
            e altri sistemi di tracciamento all’interno del sito web. Questa
            informativa integra la Privacy Policy e serve a spiegare in modo
            chiaro quali dati possono essere raccolti durante la navigazione, per
            quali finalità vengono utilizzati e come l’utente può gestire le
            proprie preferenze.
          </p>
        </div>

        <div className="space-y-8">
          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">1. Titolare del trattamento</h2>
            <p className="leading-8 text-gray-300">
              Il titolare del trattamento dei dati personali raccolti tramite il
              sito è il gestore di DroneGuard. Per richieste relative alla privacy,
              alla protezione dei dati personali o all’utilizzo dei cookie, è
              possibile contattare il titolare tramite i recapiti indicati nella
              pagina Privacy Policy o nella sezione Contatti del sito.
            </p>
            <p className="mt-4 leading-8 text-gray-300">
              Se nella tua Privacy Policy hai già indicato nome, cognome, email o
              altri recapiti del titolare, gli stessi dati devono essere coerenti
              anche con questa Cookie Policy.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">2. Cosa sono i cookie</h2>
            <p className="leading-8 text-gray-300">
              I cookie sono piccoli file di testo che i siti visitati inviano al
              dispositivo dell’utente, dove vengono memorizzati per essere poi
              ritrasmessi agli stessi siti alla visita successiva. I cookie possono
              essere utilizzati per permettere il corretto funzionamento del sito,
              ricordare preferenze, migliorare l’esperienza di navigazione,
              raccogliere statistiche aggregate o, solo previo consenso, svolgere
              attività di marketing e profilazione.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">3. Tipologie di cookie utilizzate</h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Cookie tecnici e necessari
                </h3>
                <p className="leading-8">
                  Sono indispensabili per il corretto funzionamento del sito e per
                  consentire all’utente di navigare tra le pagine, utilizzare le
                  funzionalità richieste, mantenere la sicurezza del servizio e
                  ricordare eventuali preferenze tecniche. Questi cookie non
                  richiedono il consenso preventivo dell’utente, ma devono essere
                  indicati nell’informativa.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Cookie di preferenza
                </h3>
                <p className="leading-8">
                  Possono essere utilizzati per ricordare alcune scelte effettuate
                  dall’utente, come la preferenza relativa all’accettazione o al
                  rifiuto dei cookie, la lingua, eventuali impostazioni di
                  visualizzazione o altre preferenze di navigazione.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Cookie statistici o analytics
                </h3>
                <p className="leading-8">
                  Possono essere utilizzati per raccogliere informazioni aggregate
                  sull’utilizzo del sito, sulle pagine visitate, sul numero di
                  utenti, sul tempo di permanenza e sulle modalità di navigazione.
                  Se configurati in modo da ridurre il potere identificativo e usati
                  solo per statistiche aggregate, possono essere assimilati ai cookie
                  tecnici. In caso contrario, vengono attivati solo previo consenso
                  dell’utente.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Cookie di marketing e profilazione
                </h3>
                <p className="leading-8">
                  Possono essere utilizzati per mostrare annunci personalizzati,
                  misurare campagne pubblicitarie, creare profili di interesse o
                  collegare la navigazione dell’utente a piattaforme di terze parti.
                  Questi cookie vengono installati solo dopo il consenso espresso
                  dall’utente tramite il banner o il pannello di gestione delle
                  preferenze.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">4. Cookie di prima parte e di terze parti</h2>
            <p className="leading-8 text-gray-300">
              I cookie di prima parte sono installati direttamente da DroneGuard.
              I cookie di terze parti, invece, sono installati da soggetti diversi
              dal titolare del sito, ad esempio servizi esterni utilizzati per
              statistiche, mappe, video incorporati, sicurezza, pubblicità o
              strumenti di marketing.
            </p>
            <p className="mt-4 leading-8 text-gray-300">
              Le terze parti sono autonome titolari del trattamento per le attività
              svolte tramite i propri strumenti. Per questo motivo, l’utente è
              invitato a consultare anche le rispettive informative privacy e cookie
              policy dei servizi eventualmente presenti sul sito.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">5. Strumenti che possono essere presenti sul sito</h2>
            <p className="mb-6 leading-8 text-gray-300">
              In base alla configurazione tecnica del sito, DroneGuard può utilizzare
              o integrare i seguenti strumenti. L’attivazione effettiva dipende dai
              servizi installati e dalle preferenze espresse dall’utente.
            </p>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-white/10 text-white">
                  <tr>
                    <th className="p-4">Categoria</th>
                    <th className="p-4">Finalità</th>
                    <th className="p-4">Consenso</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-gray-300">
                  <tr>
                    <td className="p-4 font-semibold text-white">Tecnici</td>
                    <td className="p-4">Funzionamento del sito, sicurezza, preferenze cookie.</td>
                    <td className="p-4">Non richiesto</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Analytics</td>
                    <td className="p-4">Statistiche aggregate su visite e utilizzo del sito.</td>
                    <td className="p-4">Richiesto se non assimilabili ai tecnici</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Marketing</td>
                    <td className="p-4">Annunci, campagne pubblicitarie e misurazione conversioni.</td>
                    <td className="p-4">Richiesto</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-white">Terze parti</td>
                    <td className="p-4">Servizi esterni come mappe, video, statistiche o pubblicità.</td>
                    <td className="p-4">Dipende dalla finalità</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">6. Base giuridica del trattamento</h2>
            <p className="leading-8 text-gray-300">
              Per i cookie tecnici e necessari, la base giuridica è il legittimo
              interesse del titolare a garantire il funzionamento corretto e sicuro
              del sito e l’erogazione dei servizi richiesti dall’utente. Per i cookie
              analytics non assimilabili ai tecnici, per i cookie di marketing, per
              i cookie di profilazione e per altri strumenti di tracciamento non
              necessari, la base giuridica è il consenso libero, specifico,
              informato e revocabile dell’utente.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">7. Gestione del consenso</h2>
            <p className="leading-8 text-gray-300">
              Al primo accesso al sito può essere mostrato un banner cookie che
              consente all’utente di accettare tutti i cookie, rifiutare quelli non
              necessari o personalizzare le proprie preferenze. L’utente può
              modificare o revocare il consenso in qualsiasi momento attraverso il
              pannello di gestione cookie, se presente, oppure eliminando i cookie
              direttamente dalle impostazioni del browser.
            </p>
            <p className="mt-4 leading-8 text-gray-300">
              Il mancato consenso ai cookie non necessari non impedisce la
              navigazione del sito, ma alcune funzionalità collegate a servizi di
              terze parti potrebbero non essere disponibili o funzionare in modo
              limitato.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">8. Come disabilitare i cookie dal browser</h2>
            <p className="leading-8 text-gray-300">
              L’utente può gestire, bloccare o cancellare i cookie anche attraverso
              le impostazioni del proprio browser. Le modalità variano in base al
              browser utilizzato. Di norma è possibile accedere alla sezione
              privacy, sicurezza o impostazioni del browser e scegliere se eliminare
              i cookie esistenti, bloccare quelli futuri o ricevere un avviso prima
              della loro installazione.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/[0.05] p-5">
                <h3 className="mb-2 font-semibold text-white">Google Chrome</h3>
                <p className="text-sm leading-7 text-gray-300">
                  Impostazioni → Privacy e sicurezza → Cookie di terze parti.
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
                  Preferenze → Privacy → Gestione dati siti web.
                </p>
              </div>

              <div className="rounded-2xl bg-white/[0.05] p-5">
                <h3 className="mb-2 font-semibold text-white">Microsoft Edge</h3>
                <p className="text-sm leading-7 text-gray-300">
                  Impostazioni → Cookie e autorizzazioni sito → Gestisci ed elimina cookie.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">9. Durata dei cookie</h2>
            <p className="leading-8 text-gray-300">
              I cookie possono avere durata di sessione, cioè vengono cancellati
              alla chiusura del browser, oppure durata persistente, cioè restano
              memorizzati sul dispositivo per un periodo determinato. La durata
              dipende dalla finalità del cookie, dalla configurazione tecnica del
              sito e dalle impostazioni delle eventuali terze parti.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">10. Trasferimento dei dati fuori dall’Unione Europea</h2>
            <p className="leading-8 text-gray-300">
              Alcuni servizi di terze parti eventualmente integrati nel sito possono
              comportare il trasferimento di dati verso Paesi situati fuori dallo
              Spazio Economico Europeo. In tali casi, il trasferimento avviene nel
              rispetto delle garanzie previste dalla normativa applicabile, come
              decisioni di adeguatezza, clausole contrattuali standard o ulteriori
              misure di protezione adottate dai fornitori.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">11. Diritti dell’utente</h2>
            <p className="leading-8 text-gray-300">
              L’utente può esercitare i diritti previsti dalla normativa in materia
              di protezione dei dati personali, tra cui il diritto di accesso,
              rettifica, cancellazione, limitazione del trattamento, opposizione e
              portabilità dei dati, nei casi previsti dalla legge. L’utente può
              inoltre revocare il consenso precedentemente prestato per i cookie non
              necessari, senza pregiudicare la liceità del trattamento basata sul
              consenso prima della revoca.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold">12. Aggiornamenti della Cookie Policy</h2>
            <p className="leading-8 text-gray-300">
              DroneGuard può modificare la presente Cookie Policy in qualsiasi
              momento, anche a seguito di aggiornamenti normativi, modifiche tecniche
              del sito, introduzione di nuovi servizi o variazione degli strumenti di
              tracciamento utilizzati. Gli utenti sono invitati a consultare
              periodicamente questa pagina per verificare eventuali aggiornamenti.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Ultimo aggiornamento: 1 giugno 2026
            </p>
          </section>

          <div className="flex flex-col gap-4 rounded-3xl border border-green-400/30 bg-green-400/10 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-bold">Privacy e contatti</h2>
              <p className="max-w-2xl leading-8 text-gray-300">
                Per maggiori informazioni sul trattamento dei dati personali,
                consulta anche la Privacy Policy di DroneGuard.
              </p>
            </div>

            <Link
              href="/privacy-policy"
              className="rounded-full bg-green-400 px-6 py-3 text-center font-bold text-[#0B0F2A] transition hover:bg-green-300"
            >
              Vai alla Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}