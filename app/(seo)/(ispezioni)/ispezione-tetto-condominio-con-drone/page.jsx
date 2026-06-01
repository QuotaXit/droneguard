import Link from "next/link"
import Navbar from "@/components/Navbar"

export const metadata = {
  "title": "Ispezione tetto condominio con drone | DroneGuard",
  "description": "Trova piloti drone per ispezione tetto condominio, grondaie, infiltrazioni, cornicioni, lucernari e danni da maltempo. Pubblica la richiesta e ricevi candidature.",
  "alternates": {
    "canonical": "https://www.droneguard.it/ispezione-tetto-condominio-con-drone"
  },
  "openGraph": {
    "title": "Ispezione tetto condominio con drone | DroneGuard",
    "description": "Richiedi foto, video e documentazione visiva del tetto condominiale con piloti drone professionali.",
    "url": "https://www.droneguard.it/ispezione-tetto-condominio-con-drone",
    "siteName": "DroneGuard",
    "type": "website",
    "locale": "it_IT"
  }
}

const heroParagraphs = [
  "Quando un condominio ha infiltrazioni, tegole spostate, grondaie ostruite, cornicioni deteriorati, canne fumarie da controllare o dubbi sullo stato della copertura, la prima difficoltà è quasi sempre la stessa: capire cosa sta succedendo senza montare ponteggi, senza mandare subito persone in quota e senza perdere settimane tra preventivi generici, sopralluoghi incompleti e fotografie fatte da terra.",
  "DroneGuard nasce proprio per ridurre questa distanza tra problema e soluzione. Con una richiesta pubblicata sulla piattaforma puoi descrivere il tetto, allegare foto, indicare la città, specificare se si tratta di condominio, palazzina, villa, capannone o edificio misto e ricevere candidature da piloti drone professionali interessati al lavoro. La pagina è pensata per amministratori di condominio, studi tecnici, imprese edili, periti assicurativi, proprietari e responsabili manutenzione che vogliono una documentazione visiva chiara prima di decidere come intervenire.",
  "Questa non è una semplice pagina informativa sul drone. È una guida pratica per trasformare un problema reale in una richiesta di lavoro concreta: cosa chiedere, quali immagini servono, quali parti del tetto controllare, come spiegare il problema al pilota, quali dati preparare e come usare foto e video per parlare con condomini, tecnici, assicurazioni e imprese senza basarsi solo su ipotesi."
]
const problemParagraphs = [
  "Il tetto di un condominio è una parte dell'edificio che spesso viene guardata solo quando esiste già un problema. Una macchia sul soffitto dell'ultimo piano, acqua che scende vicino a un balcone, una grondaia che trabocca durante un temporale, una tegola caduta nel cortile, un comignolo inclinato o un rumore dopo giornate di vento forte possono sembrare segnali piccoli, ma dietro possono esserci guaine consumate, scossaline sollevate, punti di raccolta acqua, giunti deteriorati, coppi rotti, pluviali ostruiti o elementi metallici non più fissati correttamente.",
  "Il problema è che da terra molte criticità non si vedono. Dal cortile si può intuire qualcosa, dal terrazzo si osserva solo una parte, dal balcone dell'ultimo piano si vede una porzione limitata e spesso la zona realmente danneggiata è più lontana. Il drone permette di avvicinarsi visivamente alla copertura, ai bordi, ai canali di gronda, ai lucernari, alle antenne, alle canne fumarie e ai punti più difficili senza trasformare subito un controllo preliminare in un intervento invasivo.",
  "Per un amministratore condominiale questo significa poter mostrare immagini più comprensibili in assemblea. Per un geometra o un tecnico significa avere una base fotografica utile per valutare la priorità dell'intervento. Per una ditta significa arrivare al preventivo con meno incertezza. Per un proprietario significa non dover spiegare il problema solo a parole. Per un pilota drone iscritto a DroneGuard significa intercettare un lavoro reale, con un committente che ha già un'esigenza specifica."
]
const painPoints = [
  [
    "Infiltrazioni negli ultimi piani",
    "Macchie, umidità, distacchi di pittura e gocciolamenti possono partire da un punto del tetto molto distante rispetto alla stanza dove appare il danno. Un'ispezione aerea aiuta a documentare zone sospette, giunti, converse, abbaini, lucernari e canali di scolo."
  ],
  [
    "Grondaie e pluviali da controllare",
    "Foglie, nidi, detriti, intasamenti e deformazioni possono creare ristagni o far cadere acqua in facciata. Le foto dall'alto permettono di capire se serve una pulizia, una riparazione o un intervento più ampio."
  ],
  [
    "Tegole, coppi e manti spostati",
    "Dopo vento forte, grandine o temporali, alcuni elementi possono muoversi senza essere visibili da terra. Il drone può documentare file disallineate, zone scoperte, rotture e parti mancanti."
  ],
  [
    "Cornicioni e frontalini",
    "Le parti esterne del condominio sono difficili da osservare con precisione. Un volo controllato può aiutare a verificare distacchi, fessurazioni, rigonfiamenti, macchie e punti da approfondire con un tecnico."
  ],
  [
    "Canne fumarie e comignoli",
    "Comignoli inclinati, cappelli danneggiati, crepe o elementi metallici instabili possono generare problemi di sicurezza e manutenzione. Il drone permette riprese ravvicinate utili per valutare il da farsi."
  ],
  [
    "Lucernari, velux e abbaini",
    "Guarnizioni, raccordi e scossaline intorno ai lucernari sono punti delicati. La documentazione aerea aiuta a individuare zone dove l'acqua potrebbe penetrare."
  ],
  [
    "Pannelli fotovoltaici sul tetto",
    "Quando sul condominio sono installati pannelli, l'ispezione può mostrare sporco, ombre, danni visibili, fissaggi, cablaggi esterni e condizioni della copertura attorno all'impianto."
  ],
  [
    "Danni dopo maltempo",
    "Dopo vento, grandine, pioggia intensa o caduta rami, una documentazione fotografica rapida può essere utile per capire se esistono danni evidenti e per preparare eventuali richieste a tecnici o assicurazioni."
  ],
  [
    "Preventivi più chiari",
    "Una ditta che vede immagini dettagliate della zona da controllare può formulare un preventivo più realistico rispetto a una richiesta generica senza materiale visivo."
  ],
  [
    "Assemblea condominiale più semplice",
    "Mostrare foto e video ai condomini rende più facile spiegare perché un intervento è urgente, perché conviene agire prima che il danno peggiori e quali zone devono essere controllate."
  ],
  [
    "Sicurezza prima di tutto",
    "Il drone non sostituisce sempre ponteggi, cestelli o tecnici specializzati, ma può ridurre i sopralluoghi inutili in quota e aiutare a decidere quando l'accesso fisico è davvero necessario."
  ],
  [
    "Tempi più rapidi",
    "Quando il problema è urgente, pubblicare una richiesta chiara su DroneGuard può aiutare a trovare piloti disponibili nella zona senza chiamare uno per uno professionisti diversi."
  ]
]
const audiences = [
  [
    "Amministratori di condominio",
    "Per documentare tetti, grondaie, cornicioni, terrazzi, canne fumarie e coperture prima di assemblee, preventivi o interventi di manutenzione straordinaria."
  ],
  [
    "Studi tecnici e geometri",
    "Per ottenere immagini aeree utili come supporto al sopralluogo, alla relazione tecnica, alla valutazione preliminare del danno e al dialogo con imprese e proprietari."
  ],
  [
    "Imprese edili e lattonieri",
    "Per capire meglio l'area di lavoro prima di salire in quota, organizzare materiali e mezzi, valutare accessi, pendenze, punti critici e porzioni da riparare."
  ],
  [
    "Periti assicurativi",
    "Per avere materiale visivo ordinato dopo eventi atmosferici, danni da vento, grandine, caduta rami o infiltrazioni contestate."
  ],
  [
    "Condomini e proprietari",
    "Per chiedere un controllo chiaro quando c'è un problema visibile ma non si riesce a capire da dove parta."
  ],
  [
    "Società immobiliari",
    "Per controllare edifici da acquistare, vendere, gestire o valorizzare prima di una trattativa o di un intervento."
  ],
  [
    "Facility manager",
    "Per programmare controlli periodici su stabili, uffici, sedi operative, coperture piane, piazzali e aree tecniche esterne."
  ],
  [
    "Piloti drone professionali",
    "Per ricevere lavori verticali, concreti e meglio descritti, evitando richieste vaghe e perdite di tempo."
  ]
]
const processSteps = [
  [
    "1. Pubblica la richiesta",
    "Inserisci il tipo di edificio, la città, il problema principale, l'urgenza e le immagini già disponibili. Più la richiesta è chiara, più sarà facile per i piloti capire se possono aiutarti."
  ],
  [
    "2. Descrivi il tetto",
    "Specifica se è tetto a falde, lastrico solare, terrazzo condominiale, copertura in lamiera, pannelli sandwich, tegole, coppi, guaina, copertura piana o struttura mista."
  ],
  [
    "3. Indica le zone da controllare",
    "Grondaie, pluviali, comignoli, cornicioni, lucernari, antenne, abbaini, parapetti, pannelli fotovoltaici, punti di infiltrazione o zone colpite da maltempo."
  ],
  [
    "4. Ricevi candidature",
    "I piloti interessati possono rispondere alla tua richiesta. Puoi valutare profilo, esperienza, disponibilità, zona di intervento e proposta."
  ],
  [
    "5. Concorda modalità e limiti",
    "Prima del volo bisogna chiarire accesso, spazi, eventuali aree sensibili, condizioni meteo, obiettivo del sopralluogo e tipo di consegna desiderata."
  ],
  [
    "6. Esecuzione del volo",
    "Il pilota raccoglie foto e video secondo quanto concordato, mantenendo attenzione a sicurezza, privacy, condizioni operative e regole applicabili."
  ],
  [
    "7. Consegna materiale",
    "Il committente riceve immagini, video o eventuale report fotografico ordinato. In base all'accordo possono essere consegnati file originali, selezione di scatti, cartelle per zona o video riassuntivo."
  ],
  [
    "8. Uso del materiale",
    "Le immagini possono aiutare a parlare con tecnici, imprese, condomini o assicurazioni. Non sostituiscono una diagnosi strutturale, ma rendono la situazione molto più chiara."
  ]
]
const deliverables = [
  [
    "Foto ad alta risoluzione",
    "Scatti ravvicinati delle zone da controllare, utili per osservare dettagli visibili come rotture, spostamenti, ristagni, detriti e elementi deteriorati."
  ],
  [
    "Video panoramico",
    "Riprese generali dell'edificio e della copertura per capire posizione, accessi, contesto, pendenze e aree interessate."
  ],
  [
    "Sequenza per zone",
    "Materiale organizzato per tetto, grondaie, facciate, cornicioni, lucernari, canne fumarie, fotovoltaico o terrazzi."
  ],
  [
    "Prima selezione criticità",
    "Una raccolta delle immagini più significative, utile per capire quali punti mostrare subito a tecnico, ditta o assemblea."
  ],
  [
    "Report fotografico semplice",
    "Documento con immagini e descrizione ordinata delle zone fotografate, utile quando il committente vuole inviare il materiale a più soggetti."
  ],
  [
    "Riprese per preventivo",
    "Foto pensate per aiutare imprese e artigiani a valutare l'intervento, i mezzi necessari e l'estensione del problema."
  ],
  [
    "Materiale per assemblea",
    "Immagini comprensibili anche a chi non è tecnico, utili per spiegare ai condomini perché serve approfondire o intervenire."
  ],
  [
    "Supporto a perizia",
    "Documentazione visiva che può affiancare il lavoro del perito o del tecnico incaricato, senza sostituire valutazioni professionali."
  ],
  [
    "Archivio storico",
    "Ripetendo il controllo nel tempo, il condominio può confrontare lo stato della copertura prima e dopo interventi o eventi atmosferici."
  ],
  [
    "Brief per manutenzione",
    "Materiale utile a programmare pulizia gronde, controllo coppi, verifica impermeabilizzazione, sistemazione scossaline o controllo punti critici."
  ]
]
const checklist = [
  "Indirizzo o zona dell'edificio, anche approssimativa se non vuoi indicare subito il civico.",
  "Tipo di stabile: condominio, palazzina, villa, capannone, edificio commerciale o struttura mista.",
  "Numero indicativo di piani e presenza di cortile, strada interna, terrazzo praticabile o area di decollo.",
  "Problema principale: infiltrazione, tegole rotte, grondaia, pluviale, danno da vento, grandine, cornicione, canna fumaria, lucernario.",
  "Zone che vuoi vedere meglio: lato strada, lato cortile, copertura centrale, faldale, comignoli, scossaline, terrazzi, balconi, parapetti.",
  "Urgenza: semplice controllo, problema già visibile, evento recente, danno in corso o necessità di materiale per assemblea.",
  "Tipo di consegna desiderata: solo foto, foto e video, report fotografico, cartella ordinata per zone o materiale per preventivo.",
  "Eventuali vincoli: scuole vicine, strade trafficate, spazi stretti, zone sensibili, orari migliori, accesso limitato, presenza di antenne o cavi.",
  "Contatti del referente sul posto: amministratore, portiere, consigliere di condominio, tecnico, proprietario o responsabile dell'area.",
  "Foto da terra già disponibili, utili per far capire al pilota dove si manifesta il problema."
]
const internalLinks = [
  [
    "/ispezione-tetti-con-drone",
    "Ispezione tetti con drone"
  ],
  [
    "/ispezione-grondaie-con-drone",
    "Ispezione grondaie con drone"
  ],
  [
    "/ispezione-cornicioni-con-drone",
    "Ispezione cornicioni con drone"
  ],
  [
    "/ispezione-infiltrazioni-con-drone",
    "Ispezione infiltrazioni con drone"
  ],
  [
    "/preventivo-ispezione-tetto-drone",
    "Preventivo ispezione tetto drone"
  ],
  [
    "/preventivo-drone-condominio",
    "Preventivo drone condominio"
  ],
  [
    "/drone-per-amministratori-condominio",
    "Drone per amministratori di condominio"
  ],
  [
    "/pilota-drone-per-sopralluogo",
    "Pilota drone per sopralluogo"
  ],
  [
    "/drone-per-assicurazione-danni",
    "Drone per assicurazione danni"
  ],
  [
    "/lavoro-drone-ispezioni-tetti",
    "Lavori drone ispezioni tetti"
  ]
]
const faq = [
  [
    "Quanto costa un'ispezione tetto condominio con drone?",
    "Il costo dipende da città, accessibilità, dimensione della copertura, urgenza, tipo di materiale richiesto, esperienza del pilota e complessità operativa. Una semplice raccolta foto può avere un costo diverso da un servizio con video, report ordinato e più punti da controllare. Su DroneGuard puoi pubblicare la richiesta e confrontare le risposte dei piloti."
  ],
  [
    "Il drone sostituisce il sopralluogo del tecnico?",
    "No. Il drone fornisce documentazione visiva molto utile, ma la valutazione tecnica, strutturale, assicurativa o progettuale resta competenza del professionista incaricato. La forza del drone è mostrare meglio le zone difficili da raggiungere e ridurre le decisioni prese alla cieca."
  ],
  [
    "Serve l'autorizzazione del condominio?",
    "Dipende dal caso. Se il controllo riguarda parti comuni, normalmente è opportuno che la richiesta sia gestita dall'amministratore o da un soggetto autorizzato. Il pilota valuterà anche aspetti operativi, sicurezza, privacy e regole di volo."
  ],
  [
    "Si può volare in città?",
    "Non sempre alle stesse condizioni. La possibilità di volo dipende dal luogo, dal tipo di operazione, dalla categoria applicabile, da eventuali limitazioni dello spazio aereo e dalla valutazione del pilota. Per questo è importante indicare bene indirizzo, contesto e obiettivo del servizio."
  ],
  [
    "Che differenza c'è tra foto e video?",
    "Le foto sono spesso più utili per osservare dettagli fermi, ingrandire punti specifici e inviare materiale a tecnici o imprese. Il video aiuta invece a capire contesto, percorso, proporzioni e posizione generale delle criticità. In molti casi conviene chiedere entrambi."
  ],
  [
    "Il drone vede le infiltrazioni?",
    "Il drone non vede l'acqua dentro le murature, ma può documentare elementi esterni collegati a possibili infiltrazioni: tegole rotte, scossaline, giunti, ristagni, guaine deteriorate, gronde ostruite, punti danneggiati e raccordi intorno a lucernari o camini."
  ],
  [
    "Si può usare per danni da grandine o vento?",
    "Sì, può essere molto utile per documentare rapidamente la copertura dopo un evento atmosferico. Le immagini possono aiutare a capire se servono interventi, verifiche tecniche o materiale da condividere con assicurazione e impresa."
  ],
  [
    "Cosa devo scrivere nella richiesta?",
    "Scrivi edificio, città, problema principale, zone da controllare, urgenza, tipo di materiale desiderato e disponibilità di accesso. Una richiesta precisa aumenta la possibilità di ricevere risposte utili."
  ],
  [
    "Il pilota deve essere certificato?",
    "Il pilota deve operare nel rispetto delle regole applicabili e possedere le competenze richieste per il tipo di operazione. DroneGuard serve a mettere in contatto domanda e offerta, ma il committente deve sempre valutare il professionista scelto."
  ],
  [
    "Posso chiedere un report fotografico?",
    "Sì. Nella richiesta puoi indicare che vuoi una cartella ordinata o un report fotografico con immagini divise per zone: tetto, gronde, facciate, comignoli, lucernari, terrazzi, pannelli e punti critici."
  ],
  [
    "La pagina va bene anche per piloti drone?",
    "Sì, perché intercetta committenti con problemi reali. Un pilota che lavora in ispezioni edili può ricevere richieste più precise rispetto a un annuncio generico di riprese drone."
  ],
  [
    "Perché usare DroneGuard invece di cercare singoli piloti?",
    "Perché puoi pubblicare una sola richiesta e far capire subito cosa ti serve. I piloti interessati possono rispondere, e tu puoi confrontare disponibilità e proposta senza ripetere lo stesso messaggio a più professionisti."
  ]
]
const longSections = [
  [
    "Perché questa pagina è potente per DroneGuard",
    [
      "Questa pagina lavora su un'intenzione di ricerca molto concreta. Chi cerca ispezione tetto condominio con drone di solito non sta solo leggendo per curiosità: spesso ha una perdita, un danno, una grondaia che non scarica, un amministratore da convincere, un'assemblea da preparare, una ditta da contattare o un'assicurazione a cui spiegare cosa è successo. È una ricerca vicina al momento della richiesta di preventivo, quindi più interessante di una pagina generica sulle riprese aeree.",
      "La forza della pagina è che non parla solo al cliente finale, ma anche a più figure che possono generare lavori: amministratori condominiali, geometri, studi tecnici, periti, imprese edili, lattonieri, manutentori, società immobiliari e proprietari. Questo allarga il pubblico senza perdere precisione. La parola chiave principale resta specifica, ma intorno costruisce un ecosistema di bisogni reali.",
      "Rispetto a una pagina città o a una pagina molto simile ad altre, questa ha valore proprio. Spiega un problema, chiarisce un processo, dà una checklist, anticipa dubbi, collega pagine interne già presenti e invita l'utente a pubblicare una richiesta. Questo è importante perché Google consiglia contenuti utili, affidabili e pensati per le persone, non pagine create solo per moltiplicare traffico senza valore.",
      "Per questo il contenuto è lungo, ma non è gonfiato a caso. Ogni sezione risponde a una domanda che il cliente potrebbe avere prima di affidare il lavoro: quando serve il drone, cosa può vedere, cosa non può garantire, quali materiali chiedere, come usare le immagini, cosa scrivere al pilota, quali differenze ci sono tra tetto, grondaie, cornicioni, lucernari e danni da maltempo."
    ]
  ],
  [
    "Il problema reale: il condominio vede il danno, ma non vede la causa",
    [
      "In molti condomini il problema nasce così: un proprietario segnala umidità nell'appartamento, il vicino dice che durante la pioggia cade acqua dal frontalino, qualcuno nota un pezzo di guaina sollevata, il portiere trova frammenti di coppo in cortile o l'amministratore riceve foto fatte dal basso senza capire davvero quale sia la zona interessata. Si apre una discussione, ma manca una base visiva comune.",
      "Quando non c'è documentazione chiara, ogni soggetto interpreta il problema a modo suo. Il condomino dell'ultimo piano teme un danno urgente, altri condomini pensano che sia un intervento rimandabile, l'impresa chiede un sopralluogo, il tecnico vuole vedere il tetto, l'assicurazione chiede prove, ma per salire servono accesso, sicurezza e tempo. In questa fase il drone può essere un primo passaggio molto utile.",
      "Un'ispezione aerea non decide da sola la causa tecnica, ma può mostrare se ci sono indizi visibili: manti discontinui, tegole rotte, ristagni, canali pieni, scossaline deformate, fessurazioni, elementi sollevati, zone con vegetazione, pluviali danneggiati, comignoli deteriorati o linee di deflusso dell'acqua non corrette. Questo cambia la conversazione: non si discute più solo su impressioni, ma su immagini.",
      "Per DroneGuard questo è perfetto, perché la piattaforma non deve vendere un servizio standard uguale per tutti. Deve permettere al cliente di pubblicare un problema e ai piloti di candidarsi. La pagina quindi spinge l'utente a trasformare un dubbio in una richiesta precisa: voglio controllare questo tetto, in questa città, per questo motivo, con questo tipo di consegna."
    ]
  ],
  [
    "Quando conviene chiedere un'ispezione tetto condominio con drone",
    [
      "Conviene chiedere un'ispezione con drone quando il problema è visibile ma non raggiungibile facilmente. Se una grondaia sembra traboccare, se l'acqua scende in facciata, se dopo il vento ci sono elementi spostati, se una guaina appare gonfia ma non si riesce a fotografarla bene, se un camino sembra inclinato, se un lucernario mostra segni di infiltrazione, il drone può dare una prima lettura visiva rapida.",
      "Conviene anche prima di lavori straordinari. Un amministratore può usare le immagini per spiegare ai condomini perché serve intervenire, un geometra può usarle per impostare il sopralluogo, una ditta può guardarle prima di formulare un preventivo, un perito può richiedere integrazioni e un proprietario può evitare di affidarsi a foto confuse o descrizioni incomplete.",
      "Un altro momento forte è dopo il maltempo. Grandine, vento e temporali intensi possono creare danni non immediatamente visibili da terra. In questi casi avere una raccolta di immagini entro poco tempo può aiutare a capire se il condominio deve attivarsi subito, se serve una messa in sicurezza, se basta un intervento di pulizia o se è necessario coinvolgere un tecnico.",
      "Conviene infine nei controlli periodici. Un condominio che aspetta sempre il danno rischia di spendere di più. Un controllo visivo programmato, magari prima dell'autunno o dopo l'inverno, può aiutare a vedere gronde, pluviali, guaine, tegole, coperture piane, antenne e punti delicati prima che una piccola anomalia diventi un problema più costoso."
    ]
  ],
  [
    "Cosa può vedere bene il drone su un tetto condominiale",
    [
      "Il drone può vedere molto bene ciò che è esterno e visibile: allineamento dei coppi o delle tegole, rotture evidenti, parti mancanti, accumulo di detriti, foglie nelle gronde, ristagni su coperture piane, elementi metallici deformati, fessure visibili, guaine con zone consumate, scossaline sollevate, staffe o supporti, antenne, comignoli, lucernari, botole, parapetti, canali di raccolta e superfici esposte.",
      "Può anche mostrare il rapporto tra le zone. Per esempio, una macchia interna non corrisponde sempre al punto esatto sopra la stanza: l'acqua può entrare da un raccordo e scorrere sotto il manto prima di comparire lontano. Le immagini dall'alto aiutano a capire la geometria del tetto, le pendenze, le linee di scarico, gli ostacoli e i punti in cui l'acqua può raccogliersi.",
      "Su un condominio complesso, con più falde, terrazzi, volumi tecnici e corpi scala, la vista aerea è ancora più utile. Da terra si vede una facciata alla volta, mentre dall'alto si può documentare l'intero schema della copertura. Questo permette di parlare con più precisione di lato strada, lato cortile, scala A, scala B, zona ascensore, torretta, vano tecnico, lastrico, terrazzo o porzione sopra gli ultimi piani.",
      "Il drone però non deve essere presentato come uno strumento magico. Non vede dentro i muri, non misura da solo la resistenza dei materiali, non sostituisce prove invasive, non certifica automaticamente la causa di una perdita. Il suo valore è rendere visibile e documentabile ciò che altrimenti resterebbe difficile da osservare."
    ]
  ],
  [
    "Come scrivere una richiesta perfetta su DroneGuard",
    [
      "Una richiesta forte non deve essere lunga, deve essere chiara. Il committente dovrebbe scrivere il tipo di edificio, la città, il problema, la zona da controllare e il risultato desiderato. Per esempio: condominio di cinque piani a Roma, infiltrazione nell'appartamento dell'ultimo piano lato cortile, possibile problema su grondaia o scossalina, richiesta foto ravvicinate e video panoramico del tetto.",
      "È utile dire se esiste un referente sul posto. Un pilota deve sapere se potrà parlare con il portiere, accedere a un cortile, salire su un terrazzo, usare un'area interna per il decollo o se dovrà operare da spazio esterno. Sono dettagli pratici, ma determinano fattibilità, tempi e qualità del servizio.",
      "È utile anche indicare cosa si vuole ricevere. Chi chiede solo video rischia di avere belle riprese ma pochi dettagli tecnici. Chi chiede solo foto può non avere una visione d'insieme. Una combinazione equilibrata spesso funziona meglio: panoramica generale, foto per zone, dettagli dei punti critici e una cartella ordinata da condividere con tecnico o amministratore.",
      "Infine, bisogna evitare richieste troppo vaghe. Scrivere cerco drone per tetto non basta. Scrivere voglio controllare grondaie, tegole, lucernari e comignoli dopo temporale, con consegna foto e video, permette ai piloti di rispondere meglio e al committente di confrontare proposte più precise."
    ]
  ],
  [
    "Perché questa pagina aiuta anche i piloti drone",
    [
      "DroneGuard non deve attirare solo clienti, ma anche piloti. Una pagina come questa lavora su una nicchia dove il pilota può proporre un servizio serio e ripetibile. Le ispezioni condominiali non sono riprese creative una tantum: possono diventare controlli periodici, richieste dopo maltempo, supporto a studi tecnici, lavori per amministratori e collaborazioni con imprese.",
      "Per il pilota, ricevere una richiesta ben scritta significa capire subito se può operare, se ha attrezzatura adatta, se la zona è raggiungibile, se serve particolare attenzione alla normativa e se il cliente vuole solo immagini o anche un report. Questo riduce perdite di tempo e aumenta la qualità della risposta.",
      "La pagina spiega al committente come preparare il lavoro, ma indirettamente qualifica anche il lead. Un cliente che arriva da questa pagina sa già che il drone non è un giocattolo, che servono sicurezza e regole, che la consegna va concordata e che il materiale ha un uso pratico. Questo rende il contatto più serio.",
      "Un pilota iscritto alla piattaforma può quindi trovare richieste meno generiche e più vicine a un incarico concreto: tetto da controllare, condominio da documentare, danno da fotografare, amministratore che deve decidere, tecnico che vuole immagini, impresa che deve preparare preventivo."
    ]
  ],
  [
    "Come usare le immagini dopo il volo",
    [
      "Il valore dell'ispezione non finisce quando il drone atterra. Il materiale va usato bene. La cosa migliore è ordinare le immagini per zona e per problema: panoramica del tetto, lato strada, lato cortile, grondaie, comignoli, lucernari, terrazzi, punti sospetti, eventuali dettagli ravvicinati. In questo modo chi riceve il materiale capisce subito cosa sta guardando.",
      "Per l'assemblea condominiale, conviene selezionare poche immagini molto chiare. Mostrare cinquanta foto senza ordine può confondere. Mostrare una vista generale e poi tre o quattro dettagli critici permette di spiegare meglio la situazione. Se serve votare un intervento, la documentazione visiva rende la discussione più concreta.",
      "Per una ditta, invece, possono essere utili più dettagli: accessi, pendenze, zone di lavoro, dimensione dell'area, ostacoli, posizione dei camini, presenza di pannelli, larghezza dei canali e stato generale della copertura. Più informazioni visive ha l'impresa, più può preparare un preventivo coerente.",
      "Per un tecnico o un perito, le immagini possono essere un supporto alla valutazione. Non devono sostituire il sopralluogo professionale, ma possono aiutare a decidere dove concentrare l'attenzione, quali prove fare, quali zone verificare fisicamente e quali interventi proporre."
    ]
  ],
  [
    "Errori da evitare quando si crea una pagina SEO lunga",
    [
      "Il primo errore è creare una pagina lunga ma vuota, ripetendo sempre le stesse frasi. Una pagina di trentamila caratteri deve avere struttura, intenzione e utilità. Deve rispondere a dubbi reali, non solo mettere parole chiave in ogni riga. Per questo questa pagina contiene processo, checklist, FAQ, destinatari, problemi, consegne, link interni e spiegazioni pratiche.",
      "Il secondo errore è creare pagine troppo simili tra loro. Se il sito ha già molte pagine su tetti, grondaie, condominio e preventivi, questa deve distinguersi. Qui il focus è l'incrocio preciso tra tetto condominiale, problema reale, richiesta di pilota e uso del materiale. Non è una copia di ispezione tetti con drone e non è una copia di preventivo drone condominio.",
      "Il terzo errore è promettere troppo. Non bisogna scrivere che il drone risolve ogni infiltrazione o sostituisce sempre il tecnico. È più credibile dire che documenta ciò che è visibile, aiuta a capire meglio, facilita preventivi e decisioni, ma va usato dentro un processo corretto. Questa trasparenza aumenta fiducia e riduce aspettative sbagliate.",
      "Il quarto errore è lasciare la pagina isolata. Una pagina forte deve collegarsi ad altre pagine interne: ispezione grondaie, preventivo tetto, amministratori condominio, pilota per sopralluogo, assicurazione danni, lavori per piloti. Così Google e utenti capiscono che è parte del sito, non una pagina creata e abbandonata."
    ]
  ]
]
const extraGuides = [
  {
    "title": "Focus operativo: Tetto a falde",
    "body": [
      "Nel caso di tetto a falde, la richiesta su DroneGuard deve indicare in modo semplice quali elementi devono essere osservati: coppi, tegole, colmi, linee di gronda, converse, comignoli e punti di raccordo. Non serve usare un linguaggio tecnico perfetto, ma serve far capire al pilota quali punti sono importanti e quali immagini devono essere prioritarie.",
      "Per tetto a falde è utile chiedere una combinazione di riprese generali e dettagli. Le riprese generali servono a capire il contesto dell'edificio, mentre i dettagli servono per analizzare singoli punti. Se il committente chiede solo una panoramica, rischia di non avere materiale sufficiente. Se chiede solo dettagli, rischia di non capire dove si trovano le criticità.",
      "Un buon risultato nasce da una richiesta ordinata: posizione dell'edificio, accessi, problema, urgenza, consegna desiderata e uso finale del materiale. Se il materiale deve andare in assemblea, servono immagini chiare. Se deve andare a una ditta, servono dettagli tecnici. Se deve servire a un perito, conviene concordare in anticipo quali zone documentare."
    ]
  },
  {
    "title": "Focus operativo: Copertura piana",
    "body": [
      "Nel caso di copertura piana, la richiesta su DroneGuard deve indicare in modo semplice quali elementi devono essere osservati: guaina, ristagni, scarichi, bocchettoni, giunti, parapetti e lucernari. Non serve usare un linguaggio tecnico perfetto, ma serve far capire al pilota quali punti sono importanti e quali immagini devono essere prioritarie.",
      "Per copertura piana è utile chiedere una combinazione di riprese generali e dettagli. Le riprese generali servono a capire il contesto dell'edificio, mentre i dettagli servono per analizzare singoli punti. Se il committente chiede solo una panoramica, rischia di non avere materiale sufficiente. Se chiede solo dettagli, rischia di non capire dove si trovano le criticità.",
      "Un buon risultato nasce da una richiesta ordinata: posizione dell'edificio, accessi, problema, urgenza, consegna desiderata e uso finale del materiale. Se il materiale deve andare in assemblea, servono immagini chiare. Se deve andare a una ditta, servono dettagli tecnici. Se deve servire a un perito, conviene concordare in anticipo quali zone documentare."
    ]
  },
  {
    "title": "Focus operativo: Lastrico solare condominiale",
    "body": [
      "Nel caso di lastrico solare condominiale, la richiesta su DroneGuard deve indicare in modo semplice quali elementi devono essere osservati: pavimentazione, bocchettoni, soglie, giunti, parapetti e zone intorno ai volumi tecnici. Non serve usare un linguaggio tecnico perfetto, ma serve far capire al pilota quali punti sono importanti e quali immagini devono essere prioritarie.",
      "Per lastrico solare condominiale è utile chiedere una combinazione di riprese generali e dettagli. Le riprese generali servono a capire il contesto dell'edificio, mentre i dettagli servono per analizzare singoli punti. Se il committente chiede solo una panoramica, rischia di non avere materiale sufficiente. Se chiede solo dettagli, rischia di non capire dove si trovano le criticità.",
      "Un buon risultato nasce da una richiesta ordinata: posizione dell'edificio, accessi, problema, urgenza, consegna desiderata e uso finale del materiale. Se il materiale deve andare in assemblea, servono immagini chiare. Se deve andare a una ditta, servono dettagli tecnici. Se deve servire a un perito, conviene concordare in anticipo quali zone documentare."
    ]
  },
  {
    "title": "Focus operativo: Copertura con pannelli fotovoltaici",
    "body": [
      "Nel caso di copertura con pannelli fotovoltaici, la richiesta su DroneGuard deve indicare in modo semplice quali elementi devono essere osservati: file dei pannelli, fissaggi, passaggi cavi, ombre, sporco e stato della copertura sottostante. Non serve usare un linguaggio tecnico perfetto, ma serve far capire al pilota quali punti sono importanti e quali immagini devono essere prioritarie.",
      "Per copertura con pannelli fotovoltaici è utile chiedere una combinazione di riprese generali e dettagli. Le riprese generali servono a capire il contesto dell'edificio, mentre i dettagli servono per analizzare singoli punti. Se il committente chiede solo una panoramica, rischia di non avere materiale sufficiente. Se chiede solo dettagli, rischia di non capire dove si trovano le criticità.",
      "Un buon risultato nasce da una richiesta ordinata: posizione dell'edificio, accessi, problema, urgenza, consegna desiderata e uso finale del materiale. Se il materiale deve andare in assemblea, servono immagini chiare. Se deve andare a una ditta, servono dettagli tecnici. Se deve servire a un perito, conviene concordare in anticipo quali zone documentare."
    ]
  },
  {
    "title": "Focus operativo: Condominio storico",
    "body": [
      "Nel caso di condominio storico, la richiesta su DroneGuard deve indicare in modo semplice quali elementi devono essere osservati: cornicioni, coppi, comignoli, canali di gronda e dettagli architettonici da osservare con cautela. Non serve usare un linguaggio tecnico perfetto, ma serve far capire al pilota quali punti sono importanti e quali immagini devono essere prioritarie.",
      "Per condominio storico è utile chiedere una combinazione di riprese generali e dettagli. Le riprese generali servono a capire il contesto dell'edificio, mentre i dettagli servono per analizzare singoli punti. Se il committente chiede solo una panoramica, rischia di non avere materiale sufficiente. Se chiede solo dettagli, rischia di non capire dove si trovano le criticità.",
      "Un buon risultato nasce da una richiesta ordinata: posizione dell'edificio, accessi, problema, urgenza, consegna desiderata e uso finale del materiale. Se il materiale deve andare in assemblea, servono immagini chiare. Se deve andare a una ditta, servono dettagli tecnici. Se deve servire a un perito, conviene concordare in anticipo quali zone documentare."
    ]
  },
  {
    "title": "Focus operativo: Palazzina moderna",
    "body": [
      "Nel caso di palazzina moderna, la richiesta su DroneGuard deve indicare in modo semplice quali elementi devono essere osservati: terrazzi, guaine, scossaline, ringhiere, frontalini, pluviali e coperture tecniche. Non serve usare un linguaggio tecnico perfetto, ma serve far capire al pilota quali punti sono importanti e quali immagini devono essere prioritarie.",
      "Per palazzina moderna è utile chiedere una combinazione di riprese generali e dettagli. Le riprese generali servono a capire il contesto dell'edificio, mentre i dettagli servono per analizzare singoli punti. Se il committente chiede solo una panoramica, rischia di non avere materiale sufficiente. Se chiede solo dettagli, rischia di non capire dove si trovano le criticità.",
      "Un buon risultato nasce da una richiesta ordinata: posizione dell'edificio, accessi, problema, urgenza, consegna desiderata e uso finale del materiale. Se il materiale deve andare in assemblea, servono immagini chiare. Se deve andare a una ditta, servono dettagli tecnici. Se deve servire a un perito, conviene concordare in anticipo quali zone documentare."
    ]
  },
  {
    "title": "Focus operativo: Capannone condominiale o misto",
    "body": [
      "Nel caso di capannone condominiale o misto, la richiesta su DroneGuard deve indicare in modo semplice quali elementi devono essere osservati: pannelli sandwich, lamiere, lucernari industriali, canali, fissaggi e punti di sovrapposizione. Non serve usare un linguaggio tecnico perfetto, ma serve far capire al pilota quali punti sono importanti e quali immagini devono essere prioritarie.",
      "Per capannone condominiale o misto è utile chiedere una combinazione di riprese generali e dettagli. Le riprese generali servono a capire il contesto dell'edificio, mentre i dettagli servono per analizzare singoli punti. Se il committente chiede solo una panoramica, rischia di non avere materiale sufficiente. Se chiede solo dettagli, rischia di non capire dove si trovano le criticità.",
      "Un buon risultato nasce da una richiesta ordinata: posizione dell'edificio, accessi, problema, urgenza, consegna desiderata e uso finale del materiale. Se il materiale deve andare in assemblea, servono immagini chiare. Se deve andare a una ditta, servono dettagli tecnici. Se deve servire a un perito, conviene concordare in anticipo quali zone documentare."
    ]
  },
  {
    "title": "Focus operativo: Edificio dopo temporale",
    "body": [
      "Nel caso di edificio dopo temporale, la richiesta su DroneGuard deve indicare in modo semplice quali elementi devono essere osservati: tegole spostate, rami, grandine, ristagni, elementi metallici deformati e ostruzioni nelle gronde. Non serve usare un linguaggio tecnico perfetto, ma serve far capire al pilota quali punti sono importanti e quali immagini devono essere prioritarie.",
      "Per edificio dopo temporale è utile chiedere una combinazione di riprese generali e dettagli. Le riprese generali servono a capire il contesto dell'edificio, mentre i dettagli servono per analizzare singoli punti. Se il committente chiede solo una panoramica, rischia di non avere materiale sufficiente. Se chiede solo dettagli, rischia di non capire dove si trovano le criticità.",
      "Un buon risultato nasce da una richiesta ordinata: posizione dell'edificio, accessi, problema, urgenza, consegna desiderata e uso finale del materiale. Se il materiale deve andare in assemblea, servono immagini chiare. Se deve andare a una ditta, servono dettagli tecnici. Se deve servire a un perito, conviene concordare in anticipo quali zone documentare."
    ]
  }
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.droneguard.it/ispezione-tetto-condominio-con-drone#service",
      "name": "Ispezione tetto condominio con drone",
      "serviceType": "Ispezione visiva con drone per tetti condominiali, grondaie, coperture e danni da maltempo",
      "areaServed": {
        "@type": "Country",
        "name": "Italia"
      },
      "provider": {
        "@type": "Organization",
        "name": "DroneGuard",
        "url": "https://www.droneguard.it"
      },
      "description": "DroneGuard mette in contatto clienti, amministratori di condominio, tecnici e aziende con piloti drone disponibili per ispezioni visive di tetti condominiali, coperture, grondaie, cornicioni e punti difficili da raggiungere."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.droneguard.it/ispezione-tetto-condominio-con-drone#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.droneguard.it"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Ispezioni con drone",
          "item": "https://www.droneguard.it/ispezioni-con-drone"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Ispezione tetto condominio con drone",
          "item": "https://www.droneguard.it/ispezione-tetto-condominio-con-drone"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.droneguard.it/ispezione-tetto-condominio-con-drone#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Quanto costa un'ispezione tetto condominio con drone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il costo dipende da città, accessibilità, dimensione della copertura, urgenza, tipo di materiale richiesto, esperienza del pilota e complessità operativa. Una semplice raccolta foto può avere un costo diverso da un servizio con video, report ordinato e più punti da controllare. Su DroneGuard puoi pubblicare la richiesta e confrontare le risposte dei piloti."
          }
        },
        {
          "@type": "Question",
          "name": "Il drone sostituisce il sopralluogo del tecnico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Il drone fornisce documentazione visiva molto utile, ma la valutazione tecnica, strutturale, assicurativa o progettuale resta competenza del professionista incaricato. La forza del drone è mostrare meglio le zone difficili da raggiungere e ridurre le decisioni prese alla cieca."
          }
        },
        {
          "@type": "Question",
          "name": "Serve l'autorizzazione del condominio?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dipende dal caso. Se il controllo riguarda parti comuni, normalmente è opportuno che la richiesta sia gestita dall'amministratore o da un soggetto autorizzato. Il pilota valuterà anche aspetti operativi, sicurezza, privacy e regole di volo."
          }
        },
        {
          "@type": "Question",
          "name": "Si può volare in città?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non sempre alle stesse condizioni. La possibilità di volo dipende dal luogo, dal tipo di operazione, dalla categoria applicabile, da eventuali limitazioni dello spazio aereo e dalla valutazione del pilota. Per questo è importante indicare bene indirizzo, contesto e obiettivo del servizio."
          }
        },
        {
          "@type": "Question",
          "name": "Che differenza c'è tra foto e video?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Le foto sono spesso più utili per osservare dettagli fermi, ingrandire punti specifici e inviare materiale a tecnici o imprese. Il video aiuta invece a capire contesto, percorso, proporzioni e posizione generale delle criticità. In molti casi conviene chiedere entrambi."
          }
        },
        {
          "@type": "Question",
          "name": "Il drone vede le infiltrazioni?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il drone non vede l'acqua dentro le murature, ma può documentare elementi esterni collegati a possibili infiltrazioni: tegole rotte, scossaline, giunti, ristagni, guaine deteriorate, gronde ostruite, punti danneggiati e raccordi intorno a lucernari o camini."
          }
        },
        {
          "@type": "Question",
          "name": "Si può usare per danni da grandine o vento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sì, può essere molto utile per documentare rapidamente la copertura dopo un evento atmosferico. Le immagini possono aiutare a capire se servono interventi, verifiche tecniche o materiale da condividere con assicurazione e impresa."
          }
        },
        {
          "@type": "Question",
          "name": "Cosa devo scrivere nella richiesta?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scrivi edificio, città, problema principale, zone da controllare, urgenza, tipo di materiale desiderato e disponibilità di accesso. Una richiesta precisa aumenta la possibilità di ricevere risposte utili."
          }
        },
        {
          "@type": "Question",
          "name": "Il pilota deve essere certificato?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Il pilota deve operare nel rispetto delle regole applicabili e possedere le competenze richieste per il tipo di operazione. DroneGuard serve a mettere in contatto domanda e offerta, ma il committente deve sempre valutare il professionista scelto."
          }
        },
        {
          "@type": "Question",
          "name": "Posso chiedere un report fotografico?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sì. Nella richiesta puoi indicare che vuoi una cartella ordinata o un report fotografico con immagini divise per zone: tetto, gronde, facciate, comignoli, lucernari, terrazzi, pannelli e punti critici."
          }
        },
        {
          "@type": "Question",
          "name": "La pagina va bene anche per piloti drone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sì, perché intercetta committenti con problemi reali. Un pilota che lavora in ispezioni edili può ricevere richieste più precise rispetto a un annuncio generico di riprese drone."
          }
        },
        {
          "@type": "Question",
          "name": "Perché usare DroneGuard invece di cercare singoli piloti?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Perché puoi pubblicare una sola richiesta e far capire subito cosa ti serve. I piloti interessati possono rispondere, e tu puoi confrontare disponibilità e proposta senza ripetere lo stesso messaggio a più professionisti."
          }
        }
      ]
    }
  ]
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-4xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-6 text-lg leading-8 text-gray-300">{text}</p> : null}
    </div>
  )
}

