import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock } from "lucide-react"
import { events } from "@/data/events"

export function NextMeeting() {
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

  // Get the next upcoming event (first future event, or first event if all are past)
  const now = new Date()
  const futureEvents = events.filter(event => new Date(event.startTimeUtc) > now)
  const nextEvent = futureEvents.length > 0 ? futureEvents[0] : events[0]

  return (
    <div className="w-full p-6 border border-border rounded-2xl bg-card/50 backdrop-blur-sm relative">
      {nextEvent.callout && (
        <Badge variant="default" className="absolute -top-2 -right-2 z-10 text-xs font-medium drop-shadow-[0_0_8px_rgba(var(--primary),0.6)]">
          {nextEvent.callout}
        </Badge>
      )}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Next Meeting <span className="ml-5 text-neutral-400">(We'd love to have you!)</span>
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
          <div className="flex items-center justify-between">
            <div className="flex items-center text-muted-foreground">
              <Clock className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">{nextEvent.time}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {getTimeUntilEvent(nextEvent.startTimeUtc)}
            </Badge>
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="h-5 w-5 mr-3" />
            <span className="text-sm font-medium">{nextEvent.location}</span>
          </div>
          <p className="text-muted-foreground text-sm text-pretty leading-relaxed">
            {nextEvent.description}
          </p>
          <Button asChild className="w-full mt-6" size="lg">
            <a href={nextEvent.url} target="_blank" rel="noopener noreferrer">
              Register Now
            </a>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}