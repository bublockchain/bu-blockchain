import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Book, Code, Video, FileText } from "lucide-react"

export default function ResourcesPage() {
  const resources = [
    {
      category: "Getting Started",
      icon: <Book className="w-5 h-5" />,
      items: [
        { title: "BUB Tutorials", url: "https://github.com/bublockchain/solidity-101", description: "Solidity 101 course and blockchain development lessons" },
        {
          title: "Blockchain Basics",
          url: "https://ethereum.org/en/learn/",
          description: "Ethereum Foundation's comprehensive guide",
        },
        {
          title: "Web3 University",
          url: "https://www.web3.university/",
          description: "Free courses on blockchain development",
        },
        { title: "Crypto Zombies", url: "https://cryptozombies.io/", description: "Learn Solidity by building games" },
      ],
    },
    {
      category: "Development Tools",
      icon: <Code className="w-5 h-5" />,
      items: [
        { title: "Remix IDE", url: "https://remix.ethereum.org/", description: "Browser-based Solidity IDE" },
        { title: "Foundry", url: "https://getfoundry.sh", description: "Etherium development environment" },
        { title: "MetaMask", url: "https://metamask.io/", description: "Web3 wallet and gateway to blockchain apps" },
      ],
    },
    {
      category: "Learning Videos",
      icon: <Video className="w-5 h-5" />,
      items: [
        {
          title: "Dapp University",
          url: "https://www.youtube.com/c/DappUniversity",
          description: "YouTube channel for blockchain development",
        },
        {
          title: "Whiteboard Crypto",
          url: "https://www.youtube.com/c/WhiteboardCrypto",
          description: "Crypto concepts explained simply",
        },
        {
          title: "Finematics",
          url: "https://www.youtube.com/c/Finematics",
          description: "DeFi and blockchain mechanics",
        },
      ],
    },
    {
      category: "Documentation",
      icon: <FileText className="w-5 h-5" />,
      items: [
        {
          title: "Solidity Docs",
          url: "https://docs.soliditylang.org/",
          description: "Official Solidity documentation",
        },
        { title: "OpenZeppelin", url: "https://docs.openzeppelin.com/", description: "Secure smart contract library" },
        { title: "Ethers.js", url: "https://docs.ethers.org/", description: "JavaScript library for Ethereum" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Learning Resources</h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Curated resources to help you learn blockchain development and Web3 technologies
          </p>

          <div className="grid gap-8">
            {resources.map((category, index) => (
              <section key={index} className="bg-card p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">{category.icon}</div>
                  <h2 className="text-2xl font-semibold">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-background p-4 rounded-lg border">
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <Button asChild variant="outline" size="sm">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          Visit <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
