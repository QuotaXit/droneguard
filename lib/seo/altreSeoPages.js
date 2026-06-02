function list(text) {
  return text.trim().split(/\s+/).filter(Boolean)
}

const ispezioniDroneMirateArgomenti = list(`
accumuli-materiali-e-inerti-in-piazzale
acquedotti-condotte-e-tracciati-visibili
agriturismo-e-azienda-agricola-ricettiva
argini-fiume-dopo-piogge-intense
attico-terrazzo-e-vista-panoramica
balconi-frontalini-e-sottobalconi
banchine-di-carico-magazzino
bosco-sentieri-e-alberi-caduti
camping-villaggio-e-aree-esterne
canali-irrigazione-e-fossi-agricoli
canne-fumarie-e-comignoli-condominiali
cantiere-edile-in-avanzamento-lavori
capannone-industriale-da-documentare
casale-rustico-e-terreno-circostante
cava-discarica-e-area-di-deposito
centro-sportivo-e-impianto-esterno
copertura-condominiale-dopo-pioggia-intensa
corsi-d-acqua-e-zone-umide
edificio-storico-e-coperture-difficili
facciata-alta-con-possibili-distacchi
frana-smottamento-e-scarpata
frutteto-e-appezzamento-produttivo
grondaie-e-pluviali-difficili-da-raggiungere
hotel-resort-e-struttura-ricettiva
impianto-fotovoltaico-su-tetto
location-eventi-e-sale-ricevimenti
lotto-edificabile-e-terreno-da-valutare
lucernari-e-abbaini-su-copertura
ombreggiamenti-su-pannelli-solari
pale-eoliche-e-piazzole-di-servizio
parcheggio-centro-commerciale
parco-fotovoltaico-a-terra
pascoli-recinzioni-e-abbeveratoi
pensiline-tettoie-e-accessi-pedonali
piazzale-aziendale-con-accessi-mezzi
ponteggi-esterni-e-teli-di-cantiere
porto-turistico-darsena-e-pontili
recinzioni-perimetrali-stabilimento
rifiuti-abbandonati-in-area-verde
scavo-movimento-terra-e-sbancamento
scuola-universita-o-edificio-pubblico
serre-agricole-e-coperture-teli
silos-serbatoi-e-impianti-esterni
stabilimento-balneare-e-lido
strada-privata-consortile-da-manutenere
terrazzo-impermeabilizzato-con-sospette-infiltrazioni
tetto-privato-dopo-vento-forte
uliveto-terrazzato-e-muretti
vigneto-e-filari-agricoli
villa-in-vendita-con-giardino
`)

const obiettiviMirati = list(`
con-foto-e-video
dopo-maltempo
per-archivio-stato-luoghi
per-documentazione-assicurativa
per-gestione-tecnica
per-manutenzione-programmata
per-preventivo-mirato
per-report-fotografico
per-sopralluogo-preliminare
per-vendita-presentazione
`)

const lavoroSlugs = list(`
annunci-lavoro-drone
candidature-pilota-drone
clienti-cercano-piloti-drone
collabora-come-pilota-drone
come-trovare-lavoro-con-drone
guadagnare-con-drone-clienti
incarichi-drone-per-professionisti
incarichi-per-piloti-drone
lavora-come-pilota-drone
lavori-con-drone-professionali
lavori-drone-agricoltura
lavori-drone-cantieri
lavori-drone-edilizia
lavori-drone-eventi
lavori-drone-fotovoltaico
lavori-drone-immobiliare
lavoro-drone-agriturismi-resort
lavoro-drone-cave-miniere
lavoro-drone-comuni-ambiente
lavoro-drone-corsi-dacqua
lavoro-drone-danni-maltempo
lavoro-drone-fotogrammetria
lavoro-drone-frane-smottamenti
lavoro-drone-freelance
lavoro-drone-ispezioni-capannoni
lavoro-drone-ispezioni-condomini
lavoro-drone-ispezioni-facciate
lavoro-drone-ispezioni-fotovoltaico
lavoro-drone-ispezioni-grondaie
lavoro-drone-ispezioni-tetti
lavoro-drone-monitoraggio-cantieri
lavoro-drone-perizie-assicurative
lavoro-drone-porti-turistici
lavoro-drone-rilievi-topografici
lavoro-drone-riprese-immobiliari
lavoro-drone-sopralluoghi-tecnici
lavoro-drone-stabilimenti-balneari
lavoro-drone-turismo-hotel
lavoro-drone-video-promozionali
lavoro-drone-vigneti-uliveti
offerte-drone-per-freelance
offerte-lavoro-pilota-drone
opportunita-lavorative-droni
piattaforma-lavoro-piloti-drone
pilota-drone-per-aziende
piloti-drone-per-foto-immobili
piloti-drone-per-lavori-edili
piloti-drone-per-riprese-eventi
richiedi-preventivo-drone
richieste-clienti-piloti-drone
trova-pilota-drone-italia
trovare-clienti-con-drone
`)

