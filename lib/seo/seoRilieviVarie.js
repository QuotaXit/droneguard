function list(text) {
  return text.trim().split(/\s+/).filter(Boolean)
}

const rilieviSlugs = list(`
calcolo-volumi-con-drone
ortofoto-con-drone
ortomosaico-con-drone
rilievo-3d-con-drone
rilievo-accumuli-materiale-con-drone
rilievo-aerofotogrammetrico-con-drone
rilievo-agricolo-con-drone
rilievo-altimetrico-con-drone
rilievo-area-industriale-con-drone
rilievo-area-logistica-con-drone
rilievo-argini-con-drone
rilievo-as-built-con-drone
rilievo-avanzamento-lavori-con-drone
rilievo-bim-con-drone
rilievo-cantiere-con-drone
rilievo-capannone-con-drone
rilievo-catastale-con-drone
rilievo-cava-con-drone
rilievo-copertura-industriale-con-drone
rilievo-corso-acqua-con-drone
rilievo-costiero-con-drone
rilievo-discarica-con-drone
rilievo-documentazione-tecnica-con-drone
rilievo-dsm-con-drone
rilievo-dtm-con-drone
rilievo-facciata-con-drone
rilievo-frana-con-drone
rilievo-impianto-fotovoltaico-con-drone
rilievo-lotto-edificabile-con-drone
rilievo-mappa-aerea-con-drone
rilievo-miniera-con-drone
rilievo-modello-3d-edificio-con-drone
rilievo-modello-digitale-terreno-drone
rilievo-movimenti-terra-con-drone
rilievo-nuvola-punti-con-drone
rilievo-opere-stradali-con-drone
rilievo-ortofoto-cantiere-con-drone
rilievo-parco-fotovoltaico-con-drone
rilievo-piazzale-con-drone
rilievo-planimetrico-con-drone
rilievo-pre-post-intervento-con-drone
rilievo-sbancamento-con-drone
rilievo-scavo-con-drone
rilievo-sito-produttivo-con-drone
rilievo-smottamento-con-drone
rilievo-stato-di-fatto-con-drone
rilievo-stradale-con-drone
rilievo-terreno-con-drone
rilievo-terreno-edificabile-con-drone
rilievo-tetto-con-drone
rilievo-topografico-aereo-con-drone
rilievo-uliveto-con-drone
rilievo-vigneto-con-drone
rilievo-volumetrico-con-drone
rilievo-volumi-inerti-con-drone
`)

const varieSlugs = list(`
drone-per-agriturismi
drone-per-beb
drone-per-camping
drone-per-coordinatori-sicurezza
drone-per-direttori-lavori
drone-per-hotel
drone-per-location-eventi
drone-per-perizie-edili
drone-per-perizie-immobiliari
drone-per-resort
drone-per-ristoranti
drone-per-sale-ricevimenti
drone-per-spiagge-e-lidi
drone-per-stabilimenti-balneari
`)

function formatText(slug) {
  return slug
    .replaceAll("-", " ")
    .replaceAll(" d acqua", " d’acqua")
    .replaceAll(" corso acqua", " corso d’acqua")
    .replaceAll(" as built", " as-built")
    .replaceAll(" bim", " BIM")
    .replaceAll(" dsm", " DSM")
    .replaceAll(" dtm", " DTM")
    .replaceAll(" 3d", " 3D")
    .replaceAll(" beb", " B&B")
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createRilievoPage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per rilievi, ortofoto, fotogrammetria, modelli 3D, documentazione tecnica e controlli visivi. Pubblica il lavoro su DroneGuard.`,
    category: "Rilievi con drone",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per raccogliere foto, video, immagini dall’alto, documentazione visiva, ortofoto, rilievi indicativi, controlli di aree esterne, cantieri, terreni, coperture, capannoni e superfici difficili da osservare da terra.`,

    sections: [
      {
        title: `Quando serve ${titolo.toLowerCase()}`,
        text: `Un servizio come ${titolo.toLowerCase()} può essere utile quando bisogna osservare o documentare un’area con una visione dall’alto. Da terra spesso si vede solo una parte della situazione, mentre il drone permette di capire meglio accessi, superfici, confini, dislivelli, ostacoli, materiali presenti, aree di lavoro e punti critici.

Questo tipo di servizio può essere richiesto per cantieri, terreni agricoli, lotti edificabili, aree industriali, piazzali, cave, scavi, frane, coperture, impianti fotovoltaici, strade, argini, vigneti, uliveti e situazioni dove è utile avere una documentazione più completa.`
      },
      {
        title: "Perché usare un drone per rilievi e documentazione",
        text: `Il drone consente di raccogliere materiale visivo in modo rapido, ordinato e meno invasivo rispetto a molti sopralluoghi tradizionali. Può aiutare a creare immagini panoramiche, video descrittivi, foto di dettaglio, viste dall’alto, materiale per confronto prima e dopo, documentazione dello stato dei luoghi e supporto a tecnici o imprese.

Il drone non sostituisce una relazione tecnica certificata quando serve un professionista abilitato, ma può fornire un supporto visivo molto utile per capire meglio la situazione, organizzare un intervento, preparare un preventivo o condividere immagini con geometri, ingegneri, architetti, periti, amministratori e proprietari.`
      },
      {
        title: "Cosa può documentare il pilota drone",
        text: `Il pilota drone può realizzare foto dall’alto, video, panoramiche, immagini di dettaglio e materiale visivo in base alla richiesta. In base al lavoro, il materiale può mostrare superfici, confini, scavi, accumuli, coperture, accessi, pendenze, aree produttive, strade, piazzali, terreni, cantieri o strutture.

Per ${titolo.toLowerCase()}, il valore principale è collegare il dettaglio al contesto generale: non si vede solo un singolo punto, ma anche cosa c’è intorno, come si raggiunge, quali zone sono coinvolte e dove potrebbe essere necessario approfondire.`
      },
      {
        title: "A chi può servire questo servizio",
        text: `Questo servizio può servire a privati, aziende, imprese edili, studi tecnici, geometri, ingegneri, architetti, amministratori, property manager, agronomi, periti, assicuratori, società immobiliari, responsabili di cantiere e proprietari di terreni o immobili.

Ogni richiesta può avere un obiettivo diverso: documentare lo stato di fatto, controllare avanzamento lavori, preparare un sopralluogo, verificare un’area, raccogliere immagini per un tecnico, valorizzare un terreno, osservare un cantiere o ottenere materiale per una valutazione preliminare.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Per ricevere candidature più precise è utile indicare Comune o zona, tipo di area, dimensione indicativa, motivo del rilievo, risultato desiderato, urgenza, accessi, ostacoli e tipo di materiale richiesto. Puoi specificare se ti servono foto, video, ortofoto, immagini panoramiche, documentazione prima e dopo, controllo visivo, supporto per preventivo o materiale da inviare a un tecnico.

Più la richiesta è chiara, più i piloti possono valutare fattibilità, tempi, sicurezza, condizioni meteo, eventuali limitazioni operative e tipo di consegna possibile.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard mette in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.`
      }
    ]
  }
}

