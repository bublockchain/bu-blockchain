import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SponsorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Sponsors BU Blockchain</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Who We Are</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                BU Blockchain is Boston University's premier student organization dedicated to exploring, learning, and
                building in the blockchain and Web3 space. We bring together students from all backgrounds - whether
                you're a computer science major, business student, or just curious about decentralized technology.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Mission</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We aim to educate the BU community about blockchain technology, foster innovation through hands-on
                projects, and prepare students for careers in the rapidly evolving Web3 ecosystem. Through workshops,
                hackathons, and industry partnerships, we bridge the gap between academic learning and real-world
                blockchain applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Goals</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Education & Learning</h3>
                  <p className="text-muted-foreground">
                    Provide accessible blockchain education through workshops, guest speakers, and hands-on coding
                    sessions.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Innovation & Building</h3>
                  <p className="text-muted-foreground">
                    Encourage members to build real blockchain projects and participate in hackathons and competitions.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Industry Connections</h3>
                  <p className="text-muted-foreground">
                    Connect students with blockchain companies, startups, and professionals for networking and career
                    opportunities.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Community Building</h3>
                  <p className="text-muted-foreground">
                    Foster a supportive community of blockchain enthusiasts at BU and beyond.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}