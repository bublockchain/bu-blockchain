"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <header className="rounded-xl bg-red-950/90 backdrop-blur supports-[backdrop-filter]:bg-red-200/10 shadow-lg" style={{ filter: 'saturate(1.5)' }}>
          <div className="px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-8">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
                <img src="/bublogo.png" alt="BU Blockchain Logo" className="h-10 object-contain" />
                <h1 className="text-xl font-bold text-white">BU Blockchain</h1>
              </Link>
            </div>

            <nav className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                
                <Link href="/sponsorship" className={`text-foreground hover:text-primary transition-colors ${pathname === '/sponsorship' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
                  Sponsorship
                </Link>
                <Link href="/resources" className={`text-foreground hover:text-primary transition-colors ${pathname === '/resources' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
                  Resources
                </Link>
                <Link href="/team" className={`text-foreground hover:text-primary transition-colors ${pathname === '/team' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
                  Team
                </Link>
                <Link href="/contact" className={`text-foreground hover:text-primary transition-colors ${pathname === '/contact' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
                  Contact
                </Link>
              </div>
            </nav>

            <div className="hidden md:block">
              <Button asChild className={`group ${pathname === '/sponsorship' ? 'bg-red-500 text-white hover:bg-red-600' : ''}`}>
                <Link href="/sponsorship">
                  Become a Sponsor
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <Link href="/team" className={`block px-3 py-2 text-foreground hover:text-primary ${pathname === '/team' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
                  Team
                </Link>
                <Link href="/sponsorship" className={`block px-3 py-2 text-foreground hover:text-primary ${pathname === '/sponsorship' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
                  Sponsorship
                </Link>
                <Link href="/resources" className={`block px-3 py-2 text-foreground hover:text-primary ${pathname === '/resources' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
                  Resources
                </Link>
                <Link href="/contact" className={`block px-3 py-2 text-foreground hover:text-primary ${pathname === '/contact' ? 'text-red-500 border-b-2 border-red-500' : ''}`}>
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Button className={`w-full group ${pathname === '/sponsorship' ? 'bg-red-500 text-white hover:bg-red-600' : ''}`} asChild>
                    <Link href="/sponsorship">
                      Become a Sponsor
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
    </div>
  )
}
