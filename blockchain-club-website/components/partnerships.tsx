import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Trophy, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Partnerships() {
  const partners = [
    { name: "Algorand", logo: "/algorand.png" },
    { name: "Binance", logo: "/binance.png" },
    { name: "BNB Chain", logo: "/bnbchain.jpg" },
    { name: "Circle", logo: "/circle.png" },
    { name: "Coin Metrics", logo: "/coinmetrics.jpg" },
    { name: "Fidelity", logo: "/fidelity.png" },
    { name: "Hedera", logo: "/hedera.png" },
    { name: "Near", logo: "/near.jpeg" },
    { name: "Spawn", logo: "/spawn.png" },
    { name: "WAEV", logo: "/waev.png" },
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]

  return (
    <section id="partnerships" className="py-16 bg-muted/30 overflow-hidden">
      {/* Infinite scrolling logo carousel */}
      <div className="relative">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-muted/30 to-transparent z-10"></div>
        
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-muted/30 to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button below scrolling div */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex justify-center">
          <Link href="/sponsors">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 group" size="lg">
              Become a Sponsor
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
