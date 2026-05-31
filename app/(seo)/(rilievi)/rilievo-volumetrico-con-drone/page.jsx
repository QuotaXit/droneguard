import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Rilievo volumetrico con drone | DroneGuard",
  description:
    "Trova piloti drone per rilievi volumetrici, calcolo volumi, cave, cumuli, cantieri, movimento terra, discariche, depositi e aree industriali."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per rilievi volumetrici e calcolo volumi
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Rilievo volumetrico con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Il rilievo volumetrico con drone è una soluzione utile per documentare
            e analizzare cumuli, scavi, riporti, cave, cantieri, discariche,
            depositi di materiali, aree industriali, piazzali e zone soggette a
            movimento terra. Attraverso fotografie aeree, fotogrammetria,
            ortofoto, modelli 3D e nuvole di punti, è possibile ottenere una
            rappresentazione più chiara dell'area e supportare attività di calcolo
            volumi, confronto prima e dopo, monitoraggio periodico e gestione dei
            materiali. Con DroneGuard puoi trovare piloti drone disponibili per
            collaborare con imprese edili, aziende, cave, studi tecnici, geometri,
            ingegneri e professionisti che hanno bisogno di rilievi volumetrici e
            documentazione aerea.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Registrati gratis
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Calcolo dei volumi
            </h2>
            <p className="text-gray-300">
              Il drone può aiutare a raccogliere dati visivi utili per stimare
              volumi di cumuli, scavi, riporti, materiali stoccati e superfici
              modificate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Cave e movimento terra
            </h2>
            <p className="text-gray-300">
              Le acquisizioni aeree sono utili per cave, cantieri, scavi,
              riempimenti, piazzali, aree industriali e zone dove il terreno cambia
              nel tempo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Confronto prima e dopo
            </h2>
            <p className="text-gray-300">
              Ripetendo il rilievo in momenti diversi puoi documentare variazioni,
              avanzamento lavori, quantità movimentate e modifiche dell'area.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Cos'è un rilievo volumetrico con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un rilievo volumetrico con drone è un'attività di acquisizione aerea
              pensata per raccogliere immagini e dati utili a rappresentare la
              forma di un'area, di un cumulo, di uno scavo o di un deposito di
              materiali. Il drone sorvola la zona interessata e acquisisce
              fotografie da più punti di vista. Successivamente, attraverso
              software di elaborazione fotogrammetrica, il materiale può essere
              trasformato in ortofoto, modelli tridimensionali, nuvole di punti e
              basi utili al calcolo dei volumi.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questo tipo di servizio viene spesso richiesto quando è necessario
              stimare quantità di materiale, controllare lo stato di un cantiere,
              documentare uno scavo, monitorare una cava, verificare riporti di
              terra, osservare cumuli di inerti o confrontare una situazione prima
              e dopo un intervento. Il drone consente di ottenere una visione
              completa dall'alto e può ridurre i tempi necessari per raccogliere
              documentazione visiva su aree ampie o difficili da leggere da terra.
            </p>

            <p className="leading-8 text-gray-300">
              DroneGuard non esegue direttamente il rilievo, ma mette in contatto
              clienti e piloti drone. Puoi pubblicare una richiesta specificando
              l'area da rilevare, il tipo di materiale, l'obiettivo del calcolo e
              la zona del lavoro. I piloti interessati potranno candidarsi e
              proporti la propria disponibilità.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Quando serve un rilievo volumetrico
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Calcolo volume di cumuli e materiali</li>
              <li>✅ Cave, discariche e aree di deposito</li>
              <li>✅ Scavi, riporti e movimento terra</li>
              <li>✅ Cantieri edili e infrastrutturali</li>
              <li>✅ Piazzali industriali e aree logistiche</li>
              <li>✅ Confronto prima e dopo i lavori</li>
              <li>✅ Documentazione per report tecnici</li>
              <li>✅ Monitoraggio periodico di superfici modificate</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Rilievi volumetrici per cave, cantieri e depositi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nelle cave e nelle aree di estrazione, il rilievo volumetrico con
            drone può essere utile per documentare cumuli di materiale, fronti di
            scavo, zone di deposito, piazzali e superfici soggette a modifiche
            frequenti. Le immagini aeree consentono di ottenere una visione
            complessiva dell'area e possono supportare attività di monitoraggio,
            pianificazione, confronto e controllo interno.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Nei cantieri edili, il drone può aiutare a seguire lavorazioni di
            movimento terra, scavi, riporti, sistemazioni esterne, realizzazione di
            piazzali e modifiche del terreno. Un rilievo eseguito prima e dopo
            l'intervento può fornire una documentazione visiva utile per capire
            come l'area è cambiata e per confrontare le quantità movimentate. Il
            materiale raccolto può essere condiviso con tecnici, imprese,
            committenti e responsabili di progetto.
          </p>

          <p className="leading-8 text-gray-300">
            Anche nei depositi di materiali, nelle discariche, nei siti di
            stoccaggio, nelle aziende industriali e nelle aree logistiche, il
            drone può offrire un supporto importante. Quando sono presenti cumuli
            di terra, sabbia, ghiaia, inerti, biomassa o altri materiali, una
            documentazione aerea può aiutare a stimare la quantità presente e a
            mantenere un archivio ordinato nel tempo.
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
                Crea gratuitamente il tuo account come cliente, azienda,
                professionista o pilota drone.
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
                3. Pubblica il lavoro
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi area, materiale, obiettivo del rilievo e risultato che ti
                serve.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e proporti la propria
                disponibilità.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Calcolo volumi di cumuli e materiali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Uno degli utilizzi più richiesti riguarda il calcolo dei volumi di
              cumuli. Inerti, terra, sabbia, ghiaia, pietrisco, materiali di
              scavo, compost, biomassa o altri materiali stoccati possono essere
              documentati dall'alto per ottenere una base visiva utile alla stima.
              Il drone permette di acquisire immagini dell'intero cumulo, riducendo
              i limiti di una valutazione fatta solo da terra.
            </p>

            <p className="leading-8 text-gray-300">
              Il livello di precisione dipende da molti fattori: attrezzatura,
              metodo di acquisizione, punti di riferimento, software utilizzato,
              qualità delle immagini e competenza del professionista. Per questo è
              importante spiegare bene l'obiettivo del rilievo quando pubblichi la
              richiesta.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Monitoraggio periodico dei volumi
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un rilievo volumetrico può essere svolto una sola volta oppure
              ripetuto con cadenza periodica. Nei cantieri, nelle cave e nei
              depositi, confrontare più rilievi nel tempo può aiutare a capire
              quanto materiale è stato movimentato, quali aree sono cambiate e come
              si è evoluta la superficie.
            </p>

            <p className="leading-8 text-gray-300">
              Questo approccio è utile per aziende che vogliono mantenere uno
              storico visivo, creare report interni, documentare lavorazioni,
              verificare avanzamenti o avere una base più ordinata per confronti e
              controlli successivi.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per calcolo volumi e rilievi tecnici
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta per un rilievo volumetrico
            con drone. È utile indicare la città, la zona, il tipo di area, la
            dimensione indicativa, il materiale da rilevare e il risultato che vuoi
            ottenere. Ad esempio, puoi richiedere un rilievo di un cumulo, una
            stima volumetrica in cava, il confronto prima e dopo uno scavo, il
            monitoraggio di un cantiere o la documentazione di un deposito.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, specifica se ti serve solo
            materiale fotografico, un modello 3D, un'ortofoto, una nuvola di punti,
            un report, un confronto temporale o un'elaborazione finalizzata al
            calcolo dei volumi. È utile anche indicare se il lavoro deve essere
            svolto una volta sola o ripetuto nel tempo.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma può essere utilizzata da imprese edili, cave, aziende
            di movimento terra, studi tecnici, geometri, ingegneri, architetti,
            amministrazioni, gestori di discariche, aziende agricole e
            professionisti che hanno bisogno di documentare e analizzare superfici,
            materiali e variazioni volumetriche.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Cos'è un rilievo volumetrico con drone?
              </h3>
              <p className="text-gray-300">
                È un rilievo aereo che permette di raccogliere immagini e dati
                utili per rappresentare cumuli, scavi, riporti, depositi e aree
                modificate, con l'obiettivo di supportare il calcolo dei volumi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono calcolare volumi di cumuli?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può essere utilizzato per acquisire dati utili alla
                stima dei volumi di cumuli, materiali stoccati, inerti, terra,
                ghiaia, sabbia e altri depositi.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il rilievo volumetrico sostituisce una verifica tecnica?
              </h3>
              <p className="text-gray-300">
                Dipende dall'obiettivo del lavoro. Il drone può essere un supporto
                molto utile, ma precisione, metodo di calcolo e validità tecnica
                devono essere valutati da professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente i rilievi?
              </h3>
              <p className="text-gray-300">
                No, DroneGuard è una piattaforma che mette in contatto clienti e
                piloti drone. Il servizio viene svolto dal professionista scelto
                dal cliente.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Quanto costa pubblicare una richiesta?
              </h3>
              <p className="text-gray-300">
                Pubblicare un lavoro costa 5 crediti. I nuovi clienti ricevono 10
                crediti gratuiti dopo la registrazione, mentre i piloti ricevono
                50 crediti gratuiti.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-8 text-[#0B0F2A] md:p-10">
          <h2 className="mb-4 text-3xl font-bold">
            Trova un pilota drone per rilievi volumetrici
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare rilievi volumetrici, calcolo
            volumi, documentazione di cumuli, cave, cantieri, scavi, riporti,
            depositi, discariche e aree industriali.
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