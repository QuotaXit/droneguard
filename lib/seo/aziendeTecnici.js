const aziendeTecnici = [
  {
    slug: "drone-per-agenzie-immobiliari",
    nome: "drone per agenzie immobiliari",
    destinatario: "agenzie immobiliari",
    oggetto: "immobili, ville, terreni, palazzi, cantieri, facciate e proprietà da valorizzare"
  },
  {
    slug: "drone-per-agenzie-servizi-immobiliari",
    nome: "drone per agenzie servizi immobiliari",
    destinatario: "agenzie di servizi immobiliari",
    oggetto: "immobili, patrimoni, condomini, aree esterne, coperture e documentazione tecnica"
  },
  {
    slug: "drone-per-amministratori-condominio",
    nome: "drone per amministratori condominio",
    destinatario: "amministratori di condominio",
    oggetto: "tetti, facciate, balconi, grondaie, cornicioni, terrazzi e parti comuni condominiali"
  },
  {
    slug: "drone-per-amministrazioni-stabili",
    nome: "drone per amministrazioni stabili",
    destinatario: "amministrazioni stabili",
    oggetto: "fabbricati, coperture, cortili, facciate, balconi, gronde e aree comuni"
  },
  {
    slug: "drone-per-architetti",
    nome: "drone per architetti",
    destinatario: "architetti",
    oggetto: "edifici, cantieri, immobili, rilievi visivi, facciate, coperture e contesti urbani"
  },
  {
    slug: "drone-per-assicuratori",
    nome: "drone per assicuratori",
    destinatario: "assicuratori",
    oggetto: "danni, tetti, coperture, immobili, aree esterne, grandine, maltempo e sinistri"
  },
  {
    slug: "drone-per-carpentieri-metallici",
    nome: "drone per carpentieri metallici",
    destinatario: "carpentieri metallici",
    oggetto: "strutture metalliche, coperture, capannoni, pensiline, travi, pilastri e montaggi"
  },
  {
    slug: "drone-per-consorzi-immobiliari",
    nome: "drone per consorzi immobiliari",
    destinatario: "consorzi immobiliari",
    oggetto: "complessi immobiliari, aree comuni, fabbricati, coperture, strade interne e spazi esterni"
  },
  {
    slug: "drone-per-consulenti-edili",
    nome: "drone per consulenti edili",
    destinatario: "consulenti edili",
    oggetto: "cantieri, coperture, immobili, facciate, problemi edilizi e documentazione visiva"
  },
  {
    slug: "drone-per-consulenti-immobiliari",
    nome: "drone per consulenti immobiliari",
    destinatario: "consulenti immobiliari",
    oggetto: "immobili, terreni, ville, palazzi, aree esterne e proprietà da valutare o presentare"
  },
  {
    slug: "drone-per-costruttori",
    nome: "drone per costruttori",
    destinatario: "costruttori",
    oggetto: "cantieri, edifici in costruzione, coperture, aree di lavoro, avanzamento lavori e documentazione"
  },
  {
    slug: "drone-per-direzione-cantiere",
    nome: "drone per direzione cantiere",
    destinatario: "direzioni di cantiere",
    oggetto: "cantieri, aree operative, avanzamento lavori, materiali, accessi, coperture e zone difficili da vedere da terra"
  },
  {
    slug: "drone-per-ditte-grondaie",
    nome: "drone per ditte grondaie",
    destinatario: "ditte specializzate in grondaie",
    oggetto: "grondaie, pluviali, canali di raccolta acqua, tetti, cornicioni e coperture"
  },
  {
    slug: "drone-per-ditte-impermeabilizzazione",
    nome: "drone per ditte impermeabilizzazione",
    destinatario: "ditte di impermeabilizzazione",
    oggetto: "terrazzi, tetti, guaine, coperture, infiltrazioni, scarichi e punti critici"
  },
  {
    slug: "drone-per-ditte-ponteggi",
    nome: "drone per ditte ponteggi",
    destinatario: "ditte di ponteggi",
    oggetto: "facciate, edifici, cantieri, coperture, altezze, accessi e zone dove valutare il montaggio"
  },
  {
    slug: "drone-per-general-contractor",
    nome: "drone per general contractor",
    destinatario: "general contractor",
    oggetto: "cantieri, immobili, interventi edili, avanzamento lavori, coperture e aree operative"
  },
  {
    slug: "drone-per-geometri",
    nome: "drone per geometri",
    destinatario: "geometri",
    oggetto: "immobili, terreni, cantieri, coperture, facciate, rilievi visivi e documentazione tecnica"
  },
  {
    slug: "drone-per-gestori-patrimoni-immobiliari",
    nome: "drone per gestori patrimoni immobiliari",
    destinatario: "gestori di patrimoni immobiliari",
    oggetto: "portafogli immobiliari, edifici, coperture, facciate, aree esterne e manutenzioni"
  },
  {
    slug: "drone-per-imprese-coperture",
    nome: "drone per imprese coperture",
    destinatario: "imprese specializzate in coperture",
    oggetto: "tetti, coperture industriali, lamiere, pannelli, guaine, tegole, lucernari e gronde"
  },
  {
    slug: "drone-per-imprese-di-restauro",
    nome: "drone per imprese di restauro",
    destinatario: "imprese di restauro",
    oggetto: "facciate storiche, cornicioni, coperture, edifici vincolati, dettagli architettonici e parti alte"
  },
  {
    slug: "drone-per-imprese-edili",
    nome: "drone per imprese edili",
    destinatario: "imprese edili",
    oggetto: "cantieri, edifici, tetti, facciate, coperture, avanzamento lavori e documentazione fotografica"
  },
  {
    slug: "drone-per-imprese-fotovoltaico",
    nome: "drone per imprese fotovoltaico",
    destinatario: "imprese fotovoltaico",
    oggetto: "impianti fotovoltaici, coperture, pannelli, tetti industriali, terreni e aree di installazione"
  },
  {
    slug: "drone-per-imprese-lattoneria",
    nome: "drone per imprese lattoneria",
    destinatario: "imprese di lattoneria",
    oggetto: "scossaline, gronde, pluviali, lamiere, coperture metalliche e dettagli di finitura"
  },
  {
    slug: "drone-per-imprese-manutenzione-edile",
    nome: "drone per imprese manutenzione edile",
    destinatario: "imprese di manutenzione edile",
    oggetto: "edifici, tetti, facciate, balconi, gronde, terrazzi e parti esterne da controllare"
  },
  {
    slug: "drone-per-imprese-pulizia-facciate",
    nome: "drone per imprese pulizia facciate",
    destinatario: "imprese di pulizia facciate",
    oggetto: "facciate, vetrate, superfici alte, pareti esterne, sporco, macchie e zone difficili da raggiungere"
  },
  {
    slug: "drone-per-imprese-ristrutturazioni",
    nome: "drone per imprese ristrutturazioni",
    destinatario: "imprese di ristrutturazioni",
    oggetto: "immobili, cantieri, tetti, facciate, terrazzi, prima e dopo lavori e documentazione interventi"
  },
  {
    slug: "drone-per-ingegneri",
    nome: "drone per ingegneri",
    destinatario: "ingegneri",
    oggetto: "strutture, edifici, ponti, coperture, cantieri, facciate e aree tecniche da documentare"
  },
  {
    slug: "drone-per-installatori-fotovoltaico",
    nome: "drone per installatori fotovoltaico",
    destinatario: "installatori fotovoltaico",
    oggetto: "tetti, coperture, superfici disponibili, pannelli fotovoltaici, accessi e aree di installazione"
  },
  {
    slug: "drone-per-manutentori-condominiali",
    nome: "drone per manutentori condominiali",
    destinatario: "manutentori condominiali",
    oggetto: "condomini, facciate, grondaie, tetti, terrazzi, cortili, balconi e parti comuni"
  },
  {
    slug: "drone-per-periti-assicurativi",
    nome: "drone per periti assicurativi",
    destinatario: "periti assicurativi",
    oggetto: "danni da maltempo, sinistri, coperture, immobili, tetti, grandine, infiltrazioni e aree danneggiate"
  },
  {
    slug: "drone-per-property-manager",
    nome: "drone per property manager",
    destinatario: "property manager",
    oggetto: "immobili gestiti, coperture, facciate, aree esterne, manutenzioni e documentazione periodica"
  },
  {
    slug: "drone-per-serramentisti",
    nome: "drone per serramentisti",
    destinatario: "serramentisti",
    oggetto: "vetrate, facciate, infissi alti, serramenti esterni, telai, sigillature e punti difficili da vedere"
  },
  {
    slug: "drone-per-societa-di-manutenzione",
    nome: "drone per società di manutenzione",
    destinatario: "società di manutenzione",
    oggetto: "edifici, impianti, coperture, facciate, aree esterne, gronde e strutture da controllare"
  },
  {
    slug: "drone-per-societa-di-perizie",
    nome: "drone per società di perizie",
    destinatario: "società di perizie",
    oggetto: "immobili, danni, coperture, cantieri, terreni, facciate e documentazione visiva"
  },
  {
    slug: "drone-per-societa-facility-management",
    nome: "drone per società facility management",
    destinatario: "società di facility management",
    oggetto: "edifici gestiti, capannoni, coperture, impianti, facciate, parcheggi e aree esterne"
  },
  {
    slug: "drone-per-societa-immobiliari",
    nome: "drone per società immobiliari",
    destinatario: "società immobiliari",
    oggetto: "immobili, portafogli, terreni, palazzi, ville, capannoni, aree esterne e proprietà da valorizzare"
  },
  {
    slug: "drone-per-studi-di-progettazione",
    nome: "drone per studi di progettazione",
    destinatario: "studi di progettazione",
    oggetto: "edifici, cantieri, aree di intervento, contesti urbani, coperture e documentazione preliminare"
  },
  {
    slug: "drone-per-studi-geometri",
    nome: "drone per studi geometri",
    destinatario: "studi di geometri",
    oggetto: "immobili, terreni, cantieri, coperture, facciate, cortili e documentazione tecnica"
  },
  {
    slug: "drone-per-studi-ingegneria",
    nome: "drone per studi ingegneria",
    destinatario: "studi di ingegneria",
    oggetto: "strutture, edifici, cantieri, ponti, coperture, impianti e aree tecniche"
  },
  {
    slug: "drone-per-studi-tecnici",
    nome: "drone per studi tecnici",
    destinatario: "studi tecnici",
    oggetto: "immobili, cantieri, coperture, facciate, terreni, aree esterne e documentazione visiva"
  },
  {
    slug: "drone-per-tecnici-di-cantiere",
    nome: "drone per tecnici di cantiere",
    destinatario: "tecnici di cantiere",
    oggetto: "cantieri, avanzamento lavori, aree operative, coperture, materiali, accessi e zone di lavoro"
  },
  {
    slug: "drone-per-uffici-tecnici-aziendali",
    nome: "drone per uffici tecnici aziendali",
    destinatario: "uffici tecnici aziendali",
    oggetto: "stabilimenti, capannoni, coperture, impianti, aree esterne, manutenzioni e controlli periodici"
  },
  {
    slug: "drone-per-uffici-tecnici-comunali",
    nome: "drone per uffici tecnici comunali",
    destinatario: "uffici tecnici comunali",
    oggetto: "edifici pubblici, aree comunali, strade, ponti, argini, coperture, verde e patrimonio pubblico"
  },
  {
    slug: "drone-per-valutatori-immobiliari",
    nome: "drone per valutatori immobiliari",
    destinatario: "valutatori immobiliari",
    oggetto: "immobili, terreni, contesti esterni, coperture, accessi, pertinenze e proprietà da stimare"
  }
]

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createAziendeTecniciPage(item) {
  const titolo = capitalize(item.nome)

  return {
    slug: item.slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per ${item.destinatario} e servizi su ${item.oggetto}. Pubblica il lavoro su DroneGuard e scegli il candidato più adatto.`,
    category: "Aziende e tecnici drone",
    h1: titolo,
    intro: `${titolo}: con DroneGuard puoi pubblicare una richiesta e ricevere candidature da piloti drone disponibili per supportare ${item.destinatario} in attività su ${item.oggetto}. Il drone può aiutare a ottenere immagini dall’alto, video, controlli visivi e documentazione utile prima, durante o dopo un intervento.`,
    sections: [
      {
        title: `Perché un drone può essere utile per ${item.destinatario}`,
        text: `Un servizio drone può essere utile per ${item.destinatario} quando serve osservare, documentare o presentare ${item.oggetto}. In molti casi il problema non è solo fare una bella ripresa, ma raccogliere immagini chiare, ordinate e utili per lavorare meglio.

Il drone può mostrare punti difficili da vedere da terra, parti alte degli edifici, coperture, facciate, aree esterne, accessi, contesti circostanti e dettagli che possono aiutare nella valutazione di un lavoro. Questo tipo di materiale può essere utile per preventivi, sopralluoghi preliminari, relazioni, presentazioni, confronto prima e dopo, documentazione interna o comunicazione con clienti e collaboratori.`
      },
      {
        title: "Quando richiedere un pilota drone",
        text: `Può essere utile richiedere un pilota drone quando bisogna controllare una copertura, documentare un cantiere, valorizzare un immobile, verificare una facciata, osservare un’area esterna, preparare un intervento di manutenzione o raccogliere immagini per una valutazione tecnica.

Il drone non sostituisce il lavoro di un professionista abilitato quando servono certificazioni, relazioni ufficiali o valutazioni tecniche specialistiche. Però può fornire materiale visivo molto utile per capire meglio la situazione, ridurre sopralluoghi inutili, mostrare dettagli a distanza e aiutare nella fase decisionale.`
      },
      {
        title: "Quali informazioni inserire nella richiesta",
        text: `Per ricevere candidature più precise è importante spiegare il tipo di servizio richiesto, la zona, il tipo di edificio o area, l’obiettivo delle riprese, l’urgenza e il risultato desiderato. Per esempio: foto dettagliate, video panoramico, controllo visivo, documentazione di avanzamento lavori, riprese per presentazione immobiliare o immagini da condividere con un tecnico.

Più la richiesta è chiara, più i piloti possono valutare fattibilità, tempi, accessi, sicurezza, eventuali limitazioni operative e tipo di attrezzatura necessaria.`
      },
      {
        title: "Vantaggi per lavoro, preventivi e documentazione",
        text: `Per ${item.destinatario}, avere immagini aeree può rendere più semplice spiegare un problema, mostrare lo stato di un edificio, documentare un intervento o confrontare la situazione prima e dopo i lavori. Le immagini possono essere utili anche per parlare con clienti, amministratori, imprese, tecnici, assicurazioni, società immobiliari o responsabili della manutenzione.

In molti casi un controllo visivo con drone può aiutare a capire dove intervenire, quali zone approfondire e quali dettagli servono per preparare un preventivo più chiaro.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per collegare chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa deve fare e riceve candidature. In questo modo può confrontare profili, disponibilità e proposte prima di scegliere il candidato più adatto.

Questo sistema è utile perché un ${item.nome} può cambiare molto in base al contesto: un immobile in città, un cantiere, un capannone industriale, un tetto condominiale o un’area tecnica richiedono valutazioni diverse. Con DroneGuard puoi partire da una richiesta chiara e ricevere risposte più mirate.`
      }
    ]
  }
}

export const aziendeTecniciSeoPages = aziendeTecnici.map(createAziendeTecniciPage)