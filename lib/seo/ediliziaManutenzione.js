const ediliziaManutenzione = [
  "drone-per-bonifiche-amianto",
  "drone-per-controllo-abbaini",
  "drone-per-controllo-accessi-in-quota",
  "drone-per-controllo-aree-esterne-condominio",
  "drone-per-controllo-balconi-condominio",
  "drone-per-controllo-cantiere-ristrutturazione",
  "drone-per-controllo-condomini",
  "drone-per-controllo-coperture-edili",
  "drone-per-controllo-coperture-industriali",
  "drone-per-controllo-cornicioni",
  "drone-per-controllo-demolizioni",
  "drone-per-controllo-distacchi-intonaco",
  "drone-per-controllo-dopo-grandine",
  "drone-per-controllo-dopo-vento",
  "drone-per-controllo-infiltrazioni-tetto",
  "drone-per-controllo-lucernari",
  "drone-per-controllo-tettoie-edili",
  "drone-per-coperture-condominiali",
  "drone-per-demolizioni",
  "drone-per-diagnosi-visiva-edifici",
  "drone-per-documentazione-danni-tetto",
  "drone-per-documentazione-ristrutturazioni",
  "drone-per-guaina-bituminosa",
  "drone-per-interventi-edili-in-quota",
  "drone-per-ispezione-cortili-condominiali",
  "drone-per-ispezione-manti-impermeabili",
  "drone-per-ispezione-parapetti-condominiali",
  "drone-per-ispezione-pensiline-edili",
  "drone-per-ispezione-ponteggi",
  "drone-per-ispezione-velux-lucernari",
  "drone-per-manutenzione-edifici",
  "drone-per-manutenzione-facciate",
  "drone-per-manutenzione-pluviali",
  "drone-per-manutenzione-stabili",
  "drone-per-manutenzione-tetti",
  "drone-per-preventivo-riparazione-tetto",
  "drone-per-ristrutturazioni",
  "drone-per-sopralluogo-manutenzione-edile",
  "drone-per-stato-avanzamento-lavori",
  "drone-per-verifica-danni-edili",
  "drone-per-verifica-fessurazioni-facciate",
  "drone-per-verifica-grondaie",
  "drone-per-verifica-linee-vita",
  "drone-per-verifica-sicurezza-coperture",
  "drone-per-verifica-terrazzi-condominiali"
]

