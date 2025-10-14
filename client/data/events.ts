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
    title: "Practice Pitchathon",
    date: "October 16, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "CDS 264",
    description: "Practice your blockchain project pitches and get feedback from peers and mentors in preparation for upcoming competitions.",
    callout: "Open to all skill levels!",
    url: "https://luma.com/p5p0rhn5",
    startTimeUtc: "2025-10-16T22:30:00.000Z", // 6:30 PM EDT = 10:30 PM UTC
  },
  {
    title: "Guest Speaker: DeFi Innovation",
    date: "September 26, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "CDS 264",
    description: "Industry expert discusses the latest trends in decentralized finance.",
    url: "https://example.com/defi-speaker-event",
    startTimeUtc: "2025-09-26T22:30:00.000Z", // 6:30 PM EDT = 10:30 PM UTC
  },
  {
    title: "Blockchain Hackathon 2024",
    date: "September 26, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "CDS 264",
    description: "Build innovative blockchain solutions and compete for prizes.",
    url: "https://example.com/blockchain-hackathon-2024",
    startTimeUtc: "2025-09-28T16:00:00.000Z", // Assuming 12:00 PM EDT start = 4:00 PM UTC
  },
]
