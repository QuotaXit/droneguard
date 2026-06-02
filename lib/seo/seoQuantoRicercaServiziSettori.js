function list(text) {
  return text.trim().split(/\s+/).filter(Boolean)
}

const quantoCostaSlugs = list(`
costo-ispezione-facciata-con-drone
costo-ispezione-tetto-con-drone
costo-monitoraggio-cantiere-con-drone
costo-riprese-con-drone
prezzo-fotografie-aeree-con-drone
prezzo-fotogrammetria-con-drone
prezzo-ispezione-impianto-fotovoltaico-con-drone
prezzo-video-drone-matrimonio
quanto-costa-un-pilota-drone
quanto-costa-un-rilievo-topografico-con-drone
quanto-costa-un-sopralluogo-con-drone
quanto-costa-una-ripresa-aerea-per-eventi
quanto-costa-una-termografia-con-drone
`)

const ricercaSlugs = list(`
cerca-operatore-drone-per-acquedotti-condotte
cerca-operatore-drone-per-agricoltura-controllo-colture
cerca-operatore-drone-per-allevamenti
cerca-operatore-drone-per-aree-archeologiche
cerca-operatore-drone-per-autolavaggi
cerca-operatore-drone-per-borghi-turistici
cerca-operatore-drone-per-calcolo-volumi-materiali
cerca-operatore-drone-per-campi-sportivi
cerca-operatore-drone-per-cave-miniere
cerca-operatore-drone-per-centri-commerciali
cerca-operatore-drone-per-centri-storici
cerca-operatore-drone-per-comuni-controllo-territorio
cerca-operatore-drone-per-concessionarie-auto
cerca-operatore-drone-per-controllo-argini
cerca-operatore-drone-per-controllo-capannone
cerca-operatore-drone-per-controllo-grondaie
cerca-operatore-drone-per-controllo-impianto-fotovoltaico
cerca-operatore-drone-per-controllo-piazzali-aziendali
cerca-operatore-drone-per-controllo-recinzioni
cerca-operatore-drone-per-controllo-strade
cerca-operatore-drone-per-darsene-pontili
cerca-operatore-drone-per-depositi-container
cerca-operatore-drone-per-depuratori
cerca-operatore-drone-per-dighe-bacini
cerca-operatore-drone-per-discariche-abusive
cerca-operatore-drone-per-documentazione-danni-maltempo
cerca-operatore-drone-per-fiere-padiglioni
cerca-operatore-drone-per-foto-aeree-immobile
cerca-operatore-drone-per-frane-smottamenti
cerca-operatore-drone-per-frutteti
cerca-operatore-drone-per-impianti-biogas
cerca-operatore-drone-per-impianti-compostaggio
cerca-operatore-drone-per-incendi-boschivi
cerca-operatore-drone-per-ispezione-ponte
cerca-operatore-drone-per-ispezione-tetto-condominiale
cerca-operatore-drone-per-ispezione-tetto-privato
cerca-operatore-drone-per-linee-elettriche
cerca-operatore-drone-per-magazzino-esterno
cerca-operatore-drone-per-maneggi-centri-equestri
cerca-operatore-drone-per-modello-3d-edificio
cerca-operatore-drone-per-monitoraggio-avanzamento-lavori
cerca-operatore-drone-per-monitoraggio-boschi
cerca-operatore-drone-per-monitoraggio-campi-agricoli
cerca-operatore-drone-per-monitoraggio-fiume
cerca-operatore-drone-per-musei-allaperto
cerca-operatore-drone-per-ortofoto-terreno
cerca-operatore-drone-per-ospedali-cliniche
cerca-operatore-drone-per-pale-eoliche
cerca-operatore-drone-per-parcheggi-commerciali
cerca-operatore-drone-per-parchi-naturali
cerca-operatore-drone-per-parco-fotovoltaico
cerca-operatore-drone-per-pascoli
cerca-operatore-drone-per-perizia-assicurativa-visiva
cerca-operatore-drone-per-piazzale-logistico
cerca-operatore-drone-per-porti-turistici
cerca-operatore-drone-per-presentazione-stabilimento
cerca-operatore-drone-per-presentazione-villa
cerca-operatore-drone-per-protezione-civile
cerca-operatore-drone-per-rifiuti-abbandonati
cerca-operatore-drone-per-rilievo-fotogrammetrico
cerca-operatore-drone-per-rilievo-topografico-aereo
cerca-operatore-drone-per-rimessaggi
cerca-operatore-drone-per-riprese-agriturismo
cerca-operatore-drone-per-riprese-camping-villaggio
cerca-operatore-drone-per-riprese-case-vacanza
cerca-operatore-drone-per-riprese-evento-aziendale
cerca-operatore-drone-per-riprese-stabilimento-balneare
cerca-operatore-drone-per-scuole-universita
cerca-operatore-drone-per-serre-agricole
cerca-operatore-drone-per-sopralluogo-cantiere-edile
cerca-operatore-drone-per-sopralluogo-condominio
cerca-operatore-drone-per-stadi-impianti-sportivi
cerca-operatore-drone-per-termografia-fotovoltaico
cerca-operatore-drone-per-tralicci-telecomunicazioni
cerca-operatore-drone-per-uliveti
cerca-operatore-drone-per-verifica-facciata-edificio
cerca-operatore-drone-per-video-aziendale-industriale
cerca-operatore-drone-per-video-hotel-resort
cerca-operatore-drone-per-video-immobiliare-casa
cerca-operatore-drone-per-video-matrimonio-esterno
cerca-operatore-drone-per-vigneti
cerca-operatore-drone-per-vivai-florovivaismo
cerca-pilota-drone
lavoro-pilota-drone
network-piloti-drone
operatore-drone-professionale
piloti-drone-certificati
professionisti-drone
quanto-guadagna-un-pilota-drone
richiedi-pilota-drone
richiedi-pilota-drone-per-cave-miniere
richiedi-pilota-drone-per-controllo-argini
richiedi-pilota-drone-per-controllo-capannone
richiedi-pilota-drone-per-controllo-grondaie
richiedi-pilota-drone-per-controllo-impianto-fotovoltaico
richiedi-pilota-drone-per-controllo-strade
richiedi-pilota-drone-per-documentazione-danni-maltempo
richiedi-pilota-drone-per-foto-aeree-immobile
richiedi-pilota-drone-per-frane-smottamenti
richiedi-pilota-drone-per-ispezione-ponte
richiedi-pilota-drone-per-ispezione-tetto-condominiale
richiedi-pilota-drone-per-ispezione-tetto-privato
richiedi-pilota-drone-per-linee-elettriche
richiedi-pilota-drone-per-modello-3d-edificio
richiedi-pilota-drone-per-monitoraggio-avanzamento-lavori
richiedi-pilota-drone-per-monitoraggio-fiume
richiedi-pilota-drone-per-ortofoto-terreno
richiedi-pilota-drone-per-pale-eoliche
richiedi-pilota-drone-per-parco-fotovoltaico
richiedi-pilota-drone-per-perizia-assicurativa-visiva
richiedi-pilota-drone-per-presentazione-villa
richiedi-pilota-drone-per-rilievo-fotogrammetrico
richiedi-pilota-drone-per-rilievo-topografico-aereo
richiedi-pilota-drone-per-riprese-agriturismo
richiedi-pilota-drone-per-riprese-camping-villaggio
richiedi-pilota-drone-per-riprese-case-vacanza
richiedi-pilota-drone-per-riprese-evento-aziendale
richiedi-pilota-drone-per-riprese-stabilimento-balneare
richiedi-pilota-drone-per-sopralluogo-cantiere-edile
richiedi-pilota-drone-per-sopralluogo-condominio
richiedi-pilota-drone-per-termografia-fotovoltaico
richiedi-pilota-drone-per-tralicci-telecomunicazioni
richiedi-pilota-drone-per-verifica-facciata-edificio
richiedi-pilota-drone-per-video-hotel-resort
richiedi-pilota-drone-per-video-immobiliare-casa
richiedi-pilota-drone-per-video-matrimonio-esterno
servizi-drone-professionali
trova-operatore-drone
trova-pilota-drone
trova-pilota-drone-per-acquedotti-condotte
trova-pilota-drone-per-agricoltura-controllo-colture
trova-pilota-drone-per-allevamenti
trova-pilota-drone-per-aree-archeologiche
trova-pilota-drone-per-autolavaggi
trova-pilota-drone-per-borghi-turistici
trova-pilota-drone-per-calcolo-volumi-materiali
trova-pilota-drone-per-campi-sportivi
trova-pilota-drone-per-cave-miniere
trova-pilota-drone-per-centri-commerciali
trova-pilota-drone-per-centri-storici
trova-pilota-drone-per-comuni-controllo-territorio
trova-pilota-drone-per-concessionarie-auto
trova-pilota-drone-per-controllo-argini
trova-pilota-drone-per-controllo-capannone
trova-pilota-drone-per-controllo-grondaie
trova-pilota-drone-per-controllo-impianto-fotovoltaico
trova-pilota-drone-per-controllo-piazzali-aziendali
trova-pilota-drone-per-controllo-recinzioni
trova-pilota-drone-per-controllo-strade
trova-pilota-drone-per-darsene-pontili
trova-pilota-drone-per-depositi-container
trova-pilota-drone-per-depuratori
trova-pilota-drone-per-dighe-bacini
trova-pilota-drone-per-discariche-abusive
trova-pilota-drone-per-documentazione-danni-maltempo
trova-pilota-drone-per-fiere-padiglioni
trova-pilota-drone-per-foto-aeree-immobile
trova-pilota-drone-per-frane-smottamenti
trova-pilota-drone-per-frutteti
trova-pilota-drone-per-impianti-biogas
trova-pilota-drone-per-impianti-compostaggio
trova-pilota-drone-per-incendi-boschivi
trova-pilota-drone-per-ispezione-ponte
trova-pilota-drone-per-ispezione-tetto-condominiale
trova-pilota-drone-per-ispezione-tetto-privato
trova-pilota-drone-per-linee-elettriche
trova-pilota-drone-per-magazzino-esterno
trova-pilota-drone-per-maneggi-centri-equestri
trova-pilota-drone-per-modello-3d-edificio
trova-pilota-drone-per-monitoraggio-avanzamento-lavori
trova-pilota-drone-per-monitoraggio-boschi
trova-pilota-drone-per-monitoraggio-campi-agricoli
trova-pilota-drone-per-monitoraggio-fiume
trova-pilota-drone-per-musei-allaperto
trova-pilota-drone-per-ortofoto-terreno
trova-pilota-drone-per-ospedali-cliniche
trova-pilota-drone-per-pale-eoliche
trova-pilota-drone-per-parcheggi-commerciali
trova-pilota-drone-per-parchi-naturali
trova-pilota-drone-per-parco-fotovoltaico
trova-pilota-drone-per-pascoli
trova-pilota-drone-per-perizia-assicurativa-visiva
trova-pilota-drone-per-piazzale-logistico
trova-pilota-drone-per-porti-turistici
trova-pilota-drone-per-presentazione-stabilimento
trova-pilota-drone-per-presentazione-villa
trova-pilota-drone-per-protezione-civile
trova-pilota-drone-per-rifiuti-abbandonati
trova-pilota-drone-per-rilievo-fotogrammetrico
trova-pilota-drone-per-rilievo-topografico-aereo
trova-pilota-drone-per-rimessaggi
trova-pilota-drone-per-riprese-agriturismo
trova-pilota-drone-per-riprese-camping-villaggio
trova-pilota-drone-per-riprese-case-vacanza
trova-pilota-drone-per-riprese-evento-aziendale
trova-pilota-drone-per-riprese-stabilimento-balneare
trova-pilota-drone-per-scuole-universita
trova-pilota-drone-per-serre-agricole
trova-pilota-drone-per-sopralluogo-cantiere-edile
trova-pilota-drone-per-sopralluogo-condominio
trova-pilota-drone-per-stadi-impianti-sportivi
trova-pilota-drone-per-termografia-fotovoltaico
trova-pilota-drone-per-tralicci-telecomunicazioni
trova-pilota-drone-per-uliveti
trova-pilota-drone-per-verifica-facciata-edificio
trova-pilota-drone-per-video-aziendale-industriale
trova-pilota-drone-per-video-hotel-resort
trova-pilota-drone-per-video-immobiliare-casa
trova-pilota-drone-per-video-matrimonio-esterno
trova-pilota-drone-per-vigneti
trova-pilota-drone-per-vivai-florovivaismo
`)

