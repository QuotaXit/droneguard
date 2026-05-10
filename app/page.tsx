import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import JobsSection from "@/components/JobsSection"
import Services from "@/components/Services"
import HowItWorks from "@/components/HowItWorks"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main className="bg-[#0A0D1F] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <JobsSection />
      <HowItWorks />
      <CTA />
    </main>
  )
}