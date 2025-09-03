import { Card, CardContent } from "@/components/ui/card"
import { Zap, Target, Handshake } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">About Our Club</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We're building the next generation of blockchain innovators through education, collaboration, and real-world
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Innovation First</h3>
              <p className="text-muted-foreground text-pretty">
                We explore cutting-edge blockchain technologies, from DeFi protocols to NFTs, smart contracts, and Web3
                applications.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Practical Learning</h3>
              <p className="text-muted-foreground text-pretty">
                Build real projects, participate in hackathons, and gain hands-on experience with blockchain development
                and deployment.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Industry Connections</h3>
              <p className="text-muted-foreground text-pretty">
                Network with blockchain professionals, attend industry events, and discover internship and career
                opportunities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
