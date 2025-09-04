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
    title: "Smart Contract Development Workshop",
    date: "March 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "CAS 211",
    description: "Learn to build and deploy smart contracts on Ethereum using Solidity.",
    callout: "First Meeting!",
    url: "https://example.com/smart-contract-workshop",
    startTimeUtc: "2025-09-15T23:00:00.000Z", // 6:00 PM EDT = 11:00 PM UTC
  },
  {
    title: "Guest Speaker: DeFi Innovation",
    date: "March 22, 2024",
    time: "7:00 PM - 8:30 PM",
    location: "GSU Auditorium",
    description: "Industry expert discusses the latest trends in decentralized finance.",
    url: "https://example.com/defi-speaker-event",
    startTimeUtc: "2025-09-23T00:00:00.000Z", // 7:00 PM EDT = 12:00 AM UTC (next day)
  },
  {
    title: "Blockchain Hackathon 2024",
    date: "April 5-7, 2024",
    time: "48 Hours",
    location: "Photonics Center",
    description: "Build innovative blockchain solutions and compete for prizes.",
    url: "https://example.com/blockchain-hackathon-2024",
    startTimeUtc: "2025-09-28T16:00:00.000Z", // Assuming 12:00 PM EDT start = 4:00 PM UTC
  },
]