const serviziSlugs = list(`
agricoltura-di-precisione-con-drone
drone-per-cantieri
drone-per-fotogrammetria
drone-per-impianti-fotovoltaici
drone-per-monitoraggio-ambientale
fotografie-aeree-con-drone
fotogrammetria-con-drone
ispezione-ciminiere-con-drone
ispezione-coperture-industriali
ispezione-facciate-con-drone
ispezione-linee-elettriche-con-drone
ispezione-pannelli-fotovoltaici-drone
ispezione-serbatoi-con-drone
ispezione-tralicci-con-drone
ispezioni-con-drone
mappatura-terreni-con-drone
monitoraggio-cantieri-con-drone
noleggio-pilota-drone
operatore-drone-per-eventi
preventivo-riprese-drone
rilievi-topografici-con-drone
riprese-aeree-con-drone
riprese-drone-eventi
riprese-drone-immobili
termografia-con-drone
video-aerei-con-drone
video-promozionali-con-drone
`)

const settoriSlugs = list(`
drone-per-acquedotti
drone-per-agricoltura
drone-per-allevamenti
drone-per-aree-archeologiche
drone-per-associazioni-volontariato
drone-per-autolavaggi
drone-per-aziende-vinicole
drone-per-bacini-idrici
drone-per-borghi-turistici
drone-per-campeggi-villaggi
drone-per-campi-sportivi
drone-per-canali-irrigazione
drone-per-caseifici
drone-per-centri-commerciali
drone-per-centri-residenziali
drone-per-centri-storici
drone-per-cliniche-private
drone-per-comuni
drone-per-comuni-controllo-territorio
drone-per-concessionarie-auto
drone-per-condotte-idriche
drone-per-consorzi-stradali
drone-per-controllo-strade
drone-per-darsene
drone-per-depuratori
drone-per-dighe
drone-per-edilizia
drone-per-eventi
drone-per-fiere
drone-per-florovivaismo
drone-per-fotovoltaico
drone-per-frantoi
drone-per-immobili
drone-per-impianti-balneari
drone-per-impianti-biogas
drone-per-impianti-compostaggio
drone-per-impianti-eolici
drone-per-impianti-sportivi
drone-per-industria
drone-per-infrastrutture
drone-per-luxury-resort
drone-per-maneggi
drone-per-musei-allaperto
drone-per-ospedali
drone-per-pale-eoliche
drone-per-parcheggi-commerciali
drone-per-piscine-e-parchi-acquatici
drone-per-pontili
drone-per-protezione-civile
drone-per-residence
drone-per-reti-fognarie
drone-per-rimessaggi
drone-per-scuole
drone-per-serre-fotovoltaiche
drone-per-sicurezza-cantieri
drone-per-stadi
drone-per-turismo
drone-per-universita
drone-per-vivai
`)

