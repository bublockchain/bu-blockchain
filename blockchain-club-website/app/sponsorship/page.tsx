import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { socialLinks } from "@/data/links"

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">BU Blockchain Sponsorship</h1>
          
          {/* Top CTA */}
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground mb-6">
              Partner with us to shape the future of blockchain technology at Boston University
            </p>
            <Button asChild size="lg" className="text-lg px-8 group">
              <a href={socialLinks.sponsor_form} target="_blank" rel="noopener noreferrer">
                Become a Sponsor
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <div className="space-y-8">
            <section className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4 text-primary">hackathons - BU blockchain around town:</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are proud to have won our first three hackathons at first
                place, each, with the development of a builder subgroup in BU
                Blockchain. The hackathon team is open to all, and we plan to
                encourage collaboration. This may include sponsoring certain
                talented builders' travel costs who have continued to impress us
                through the year. We also encourage non-technical
                participation through ideathons held jointly by hackathons.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4 text-primary">co-innovation and collaboration:</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ability to collaborate with
                students and on research,
                insights and fostering
                innovation. This can yield novel
                applications, advancements in
                technology, and mutually
                beneficial outcomes.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4 text-primary">recruitment and talent acquisition:</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Ability to connect with our talent
                pool & receive resumes for any
                work opportunity as well as to
                create a talent pipeline for any
                initiative, open or closed-source.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4 text-primary">product development and brand exposure</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Provides opportunity to test
                solutions and gain student
                insight, while also enhancing
                brand visibility, thought
                leadership, and potential
                opportunities through
                university engagement.
              </p>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold mb-4 text-primary">club ethos</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                we see a future where financial, economic, and social justice are all at
                the forefront of our global society. We see a future where, regardless of
                cost, knowledge barriers, and other supposed societal restrictions, all
                of our members have an equal opportunity to succeed. As such, we do not
                believe in restrictive processes for membership such as interviews or
                dues, and aim to make any costs associated with travel, merchandise, or
                other aspects of the club as low as we possibly can, but the goal is to
                make it all at no-cost to our members. We see this is an investment
                into the future of our organization and the overall web3 space, as we
                want our organization to welcome any curious person with open arms
                and help them unleash their full potential with Boston University Blockchain.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-primary">Our Goals</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Education & Learning</h3>
                  <p className="text-muted-foreground">
                    Provide accessible blockchain education through workshops, guest speakers, and hands-on coding
                    sessions.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Innovation & Building</h3>
                  <p className="text-muted-foreground">
                    Encourage members to build real blockchain projects and participate in hackathons and competitions.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Industry Connections</h3>
                  <p className="text-muted-foreground">
                    Connect students with blockchain companies, startups, and professionals for networking and career
                    opportunities.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold mb-2">Community Building</h3>
                  <p className="text-muted-foreground">
                    Foster a supportive community of blockchain enthusiasts at BU and beyond.
                  </p>
                </div>
              </div>
            </section>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-8 border-t">
            <h2 className="text-2xl font-semibold mb-4">Ready to Partner with Us?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Join our mission to democratize blockchain education and innovation
            </p>
            <Button asChild size="lg" className="text-lg px-8 group">
              <a href={socialLinks.sponsor_form} target="_blank" rel="noopener noreferrer">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
