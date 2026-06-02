const agricolturaAmbiente = [
  {
    slug: "drone-per-agronomi",
    nome: "drone per agronomi",
    oggetto: "campi agricoli, colture, terreni, frutteti, vigneti, uliveti e aree rurali"
  },
  {
    slug: "drone-per-allagamenti",
    nome: "drone per allagamenti",
    oggetto: "zone allagate, terreni agricoli, argini, fossi, strade poderali e aree difficili da raggiungere"
  },
  {
    slug: "drone-per-aziende-agricole",
    nome: "drone per aziende agricole",
    oggetto: "aziende agricole, campi, colture, fabbricati rurali, serre, terreni e aree produttive"
  },
  {
    slug: "drone-per-bonifica-terreni",
    nome: "drone per bonifica terreni",
    oggetto: "terreni da bonificare, aree degradate, rifiuti, vegetazione infestante e superfici difficili da controllare"
  },
  {
    slug: "drone-per-consorzi-agrari",
    nome: "drone per consorzi agrari",
    oggetto: "aree agricole, canali, argini, terreni, colture, infrastrutture rurali e zone di competenza"
  },
  {
    slug: "drone-per-controllo-argini",
    nome: "drone per controllo argini",
    oggetto: "argini, sponde, corsi d’acqua, canali, fossi, erosioni e punti critici lungo il territorio"
  },
  {
    slug: "drone-per-controllo-cave-ambiente",
    nome: "drone per controllo cave ambiente",
    oggetto: "cave, aree estrattive, pendii, accumuli, piste interne, scarpate e zone ambientali sensibili"
  },
  {
    slug: "drone-per-controllo-colture",
    nome: "drone per controllo colture",
    oggetto: "colture agricole, filari, campi, aree con stress vegetativo, danni e irregolarità"
  },
  {
    slug: "drone-per-corsi-acqua",
    nome: "drone per corsi d’acqua",
    oggetto: "fiumi, torrenti, canali, fossi, argini, sponde e zone soggette a erosione o ostruzioni"
  },
  {
    slug: "drone-per-coste-e-dune",
    nome: "drone per coste e dune",
    oggetto: "coste, dune, arenili, aree naturali, erosione costiera e zone difficili da monitorare da terra"
  },
  {
    slug: "drone-per-danni-grandine-agricoltura",
    nome: "drone per danni grandine agricoltura",
    oggetto: "colture colpite da grandine, frutteti, vigneti, serre, campi e danni visibili dall’alto"
  },
  {
    slug: "drone-per-danni-siccita",
    nome: "drone per danni siccità",
    oggetto: "campi agricoli, colture stressate, terreni secchi, zone con carenza idrica e aree compromesse"
  },
  {
    slug: "drone-per-discariche-abusive",
    nome: "drone per discariche abusive",
    oggetto: "rifiuti abbandonati, discariche abusive, aree verdi, terreni isolati, strade sterrate e zone degradate"
  },
  {
    slug: "drone-per-dissesto-idrogeologico",
    nome: "drone per dissesto idrogeologico",
    oggetto: "frane, smottamenti, pendii, scarpate, argini, corsi d’acqua e aree a rischio"
  },
  {
    slug: "drone-per-erosione-suolo",
    nome: "drone per erosione suolo",
    oggetto: "terreni erosi, pendii, campi agricoli, sponde, dune, scarpate e superfici degradate"
  },
  {
    slug: "drone-per-frane-e-smottamenti",
    nome: "drone per frane e smottamenti",
    oggetto: "frane, smottamenti, pendii instabili, versanti, strade rurali e zone difficili da raggiungere"
  },
  {
    slug: "drone-per-frutteti",
    nome: "drone per frutteti",
    oggetto: "frutteti, filari, chiome, aree produttive, danni alle piante e stato generale delle colture"
  },
  {
    slug: "drone-per-incendi-boschivi",
    nome: "drone per incendi boschivi",
    oggetto: "boschi, aree bruciate, margini di incendio, zone verdi, sentieri e aree ambientali sensibili"
  },
  {
    slug: "drone-per-irrigazione-agricola",
    nome: "drone per irrigazione agricola",
    oggetto: "impianti di irrigazione, campi, linee idriche, zone secche, ristagni e distribuzione dell’acqua"
  },
  {
    slug: "drone-per-mappatura-agricola",
    nome: "drone per mappatura agricola",
    oggetto: "campi, terreni agricoli, confini, colture, filari, aree produttive e superfici rurali"
  },
  {
    slug: "drone-per-monitoraggio-boschi",
    nome: "drone per monitoraggio boschi",
    oggetto: "boschi, aree forestali, sentieri, zone verdi, alberature, radure e aree difficili da percorrere"
  },
  {
    slug: "drone-per-monitoraggio-campi",
    nome: "drone per monitoraggio campi",
    oggetto: "campi agricoli, colture, filari, zone secche, ristagni, irregolarità e danni visibili"
  },
  {
    slug: "drone-per-monitoraggio-fauna",
    nome: "drone per monitoraggio fauna",
    oggetto: "fauna selvatica, aree naturali, boschi, zone umide, campi e territori difficili da controllare da terra"
  },
  {
    slug: "drone-per-monitoraggio-fiumi",
    nome: "drone per monitoraggio fiumi",
    oggetto: "fiumi, sponde, argini, alveo, vegetazione, ostruzioni, erosioni e aree a rischio"
  },
  {
    slug: "drone-per-parchi-naturali",
    nome: "drone per parchi naturali",
    oggetto: "parchi naturali, sentieri, boschi, aree protette, zone verdi e territori estesi"
  },
  {
    slug: "drone-per-pascoli",
    nome: "drone per pascoli",
    oggetto: "pascoli, recinzioni, aree agricole, zone montane, animali, accessi e terreni estesi"
  },
  {
    slug: "drone-per-rifiuti-abbandonati",
    nome: "drone per rifiuti abbandonati",
    oggetto: "rifiuti abbandonati, aree verdi, strade secondarie, terreni, fossi, piazzali e zone isolate"
  },
  {
    slug: "drone-per-rimboschimento",
    nome: "drone per rimboschimento",
    oggetto: "aree da rimboschire, zone verdi, terreni degradati, boschi, pendii e superfici naturali"
  },
  {
    slug: "drone-per-riserve-naturali",
    nome: "drone per riserve naturali",
    oggetto: "riserve naturali, aree protette, boschi, zone umide, sentieri e territori sensibili"
  },
  {
    slug: "drone-per-serre-agricole",
    nome: "drone per serre agricole",
    oggetto: "serre agricole, coperture, teli, strutture, impianti, danni da vento e superfici esterne"
  },
  {
    slug: "drone-per-stress-idrico-colture",
    nome: "drone per stress idrico colture",
    oggetto: "colture con stress idrico, campi secchi, zone irrigate male, terreni agricoli e aree produttive"
  },
  {
    slug: "drone-per-uliveti",
    nome: "drone per uliveti",
    oggetto: "uliveti, filari, chiome, terreni agricoli, accessi, danni e stato generale delle piante"
  },
  {
    slug: "drone-per-vigneti",
    nome: "drone per vigneti",
    oggetto: "vigneti, filari, pendenze, danni, stress idrico, accessi e stato delle colture"
  },
  {
    slug: "drone-per-zone-umide",
    nome: "drone per zone umide",
    oggetto: "zone umide, stagni, canali, paludi, aree naturali, habitat e territori difficili da attraversare"
  }
]

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createAgricolturaAmbientePage(item) {
  const titolo = capitalize(item.nome)

  return {
    slug: item.slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per controllare ${item.oggetto}. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: "Agricoltura e ambiente",
    h1: titolo,
    intro: `${titolo}: con DroneGuard puoi pubblicare una richiesta e ricevere candidature da piloti drone disponibili per controllare ${item.oggetto}. Il drone può aiutare a osservare aree estese, terreni difficili da raggiungere, colture, zone ambientali e punti critici senza dover percorrere subito tutta l’area a piedi.`,
    sections: [
      {
        title: `Quando serve un ${item.nome}`,
        text: `Un ${item.nome} può essere utile quando bisogna controllare ${item.oggetto} e serve una visione più ampia, rapida e documentata del territorio. In agricoltura e ambiente il problema non è sempre solo vedere un singolo punto: spesso bisogna capire come si presenta un’area intera, dove si concentrano i danni, quali zone sono difficili da raggiungere e quali elementi meritano un controllo più approfondito.

Il drone può fornire immagini dall’alto, video, panoramiche e dettagli visivi utili per proprietari, aziende agricole, tecnici, agronomi, consorzi, enti, imprese e responsabili di manutenzione del territorio. Le riprese possono aiutare a individuare differenze tra zone, danni visibili, ristagni, erosioni, vegetazione anomala, accessi difficili, ostruzioni, rifiuti, frane, smottamenti o situazioni da verificare con un tecnico specializzato.`
      },
      {
        title: "Perché usare un drone in agricoltura e ambiente",
        text: `Il vantaggio principale del drone è la possibilità di osservare dall’alto aree che da terra richiederebbero molto più tempo. Campi, boschi, argini, corsi d’acqua, zone umide, terreni agricoli, cave, pascoli e aree naturali possono essere difficili da controllare a piedi, soprattutto quando sono estesi, fangosi, pericolosi o poco accessibili.

Una verifica con drone non sostituisce il lavoro di agronomi, tecnici ambientali, periti o professionisti abilitati quando serve una valutazione ufficiale, ma può offrire materiale visivo molto utile per capire la situazione iniziale, programmare un sopralluogo, documentare un danno, confrontare prima e dopo un intervento o condividere immagini chiare con chi dovrà prendere decisioni.`
      },
      {
        title: "A chi può essere utile questo servizio",
        text: `Questo tipo di servizio può essere richiesto da aziende agricole, proprietari di terreni, agronomi, tecnici, consorzi, enti locali, imprese di manutenzione, società immobiliari rurali, gestori di aree naturali e privati che devono controllare un terreno o una zona verde. Ogni richiesta può avere un obiettivo diverso: monitoraggio, documentazione, controllo danni, verifica accessi, osservazione di colture, individuazione di criticità o raccolta di immagini prima di un intervento.

Su DroneGuard il cliente può spiegare cosa deve controllare, indicare la zona, descrivere il tipo di terreno o area interessata e ricevere candidature da piloti drone disponibili. In questo modo può confrontare profili, esperienza e disponibilità prima di scegliere il candidato più adatto.`
      },
      {
        title: "Cosa indicare nella richiesta",
        text: `Per ricevere risposte più precise è utile indicare la superficie indicativa da controllare, il Comune o la zona, il tipo di area, il motivo del servizio, la presenza di ostacoli, eventuali accessi, l’urgenza e il risultato desiderato. Per esempio: foto panoramiche, video dell’area, controllo di punti specifici, documentazione di danni, mappatura visiva, confronto prima e dopo o immagini da inviare a un tecnico.

Quando il lavoro riguarda aree naturali, zone agricole, fiumi, boschi, parchi, cave o aree sensibili, il pilota dovrà sempre valutare fattibilità, sicurezza, regole operative, eventuali limitazioni locali e condizioni meteo prima di confermare il servizio.`
      },
      {
        title: "DroneGuard ti aiuta a trovare piloti drone disponibili",
        text: `DroneGuard è pensato per collegare chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive l’area da controllare e riceve candidature. Questo sistema è utile perché un ${item.nome} può cambiare molto in base al luogo, alla superficie, all’accessibilità, all’obiettivo delle riprese e al tipo di documentazione richiesta.

Confrontare più candidati permette di scegliere con maggiore consapevolezza, valutando disponibilità, esperienza, proposta e capacità di gestire il servizio nel rispetto delle condizioni operative.`
      }
    ]
  }
}

export const agricolturaAmbienteSeoPages = agricolturaAmbiente.map(createAgricolturaAmbientePage)