function formatText(slug) {
  return slug
    .replaceAll("-", " ")
    .replaceAll(" d acqua", " d’acqua")
    .replaceAll(" universita", " università")
    .replaceAll(" allaperto", " all’aperto")
    .replaceAll(" fotovoltaico", " fotovoltaico")
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createQuantoCostaPage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: scopri cosa può influire sul costo di un servizio drone e pubblica una richiesta su DroneGuard per ricevere candidature da piloti disponibili.`,
    category: "Prezzi e costi servizi drone",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta e ricevere candidature da piloti drone disponibili. Il costo di un servizio drone può cambiare in base alla zona, al tipo di lavoro, alla durata, alla complessità del volo, al materiale richiesto e alle condizioni operative.`,

    sections: [
      {
        title: "Da cosa dipende il costo",
        text: `Il prezzo di un servizio drone non è uguale per tutti i lavori. Può cambiare se servono solo foto, video, ispezioni visive, termografia, fotogrammetria, rilievi, riprese per eventi, documentazione tecnica o consegne più complesse. Contano anche luogo, urgenza, accessibilità, meteo, sicurezza e tempo necessario per preparare il servizio.`
      },
      {
        title: "Perché chiedere più candidature",
        text: `Confrontare più piloti permette di capire meglio disponibilità, esperienza, proposta e tipo di materiale consegnato. Il prezzo più basso non è sempre la scelta migliore: per un servizio drone contano anche sicurezza, fattibilità, qualità delle immagini e chiarezza della consegna.`
      },
      {
        title: "Cosa scrivere nella richiesta",
        text: `Per ricevere risposte più precise indica Comune o zona, tipo di servizio, obiettivo, urgenza, luogo, eventuali ostacoli e materiale desiderato. Specifica se ti servono foto, video, report fotografico, controllo visivo, riprese promozionali, documentazione tecnica o immagini da inviare a un professionista.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature da piloti drone disponibili. In questo modo può confrontare le proposte e scegliere il candidato più adatto al servizio richiesto.`
      }
    ]
  }
}