const leadSlugs = list(`
preventivo-drone-cantiere
preventivo-drone-immobiliare
preventivo-drone-per-calcolo-volumi-inerti
preventivo-drone-per-comuni-controllo-territorio
preventivo-drone-per-controllo-allagamenti
preventivo-drone-per-controllo-allevamenti
preventivo-drone-per-controllo-bacini-idrici
preventivo-drone-per-controllo-canali-irrigazione
preventivo-drone-per-controllo-cantiere-ristrutturazione
preventivo-drone-per-controllo-cave-ambiente
preventivo-drone-per-controllo-chiese-esterne
preventivo-drone-per-controllo-colture
preventivo-drone-per-controllo-comignoli
preventivo-drone-per-controllo-concessionarie-auto
preventivo-drone-per-controllo-copertura-industriale
preventivo-drone-per-controllo-corsi-d-acqua
preventivo-drone-per-controllo-coste-e-dune
preventivo-drone-per-controllo-danni-capannone
preventivo-drone-per-controllo-demolizioni
preventivo-drone-per-controllo-depuratori
preventivo-drone-per-controllo-distacchi-intonaco
preventivo-drone-per-controllo-dopo-vento-forte
preventivo-drone-per-controllo-edifici-storici
preventivo-drone-per-controllo-impianti-biogas
preventivo-drone-per-controllo-impianti-compostaggio
preventivo-drone-per-controllo-impianti-eolici
preventivo-drone-per-controllo-impianti-sportivi
preventivo-drone-per-controllo-infiltrazioni-tetto
preventivo-drone-per-controllo-magazzino-logistico
preventivo-drone-per-controllo-ombreggiamenti-fotovoltaico
preventivo-drone-per-controllo-ospedali-esterni
preventivo-drone-per-controllo-pannelli-sandwich
preventivo-drone-per-controllo-parchi-pubblici
preventivo-drone-per-controllo-pascoli
preventivo-drone-per-controllo-pluviali-condominio
preventivo-drone-per-controllo-ponteggi
preventivo-drone-per-controllo-recinzioni-aziendali
preventivo-drone-per-controllo-rifiuti-abbandonati
preventivo-drone-per-controllo-rimboschimento
preventivo-drone-per-controllo-serre-agricole
preventivo-drone-per-controllo-silos-industriali
preventivo-drone-per-controllo-strade-comunali
preventivo-drone-per-controllo-tegole-rotte
preventivo-drone-per-controllo-terrazzo-privato
preventivo-drone-per-controllo-tettoie-esterne
preventivo-drone-per-controllo-torri-industriali
preventivo-drone-per-controllo-tralicci-telecomunicazioni
preventivo-drone-per-controllo-viadotti
preventivo-drone-per-controllo-zone-umide
preventivo-drone-per-danni-grandine-agricoltura
preventivo-drone-per-danni-siccita-agricola
preventivo-drone-per-documentazione-danni-maltempo-azienda
preventivo-drone-per-documentazione-danni-maltempo-casa
preventivo-drone-per-documentazione-incendi-boschivi
preventivo-drone-per-documentazione-lavori-industriali
preventivo-drone-per-documentazione-restauro-facciata
preventivo-drone-per-documentazione-ristrutturazione-edificio
preventivo-drone-per-foto-aeree-casa-in-vendita
preventivo-drone-per-foto-aeree-terreni-in-vendita
preventivo-drone-per-fotogrammetria-cantiere
preventivo-drone-per-impianto-fotovoltaico-su-tetto
preventivo-drone-per-ispezione-acquedotti-esterni
preventivo-drone-per-ispezione-camini-industriali
preventivo-drone-per-ispezione-campanili
preventivo-drone-per-ispezione-canne-fumarie
preventivo-drone-per-ispezione-capannone-produttivo
preventivo-drone-per-ispezione-copertura-in-lamiera
preventivo-drone-per-ispezione-cornicioni
preventivo-drone-per-ispezione-deposito-industriale
preventivo-drone-per-ispezione-dighe
preventivo-drone-per-ispezione-dopo-grandine
preventivo-drone-per-ispezione-facciata-edificio
preventivo-drone-per-ispezione-gronde-capannone
preventivo-drone-per-ispezione-immobili-pubblici
preventivo-drone-per-ispezione-impianti-esterni-industriali
preventivo-drone-per-ispezione-linee-elettriche
preventivo-drone-per-ispezione-linee-vita
preventivo-drone-per-ispezione-lucernari
preventivo-drone-per-ispezione-pale-eoliche
preventivo-drone-per-ispezione-parcheggi-commerciali
preventivo-drone-per-ispezione-pensiline
preventivo-drone-per-ispezione-ponti
preventivo-drone-per-ispezione-pontili
preventivo-drone-per-ispezione-scuole
preventivo-drone-per-ispezione-stadi
preventivo-drone-per-ispezione-strade-private
preventivo-drone-per-ispezione-terrazzi-condominiali
preventivo-drone-per-ispezione-tetto-condominiale
preventivo-drone-per-ispezione-tetto-privato
preventivo-drone-per-ispezione-vetrate-esterne
preventivo-drone-per-mappa-aerea-area-aziendale
preventivo-drone-per-mappa-aerea-area-privata
preventivo-drone-per-mappatura-agricola
preventivo-drone-per-mappatura-piazzali-logistici
preventivo-drone-per-modello-3d-edificio
preventivo-drone-per-monitoraggio-argini
preventivo-drone-per-monitoraggio-boschi
preventivo-drone-per-monitoraggio-campi-agricoli
preventivo-drone-per-monitoraggio-cantiere-edile
preventivo-drone-per-monitoraggio-discariche-abusive
preventivo-drone-per-monitoraggio-fauna-ambiente
preventivo-drone-per-monitoraggio-fiumi
preventivo-drone-per-monitoraggio-frutteti
preventivo-drone-per-monitoraggio-smottamenti
preventivo-drone-per-monitoraggio-vigneti
preventivo-drone-per-nuvola-punti-edificio
preventivo-drone-per-ortofoto-cantiere
preventivo-drone-per-ortofoto-polo-logistico
preventivo-drone-per-ortofoto-terreno-agricolo
preventivo-drone-per-parco-fotovoltaico
preventivo-drone-per-perizia-assicurativa-visiva
preventivo-drone-per-presentazione-immobile-di-lusso
preventivo-drone-per-presentazione-stabilimento-aziendale
preventivo-drone-per-preventivo-drone-economico
preventivo-drone-per-preventivo-drone-professionale
preventivo-drone-per-preventivo-foto-drone
preventivo-drone-per-preventivo-foto-e-video-drone
preventivo-drone-per-preventivo-urgente-drone
preventivo-drone-per-preventivo-video-drone
preventivo-drone-per-protezione-civile-supporto-drone
preventivo-drone-per-rilievo-accumuli-materiale
preventivo-drone-per-rilievo-altimetrico-indicativo
preventivo-drone-per-rilievo-area-logistica
preventivo-drone-per-rilievo-catastale-visivo
preventivo-drone-per-rilievo-cave
preventivo-drone-per-rilievo-costiero
preventivo-drone-per-rilievo-frana
preventivo-drone-per-rilievo-miniere
preventivo-drone-per-rilievo-movimenti-terra
preventivo-drone-per-rilievo-piazzale-industriale
preventivo-drone-per-rilievo-planimetrico-aereo
preventivo-drone-per-rilievo-sbancamento
preventivo-drone-per-rilievo-scavo
preventivo-drone-per-rilievo-terreno-edificabile
preventivo-drone-per-rilievo-topografico-terreno
preventivo-drone-per-rilievo-uliveto
preventivo-drone-per-rilievo-vigneto
preventivo-drone-per-riprese-agriturismo
preventivo-drone-per-riprese-aree-archeologiche
preventivo-drone-per-riprese-attico-panoramico
preventivo-drone-per-riprese-aziende-vinicole
preventivo-drone-per-riprese-b-e-b
preventivo-drone-per-riprese-borghi-turistici
preventivo-drone-per-riprese-caseifici
preventivo-drone-per-riprese-centri-storici
preventivo-drone-per-riprese-centro-commerciale
preventivo-drone-per-riprese-darsene
preventivo-drone-per-riprese-evento-aziendale
preventivo-drone-per-riprese-fiera
preventivo-drone-per-riprese-frantoi
preventivo-drone-per-riprese-immobiliari-villa
preventivo-drone-per-riprese-location-eventi
preventivo-drone-per-riprese-maneggi
preventivo-drone-per-riprese-musei-all-aperto
preventivo-drone-per-riprese-parchi-naturali
preventivo-drone-per-riprese-porti-turistici
preventivo-drone-per-riprese-resort
preventivo-drone-per-riprese-rimessaggi
preventivo-drone-per-riprese-rustici-e-casali
preventivo-drone-per-riprese-sportive-outdoor
preventivo-drone-per-riprese-stabilimento-balneare
preventivo-drone-per-riprese-vivai
preventivo-drone-per-serre-fotovoltaiche
preventivo-drone-per-sopralluogo-edile-in-quota
preventivo-drone-per-sopralluogo-tecnico-con-drone
preventivo-drone-per-stato-avanzamento-lavori
preventivo-drone-per-stress-idrico-colture
preventivo-drone-per-supporto-agenzie-immobiliari
preventivo-drone-per-supporto-amministratore-condominio
preventivo-drone-per-supporto-architetto
preventivo-drone-per-supporto-coordinatore-sicurezza
preventivo-drone-per-supporto-direttore-lavori
preventivo-drone-per-supporto-ditte-grondaie
preventivo-drone-per-supporto-ditte-impermeabilizzazione
preventivo-drone-per-supporto-facility-manager
preventivo-drone-per-supporto-geometra
preventivo-drone-per-supporto-imprese-edili
preventivo-drone-per-supporto-ingegnere
preventivo-drone-per-supporto-installatori-fotovoltaico
preventivo-drone-per-supporto-manutentori-condominiali
preventivo-drone-per-supporto-periti-assicurativi
preventivo-drone-per-supporto-periti-industriali
preventivo-drone-per-supporto-property-manager
preventivo-drone-per-supporto-societa-di-manutenzione
preventivo-drone-per-supporto-ufficio-tecnico-aziendale
preventivo-drone-per-supporto-ufficio-tecnico-comunale
preventivo-drone-per-termografia-fotovoltaico
preventivo-drone-per-verifica-antenne-sul-tetto
preventivo-drone-per-verifica-balconi-condominio
preventivo-drone-per-verifica-fessurazioni-facciata
preventivo-drone-per-verifica-guaina-bituminosa
preventivo-drone-per-verifica-pannelli-dopo-grandine
preventivo-drone-per-verifica-parapetti-condominiali
preventivo-drone-per-verifica-piazzali-aziendali
preventivo-drone-per-video-aziendale-industriale
preventivo-drone-per-video-camping
preventivo-drone-per-video-case-vacanza
preventivo-drone-per-video-hotel
preventivo-drone-per-video-immobiliare-appartamento-con-terrazzo
preventivo-drone-per-video-manifestazione-all-aperto
preventivo-drone-per-video-matrimonio-location-esterna
preventivo-drone-per-video-sala-ricevimenti
preventivo-fotogrammetria-drone
preventivo-ispezione-drone
preventivo-pilota-drone
preventivo-riprese-aeree
preventivo-video-drone
`)

