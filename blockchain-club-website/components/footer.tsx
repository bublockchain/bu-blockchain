import { Github, Twitter, Linkedin, Mail, Instagram, MessageCircle, MessageSquare } from "lucide-react"
import { socialLinks } from "@/data/links"

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src="/bublogo.png" alt="BU Blockchain Logo" className="h-15 w-15 mr-3 object-contain" />
                <h3 className="text-lg font-bold text-primary">BU Blockchain Club</h3>
              </div>
              <div className="text-right">
                <h4 className="font-semibold text-foreground mb-4 text-lg">Contact</h4>
                <div className="flex space-x-5 justify-end">
                  <a href={socialLinks.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a href={socialLinks.x} className="text-muted-foreground hover:text-primary transition-colors">
                    <XIcon className="h-6 w-6" />
                  </a>
                  <a href={socialLinks.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-pretty max-w-md text-sm">
              Empowering Boston University students to explore, learn, and innovate with blockchain technology through
              hands-on experience and industry connections.
            </p>
          </div>
        </div>

        <div className="border-t mt-6 pt-2 text-center text-muted-foreground text-xs">
          <p>&copy; {new Date().getFullYear()} Boston University Blockchain Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
