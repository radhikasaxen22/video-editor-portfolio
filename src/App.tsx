import { MotionConfig } from "framer-motion"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/shared/ScrollProgress"
import { BackToTop } from "@/components/shared/BackToTop"
import { Hero } from "@/components/sections/Hero"
import { Showreel } from "@/components/sections/Showreel"
import { Work } from "@/components/sections/Work"
import { Credits } from "@/components/sections/Credits"
import { Services } from "@/components/sections/Services"
import { Turnaround } from "@/components/sections/Turnaround"
import { Process } from "@/components/sections/Process"
import { Tools } from "@/components/sections/Tools"
import { About } from "@/components/sections/About"
import { Faq } from "@/components/sections/Faq"
import { Contact } from "@/components/sections/Contact"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-surface dark:bg-surface-dark text-text-primary dark:text-text-dark transition-colors duration-300">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#14100a]"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">
          <Hero />
          <Showreel />
          <Work />
          <Credits />
          <Services />
          <Turnaround />
          <Process />
          <Tools />
          <About />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </MotionConfig>
  )
}
