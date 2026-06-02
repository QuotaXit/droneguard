const pagineForti = [
  {
    slug: "drone-per-assicurazione-danni",
    nome: "drone per assicurazione danni",
    servizio: "documentare danni, sinistri, tetti, coperture, immobili, aree esterne e situazioni da mostrare a periti o assicurazioni"
  },
  {
    slug: "pilota-drone-per-sopralluogo",
    nome: "pilota drone per sopralluogo",
    servizio: "effettuare sopralluoghi visivi con foto e video dall’alto su edifici, cantieri, terreni, coperture e aree difficili da raggiungere"
  },
  {
    slug: "preventivo-drone-capannone",
    nome: "preventivo drone capannone",
    servizio: "richiedere un servizio drone per capannoni, coperture industriali, lucernari, gronde, piazzali e strutture aziendali"
  },
  {
    slug: "preventivo-drone-condominio",
    nome: "preventivo drone condominio",
    servizio: "richiedere un servizio drone per condomini, tetti, facciate, balconi, grondaie, terrazzi e parti comuni"
  },
  {
    slug: "preventivo-drone-danni-maltempo",
    nome: "preventivo drone danni maltempo",
    servizio: "controllare danni causati da vento, pioggia, grandine, infiltrazioni, tegole spostate, coperture danneggiate e aree esterne compromesse"
  },
  {
    slug: "preventivo-drone-fotovoltaico",
    nome: "preventivo drone fotovoltaico",
    servizio: "controllare impianti fotovoltaici, pannelli, coperture, ombreggiamenti, accessi e aree di installazione"
  },
  {
    slug: "preventivo-drone-terreno",
    nome: "preventivo drone terreno",
    servizio: "osservare terreni, lotti, aree agricole, confini, accessi, pendenze, rifiuti, vegetazione e superfici difficili da controllare da terra"
  },
  {
    slug: "preventivo-ispezione-grondaie-drone",
    nome: "preventivo ispezione grondaie drone",
    servizio: "controllare grondaie, pluviali, canali di raccolta acqua, ostruzioni, rotture, tetti e punti difficili da raggiungere"
  },
  {
    slug: "preventivo-ispezione-tetto-drone",
    nome: "preventivo ispezione tetto drone",
    servizio: "controllare tetti, tegole, coperture, comignoli, scossaline, gronde, infiltrazioni e danni visibili dall’alto"
  }
]

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createFortePage(item) {
  const titolo = capitalize(item.nome)

  return {
    slug: item.slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: pubblica una richiesta su DroneGuard e trova piloti drone disponibili per ${item.servizio}.`,
    category: "Servizi drone richiesti",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${item.nome} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per ottenere foto, video e documentazione visiva su edifici, tetti, condomini, capannoni, terreni, impianti, danni e aree difficili da raggiungere da terra.`,

    sections: [
      {
        title: `Quando richiedere ${item.nome}`,
        text: `Un servizio come ${item.nome} può essere utile quando hai bisogno di ${item.servizio}. In molte situazioni non è semplice capire il problema da terra: una copertura può essere troppo alta, una grondaia può essere nascosta, un terreno può essere esteso, un capannone può avere punti difficili da osservare o un danno può richiedere immagini chiare prima di chiedere un intervento.

Il drone permette di ottenere una prima visione dall’alto, raccogliere materiale fotografico e video, mostrare dettagli a tecnici, imprese, amministratori, assicurazioni o proprietari e capire meglio quali passaggi fare dopo.`
      },
      {
        title: "Perché usare un drone prima di spendere soldi",
        text: `Il vantaggio principale del drone è la rapidità. Prima di organizzare ponteggi, piattaforme aeree, sopralluoghi complessi o interventi costosi, un controllo visivo con drone può aiutare a capire se il problema è reale, dove si trova e quanto è esteso.

Il drone non sostituisce una perizia certificata o una relazione tecnica quando serve un professionista abilitato, ma può fornire materiale molto utile per prendere decisioni più consapevoli, confrontare preventivi, spiegare un problema o documentare lo stato dei luoghi.`
      },
      {
        title: "A chi può servire questo servizio",
        text: `Questo servizio può interessare privati, condomini, amministratori, imprese edili, aziende, property manager, società immobiliari, tecnici, geometri, ingegneri, architetti, periti assicurativi, installatori fotovoltaico e manutentori.

Ogni richiesta può avere un obiettivo diverso: controllare un tetto, verificare grondaie, osservare un capannone, documentare danni da maltempo, controllare un terreno, preparare un preventivo, raccogliere immagini per assicurazione o ottenere una visione chiara prima di iniziare un lavoro.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Per ricevere candidature più precise è utile indicare il Comune o la zona, il tipo di edificio o area, il motivo del servizio, l’urgenza, il risultato desiderato e l’eventuale presenza di ostacoli o limitazioni di accesso.

Puoi specificare se ti servono foto, video, immagini di dettaglio, riprese panoramiche, documentazione prima e dopo, materiale per assicurazione, materiale per preventivo o un semplice controllo visivo generale. Più la richiesta è chiara, più i piloti possono valutare fattibilità, tempi, sicurezza, condizioni meteo e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.

Questo sistema è utile perché ogni lavoro cambia in base al luogo, all’altezza, alla superficie da controllare, al tipo di documentazione richiesta e al contesto operativo.`
      }
    ]
  }
}

export const fortiSeoPages = pagineForti.map(createFortePage)