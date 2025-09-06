import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Book, Video, Code } from "lucide-react"

export function Resources() {
  const resources = [
    {
      icon: Book,
      title: "Learning Materials",
      description: "Curated articles, whitepapers, and documentation for all skill levels.",
      items: ["Blockchain Fundamentals", "Ethereum Development", "DeFi Protocols", "NFT Standards"],
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides created by our members and industry experts.",
      items: ["Solidity Basics", "Web3.js Integration", "MetaMask Setup", "Deployment Guide"],
    },
    {
      icon: Code,
      title: "Code Examples",
      description: "Open-source projects and code samples from our workshops and hackathons.",
      items: ["Smart Contracts", "DApp Templates", "Testing Frameworks", "Integration Examples"],
    },
  ]

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Learning Resources
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Access our comprehensive collection of blockchain learning materials, from beginner guides to advanced
            development resources.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <resource.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{resource.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full bg-transparent">
                  Explore Resources
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
