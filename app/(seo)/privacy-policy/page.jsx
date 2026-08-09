import Link from "next/link"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Privacy Policy | DroneGuard",
  description:
    "Informativa sul trattamento dei dati personali degli utenti di DroneGuard ai sensi del Regolamento (UE) 2016/679.",
}

const CONTROLLER = {
  name: "Silvio Gavioli",
  address:
    "Via Ferdinando Neri,Roma, Italia",
  email: "assistenza@droneguard.it",
}

const ADDRESS_IS_INCOMPLETE = CONTROLLER.address.includes("[")

function Section({ number, title, children }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/10 sm:p-8">
      <h2 className="mb-5 text-2xl font-bold sm:text-3xl">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-base leading-8 text-gray-300 sm:text-lg">
        {children}
      </div>
    </section>
  )
}

function DataCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      {children}
    </div>
  )
}

function BulletList({ children }) {
  return <ul className="space-y-2 pl-5 text-gray-300 list-disc">{children}</ul>
}

function LegalBasisRow({ purpose, data, basis }) {
  return (
    <div className="grid grid-cols-1 divide-y divide-white/10 text-sm text-gray-300 sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
      <div className="p-4 font-medium text-white">{purpose}</div>
      <div className="p-4">{data}</div>
      <div className="p-4">{basis}</div>
    </div>
  )
}

