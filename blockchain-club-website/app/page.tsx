import { Hero } from "@/components/hero"
import { Sponsors } from "@/components/sponsors"
import { Partnerships } from "@/components/partnerships"
import { Events } from "@/components/events"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Sponsors />
        <Partnerships />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