function createRicercaPage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti e operatori drone per foto, video, ispezioni, sopralluoghi, documentazione e servizi professionali.`,
    category: "Ricerca piloti drone",
    h1: `${titolo} con DroneGuard`,
    intro: `DroneGuard aiuta clienti, aziende, privati, amministratori e professionisti a trovare piloti drone disponibili. Pubblica una richiesta, descrivi il servizio e ricevi candidature da operatori interessati al lavoro.`,

    sections: [
      {
        title: "Quando cercare un pilota drone",
        text: `Cercare un pilota drone può essere utile quando servono foto, video, riprese immobiliari, ispezioni di tetti, controlli di facciate, monitoraggio cantieri, documentazione danni, riprese aziendali, fotovoltaico, agricoltura, rilievi visivi o sopralluoghi tecnici.`
      },
      {
        title: "Perché usare DroneGuard",
        text: `Invece di cercare a caso, DroneGuard permette di pubblicare una richiesta chiara e ricevere candidature. Così il cliente può confrontare profili, disponibilità, esperienza e proposta prima di scegliere il candidato più adatto.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Indica zona, tipo di servizio, obiettivo, urgenza, luogo, eventuali ostacoli e risultato desiderato. Puoi chiedere foto, video, immagini di dettaglio, report fotografico, documentazione prima e dopo, riprese promozionali o supporto per un tecnico.`
      },
      {
        title: "A chi è utile",
        text: `Il servizio può essere utile a privati, aziende, condomini, agenzie immobiliari, imprese edili, amministratori, geometri, ingegneri, architetti, property manager, periti assicurativi, agronomi e responsabili di manutenzione.`
      },
      {
        title: "Come funziona",
        text: `Il cliente pubblica il lavoro, i piloti interessati si candidano e il cliente sceglie il candidato più adatto. Il sistema è pensato per rendere più semplice l’incontro tra domanda e offerta nei servizi drone.`
      }
    ]
  }
}

function createServiziPage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per servizi professionali, riprese aeree, ispezioni, cantieri, immobili, agricoltura e documentazione tecnica.`,
    category: "Servizi drone",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per foto, video, controlli visivi, documentazione, rilievi e supporto a privati, aziende e tecnici.`,

    sections: [
      {
        title: "Quando serve questo servizio",
        text: `Un servizio drone può essere richiesto quando serve osservare un’area dall’alto, valorizzare un immobile, controllare una copertura, documentare un cantiere, realizzare riprese promozionali, seguire un evento, controllare impianti o raccogliere immagini da condividere con tecnici e clienti.`
      },
      {
        title: "Cosa può fare il pilota drone",
        text: `Il pilota può realizzare foto, video, immagini panoramiche, riprese di dettaglio, documentazione visiva e materiale utile per presentazioni, preventivi, archivi, controlli o comunicazione. La fattibilità dipende sempre dal luogo, dalle regole operative, dalla sicurezza e dalle condizioni meteo.`
      },
      {
        title: "Cosa scrivere nella richiesta",
        text: `Specifica zona, tipo di servizio, obiettivo, urgenza e risultato desiderato. Più la richiesta è chiara, più i piloti possono valutare tempi, costi, fattibilità e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `Il cliente pubblica il lavoro e riceve candidature. Poi confronta profili, disponibilità e proposta prima di scegliere il candidato più adatto.`
      }
    ]
  }
}

