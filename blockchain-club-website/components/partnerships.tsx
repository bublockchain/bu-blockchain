import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Trophy } from "lucide-react"

export function Partnerships() {
  return (
    <section id="partnerships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our Impact & Partnerships
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Building connections across the blockchain ecosystem through collaborations, competitions, and community
            engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Industry Partners</h3>
              <p className="text-muted-foreground text-pretty">
                We collaborate with leading blockchain companies and startups to provide real-world learning
                opportunities and career pathways for our members.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Community Outreach</h3>
              <p className="text-muted-foreground text-pretty">
                Hosting workshops, speaker events, and educational sessions to spread blockchain knowledge throughout
                the Boston University community and beyond.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Competition Success</h3>
              <p className="text-muted-foreground text-pretty">
                Our members regularly participate in and win blockchain hackathons, coding competitions, and innovation
                challenges across the region.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Featured Collaborations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-sm font-medium">Partner 1</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-sm font-medium">Partner 2</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-sm font-medium">Partner 3</span>
              </div>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center mb-2">
                <span className="text-sm font-medium">Partner 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
