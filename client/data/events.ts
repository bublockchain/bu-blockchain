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
    title: "Welcome to BU Blockchain Club!",
    date: "September 11, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "CDS 264",
    description: "Learn about the BU Blockchain Club, our mission, and how to get involved in the blockchain community at BU.",
    callout: "First Meeting!",
    url: "https://example.com/smart-contract-workshop",
    startTimeUtc: "2025-09-15T23:00:00.000Z", // 6:00 PM EDT = 11:00 PM UTC
  },
  {
    title: "Guest Speaker: DeFi Innovation",
    date: "September 19, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "CDS 264",
    description: "Industry expert discusses the latest trends in decentralized finance.",
    url: "https://example.com/defi-speaker-event",
    startTimeUtc: "2025-09-23T00:00:00.000Z", // 7:00 PM EDT = 12:00 AM UTC (next day)
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
