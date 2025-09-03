import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export function Events() {
  const events = [
    {
      title: "Smart Contract Development Workshop",
      date: "March 15, 2024",
      time: "6:00 PM - 8:00 PM",
      location: "CAS 211",
      description: "Learn to build and deploy smart contracts on Ethereum using Solidity.",
    },
    {
      title: "Guest Speaker: DeFi Innovation",
      date: "March 22, 2024",
      time: "7:00 PM - 8:30 PM",
      location: "GSU Auditorium",
      description: "Industry expert discusses the latest trends in decentralized finance.",
    },
    {
      title: "Blockchain Hackathon 2024",
      date: "April 5-7, 2024",
      time: "48 Hours",
      location: "Photonics Center",
      description: "Build innovative blockchain solutions and compete for prizes.",
    },
  ]

  return (
    <section id="events" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Upcoming Events
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join us for workshops, guest speakers, hackathons, and networking events throughout the semester.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-muted-foreground text-sm text-pretty">{event.description}</p>
                <Button className="w-full mt-4">Register Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
