import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Handshake } from "lucide-react"

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
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground text-pretty text-left">
                We are an inclusive, multifaceted community dedicated to equal education in the web3 space. We aim to foster creativity, build a diverse network, and shape a decentralized future together. Through research, development, and building companies - BU Blockchain aims to act as a springboard for all students to unleash their potential in the field.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-pretty text-left">
                We see a decentralized future for all that allows for equal opportunity to create and innovate on any chain, regardless of a person's field of experience, gender identity, race, or origin. We plan to aid all members in their intellectual pursuits in the Web3 field - while simultaneously connecting them to opportunities both near and far, that stimulate their personal growth and development through speaker events, workshops, hackathons, and our women in blockchain (WiBlock) initiative.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Collaboration</h3>
              <p className="text-muted-foreground text-pretty text-left">
                We pride ourselves on collaboration and diplomacy with other university organizations, which has opened many doors for us in terms of working across the aisle and our reputation as a well-respected organization.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}