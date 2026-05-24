import Navbar from "@/components/Navbar"
import Link from "next/link"

export const metadata = {
  title: "FAQ DroneGuard | Domande frequenti per clienti e piloti drone",

  description:
    "Scopri come funziona DroneGuard: marketplace italiano per clienti e piloti drone, pubblicazione lavori, candidature, crediti, pagamenti, sicurezza e recensioni.",

  keywords: [
    "FAQ DroneGuard",
    "DroneGuard",
    "pilota drone Italia",
    "lavori drone",
    "servizi drone",
    "riprese aeree",
    "drone matrimonio",
    "ispezioni drone",
    "mappature drone",
    "marketplace droni",

    "operatore drone",
    "pilota drone Roma",
    "pilota drone Milano",
    "pilota drone Napoli",
    "pilota drone Torino",
    "pilota drone Bologna",
    "pilota drone Firenze",
    "pilota drone Palermo",
    "pilota drone Venezia",
    "pilota drone Bari",

    "pilota drone Verona",
    "pilota drone Genova",
    "pilota drone Catania",
    "pilota drone Padova",
    "pilota drone Lecce",
    "pilota drone Perugia",
    "pilota drone Sardegna",
    "pilota drone Sicilia",
    "pilota drone Toscana",
    "pilota drone Lazio",

    "pilota drone Lombardia",
    "pilota drone Emilia Romagna",
    "pilota drone Campania",
    "riprese drone matrimonio",
    "video drone matrimonio",
    "drone per matrimoni",
    "drone eventi",
    "riprese aeree eventi",
    "riprese drone concerti",
    "drone feste private",

    "video drone eventi",
    "drone per eventi",
    "fotografo drone",
    "videomaker drone",
    "video cinematici drone",
    "riprese cinematiche drone",
    "drone video professionali",
    "riprese professionali drone",
    "drone per turismo",
    "drone per hotel",

    "riprese hotel drone",
    "riprese resort drone",
    "drone immobiliare",
    "riprese immobili drone",
    "video immobili drone",
    "real estate drone",
    "drone agenzia immobiliare",
    "video casa drone",
    "riprese ville drone",
    "riprese appartamenti drone",

    "drone edilizia",
    "ispezione tetti drone",
    "ispezioni aeree",
    "ispezione pannelli solari drone",
    "controllo cantieri drone",
    "rilievi drone",
    "rilievi aerei",
    "monitoraggio cantieri drone",
    "drone industria",
    "drone professionale",

    "mappature 3D drone",
    "fotogrammetria drone",
    "agricoltura drone",
    "agricoltura di precisione drone",
    "monitoraggio terreni drone",
    "rilievi topografici drone",
    "mappature agricole drone",
    "drone per agricoltura",
    "controllo campi drone",
    "rilievi fotogrammetrici",

    "piloti drone certificati",
    "servizi con drone",
    "operatore SAPR",
    "ENAC drone",
    "EASA drone",
    "patentino drone",
    "attestato drone",
    "certificazioni drone",
    "licenza drone",
    "normativa drone Italia",

    "cerca pilota drone",
    "trova pilota drone",
    "assumi pilota drone",
    "lavoro pilota drone",
    "annunci drone",
    "bacheca lavori drone",
    "marketplace piloti drone",
    "piattaforma droni",
    "servizi aerei professionali",
    "riprese aeree Italia"
  ],

  openGraph: {
    title: "FAQ DroneGuard | Marketplace italiano per piloti drone",
    description:
      "Domande frequenti su DroneGuard per clienti e piloti drone.",
    url: "https://www.droneguard.it/faq",
    siteName: "DroneGuard",
    locale: "it_IT",
    type: "website"
  },

  alternates: {
    canonical: "https://www.droneguard.it/faq"
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

const sections = [
  {
    title: "1. Cos’è DroneGuard",
    items: [
      {
        q: "Cos’è DroneGuard?",
        a: "DroneGuard è un marketplace italiano che mette in contatto clienti e piloti drone per lavori come riprese aeree, matrimoni, eventi, immobili, ispezioni, agricoltura, mappature e servizi professionali con drone."
      },
      {
        q: "A chi è rivolto?",
        a: "È pensato sia per clienti che cercano un pilota drone, sia per piloti che vogliono trovare nuovi lavori nella propria zona."
      },
      {
        q: "L’iscrizione è gratuita?",
        a: "Sì, l’iscrizione è gratuita sia per clienti che per piloti."
      },
      {
        q: "DroneGuard è disponibile in tutta Italia?",
        a: "Sì, DroneGuard nasce per collegare clienti e piloti drone in tutta Italia, in base alla città e alla zona del lavoro."
      },
      {
        q: "Che tipo di servizi si possono richiedere?",
        a: "Puoi richiedere riprese aeree, video per immobili, matrimoni, eventi, cantieri, ispezioni tetti, mappature, agricoltura, turismo e contenuti promozionali."
      }
    ]
  },
  {
    title: "2. Per i clienti",
    items: [
      {
        q: "Come pubblico un lavoro?",
        a: "Accedi alla dashboard, clicca su Richiedi volo o Pubblica lavoro, inserisci titolo, descrizione, luogo, data e invia l’annuncio."
      },
      {
        q: "Quanto costa pubblicare un lavoro?",
        a: "Pubblicare un lavoro costa 5 crediti."
      },
      {
        q: "Posso scegliere io il pilota?",
        a: "Sì. Puoi vedere i piloti candidati, confrontare profilo, esperienza, drone utilizzato, certificazioni e recensioni."
      },
      {
        q: "Posso pubblicare una richiesta per un matrimonio?",
        a: "Sì. Puoi pubblicare richieste per matrimoni, eventi privati, feste, video promozionali e riprese cinematiche."
      },
      {
        q: "Devo pagare il pilota tramite DroneGuard?",
        a: "No. Il pagamento del lavoro viene concordato direttamente tra cliente e pilota."
      }
    ]
  },
  {
    title: "3. Per i piloti drone",
    items: [
      {
        q: "Come trovo lavori con drone?",
        a: "Entra nella bacheca lavori, scegli un annuncio disponibile e invia la tua candidatura."
      },
      {
        q: "Quanto costa candidarsi?",
        a: "Ogni candidatura costa 5 crediti."
      },
      {
        q: "Cosa devo inserire nel profilo pilota?",
        a: "È consigliato inserire città, esperienza, drone utilizzato, servizi offerti, certificazioni e una descrizione professionale."
      },
      {
        q: "Le recensioni aiutano a ricevere più lavori?",
        a: "Sì. Le recensioni aiutano il cliente a valutare meglio il pilota e aumentano la fiducia."
      },
      {
        q: "Posso candidarmi a lavori fuori dalla mia città?",
        a: "Sì, puoi candidarti anche a lavori in altre zone, se sei disponibile a spostarti."
      }
    ]
  },
  {
    title: "4. Crediti e pagamenti",
    items: [
      {
        q: "Come funzionano i crediti?",
        a: "I crediti servono per pubblicare lavori e inviare candidature. Il cliente usa 5 crediti per pubblicare, il pilota usa 5 crediti per candidarsi."
      },
      {
        q: "Ci sono crediti gratis?",
        a: "Sì. I piloti possono riscattare 50 crediti gratis, mentre i clienti possono riscattare 10 crediti gratis nella sezione crediti."
      },
      {
        q: "I pagamenti dei crediti sono sicuri?",
        a: "Sì. L’acquisto dei crediti avviene tramite Stripe, piattaforma esterna per pagamenti online sicuri."
      },
      {
        q: "DroneGuard trattiene una commissione sul lavoro?",
        a: "No. DroneGuard gestisce pubblicazione e candidature, mentre il compenso del lavoro viene accordato direttamente tra cliente e pilota."
      },
      {
        q: "Dove vedo i miei crediti?",
        a: "Puoi vedere i crediti disponibili nella tua dashboard o nella pagina crediti."
      }
    ]
  },
  {
    title: "5. Sicurezza, regole e certificazioni",
    items: [
      {
        q: "Serve il patentino drone?",
        a: "Dipende dal tipo di lavoro, dal drone utilizzato, dalla zona di volo e dalla normativa vigente."
      },
      {
        q: "Chi è responsabile del volo?",
        a: "Il pilota è responsabile di operare secondo le regole ENAC/EASA e con eventuali autorizzazioni necessarie."
      },
      {
        q: "I piloti sono verificati?",
        a: "I piloti possono completare il profilo con esperienza, drone, servizi e certificazioni. Il cliente può valutare queste informazioni prima di scegliere."
      },
      {
        q: "Posso vedere le certificazioni del pilota?",
        a: "Sì, se il pilota le ha inserite nel proprio profilo."
      },
      {
        q: "DroneGuard garantisce il risultato del lavoro?",
        a: "DroneGuard facilita il contatto tra cliente e pilota, ma accordi, risultato finale e pagamento vengono gestiti direttamente tra le parti."
      }
    ]
  },
  {
    title: "6. Account, assistenza e recensioni",
    items: [
      {
        q: "Come contatto l’assistenza?",
        a: "Puoi contattare DroneGuard dalla pagina Contattaci presente nel menu del sito."
      },
      {
        q: "Posso eliminare il mio account?",
        a: "Sì, puoi eliminare il tuo account dalla pagina impostazioni del profilo."
      },
      {
        q: "Posso lasciare una recensione?",
        a: "Sì, dove disponibile, il cliente può lasciare una recensione al pilota dopo il lavoro."
      },
      {
        q: "Le recensioni sono visibili ai clienti?",
        a: "Sì, le recensioni aiutano i clienti a scegliere il pilota più adatto."
      },
      {
        q: "Dove posso iniziare?",
        a: "Puoi registrarti gratis, scegliere il tuo ruolo e iniziare dalla dashboard."
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-[#070B1F] via-[#0F1B4D] to-[#090A16] px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <section className="mb-12 text-center">
            <span className="mb-4 inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-semibold text-green-300">
              FAQ DroneGuard
            </span>

            <h1 className="mb-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Domande frequenti su{" "}
              <span className="text-green-400">DroneGuard</span>
            </h1>

            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Tutto quello che devi sapere su clienti, piloti drone, lavori
              aerei, candidature, crediti, pagamenti, recensioni e sicurezza.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/register">
                <button className="rounded-full bg-green-500 px-7 py-3 font-bold text-black transition hover:bg-green-400">
                  Registrati gratis
                </button>
              </Link>

              <Link href="/contattaci">
                <button className="rounded-full border border-white/15 bg-white/10 px-7 py-3 font-semibold text-white transition hover:bg-white/15">
                  Contattaci
                </button>
              </Link>
            </div>
          </section>

          <section className="grid gap-6">
            {sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-7"
              >
                <h2 className="mb-5 text-2xl font-bold text-green-300">
                  {section.title}
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {section.items.map((item, index) => (
                    <article
                      key={index}
                      className="rounded-2xl border border-white/10 bg-[#120B35]/80 p-5 transition hover:border-green-400/40 hover:bg-[#171044]"
                    >
                      <h3 className="mb-3 text-lg font-semibold text-white">
                        {item.q}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                        {item.a}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>

          <section className="mt-12 rounded-3xl border border-green-400/20 bg-green-400/10 p-7 text-center">
            <h2 className="mb-3 text-3xl font-extrabold">
              Non hai trovato la risposta?
            </h2>

            <p className="mx-auto mb-6 max-w-2xl text-gray-300">
              Scrivici per ricevere supporto su pubblicazione lavori,
              candidature, crediti, profili pilota, recensioni o problemi con
              il tuo account.
            </p>

            <Link href="/contattaci">
              <button className="rounded-full bg-green-500 px-8 py-3 font-bold text-black transition hover:bg-green-400">
                Vai alla pagina Contattaci
              </button>
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}