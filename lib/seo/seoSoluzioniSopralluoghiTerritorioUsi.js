function list(text) {
  return text.trim().split(/\s+/).filter(Boolean)
}

const argomentiBase50 = list(`
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

const obiettiviBase10 = list(`
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

const soluzioniBasi = list(`
controllo-copertura-villa-privata
controllo-cornicioni-scuola
controllo-facciata-palazzina
controllo-gronde-e-pluviali
controllo-lucernari-e-velux
controllo-movimento-terra
controllo-muro-di-contenimento
controllo-pannelli-sandwich-capannone
controllo-pensiline-industriali
documentazione-as-built-esterna
documentazione-danni-da-grandine-su-copertura
documentazione-fine-lavori-esterni
documentazione-guaina-bituminosa
documentazione-ponteggi-esterni
documentazione-pre-intervento-edile
documentazione-stato-avanzamento-lavori
documentazione-tetto-condominiale
foto-aeree-attico-con-terrazzo
mappatura-piazzale-di-cantiere
modello-3d-fabbricato-esistente
monitoraggio-cantiere-residenziale
ortofoto-area-privata
presentazione-casale-di-campagna
rilievo-area-di-scavo
rilievo-lotto-edificabile
rilievo-strada-privata
sopralluogo-esterno-edificio-storico
verifica-linea-vita-su-tetto
verifica-recinzione-cantiere
verifica-terrazzo-condominiale
verifica-tetto-casa-indipendente
verifica-tettoia-parcheggio
video-esterno-villa-in-vendita
`)

const soluzioniVarianti = [
  "",
  "aziendale",
  "con-foto-dettagliate",
  "con-video-panoramico",
  "condominiale",
  "per-assicurazione",
  "per-manutenzione",
  "per-preventivo",
  "per-vendita",
  "periodico",
  "post-intervento",
  "pre-intervento",
  "privato",
  "tecnico",
  "urgente"
]

const soluzioniExtraSlugs = list(`
soluzione-drone-per-riprese-drone-per-agriturismo
soluzione-drone-per-riprese-drone-per-agriturismo-aziendale
soluzione-drone-per-riprese-drone-per-agriturismo-condominiale
soluzione-drone-per-riprese-drone-per-agriturismo-privato
soluzione-drone-per-riprese-drone-per-agriturismo-tecnico
`)

const usiBasi = list(`
controllo-balconi-e-frontalini
controllo-banchine-di-carico
controllo-lucernari-tetto-industriale
controllo-recinzioni-stabilimento
controllo-silos-e-serbatoi-esterni
controllo-terrazzo-impermeabilizzato
controllo-tetto-dopo-vento-forte
documentazione-capannone-per-locazione
documentazione-depositi-materiali
documentazione-grondaie-ostruite
documentazione-tettoia-fotovoltaica
ispezione-visiva-pensiline-ingresso
mappatura-piazzale-aziendale
monitoraggio-avanzamento-cantiere
ortofoto-area-produttiva
rilievo-esterno-edificio-da-ristrutturare
riprese-presentazione-polo-logistico
verifica-canne-fumarie-esterne
verifica-coperture-industriali-dopo-grandine
verifica-facciate-alte-condominio
verifica-illuminazione-piazzali
`)

const usiVarianti = [
  "",
  "con-foto-dettagliate",
  "con-panoramica-completa",
  "con-video-aereo",
  "dopo-maltempo",
  "per-amministratori",
  "per-archiviazione-stato-luoghi",
  "per-assicurazione",
  "per-aziende",
  "per-confronto-fornitori",
  "per-contenuti-social",
  "per-controllo-periodico",
  "per-documentazione-tecnica",
  "per-gestione-immobili",
  "per-manutenzione-programmata",
  "per-preventivo",
  "per-privati",
  "per-report-fotografico",
  "per-sopralluogo-preliminare",
  "per-ufficio-tecnico",
  "per-urgenze-visive",
  "per-vendita-o-presentazione",
  "professionale"
]

const usiScavoVarianti = [
  "",
  "con-video-aereo",
  "dopo-maltempo",
  "per-amministratori",
  "per-assicurazione",
  "per-aziende",
  "per-controllo-periodico",
  "per-documentazione-tecnica",
  "per-gestione-immobili",
  "per-manutenzione-programmata",
  "per-preventivo",
  "per-privati",
  "per-report-fotografico",
  "per-sopralluogo-preliminare",
  "per-ufficio-tecnico",
  "per-vendita-o-presentazione",
  "professionale"
]

function formatText(slug) {
  return slug
    .replaceAll("-", " ")
    .replaceAll(" d acqua", " d’acqua")
    .replaceAll(" universita", " università")
    .replaceAll(" velux", " Velux")
    .replaceAll(" 3d", " 3D")
    .replaceAll(" as built", " as-built")
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function joinSlug(base, variante) {
  return variante ? `${base}-${variante}` : base
}

function createPage({ slug, titolo, category, description, intro, focus }) {
  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description,
    category,
    h1: `${titolo} con DroneGuard`,
    intro,
    sections: [
      {
        title: `Quando serve ${titolo.toLowerCase()}`,
        text: `Un servizio come ${titolo.toLowerCase()} può essere utile quando bisogna osservare, documentare o presentare una situazione che da terra non si vede bene. Il drone può aiutare a controllare coperture, facciate, terrazzi, piazzali, terreni, aree esterne, cantieri, impianti, strutture tecniche e punti difficili da raggiungere.

In molti casi non serve partire subito con ponteggi, piattaforme o sopralluoghi complessi. Una prima documentazione visiva può aiutare a capire meglio il contesto, individuare i punti critici, preparare una richiesta più chiara e condividere immagini con tecnici, imprese, amministratori, proprietari o assicurazioni.`
      },
      {
        title: "Perché usare un drone",
        text: `Il drone permette di ottenere foto, video e viste dall’alto in modo rapido e ordinato. Può essere utile per controlli visivi, sopralluoghi, manutenzioni, preventivi, report fotografici, archivi dello stato dei luoghi, documentazione assicurativa, valorizzazione commerciale e presentazioni.

Il drone non sostituisce una relazione tecnica certificata quando serve un professionista abilitato, ma può fornire un supporto visivo molto utile per capire meglio cosa fare, quali zone approfondire e come organizzare il passaggio successivo.`
      },
      {
        title: "Cosa può documentare il pilota drone",
        text: `Il pilota drone può realizzare foto panoramiche, video descrittivi, immagini di dettaglio e riprese dall’alto in base alla richiesta. Il materiale può mostrare accessi, superfici, confini, coperture, gronde, lucernari, facciate, balconi, terrazzi, piazzali, aree esterne, zone danneggiate, elementi da manutenere o punti difficili da raggiungere.

Per ${focus}, il valore principale è collegare il dettaglio al contesto generale: non si vede solo il singolo punto, ma anche cosa c’è intorno, come si raggiunge, quali zone sono coinvolte e dove potrebbe essere necessario intervenire.`
      },
      {
        title: "A chi può servire questo servizio",
        text: `Questo servizio può servire a privati, condomini, amministratori, imprese edili, aziende, società immobiliari, property manager, studi tecnici, geometri, ingegneri, architetti, manutentori, periti assicurativi, agronomi, uffici tecnici e proprietari di immobili o terreni.

Ogni richiesta può avere un obiettivo diverso: documentare un danno, preparare un preventivo, controllare una copertura, valorizzare un immobile, seguire una manutenzione, verificare un’area esterna, raccogliere immagini per una pratica o creare materiale promozionale.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Per ricevere candidature più precise è utile indicare il Comune o la zona, il tipo di area o struttura, il motivo del servizio, l’urgenza, il risultato desiderato e l’eventuale presenza di ostacoli o limitazioni di accesso.

Puoi specificare se ti servono foto, video, immagini di dettaglio, riprese panoramiche, documentazione prima e dopo, materiale per assicurazione, materiale per preventivo, report fotografico, contenuti commerciali o un semplice controllo visivo generale.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.`
      }
    ]
  }
}

function createSoluzionePage(slug) {
  const nome = formatText(slug.replace("soluzione-drone-per-", ""))
  const titolo = capitalize(`soluzione drone per ${nome}`)

  return createPage({
    slug,
    titolo,
    category: "Soluzioni drone",
    description: `${titolo}: pubblica una richiesta su DroneGuard e trova piloti drone per foto, video, sopralluoghi, documentazione visiva e servizi professionali.`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Questa soluzione è pensata per clienti, aziende, tecnici, amministratori e professionisti che hanno bisogno di immagini dall’alto, video e documentazione visiva chiara.`,
    focus: nome
  })
}

function createSopralluogoPage(argomentoSlug, obiettivoSlug) {
  const argomento = formatText(argomentoSlug)
  const obiettivo = formatText(obiettivoSlug)
  const slug = `sopralluogo-drone-${argomentoSlug}-${obiettivoSlug}`
  const titolo = capitalize(`sopralluogo drone ${argomento} ${obiettivo}`)

  return createPage({
    slug,
    titolo,
    category: "Sopralluoghi drone professionali",
    description: `${titolo}: trova piloti drone per sopralluoghi, foto, video, controlli visivi e documentazione professionale.`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il sopralluogo con drone può aiutare a osservare dall’alto aree, edifici, terreni, coperture, impianti e punti difficili da raggiungere.`,
    focus: argomento
  })
}

function createTerritorioPage(argomentoSlug, obiettivoSlug) {
  const argomento = formatText(argomentoSlug)
  const obiettivo = formatText(obiettivoSlug)
  const slug = `drone-territorio-${argomentoSlug}-${obiettivoSlug}`
  const titolo = capitalize(`drone territorio ${argomento} ${obiettivo}`)

  return createPage({
    slug,
    titolo,
    category: "Territorio e ambiente drone",
    description: `${titolo}: trova piloti drone per controlli del territorio, ambiente, aree esterne, terreni, argini, boschi e documentazione visiva.`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per documentare territorio, ambiente, aree verdi, zone umide, argini, corsi d’acqua, terreni, boschi e aree difficili da percorrere.`,
    focus: argomento
  })
}

function createUsoPage(slug) {
  const nome = formatText(slug.replace("uso-drone-per-", ""))
  const titolo = capitalize(`uso drone per ${nome}`)

  return createPage({
    slug,
    titolo,
    category: "Usi drone professionali",
    description: `${titolo}: scopri come usare il drone per foto, video, controlli visivi, sopralluoghi, documentazione e servizi professionali.`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Questa pagina descrive un uso professionale del drone per clienti, tecnici, aziende, amministratori, manutentori e proprietari.`,
    focus: nome
  })
}

export const soluzioniDroneSeoPages = [
  ...soluzioniBasi.flatMap((base) =>
    soluzioniVarianti.map((variante) =>
      createSoluzionePage(`soluzione-drone-per-${joinSlug(base, variante)}`)
    )
  ),
  ...soluzioniExtraSlugs.map(createSoluzionePage)
]

export const sopralluoghiDroneProfessionaliSeoPages = argomentiBase50.flatMap((argomento) =>
  obiettiviBase10.map((obiettivo) =>
    createSopralluogoPage(argomento, obiettivo)
  )
)

export const territorioAmbienteDroneSeoPages = argomentiBase50.flatMap((argomento) =>
  obiettiviBase10.map((obiettivo) =>
    createTerritorioPage(argomento, obiettivo)
  )
)

export const usiDroneProfessionaliSeoPages = [
  ...usiBasi.flatMap((base) =>
    usiVarianti.map((variante) =>
      createUsoPage(`uso-drone-per-${joinSlug(base, variante)}`)
    )
  ),
  ...usiScavoVarianti.map((variante) =>
    createUsoPage(`uso-drone-per-${joinSlug("documentazione-scavo-e-movimento-terra", variante)}`)
  )
]

export const seoSoluzioniSopralluoghiTerritorioUsiPages = [
  ...soluzioniDroneSeoPages,
  ...sopralluoghiDroneProfessionaliSeoPages,
  ...territorioAmbienteDroneSeoPages,
  ...usiDroneProfessionaliSeoPages
]