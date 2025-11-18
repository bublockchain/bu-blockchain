export interface TeamMember {
  name: string
  position: string
  responsibilities: string[]
  profilePhoto?: string // Optional URL for profile photo
}

export const teamMembers: TeamMember[] = [
  {
    name: "Michael Sun",
    position: "President",
    responsibilities: [
      "Lead the club vision, culture, and long-term strategy",
      "Coordinate speaker outreach and university/club partnerships",
      "Represent BUB at official functions and external meetings",
      "Chair E-board meetings and set the semester agenda"
    ],
  profilePhoto: "/members/michael.png"
  },
  {
    name: "Elina Zang",
    position: "Executive Vice President",
    responsibilities: [
      "Oversee daily operations",
      "Maintain communication flow across all E-board roles",
      "Support the President and act as second-in-command",
      "Organize semester planning and internal retrospectives"
  ],
  profilePhoto: "/members/elina.png"
  },
  {
    name: "Alvin Sun",
    position: "VP of Finance / Treasurer",
    responsibilities: [
      "Manage budget and funding proposals (with SAO and external)",
      "Track expenses, reimbursements, and sponsorship funds",
      "Maintain transparent records and submit semester reports",
      "Work with other leads on cost estimates and event funding"
  ],
  profilePhoto: "/members/alvin.png"
  },
  {
    name: "Daniel Lung",
    position: "Secretary",
    responsibilities: [
      "Maintain official club roster and attendance",
      "Book meeting rooms and event spaces",
      "Track minutes and follow-up items from E-board meetings",
      "Ensure members meet active membership requirements"
  ],
  profilePhoto: "/members/daniel.png"
  },
  {
    name: "Russell Joarder",
    position: "VP of Strategy",
    responsibilities: [
      "Guide long-term vision, branding, and impact evaluation",
      "Support and potentially lead both financial and technical meetings",
      "Propose process improvements and help define club priorities",
      "Support initiative launches and member experiences"
  ],
  profilePhoto: "/members/russell.png"
  },
  {
    name: "Gabriel Ginsberg",
    position: "VP of Tech",
    responsibilities: [
      "Lead all technical workshops and blockchain development initiatives",
      "Support technical needs at events (setup, demos, GitHub)",
      "Maintain any internal tools or documentation",
      "Mentor members working on technical projects"
  ],
  profilePhoto: "/members/gabriel.png"
  },
  {
    name: "Christie Wu",
    position: "VP of Social Outreach",
    responsibilities: [
      "Manage all social platforms (Instagram, X, LinkedIn, Website)",
      "Create promotional content and schedule posts",
      "Document events, boost online engagement, and maintain a cohesive visual identity",
      "Collaborate with Events, Tech, and Strategy for campaign coordination",
      "Create social media post plan for the month"
  ],
  profilePhoto: "/members/christie.png"
  },
  
  {
    name: "Osayamen Okungbowa",
    position: "VP of Internal Affairs / Ignite Representative",
    responsibilities: [
      "Promote member well-being, engagement, and inclusion",
      "Organize onboarding sessions, team-building, and feedback loops",
      "Serve as the BUB representative to BU Ignite",
      "Facilitate E-board evaluations and help resolve internal concerns"
  ],
  profilePhoto: "/members/osayamen.png"
  }
]
