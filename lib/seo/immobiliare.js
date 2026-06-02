const pagineImmobiliare = [
  {
    slug: "drone-per-annunci-immobiliari",
    nome: "drone per annunci immobiliari",
    servizio: "creare foto e video dall’alto per annunci immobiliari più completi, chiari e professionali"
  },
  {
    slug: "drone-per-attici-e-terrazzi",
    nome: "drone per attici e terrazzi",
    servizio: "valorizzare attici, terrazzi, viste panoramiche, spazi esterni, coperture e contesto dell’immobile"
  },
  {
    slug: "drone-per-capannoni-in-vendita",
    nome: "drone per capannoni in vendita",
    servizio: "presentare capannoni, piazzali, accessi, coperture, aree esterne e contesto industriale"
  },
  {
    slug: "drone-per-case-vacanza",
    nome: "drone per case vacanza",
    servizio: "valorizzare case vacanza, giardini, piscine, terrazzi, viste panoramiche e posizione rispetto al territorio"
  },
  {
    slug: "drone-per-condomini-in-vendita",
    nome: "drone per condomini in vendita",
    servizio: "documentare condomini, palazzine, facciate, cortili, coperture, accessi e aree comuni"
  },
  {
    slug: "drone-per-home-staging-esterno",
    nome: "drone per home staging esterno",
    servizio: "migliorare la presentazione esterna di immobili, giardini, accessi, facciate, terrazzi e contesto"
  },
  {
    slug: "drone-per-hotel-in-vendita",
    nome: "drone per hotel in vendita",
    servizio: "presentare hotel, resort, strutture ricettive, aree esterne, parcheggi, piscine, ingressi e posizione"
  },
  {
    slug: "drone-per-immobili-di-lusso",
    nome: "drone per immobili di lusso",
    servizio: "valorizzare ville, proprietà esclusive, giardini, piscine, terrazzi, panorami e contesto immobiliare"
  },
  {
    slug: "drone-per-presentazione-immobile",
    nome: "drone per presentazione immobile",
    servizio: "creare materiale visivo per presentare immobili, ville, terreni, palazzi, capannoni e proprietà in vendita"
  },
  {
    slug: "drone-per-rustici-e-casali",
    nome: "drone per rustici e casali",
    servizio: "valorizzare rustici, casali, terreni circostanti, accessi, corti, giardini e contesto rurale"
  },
  {
    slug: "drone-per-terreni-edificabili",
    nome: "drone per terreni edificabili",
    servizio: "mostrare terreni edificabili, confini, accessi, strade, pendenze, contesto e aree circostanti"
  },
  {
    slug: "drone-per-valutazione-immobile",
    nome: "drone per valutazione immobile",
    servizio: "raccogliere immagini utili per valutare immobili, pertinenze, coperture, aree esterne, accessi e contesto"
  },
  {
    slug: "drone-per-vendere-casa",
    nome: "drone per vendere casa",
    servizio: "creare foto e video dall’alto per vendere casa, valorizzare spazi esterni, posizione, accessi e contesto"
  },
  {
    slug: "drone-per-ville-in-vendita",
    nome: "drone per ville in vendita",
    servizio: "presentare ville, giardini, piscine, terrazzi, accessi, pertinenze e posizione panoramica"
  },
  {
    slug: "foto-immobiliari-con-drone",
    nome: "foto immobiliari con drone",
    servizio: "realizzare fotografie immobiliari dall’alto per annunci, agenzie, proprietari e presentazioni professionali"
  },
  {
    slug: "video-immobiliare-con-drone",
    nome: "video immobiliare con drone",
    servizio: "realizzare video immobiliari con drone per presentare case, ville, terreni, capannoni e strutture ricettive"
  }
]

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createImmobiliarePage(item) {
  const titolo = capitalize(item.nome)

  return {
    slug: item.slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per ${item.servizio}. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: "Immobiliare con drone",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${item.nome} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per valorizzare immobili, ville, terreni, capannoni, strutture ricettive, case vacanza, attici, terrazzi e proprietà con spazi esterni. Foto e video dall’alto possono rendere un annuncio più completo, più chiaro e più interessante per chi sta valutando l’acquisto o la locazione.`,

    sections: [
      {
        title: `Perché usare un ${item.nome}`,
        text: `Un servizio come ${item.nome} può essere utile quando bisogna ${item.servizio}. Nel settore immobiliare non conta solo mostrare l’interno della casa: spesso il valore percepito dipende anche da giardino, accessi, terrazzi, panorama, vicinanza alle strade, dimensione del terreno, stato delle coperture, cortili, aree esterne e contesto generale.

Il drone permette di mostrare l’immobile da una prospettiva diversa rispetto alle foto tradizionali. Una ripresa dall’alto può aiutare il cliente a capire meglio la posizione, la distribuzione degli spazi, le pertinenze e il rapporto tra l’immobile e ciò che lo circonda.`
      },
      {
        title: "Quando le riprese drone aiutano davvero un annuncio",
        text: `Le riprese drone sono particolarmente utili quando l’immobile ha elementi esterni importanti: giardino, piscina, terreno, terrazzo, vista panoramica, corte, parcheggio, accesso privato, capannone, area produttiva, zona verde o posizione interessante. In questi casi, le foto da terra possono non bastare a far capire il valore reale della proprietà.

Per agenzie immobiliari, proprietari, home stager, società immobiliari e consulenti, il drone può diventare uno strumento per creare annunci più completi e più ordinati. Non serve solo a fare immagini belle, ma a spiegare meglio l’immobile prima ancora della visita.`
      },
      {
        title: "Cosa può mostrare il materiale con drone",
        text: `Il materiale può mostrare viste panoramiche, ingresso, accessi, giardino, terrazzo, piscina, parcheggi, terreno, confini, cortile, facciata, copertura, pertinenze, strada di accesso e contesto urbano o rurale. Per immobili grandi o complessi, il drone aiuta a dare una visione generale che le fotografie normali spesso non riescono a comunicare.

Per ${item.nome}, il valore principale è collegare il dettaglio al contesto: non si vede solo una stanza o una facciata, ma anche dove si trova l’immobile, quanto spazio ha intorno, come si accede e quali elementi esterni possono interessare un potenziale acquirente.`
      },
      {
        title: "A chi può servire questo servizio",
        text: `Questo servizio può servire ad agenzie immobiliari, proprietari privati, società immobiliari, costruttori, property manager, consulenti immobiliari, home stager, gestori di strutture ricettive e professionisti che vogliono presentare meglio un immobile.

Ogni richiesta può avere un obiettivo diverso: vendere casa, promuovere una villa, valorizzare un terreno, presentare un capannone, mostrare un hotel, creare contenuti per un annuncio, documentare lo stato esterno dell’immobile o preparare materiale per una trattativa.`
      },
      {
        title: "Cosa indicare nella richiesta su DroneGuard",
        text: `Per ricevere candidature più precise è utile indicare il Comune o la zona, il tipo di immobile, l’obiettivo del servizio, il risultato desiderato e gli elementi da valorizzare. Puoi specificare se ti servono foto, video, riprese panoramiche, immagini per annuncio, contenuti per social, presentazione dell’immobile o documentazione degli spazi esterni.

È utile indicare anche se l’immobile si trova in centro abitato, vicino ad aeroporti, in zona trafficata, in campagna, vicino al mare o in aree con possibili limitazioni operative. Il pilota potrà così valutare fattibilità, sicurezza, condizioni meteo, regole di volo e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive l’immobile o il servizio richiesto e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.

Questo sistema è utile perché ogni immobile è diverso: una villa, un terreno, un attico, un capannone, un hotel o una casa vacanza richiedono riprese differenti. Con DroneGuard puoi partire da una richiesta chiara e trovare un pilota drone adatto al lavoro.`
      }
    ]
  }
}

export const immobiliareSeoPages = pagineImmobiliare.map(createImmobiliarePage)