import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Partnerships } from "@/components/partnerships"
import { Events } from "@/components/events"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <div className="bg-transparent">
          <Hero />
        </div>
        <div className="bg-background">
          <Partnerships />
          <About />
          <Events />
        </div>
      </main>
      <Footer />
    </div>
  )
}
