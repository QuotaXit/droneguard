import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Drone per corsi d'acqua | DroneGuard",
  description:
    "Trova piloti drone per corsi d'acqua, fiumi, torrenti, canali, fossi, argini, aree allagate, monitoraggio visivo e documentazione ambientale."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Servizi drone per ambiente e territorio
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Drone per corsi d'acqua
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi documentare un corso d'acqua, un fiume, un torrente, un canale,
            un fosso, un argine, una zona allagata, una sponda danneggiata, un
            tratto ostruito dalla vegetazione o un'area difficile da raggiungere
            da terra? Con DroneGuard puoi pubblicare una richiesta e trovare piloti
            drone disponibili per realizzare foto aeree, video di sopralluogo,
            immagini dall'alto e documentazione visiva utile a tecnici,
            proprietari, agronomi, imprese, amministratori, enti locali, consorzi,
            consulenti e professionisti che devono osservare meglio lo stato
            dell'area.
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
              Fiumi e torrenti
            </h2>
            <p className="text-gray-300">
              Richiedi foto e video dall'alto per documentare sponde, argini,
              vegetazione, erosioni visibili, accessi e tratti difficili da
              osservare da terra.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Fossi e canali
            </h2>
            <p className="text-gray-300">
              Ottieni immagini di fossi, canali di scolo, cunette, aree agricole,
              tombini, attraversamenti, ristagni e punti ostruiti.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Documentazione ambientale
            </h2>
            <p className="text-gray-300">
              Usa foto e video per report, comunicazioni, richieste di intervento,
              archivi, sopralluoghi e confronto con tecnici e imprese.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché usare il drone per corsi d'acqua
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Fiumi, torrenti, canali, fossi e argini possono attraversare aree
              agricole, zone urbane, terreni privati, strade, parchi, scarpate e
              punti difficili da raggiungere. In molti casi osservare un corso
              d'acqua solo da terra non permette di capire bene la situazione
              complessiva, soprattutto quando ci sono vegetazione fitta, sponde
              ripide, aree fangose, tratti allagati o accessi limitati.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può offrire una visione dall'alto utile per documentare lo
              stato del tratto interessato, la presenza di ostacoli visibili, la
              vegetazione lungo le sponde, eventuali erosioni, ristagni, accumuli,
              zone danneggiate, aree allagate, attraversamenti, ponticelli, argini
              e punti che potrebbero richiedere un controllo più approfondito da
              parte di tecnici o imprese.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini drone non sostituiscono rilievi idraulici, perizie,
              verifiche tecniche, autorizzazioni o valutazioni professionali. Sono
              però un supporto visivo utile per descrivere meglio lo stato dei
              luoghi e condividere la situazione con chi deve valutarla.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Servizi drone per corsi d'acqua
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Foto aeree di fiumi, torrenti e canali</li>
              <li>✅ Video di sopralluogo su fossi e argini</li>
              <li>✅ Riprese di sponde, vegetazione e accessi</li>
              <li>✅ Documentazione visiva di aree allagate</li>
              <li>✅ Immagini per tecnici, proprietari ed enti</li>
              <li>✅ Foto prima e dopo interventi di pulizia</li>
              <li>✅ Monitoraggio visivo periodico del tratto</li>
              <li>✅ Riprese di ponticelli, tombini e attraversamenti</li>
              <li>✅ Materiale per report e richieste di intervento</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per argini, sponde e aree allagate
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Gli argini e le sponde dei corsi d'acqua possono cambiare nel tempo a
            causa di piogge, piene, erosioni, manutenzioni, vegetazione, depositi
            di materiale e interventi sul territorio. Il drone permette di
            osservare il tratto dall'alto e raccogliere immagini che mostrano
            meglio il rapporto tra acqua, terreno, strade, proprietà, recinzioni,
            coltivazioni e strutture vicine.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            In caso di allagamenti, ristagni o danni visibili, le riprese aeree
            possono aiutare a documentare l'estensione dell'area interessata, le
            zone più colpite, i punti di accumulo, le vie di accesso e le parti che
            richiedono attenzione. Questo materiale può essere utile per
            proprietari, tecnici, imprese, amministratori, consorzi o enti che
            devono capire meglio la situazione.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni sopralluogo deve essere organizzato rispettando sicurezza,
            privacy, regole di volo, condizioni meteo, eventuali vincoli dell'area
            e presenza di persone, animali o infrastrutture vicine.
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
                Crea il tuo account come proprietario, tecnico, impresa,
                amministratore, consulente, ente, azienda agricola o pilota drone.
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
                Descrivi il corso d'acqua, la città, il tratto da riprendere, il
                problema visibile e il materiale che vuoi ottenere.
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
              Documentazione per tecnici, imprese ed enti
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando bisogna spiegare lo stato di un fosso, un canale o un tratto
              di fiume, avere immagini chiare può semplificare molto il primo
              confronto. Le foto aeree possono mostrare l'estensione del tratto,
              la posizione dei punti ostruiti, l'accessibilità, la presenza di
              vegetazione, l'eventuale vicinanza a strade, abitazioni, terreni,
              recinzioni o infrastrutture.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini non sono una perizia, ma possono aiutare tecnici,
              imprese, proprietari ed enti a capire meglio cosa osservare durante
              un sopralluogo e quali zone meritano maggiore attenzione.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Riprese prima e dopo interventi di pulizia
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone può essere richiesto prima e dopo un intervento di pulizia
              o manutenzione. Prima dei lavori, le immagini documentano lo stato
              iniziale del corso d'acqua, la presenza di vegetazione, accumuli,
              ostacoli o zone allagate. Dopo l'intervento, le riprese mostrano il
              tratto ripulito, gli argini sistemati o le aree rese più accessibili.
            </p>

            <p className="leading-8 text-gray-300">
              Questo confronto può essere utile per proprietari, imprese,
              amministratori, consorzi, enti e soggetti che devono conservare una
              memoria visiva del lavoro svolto.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per fossi, canali agricoli e scoli
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In molte aree agricole o rurali, fossi e canali di scolo sono
            fondamentali per la gestione dell'acqua. Quando un fosso è ostruito,
            invaso dalla vegetazione, danneggiato o poco accessibile, le immagini
            con drone possono aiutare a mostrare meglio il problema e la sua
            posizione rispetto a terreni, strade, coltivazioni, recinzioni,
            proprietà e accessi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le riprese possono essere utili per documentare ristagni, allagamenti,
            canali chiusi, punti dove l'acqua non defluisce, attraversamenti,
            tombini, cunette, arginelli e aree dove potrebbe essere necessario un
            intervento di manutenzione o pulizia.
          </p>

          <p className="leading-8 text-gray-300">
            Su DroneGuard puoi richiedere immagini generali dell'intero tratto o
            dettagli di punti specifici, indicando nella richiesta se il materiale
            serve per un tecnico, un'impresa, un consorzio, un amministratore o un
            proprietario.
          </p>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Fiumi e torrenti
            </h2>
            <p className="text-gray-300">
              Riprese per tratti fluviali, sponde, argini, vegetazione, erosioni
              visibili, ponticelli, accessi e aree vicine al corso d'acqua.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Canali e fossi
            </h2>
            <p className="text-gray-300">
              Foto e video di canali agricoli, fossi di scolo, cunette, tombini,
              ristagni, attraversamenti, terreni e zone di deflusso.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Aree allagate
            </h2>
            <p className="text-gray-300">
              Materiale visivo per documentare allagamenti, accumuli d'acqua,
              danni visibili, terreni colpiti, strade e zone difficili da
              raggiungere.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Cosa scrivere nella richiesta
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise è importante descrivere bene il
            corso d'acqua e il tipo di immagini che ti servono. Puoi indicare la
            città, la zona, se si tratta di un fiume, torrente, fosso, canale,
            argine, scolo agricolo, area allagata o tratto da documentare prima di
            un intervento.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            È utile specificare se vuoi foto generali, video panoramici, dettagli
            di punti ostruiti, immagini di argini, documentazione di allagamenti,
            riprese prima e dopo la pulizia, materiale per un tecnico, immagini
            per un'impresa o documentazione da condividere con un ente.
          </p>

          <p className="leading-8 text-gray-300">
            Puoi aggiungere informazioni pratiche come accesso al terreno, presenza
            di vegetazione fitta, aree fangose, punti non sicuri, zona di decollo,
            referente sul posto, orari preferiti, eventuali limitazioni e modalità
            di consegna dei file.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per corso d'acqua
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per realizzare foto e video di un fosso che
              attraversa un terreno agricolo. Mi servono riprese dall'alto del
              tratto interessato, della vegetazione, dei punti dove l'acqua ristagna,
              dell'accesso dalla strada e della zona dove potrebbe essere necessario
              un intervento di pulizia. Il materiale verrà condiviso con un tecnico
              e con un'impresa.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così permette al pilota di capire subito il tipo di area,
            le zone da riprendere, la finalità del servizio e le attenzioni
            operative necessarie.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un servizio drone per corsi d'acqua?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo può variare in base alla città, alla distanza, alla
            raggiungibilità dell'area, alla durata delle riprese, alla complessità
            del luogo, alla presenza di vegetazione, acqua, fango, zone non sicure,
            punti da documentare separatamente e al tipo di materiale finale
            richiesto. Una semplice documentazione fotografica ha un costo diverso
            rispetto a un servizio con video, più punti di ripresa o monitoraggio
            periodico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna incide sul prezzo. Alcuni clienti chiedono solo file
            grezzi, altri preferiscono foto selezionate, video brevi, cartelle
            ordinate, immagini divise per area o materiale pronto da allegare a
            email, report, richieste di intervento o documenti da condividere con
            tecnici, imprese ed enti.
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
                Posso usare il drone per documentare un fosso o un canale?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video dall'alto per documentare fossi,
                canali, argini, sponde, ristagni, vegetazione, tombini e tratti
                difficili da osservare da terra.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce una verifica tecnica?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce solo documentazione visiva. Per valutazioni
                idrauliche, perizie, autorizzazioni e decisioni tecniche servono
                professionisti competenti.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso richiedere foto prima e dopo la pulizia?
              </h3>
              <p className="text-gray-300">
                Sì, puoi indicare nella richiesta se vuoi documentare lo stato
                iniziale del corso d'acqua e poi il risultato dopo un intervento di
                pulizia o manutenzione.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si può volare vicino all'acqua?
              </h3>
              <p className="text-gray-300">
                Dipende dalle condizioni del luogo. Il pilota deve valutare
                sicurezza, meteo, punto di decollo, distanza, autorizzazioni,
                presenza di persone e limiti operativi prima del servizio.
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
            Trova un pilota drone per corsi d'acqua
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per realizzare foto aeree, video, sopralluoghi visivi,
            documentazione di corsi d'acqua, fiumi, torrenti, fossi, canali,
            argini, sponde, aree allagate, terreni agricoli e zone difficili da
            osservare da terra.
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