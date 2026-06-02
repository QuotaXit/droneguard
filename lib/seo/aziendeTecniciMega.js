const argomenti = [
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

const obiettivi = [
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

function createPage(argomentoSlug, obiettivoSlug) {
  const argomento = formatSlug(argomentoSlug)
  const obiettivo = formatSlug(obiettivoSlug)
  const titolo = capitalize(`${argomento} ${obiettivo}`)
  const slug = `drone-aziende-tecnici-${argomentoSlug}-${obiettivoSlug}`

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per foto, video, controlli visivi e documentazione tecnica. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: "Servizi drone per aziende e tecnici",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${argomento} ${obiettivo} e ricevere candidature da piloti drone disponibili. Il drone può aiutare aziende, tecnici, amministratori, imprese, proprietari e professionisti a ottenere immagini dall’alto, video e documentazione visiva utile prima di un intervento, una manutenzione, una vendita, una verifica o un sopralluogo.`,

    sections: [
      {
        title: `Quando serve un drone per ${argomento}`,
        text: `Un servizio drone può essere utile quando bisogna osservare, documentare o presentare ${argomento}. Da terra spesso si vede solo una parte della situazione, mentre una ripresa dall’alto permette di capire meglio accessi, ostacoli, superfici, coperture, confini, aree esterne e punti difficili da raggiungere.

Questo tipo di servizio può essere richiesto per raccogliere immagini, preparare un controllo visivo, verificare danni, organizzare una manutenzione, supportare un tecnico o mostrare meglio un immobile, un cantiere, un impianto o un’area aziendale.`
      },
      {
        title: `Perché richiedere ${obiettivo}`,
        text: `La richiesta ${obiettivo} può essere utile quando serve materiale ordinato, chiaro e condivisibile. Foto e video con drone possono aiutare a spiegare un problema, confrontare lo stato prima e dopo un intervento, creare un archivio dello stato dei luoghi, supportare un preventivo o mostrare una situazione a chi non può essere presente fisicamente.

Il drone non sostituisce una valutazione tecnica certificata quando serve un professionista abilitato, ma può fornire un primo supporto visivo molto utile per decidere come procedere.`
      },
      {
        title: "A chi può essere utile questo servizio",
        text: `Il servizio può interessare aziende, studi tecnici, geometri, ingegneri, architetti, amministratori di condominio, imprese edili, property manager, società immobiliari, periti, assicuratori, manutentori, uffici tecnici e proprietari.

Ogni richiesta può avere un obiettivo diverso: documentare un danno, preparare un sopralluogo, valorizzare un immobile, controllare una copertura, verificare un’area esterna, raccogliere materiale per una relazione o ottenere immagini utili per organizzare un intervento.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Per ricevere candidature più precise è utile indicare la zona, il tipo di area o struttura, il motivo del servizio, il risultato desiderato e l’urgenza. Puoi specificare se ti servono foto, video, immagini di dettaglio, riprese panoramiche, documentazione prima e dopo, materiale per preventivo o un controllo visivo generale.

Più la richiesta è chiara, più i piloti possono valutare fattibilità, tempi, accessi, sicurezza, condizioni meteo, eventuali limitazioni operative e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.

Questo sistema è utile perché ogni lavoro cambia in base al luogo, alla superficie, all’altezza, al contesto operativo e al tipo di documentazione richiesta.`
      }
    ]
  }
}

export const aziendeTecniciMegaSeoPages = argomenti.flatMap((argomento) =>
  obiettivi.map((obiettivo) => createPage(argomento, obiettivo))
)