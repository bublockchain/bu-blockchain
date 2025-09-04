import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Partnerships } from "@/components/partnerships"
import { Events } from "@/components/events"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        
        <Partnerships />
        <About />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
