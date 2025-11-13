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
    title: "BU Blockchain Hackathon & Pitchathon",
    date: "November 16, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "PHO 906",
    description: "Join us for a day of hacking and pitching to compete for prizes. Food and drinks will be provided.",
    callout: "Beginner Friendly!",
    url: "https://luma.com/qc079my8?tk=jSiJvg",
    startTimeUtc: "2025-11-16T09:00:00.000Z", // 9:00 AM EDT = 1:00 PM UTC
  },
  {
    title: "Guest Speaker: DeFi Innovation",
    date: "November 20, 2025",
    time: "6:30 PM - 7:30 PM",
    location: "CDS 264",
    description: "Industry expert discusses the latest trends in decentralized finance.",
    url: "https://example.com/defi-speaker-event",
    startTimeUtc: "2025-11-20T22:30:00.000Z", // 6:30 PM EDT = 10:30 PM UTC
  },
  {
    title: "Midwest Blockchain Conference",
    date: "December 5-6, 2025",
    time: "All Day",
    location: "Ann Arbor, MI",
    description: "Attend the Midwest Blockchain Conference to learn about the latest trends in blockchain and network with industry professionals.",
    url: "https://midwestblockchain.org/",
    startTimeUtc: "2025-12-05T09:00:00.000Z", // 9:00 AM EDT = 6:00 PM UTC
  },
]
