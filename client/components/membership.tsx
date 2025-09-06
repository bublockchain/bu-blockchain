import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export function Membership() {
  const benefits = [
    "Access to all workshops and events",
    "Networking with industry professionals",
    "Hands-on blockchain project experience",
    "Career guidance and internship opportunities",
    "Exclusive learning resources and materials",
    "Participation in hackathons and competitions",
  ]

  return (
    <section id="membership" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Join Our Community
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to dive into the world of blockchain? Join our growing community of students passionate about
            decentralized technology.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Membership Benefits</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Student Testimonial</h4>
              <p className="text-muted-foreground text-sm italic text-pretty">
                "Joining BU Blockchain was the best decision I made in college. The hands-on workshops and industry
                connections helped me land an internship at a major crypto company!"
              </p>
              <p className="text-primary text-sm font-medium mt-2">- Sarah Chen, CS '24</p>
            </div>
          </div>

          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Sign Up Today</CardTitle>
              <p className="text-muted-foreground">Fill out the form below to join our club.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-1">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="Enter your first name" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-1">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Enter your last name" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  BU Email
                </label>
                <Input id="email" type="email" placeholder="your.email@bu.edu" />
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-foreground mb-1">
                  Graduation Year
                </label>
                <Input id="year" placeholder="e.g., 2025" />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-1">
                  Blockchain Experience Level
                </label>
                <select className="w-full px-3 py-2 border border-input bg-background rounded-md text-foreground">
                  <option>Complete Beginner</option>
                  <option>Some Knowledge</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div>
                <label htmlFor="interests" className="block text-sm font-medium text-foreground mb-1">
                  What interests you most? (Optional)
                </label>
                <Textarea
                  id="interests"
                  placeholder="Tell us about your interests in blockchain technology..."
                  rows={3}
                />
              </div>
              <Button className="w-full text-lg py-6">Join BU Blockchain Club</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
