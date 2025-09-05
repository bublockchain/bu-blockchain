"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Calendar, BookOpen } from "lucide-react"
import { NextMeeting } from "@/components/next-meeting"
import { AnimatedBlockchain } from "@/components/animated-blockchain"
import { socialLinks } from "@/data/links"

export function Hero() {
  const handleJoinClub = () => {
    window.open(socialLinks.email_list_form, '_blank', 'noopener,noreferrer');
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-16 lg:pt-20 pb-12 lg:pb-16" style={{ marginTop: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left half - Hero content */}
          <div>
            <h1 className="text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance font-kode-mono" style={{fontFamily: 'Kode Mono', fontWeight: 700 }}>
              Boston University
              <span className="text-primary block"><AnimatedBlockchain /> Club</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              Join the future of technology. Learn about, build, and innovate with blockchain technology alongside fellow
              students and industry professionals.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" className="text-lg px-8 group" onClick={handleJoinClub}>
                Join the Club
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent" onClick={handleLearnMore}>
                Learn More
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3 hidden sm:grid">
              <div className="text-center sm:text-left">
                <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">Active Community</h3>
                <p className="mt-2 text-sm text-muted-foreground">Meet passionate people</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">Weekly Events</h3>
                <p className="mt-2 text-sm text-muted-foreground">Workshops & speakers</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="mx-auto sm:mx-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">Learning Resources</h3>
                <p className="mt-2 text-sm text-muted-foreground">Beginner to advanced</p>
              </div>
            </div>
          </div>

          {/* Right half - Next Meeting */}
          <div className="lg:mt-0 relative">
            {/* Red blur background */}
            <div className="absolute inset-0 bg-red-500/5 blur-3xl rounded-3xl -m-8"></div>
            <div className="relative z-10">
              <NextMeeting />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
