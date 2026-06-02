const argomentiDocumentazioneDroneTecnica = [
  "accumuli-materiali-e-inerti-in-piazzale",
  "acquedotti-condotte-e-tracciati-visibili",
  "agriturismo-e-azienda-agricola-ricettiva",
  "argini-fiume-dopo-piogge-intense",
  "attico-terrazzo-e-vista-panoramica",
  "balconi-frontalini-e-sottobalconi",
  "banchine-di-carico-magazzino",
  "bosco-sentieri-e-alberi-caduti",
  "camping-villaggio-e-aree-esterne",
  "canali-irrigazione-e-fossi-agricoli",
  "canne-fumarie-e-comignoli-condominiali",
  "cantiere-edile-in-avanzamento-lavori",
  "capannone-industriale-da-documentare",
  "casale-rustico-e-terreno-circostante",
  "cava-discarica-e-area-di-deposito",
  "centro-sportivo-e-impianto-esterno",
  "copertura-condominiale-dopo-pioggia-intensa",
  "corsi-d-acqua-e-zone-umide",
  "edificio-storico-e-coperture-difficili",
  "facciata-alta-con-possibili-distacchi",
  "frana-smottamento-e-scarpata",
  "frutteto-e-appezzamento-produttivo",
  "grondaie-e-pluviali-difficili-da-raggiungere",
  "hotel-resort-e-struttura-ricettiva",
  "impianto-fotovoltaico-su-tetto",
  "location-eventi-e-sale-ricevimenti",
  "lotto-edificabile-e-terreno-da-valutare",
  "lucernari-e-abbaini-su-copertura",
  "ombreggiamenti-su-pannelli-solari",
  "pale-eoliche-e-piazzole-di-servizio",
  "parcheggio-centro-commerciale",
  "parco-fotovoltaico-a-terra",
  "pascoli-recinzioni-e-abbeveratoi",
  "pensiline-tettoie-e-accessi-pedonali",
  "piazzale-aziendale-con-accessi-mezzi",
  "ponteggi-esterni-e-teli-di-cantiere",
  "porto-turistico-darsena-e-pontili",
  "recinzioni-perimetrali-stabilimento",
  "rifiuti-abbandonati-in-area-verde",
  "scavo-movimento-terra-e-sbancamento",
  "scuola-universita-o-edificio-pubblico",
  "serre-agricole-e-coperture-teli",
  "silos-serbatoi-e-impianti-esterni",
  "stabilimento-balneare-e-lido",
  "strada-privata-consortile-da-manutenere",
  "terrazzo-impermeabilizzato-con-sospette-infiltrazioni",
  "tetto-privato-dopo-vento-forte",
  "uliveto-terrazzato-e-muretti",
  "vigneto-e-filari-agricoli",
  "villa-in-vendita-con-giardino"
]

const obiettiviDocumentazioneDroneTecnica = [
  "con-foto-e-video",
  "dopo-maltempo",
  "per-archivio-stato-luoghi",
  "per-documentazione-assicurativa",
  "per-gestione-tecnica",
  "per-manutenzione-programmata",
  "per-preventivo-mirato",
  "per-report-fotografico",
  "per-sopralluogo-preliminare",
  "per-vendita-presentazione"
]

