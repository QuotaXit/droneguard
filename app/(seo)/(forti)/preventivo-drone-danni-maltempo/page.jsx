import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Preventivo drone danni maltempo | DroneGuard",
  description:
    "Richiedi un preventivo drone per danni da maltempo. Trova piloti drone per foto, video e ispezioni visive dopo vento, grandine, pioggia, temporali e caduta rami."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Documentazione danni dopo maltempo
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Preventivo drone danni maltempo
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Dopo vento forte, grandine, pioggia intensa, temporali, caduta rami o
            eventi atmosferici importanti, può essere difficile controllare subito
            tetti, grondaie, coperture, pannelli fotovoltaici, facciate, camini,
            capannoni, terrazzi e strutture alte. Con DroneGuard puoi pubblicare
            una richiesta e trovare piloti drone disponibili per realizzare foto,
            video e ispezioni visive dall'alto, così da documentare eventuali
            danni visibili e raccogliere materiale utile da condividere con
            tecnici, imprese, amministratori, manutentori o professionisti.
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
              Danni al tetto
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi foto e video dall'alto per osservare tegole spostate,
              guaine, camini, lucernari, antenne, grondaie e coperture dopo un
              evento atmosferico.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Dopo grandine o vento
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può aiutare a documentare danni visibili su immobili,
              capannoni, pannelli fotovoltaici, facciate, terrazzi e strutture
              esterne.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Materiale da condividere
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere inviate a una ditta, un tecnico, un
              amministratore, un manutentore o un professionista prima di un
              sopralluogo diretto.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un drone dopo il maltempo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo un temporale forte, un colpo di vento, una grandinata o una
              pioggia intensa, non sempre è facile capire se una struttura ha
              subito danni. Da terra si possono vedere solo alcune parti
              dell'edificio, mentre tetti, coperture, grondaie, terrazzi,
              pannelli fotovoltaici e camini spesso restano nascosti o difficili
              da controllare. Il drone può offrire una prima visione dall'alto e
              aiutare a documentare lo stato esterno della struttura.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Questo tipo di servizio può essere richiesto da privati,
              amministratori di condominio, aziende, imprese edili, tecnici,
              proprietari di capannoni, gestori di immobili, manutentori e
              professionisti. Le immagini raccolte possono mostrare tegole
              spostate, rami caduti, grondaie ostruite, lucernari rotti, parti
              sollevate, pannelli danneggiati, coperture segnate, accumuli di
              materiale o zone che richiedono un controllo più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              Il drone non sostituisce una perizia, una diagnosi tecnica o un
              intervento professionale, ma può fornire materiale visivo utile per
              capire meglio la situazione e decidere se chiamare una ditta, un
              tecnico o un manutentore.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Tetti dopo vento forte</li>
              <li>✅ Coperture dopo grandine</li>
              <li>✅ Grondaie dopo pioggia intensa</li>
              <li>✅ Camini e comignoli</li>
              <li>✅ Terrazzi e lastrici solari</li>
              <li>✅ Pannelli fotovoltaici</li>
              <li>✅ Capannoni industriali</li>
              <li>✅ Facciate e cornicioni</li>
              <li>✅ Rami caduti e danni visibili</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per controllare il tetto dopo vento o temporale
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il tetto è una delle parti più esposte al maltempo. Vento forte,
            pioggia, grandine e caduta di rami possono spostare tegole, danneggiare
            coperture, ostruire grondaie, rovinare camini, colpire lucernari o
            creare situazioni difficili da vedere da terra. Salire sul tetto
            subito dopo un evento atmosferico può essere pericoloso e richiedere
            attrezzatura adeguata. Il drone può aiutare a ottenere una prima
            documentazione visiva senza accedere direttamente alla copertura.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Le immagini dall'alto possono essere utili per capire se ci sono
            elementi fuori posto, zone scoperte, accumuli di foglie, rami caduti,
            parti rotte o punti che meritano una verifica da parte di un tecnico.
            Un proprietario può usare il materiale per contattare una ditta, un
            amministratore può condividerlo con i condomini e un'azienda può
            allegarlo a una valutazione interna prima di organizzare un intervento.
          </p>

          <p className="leading-8 text-gray-300">
            Quando pubblichi la richiesta, indica se il danno riguarda un tetto
            privato, un condominio, un capannone, una villa, una struttura
            agricola o un edificio commerciale. Specifica anche il tipo di evento:
            vento, grandine, pioggia, temporale, caduta rami o infiltrazione
            sospetta.
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
                Crea il tuo account come cliente, proprietario, azienda,
                amministratore, tecnico o pilota drone.
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
                3. Pubblica il danno
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi cosa è successo, la zona, la struttura da controllare e
                il materiale fotografico o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Ricevi candidature
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                I piloti interessati possono candidarsi e tu puoi scegliere il
                professionista più adatto al controllo richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone dopo grandine
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              La grandine può colpire tetti, lucernari, pannelli fotovoltaici,
              coperture industriali, terrazzi, auto, strutture esterne e materiali
              esposti. In alcuni casi i danni non sono immediatamente visibili da
              terra, soprattutto se riguardano parti alte o ampie superfici. Il
              drone può aiutare a raccogliere immagini dall'alto e documentare le
              zone più esposte.
            </p>

            <p className="leading-8 text-gray-300">
              Se devi controllare pannelli solari, lucernari, tetti in lamiera,
              guaine o coperture di capannoni, specifica nella richiesta quali
              elementi devono essere ripresi e se ti servono immagini generali o
              dettagli più ravvicinati.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Drone dopo vento forte
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Il vento forte può spostare tegole, sollevare parti di copertura,
              piegare antenne, rompere rami, danneggiare grondaie o creare
              situazioni difficili da vedere senza una visuale dall'alto. Il drone
              può essere richiesto per osservare tetti, giardini, cortili, aree
              esterne e strutture colpite dal vento.
            </p>

            <p className="leading-8 text-gray-300">
              Le foto e i video possono essere utili prima di chiamare un
              muratore, un lattoniere, un'impresa di manutenzione, un tecnico o un
              professionista incaricato di verificare il danno.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Drone per grondaie, facciate e pannelli fotovoltaici dopo maltempo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Dopo pioggia intensa, le grondaie possono riempirsi di foglie, terra,
            rami e detriti portati dal vento. Se l'acqua defluisce male, possono
            comparire gocciolamenti, macchie, ristagni o infiltrazioni. Il drone
            può aiutare a vedere dall'alto se ci sono accumuli visibili, canali di
            scolo ostruiti o parti da far controllare a una ditta specializzata.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche facciate, cornicioni, balconi e parti alte dell'edificio possono
            essere osservati con drone, soprattutto se si sospettano danni,
            distacchi visibili o elementi spostati. Nei condomini, questo
            materiale può essere utile da condividere con l'amministratore o con i
            condomini prima di decidere un intervento.
          </p>

          <p className="leading-8 text-gray-300">
            Se l'edificio ha pannelli fotovoltaici, il drone può riprendere
            l'impianto dall'alto e documentare eventuali elementi visibili da
            controllare. Per verifiche tecniche, termografie o analisi specifiche,
            è importante indicarlo nella richiesta, così potranno candidarsi
            piloti con attrezzatura adatta.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta drone per danni da maltempo
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, descrivi cosa è successo:
            grandine, vento forte, pioggia intensa, temporale, caduta rami,
            infiltrazione sospetta o danno visibile. Indica il tipo di edificio:
            villetta, condominio, capannone, azienda, casa indipendente, struttura
            agricola, edificio commerciale o immobile in ristrutturazione.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Specifica quali parti devono essere controllate: tetto, grondaie,
            camini, pannelli fotovoltaici, terrazzi, facciata, lucernari,
            copertura industriale, giardino, cortile o area esterna. Puoi chiedere
            foto, video, riprese ravvicinate, panoramiche generali, materiale
            grezzo o una selezione ordinata di immagini da inviare a un tecnico o
            a una ditta.
          </p>

          <p className="leading-8 text-gray-300">
            È utile indicare anche la città, la zona, l'altezza indicativa
            dell'edificio, la presenza di cortili, alberi, cavi, antenne, strade
            vicine o spazi stretti. Sarà il pilota a valutare la fattibilità del
            volo in base a sicurezza, privacy, meteo, ostacoli e normative
            applicabili.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per danni da maltempo
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per controllare il tetto di una villetta
              dopo il forte vento e la grandine. Mi servono foto e video della
              copertura, delle grondaie, del camino e dei pannelli fotovoltaici
              per capire se ci sono danni visibili. Vorrei usare il materiale per
              mostrarlo a una ditta di manutenzione e decidere se organizzare un
              sopralluogo tecnico.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta di questo tipo aiuta il pilota a capire subito il tipo
            di danno, il luogo, le parti da riprendere e l'utilizzo previsto del
            materiale.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un drone per danni da maltempo?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un servizio drone per documentare danni da maltempo può
            variare in base alla città, al tipo di struttura, all'altezza
            dell'edificio, alla complessità del volo, alla durata del lavoro e al
            materiale richiesto. Un controllo semplice di un tetto privato può
            essere diverso da un'ispezione su un condominio, un capannone
            industriale, una copertura con pannelli fotovoltaici o una struttura
            molto estesa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere. Alcuni clienti chiedono solo foto e
            video grezzi, altri vogliono immagini selezionate, riprese più
            ravvicinate, video ordinati o un piccolo report fotografico da
            condividere con tecnici, imprese, amministratori o professionisti.
            Più la richiesta è dettagliata, più sarà facile ricevere candidature
            adatte.
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
                Posso usare il drone dopo una grandinata?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta per controllare tetti,
                coperture, pannelli fotovoltaici, lucernari e strutture colpite
                dalla grandine.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone certifica il danno?
              </h3>
              <p className="text-gray-300">
                No, il drone può fornire materiale visivo, ma certificazioni,
                perizie e valutazioni tecniche devono essere fatte da
                professionisti abilitati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso chiedere foto delle grondaie?
              </h3>
              <p className="text-gray-300">
                Sì, puoi richiedere immagini di grondaie, pluviali, canali di
                scolo, bordi del tetto e parti alte dell'edificio.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Posso usarlo per un condominio?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta per condomini, ville, capannoni,
                aziende, case private e strutture industriali.
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
            Richiedi un preventivo drone per danni da maltempo
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per documentare danni visibili dopo vento, grandine,
            pioggia intensa, temporali, caduta rami e maltempo su tetti,
            coperture, grondaie, pannelli fotovoltaici, condomini, capannoni,
            facciate e strutture difficili da osservare da terra.
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