export interface TeamMember {
  name: string
  position: string
  responsibilities: string[]
  profilePhoto?: string // Optional URL for profile photo
}

export const teamMembers: TeamMember[] = [
  // ── Co-Presidents ──────────────────────────────────────────
  {
    name: "Michael Sun",
    position: "Co-President",
    responsibilities: [
      "Lead the club vision, culture, and long-term strategy",
      "Represent BUB at official functions and external meetings",
      "Chair E-board meetings and set the semester agenda",
      "Work with the VP of Outreach on key speaker and university partnerships"
    ],
    profilePhoto: "/members/michael.png"
  },
  {
    name: "Gabriel Ginsberg",
    position: "Co-President",
    responsibilities: [
      "Oversee daily operations and keep communication flowing across the E-board",
      "Organize semester planning and internal retrospectives",
      "Guide the club's technical direction alongside the VP of Technology",
      "Mentor members working on technical projects"
    ],
    profilePhoto: "/members/gabriel.png"
  },

  // ── Vice Presidents ────────────────────────────────────────
  {
    name: "Alvin Sun",
    position: "VP of Finance / Treasurer",
    responsibilities: [
      "Track expenses, reimbursements, and sponsorship funds",
      "Maintain transparent financial records and submit semester reports",
      "Manage club accounts and SAO funding paperwork",
      "Work with other leads on cost estimates and event funding"
    ],
    profilePhoto: "/members/alvin.png"
  },
  {
    name: "Ryan Lam",
    position: "VP of Finance",
    responsibilities: [
      "Prepare budget and funding proposals (with SAO and external sponsors)",
      "Plan semester budgets with the Co-Presidents",
      "Identify new sponsorship and funding opportunities",
      "Support the Treasurer on reporting and event cost planning"
    ],
    profilePhoto: "/members/ryan.png"
  },
  {
    name: "Russell Joarder",
    position: "VP of Technology",
    responsibilities: [
      "Set the technical roadmap for workshops and development projects",
      "Lead blockchain development initiatives",
      "Maintain the club website, internal tools, and documentation",
      "Work with the Director of Technology on technical programming"
    ],
    profilePhoto: "/members/russell.png"
  },
  {
    name: "Timur Zafesov",
    position: "VP of Outreach",
    responsibilities: [
      "Coordinate speaker outreach and guest events",
      "Build and maintain partnerships with other clubs, universities, and companies",
      "Manage relationships with industry contacts and sponsors",
      "Represent BUB at external networking events"
    ],
    profilePhoto: "/members/timur.png"
  },

  // ── Secretary ──────────────────────────────────────────────
  {
    name: "Prahlad Temp",
    position: "Secretary",
    responsibilities: [
      "Maintain official club roster and attendance",
      "Book meeting rooms and event spaces",
      "Track minutes and follow-up items from E-board meetings",
      "Ensure members meet active membership requirements"
    ],
    profilePhoto: "/members/prahlad.png"
  },

  // ── Directors ──────────────────────────────────────────────
  {
    name: "Patrick Fish",
    position: "Director of Technology",
    responsibilities: [
      "Run hands-on technical workshops and coding sessions",
      "Support technical needs at events (setup, demos, GitHub)",
      "Help members get started on technical projects",
      "Assist the VP of Technology with development initiatives"
    ],
    profilePhoto: "/members/patrick.png"
  },
  {
    name: "Justin Li",
    position: "Director of Quant Strategy",
    responsibilities: [
      "Lead research on crypto markets, trading, and DeFi protocols",
      "Run quantitative strategy and market analysis projects",
      "Host sessions on on-chain data and market structure",
      "Share market insights with the club"
    ],
    profilePhoto: "/members/justin.png"
  },
  {
    name: "Ilhan Valani",
    position: "Director of Innovation",
    responsibilities: [
      "Scout emerging trends and new use cases in blockchain",
      "Propose and launch new club initiatives",
      "Lead hackathon and competition participation",
      "Help define club priorities and process improvements"
    ],
    profilePhoto: "/members/ilhan.png"
  },
  {
    name: "Soumya Mehta",
    position: "Director of Branding",
    responsibilities: [
      "Manage all social platforms (Instagram, X, LinkedIn, Website)",
      "Create promotional content and a monthly posting plan",
      "Document events and maintain a cohesive visual identity",
      "Coordinate campaigns with Outreach, Tech, and event leads"
    ],
    profilePhoto: "/members/soumya.png"
  }
]