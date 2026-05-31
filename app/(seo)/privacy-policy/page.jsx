"use client"

import Link from "next/link"
import Navbar from "@/components/Navbar"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F2A] via-[#0F1B4D] to-[#0A0D1F] text-white">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
            DroneGuard.it
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Privacy Policy e Termini di Utilizzo
          </h1>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            Ultimo aggiornamento: 31 maggio 2026
          </p>

          <p className="mt-4 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            Questa pagina descrive come DroneGuard.it raccoglie, utilizza,
            conserva e protegge i dati personali degli utenti che visitano il
            sito, si registrano alla piattaforma, pubblicano annunci, acquistano
            crediti o si candidano a lavori con drone.
          </p>
        </div>

        <div className="space-y-10">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              1. Titolare del trattamento
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                Il titolare del trattamento dei dati personali è:
              </p>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <p>
                  <strong className="text-white">Titolare:</strong>{" "}
                  [Silvio Gavioli]
                </p>
                <p>
                  <strong className="text-white">Sito web:</strong>{" "}
                  DroneGuard.it
                </p>
                <p>
                  <strong className="text-white">Indirizzo:</strong>{" "}
                  [Via Ferdinando Neri]
                </p>
                <p>
                  <strong className="text-white">
                    P.IVA / Codice Fiscale:
                  </strong>{" "}
                  [GVLSLV98C18H501B]
                </p>
                <p>
                  <strong className="text-white">Email privacy:</strong>{" "}
                  assistenza@droneguard.it
                </p>
              </div>

              <p>
                Per qualsiasi richiesta relativa al trattamento dei dati
                personali, alla cancellazione dell’account o all’esercizio dei
                diritti privacy, l’utente può scrivere all’indirizzo email
                indicato sopra o utilizzare la pagina{" "}
                <Link
                  href="/contattaci"
                  className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
                >
                  Contattaci
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              2. Informazioni sul servizio DroneGuard
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                DroneGuard è una piattaforma online che mette in contatto
                clienti interessati a servizi con drone e piloti drone
                professionisti o operatori del settore.
              </p>

              <p>
                Gli utenti possono pubblicare richieste di lavoro relative, a
                titolo esemplificativo, a riprese aeree, video, fotografia,
                ispezioni, rilievi, mappature, agricoltura, edilizia,
                immobili, eventi, termografia, sicurezza e altri servizi
                professionali con drone.
              </p>

              <p>
                I piloti possono consultare gli annunci disponibili e candidarsi
                proponendo la propria offerta economica, le proprie competenze
                e le informazioni professionali utili al cliente.
              </p>

              <p>
                DroneGuard non esegue direttamente i lavori pubblicati dagli
                utenti e non è parte del rapporto professionale o contrattuale
                che può nascere tra cliente e pilota. Gli accordi economici,
                tecnici, fiscali, assicurativi e operativi relativi al lavoro
                richiesto sono gestiti direttamente tra cliente e pilota.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              3. Dati personali raccolti
            </h2>

            <p className="mb-5 text-base leading-8 text-gray-300 sm:text-lg">
              Durante la navigazione, registrazione e utilizzo della piattaforma
              possono essere raccolte le seguenti categorie di dati:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Dati account
                </h3>
                <ul className="space-y-2 pl-5 text-gray-300 list-disc">
                  <li>Nome e cognome</li>
                  <li>Indirizzo email</li>
                  <li>Password criptata</li>
                  <li>Ruolo utente: cliente o pilota</li>
                  <li>Data di registrazione</li>
                  <li>Preferenze e impostazioni dell’account</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Dati profilo
                </h3>
                <ul className="space-y-2 pl-5 text-gray-300 list-disc">
                  <li>Città o area geografica</li>
                  <li>Numero di telefono, se inserito</li>
                  <li>Informazioni professionali</li>
                  <li>Descrizione del profilo</li>
                  <li>Foto profilo o immagine, se caricata</li>
                  <li>Esperienze, competenze e servizi offerti</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Dati dei piloti
                </h3>
                <ul className="space-y-2 pl-5 text-gray-300 list-disc">
                  <li>Certificazioni, attestati o patentini drone</li>
                  <li>Modelli di drone utilizzati</li>
                  <li>Zone operative</li>
                  <li>Servizi offerti</li>
                  <li>Portfolio, esperienze o descrizioni professionali</li>
                  <li>Eventuali dati fiscali inseriti volontariamente</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Dati dei clienti
                </h3>
                <ul className="space-y-2 pl-5 text-gray-300 list-disc">
                  <li>Annunci pubblicati</li>
                  <li>Descrizione del lavoro richiesto</li>
                  <li>Luogo o città del servizio</li>
                  <li>Budget indicativo</li>
                  <li>Messaggi e comunicazioni collegate all’annuncio</li>
                  <li>Partita IVA, ragione sociale o dati business, se inseriti</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Dati tecnici
                </h3>
                <ul className="space-y-2 pl-5 text-gray-300 list-disc">
                  <li>Indirizzo IP</li>
                  <li>Log tecnici di accesso</li>
                  <li>Tipo di dispositivo e browser</li>
                  <li>Informazioni sulla sessione</li>
                  <li>Cookie tecnici e preferenze cookie</li>
                  <li>Dati necessari alla sicurezza della piattaforma</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Dati di pagamento
                </h3>
                <ul className="space-y-2 pl-5 text-gray-300 list-disc">
                  <li>Acquisti di crediti</li>
                  <li>Importo e data della transazione</li>
                  <li>Esito del pagamento</li>
                  <li>Identificativi tecnici della transazione</li>
                  <li>Dati gestiti dal fornitore di pagamento Stripe</li>
                </ul>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              DroneGuard non richiede intenzionalmente dati appartenenti a
              categorie particolari, come dati sanitari, religiosi, politici,
              biometrici o relativi all’orientamento sessuale. Gli utenti sono
              invitati a non inserire tali informazioni nei profili, negli
              annunci o nei messaggi.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              4. Finalità del trattamento e basi giuridiche
            </h2>

            <p className="mb-5 text-base leading-8 text-gray-300 sm:text-lg">
              I dati personali vengono trattati per le seguenti finalità:
            </p>

            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="bg-[#080C22] p-4 font-semibold text-white">
                  Finalità
                </div>
                <div className="bg-[#080C22] p-4 font-semibold text-white">
                  Dati utilizzati
                </div>
                <div className="bg-[#080C22] p-4 font-semibold text-white">
                  Base giuridica
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-4">
                  Creazione e gestione dell’account utente
                </div>
                <div className="p-4">
                  Nome, email, password criptata, ruolo utente, dati profilo
                </div>
                <div className="p-4">
                  Esecuzione del contratto o di misure precontrattuali
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-4">
                  Pubblicazione annunci e candidature
                </div>
                <div className="p-4">
                  Annunci, descrizioni, città, offerte, messaggi, profili
                </div>
                <div className="p-4">
                  Esecuzione del servizio richiesto dall’utente
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-4">
                  Gestione crediti e acquisti
                </div>
                <div className="p-4">
                  Dati account, storico crediti, dati transazione, dati fiscali se necessari
                </div>
                <div className="p-4">
                  Esecuzione del contratto e obblighi legali/fiscali
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-4">
                  Sicurezza, prevenzione abusi e protezione piattaforma
                </div>
                <div className="p-4">
                  IP, log tecnici, eventi di sicurezza, dati account
                </div>
                <div className="p-4">
                  Interesse legittimo del titolare e obblighi di sicurezza
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-4">
                  Comunicazioni di servizio
                </div>
                <div className="p-4">
                  Email, dati account, notifiche collegate ad annunci e candidature
                </div>
                <div className="p-4">
                  Esecuzione del servizio e interesse legittimo
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-4">
                  Analisi statistiche e miglioramento del sito
                </div>
                <div className="p-4">
                  Cookie statistici, dati aggregati o pseudonimizzati, dati di navigazione
                </div>
                <div className="p-4">
                  Consenso dell’utente, quando richiesto
                </div>
              </div>

              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="p-4">
                  Marketing, campagne pubblicitarie o remarketing
                </div>
                <div className="p-4">
                  Cookie marketing, identificatori online, dati di interazione
                </div>
                <div className="p-4">
                  Consenso dell’utente
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              5. Sistema crediti
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                DroneGuard utilizza un sistema di crediti digitali per accedere
                a determinate funzionalità della piattaforma.
              </p>

              <ul className="space-y-3 pl-6 list-disc">
                <li>
                  I clienti possono ricevere crediti gratuiti alla registrazione.
                </li>
                <li>
                  I piloti possono ricevere crediti gratuiti alla registrazione.
                </li>
                <li>
                  La pubblicazione di un annuncio può richiedere l’utilizzo di crediti.
                </li>
                <li>
                  La candidatura o risposta a un annuncio può richiedere l’utilizzo di crediti.
                </li>
                <li>
                  I crediti possono essere acquistati tramite sistemi di pagamento esterni.
                </li>
                <li>
                  I crediti non rappresentano valuta reale, moneta elettronica o strumento finanziario.
                </li>
                <li>
                  I crediti non sono convertibili in denaro e non possono essere trasferiti tra utenti, salvo diversa indicazione della piattaforma.
                </li>
              </ul>

              <p>
                DroneGuard può modificare nel tempo il numero di crediti
                richiesti per accedere a determinate funzionalità, dandone
                comunicazione all’interno della piattaforma o aggiornando le
                relative condizioni.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              6. Pagamenti e Stripe
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                Gli eventuali pagamenti per l’acquisto di crediti vengono gestiti
                tramite Stripe o altri fornitori di pagamento indicati sulla
                piattaforma.
              </p>

              <p>
                DroneGuard non conserva direttamente i dati completi della carta
                di pagamento. Tali dati vengono gestiti dal fornitore di
                pagamento secondo le proprie misure di sicurezza e condizioni
                applicabili.
              </p>

              <p>
                DroneGuard può conservare informazioni relative all’acquisto,
                come importo, data, esito del pagamento, pacchetto crediti
                acquistato, identificativo tecnico della transazione e dati
                necessari per finalità contabili, fiscali, amministrative e di
                assistenza.
              </p>

              <p>
                Gli accordi economici relativi ai lavori pubblicati sulla
                piattaforma sono gestiti direttamente tra cliente e pilota.
                DroneGuard non trattiene il compenso del pilota e non gestisce
                il pagamento del lavoro professionale svolto tra utenti, salvo
                eventuali future funzionalità espressamente indicate.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              7. Destinatari dei dati e fornitori esterni
            </h2>

            <p className="mb-5 text-base leading-8 text-gray-300 sm:text-lg">
              I dati personali possono essere trattati da fornitori esterni che
              supportano il funzionamento della piattaforma. Tali soggetti
              possono operare come responsabili del trattamento o autonomi
              titolari, a seconda del servizio svolto.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Supabase
                </h3>
                <p className="text-gray-300">
                  Può essere utilizzato per autenticazione, database,
                  conservazione dati, gestione account e sicurezza tecnica.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Stripe
                </h3>
                <p className="text-gray-300">
                  Può essere utilizzato per elaborare pagamenti, transazioni,
                  ricevute e dati collegati all’acquisto di crediti.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Vercel o hosting equivalente
                </h3>
                <p className="text-gray-300">
                  Può essere utilizzato per hosting, distribuzione del sito,
                  sicurezza, log tecnici, prestazioni e protezione
                  dell’infrastruttura.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">
                  Servizi email e assistenza
                </h3>
                <p className="text-gray-300">
                  Possono essere utilizzati per inviare comunicazioni di
                  servizio, notifiche, messaggi di supporto e risposte alle
                  richieste degli utenti.
                </p>
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              I dati possono inoltre essere comunicati a consulenti,
              professionisti, autorità pubbliche, soggetti autorizzati o altri
              destinatari quando ciò sia necessario per adempiere a obblighi di
              legge, tutelare diritti, prevenire abusi o gestire controversie.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              8. Trasferimenti di dati fuori dallo Spazio Economico Europeo
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                Alcuni fornitori tecnici utilizzati dalla piattaforma possono
                avere sedi, infrastrutture o sub-fornitori situati fuori dallo
                Spazio Economico Europeo, inclusi gli Stati Uniti.
              </p>

              <p>
                In questi casi, il trasferimento dei dati avviene, ove
                necessario, sulla base di strumenti previsti dal GDPR, come
                decisioni di adeguatezza, clausole contrattuali standard,
                misure supplementari, Data Processing Agreement o altri
                meccanismi previsti dalla normativa applicabile.
              </p>

              <p>
                L’utente può richiedere maggiori informazioni sui fornitori
                utilizzati e sulle garanzie applicate scrivendo a
                assistenza@droneguard.it.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              9. Tempi di conservazione dei dati
            </h2>

            <p className="mb-5 text-base leading-8 text-gray-300 sm:text-lg">
              I dati personali vengono conservati per il tempo necessario alle
              finalità per cui sono raccolti e, successivamente, per il periodo
              imposto dalla legge o necessario alla tutela dei diritti di
              DroneGuard.
            </p>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="font-semibold text-white">
                  Dati account e profilo
                </h3>
                <p className="mt-2 text-gray-300">
                  Conservati per tutta la durata dell’account e cancellati o
                  anonimizzati dopo la richiesta di eliminazione, salvo obblighi
                  legali, fiscali, sicurezza, prevenzione frodi o tutela dei
                  diritti.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="font-semibold text-white">
                  Annunci, candidature e comunicazioni
                </h3>
                <p className="mt-2 text-gray-300">
                  Conservati per il tempo necessario alla gestione del servizio
                  e per un periodo successivo ragionevole in caso di assistenza,
                  contestazioni, prevenzione abusi o obblighi legali.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="font-semibold text-white">
                  Dati di pagamento e contabili
                </h3>
                <p className="mt-2 text-gray-300">
                  Conservati per il periodo previsto dalla normativa fiscale,
                  contabile e civilistica applicabile.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="font-semibold text-white">
                  Log tecnici e sicurezza
                </h3>
                <p className="mt-2 text-gray-300">
                  Conservati per il tempo necessario a garantire sicurezza,
                  prevenzione abusi, debug tecnico e protezione della
                  piattaforma.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
                <h3 className="font-semibold text-white">
                  Cookie e preferenze
                </h3>
                <p className="mt-2 text-gray-300">
                  Conservati secondo quanto indicato nella Cookie Policy e nelle
                  preferenze espresse dall’utente tramite il banner cookie.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              10. Sicurezza dei dati
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                DroneGuard adotta misure tecniche e organizzative ragionevoli
                per proteggere i dati personali da perdita, uso improprio,
                accesso non autorizzato, divulgazione, alterazione o
                distruzione.
              </p>

              <ul className="space-y-3 pl-6 list-disc">
                <li>Utilizzo di connessioni HTTPS.</li>
                <li>Password non salvate in chiaro.</li>
                <li>Autenticazione tramite servizi specializzati.</li>
                <li>Limitazione degli accessi ai dati.</li>
                <li>Controlli tecnici contro abusi e accessi non autorizzati.</li>
                <li>Monitoraggio e log tecnici per sicurezza e manutenzione.</li>
              </ul>

              <p>
                Nessun sistema informatico può essere considerato completamente
                sicuro. L’utente è responsabile della protezione delle proprie
                credenziali e deve utilizzare password robuste, non condividere
                l’account e segnalare tempestivamente eventuali accessi sospetti.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              11. Diritti dell’utente
            </h2>

            <p className="mb-5 text-base leading-8 text-gray-300 sm:text-lg">
              Nei limiti previsti dalla normativa applicabile, l’utente può
              esercitare i seguenti diritti:
            </p>

            <ul className="space-y-3 pl-6 text-base text-gray-300 sm:text-lg list-disc">
              <li>ottenere conferma dell’esistenza o meno di dati personali che lo riguardano;</li>
              <li>accedere ai propri dati personali;</li>
              <li>chiedere la rettifica di dati inesatti o l’integrazione di dati incompleti;</li>
              <li>chiedere la cancellazione dei dati, quando possibile;</li>
              <li>chiedere la limitazione del trattamento;</li>
              <li>opporsi al trattamento, nei casi previsti;</li>
              <li>ricevere i dati in formato strutturato, ove applicabile;</li>
              <li>revocare il consenso prestato, senza pregiudicare la liceità del trattamento precedente alla revoca;</li>
              <li>proporre reclamo al Garante per la Protezione dei Dati Personali.</li>
            </ul>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              Per esercitare i propri diritti, l’utente può scrivere a
              assistenza@droneguard.it. DroneGuard potrà richiedere informazioni
              aggiuntive per verificare l’identità del richiedente prima di
              procedere.
            </p>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              12. Eliminazione account
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                L’utente può richiedere la cancellazione del proprio account
                dalla pagina impostazioni, se disponibile, oppure contattando il
                supporto tramite la pagina{" "}
                <Link
                  href="/contattaci"
                  className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
                >
                  Contattaci
                </Link>
                .
              </p>

              <p>
                A seguito della richiesta, DroneGuard provvederà alla
                cancellazione o anonimizzazione dei dati personali, salvo i casi
                in cui la conservazione sia necessaria per obblighi legali,
                fiscali, contabili, sicurezza, prevenzione abusi, gestione di
                contestazioni o tutela dei diritti.
              </p>

              <p>
                La cancellazione dell’account può comportare la perdita
                dell’accesso ai crediti, agli annunci, alle candidature, ai dati
                del profilo e alle funzionalità associate all’account.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              13. Cookie e strumenti di tracciamento
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                DroneGuard utilizza cookie tecnici necessari al funzionamento
                del sito, come cookie di autenticazione, sicurezza, sessione,
                preferenze e gestione del consenso.
              </p>

              <p>
                Con il consenso dell’utente, DroneGuard può utilizzare anche
                cookie statistici o strumenti di terze parti per misurare le
                prestazioni del sito, migliorare l’esperienza utente o gestire
                eventuali campagne pubblicitarie.
              </p>

              <p>
                I cookie non necessari vengono attivati solo dopo il consenso
                dell’utente, quando previsto. L’utente può accettare, rifiutare
                o personalizzare le preferenze tramite il banner cookie e può
                modificarle successivamente tramite il link “Gestisci preferenze
                cookie” presente nel footer del sito.
              </p>

              <p>
                Per maggiori informazioni consulta la{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
                >
                  Cookie Policy
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              14. Minori
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                DroneGuard è destinato a utenti maggiorenni o comunque a utenti
                che abbiano la capacità giuridica necessaria per utilizzare una
                piattaforma professionale e concludere accordi relativi a
                servizi con drone.
              </p>

              <p>
                Gli utenti minorenni non devono utilizzare la piattaforma per
                pubblicare annunci, acquistare crediti o candidarsi a lavori
                professionali senza il consenso e la supervisione di chi
                esercita la responsabilità genitoriale.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              15. Termini di utilizzo della piattaforma
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                Utilizzando DroneGuard, l’utente accetta i presenti Termini di
                Utilizzo e si impegna a usare la piattaforma in modo corretto,
                lecito e conforme alla normativa applicabile.
              </p>

              <ul className="space-y-3 pl-6 list-disc">
                <li>
                  L’utente deve fornire informazioni veritiere, aggiornate e non
                  ingannevoli.
                </li>
                <li>
                  Il cliente è responsabile del contenuto degli annunci
                  pubblicati.
                </li>
                <li>
                  Il pilota è responsabile delle informazioni professionali
                  dichiarate nel proprio profilo e nelle candidature.
                </li>
                <li>
                  Il pilota deve possedere autorizzazioni, attestati,
                  assicurazioni e requisiti previsti dalla normativa applicabile
                  per svolgere il servizio offerto.
                </li>
                <li>
                  È vietato utilizzare DroneGuard per attività illegali,
                  fraudolente, ingannevoli, offensive, spam, violazione di
                  diritti di terzi o uso improprio della piattaforma.
                </li>
                <li>
                  È vietato pubblicare dati personali di terzi senza idonea base
                  giuridica o consenso.
                </li>
              </ul>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              16. Responsabilità di DroneGuard
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                DroneGuard fornisce una piattaforma digitale di incontro tra
                domanda e offerta di servizi con drone. DroneGuard non garantisce
                che un annuncio riceva candidature, che un pilota venga scelto,
                che un cliente assegni un lavoro o che un accordo tra utenti
                venga concluso.
              </p>

              <p>
                DroneGuard non è responsabile della qualità, sicurezza,
                conformità, puntualità, pagamento o corretta esecuzione dei
                servizi concordati direttamente tra cliente e pilota.
              </p>

              <p>
                DroneGuard non verifica in modo sistematico tutte le
                certificazioni, autorizzazioni, abilitazioni, assicurazioni o
                dichiarazioni inserite dagli utenti. Ogni utente è responsabile
                delle proprie dichiarazioni e dell’osservanza della normativa
                applicabile, inclusa la normativa aeronautica e privacy.
              </p>

              <p>
                DroneGuard può sospendere, limitare o cancellare account,
                annunci, candidature o contenuti che risultino contrari ai
                presenti termini, alla legge, alla sicurezza della piattaforma o
                ai diritti di terzi.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              17. Contenuti pubblicati dagli utenti
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                Gli utenti mantengono la responsabilità dei contenuti pubblicati
                sulla piattaforma, inclusi annunci, descrizioni, immagini,
                messaggi, offerte, profili, certificazioni, portfolio e
                informazioni professionali.
              </p>

              <p>
                Pubblicando contenuti su DroneGuard, l’utente autorizza la
                piattaforma a mostrarli, elaborarli e utilizzarli per fornire il
                servizio richiesto, nei limiti necessari al funzionamento della
                piattaforma.
              </p>

              <p>
                È vietato pubblicare contenuti falsi, diffamatori, offensivi,
                discriminatori, illeciti, pericolosi, contrari alla legge,
                lesivi di diritti di terzi o contenenti dati personali non
                autorizzati.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              18. Sospensione o chiusura account
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                DroneGuard può sospendere o chiudere un account in caso di uso
                illecito, abuso della piattaforma, violazione dei presenti
                termini, comportamenti fraudolenti, segnalazioni gravi,
                pubblicazione di contenuti non consentiti o rischi per la
                sicurezza del servizio.
              </p>

              <p>
                In caso di sospensione o chiusura dell’account, l’utente può
                contattare l’assistenza per richiedere chiarimenti, salvo i casi
                in cui la comunicazione possa compromettere indagini, sicurezza,
                prevenzione frodi o diritti di terzi.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              19. Modifiche alla Privacy Policy e ai Termini
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                DroneGuard può aggiornare questa Privacy Policy e i Termini di
                Utilizzo per adeguarli a modifiche normative, tecniche,
                operative o commerciali.
              </p>

              <p>
                La versione aggiornata sarà pubblicata su questa pagina con
                indicazione della data di ultimo aggiornamento. In caso di
                modifiche rilevanti, DroneGuard potrà informare gli utenti
                tramite avviso sul sito, email o comunicazione all’interno della
                piattaforma.
              </p>

              <p>
                L’uso continuato della piattaforma dopo la pubblicazione degli
                aggiornamenti comporta l’accettazione della versione aggiornata,
                salvo i casi in cui la normativa richieda un consenso specifico.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              20. Contatti
            </h2>

            <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
              <p>
                Per richieste relative alla privacy, ai dati personali,
                all’eliminazione dell’account, ai cookie o ai presenti Termini
                di Utilizzo, puoi contattare DroneGuard tramite:
              </p>

              <div className="rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
                <p className="break-words text-lg font-semibold text-green-300 sm:text-xl">
                  assistenza@droneguard.it
                </p>
              </div>

              <p>
                Puoi anche utilizzare la pagina{" "}
                <Link
                  href="/contattaci"
                  className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
                >
                  Contattaci
                </Link>
                .
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}