const ispezioni = [
  {
    slug: "ispezione-antenne-con-drone",
    nome: "ispezione antenne con drone",
    oggetto: "antenne, ripetitori, supporti metallici e punti elevati"
  },
  {
    slug: "ispezione-balconi-con-drone",
    nome: "ispezione balconi con drone",
    oggetto: "balconi, frontalini, sottobalconi, parapetti e punti difficili da vedere da terra"
  },
  {
    slug: "ispezione-camini-industriali-con-drone",
    nome: "ispezione camini industriali con drone",
    oggetto: "camini industriali, canne fumarie alte, torri e strutture verticali"
  },
  {
    slug: "ispezione-canne-fumarie-con-drone",
    nome: "ispezione canne fumarie con drone",
    oggetto: "canne fumarie, comignoli, terminali, raccordi e parti superiori della copertura"
  },
  {
    slug: "ispezione-capannoni-logistici-con-drone",
    nome: "ispezione capannoni logistici con drone",
    oggetto: "capannoni logistici, coperture estese, lucernari, gronde e facciate industriali"
  },
  {
    slug: "ispezione-condomini-con-drone",
    nome: "ispezione condomini con drone",
    oggetto: "condomini, facciate, balconi, tetti, gronde, terrazzi e coperture"
  },
  {
    slug: "ispezione-coperture-capannoni-con-drone",
    nome: "ispezione coperture capannoni con drone",
    oggetto: "coperture di capannoni, lamiere, pannelli, giunti, pluviali e lucernari"
  },
  {
    slug: "ispezione-coperture-in-lamiera-con-drone",
    nome: "ispezione coperture in lamiera con drone",
    oggetto: "coperture in lamiera, fissaggi, giunti, scossaline, infiltrazioni e deformazioni"
  },
  {
    slug: "ispezione-cornicioni-con-drone",
    nome: "ispezione cornicioni con drone",
    oggetto: "cornicioni, frontalini, intonaci esterni, distacchi e parti aggettanti"
  },
  {
    slug: "ispezione-danni-maltempo-con-drone",
    nome: "ispezione danni maltempo con drone",
    oggetto: "danni da vento, pioggia, grandine, tegole spostate, coperture danneggiate e infiltrazioni"
  },
  {
    slug: "ispezione-depositi-industriali-con-drone",
    nome: "ispezione depositi industriali con drone",
    oggetto: "depositi industriali, magazzini, coperture, piazzali, strutture esterne e accessi"
  },
  {
    slug: "ispezione-grondaie-con-drone",
    nome: "ispezione grondaie con drone",
    oggetto: "grondaie, pluviali, scarichi, intasamenti, rotture e punti difficili da raggiungere"
  },
  {
    slug: "ispezione-gronde-capannoni-con-drone",
    nome: "ispezione gronde capannoni con drone",
    oggetto: "gronde di capannoni, canali di raccolta acqua, pluviali industriali e coperture estese"
  },
  {
    slug: "ispezione-impianti-industriali-con-drone",
    nome: "ispezione impianti industriali con drone",
    oggetto: "impianti industriali, strutture tecniche, tubazioni esterne, torri, coperture e aree produttive"
  },
  {
    slug: "ispezione-infiltrazioni-con-drone",
    nome: "ispezione infiltrazioni con drone",
    oggetto: "infiltrazioni, tetti, terrazzi, coperture, gronde, giunti, scossaline e punti critici"
  },
  {
    slug: "ispezione-lucernari-con-drone",
    nome: "ispezione lucernari con drone",
    oggetto: "lucernari, cupolini, guarnizioni, vetri, pannelli trasparenti e punti di infiltrazione"
  },
  {
    slug: "ispezione-lucernari-industriali-con-drone",
    nome: "ispezione lucernari industriali con drone",
    oggetto: "lucernari industriali, shed, cupolini, coperture traslucide e pannelli di grandi capannoni"
  },
  {
    slug: "ispezione-pannelli-copertura-industriale-con-drone",
    nome: "ispezione pannelli copertura industriale con drone",
    oggetto: "pannelli di copertura industriale, lamiere grecate, pannelli sandwich, fissaggi e giunti"
  },
  {
    slug: "ispezione-pannelli-sandwich-con-drone",
    nome: "ispezione pannelli sandwich con drone",
    oggetto: "pannelli sandwich, giunzioni, fissaggi, deterioramenti, infiltrazioni e coperture industriali"
  },
  {
    slug: "ispezione-parapetti-con-drone",
    nome: "ispezione parapetti con drone",
    oggetto: "parapetti, ringhiere, bordi terrazzo, balconi, coronamenti e parti esterne"
  },
  {
    slug: "ispezione-pensiline-con-drone",
    nome: "ispezione pensiline con drone",
    oggetto: "pensiline, coperture leggere, tettoie, strutture metalliche, pannelli e fissaggi"
  },
  {
    slug: "ispezione-pluviali-con-drone",
    nome: "ispezione pluviali con drone",
    oggetto: "pluviali, discendenti, raccordi, scarichi, gronde e percorsi dell’acqua piovana"
  },
  {
    slug: "ispezione-ponti-con-drone",
    nome: "ispezione ponti con drone",
    oggetto: "ponti, viadotti, sottopassi, spalle, travi, pile, intradossi e parti difficili da raggiungere"
  },
  {
    slug: "ispezione-silos-industriali-con-drone",
    nome: "ispezione silos industriali con drone",
    oggetto: "silos industriali, serbatoi verticali, coperture, pareti esterne, scale e passerelle"
  },
  {
    slug: "ispezione-tegole-con-drone",
    nome: "ispezione tegole con drone",
    oggetto: "tegole, coppi, colmi, scossaline, comignoli, infiltrazioni e coperture residenziali"
  },
  {
    slug: "ispezione-terrazzi-con-drone",
    nome: "ispezione terrazzi con drone",
    oggetto: "terrazzi, guaine, parapetti, scarichi, bocchettoni, pavimentazioni e punti di infiltrazione"
  },
  {
    slug: "ispezione-tetto-condominio-con-drone",
    nome: "ispezione tetto condominio con drone",
    oggetto: "tetti condominiali, coperture, tegole, gronde, comignoli, antenne e infiltrazioni"
  },
  {
    slug: "ispezione-torri-industriali-con-drone",
    nome: "ispezione torri industriali con drone",
    oggetto: "torri industriali, strutture alte, scale esterne, passerelle, saldature e punti elevati"
  },
  {
    slug: "ispezione-vetrate-con-drone",
    nome: "ispezione vetrate con drone",
    oggetto: "vetrate, facciate continue, vetri alti, sigillature, telai e superfici difficili da controllare"
  }
]

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createIspezionePage(item) {
  const titolo = capitalize(item.nome)

  return {
    slug: item.slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per controllare ${item.oggetto}. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: "Ispezioni con drone",
    h1: titolo,
    intro: `${titolo}: con DroneGuard puoi pubblicare una richiesta e ricevere candidature da piloti drone disponibili per controllare ${item.oggetto}. Il drone permette di osservare zone alte, esterne o difficili da raggiungere senza partire subito con ponteggi, piattaforme o sopralluoghi invasivi.`,
    sections: [
      {
        title: `Quando serve una ${item.nome}`,
        text: `Una ${item.nome} può essere utile quando bisogna controllare ${item.oggetto} e non è semplice arrivare vicino al punto da verificare. In molti casi il problema non è solo vedere se c’è un danno evidente, ma capire dove intervenire, quali zone fotografare, quali dettagli mostrare a un tecnico e quali informazioni raccogliere prima di chiedere un preventivo.

Il drone può aiutare proprietari, amministratori, tecnici, imprese, aziende e responsabili di manutenzione a ottenere una prima visione chiara della situazione. Le immagini dall’alto possono mostrare crepe, rotture, deformazioni, parti mancanti, ristagni, infiltrazioni, distacchi, accumuli di sporco, elementi deteriorati o punti che da terra risultano nascosti.`
      },
      {
        title: "Perché usare un drone invece di partire subito con mezzi costosi",
        text: `Il vantaggio principale del drone è la rapidità. Prima di organizzare piattaforme aeree, ponteggi, trabattelli o accessi complessi, una verifica visiva con drone può aiutare a capire se il problema esiste davvero e quanto è esteso. Questo non sostituisce il lavoro di un tecnico quando serve una valutazione certificata, ma permette di raccogliere materiale fotografico e video utile per decidere il passo successivo.

Per molte attività di controllo esterno, il drone può ridurre tempi morti, accessi rischiosi e sopralluoghi inutili. Un pilota drone può documentare lo stato dei luoghi, riprendere dettagli specifici e fornire immagini che il cliente potrà condividere con amministratore, impresa, geometra, ingegnere, perito o manutentore.`
      },
      {
        title: "Chi può richiedere questo tipo di servizio",
        text: `Questo servizio può interessare condomini, privati, aziende, amministratori, società immobiliari, imprese edili, manutentori, tecnici e responsabili di strutture industriali. Ogni richiesta può essere diversa: c’è chi deve controllare un possibile danno, chi deve preparare un intervento, chi vuole documentare lo stato di una copertura, chi deve confrontare più preventivi e chi ha bisogno di immagini chiare prima di prendere una decisione.

Su DroneGuard il cliente può spiegare il problema, indicare la zona, allegare dettagli utili e ricevere candidature da piloti drone. In questo modo non deve cercare a caso, ma può confrontare disponibilità, esperienza e proposta del candidato.`
      },
      {
        title: "Cosa indicare nella richiesta su DroneGuard",
        text: `Per ottenere candidature più precise è utile indicare il tipo di struttura, l’indirizzo o almeno la zona, l’altezza indicativa, il motivo dell’ispezione, eventuali limitazioni di accesso e il risultato desiderato. Per esempio: foto dettagliate, video panoramico, riprese ravvicinate di un punto, documentazione prima e dopo un intervento, controllo visivo generale o immagini da inviare a un tecnico.

Più la richiesta è chiara, più i piloti possono rispondere in modo utile. Se il lavoro riguarda aree sensibili, centri abitati, zone industriali, spazi con persone o aree soggette a vincoli, il pilota dovrà valutare fattibilità, sicurezza e regole operative prima di confermare il servizio.`
      },
      {
        title: "DroneGuard aiuta a trovare il candidato giusto",
        text: `DroneGuard non è una semplice pagina informativa: è una piattaforma pensata per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e valuta le candidature ricevute.

Questo sistema è utile perché una ${item.nome} non è sempre uguale: cambiano altezza, accesso, contesto, urgenza, tipo di immagini richieste e complessità del volo. Confrontare più candidati permette di scegliere con più consapevolezza.`
      }
    ]
  }
}

export const ispezioniSeoPages = ispezioni.map(createIspezionePage)