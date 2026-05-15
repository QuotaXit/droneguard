import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import JobsSection from "@/components/JobsSection"
import Services from "@/components/Services"
import HowItWorks from "@/components/HowItWorks"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

export default async function Home() {
  return (
    <main className="min-h-screen bg-[#0A0D1F]">
      <Navbar />
      <Hero />
      <Services />
      <JobsSection />
      <HowItWorks />
      <CTA />
      <Footer />
    </main>
  )
}