import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Piloti drone per foto immobili | DroneGuard",
  description:
    "Trova o pubblica richieste per piloti drone per foto immobili su DroneGuard. Clienti e piloti drone possono incontrarsi per servizi, ispezioni, riprese e lavori professionali."
}

const cards = [
  { title: "Per clienti", text: "Pubblica una richiesta per foto aeree per immobili, ville, terreni, condomini, attici, terrazzi, case vacanza, rustici, casali, capannoni e annunci immobiliari online indicando luogo, obiettivo, urgenza e tipo di materiale che vuoi ricevere." },
  { title: "Per piloti", text: "Candidati solo agli incarichi compatibili con esperienza, zona, attrezzatura e possibilità operative, spiegando bene cosa puoi consegnare." },
  { title: "Per aziende e tecnici", text: "Usa foto e video dall'alto per documentare, promuovere, confrontare o preparare interventi senza basarti solo su immagini da terra." }
]

const servizi = [
  "Foto dall'alto di ville e giardini",
  "Contesto di quartiere e posizione",
  "Terreni, confini e accessi",
  "Terrazzi, piscine e spazi esterni",
  "Immagini per portali e social immobiliari",
  "Richieste con città, zona e obiettivo chiaro",
  "Materiale da condividere con tecnici, clienti o imprese",
  "Candidature da piloti interessati e disponibili",
  "Valutazione di sicurezza e fattibilità prima del volo"
]

const consigliCliente = [
  "città, indirizzo indicativo o zona del servizio",
  "tipo di immobile, terreno, attività o area da documentare",
  "motivo della richiesta e risultato che vuoi ottenere",
  "foto, video, riprese panoramiche, dettagli o materiale tecnico desiderato",
  "altezza indicativa, ostacoli, accessi, presenza di persone e urgenza",
  "eventuali preferenze su giorno, orario, consegna e formato dei file"
]

const consigliPilota = [
  "spiega subito se puoi svolgere quel tipo di servizio",
  "indica zona coperta, disponibilità e tempi di consegna",
  "fai domande quando l'annuncio è troppo generico",
  "chiarisci cosa è incluso e cosa invece richiede un accordo diverso",
  "non promettere perizie, certificazioni o analisi se non rientrano nelle tue competenze",
  "valuta sempre sicurezza, privacy, meteo e regole applicabili prima di confermare"
]

const approfondimenti = [
  "Un annuncio immobiliare deve far capire non solo l'interno, ma anche posizione, spazio esterno, accessi e vista. Il drone può completare il racconto visivo.",
  "Il pilota può collaborare con fotografi e agenzie, realizzando scatti puliti, coerenti con lo stile dell'annuncio e adatti alla pubblicazione online.",
  "Una pagina SEO dedicata intercetta ricerche molto specifiche e porta l'utente verso un azione semplice: registrarsi, pubblicare una richiesta o candidarsi a un annuncio. In questo modo il traffico organico non resta generico, ma viene collegato a un servizio concreto.",
  "Il vantaggio è anche pratico: un cliente che capisce cosa scrivere crea una richiesta migliore, mentre un pilota che legge un annuncio completo può decidere più velocemente se candidarsi. Meno messaggi confusi, più informazioni utili e un primo contatto più serio."
]

