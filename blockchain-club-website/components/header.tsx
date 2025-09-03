"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
              <img src="/bublogo.png" alt="BU Blockchain Logo" className="w-10 h-10 object-contain" />
              <h1 className="text-xl font-bold text-white">BU Blockchain</h1>
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/sponsors" className="text-foreground hover:text-primary transition-colors">
                Sponsors
              </Link>
              <Link href="/resources" className="text-foreground hover:text-primary transition-colors">
                Resources
              </Link>
              <Link href="/#events" className="text-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
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
              <Link href="/sponsors" className="block px-3 py-2 text-foreground hover:text-primary">
                Sponsors
              </Link>
              <Link href="/resources" className="block px-3 py-2 text-foreground hover:text-primary">
                Resources
              </Link>
              <Link href="/#events" className="block px-3 py-2 text-foreground hover:text-primary">
                Events
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary">
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
