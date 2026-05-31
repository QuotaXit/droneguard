import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo drone fotovoltaico | DroneGuard",
  description:
    "Richiedi un preventivo drone per fotovoltaico. Trova piloti drone per controlli visivi, foto, video e ispezioni di pannelli solari, impianti su tetto e campi fotovoltaici."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi drone per impianti fotovoltaici
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo drone fotovoltaico
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Hai bisogno di controllare un impianto fotovoltaico con drone?
            Con DroneGuard puoi pubblicare una richiesta e trovare piloti drone
            disponibili per realizzare foto, video, controlli visivi e
            documentazione dall'alto di pannelli solari, impianti su tetto,
            coperture industriali, capannoni, aziende, condomini, ville, terreni
            e campi fotovoltaici. Il drone può essere utile per osservare la
            disposizione dei pannelli, documentare lo stato generale
            dell'impianto, controllare zone difficili da vedere da terra e
            raccogliere materiale visivo da condividere con tecnici, installatori,
            manutentori o aziende specializzate.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Richiedi un preventivo
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Impianti su tetto
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini dall'alto di pannelli fotovoltaici installati su
              tetti, ville, condomini, capannoni, aziende, magazzini e strutture
              industriali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Campi fotovoltaici
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a documentare impianti a terra, file di
              pannelli, aree perimetrali, accessi, recinzioni e zone estese
              difficili da controllare a piedi.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video tecnici
            </h2>
            <p className="leading-7 text-gray-300">
              Puoi richiedere foto, video, panoramiche generali, riprese più
              ravvicinate o materiale visivo da inviare a tecnici, installatori
              o manutentori.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un drone per fotovoltaico
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un controllo con drone può essere utile quando vuoi osservare un
              impianto fotovoltaico dall'alto senza salire subito sul tetto o
              percorrere manualmente un'area molto estesa. Gli impianti
              fotovoltaici possono trovarsi su abitazioni private, condomini,
              capannoni industriali, aziende agricole, strutture commerciali,
              magazzini, terreni o grandi campi solari. In tutti questi casi, una
              visione aerea può aiutare a documentare lo stato generale
              dell'impianto.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può fornire immagini utili per osservare la disposizione
              dei pannelli, la presenza di sporco evidente, ombre, ostacoli,
              elementi apparentemente danneggiati, parti difficili da raggiungere,
              accessi, coperture e zone circostanti. Non sostituisce una verifica
              tecnica dell'impianto, ma può aiutare a raccogliere materiale visivo
              da condividere con un professionista prima di organizzare un
              intervento più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi descrivere il tipo di impianto, la zona, il
              materiale che ti serve e ricevere candidature da piloti drone
              disponibili. Se hai bisogno di un controllo specifico, ad esempio
              termografia o riprese con camera particolare, puoi indicarlo subito
              nella richiesta.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi richiedere
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto impianto fotovoltaico su tetto</li>
              <li>✅ Video pannelli solari dall'alto</li>
              <li>✅ Controllo visivo di capannoni</li>
              <li>✅ Riprese campi fotovoltaici</li>
              <li>✅ Documentazione per manutenzione</li>
              <li>✅ Controllo copertura industriale</li>
              <li>✅ Immagini per tecnici e installatori</li>
              <li>✅ Riprese di accessi e aree perimetrali</li>
              <li>✅ Richiesta termografia se disponibile</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per pannelli fotovoltaici su tetto
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Molti impianti fotovoltaici sono installati su tetti inclinati,
            coperture piane, condomini, ville, capannoni o strutture industriali.
            In questi contesti, vedere bene i pannelli da terra può essere
            difficile. Il drone permette di ottenere una visuale dall'alto e può
            documentare la posizione dei pannelli, la copertura, le file, gli
            spazi tra i moduli, eventuali ostacoli e le parti più difficili da
            osservare senza salire fisicamente sull'edificio.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini possono essere utili dopo un evento atmosferico, prima di
            una manutenzione, dopo l'installazione dell'impianto, durante un
            controllo periodico o quando si sospetta la presenza di sporco,
            ombreggiamenti, rami, detriti o elementi visibilmente danneggiati.
            Il materiale raccolto può essere inviato a un tecnico, a un
            installatore o a una ditta specializzata per una prima valutazione.
          </p>

          <p className="leading-8 text-gray-300">
            Se il tetto è alto, inclinato, difficile da raggiungere o si trova in
            una zona complessa, il pilota dovrà valutare con attenzione la
            fattibilità del volo. Per questo è importante spiegare bene il luogo,
            il tipo di edificio e il risultato desiderato.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-green-500/20 bg-green-500/10 p-8">
          <h2 className="mb-4 text-3xl font-bold">
            Come funziona DroneGuard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                1. Registrati
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Crea il tuo account come cliente, azienda, amministratore,
                tecnico, installatore o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ottieni crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50
                crediti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi l'impianto, la zona, il tipo di pannelli, il luogo e il
                materiale fotografico o video che vuoi ottenere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al tipo di servizio richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per campi fotovoltaici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Nei campi fotovoltaici e negli impianti a terra, il drone può
              essere utile per ottenere una visione generale dell'area. Può
              riprendere file di pannelli, recinzioni, accessi, strade interne,
              aree perimetrali, zone d'ombra, spazi di passaggio e punti che
              richiedono un controllo più preciso.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di materiale può essere utile per aziende, manutentori,
              proprietari di terreni, società energetiche o professionisti che
              vogliono documentare lo stato visivo dell'impianto e confrontare
              immagini nel tempo.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone con termografia
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Alcuni controlli su impianti fotovoltaici possono richiedere una
              camera termica o attrezzatura specifica. Se ti serve una
              termografia con drone, è importante indicarlo chiaramente nella
              richiesta, perché non tutti i piloti dispongono dello stesso
              equipaggiamento.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard ti permette di scrivere il tipo di controllo desiderato.
              Saranno poi i piloti dotati dell'attrezzatura adatta a valutare se
              candidarsi e proporti la propria disponibilità.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per drone fotovoltaico
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi prima di tutto il tipo
            di impianto: fotovoltaico su tetto, pannelli su capannone, impianto
            condominiale, impianto aziendale, campo fotovoltaico, struttura
            agricola o terreno. Indica anche la città, la zona, la dimensione
            indicativa dell'impianto, il numero approssimativo di pannelli se lo
            conosci e il materiale che vuoi ricevere.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Specifica se ti servono foto, video, panoramiche generali, riprese
            più ravvicinate, immagini della copertura, controllo delle file,
            materiale per manutenzione o documentazione da inviare a un tecnico.
            Se desideri una termografia o un controllo più specialistico,
            scrivilo subito nell'annuncio, così potranno candidarsi solo gli
            operatori più adatti.
          </p>

          <p className="leading-8 text-gray-300">
            È utile indicare anche eventuali ostacoli, accessi, alberi, cavi,
            edifici vicini, aree industriali, spazi stretti, presenza di persone
            o vincoli particolari. Il pilota dovrà sempre valutare sicurezza,
            privacy, meteo, ostacoli, area operativa e regole applicabili.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per drone fotovoltaico
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un impianto
              fotovoltaico installato sul tetto di un capannone in provincia di
              Roma. Mi servono immagini generali dei pannelli, della copertura e
              delle zone più difficili da vedere da terra. Vorrei ricevere il
              materiale per mostrarlo a un tecnico che si occupa della
              manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta scritta in questo modo aiuta il pilota a capire il
            tipo di impianto, il luogo, il materiale desiderato e l'obiettivo del
            controllo.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un controllo fotovoltaico con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un controllo con drone per fotovoltaico può variare in
            base alla città, alla dimensione dell'impianto, al tipo di struttura,
            alla durata del lavoro, al materiale richiesto e alla complessità del
            volo. Un piccolo impianto su tetto richiede un'organizzazione diversa
            rispetto a un grande campo fotovoltaico o a una copertura industriale
            molto estesa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il tipo di consegna può incidere. Alcuni clienti chiedono solo
            foto e video grezzi, altri vogliono immagini selezionate, video
            ordinati, riprese ravvicinate o materiale organizzato per un tecnico.
            Se viene richiesta attrezzatura specifica, come una camera termica,
            il preventivo può cambiare in base al pilota e alla dotazione
            necessaria.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo unico. La piattaforma permette di
            pubblicare la richiesta e ricevere candidature da piloti drone
            interessati. Cliente e professionista potranno poi accordarsi sui
            dettagli del servizio.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere un drone per controllare pannelli fotovoltaici?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per ricevere
                candidature da piloti drone disponibili per foto, video e
                controlli visivi di impianti fotovoltaici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone controlla il rendimento dell'impianto?
              </h3>
              <p className="text-gray-300">
                No, il drone può fornire materiale visivo. Per verifiche tecniche
                sul rendimento servono professionisti e strumenti specifici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere una termografia?
              </h3>
              <p className="text-gray-300">
                Sì, puoi indicarlo nella richiesta. Saranno i piloti dotati di
                attrezzatura adatta a valutare se candidarsi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Va bene anche per campi fotovoltaici?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere riprese per impianti su tetto, capannoni,
                aziende agricole, terreni e campi fotovoltaici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare la richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono
                10 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I
                nuovi piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente il servizio?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard mette in contatto clienti e piloti drone. Il
                servizio viene svolto dal professionista scelto dal cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Richiedi un preventivo drone per fotovoltaico
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi, foto, video, riprese aeree,
            documentazione e ispezioni di pannelli solari, impianti su tetto,
            capannoni, aziende e campi fotovoltaici.
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