function ProviderCard({ name, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#080C22] p-5">
      <h3 className="mb-2 text-lg font-semibold text-white">{name}</h3>
      <p className="text-gray-300">{children}</p>
    </div>
  )
}

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
            Privacy Policy
          </h1>

          <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
            Ultimo aggiornamento: 9 agosto 2026
          </p>

          <p className="mt-4 max-w-4xl text-base leading-8 text-gray-300 sm:text-lg">
            Questa informativa descrive come DroneGuard tratta i dati personali di
            visitatori, clienti, piloti e persone che contattano l’assistenza. È
            resa ai sensi del Regolamento (UE) 2016/679 (“GDPR”) e della normativa
            italiana applicabile. La Privacy Policy è distinta dalle condizioni
            contrattuali di utilizzo della piattaforma.
          </p>
        </div>

        <div className="space-y-10">
          <Section number="1" title="Titolare del trattamento e contatti">
            <p>Il titolare del trattamento dei dati personali è:</p>

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
                <strong className="text-white">Sito:</strong> www.droneguard.it
              </p>
              <p>
                <strong className="text-white">Email privacy:</strong>{" "}
                <a
                  href={`mailto:${CONTROLLER.email}`}
                  className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
                >
                  {CONTROLLER.email}
                </a>
              </p>
            </div>

            <p>
              Non è stato nominato un Responsabile della protezione dei dati
              (DPO/RPD). Le richieste relative ai dati personali possono essere
              inviate all’indirizzo email indicato sopra oppure tramite la pagina{" "}
              <Link
                href="/contattaci"
                className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
              >
                Contattaci
              </Link>
              .
            </p>
          </Section>

          <Section number="2" title="Che cos’è DroneGuard e a chi è rivolto">
            <p>
              DroneGuard è una piattaforma online che mette in contatto clienti
              interessati a servizi con drone e piloti o operatori registrati. Il
              cliente può pubblicare una richiesta; il pilota può consultare la
              bacheca e presentare un’offerta; se il cliente accetta la candidatura,
              le parti ricevono i dati necessari per organizzare il lavoro.
            </p>

            <p>
              DroneGuard non esegue il lavoro con drone e non incassa il compenso
              concordato tra cliente e pilota. Il pagamento del lavoro, gli aspetti
              fiscali, assicurativi, aeronautici e operativi sono gestiti
              direttamente dalle parti. Stripe viene utilizzato soltanto per
              acquistare crediti della piattaforma.
            </p>

            <p>
              Il servizio è destinato esclusivamente a persone che abbiano compiuto
              18 anni. Clienti e piloti possono essere privati, professionisti,
              imprese o enti, nei limiti consentiti dalle funzioni disponibili.
            </p>
          </Section>

          <Section number="3" title="Dati personali trattati">
            <p>
              DroneGuard tratta soltanto i dati necessari alle funzioni richieste,
              alla sicurezza, all’assistenza e agli obblighi applicabili. I dati sono
              forniti direttamente dall’utente, generati durante l’uso della
              piattaforma oppure ricevuti dai fornitori tecnici coinvolti nelle
              operazioni richieste. In particolare possono essere trattate le
              categorie indicate di seguito.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <DataCard title="Navigazione e sicurezza">
                <BulletList>
                  <li>indirizzo IP e data e ora della richiesta;</li>
                  <li>browser, dispositivo e informazioni tecniche di connessione;</li>
                  <li>cookie di sessione e dati necessari all’autenticazione;</li>
                  <li>log applicativi, eventi di sicurezza e controlli antiabuso;</li>
                  <li>preferenze salvate nel browser e dati di memoria locale.</li>
                </BulletList>
              </DataCard>

              <DataCard title="Registrazione e account">
                <BulletList>
                  <li>nome, cognome, città, indirizzo email e ruolo;</li>
                  <li>password gestita in forma protetta da Supabase Auth;</li>
                  <li>data di registrazione, conferma email e stato dell’account;</li>
                  <li>impostazioni, preferenze e notifiche di servizio;</li>
                  <li>identificativi tecnici associati all’account.</li>
                </BulletList>
              </DataCard>

              <DataCard title="Dati del cliente">
                <BulletList>
                  <li>ragione sociale o nome dell’attività;</li>
                  <li>Partita IVA, quando inserita;</li>
                  <li>foto profilo, biografia e città, quando inserite;</li>
                  <li>titolo, descrizione, località e data del lavoro;</li>
                  <li>
                    dopo la scelta del pilota: indirizzo preciso, punto d’incontro,
                    telefono, email e note operative.
                  </li>
                </BulletList>
              </DataCard>

              <DataCard title="Dati del pilota">
                <BulletList>
                  <li>foto profilo, biografia, città e area operativa;</li>
                  <li>esperienza, servizi offerti e modelli di drone;</li>
                  <li>certificazioni dichiarate e relativo stato di verifica;</li>
                  <li>preferenza per ricevere email sui nuovi lavori;</li>
                  <li>offerte economiche e candidature presentate.</li>
                </BulletList>
              </DataCard>

              <DataCard title="Certificazioni e documenti">
                <BulletList>
                  <li>documento caricato facoltativamente dal pilota;</li>
                  <li>tipo di certificazione e informazioni dichiarate;</li>
                  <li>stato della richiesta, esito e data del controllo;</li>
                  <li>eventuali note amministrative sulla verifica.</li>
                </BulletList>
              </DataCard>

              <DataCard title="Candidature e recensioni">
                <BulletList>
                  <li>prezzo proposto dal pilota e stato della candidatura;</li>
                  <li>dati dell’assegnazione e dello storico del lavoro;</li>
                  <li>valutazione, titolo e testo della recensione del cliente;</li>
                  <li>date e identificativi delle operazioni.</li>
                </BulletList>
              </DataCard>

              <DataCard title="Assistenza ed email">
                <BulletList>
                  <li>nome, email, ruolo, oggetto e messaggio inviato;</li>
                  <li>indirizzo IP e identificativi contro invii duplicati;</li>
                  <li>destinatario, oggetto, contenuto e stato tecnico dell’email;</li>
                  <li>tentativi di consegna ed eventuali errori.</li>
                </BulletList>
              </DataCard>

              <DataCard title="Crediti e pagamenti">
                <BulletList>
                  <li>pacchetto e numero di crediti acquistati;</li>
                  <li>importo, valuta, data ed esito della transazione;</li>
                  <li>identificativi Stripe di sessione, pagamento ed evento;</li>
                  <li>movimenti, accrediti, rimborsi e metadati amministrativi.</li>
                </BulletList>
              </DataCard>
            </div>

            <p>
              Nell’interfaccia attuale il cliente non può allegare fotografie agli
              annunci. La sola immagine caricabile dagli utenti è la foto del
              profilo; il pilota può inoltre caricare facoltativamente il documento
              necessario alla verifica della certificazione.
            </p>

            <p>
              DroneGuard non richiede intenzionalmente dati sanitari, biometrici,
              religiosi, politici, sindacali, relativi alla vita sessuale o ad altre
              categorie particolari. Gli utenti non devono inserirli nei profili,
              negli annunci, nelle note o nei messaggi di assistenza.
            </p>
          </Section>

          <Section number="4" title="Visibilità dei dati tra gli utenti">
            <p>
              Nell’interfaccia attuale non esiste una directory pubblica dei piloti.
              Il cliente può vedere i dati professionali del pilota che si è
              candidato a un proprio annuncio, inclusi nome e cognome, foto profilo,
              biografia, città, esperienza, servizi, droni, certificazioni dichiarate,
              badge di verifica e recensioni.
            </p>

            <p>
              Le foto profilo sono distribuite tramite un URL pubblico dello storage:
              non sono presentate in una directory accessibile senza autenticazione,
              ma chi conosce l’indirizzo del file potrebbe visualizzarlo. L’utente non
              deve quindi usare come avatar immagini che desidera mantenere private.
            </p>

            <p>
              Il documento originale della certificazione non viene mostrato ai
              clienti: è conservato nello spazio privato dedicato e viene esaminato
              manualmente dall’amministratore di DroneGuard. Al cliente viene
              mostrato soltanto lo stato o il badge di verifica.
            </p>

            <p>
              I piloti registrati possono vedere gli annunci disponibili e il valore
              inserito nel campo “località”. Poiché tale campo è visibile nella
              bacheca e può essere riportato nelle email di notifica, il cliente deve
              indicare soltanto città o zona generale, evitando l’indirizzo di casa o
              altri dettagli riservati. Indirizzo preciso, punto d’incontro, telefono,
              email e note operative vengono comunicati al pilota selezionato dopo
              l’accettazione della candidatura.
            </p>

            <p>
              Ogni pilota vede le proprie candidature e i propri lavori. Non è
              presente una funzione destinata alla consultazione dei profili degli
              altri piloti. Le recensioni possono essere lasciate dal cliente al
              pilota e vengono collegate al profilo del pilota recensito.
            </p>
          </Section>

          <Section number="5" title="Finalità e basi giuridiche">
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-1 divide-y divide-white/10 text-sm sm:text-base md:grid-cols-3 md:divide-x md:divide-y-0">
                <div className="bg-[#080C22] p-4 font-semibold text-white">Finalità</div>
                <div className="bg-[#080C22] p-4 font-semibold text-white">Dati</div>
                <div className="bg-[#080C22] p-4 font-semibold text-white">Base giuridica</div>
              </div>

              <LegalBasisRow
                purpose="Creazione e gestione dell’account"
                data="Dati anagrafici, email, credenziali, ruolo, profilo e impostazioni"
                basis="Esecuzione del contratto e misure precontrattuali richieste dall’utente"
              />
              <LegalBasisRow
                purpose="Pubblicazione annunci, candidature e assegnazione"
                data="Annunci, località, offerte, profili, contatti e dettagli operativi"
                basis="Esecuzione del servizio richiesto e misure precontrattuali"
              />
              <LegalBasisRow
                purpose="Verifica facoltativa delle certificazioni"
                data="Documento, dichiarazioni, esito, badge e note di controllo"
                basis="Esecuzione della funzione richiesta e interesse legittimo alla fiducia e sicurezza della piattaforma"
              />
              <LegalBasisRow
                purpose="Crediti, checkout, pagamenti e rimborsi"
                data="Dati account, pacchetto, importo, identificativi e storico transazioni"
                basis="Esecuzione del contratto e adempimento di obblighi legali, fiscali e contabili"
              />
              <LegalBasisRow
                purpose="Email e notifiche di servizio"
                data="Email, dati account, annuncio e stato delle operazioni"
                basis="Esecuzione del servizio e interesse legittimo a comunicare eventi necessari o utili; le notifiche sui nuovi lavori sono disattivabili"
              />
              <LegalBasisRow
                purpose="Assistenza e gestione delle richieste"
                data="Dati di contatto, contenuto del messaggio e dati tecnici"
                basis="Misure precontrattuali, esecuzione del contratto e interesse legittimo alla gestione del supporto"
              />
              <LegalBasisRow
                purpose="Sicurezza, prevenzione abusi e tutela dei diritti"
                data="IP, log, eventi, dati account e operazioni effettuate"
                basis="Interesse legittimo del titolare, obblighi di sicurezza e difesa di un diritto"
              />
              <LegalBasisRow
                purpose="Adempimenti e richieste delle autorità"
                data="Dati necessari rispetto allo specifico obbligo o procedimento"
                basis="Adempimento di un obbligo legale"
              />
            </div>

            <p>
              DroneGuard non utilizza i dati dell’account per newsletter o email
              promozionali. Le comunicazioni previste dal progetto sono collegate
              all’account, all’assistenza, agli acquisti e alle opportunità di lavoro
              richieste dal pilota tramite la relativa impostazione.
            </p>

            <p>
              Gli interessi legittimi perseguiti consistono nella sicurezza della
              piattaforma, prevenzione di frodi e abusi, affidabilità delle
              informazioni, gestione dell’assistenza e tutela dei diritti del
              titolare e degli utenti. Il trattamento viene limitato a quanto
              ragionevolmente necessario rispetto a tali finalità.
            </p>
          </Section>

          <Section number="6" title="Dati obbligatori e facoltativi">
            <p>
              I campi contrassegnati come obbligatori sono necessari per creare
              l’account o utilizzare la funzione richiesta. La mancata comunicazione
              impedisce la registrazione, la pubblicazione dell’annuncio, la
              candidatura, l’assegnazione del lavoro, l’acquisto dei crediti o la
              risposta dell’assistenza, a seconda del caso.
            </p>

            <p>
              Sono facoltativi, quando l’interfaccia lo consente, la Partita IVA,
              la foto profilo, la biografia, le informazioni aggiuntive del profilo,
              il documento per ottenere il badge di certificazione verificata e le
              notifiche email sui nuovi lavori. La certificazione dichiarata in fase
              di registrazione del pilota è invece richiesta dal modulo attuale.
            </p>
          </Section>

          <Section number="7" title="Destinatari e fornitori del servizio">
            <p>
              I dati possono essere trattati dal titolare e da persone eventualmente
              autorizzate in base ai permessi assegnati. Possono inoltre essere
              comunicati agli altri utenti soltanto nella misura necessaria alle
              funzioni descritte nella sezione 4.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <ProviderCard name="Supabase">
                Autenticazione, database, gestione sessioni, storage di avatar e
                documenti di certificazione, funzioni applicative e sicurezza.
              </ProviderCard>

              <ProviderCard name="Vercel">
                Hosting, distribuzione del sito, infrastruttura, protezione tecnica,
                log e funzionamento delle route server.
              </ProviderCard>

              <ProviderCard name="Stripe">
                Checkout e pagamento dei pacchetti di crediti, gestione delle
                transazioni, eventi, rimborsi e controlli antifrode. DroneGuard non
                conserva i dati completi della carta.
              </ProviderCard>

              <ProviderCard name="Resend">
                Invio delle email di servizio, notifiche e messaggi di assistenza.
                DroneGuard registra anche lo stato tecnico delle consegne nel proprio
                database.
              </ProviderCard>

              <ProviderCard name="Aruba Mail">
                Ricezione e conservazione nella casella di assistenza delle email e
                delle comunicazioni indirizzate a DroneGuard.
              </ProviderCard>

              <ProviderCard name="OpenStreetMap / Nominatim">
                Ricerca e suggerimento delle località. La ricerca digitata e i dati
                tecnici della connessione possono essere trasmessi al servizio.
              </ProviderCard>

              <ProviderCard name="Unsplash e RandomUser">
                Alcune immagini decorative o avatar predefiniti sono caricati da
                server esterni; tali server possono ricevere IP, user agent e dati
                tecnici della richiesta.
              </ProviderCard>

              <ProviderCard name="Consulenti e autorità">
                Professionisti, consulenti, autorità giudiziarie o amministrative e
                altri soggetti quando necessario per legge, sicurezza, contestazioni
                o tutela dei diritti.
              </ProviderCard>
            </div>

            <p>
              DroneGuard non vende i dati personali degli utenti e non li comunica a
              terzi per loro autonome finalità pubblicitarie.
            </p>
          </Section>

          <Section number="8" title="Trasferimenti fuori dallo Spazio Economico Europeo">
            <p>
              Alcuni fornitori possono avere sedi, infrastrutture o subfornitori in
              Paesi esterni allo Spazio Economico Europeo, inclusi gli Stati Uniti.
              Quando il trattamento comporta un trasferimento internazionale,
              vengono utilizzati, ove applicabili, gli strumenti previsti dal GDPR,
              come decisioni di adeguatezza, clausole contrattuali standard e misure
              supplementari adottate dai fornitori.
            </p>

            <p>
              Informazioni sui fornitori e sulle garanzie applicabili possono essere
              richieste scrivendo a {CONTROLLER.email}.
            </p>
          </Section>

          <Section number="9" title="Tempi di conservazione">
            <p>
              I dati sono conservati per il tempo necessario alla finalità per cui
              sono stati raccolti e successivamente soltanto quando richiesto dalla
              legge o necessario per sicurezza, contestazioni e tutela dei diritti.
              Sono applicati i seguenti criteri.
            </p>

            <div className="space-y-4">
              <DataCard title="Account e profilo">
                <p className="text-gray-300">
                  Per tutta la durata dell’account. Dopo la richiesta di chiusura,
                  l’accesso viene disattivato e i dati non più necessari vengono
                  cancellati o anonimizzati, salvo le eccezioni indicate di seguito.
                </p>
              </DataCard>

              <DataCard title="Avatar e documenti di certificazione">
                <p className="text-gray-300">
                  L’avatar e i documenti personali individuati dal sistema vengono
                  rimossi durante la procedura di chiusura dell’account. I documenti
                  di certificazione sono conservati per gestire la verifica e il
                  relativo badge e, in ogni caso, non oltre il tempo in cui risultano
                  necessari, salvo esigenze di contestazione o tutela di un diritto.
                </p>
              </DataCard>

              <DataCard title="Annunci, candidature, assegnazioni e recensioni">
                <p className="text-gray-300">
                  Per il tempo necessario alla gestione del lavoro e dello storico
                  dell’utente. Dopo la chiusura dell’account possono essere cancellati
                  o anonimizzati, oppure conservati limitatamente a quanto necessario
                  per assistenza, contestazioni, prevenzione abusi e tutela degli altri
                  utenti.
                </p>
              </DataCard>

              <DataCard title="Assistenza e registri email">
                <p className="text-gray-300">
                  Per il tempo necessario a rispondere, documentare la gestione della
                  richiesta, verificare la consegna delle comunicazioni e affrontare
                  eventuali contestazioni. I dati non più necessari devono essere
                  cancellati o anonimizzati mediante verifiche periodiche.
                </p>
              </DataCard>

              <DataCard title="Log tecnici e sicurezza">
                <p className="text-gray-300">
                  Per un periodo proporzionato alle esigenze di sicurezza, diagnosi
                  tecnica e prevenzione degli abusi. In caso di incidente, indagine o
                  contestazione, i log pertinenti possono essere conservati più a
                  lungo, limitatamente alla gestione dell’evento.
                </p>
              </DataCard>

              <DataCard title="Pagamenti, rimborsi e dati contabili">
                <p className="text-gray-300">
                  Per il periodo imposto dalla normativa fiscale, contabile e
                  civilistica applicabile, normalmente fino a 10 anni per i documenti
                  e le registrazioni soggetti a tale obbligo.
                </p>
              </DataCard>

              <DataCard title="Cookie e memoria locale">
                <p className="text-gray-300">
                  Secondo le durate e i criteri indicati nella{" "}
                  <Link
                    href="/cookie-policy"
                    className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>
              </DataCard>
            </div>
          </Section>

          <Section number="10" title="Chiusura ed eliminazione dell’account">
            <p>
              L’utente può avviare la chiusura dalle impostazioni dell’account oppure
              contattare l’assistenza. La procedura attuale disattiva l’accesso,
              anonimizza le credenziali di autenticazione e rimuove i file personali
              individuati, come avatar e documenti di certificazione.
            </p>

            <p>
              Alcuni record possono essere cancellati o anonimizzati anziché rimossi
              fisicamente quando ciò è necessario per preservare la coerenza dello
              storico degli altri utenti, documentare transazioni, prevenire abusi,
              gestire contestazioni, adempiere a obblighi legali o tutelare un diritto.
              La chiusura comporta la perdita dell’accesso alle funzioni e ai dati
              associati all’account.
            </p>
          </Section>

          <Section number="11" title="Sicurezza dei dati">
            <p>
              DroneGuard adotta misure tecniche e organizzative ragionevoli e
              proporzionate, tra cui connessioni HTTPS, autenticazione tramite
              fornitore specializzato, separazione dei ruoli, controlli di accesso,
              storage privato per i documenti di certificazione, log di sicurezza e
              procedure amministrative con permessi.
            </p>

            <p>
              Nessun sistema è completamente esente da rischi. L’utente deve
              proteggere la propria password, non condividere l’account e comunicare
              tempestivamente eventuali accessi sospetti.
            </p>
          </Section>

          <Section number="12" title="Diritti dell’interessato">
            <p>Nei casi previsti dal GDPR, l’utente può chiedere:</p>

            <BulletList>
              <li>conferma dell’esistenza di un trattamento e accesso ai dati;</li>
              <li>rettifica o integrazione dei dati inesatti o incompleti;</li>
              <li>cancellazione dei dati;</li>
              <li>limitazione del trattamento;</li>
              <li>opposizione ai trattamenti fondati sull’interesse legittimo;</li>
              <li>portabilità dei dati, quando applicabile;</li>
              <li>
                revoca del consenso, senza pregiudicare la liceità del trattamento
                precedente;
              </li>
              <li>
                informazioni sulle garanzie utilizzate per i trasferimenti
                internazionali.
              </li>
            </BulletList>

            <p>
              Le richieste possono essere inviate a {CONTROLLER.email}. Prima di
              rispondere può essere necessario verificare l’identità del richiedente.
              La risposta viene fornita senza ingiustificato ritardo e, di regola,
              entro un mese, salvo proroghe consentite dal GDPR.
            </p>

            <p>
              L’interessato può inoltre proporre reclamo al Garante per la protezione
              dei dati personali o all’autorità di controllo competente nel proprio
              Stato membro.
            </p>
          </Section>

          <Section number="13" title="Minori">
            <p>
              DroneGuard è riservato agli utenti maggiorenni. Non vengono raccolti
              intenzionalmente dati di persone di età inferiore a 18 anni. Chi ritiene
              che un minore abbia creato un account o trasmesso dati personali può
              segnalarlo a {CONTROLLER.email} per le verifiche e gli interventi del
              caso.
            </p>
          </Section>

          <Section number="14" title="Decisioni automatizzate e profilazione">
            <p>
              DroneGuard non adotta decisioni basate unicamente su trattamenti
              automatizzati che producano effetti giuridici o incidano in modo
              analogo significativamente sull’utente. Gli annunci sono presentati
              secondo criteri operativi, principalmente temporali, e le candidature
              sono visualizzate in ordine cronologico. Non è attualmente possibile
              acquistare un posizionamento privilegiato.
            </p>
          </Section>

          <Section number="15" title="Dati personali di terzi">
            <p>
              Chi inserisce dati riferiti ad altre persone deve essere autorizzato a
              farlo e deve limitarsi alle informazioni necessarie. È vietato
              pubblicare nei campi visibili ai piloti indirizzi privati, documenti,
              immagini o dati di terzi senza una valida base giuridica.
            </p>
          </Section>

          <Section number="16" title="Cookie e tecnologie simili">
            <p>
              DroneGuard utilizza cookie tecnici di autenticazione e strumenti di
              memoria locale necessari o richiesti dall’utente. I dettagli su nomi,
              finalità, fornitori e durate sono indicati nella{" "}
              <Link
                href="/cookie-policy"
                className="font-semibold text-green-400 underline underline-offset-4 hover:text-green-300"
              >
                Cookie Policy
              </Link>
              .
            </p>
          </Section>

          <Section number="17" title="Aggiornamenti dell’informativa">
            <p>
              Questa Privacy Policy può essere aggiornata per modifiche normative,
              tecniche o organizzative. La nuova versione sarà pubblicata su questa
              pagina con la data di aggiornamento. In caso di cambiamenti rilevanti,
              DroneGuard potrà informare gli utenti tramite sito, dashboard o email.
            </p>
          </Section>

          <Section number="18" title="Contatti privacy">
            <p>
              Per richieste relative ai dati personali, all’account o all’esercizio
              dei diritti puoi scrivere a:
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
