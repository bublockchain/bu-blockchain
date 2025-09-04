"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
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
          <div className="flex h-12 items-center justify-between gap-8">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img src="/bublogo.png" alt="BU Blockchain Logo" className="h-10 object-contain" />
              </Link>
            </div>

            <nav className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                
                <Link href="/sponsorship" className={`text-foreground hover:text-primary transition-colors ${pathname === '/sponsorship' ? 'text-primary' : ''}`}>
                  Sponsorship
                </Link>
                <Link href="/resources" className={`text-foreground hover:text-primary transition-colors ${pathname === '/resources' ? 'text-primary' : ''}`}>
                  Resources
                </Link>
                <Link href="/team" className={`text-foreground hover:text-primary transition-colors ${pathname === '/team' ? 'text-primary' : ''}`}>
                  Team
                </Link>
                <Link href="/contact" className={`text-foreground hover:text-primary transition-colors ${pathname === '/contact' ? 'text-primary' : ''}`}>
                  Contact
                </Link>
              </div>
            </nav>


            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
                <Link href="/team" className={`block px-3 py-2 text-foreground hover:text-primary ${pathname === '/team' ? 'text-primary' : ''}`}>
                  Team
                </Link>
                <Link href="/sponsorship" className={`block px-3 py-2 text-foreground hover:text-primary ${pathname === '/sponsorship' ? 'text-primary' : ''}`}>
                  Sponsorship
                </Link>
                <Link href="/resources" className={`block px-3 py-2 text-foreground hover:text-primary ${pathname === '/resources' ? 'text-primary' : ''}`}>
                  Resources
                </Link>
                <Link href="/contact" className={`block px-3 py-2 text-foreground hover:text-primary ${pathname === '/contact' ? 'text-primary' : ''}`}>
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
    </div>
  )
}