const faqs = [
  { q: "Le foto drone aiutano a vendere un immobile?", a: "Possono aiutare a presentarlo meglio quando esterni, terreno, vista o posizione sono elementi importanti dell'annuncio." },
  { q: "Quanto costa pubblicare un lavoro?", a: "Pubblicare un lavoro su DroneGuard costa 5 crediti. I nuovi clienti ricevono 10 crediti gratuiti dopo la registrazione." },
  { q: "Quanto costa candidarsi come pilota?", a: "Rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione." },
  { q: "DroneGuard esegue direttamente il servizio?", a: "No. DroneGuard mette in contatto clienti e piloti drone. Il servizio viene svolto dal professionista scelto dal cliente." },
  { q: "Chi valuta se il volo è possibile?", a: "La fattibilità deve essere valutata dal pilota in base a sicurezza, regole applicabili, meteo, ostacoli, privacy, persone presenti e condizioni reali del luogo." }
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Foto immobili con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Piloti drone per foto immobiliari e annunci di vendita
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            DroneGuard aiuta piloti drone, agenzie immobiliari, fotografi, proprietari, costruttori, home stager e clienti che vogliono completare un annuncio a trasformare una ricerca generica in una richiesta concreta. Questa pagina è pensata per chi cerca foto aeree per immobili, ville, terreni, condomini, attici, terrazzi, case vacanza, rustici, casali, capannoni e annunci immobiliari online e vuole capire come pubblicare un annuncio, quali informazioni inserire e come ricevere candidature da piloti interessati. Il drone può essere utile quando servono immagini dall'alto, video ordinati, documentazione visiva, controllo di punti difficili da vedere da terra o materiale da condividere con tecnici, imprese, clienti, amministratori e responsabili aziendali.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Pubblica una richiesta
              </button>
            </Link>

            <Link href="/login">
              <button className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Accedi come pilota
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="mb-3 text-xl font-semibold">{card.title}</h2>
              <p className="leading-7 text-gray-300">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché creare una pagina dedicata a questa ricerca
            </h2>

            {approfondimenti.map((testo) => (
              <p key={testo} className="mb-5 leading-8 text-gray-300">
                {testo}
              </p>
            ))}

            <p className="leading-8 text-gray-300">
              DroneGuard non sostituisce il lavoro del professionista e non garantisce che ogni richiesta sia fattibile. La piattaforma serve a mettere in contatto cliente e pilota. Modalità operative, prezzo, tempi, sicurezza, autorizzazioni e consegna del materiale devono essere valutati direttamente tra le parti in base al caso reale.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi e situazioni collegati
            </h3>

            <ul className="space-y-4 text-gray-300">
              {servizi.map((servizio) => (
                <li key={servizio}>✅ {servizio}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come pubblicare una richiesta efficace su DroneGuard
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Una richiesta efficace deve permettere al pilota di capire subito il contesto. Non basta scrivere che serve un drone: bisogna spiegare dove si trova il lavoro, cosa deve essere ripreso, perché servono le immagini e quale risultato ci si aspetta. In questo modo il pilota può valutare distanza, tempo necessario, complessità, ostacoli, condizioni del luogo, eventuali limiti e tipo di consegna.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per richieste legate a foto aeree per immobili, ville, terreni, condomini, attici, terrazzi, case vacanza, rustici, casali, capannoni e annunci immobiliari online, conviene scrivere in modo semplice ma completo. Il cliente non deve usare termini tecnici se non li conosce, però deve descrivere il problema o l'obiettivo: controllo visivo, foto per preventivo, video promozionale, documentazione prima di un intervento, confronto tra più zone o materiale da inviare a un tecnico.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">Cosa dovrebbe scrivere il cliente</h3>
              <ul className="space-y-4 text-gray-300">
                {consigliCliente.map((voce) => (
                  <li key={voce}>✅ {voce}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="mb-4 text-2xl font-bold">Come dovrebbe rispondere il pilota</h3>
              <ul className="space-y-4 text-gray-300">
                {consigliPilota.map((voce) => (
                  <li key={voce}>✅ {voce}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">1. Registrati</h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea un account come cliente o come pilota drone e accedi alla piattaforma.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">2. Usa i crediti</h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti, i piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">3. Pubblica o candidati</h3>
              <p className="text-sm leading-6 text-gray-300">
                Pubblicare un lavoro costa 5 crediti. Anche candidarsi o rispondere a un annuncio costa 5 crediti.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">4. Scegli il contatto</h3>
              <p className="text-sm leading-6 text-gray-300">
                Cliente e pilota possono confrontarsi sui dettagli, valutare fattibilità e definire il servizio.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Perché conviene essere chiari prima del volo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Ogni incarico drone ha elementi diversi: luogo, altezza, ostacoli, presenza di persone, vento, privacy, distanza del pilota, durata del servizio e tipo di consegna. Una descrizione precisa riduce incomprensioni e aiuta a ricevere candidature più utili.
            </p>

            <p className="leading-8 text-gray-300">
              Prima di accettare un lavoro, il pilota deve poter fare domande e valutare se il volo è possibile. Prima di scegliere un pilota, il cliente dovrebbe chiarire cosa vuole ottenere e che uso farà delle immagini.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Cosa può ricevere il cliente
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              A seconda dell accordo, il cliente può ricevere foto panoramiche, video dall'alto, riprese ravvicinate dei punti visibili, file ordinati per zona, clip brevi per social o materiale da condividere con tecnici e imprese.
            </p>

            <p className="leading-8 text-gray-300">
              La consegna va definita prima: quantità di foto, durata dei video, tempi, formato, eventuale montaggio e limiti del servizio. Così il cliente sa cosa aspettarsi e il pilota lavora con maggiore precisione.
            </p>
          </div>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta pronta da pubblicare
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco pilota drone per foto immobiliari di una casa con grande giardino. Mi servono immagini dall'alto della proprietà, degli accessi, del terreno e del contesto vicino.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta scritta in questo modo aiuta il pilota a capire il tipo di lavoro, il luogo, il materiale richiesto e l'utilizzo finale delle immagini. Più informazioni sono presenti, più la candidatura può essere concreta.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto può costare un servizio drone di questo tipo?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il prezzo può cambiare in base a città, distanza, durata, difficoltà del volo, tipo di immagini, urgenza, consegna richiesta e livello di specializzazione. Un controllo rapido con poche foto è diverso da una giornata di riprese, da un incarico tecnico o da una consegna con elaborazioni aggiuntive.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma serve a pubblicare la richiesta e ricevere candidature da piloti interessati. Cliente e professionista potranno poi accordarsi su costo, modalità, tempi, limiti e materiale da consegnare.
          </p>

          <p className="leading-8 text-gray-300">
            Per ottenere risposte più precise, è meglio indicare subito se il lavoro è urgente, se servono solo file grezzi, se è richiesto montaggio, se il luogo è difficile da raggiungere e se il materiale servirà per uso tecnico, commerciale o personale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">Domande frequenti</h2>

          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-2 text-xl font-semibold">{faq.q}</h3>
                <p className="leading-7 text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova o pubblica richieste per piloti drone per foto immobili
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica un annuncio o candidati come pilota. La piattaforma aiuta clienti e professionisti a incontrarsi per servizi drone, ispezioni, riprese aeree, documentazione visiva, lavori tecnici e contenuti promozionali.
          </p>

          <Link href="/register">
            <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
              Registrati gratis
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}