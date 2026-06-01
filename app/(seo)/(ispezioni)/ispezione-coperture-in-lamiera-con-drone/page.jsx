import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  title: "Ispezione coperture in lamiera con drone | DroneGuard",
  description:
    "Richiedi un'ispezione coperture in lamiera con drone. Trova piloti drone per controlli visivi di tetti metallici, lamiere, capannoni, gronde, infiltrazioni e danni."
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            Ispezioni coperture in lamiera con drone
          </p>

          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Ispezione coperture in lamiera con drone
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            Devi controllare una copertura in lamiera, un tetto metallico, una
            lamiera grecata, una copertura industriale, un capannone, una tettoia
            o una struttura esterna difficile da raggiungere? Con DroneGuard puoi
            pubblicare una richiesta e trovare piloti drone disponibili per
            realizzare foto e video dall'alto. Il drone può essere utile per
            aziende, proprietari di immobili, amministratori, tecnici, imprese,
            manutentori e professionisti che vogliono ottenere una prima
            documentazione visiva dello stato della copertura prima di lavori,
            riparazioni, pulizie, manutenzioni o richieste di preventivo.
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
              Controllo tetti metallici
            </h2>
            <p className="leading-7 text-gray-300">
              Richiedi immagini di lamiere, coperture grecate, tetti metallici,
              pannelli, colmi, giunti, scossaline, fissaggi, gronde e pluviali.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Foto e video dall'alto
            </h2>
            <p className="leading-7 text-gray-300">
              Il drone può documentare superfici estese e punti difficili da
              osservare da terra, mostrando meglio danni, deformazioni e zone
              sospette.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="mb-3 text-xl font-semibold">
              Prima della manutenzione
            </h2>
            <p className="leading-7 text-gray-300">
              Le immagini possono essere condivise con imprese, lattonieri,
              tecnici, manutentori, proprietari o responsabili aziendali.
            </p>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold">
              Quando richiedere un'ispezione coperture in lamiera con drone
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Un'ispezione con drone può essere utile quando bisogna controllare
              una copertura metallica senza salire direttamente sul tetto.
              Lamiere grecate, coperture industriali, tettoie, pensiline,
              capannoni, depositi, magazzini e strutture produttive possono
              presentare deformazioni, viti allentate, giunti aperti, scossaline
              spostate, punti arrugginiti, infiltrazioni, ristagni d'acqua o
              danni provocati da vento, grandine e pioggia intensa.
            </p>

            <p className="mb-5 leading-8 text-gray-300">
              Da terra spesso non è possibile vedere bene la parte superiore
              della copertura. Il drone può realizzare foto e video da diverse
              angolazioni, mostrando lo stato generale delle lamiere, i bordi
              della copertura, i raccordi con gronde e pluviali, i colmi, i
              fissaggi, i lucernari vicini, le zone sporche e i punti dove
              potrebbero verificarsi infiltrazioni.
            </p>

            <p className="leading-8 text-gray-300">
              Il controllo con drone non sostituisce una perizia tecnica, una
              verifica strutturale, una prova di tenuta o l'intervento di un
              professionista qualificato. Può però fornire una prima
              documentazione visiva utile per capire meglio la situazione e
              preparare un sopralluogo più mirato.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="mb-5 text-2xl font-bold">
              Cosa puoi far controllare
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li>✅ Coperture in lamiera grecata</li>
              <li>✅ Tetti metallici di capannoni</li>
              <li>✅ Lamiere sollevate o deformate</li>
              <li>✅ Viti, fissaggi e punti di ancoraggio</li>
              <li>✅ Scossaline, colmi e raccordi</li>
              <li>✅ Gronde, pluviali e scarichi</li>
              <li>✅ Zone con ruggine o deterioramento</li>
              <li>✅ Danni da vento, pioggia o grandine</li>
              <li>✅ Punti difficili da osservare da terra</li>
            </ul>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Ispezione coperture in lamiera per capannoni, aziende e strutture esterne
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Nei capannoni e negli immobili industriali, una copertura in lamiera
            può proteggere aree di lavoro, merci, macchinari, uffici interni,
            magazzini e impianti. Quando compaiono infiltrazioni, gocciolamenti,
            rumori anomali durante il vento, parti piegate o segni di ruggine,
            avere immagini dall'alto può aiutare a capire quali zone mostrare a
            un tecnico o a un'impresa.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Il drone può essere richiesto anche per coperture di depositi,
            officine, supermercati, stalle, serre, strutture agricole, tettoie,
            pensiline, parcheggi coperti, locali commerciali e aree logistiche.
            In questi casi la superficie da osservare può essere ampia e una
            panoramica aerea può rendere più semplice documentare lo stato
            generale della copertura.
          </p>

          <p className="leading-8 text-gray-300">
            Le immagini possono essere usate per richiedere preventivi, preparare
            manutenzioni, documentare danni dopo il maltempo, controllare una zona
            sospetta o creare un archivio visivo dello stato della copertura nel
            tempo.
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
                Crea il tuo account come cliente, azienda, proprietario,
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
                3. Pubblica la richiesta
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Descrivi copertura, immobile, zona, problema visibile e tipo di
                foto o video che vuoi ricevere.
              </p>
            </div>

            <div>
              <h3 className="mb-2 font-semibold text-green-400">
                4. Scegli il pilota
              </h3>
              <p className="text-sm leading-6 text-gray-300">
                Ricevi candidature dai piloti interessati e scegli il
                professionista più adatto al controllo richiesto.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-14 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Dopo vento, grandine o pioggia intensa
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Dopo eventi atmosferici forti, le coperture metalliche possono
              presentare ammaccature, lamiere sollevate, fissaggi allentati,
              scossaline spostate, ristagni, sporco accumulato o punti in cui
              l'acqua riesce a entrare. Il drone può documentare queste zone senza
              dover accedere subito alla copertura.
            </p>

            <p className="leading-8 text-gray-300">
              Il materiale raccolto può essere mostrato a un tecnico, a un
              lattoniere o a un'impresa per valutare se servono interventi di
              riparazione, pulizia, sigillatura o sostituzione di alcune parti.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-3xl font-bold">
              Prima di un preventivo
            </h2>

            <p className="mb-5 leading-8 text-gray-300">
              Quando devi chiedere un preventivo per sistemare una copertura in
              lamiera, avere immagini chiare può aiutare molto. Le foto possono
              mostrare dimensioni, accessi, ostacoli, punti danneggiati, gronde,
              pluviali, lucernari e zone che richiedono maggiore attenzione.
            </p>

            <p className="leading-8 text-gray-300">
              Una documentazione ordinata rende più semplice il confronto tra
              proprietario, responsabile aziendale, amministratore, tecnico e
              impresa incaricata.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Come scrivere una richiesta per ispezione coperture in lamiera
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Per ricevere candidature più precise, indica il tipo di immobile:
            capannone, magazzino, deposito, officina, tettoia, pensilina,
            struttura agricola, negozio, parcheggio coperto o edificio
            industriale. Scrivi la città, la zona, l'altezza indicativa e la
            dimensione approssimativa della copertura, se la conosci.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Spiega anche cosa vuoi documentare: lamiere sollevate, ruggine,
            infiltrazioni, fissaggi, scossaline, colmi, gronde, pluviali, danni
            da grandine, sporco accumulato, ristagni o stato generale del tetto.
            Puoi richiedere foto panoramiche, video dall'alto, immagini
            ravvicinate o riprese dei punti più importanti.
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
            Esempio di richiesta per ispezione copertura in lamiera con drone
          </h2>

          <div className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-6">
            <p className="leading-8 text-gray-300">
              “Cerco un pilota drone per ispezione visiva della copertura in
              lamiera di un capannone in provincia di Roma. Vorrei foto e video
              delle lamiere, dei fissaggi, delle gronde e delle scossaline perché
              dopo il maltempo sono comparse infiltrazioni interne. Il materiale
              servirà al tecnico e all'impresa per valutare un intervento di
              manutenzione.”
            </p>
          </div>

          <p className="mt-6 leading-8 text-gray-300">
            Una richiesta così aiuta il pilota a capire il tipo di copertura, il
            problema da documentare, il materiale richiesto e l'utilizzo finale
            delle immagini.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="mb-4 text-3xl font-bold">
            Quanto costa un'ispezione coperture in lamiera con drone?
          </h2>

          <p className="mb-5 leading-8 text-gray-300">
            Il costo di un'ispezione coperture in lamiera con drone può variare
            in base alla città, alla distanza del pilota, all'altezza della
            struttura, alla dimensione della copertura, alla complessità del volo
            e al tipo di materiale richiesto. Un controllo rapido di una tettoia è
            diverso da una documentazione completa di un grande capannone.
          </p>

          <p className="mb-5 leading-8 text-gray-300">
            Anche la consegna può incidere sul preventivo. Alcuni clienti
            richiedono solo foto e video grezzi, altri preferiscono immagini
            ordinate per lato, riprese ravvicinate dei punti critici, video
            panoramici o una raccolta completa da condividere con tecnici e
            imprese.
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
                Posso usare il drone per controllare una copertura in lamiera?
              </h3>
              <p className="text-gray-300">
                Sì, puoi pubblicare una richiesta su DroneGuard e cercare un
                pilota drone disponibile per realizzare foto e video dall'alto.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Il drone ripara le lamiere?
              </h3>
              <p className="text-gray-300">
                No, il drone fornisce documentazione visiva. Riparazioni,
                sigillature e verifiche tecniche devono essere svolte da
                professionisti qualificati.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-2 text-xl font-semibold">
                È utile dopo vento o grandine?
              </h3>
              <p className="text-gray-300">
                Sì, può essere utile per documentare lamiere piegate, fissaggi
                allentati, ammaccature, parti sollevate o zone da far verificare.
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
            Trova un pilota drone per ispezionare coperture in lamiera
          </h2>

          <p className="mb-6 max-w-3xl leading-8 text-gray-700">
            Registrati su DroneGuard, pubblica una richiesta e trova piloti drone
            disponibili per controlli visivi di coperture in lamiera, tetti
            metallici, lamiere grecate, capannoni, gronde, pluviali, scossaline,
            infiltrazioni e punti difficili da osservare da terra.
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