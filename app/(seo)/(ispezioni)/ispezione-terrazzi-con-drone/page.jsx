import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione terrazzi con drone | DroneGuard",
  description:
    "Richiedi un'ispezione terrazzi con drone. Trova piloti drone per controlli visivi di terrazzi, lastrici solari, guaine, parapetti, scarichi, coperture e punti difficili da raggiungere."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni terrazzi con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione terrazzi con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare un terrazzo, un lastrico solare, una copertura
            piana, una guaina, un parapetto o una zona esterna difficile da
            osservare da terra? Con DroneGuard puoi pubblicare una richiesta e
            trovare piloti drone disponibili per realizzare foto e video
            dall'alto. Il drone può essere utile per proprietari, amministratori
            di condominio, imprese, tecnici e professionisti che vogliono
            ottenere una prima documentazione visiva dello stato di un terrazzo
            prima di lavori, manutenzioni, verifiche, infiltrazioni o richieste
            di preventivo.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <button className="rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400">
                Cerca un pilota drone
              </button>
            </Link>
          </div>
        </div>

        <div className="mb-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Controllo visivo terrazzi
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di terrazzi, lastrici solari, guaine, parapetti,
              pavimentazioni, scarichi, bocchettoni, muretti e zone deteriorate.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può riprendere la superficie del terrazzo da diverse
              angolazioni, mostrando punti che spesso non sono visibili dal basso.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Utile prima dei lavori
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con tecnici, imprese,
              amministratori o proprietari prima di organizzare interventi più
              approfonditi.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione terrazzi con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione terrazzi con drone può essere utile quando bisogna
              osservare lo stato di una copertura piana, di un lastrico solare o
              di una terrazza non facilmente accessibile. Da terra, spesso non è
              possibile vedere bene pavimentazioni, guaine, giunti, scarichi,
              ristagni d'acqua, parapetti, muretti, bocchettoni o punti dove
              potrebbero esserci infiltrazioni.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Il drone permette di ottenere una panoramica dall'alto e può
              realizzare foto e video utili per capire meglio la situazione. Le
              immagini possono mostrare zone sporche, parti rovinate, ristagni,
              fessure, elementi spostati, macchie, materiale accumulato,
              vegetazione spontanea o parti della copertura che meritano un
              controllo più approfondito.
            </p>

            <p className="leading-8 text-gray-300">
              Questo tipo di controllo non sostituisce una perizia tecnica, una
              verifica impermeabilizzante o una valutazione professionale, ma può
              fornire una prima documentazione visiva utile per decidere se
              chiamare un tecnico, un'impresa o un manutentore.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Terrazzi condominiali</li>
              <li>✅ Lastrici solari</li>
              <li>✅ Coperture piane</li>
              <li>✅ Guaine e impermeabilizzazioni</li>
              <li>✅ Scarichi e bocchettoni</li>
              <li>✅ Parapetti e muretti perimetrali</li>
              <li>✅ Ristagni d'acqua visibili</li>
              <li>✅ Pavimentazioni rovinate</li>
              <li>✅ Zone difficili da raggiungere</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione terrazzi per condomini, abitazioni e immobili
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei condomini, il terrazzo di copertura o il lastrico solare può
            essere una parte importante dell'edificio. Quando si presentano
            infiltrazioni, macchie nei soffitti, problemi di scarico dell'acqua o
            dubbi sullo stato della guaina, avere immagini dall'alto può aiutare
            amministratori e tecnici a comprendere meglio il contesto prima di
            programmare un sopralluogo diretto.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Per una casa privata, una villa o un immobile in vendita, il drone può
            documentare lo stato del terrazzo, del solarium, della copertura
            piana o delle aree esterne superiori. Le immagini possono essere utili
            prima di una ristrutturazione, di una manutenzione, di una
            compravendita o di una valutazione preliminare da parte di un
            professionista.
          </p>

          <p className="leading-8 text-gray-300">
            Anche imprese edili, geometri, architetti, amministratori e
            manutentori possono usare questo materiale per spiegare meglio un
            problema, richiedere preventivi più chiari o preparare un intervento
            con maggiore consapevolezza.
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
                Crea il tuo account come cliente, amministratore, proprietario,
                tecnico, azienda o pilota drone.
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
                Descrivi terrazzo, edificio, zona, problema visibile e tipo di
                foto o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Ricevi candidature dai piloti drone interessati e scegli il
                professionista più adatto al servizio richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di salire in copertura
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Prima di organizzare accessi in quota, sopralluoghi complessi o
              interventi sulla copertura, può essere utile ottenere una visione
              generale dall'alto. Il drone può mostrare lo stato del terrazzo e
              aiutare a individuare le zone che meritano maggiore attenzione.
            </p>

            <p className="leading-8 text-gray-300">
              Questa documentazione preliminare può essere utile per spiegare il
              problema a un tecnico, a un'impresa o a un amministratore, rendendo
              più chiara la richiesta di intervento.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Foto utili per infiltrazioni e manutenzioni
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              In caso di infiltrazioni o sospetti problemi di impermeabilizzazione,
              il drone può documentare scarichi ostruiti, ristagni, punti bassi,
              zone sporche, guaine rovinate o elementi esterni visibili. Il
              materiale può poi essere mostrato al professionista incaricato.
            </p>

            <p className="leading-8 text-gray-300">
              Le immagini non danno una diagnosi tecnica, ma possono rendere più
              semplice capire dove guardare e quali zone approfondire durante un
              controllo professionale.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione terrazzi
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            condominio, villa, casa indipendente, palazzo, capannone, hotel o
            struttura commerciale. Scrivi la città, la zona, il numero indicativo
            di piani e il tipo di terrazzo da controllare. Specifica se si tratta
            di lastrico solare, terrazza praticabile, copertura piana, area
            condominiale o terrazzo privato.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche cosa vuoi documentare: guaina, pavimentazione, scarichi,
            bocchettoni, parapetti, ristagni, crepe, macchie, infiltrazioni,
            zone deteriorate o semplice stato generale. Puoi chiedere foto
            panoramiche, video dall'alto, riprese ravvicinate o immagini dei
            punti più importanti.
          </p>

          <p className="leading-8 text-gray-300">
            Ogni volo deve rispettare sicurezza, privacy, condizioni meteo,
            ostacoli, presenza di persone, spazi disponibili e normative
            applicabili. Sarà il pilota a valutare fattibilità, modalità e limiti
            del servizio.
          </p>
        </div>

        <div className="mb-14 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-3xl font-bold">
            Esempio di richiesta per ispezione terrazzo con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva di un terrazzo
              condominiale in provincia di Roma. Vorrei foto e video del lastrico
              solare, degli scarichi e delle zone dove si vedono ristagni d'acqua.
              Il materiale servirà all'amministratore e al tecnico per valutare
              un possibile intervento di manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di terrazzo, il
            problema da documentare, il materiale richiesto e l'utilizzo finale
            delle immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione terrazzi con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione terrazzi con drone può variare in base alla
            zona, alla distanza del pilota, all'altezza dell'edificio, alla
            dimensione del terrazzo, alla complessità del volo e al tipo di
            materiale richiesto. Un controllo rapido di un piccolo terrazzo è
            diverso da una documentazione completa di un lastrico solare
            condominiale molto esteso.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate, riprese da più angolazioni, video panoramici o una raccolta
            dei punti più importanti da condividere con un tecnico.
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
                Posso usare il drone per controllare un terrazzo?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dall'alto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone trova la causa di un'infiltrazione?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. La causa di
                un'infiltrazione deve essere valutata da un tecnico o da un
                professionista qualificato.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Si possono controllare guaine e scarichi?
              </h3>
              <p className="text-gray-300">
                Sì, se visibili dall'esterno e se il volo è fattibile, il pilota
                può documentare guaine, scarichi, bocchettoni e punti critici.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile per un amministratore di condominio?
              </h3>
              <p className="text-gray-300">
                Sì, può essere utile per raccogliere immagini da mostrare a
                condomini, tecnici, imprese o manutentori.
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
                DroneGuard esegue direttamente l'ispezione?
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
            Trova un pilota drone per ispezionare terrazzi
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di terrazzi, lastrici solari,
            coperture piane, guaine, scarichi, parapetti, ristagni d'acqua e
            punti difficili da osservare da terra.
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