function Card({ title, text }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20 transition hover:border-green-400/40 hover:bg-white/[0.07]">
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="text-base leading-7 text-gray-300">{text}</p>
    </div>
  )
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.25),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-green-400">
              Ispezioni tetti condominiali con drone
            </p>
            <h1 className="max-w-5xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Ispezione tetto condominio con drone: trova un pilota per foto, video e controllo visivo della copertura
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-8 text-gray-300">
              {heroParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/register"
                className="rounded-full bg-green-400 px-8 py-4 text-center text-base font-bold text-[#07111f] transition hover:bg-green-300"
              >
                Pubblica una richiesta
              </Link>
              <Link
                href="/trova-pilota-drone"
                className="rounded-full border border-white/20 px-8 py-4 text-center text-base font-bold text-white transition hover:border-green-400 hover:text-green-300"
              >
                Trova un pilota drone
              </Link>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="rounded-3xl bg-[#07111f] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-400">
                Pagina SEO ad alta conversione
              </p>
              <h2 className="mt-4 text-2xl font-bold">Pensata per chi ha un problema reale sul tetto</h2>
              <ul className="mt-6 space-y-4 text-gray-300">
                <li className="rounded-2xl bg-white/[0.05] p-4">✓ Intercetta amministratori, geometri, imprese, periti e proprietari.</li>
                <li className="rounded-2xl bg-white/[0.05] p-4">✓ Collega infiltrazioni, grondaie, cornicioni, tegole, lucernari e danni da maltempo.</li>
                <li className="rounded-2xl bg-white/[0.05] p-4">✓ Spinge l'utente a pubblicare una richiesta concreta su DroneGuard.</li>
                <li className="rounded-2xl bg-white/[0.05] p-4">✓ Crea collegamenti interni con le pagine SEO già presenti nella sitemap.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Problema"
          title="Il condominio ha bisogno di vedere il tetto prima di decidere lavori, preventivi o perizie"
          text="Una pagina potente deve parlare del problema vero: il cliente non cerca il drone per curiosità, cerca chiarezza su una copertura difficile da raggiungere."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-green-400/20 bg-green-400/10 p-7">
            <h3 className="text-2xl font-bold text-green-300">Obiettivo della pagina</h3>
            <p className="mt-4 text-lg leading-8 text-gray-200">
              Portare il visitatore dalla ricerca su Google alla richiesta concreta: descrivere il problema del tetto, indicare la città, scegliere il tipo di materiale desiderato e ricevere candidature da piloti drone professionali.
            </p>
          </div>
          <div className="space-y-5 text-lg leading-8 text-gray-300">
            {problemParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Casi ad alta intenzione"
            title="Quando un'ispezione tetto condominio con drone può diventare una richiesta immediata"
            text="Queste sono le situazioni che trasformano una pagina SEO in una pagina capace di portare contatti: problemi specifici, urgenza, bisogno di documentazione e decisioni da prendere."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {painPoints.map(([title, text]) => (
              <Card key={title} title={title} text={text} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="A chi parla"
          title="Una sola pagina, più pubblici utili per generare lavori"
          text="Il focus resta il tetto condominiale, ma la pagina intercetta tutte le persone che possono creare una richiesta su DroneGuard o consigliare un pilota."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {audiences.map(([title, text]) => (
            <Card key={title} title={title} text={text} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#07111f]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Come funziona"
            title="Dal problema sul tetto alla candidatura dei piloti"
            text="La pagina deve spiegare cosa succede dopo il click. Più il processo è chiaro, più l'utente si fida e pubblica la richiesta."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <h3 className="text-2xl font-bold text-green-300">{title}</h3>
                <p className="mt-3 text-base leading-7 text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Materiale consegnabile"
          title="Foto, video, report e documentazione visiva: cosa chiedere al pilota"
          text="Un utente che sa cosa chiedere produce una richiesta migliore. Una richiesta migliore genera risposte migliori dai piloti."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map(([title, text]) => (
            <Card key={title} title={title} text={text} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Checklist"
            title="Cosa inserire nella richiesta per ricevere risposte più precise"
            text="Questa checklist è costruita per aumentare le conversioni: l'utente capisce subito cosa scrivere e il pilota riceve informazioni utili."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {checklist.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-[#0B0F2A] p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-400 font-black text-[#07111f]">
                  {index + 1}
                </span>
                <p className="text-base leading-7 text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        {longSections.map((section) => (
          <article key={section[0]} className="mb-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 md:p-10">
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{section[0]}</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-300">
              {section[1].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-white/10 bg-[#07111f]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Approfondimenti per tipologia di copertura"
            title="La stessa richiesta cambia in base al tetto: ecco come renderla più precisa"
            text="Questa parte rende la pagina molto più utile e meno generica, perché aiuta l'utente a descrivere il proprio caso."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {extraGuides.map((guide) => (
              <article key={guide.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-7">
                <h3 className="text-2xl font-bold text-green-300">{guide.title}</h3>
                <div className="mt-5 space-y-4 text-base leading-7 text-gray-300">
                  {guide.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="Confronto"
          title="Drone, cestello, ponteggio e sopralluogo tradizionale: ruoli diversi, non nemici"
          text="Il drone non deve essere venduto come sostituto assoluto. Funziona bene quando viene usato come primo livello di documentazione visiva."
        />
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
            <div className="bg-white/[0.06] p-6">
              <h3 className="text-xl font-bold text-green-300">Drone</h3>
              <p className="mt-3 text-gray-300">Rapido per vedere dall'alto, documentare parti difficili e preparare preventivi o valutazioni preliminari.</p>
            </div>
            <div className="bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold text-green-300">Cestello</h3>
              <p className="mt-3 text-gray-300">Utile quando serve accesso fisico, intervento manuale, prova ravvicinata o riparazione localizzata.</p>
            </div>
            <div className="bg-white/[0.06] p-6">
              <h3 className="text-xl font-bold text-green-300">Ponteggio</h3>
              <p className="mt-3 text-gray-300">Necessario per lavori estesi, manutenzioni importanti, sicurezza di operatori e interventi prolungati.</p>
            </div>
            <div className="bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold text-green-300">Tecnico</h3>
              <p className="mt-3 text-gray-300">Indispensabile per diagnosi, responsabilità professionale, relazioni, perizie e decisioni strutturali.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-3xl border border-green-400/20 bg-green-400/10 p-7 text-lg leading-8 text-gray-200">
          La pagina è credibile perché dice la verità: il drone aiuta a vedere meglio, ma non sostituisce ogni figura professionale. Questo aumenta fiducia e riduce il rischio di promesse sbagliate.
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionTitle
            eyebrow="Collegamenti interni"
            title="Pagine già presenti da collegare per spingere tutta la struttura SEO"
            text="Questi link aiutano l'utente a proseguire e rafforzano la rete interna del sito."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {internalLinks.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-white/10 bg-[#0B0F2A] p-5 text-sm font-bold text-gray-200 transition hover:border-green-400 hover:text-green-300"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle
          eyebrow="FAQ"
          title="Domande frequenti sull'ispezione tetto condominio con drone"
          text="Le FAQ intercettano ricerche lunghe e aiutano il visitatore a superare gli ultimi dubbi prima di pubblicare la richiesta."
        />
        <div className="space-y-5">
          {faq.map(([question, answer]) => (
            <article key={question} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-bold text-white">{question}</h3>
              <p className="mt-3 text-base leading-7 text-gray-300">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-green-400/30 bg-gradient-to-br from-green-400/20 to-blue-500/10 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-300">
            Call to action finale
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
            Hai un tetto condominiale da controllare? Pubblica la richiesta e fai candidare i piloti disponibili.
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-200">
            Spiega il problema, indica la città, carica eventuali foto da terra e specifica se vuoi foto, video o report. DroneGuard ti aiuta a trasformare un dubbio sul tetto in una richiesta chiara per piloti drone professionali.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-full bg-green-400 px-8 py-4 text-center text-base font-bold text-[#07111f] transition hover:bg-green-300"
            >
              Pubblica ora la richiesta
            </Link>
            <Link
              href="/richiedi-preventivo-drone"
              className="rounded-full border border-white/20 px-8 py-4 text-center text-base font-bold text-white transition hover:border-green-400 hover:text-green-300"
            >
              Vai ai preventivi drone
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
