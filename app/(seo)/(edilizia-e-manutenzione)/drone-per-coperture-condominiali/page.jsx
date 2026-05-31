import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per coperture condominiali | DroneGuard",
  description:
    "Trova piloti drone per coperture condominiali, tetti, lastrici solari, gronde, facciate, infiltrazioni e documentazione visiva per amministratori."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per condomini e amministratori
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per coperture condominiali
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare visivamente una copertura condominiale, un tetto, un
            lastrico solare, una terrazza condominiale, una gronda, una facciata,
            un cornicione, una canna fumaria, un lucernario o una parte alta
            dell'edificio? Con DroneGuard puoi pubblicare una richiesta e trovare
            piloti drone disponibili per realizzare foto aeree, video di
            sopralluogo, immagini di dettaglio e documentazione visiva utile ad
            amministratori di condominio, tecnici, imprese, proprietari,
            consiglieri condominiali e professionisti che devono comprendere
            meglio lo stato esterno del fabbricato.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Trova un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Tetti e lastrici solari
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per osservare coperture, terrazzi,
              lucernari, impermeabilizzazioni, comignoli e parti difficili da
              vedere da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Gronde e facciate
            </h2>
            <p className="text-gray-300">
              Ottieni immagini di gronde, canali, cornicioni, frontalini, balconi,
              facciate alte e punti esterni che richiedono documentazione visiva.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale per assemblea
            </h2>
            <p className="text-gray-300">
              Usa foto e video per spiegare meglio ai condomini lo stato della
              copertura, eventuali criticità visibili e lavori da valutare.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per le coperture condominiali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In molti condomini le coperture non sono facili da controllare. Il
              tetto può essere alto, il lastrico solare può avere accessi limitati,
              alcune zone possono essere poco sicure da raggiungere e le facciate
              possono rendere difficile osservare gronde, cornicioni, canali e
              punti esterni. Il drone può aiutare a raccogliere immagini dall'alto
              in modo rapido, ordinato e facilmente condivisibile.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Le foto aeree possono mostrare lo stato generale della copertura,
              eventuali zone deteriorate visibili, ristagni d'acqua, accumuli di
              foglie, gronde sporche, tegole spostate, lucernari, comignoli,
              guaine, terrazzi, parapetti e aree che richiedono un controllo più
              approfondito da parte di tecnici o imprese specializzate.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce perizie, verifiche tecniche, prove
              strumentali o responsabilità professionali. Serve come supporto
              visivo per aiutare amministratori e condomini a vedere meglio la
              situazione, preparare richieste di preventivo e comunicare in modo
              più chiaro con tecnici e imprese.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per coperture condominiali
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di tetti e lastrici solari</li>
              <li>✅ Video di sopralluogo su coperture condominiali</li>
              <li>✅ Riprese di gronde, canali e cornicioni</li>
              <li>✅ Documentazione visiva per amministratori</li>
              <li>✅ Materiale da condividere con condomini e tecnici</li>
              <li>✅ Immagini per preventivi e lavori di manutenzione</li>
              <li>✅ Controllo visivo di terrazzi e parti alte</li>
              <li>✅ Foto di facciate, frontalini e balconi</li>
              <li>✅ Report visivo prima e dopo gli interventi</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per tetti, lastrici solari e terrazze condominiali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Le coperture condominiali possono comprendere tetti a falde, lastrici
            solari, terrazze comuni, coperture piane, guaine, tegole, lucernari,
            canne fumarie, antenne, pannelli, parapetti, gronde e canalizzazioni.
            Ogni edificio ha caratteristiche diverse e spesso non è semplice
            spiegare lo stato della copertura solo con fotografie scattate dal
            basso o con descrizioni verbali.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Con le riprese drone è possibile ottenere una panoramica completa del
            tetto e immagini più chiare dei punti interessati. Questo può essere
            utile quando ci sono infiltrazioni, sospette rotture, necessità di
            manutenzione, pulizia gronde, lavori di impermeabilizzazione,
            rifacimento copertura, installazione impianti o semplici controlli
            visivi programmati.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere consegnate all'amministratore, al tecnico,
            all'impresa incaricata o ai condomini, così da rendere più chiara la
            situazione e facilitare le decisioni successive.
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
                Crea il tuo account come cliente, amministratore, tecnico,
                impresa, proprietario, condomino incaricato o pilota drone.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                2. Ricevi crediti
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I clienti ricevono 10 crediti gratuiti e i piloti ricevono 50
                crediti dopo la registrazione.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi il condominio, la città, la copertura da osservare e il
                materiale fotografico o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti disponibilità,
                modalità operative, tempi e consegna dei file.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Supporto per amministratori di condominio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              L'amministratore può avere bisogno di mostrare ai condomini lo stato
              della copertura, spiegare perché serve un intervento, raccogliere
              preventivi, documentare una criticità o conservare immagini prima e
              dopo i lavori. Il drone permette di ottenere materiale visivo
              semplice da condividere e più chiaro rispetto a una descrizione
              scritta.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere usate in assemblea, inviate via email,
              condivise con il consiglio di condominio, trasmesse a un tecnico o
              archiviate insieme alla documentazione dell'edificio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Materiale per imprese e tecnici
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando un'impresa deve preparare un preventivo o un tecnico deve
              valutare un sopralluogo, avere immagini preliminari può aiutare a
              capire meglio il tipo di copertura, gli accessi, la presenza di
              ostacoli, la forma del tetto, le zone interessate e l'estensione
              dell'intervento.
            </p>

            <p className="leading-8 text-gray-300">
              Le foto con drone non sostituiscono il sopralluogo tecnico, ma
              possono rendere più semplice il primo confronto tra amministratore,
              impresa e professionisti incaricati.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Riprese drone per infiltrazioni, gronde e manutenzioni
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Infiltrazioni, macchie di umidità, problemi alle guaine, tegole
            spostate, gronde ostruite, canali danneggiati, cornicioni deteriorati
            e facciate ammalorate sono situazioni che spesso richiedono una prima
            documentazione visiva. Il drone può aiutare a osservare dall'alto
            parti dell'edificio che normalmente non sono accessibili senza scale,
            ponteggi o piattaforme.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            L'amministratore può richiedere immagini di una zona specifica oppure
            una panoramica completa della copertura. Il materiale raccolto può
            essere utile per capire quali punti mostrare al tecnico, quali imprese
            contattare e come spiegare ai condomini la situazione in modo più
            trasparente.
          </p>

          <p className="leading-8 text-gray-300">
            Il servizio può essere richiesto anche dopo un intervento, per
            documentare la pulizia delle gronde, il rifacimento di una guaina, la
            sistemazione di una copertura o il completamento di lavori sulle parti
            alte del fabbricato.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Condomini residenziali
            </h2>
            <p className="text-gray-300">
              Riprese per palazzi, condomini, complessi residenziali, cortili,
              tetti, terrazze comuni, facciate, balconi e parti alte.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Manutenzioni ordinarie
            </h2>
            <p className="text-gray-300">
              Foto e video per pulizia gronde, verifica visiva coperture,
              controlli periodici, piccoli interventi e documentazione condominiale.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Lavori straordinari
            </h2>
            <p className="text-gray-300">
              Materiale utile per rifacimento tetti, impermeabilizzazioni,
              facciate, cornicioni, lastrici solari, terrazzi e interventi più
              importanti.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            condominio e il tipo di immagini che servono. Puoi indicare la città,
            la zona, il numero indicativo di piani, il tipo di copertura, la
            presenza di terrazzi o lastrici solari, le aree da riprendere e il
            motivo della richiesta.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se ti servono foto della copertura completa,
            dettagli di gronde e canali, immagini di una zona con infiltrazioni,
            video panoramici, foto per preventivi, materiale per assemblea,
            documentazione prima e dopo un intervento o riprese da inviare a un
            tecnico.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso al cortile,
            presenza di aree di decollo, orari preferiti, referente sul posto,
            autorizzazioni condominiali, eventuali limitazioni dell'area e modalità
            di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per copertura condominiale
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video della copertura
              di un condominio. Mi servono immagini del tetto, del lastrico
              solare, delle gronde, dei comignoli, dei lucernari e di alcune zone
              dove sono state segnalate infiltrazioni. Il materiale verrà usato
              dall'amministratore per condividerlo con un tecnico, richiedere
              preventivi e spiegare meglio la situazione ai condomini.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di
            edificio, le aree da riprendere, la finalità delle immagini e il tipo
            di consegna desiderata.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per coperture condominiali?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per coperture condominiali può variare
            in base alla città, all'altezza dell'edificio, alla dimensione della
            copertura, alla durata delle riprese, al numero di aree da fotografare
            e al tipo di materiale richiesto. Una semplice documentazione
            fotografica del tetto può avere un costo diverso rispetto a un servizio
            completo con video, dettagli, foto selezionate e riprese prima e dopo
            un intervento.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcuni amministratori chiedono
            solo file grezzi, altri preferiscono cartelle ordinate, foto
            selezionate, video brevi, immagini divise per area o materiale pronto
            da allegare a email, preventivi, report o comunicazioni condominiali.
          </p>

          <p className="leading-8 text-gray-300">
            DroneGuard non impone un prezzo fisso. La piattaforma permette di
            pubblicare il lavoro e ricevere candidature da piloti drone
            interessati, così cliente e professionista possono accordarsi sul
            servizio più adatto.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare il drone per controllare un tetto condominiale?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per ottenere una
                documentazione visiva della copertura, del lastrico solare, delle
                gronde e delle parti alte dell'edificio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini possono essere usate in assemblea?
              </h3>
              <p className="text-gray-300">
                Sì, il materiale può essere condiviso con condomini, consiglieri,
                tecnici e imprese per spiegare meglio lo stato della copertura o
                la necessità di un intervento.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce una perizia tecnica?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce solo supporto visivo. Per valutazioni,
                perizie, verifiche e decisioni tecniche servono professionisti
                abilitati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere immagini prima e dopo i lavori?
              </h3>
              <p className="text-gray-300">
                Sì, puoi specificare nella richiesta se vuoi documentare lo stato
                iniziale della copertura e il risultato finale dopo manutenzione,
                pulizia o rifacimento.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti dopo la registrazione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                I piloti pagano per candidarsi?
              </h3>
              <p className="text-gray-300">
                Sì, rispondere o candidarsi a un annuncio costa 5 crediti. I nuovi
                piloti ricevono 50 crediti gratuiti dopo la registrazione.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per coperture condominiali
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video di sopralluogo,
            documentazione di tetti, lastrici solari, gronde, facciate, terrazzi,
            coperture condominiali e materiale visivo utile ad amministratori,
            tecnici, imprese e condomini.
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