const patentinoSlugs = list(`
attestato-a1-a3-drone
attestato-a2-drone
certificazione-drone-enac
come-diventare-pilota-drone
corso-pilota-drone
lavorare-con-i-droni
patentino-drone
pilota-drone-certificato
`)

function formatText(slug) {
  return slug
    .replaceAll("-", " ")
    .replaceAll(" d acqua", " d’acqua")
    .replaceAll(" dacqua", " d’acqua")
    .replaceAll(" universita", " università")
    .replaceAll(" b e b", " B&B")
    .replaceAll(" a1 a3", " A1/A3")
    .replaceAll(" a2", " A2")
    .replaceAll(" enac", " ENAC")
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createIspezioneDroneMirataPage(argomentoSlug, obiettivoSlug) {
  const argomento = formatText(argomentoSlug)
  const obiettivo = formatText(obiettivoSlug)
  const titolo = capitalize(`ispezione drone ${argomento} ${obiettivo}`)
  const slug = `ispezione-drone-${argomentoSlug}-${obiettivoSlug}`

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per foto, video, controlli visivi e documentazione mirata. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: "Ispezioni drone mirate",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il drone può aiutare a osservare dall’alto edifici, terreni, strutture, coperture, aree esterne e punti difficili da raggiungere.`,
    sections: [
      {
        title: `Quando serve un’ispezione drone per ${argomento}`,
        text: `Un’ispezione drone può essere utile quando bisogna controllare ${argomento} senza partire subito con accessi complessi, piattaforme, ponteggi o sopralluoghi lunghi. Da terra spesso si vede solo una parte della situazione, mentre una ripresa dall’alto permette di capire meglio contesto, accessi, superfici, punti critici e dettagli nascosti.`
      },
      {
        title: `Perché richiedere ${obiettivo}`,
        text: `La richiesta ${obiettivo} può servire quando il cliente ha bisogno di materiale chiaro, ordinato e condivisibile. Foto e video con drone possono aiutare a documentare lo stato dei luoghi, controllare danni visibili, preparare un preventivo, supportare una manutenzione o mostrare una situazione a tecnici, imprese, amministratori o proprietari.`
      },
      {
        title: "Cosa può documentare il pilota drone",
        text: `Il pilota drone può realizzare foto panoramiche, video descrittivi, immagini di dettaglio e riprese dall’alto in base alla richiesta. Il materiale può mostrare coperture, facciate, terrazzi, piazzali, accessi, confini, aree esterne, zone danneggiate e punti difficili da vedere da terra.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Per ricevere candidature più precise indica Comune o zona, tipo di edificio o area, motivo dell’ispezione, urgenza, risultato desiderato ed eventuali ostacoli o limitazioni di accesso. Puoi specificare se servono foto, video, report fotografico, documentazione prima e dopo o un controllo visivo generale.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard mette in contatto chi ha bisogno di un servizio drone con piloti disponibili. Pubblica il lavoro, descrivi cosa serve e confronta le candidature ricevute prima di scegliere il candidato più adatto.`
      }
    ]
  }
}

function createLavoroPage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: usa DroneGuard per trovare opportunità, richieste e clienti interessati a servizi drone professionali.`,
    category: "Lavoro drone",
    h1: `${titolo} con DroneGuard`,
    intro: `DroneGuard aiuta piloti drone, freelance e professionisti a intercettare richieste di lavoro nel settore drone. Questa pagina è pensata per chi vuole trovare clienti, candidarsi a incarichi o farsi trovare da aziende e privati che cercano servizi drone.`,
    sections: [
      {
        title: "Perché usare DroneGuard per il lavoro drone",
        text: `Trovare clienti con il drone non significa solo pubblicare foto belle sui social. Servono richieste concrete, aziende interessate, privati che hanno un problema da risolvere e un sistema semplice per candidarsi. DroneGuard permette al cliente di pubblicare un lavoro e al pilota di proporsi in modo diretto.`
      },
      {
        title: "Che tipo di lavori possono arrivare",
        text: `Le richieste possono riguardare ispezioni di tetti, grondaie, facciate, capannoni, immobili, cantieri, terreni, eventi, agricoltura, fotovoltaico, video promozionali, perizie visive, sopralluoghi tecnici e documentazione fotografica.`
      },
      {
        title: "Come presentarsi meglio",
        text: `Un pilota dovrebbe spiegare esperienza, zone coperte, tipo di servizi offerti, attrezzatura disponibile, tempi di consegna e modalità di lavoro. Più la candidatura è chiara, più il cliente può valutare se il profilo è adatto alla richiesta.`
      },
      {
        title: "Come funziona",
        text: `Il cliente pubblica il lavoro, il pilota vede la richiesta e può candidarsi. Il cliente confronta le candidature e sceglie il candidato più adatto in base a disponibilità, esperienza e proposta.`
      }
    ]
  }
}

