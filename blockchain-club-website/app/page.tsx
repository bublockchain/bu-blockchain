import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Partnerships } from "@/components/partnerships"
import { Events } from "@/components/events"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Partnerships />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
