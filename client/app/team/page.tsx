"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User } from "lucide-react"
import { teamMembers } from "@/data/team"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-red-950">
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span className="text-red-400">E-Board</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The dedicated leaders driving innovation and community in blockchain technology at Boston University
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-red-950/20 border-red-900/30 hover:bg-red-950/30 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-red-900/30 flex items-center justify-center overflow-hidden">
                  {member.profilePhoto ? (
                    <img 
                      src={member.profilePhoto} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-12 h-12 text-red-400" />
                  )}
                </div>
                <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                <CardDescription className="text-red-400 font-semibold">
                  {member.position}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* <div className="mt-16 text-center">
          <div className="bg-red-950/20 border border-red-900/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">E-Board Commitment</h2>
            <p className="text-gray-300 mb-6">All executive board members are expected to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <div className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-2 mt-1.5 block w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  Attend weekly E-board meetings and weekly general meetings
                </div>
                <div className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-2 mt-1.5 block w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  Notify the team in advance if unable to attend
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-2 mt-1.5 block w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  Actively contribute ideas and feedback during meetings
                </div>
                <div className="flex items-start text-gray-300">
                  <span className="text-red-400 mr-2 mt-1.5 block w-1 h-1 bg-red-400 rounded-full flex-shrink-0"></span>
                  Collaborate cross-functionally to support club goals and initiatives
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </main>

      <Footer />
    </div>
  )
}
