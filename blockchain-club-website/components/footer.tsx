import { Github, Twitter, Linkedin, Mail, Instagram, MessageCircle, MessageSquare } from "lucide-react"
import { socialLinks } from "@/data/links"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-primary mb-4">BU Blockchain Club</h3>
            <p className="text-muted-foreground text-pretty max-w-md">
              Empowering Boston University students to explore, learn, and innovate with blockchain technology through
              hands-on experience and industry connections.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href={socialLinks.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={socialLinks.telegram} className="text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
              <a href={socialLinks.x} className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={socialLinks.discord} className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href={socialLinks.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href={socialLinks.instagram} className="text-muted-foreground hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href={socialLinks.telegram} className="text-muted-foreground hover:text-primary transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href={socialLinks.x} className="text-muted-foreground hover:text-primary transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a href={socialLinks.discord} className="text-muted-foreground hover:text-primary transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href={socialLinks.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>bublockchain@bu.edu</li>
              <li>Boston University</li>
              <li>Boston, MA 02215</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Boston University Blockchain Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