function createVariePage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per foto, video, riprese promozionali, documentazione visiva e servizi professionali. Pubblica il lavoro su DroneGuard.`,
    category: "Servizi drone per attività e professionisti",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per valorizzare attività ricettive, strutture turistiche, location, stabilimenti, ristoranti, spiagge, cantieri, perizie, lavori tecnici e spazi esterni.`,

    sections: [
      {
        title: `Quando serve ${titolo.toLowerCase()}`,
        text: `Un servizio come ${titolo.toLowerCase()} può essere utile quando bisogna mostrare un’attività, una struttura, un immobile, una location o un’area esterna da una prospettiva più completa. Le riprese da terra spesso non bastano a far capire spazi, accessi, contesto, dimensioni, panorama, parcheggi, percorsi, giardini, piscine, terrazzi o elementi esterni importanti.

Il drone può aiutare a creare materiale per presentazioni, annunci, sito web, social, documentazione interna, promozione commerciale, preventivi, sopralluoghi o comunicazione con clienti e collaboratori.`
      },
      {
        title: "Perché usare un drone",
        text: `Il vantaggio del drone è la possibilità di mostrare il contesto. Non si vede solo un dettaglio, ma anche dove si trova la struttura, come si accede, quali spazi esterni ci sono, quali elementi la rendono interessante e come si presenta vista dall’alto.

Per attività turistiche, ricettive, tecniche o professionali, foto e video con drone possono rendere la comunicazione più chiara e più completa. Il drone può essere utile anche quando serve documentare un’area prima di un intervento, mostrare lo stato di un luogo o raccogliere immagini da condividere con clienti, tecnici o collaboratori.`
      },
      {
        title: "Cosa può documentare il pilota drone",
        text: `Il pilota drone può realizzare foto panoramiche, video, riprese dall’alto, immagini di dettaglio e materiale visivo adatto alla richiesta. In base al servizio, il materiale può mostrare ingressi, spazi esterni, parcheggi, giardini, piscine, spiagge, sale ricevimenti, terrazzi, coperture, accessi, strade interne o contesto generale.

Per ${titolo.toLowerCase()}, il valore principale è far capire meglio lo spazio e la posizione. Una ripresa dall’alto può mostrare elementi che una foto normale non riesce a comunicare con la stessa chiarezza.`
      },
      {
        title: "A chi può servire questo servizio",
        text: `Questo servizio può servire a proprietari di attività, hotel, resort, agriturismi, B&B, camping, stabilimenti balneari, ristoranti, sale ricevimenti, location eventi, tecnici, direttori lavori, coordinatori sicurezza, periti edili, società immobiliari e professionisti.

Ogni richiesta può avere un obiettivo diverso: promozione, documentazione, presentazione, sopralluogo, controllo visivo, archivio, report fotografico, contenuti per sito web o immagini per social e annunci.`
      },
      {
        title: "Cosa indicare nella richiesta su DroneGuard",
        text: `Per ricevere candidature più precise è utile indicare Comune o zona, tipo di attività o struttura, obiettivo del servizio, urgenza, risultato desiderato e materiali richiesti. Puoi specificare se ti servono foto, video, riprese promozionali, immagini panoramiche, documentazione tecnica o contenuti per sito e social.

È utile indicare anche se l’area è in centro abitato, vicino a mare, aeroporto, strade trafficate, persone, eventi o zone con possibili limitazioni operative. Il pilota potrà così valutare fattibilità, sicurezza, condizioni meteo, regole di volo e tipo di consegna possibile.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard mette in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.

Questo sistema è utile perché ogni attività è diversa: un hotel, un agriturismo, una sala ricevimenti, un camping, un ristorante, una spiaggia o una location eventi richiedono riprese e documentazione differenti.`
      }
    ]
  }
}

export const rilieviSeoPages = rilieviSlugs.map(createRilievoPage)
export const varieSeoPages = varieSlugs.map(createVariePage)

export const seoRilieviVariePages = [
  ...rilieviSeoPages,
  ...varieSeoPages
]