import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo drone condominio | DroneGuard",
  description:
    "Richiedi un preventivo drone per condominio. Trova piloti drone per ispezioni visive di tetti, facciate, grondaie, terrazzi, coperture condominiali e parti comuni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Preventivi drone per condomini
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo drone condominio
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Sei un amministratore, un condomino, un tecnico o un proprietario e
            vuoi controllare dall'alto un condominio? Con DroneGuard puoi
            pubblicare una richiesta e trovare piloti drone disponibili per
            realizzare foto, video e ispezioni visive di tetti condominiali,
            facciate, grondaie, terrazzi, lastrici solari, camini, cornicioni,
            cortili interni, coperture, antenne e parti comuni difficili da
            osservare da terra. Il drone può essere utile per raccogliere
            documentazione visiva prima di una manutenzione, dopo un danno, prima
            di un intervento tecnico o per condividere materiale con condomini,
            imprese, geometri, architetti e professionisti.
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
              Tetto condominiale
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini dall'alto di coperture, tegole, guaine,
              terrazzi, lastrici solari, camini, antenne, lucernari e punti non
              visibili da strada.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Facciate e grondaie
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a documentare facciate, balconi, cornicioni,
              grondaie, pluviali, canali di scolo e parti esterne del palazzo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale per assemblea
            </h2>
            <p className="leading-7 text-gray-300">
              Foto e video possono essere condivisi con condomini, amministratori,
              tecnici o imprese per spiegare meglio la situazione prima di
              decidere un intervento.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un drone per condominio
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un condominio ci sono molte parti dell'edificio difficili da
              osservare senza strumenti, scale, ponteggi o accessi particolari.
              Tetti, coperture, grondaie, camini, terrazzi condominiali, facciate
              alte e cortili interni possono richiedere controlli complessi. Un
              drone può offrire una prima visione dall'alto e raccogliere
              immagini utili per capire meglio lo stato esterno del fabbricato.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questo tipo di servizio può essere richiesto dopo vento forte,
              grandine, pioggia intensa, infiltrazioni sospette, caduta di
              calcinacci, problemi alle grondaie, lavori programmati,
              ristrutturazioni, rifacimento facciate, manutenzione del tetto o
              verifiche periodiche delle parti comuni. Le immagini non
              sostituiscono una perizia tecnica, ma possono aiutare a documentare
              la situazione e a preparare meglio un sopralluogo professionale.
            </p>

            <p className="leading-8 text-gray-300">
              Con DroneGuard puoi pubblicare una richiesta chiara, indicare il
              condominio, la zona, il tipo di controllo richiesto e il materiale
              che desideri ricevere. I piloti drone interessati possono candidarsi
              e proporti la propria disponibilità.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Tetto condominiale</li>
              <li>✅ Lastrico solare e terrazzi comuni</li>
              <li>✅ Grondaie e pluviali</li>
              <li>✅ Facciate e balconi</li>
              <li>✅ Cornicioni e parti alte</li>
              <li>✅ Camini, antenne e lucernari</li>
              <li>✅ Cortili interni difficili da osservare</li>
              <li>✅ Danni dopo maltempo</li>
              <li>✅ Materiale per assemblea condominiale</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione drone per amministratori di condominio
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Un amministratore di condominio può avere bisogno di immagini chiare
            per spiegare ai condomini lo stato di una copertura, una grondaia
            ostruita, una facciata danneggiata o un problema visibile sulle parti
            comuni. In molti casi, durante un'assemblea, è difficile far capire
            la situazione solo con descrizioni verbali. Foto e video realizzati
            con drone possono rendere più comprensibile il problema e aiutare a
            valutare se programmare un intervento.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere usato per documentare una zona specifica del
            palazzo, per mostrare il tetto nel suo insieme, per osservare canali
            di scolo, cornicioni, balconi, terrazzi comuni o parti esterne che
            non si vedono bene dal basso. Questo materiale può essere inviato a
            una ditta, a un tecnico, a un geometra, a un architetto o a un'impresa
            prima di organizzare un sopralluogo più dettagliato.
          </p>

          <p className="leading-8 text-gray-300">
            Una richiesta ben scritta permette ai piloti di capire subito se il
            lavoro è fattibile, quale parte del condominio deve essere ripresa e
            quale tipo di materiale serve. È utile indicare numero di piani,
            presenza di cortili, strade vicine, alberi, cavi, antenne, spazi
            stretti e accessi disponibili.
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
                Crea il tuo account come cliente, amministratore, azienda,
                tecnico, professionista o pilota drone.
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
                Descrivi il condominio, la zona, la parte da controllare e il
                materiale fotografico o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al servizio richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per tetto condominiale
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il tetto condominiale è una delle parti più richieste nelle
              ispezioni con drone. Può essere difficile da raggiungere, soprattutto
              quando l'accesso è limitato, l'edificio è alto o la copertura è
              ampia. Il drone può riprendere tegole, guaine, comignoli, antenne,
              lucernari, canali di scolo e zone in cui potrebbero esserci danni
              visibili.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini possono essere utili prima di contattare una ditta, in
              caso di infiltrazioni, dopo un temporale, prima di una manutenzione
              o per avere un archivio fotografico aggiornato dello stato della
              copertura.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone per facciate condominiali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Anche le facciate possono essere osservate con drone, soprattutto
              quando ci sono parti alte, balconi, cornicioni, rivestimenti,
              distacchi visibili o zone difficili da raggiungere. Le riprese
              possono aiutare a documentare lo stato esterno del palazzo e a
              condividere il materiale con tecnici o imprese.
            </p>

            <p className="leading-8 text-gray-300">
              Se il controllo riguarda una facciata su strada, su cortile interno
              o vicino ad altri edifici, è importante scriverlo nella richiesta,
              così il pilota potrà valutare meglio la fattibilità del volo.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per grondaie, pluviali e cornicioni condominiali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            In molti condomini i problemi nascono da grondaie o pluviali ostruiti,
            rotti o difficili da raggiungere. Foglie, rami, detriti e sporco
            possono accumularsi nei canali di scolo e provocare ristagni,
            gocciolamenti o danni alle facciate. Il drone può aiutare a vedere se
            ci sono accumuli visibili e a documentare le zone più critiche prima
            di chiamare una ditta specializzata.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche i cornicioni e le parti alte dell'edificio possono richiedere
            un controllo visivo. Le immagini dall'alto o laterali possono aiutare
            a individuare parti visibilmente deteriorate, elementi spostati o
            punti che meritano un sopralluogo tecnico più approfondito.
          </p>

          <p className="leading-8 text-gray-300">
            Il drone non sostituisce verifiche tecniche, diagnosi professionali o
            interventi diretti, ma può offrire materiale fotografico utile per
            spiegare la situazione e organizzare meglio i passaggi successivi.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta drone per condominio
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica subito che si tratta di
            un condominio e specifica la città, la zona, il numero indicativo di
            piani e la parte dell'edificio da controllare. Puoi scrivere se ti
            servono immagini del tetto, della facciata, delle grondaie, dei
            terrazzi, del cortile interno, dei camini, delle antenne o di un punto
            specifico che presenta un problema.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche il motivo della richiesta: infiltrazioni, danni dopo
            maltempo, manutenzione programmata, materiale per assemblea, preventivo
            da chiedere a una ditta, verifica prima di lavori o semplice
            documentazione dello stato esterno dell'edificio. Più il contesto è
            chiaro, più il pilota potrà capire quale tipo di riprese realizzare.
          </p>

          <p className="leading-8 text-gray-300">
            È utile indicare eventuali difficoltà operative come strade strette,
            cortili piccoli, alberi, cavi, antenne, edifici vicini, presenza di
            balconi, aree trafficate o necessità di concordare l'accesso con
            l'amministratore. Sarà sempre il pilota a valutare sicurezza, privacy,
            meteo, ostacoli e normative applicabili.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta drone per condominio
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllare il tetto e le grondaie di un
              condominio di cinque piani in provincia di Roma. Dopo le ultime
              piogge alcuni condomini hanno segnalato infiltrazioni e acqua che
              scende male da un lato dell'edificio. Vorrei foto e video della
              copertura, dei pluviali e delle zone più difficili da vedere da
              terra, così da condividere il materiale con l'amministratore e una
              ditta di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo aiuta il pilota a capire subito il
            contesto, il numero di piani, il problema, le parti da riprendere e
            l'utilizzo previsto del materiale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un drone per condominio?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per condominio può variare in base alla
            città, all'altezza dell'edificio, alla complessità del volo, alla
            presenza di cortili interni, strade vicine, ostacoli, balconi, cavi,
            alberi o spazi stretti. Un controllo semplice del tetto può essere
            diverso da un'ispezione completa di facciate, grondaie, terrazzi e
            coperture.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche il materiale richiesto può incidere. Alcuni clienti vogliono
            solo foto e video grezzi, altri preferiscono immagini selezionate,
            riprese da punti precisi, video ordinati o un piccolo report visivo
            da condividere con l'assemblea o con una ditta. Per questo è utile
            scrivere bene il risultato desiderato.
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
                Posso richiedere un drone per controllare un condominio?
              </h3>
              <p className="text-gray-300">
                Sì, su DroneGuard puoi pubblicare una richiesta per controlli
                visivi con drone su tetti, facciate, grondaie, terrazzi e parti
                comuni condominiali.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Serve l'autorizzazione dell'amministratore?
              </h3>
              <p className="text-gray-300">
                In un condominio è consigliabile coordinarsi con amministratore e
                soggetti interessati, soprattutto se il controllo riguarda parti
                comuni o aree condivise.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone sostituisce una perizia tecnica?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce materiale visivo utile, ma non sostituisce
                perizie, diagnosi tecniche o verifiche specialistiche quando
                necessarie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usare le immagini in assemblea?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere foto e video da condividere con condomini,
                amministratore, tecnici o imprese, rispettando privacy e regole
                applicabili.
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
            Richiedi un preventivo drone per condominio
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controllare tetti condominiali, facciate, grondaie,
            terrazzi, coperture, cortili interni, camini, cornicioni e parti
            comuni difficili da osservare da terra.
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