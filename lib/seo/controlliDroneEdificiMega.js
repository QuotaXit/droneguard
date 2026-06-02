const argomentiControlliDroneEdifici = [
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

const obiettiviControlliDroneEdifici = [
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

function createControlliDroneEdificiPage(argomentoSlug, obiettivoSlug) {
  const argomento = formatSlug(argomentoSlug)
  const obiettivo = formatSlug(obiettivoSlug)
  const titolo = capitalize(`controllo drone ${argomento} ${obiettivo}`)
  const slug = `controllo-drone-${argomentoSlug}-${obiettivoSlug}`

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per foto, video, controlli visivi e documentazione di edifici, aree esterne, coperture e strutture. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: "Controlli drone edifici",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per osservare dall’alto edifici, coperture, facciate, piazzali, aree esterne, strutture tecniche e punti difficili da raggiungere. Questa pagina è pensata per chi vuole ottenere foto, video o documentazione visiva prima di un sopralluogo, una manutenzione, una verifica, un preventivo o una presentazione.`,

    sections: [
      {
        title: `Quando serve un controllo drone per ${argomento}`,
        text: `Un controllo drone può essere utile quando bisogna osservare ${argomento} senza partire subito con ponteggi, piattaforme, accessi complessi o sopralluoghi lunghi. Da terra spesso si vede solo una parte della situazione, mentre una ripresa dall’alto permette di capire meglio accessi, ostacoli, superfici, coperture, confini, aree esterne, punti critici e dettagli che possono essere nascosti.

Il drone può fornire una prima documentazione visiva utile a proprietari, amministratori, imprese, tecnici, geometri, ingegneri, architetti, periti, assicuratori, property manager e società di manutenzione.`
      },
      {
        title: `Perché richiedere ${obiettivo}`,
        text: `La richiesta ${obiettivo} può servire quando il cliente ha bisogno di materiale chiaro, ordinato e condivisibile. Foto e video con drone possono aiutare a documentare lo stato dei luoghi, controllare danni visibili, confrontare prima e dopo un intervento, supportare un preventivo, preparare una manutenzione o mostrare una situazione a una persona che non può essere presente fisicamente.

Il drone non sostituisce una relazione tecnica certificata quando serve un professionista abilitato, ma può essere un supporto pratico per capire meglio cosa sta succedendo e decidere il passaggio successivo.`
      },
      {
        title: "Cosa può mostrare il materiale raccolto",
        text: `Il materiale raccolto può mostrare viste panoramiche, dettagli di coperture, facciate, terrazzi, lucernari, gronde, pluviali, piazzali, accessi, confini, zone danneggiate, punti difficili da raggiungere o aree che da terra sono poco visibili. In base al servizio richiesto, il pilota può proporre foto generali, video descrittivi, immagini ravvicinate nei limiti della sicurezza operativa e una selezione ordinata del materiale.

Per ${argomento}, il valore del drone sta soprattutto nel collegare il dettaglio al contesto: non si vede solo il singolo punto, ma anche cosa c’è intorno, come si raggiunge, quali zone sono coinvolte e dove potrebbe essere necessario intervenire.`
      },
      {
        title: "A chi può essere utile",
        text: `Questo servizio può essere utile a privati, condomini, amministratori, imprese edili, studi tecnici, società immobiliari, manutentori, periti assicurativi, aziende, uffici tecnici e proprietari di immobili o aree esterne. Ogni richiesta può avere un obiettivo diverso: controllare un danno, preparare un sopralluogo, archiviare lo stato dei luoghi, supportare una perizia, documentare una manutenzione o valorizzare una proprietà.

Su DroneGuard il cliente descrive cosa deve controllare, indica la zona e riceve candidature da piloti drone disponibili.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Per ricevere candidature più precise è utile indicare il Comune o la zona, il tipo di edificio o area, il motivo del controllo, l’urgenza, il risultato desiderato e l’eventuale presenza di ostacoli, limitazioni di accesso o persone nelle vicinanze. Puoi specificare se ti servono foto, video, immagini di dettaglio, riprese panoramiche, documentazione prima e dopo, materiale per preventivo o un semplice controllo visivo generale.

Più la richiesta è chiara, più i piloti possono valutare fattibilità, sicurezza, tempi, condizioni meteo, eventuali limitazioni operative e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.

Questo sistema è utile perché ogni controllo cambia in base al luogo, all’altezza, alla superficie, agli ostacoli presenti, al tipo di documentazione richiesta e al contesto operativo.`
      }
    ]
  }
}

export const controlliDroneEdificiMegaSeoPages = argomentiControlliDroneEdifici.flatMap((argomento) =>
  obiettiviControlliDroneEdifici.map((obiettivo) =>
    createControlliDroneEdificiPage(argomento, obiettivo)
  )
)