function createLeadPage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: pubblica una richiesta su DroneGuard e trova piloti drone disponibili per preventivi, foto, video, ispezioni e documentazione.`,
    category: "Preventivi drone",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi richiedere un preventivo drone in modo semplice. Pubblica il lavoro, descrivi cosa ti serve e ricevi candidature da piloti drone disponibili per foto, video, ispezioni, sopralluoghi, controlli visivi, documentazione tecnica e servizi professionali.`,
    sections: [
      {
        title: "Quando richiedere un preventivo drone",
        text: `Un preventivo drone può essere utile quando devi controllare un edificio, documentare un danno, valorizzare un immobile, seguire un cantiere, controllare un terreno, ottenere riprese aeree o raccogliere materiale visivo da condividere con tecnici, imprese, amministratori o assicurazioni.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Per ricevere risposte più precise indica zona, tipo di servizio, obiettivo, urgenza, risultato desiderato, presenza di ostacoli e tipo di materiale richiesto. Puoi chiedere foto, video, report fotografico, controllo visivo, documentazione prima e dopo, riprese promozionali o supporto per un tecnico.`
      },
      {
        title: "Come confrontare le candidature",
        text: `Valuta esperienza, disponibilità, chiarezza della proposta, tipo di consegna, tempi, zona coperta e capacità del pilota di capire il lavoro richiesto. Il prezzo è importante, ma per un servizio drone contano anche sicurezza, fattibilità e qualità del materiale.`
      },
      {
        title: "A chi può servire",
        text: `Il servizio può servire a privati, condomini, aziende, agenzie immobiliari, imprese edili, amministratori, tecnici, geometri, ingegneri, architetti, periti, assicuratori, agronomi, property manager e responsabili di manutenzione.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard mette in contatto clienti e piloti drone. Il cliente pubblica il lavoro, i piloti interessati si candidano e il cliente sceglie il candidato più adatto.`
      }
    ]
  }
}

