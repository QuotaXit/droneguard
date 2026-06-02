const industriaLogistica = [
  "drone-per-area-artigianale",
  "drone-per-aree-di-stoccaggio",
  "drone-per-autotrasporti-logistica",
  "drone-per-banchine-portuali",
  "drone-per-cantieri-navali",
  "drone-per-capannoni-industriali",
  "drone-per-capannoni-logistici",
  "drone-per-cave-e-miniere",
  "drone-per-centri-logistici",
  "drone-per-controllo-piazzali-aziendali",
  "drone-per-controllo-recinzioni-industriali",
  "drone-per-danni-capannoni-industriali",
  "drone-per-depositi-container",
  "drone-per-depositi-industriali",
  "drone-per-depositi-merci",
  "drone-per-documentazione-industriale",
  "drone-per-fabbriche",
  "drone-per-fotogrammetria-industriale",
  "drone-per-hub-logistici",
  "drone-per-impianti-esterni-industriali",
  "drone-per-impianti-produttivi",
  "drone-per-interporti",
  "drone-per-layout-piazzali-logistici",
  "drone-per-logistica-industriale",
  "drone-per-magazzini-esterni",
  "drone-per-magazzini-logistici",
  "drone-per-manutenzione-aree-logistiche",
  "drone-per-manutenzione-capannoni",
  "drone-per-mappatura-aree-logistiche",
  "drone-per-monitoraggio-aree-industriali",
  "drone-per-officine-industriali",
  "drone-per-ortofoto-poli-logistici",
  "drone-per-parchi-industriali",
  "drone-per-piazzali-logistici",
  "drone-per-porti-turistici",
  "drone-per-presentazione-polo-logistico",
  "drone-per-presentazione-stabilimento",
  "drone-per-rilievo-piazzali-industriali",
  "drone-per-scalo-merci",
  "drone-per-stabilimenti-industriali",
  "drone-per-terminal-container",
  "drone-per-terminal-merci",
  "drone-per-verifica-illuminazione-piazzali",
  "drone-per-video-aziendali-industriali",
  "drone-per-zona-industriale"
]

function formatSlug(slug) {
  return slug
    .replace("drone-per-", "")
    .replaceAll("-", " ")
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createIndustriaLogisticaPage(slug) {
  const nome = formatSlug(slug)
  const titolo = capitalize(`drone per ${nome}`)

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per foto, video, controlli visivi e documentazione di aree industriali, logistiche, capannoni, piazzali, magazzini e stabilimenti.`,
    category: "Industria e logistica",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per controllare, documentare e presentare aree industriali, stabilimenti, capannoni, piazzali logistici, magazzini, depositi, terminal merci, aree di stoccaggio, impianti esterni e zone operative difficili da osservare completamente da terra.`,

    sections: [
      {
        title: `Quando serve un ${titolo.toLowerCase()}`,
        text: `Un servizio drone può essere utile quando bisogna osservare dall’alto un’area industriale o logistica senza limitarsi alla visuale da terra. In contesti come capannoni, piazzali, magazzini, depositi merci, aree di carico, terminal, stabilimenti e impianti produttivi, spesso è importante vedere la disposizione generale degli spazi, i percorsi dei mezzi, gli accessi, le coperture, le recinzioni, le zone di stoccaggio e le aree più difficili da raggiungere.

Per un servizio come ${titolo.toLowerCase()}, il drone può aiutare aziende, responsabili di stabilimento, property manager, tecnici, imprese di manutenzione, società logistiche e uffici tecnici a ottenere una visione più chiara e ordinata della situazione.`
      },
      {
        title: "Perché usare un drone in industria e logistica",
        text: `Il vantaggio principale del drone è la possibilità di vedere rapidamente aree estese. Un piazzale, un capannone, un hub logistico o uno stabilimento industriale possono avere zone molto ampie, punti alti, coperture difficili da controllare, aree operative con mezzi in movimento e parti che da terra non sono facili da documentare.

Il drone non sostituisce una valutazione tecnica certificata quando serve un professionista abilitato, ma può fornire foto e video utili per manutenzione, documentazione interna, presentazioni aziendali, verifica dello stato dei luoghi, controllo danni, mappatura visiva, sopralluoghi preliminari e supporto a preventivi.`
      },
      {
        title: "Cosa può documentare il pilota drone",
        text: `Il pilota drone può realizzare foto panoramiche, video descrittivi, immagini di dettaglio e riprese dall’alto in base alla richiesta. Il materiale può mostrare capannoni, coperture, lucernari, gronde, piazzali, parcheggi, recinzioni, aree di carico, depositi, container, magazzini esterni, impianti, accessi, corsie di manovra, zone di stoccaggio e collegamenti tra diverse aree operative.

Per ${titolo.toLowerCase()}, il valore non è solo nella ripresa estetica, ma nella possibilità di capire meglio organizzazione degli spazi, criticità visibili, aree da manutenere, danni, ingombri, accessi e punti da approfondire con un tecnico o con l’impresa incaricata.`
      },
      {
        title: "A chi può essere utile questo servizio",
        text: `Questo servizio può essere utile ad aziende industriali, società logistiche, proprietari di capannoni, gestori di magazzini, responsabili manutenzione, uffici tecnici, property manager, imprese edili, società immobiliari industriali, periti, assicuratori e consulenti tecnici.

Ogni richiesta può avere un obiettivo diverso: controllare una copertura, documentare un danno, presentare uno stabilimento, valorizzare un polo logistico, verificare un piazzale, monitorare aree esterne, preparare manutenzioni, creare video aziendali o raccogliere immagini per una valutazione interna.`
      },
      {
        title: "Cosa indicare nella richiesta su DroneGuard",
        text: `Per ricevere candidature più precise è utile indicare il Comune o la zona, il tipo di area industriale o logistica, il motivo del servizio, l’urgenza, il risultato desiderato e l’eventuale presenza di mezzi, ostacoli, limitazioni di accesso o aree operative attive.

Puoi specificare se ti servono foto, video, immagini di dettaglio, riprese panoramiche, documentazione prima e dopo, materiale per assicurazione, materiale per preventivo, presentazione aziendale, controllo visivo generale o supporto per manutenzione programmata. Più la richiesta è chiara, più i piloti possono valutare fattibilità, sicurezza, tempi, condizioni meteo, regole operative e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.

Questo sistema è utile perché un servizio in ambito industriale o logistico può cambiare molto in base al luogo, alla superficie, all’altezza degli edifici, alla presenza di mezzi, alla complessità dell’area e al tipo di documentazione richiesta.`
      }
    ]
  }
}

export const industriaLogisticaSeoPages = industriaLogistica.map(createIndustriaLogisticaPage)