function formatSlug(slug) {
  return slug
    .replaceAll("-", " ")
    .replace("d acqua", "d’acqua")
    .replace("universita", "università")
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createDocumentazioneDroneTecnicaPage(argomentoSlug, obiettivoSlug) {
  const argomento = formatSlug(argomentoSlug)
  const obiettivo = formatSlug(obiettivoSlug)
  const titolo = capitalize(`documentazione drone ${argomento} ${obiettivo}`)
  const slug = `documentazione-drone-${argomentoSlug}-${obiettivoSlug}`

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per creare foto, video, report visivi e documentazione tecnica. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: "Documentazione drone tecnica",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. La documentazione con drone può essere utile per raccogliere foto, video e materiale visivo ordinato su edifici, cantieri, coperture, terreni, aree esterne, impianti e strutture difficili da osservare da terra.`,

    sections: [
      {
        title: `Quando serve documentazione drone per ${argomento}`,
        text: `La documentazione drone può essere utile quando bisogna raccogliere immagini chiare e organizzate su ${argomento}. In molti casi non basta una semplice foto da terra: serve vedere il contesto, i collegamenti tra le aree, i punti difficili da raggiungere, le superfici alte, gli accessi, le coperture, le facciate o le zone esterne.

Un pilota drone può aiutare a creare materiale visivo utile per tecnici, amministratori, imprese, periti, assicuratori, proprietari, società immobiliari, manutentori e responsabili di strutture. Le immagini possono essere usate per capire meglio la situazione, mostrare un problema, preparare un intervento o conservare uno stato dei luoghi.`
      },
      {
        title: `Perché richiedere documentazione ${obiettivo}`,
        text: `La richiesta ${obiettivo} può essere utile quando serve materiale documentale chiaro, confrontabile e facilmente condivisibile. Foto e video con drone possono aiutare a creare un archivio visivo, supportare una pratica, preparare un preventivo, documentare danni, controllare lo stato di un immobile o mostrare una situazione a chi non può essere presente fisicamente.

Il drone non sostituisce una relazione tecnica certificata quando serve un professionista abilitato, ma può fornire un supporto visivo molto utile per tecnici, imprese, clienti e proprietari.`
      },
      {
        title: "Che tipo di materiale può essere raccolto",
        text: `Il materiale raccolto può includere foto panoramiche, video descrittivi, immagini di dettaglio, viste dall’alto, riprese di accessi, coperture, facciate, gronde, terrazzi, piazzali, confini, aree esterne, strutture tecniche e punti difficili da raggiungere.

Per ${argomento}, il valore della documentazione drone sta nel collegare il dettaglio al contesto generale. Non si vede solo il singolo punto, ma anche cosa c’è intorno, come si raggiunge, quali zone sono coinvolte e dove potrebbe essere necessario un controllo successivo.`
      },
      {
        title: "A chi può servire questa documentazione",
        text: `Questo servizio può servire a privati, condomini, amministratori, imprese edili, studi tecnici, società immobiliari, property manager, manutentori, periti assicurativi, aziende, uffici tecnici e proprietari di immobili o terreni.

Ogni cliente può avere una necessità diversa: documentare un danno, mostrare lo stato prima dei lavori, creare un archivio fotografico, controllare una copertura, valorizzare una proprietà, preparare un sopralluogo o fornire immagini a un tecnico.`
      },
      {
        title: "Cosa scrivere nella richiesta su DroneGuard",
        text: `Per ricevere candidature più precise è utile indicare il Comune o la zona, il tipo di edificio o area, il motivo della documentazione, il risultato desiderato, l’urgenza e l’eventuale presenza di ostacoli o limitazioni.

Puoi specificare se ti servono foto, video, immagini di dettaglio, report fotografico, documentazione prima e dopo, materiale per assicurazione, materiale per preventivo, archivio dello stato dei luoghi o semplice controllo visivo generale. Più la richiesta è chiara, più il pilota può valutare fattibilità, sicurezza, tempi, condizioni meteo e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per collegare chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa deve documentare e riceve candidature.

Questo sistema è utile perché ogni servizio cambia in base al luogo, all’altezza, alla superficie da controllare, al tipo di documentazione richiesta e al contesto operativo. Confrontare più candidature permette di scegliere con maggiore consapevolezza il pilota più adatto.`
      }
    ]
  }
}

export const documentazioneDroneTecnicaMegaSeoPages = argomentiDocumentazioneDroneTecnica.flatMap((argomento) =>
  obiettiviDocumentazioneDroneTecnica.map((obiettivo) =>
    createDocumentazioneDroneTecnicaPage(argomento, obiettivo)
  )
)