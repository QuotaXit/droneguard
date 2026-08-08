import { notFound } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import { allSeoPages } from "@/lib/seo/allSeoPages"

export const revalidate = 86400
export const dynamicParams = true

export async function generateStaticParams() {
  return []
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = allSeoPages.find((item) => item.slug === slug)

  if (!page) {
    return {
      title: "Pagina non trovata | DroneGuard",
      description: "Pagina non trovata",
      robots: {
        index: false,
        follow: false
      }
    }
  }

  const canonical =
    `https://www.droneguard.it/${page.slug}`

  return {
    title: page.title,
    description: page.description,

    alternates: {
      canonical
    },

    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical,
      siteName: "DroneGuard",
      locale: "it_IT",
      type: "website"
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
}

export default async function Page({ params }) {
  const { slug } = await params
  const page = allSeoPages.find((item) => item.slug === slug)

  if (!page) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#0B0F2A] text-white">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
            {page.category}
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            {page.h1}
          </h1>

          <p className="text-lg leading-8 text-gray-300">
            {page.intro}
          </p>
        </div>

        <div className="space-y-8">
          {page.sections.map((section, index) => (
            <article
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20"
            >
              <h2 className="mb-4 text-2xl font-bold text-white">
                {section.title}
              </h2>

              <p className="whitespace-pre-line text-base leading-8 text-gray-300">
                {section.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-green-400/20 bg-green-400/10 p-8">
          <h2 className="mb-4 text-2xl font-bold">
            Pubblica il tuo lavoro su DroneGuard
          </h2>

          <p className="mb-6 leading-8 text-gray-300">
            Descrivi il servizio drone di cui hai bisogno, indica la zona e ricevi candidature da piloti disponibili. Puoi confrontare i candidati e scegliere quello più adatto al tuo lavoro.
          </p>

          <Link
  href="/register"
  className="inline-flex rounded-full bg-green-400 px-6 py-3 font-semibold text-[#0B0F2A] transition hover:bg-green-300"
>
  Registrati e pubblica il lavoro
</Link>
        </div>
      </section>
    </main>
  )
}