function createSettoriPage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per servizi dedicati a settori professionali, aziende, enti, tecnici, immobili, ambiente e infrastrutture.`,
    category: "Settori drone",
    h1: `${titolo} con DroneGuard`,
    intro: `DroneGuard permette di pubblicare richieste per servizi drone in diversi settori. Ogni settore ha esigenze diverse: riprese, controlli visivi, documentazione, monitoraggio, ispezioni, supporto tecnico o valorizzazione commerciale.`,

    sections: [
      {
        title: "Perché usare un drone in questo settore",
        text: `Il drone può aiutare a vedere dall’alto aree, edifici, impianti, terreni, strutture e spazi esterni che da terra sono difficili da osservare completamente. Può fornire immagini utili per decisioni, sopralluoghi, preventivi, manutenzioni, presentazioni o documentazione.`
      },
      {
        title: "Possibili utilizzi",
        text: `In base al settore, il drone può essere usato per foto, video, ispezioni, monitoraggio, controlli visivi, mappature, riprese promozionali, documentazione danni, verifica dello stato dei luoghi o supporto ad aziende e professionisti.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Indica zona, tipo di servizio, obiettivo, urgenza, dimensione dell’area, eventuali ostacoli e materiale desiderato. Queste informazioni aiutano i piloti a valutare meglio la candidatura.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `Il cliente pubblica il lavoro, riceve candidature da piloti disponibili e sceglie il candidato più adatto. DroneGuard semplifica il collegamento tra chi cerca un servizio drone e chi può realizzarlo.`
      }
    ]
  }
}

export const quantoCostaSeoPages = quantoCostaSlugs.map(createQuantoCostaPage)
export const ricercaSeoPages = ricercaSlugs.map(createRicercaPage)
export const serviziSeoPages = serviziSlugs.map(createServiziPage)
export const settoriSeoPages = settoriSlugs.map(createSettoriPage)

export const seoQuantoRicercaServiziSettoriPages = [
  ...quantoCostaSeoPages,
  ...ricercaSeoPages,
  ...serviziSeoPages,
  ...settoriSeoPages
]