import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export function NextMeeting() {
  // Get the most recent event (first one in the array)
  const nextEvent = {
    title: "Smart Contract Development Workshop",
    date: "March 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "CAS 211",
    description: "Learn to build and deploy smart contracts on Ethereum using Solidity.",
  }

  return (
    <div className="w-full p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Next Meeting
        </h2>
      </div>
      
      <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">{nextEvent.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{nextEvent.date}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Clock className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{nextEvent.time}</span>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{nextEvent.location}</span>
          </div>
          <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
            {nextEvent.description}
          </p>
          <Button className="w-full mt-6" size="lg">
            Register Now
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}