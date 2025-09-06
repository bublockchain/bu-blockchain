import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"
import { events } from "@/data/events"

export function Events() {
  const getTimeUntilEvent = (utcTimestamp: string) => {
    const now = new Date()
    const eventTime = new Date(utcTimestamp)
    const diffMs = eventTime.getTime() - now.getTime()
    
    if (diffMs < 0) {
      // Event is in the past
      const pastDiffMs = Math.abs(diffMs)
      const days = Math.floor(pastDiffMs / (1000 * 60 * 60 * 24))
      const hours = Math.floor((pastDiffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((pastDiffMs % (1000 * 60 * 60)) / (1000 * 60))
      
      if (days > 0) return `${days} day${days === 1 ? '' : 's'} ago`
      if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`
      return `${minutes} min${minutes === 1 ? '' : 's'} ago`
    } else {
      // Event is in the future
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
      
      if (days > 0) return `in ${days} day${days === 1 ? '' : 's'}`
      if (hours > 0) return `in ${hours} hour${hours === 1 ? '' : 's'}`
      return `in ${minutes} min${minutes === 1 ? '' : 's'}`
    }
  }

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
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow flex flex-col relative">
              {event.callout && (
                <Badge variant="default" className="absolute top-[-8px] right-[-8px] z-10 text-xs font-medium drop-shadow-[0_0_8px_rgba(var(--primary),1)]">
                  {event.callout}
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {getTimeUntilEvent(event.startTimeUtc)}
                  </Badge>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-muted-foreground text-sm text-pretty flex-1">{event.description}</p>
                <Button asChild className="w-full mt-4">
                  <a href={event.url} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
