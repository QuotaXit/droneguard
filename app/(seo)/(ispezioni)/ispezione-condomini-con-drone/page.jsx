import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione condomini con drone | DroneGuard",
  description:
    "Trova piloti drone per ispezione condomini, tetti, facciate, grondaie, terrazzi, balconi, coperture e documentazione fotografica condominiale."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            DroneGuard per ispezioni condominiali
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione condomini con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            L'ispezione condomini con drone è una soluzione utile per documentare
            visivamente tetti, facciate, balconi, terrazzi, grondaie, lastrici
            solari, antenne, camini, cornicioni, pluviali e parti comuni difficili
            da osservare da terra. In molti edifici condominiali, capire lo stato
            reale delle parti alte può essere complicato senza ponteggi, scale,
            piattaforme o sopralluoghi più invasivi. Le immagini aeree permettono
            di ottenere una prima panoramica chiara, utile per amministratori,
            condomini, tecnici, imprese di manutenzione, assicurazioni e
            professionisti incaricati. Con DroneGuard puoi trovare piloti drone
            disponibili per realizzare foto, video e documentazione visiva di
            edifici condominiali in modo semplice e organizzato.
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
              Controllo tetti e lastrici
            </h2>
            <p className="text-gray-300">
              Il drone può riprendere coperture, terrazzi condominiali, guaine,
              tegole, camini, antenne e punti difficili da vedere dal basso.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto di facciate e balconi
            </h2>
            <p className="text-gray-300">
              Le immagini possono aiutare a documentare frontalini, cornicioni,
              intonaci, balconi, parti alte e zone che richiedono manutenzione.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale per assemblee
            </h2>
            <p className="text-gray-300">
              Foto e video possono essere mostrati ai condomini per spiegare
              meglio problemi, preventivi, interventi e manutenzioni da valutare.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Perché ispezionare un condominio con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In un condominio, molte delle parti più importanti da controllare
              non sono facilmente accessibili. Tetti, terrazzi, guaine, grondaie,
              cornicioni, balconi alti, facciate interne, antenne, canne fumarie e
              coperture possono presentare problemi visibili solo da vicino o da
              una prospettiva elevata. Il drone consente di acquisire immagini e
              video dall'alto, offrendo una prima documentazione utile prima di
              programmare un sopralluogo tecnico più approfondito.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Per un amministratore, avere immagini chiare può rendere più facile
              comunicare con i condomini. Spiegare una guaina danneggiata, una
              grondaia ostruita, un cornicione rovinato o un problema su un tetto
              è molto più semplice quando si possono mostrare foto reali. Questo
              può aiutare nelle assemblee, nelle richieste di preventivo, nelle
              comunicazioni con tecnici e imprese e nella gestione delle
              manutenzioni ordinarie o straordinarie.
            </p>

            <p className="leading-8 text-gray-300">
              L'ispezione con drone non sostituisce una perizia tecnica o una
              valutazione professionale, ma può essere un supporto molto utile per
              capire quali parti dell'edificio richiedono attenzione. Attraverso
              DroneGuard puoi pubblicare una richiesta specifica e ricevere
              candidature da piloti drone disponibili nella zona del condominio.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa si può controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Tetti, coperture e lastrici solari</li>
              <li>✅ Guaine, tegole, lucernari e camini</li>
              <li>✅ Grondaie, pluviali e canali di scolo</li>
              <li>✅ Facciate, balconi e frontalini</li>
              <li>✅ Cornicioni, parti alte e zone difficili</li>
              <li>✅ Antenne, pannelli e impianti sul tetto</li>
              <li>✅ Danni visibili dopo vento, pioggia o grandine</li>
              <li>✅ Stato generale delle parti comuni esterne</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezioni condominiali per tetti, facciate e grondaie
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Uno degli utilizzi più richiesti riguarda il controllo dei tetti
            condominiali. Una copertura può presentare tegole spostate, guaine
            rovinate, punti di ristagno, elementi deteriorati, camini danneggiati
            o accumuli di sporco nelle zone di scolo. Dal basso questi problemi
            possono essere quasi invisibili, mentre una ripresa con drone può
            fornire una visione più completa e utile per valutare eventuali
            interventi.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche le facciate possono essere documentate in modo più chiaro. Le
            immagini possono mostrare balconi, frontalini, intonaci, cornicioni,
            giunti, pluviali e parti alte dell'edificio. Questo materiale può
            essere utile per capire se richiedere un sopralluogo tecnico, se
            contattare un'impresa o se preparare una documentazione da presentare
            ai condomini.
          </p>

          <p className="leading-8 text-gray-300">
            Le grondaie e i pluviali sono un altro punto importante. Se ostruiti o
            danneggiati, possono causare infiltrazioni, macchie sulle facciate,
            ristagni e problemi di umidità. Il drone può aiutare a verificare la
            presenza di foglie, rami, detriti, deformazioni o tratti scollegati,
            fornendo immagini utili per programmare pulizie e manutenzioni.
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
                Crea gratuitamente il tuo account come cliente, amministratore,
                tecnico o pilota drone.
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
                Descrivi il condominio, la zona, il numero di piani e le parti da
                controllare.
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
              Documentazione per assemblee condominiali
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In molte assemblee condominiali è difficile far comprendere
              l'urgenza o l'importanza di un intervento, soprattutto quando il
              problema riguarda parti che i condomini non vedono ogni giorno.
              Mostrare immagini reali del tetto, della facciata o delle grondaie
              può rendere la discussione più concreta e aiutare tutti a capire
              meglio la situazione.
            </p>

            <p className="leading-8 text-gray-300">
              Le foto e i video possono essere allegati a comunicazioni, condivisi
              con tecnici, inviati a imprese per richiedere preventivi o utilizzati
              come archivio dello stato dell'edificio prima e dopo un intervento.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Controlli dopo maltempo o segnalazioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo vento forte, grandine, piogge intense o temporali, un
              condominio può avere bisogno di controllare rapidamente coperture,
              antenne, camini, grondaie e parti alte dell'edificio. Il drone può
              raccogliere immagini utili per capire se ci sono danni visibili o
              situazioni da approfondire.
            </p>

            <p className="leading-8 text-gray-300">
              Anche dopo segnalazioni dei condomini, come infiltrazioni, macchie,
              rumori sul tetto o caduta di materiali, una ripresa aerea può aiutare
              l'amministratore a documentare la situazione prima di organizzare
              un intervento più specifico.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Trova piloti drone per ispezioni condominiali
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Con DroneGuard puoi pubblicare una richiesta per ispezionare un
            condominio con drone. È utile indicare la città, la zona, il numero di
            piani, il tipo di edificio, le parti da controllare e il risultato
            desiderato. Puoi richiedere fotografie, video, riprese panoramiche,
            immagini ravvicinate di tetti, grondaie, facciate, balconi o
            documentazione da condividere con un tecnico.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Una descrizione chiara permette ai piloti drone di valutare meglio il
            lavoro. È importante specificare se ci sono cortili interni, spazi
            stretti, alberi, cavi, antenne, vincoli di orario o necessità di
            coordinamento con l'amministratore. Ogni condominio è diverso, quindi
            più informazioni inserisci, più sarà facile ricevere candidature
            adatte.
          </p>

          <p className="leading-8 text-gray-300">
            La piattaforma è utile per amministratori di condominio, studi di
            amministrazione, condomini, proprietari, imprese edili, tecnici,
            geometri, architetti e professionisti che hanno bisogno di una
            documentazione visiva ordinata prima di programmare lavori o
            manutenzioni.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-8 text-3xl font-bold">
            Domande frequenti
          </h2>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone può controllare il tetto di un condominio?
              </h3>
              <p className="text-gray-300">
                Sì, il drone può acquisire immagini e video della copertura,
                aiutando a documentare tegole, guaine, grondaie, camini, antenne e
                parti difficili da vedere da terra.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Le immagini possono essere usate in assemblea?
              </h3>
              <p className="text-gray-300">
                Sì, foto e video possono aiutare l'amministratore a spiegare
                meglio la situazione ai condomini e a supportare la discussione su
                manutenzioni, preventivi o lavori da approvare.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                L'ispezione con drone sostituisce una perizia?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Valutazioni tecniche,
                perizie e decisioni sugli interventi devono essere svolte da
                professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                DroneGuard esegue direttamente le ispezioni?
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
            Trova un pilota drone per ispezionare un condominio
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e ricevi candidature
            da piloti drone interessati a realizzare ispezioni visive di condomini,
            tetti, facciate, balconi, terrazzi, grondaie, pluviali, cornicioni e
            parti comuni esterne.
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