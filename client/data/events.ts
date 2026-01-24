export interface Event {
  title: string
  date: string
  time: string
  location: string
  description: string
  callout?: string
  url: string
  startTimeUtc: string
}

export const events: Event[] = [
  {
    title: "Splash 2.0 Club Fair",
    date: "January 24, 2026",
    time: "12:00 PM",
    location: "GSU Ballroom",
    description: "Come and say hi to learn more about the club!",
    url: "https://bublockchain.com",
    startTimeUtc: "2026-01-24T17:00:00.000Z", // 12:00 PM EST = 5:00 PM UTC
  },
  {
    title: "First Meeting of Spring Semester",
    date: "January 28, 2026",
    time: "6:30 PM",
    location: "CDS 262",
    description: "Everyone is welcome to come!",
    url: "https://bublockchain.com",
    startTimeUtc: "2026-01-23T23:30:00.000Z", // 6:30 PM EST = 11:30 PM UTC
  },
  {
    title: "General Meeting",
    date: "February 4, 2026",
    time: "6:30 PM",
    location: "CDS 262",
    description: "General Meeting",
    url: "https://bublockchain.com",
    startTimeUtc: "2026-02-04T23:30:00.000Z", // 6:30 PM EST = 11:30 PM UTC
  },
]
