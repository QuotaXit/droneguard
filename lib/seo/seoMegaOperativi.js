function list(text) {
  return text.trim().split(/\s+/).filter(Boolean)
}

const argomentiMegaOperativi = list(`
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

const obiettiviMegaOperativi = list(`
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

const gruppiMegaOperativi = [
  {
    prefix: "drone-manutenzione",
    category: "Manutenzioni drone specialistiche",
    label: "drone manutenzione",
    descriptionAction: "manutenzioni, controlli visivi, verifiche esterne e documentazione dello stato dei luoghi",
    focus: "manutenzione"
  },
  {
    prefix: "preventivo-servizio-drone",
    category: "Preventivi drone specialistici",
    label: "preventivo servizio drone",
    descriptionAction: "preventivi per foto, video, ispezioni, sopralluoghi, controlli visivi e documentazione tecnica",
    focus: "preventivo"
  },
  {
    prefix: "rilievo-drone-operativo",
    category: "Rilievi drone operativi",
    label: "rilievo drone operativo",
    descriptionAction: "rilievi visivi, documentazione dall’alto, sopralluoghi operativi e supporto tecnico",
    focus: "rilievo"
  },
  {
    prefix: "riprese-drone",
    category: "Riprese drone commerciali",
    label: "riprese drone",
    descriptionAction: "riprese commerciali, foto, video, presentazioni, documentazione visiva e contenuti promozionali",
    focus: "riprese"
  }
]

function formatText(slug) {
  return slug
    .replaceAll("-", " ")
    .replaceAll(" d acqua", " d’acqua")
    .replaceAll(" universita", " università")
    .replaceAll(" e inerti", " e inerti")
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createMegaOperativaPage(gruppo, argomentoSlug, obiettivoSlug) {
  const argomento = formatText(argomentoSlug)
  const obiettivo = formatText(obiettivoSlug)
  const titolo = capitalize(`${gruppo.label} ${argomento} ${obiettivo}`)
  const slug = `${gruppo.prefix}-${argomentoSlug}-${obiettivoSlug}`

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per ${gruppo.descriptionAction}. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: gruppo.category,
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il servizio può essere utile per aziende, privati, amministratori, tecnici, imprese, property manager, agenzie immobiliari e professionisti che hanno bisogno di foto, video o documentazione visiva su edifici, aree esterne, terreni, coperture, piazzali, impianti, strutture e punti difficili da osservare da terra.`,

    sections: [
      {
        title: `Quando richiedere ${titolo.toLowerCase()}`,
        text: `Un servizio come ${titolo.toLowerCase()} può essere utile quando bisogna osservare o documentare ${argomento}. Da terra spesso si vede solo una parte della situazione, mentre il drone permette di avere una visione più ampia del contesto, degli accessi, delle superfici, dei confini, dei punti critici, delle coperture, degli spazi esterni e degli elementi difficili da raggiungere.

Questo tipo di richiesta può nascere prima di una manutenzione, dopo un danno da maltempo, durante una fase di vendita, prima di un preventivo, per un report fotografico, per un archivio dello stato dei luoghi o per condividere immagini con tecnici, imprese, clienti, amministratori o assicurazioni.`
      },
      {
        title: `Perché è utile ${obiettivo}`,
        text: `La richiesta ${obiettivo} serve quando il cliente ha bisogno di materiale chiaro, ordinato e facilmente condivisibile. Foto e video con drone possono aiutare a spiegare un problema, mostrare un’area, confrontare prima e dopo un intervento, creare documentazione, preparare un sopralluogo o valorizzare una proprietà.

Il drone non sostituisce una relazione tecnica certificata quando serve un professionista abilitato, ma può fornire un supporto visivo molto utile per decidere cosa fare, chiedere un preventivo più preciso, organizzare un intervento o presentare meglio una situazione.`
      },
      {
        title: "Cosa può documentare il pilota drone",
        text: `Il pilota drone può realizzare foto panoramiche, video descrittivi, immagini di dettaglio e riprese dall’alto in base alla richiesta. Il materiale può mostrare coperture, facciate, terrazzi, lucernari, gronde, pluviali, piazzali, accessi, confini, aree esterne, strutture tecniche, zone danneggiate, superfici estese e punti difficili da vedere da terra.

Per ${argomento}, il valore del drone sta soprattutto nel collegare il dettaglio al contesto generale. Non si vede solo il singolo punto, ma anche cosa c’è intorno, come si raggiunge, quali zone sono coinvolte e dove potrebbe essere necessario un controllo successivo.`
      },
      {
        title: "A chi può servire questo servizio",
        text: `Questo servizio può servire a privati, condomini, amministratori, imprese edili, aziende, società immobiliari, property manager, studi tecnici, geometri, ingegneri, architetti, manutentori, periti assicurativi, agronomi, uffici tecnici e proprietari di immobili o terreni.

Ogni richiesta può avere un obiettivo diverso: documentare un danno, preparare un preventivo, controllare una copertura, seguire una manutenzione, valorizzare un immobile, verificare un’area esterna, raccogliere immagini per una pratica o creare materiale promozionale.`
      },
      {
        title: "Cosa indicare nella richiesta su DroneGuard",
        text: `Per ricevere candidature più precise è utile indicare il Comune o la zona, il tipo di area o struttura, il motivo del servizio, l’urgenza, il risultato desiderato e l’eventuale presenza di ostacoli o limitazioni di accesso.

Puoi specificare se ti servono foto, video, immagini di dettaglio, riprese panoramiche, documentazione prima e dopo, materiale per assicurazione, materiale per preventivo, report fotografico, contenuti commerciali o un semplice controllo visivo generale. Più la richiesta è chiara, più i piloti possono valutare fattibilità, sicurezza, tempi, condizioni meteo, eventuali limitazioni operative e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.

Questo sistema è utile perché ogni servizio cambia in base al luogo, all’altezza, alla superficie da controllare, al tipo di documentazione richiesta, alla presenza di persone o ostacoli e al contesto operativo.`
      }
    ]
  }
}

export const megaOperativiSeoPages = gruppiMegaOperativi.flatMap((gruppo) =>
  argomentiMegaOperativi.flatMap((argomento) =>
    obiettiviMegaOperativi.map((obiettivo) =>
      createMegaOperativaPage(gruppo, argomento, obiettivo)
    )
  )
)