function createPatentinoPage(slug) {
  const titolo = capitalize(formatText(slug))

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: guida pratica per capire attestati, certificazioni e lavoro con drone, e usare DroneGuard per trovare richieste e servizi drone.`,
    category: "Patentino e piloti drone",
    h1: `${titolo}`,
    intro: `Questa pagina aiuta a capire meglio il tema patentino, attestati, certificazioni e lavoro con drone. DroneGuard è pensato per collegare clienti e piloti drone, quindi avere competenze, documenti e profilo chiaro può aiutare a presentarsi meglio nelle candidature.`,
    sections: [
      {
        title: "Perché formazione e certificazioni contano",
        text: `Nel settore drone non basta saper pilotare: è importante conoscere regole operative, sicurezza, limiti di volo, responsabilità e contesto del servizio. Un cliente serio cerca un pilota capace di valutare fattibilità, condizioni meteo, luogo, persone presenti e tipo di consegna richiesta.`
      },
      {
        title: "Come presentarsi come pilota drone",
        text: `Un profilo chiaro dovrebbe spiegare servizi offerti, zone coperte, esperienza, attrezzatura, eventuali attestati, disponibilità e tipo di lavori gestiti. Questo aiuta il cliente a capire se il pilota è adatto alla richiesta.`
      },
      {
        title: "Lavorare con i droni",
        text: `I lavori possono riguardare riprese immobiliari, ispezioni, cantieri, fotovoltaico, agricoltura, eventi, sopralluoghi tecnici, documentazione danni, video promozionali e supporto ad aziende o professionisti.`
      },
      {
        title: "Come può aiutare DroneGuard",
        text: `DroneGuard permette ai clienti di pubblicare lavori e ai piloti di candidarsi. Una candidatura chiara e professionale può aumentare le possibilità di essere scelti.`
      }
    ]
  }
}

export const ispezioniDroneMirateSeoPages = ispezioniDroneMirateArgomenti.flatMap((argomento) =>
  obiettiviMirati.map((obiettivo) => createIspezioneDroneMirataPage(argomento, obiettivo))
)

export const lavoroSeoPages = lavoroSlugs.map(createLavoroPage)
export const leadSeoPages = leadSlugs.map(createLeadPage)
export const patentinoSeoPages = patentinoSlugs.map(createPatentinoPage)

export const altreSeoPages = [
  ...ispezioniDroneMirateSeoPages,
  ...lavoroSeoPages,
  ...leadSeoPages,
  ...patentinoSeoPages
]