function formatSlug(slug) {
  return slug
    .replace("drone-per-", "")
    .replaceAll("-", " ")
    .replace("velux", "Velux")
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function createEdiliziaManutenzionePage(slug) {
  const nome = formatSlug(slug)
  const titolo = capitalize(`drone per ${nome}`)

  return {
    slug,
    title: `${titolo} | DroneGuard`,
    description: `${titolo}: trova piloti drone per controlli visivi, foto, video e documentazione per edilizia, manutenzione, tetti, facciate, grondaie, terrazzi e cantieri.`,
    category: "Edilizia e manutenzione",
    h1: `${titolo} con DroneGuard`,
    intro: `Con DroneGuard puoi pubblicare una richiesta per ${titolo.toLowerCase()} e ricevere candidature da piloti drone disponibili. Il drone può essere utile per controlli visivi, foto, video e documentazione su edifici, tetti, facciate, cantieri, coperture, terrazzi, grondaie, ponteggi, aree esterne e punti difficili da raggiungere da terra.`,

    sections: [
      {
        title: `Quando serve un ${titolo.toLowerCase()}`,
        text: `Un servizio drone può essere utile quando bisogna osservare una parte dell’edificio o del cantiere senza partire subito con ponteggi, piattaforme aeree, trabattelli o accessi complessi. In edilizia e manutenzione spesso il problema non è solo vedere un danno, ma capire dove si trova, quanto è esteso, quali zone sono coinvolte e quali dettagli servono per decidere il passaggio successivo.

Il drone può aiutare proprietari, amministratori di condominio, imprese edili, manutentori, geometri, ingegneri, architetti, periti e tecnici a ottenere una prima documentazione visiva più chiara. Le immagini dall’alto possono mostrare coperture, facciate, balconi, gronde, pluviali, terrazzi, lucernari, cornicioni, ponteggi, accessi e aree esterne difficili da controllare da terra.`
      },
      {
        title: "Perché usare un drone per edilizia e manutenzione",
        text: `Il vantaggio principale del drone è la rapidità. Prima di organizzare mezzi costosi o interventi invasivi, una verifica visiva può aiutare a capire se il problema è reale, dove si trova e quanto materiale fotografico serve per parlarne con un tecnico o con un’impresa.

Il drone non sostituisce una relazione tecnica certificata quando serve un professionista abilitato, ma può essere un supporto molto utile per raccogliere foto, video e dettagli da condividere con chi dovrà valutare il lavoro. In molti casi permette di preparare meglio un preventivo, confrontare più imprese, documentare lo stato dei luoghi o controllare l’avanzamento di un intervento.`
      },
      {
        title: "Cosa può documentare il pilota drone",
        text: `Il pilota drone può realizzare foto panoramiche, video descrittivi, immagini di dettaglio e riprese dall’alto in base alla richiesta del cliente. Il materiale può mostrare tetti, coperture, guaine, tegole, grondaie, pluviali, lucernari, facciate, balconi, terrazzi, cortili, ponteggi, cantieri e parti alte dell’edificio.

Per un servizio come ${titolo.toLowerCase()}, il valore non è solo nella ripresa bella, ma nella possibilità di vedere punti che normalmente richiederebbero tempo, attrezzature o accessi particolari. Le immagini possono essere usate per manutenzione, controllo danni, documentazione prima e dopo, preventivi, riunioni condominiali o confronto con tecnici e imprese.`
      },
      {
        title: "A chi può essere utile questo servizio",
        text: `Questo servizio può essere utile a privati, condomini, amministratori, imprese edili, ditte di manutenzione, lattonieri, ditte di impermeabilizzazione, studi tecnici, property manager, società immobiliari, periti assicurativi e proprietari di immobili.

Ogni richiesta può avere un obiettivo diverso: verificare un’infiltrazione, controllare il tetto dopo il vento, documentare danni da grandine, osservare una facciata alta, controllare gronde e pluviali, preparare un intervento di manutenzione o ottenere immagini per un preventivo più chiaro.`
      },
      {
        title: "Cosa indicare nella richiesta su DroneGuard",
        text: `Per ricevere candidature più precise è utile indicare il Comune o la zona, il tipo di edificio, l’altezza indicativa, il problema da controllare, l’urgenza, il risultato desiderato e l’eventuale presenza di ostacoli. Puoi specificare se ti servono foto, video, immagini di dettaglio, panoramiche, documentazione prima e dopo, materiale per assicurazione, materiale per preventivo o semplice controllo visivo.

Più la richiesta è chiara, più i piloti possono valutare fattibilità, sicurezza, tempi, accessi, condizioni meteo, eventuali limitazioni operative e tipo di materiale da consegnare.`
      },
      {
        title: "Come funziona DroneGuard",
        text: `DroneGuard è pensato per mettere in contatto chi ha bisogno di un servizio drone con piloti disponibili. Il cliente pubblica il lavoro, descrive cosa serve e riceve candidature. In questo modo può confrontare profili, disponibilità e proposta prima di scegliere il candidato più adatto.

Questo sistema è utile perché un lavoro in edilizia o manutenzione può cambiare molto in base al luogo, all’altezza, alla superficie da controllare, al tipo di documentazione richiesta e al contesto operativo.`
      }
    ]
  }
}

export const ediliziaManutenzioneSeoPages = ediliziaManutenzione.map(createEdiliziaManutenzionePage)