"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Trophy } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function Partnerships() {
  const partners = [
    { name: "Algorand", logo: "/algorand.png" },
    { name: "Binance", logo: "/binance.png" },
    { name: "Circle", logo: "/circle.png" },
    { name: "Coin Metrics", logo: "/coinmetrics.png" },
    { name: "Fidelity", logo: "/fidelity.png" },
    { name: "Hedera", logo: "/hedera.png" },
    { name: "Near", logo: "/near.png" },
    { name: "Spawn", logo: "/spawn.png" },
    { name: "WAEV", logo: "/waev.png" },
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const currentSpeedRef = useRef(50)
  const targetSpeedRef = useRef(50)
  const transitionStartTimeRef = useRef<number | null>(null)
  const transitionStartSpeedRef = useRef(50)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let startTime: number
    let accumulatedDistance = 0 // Track total distance scrolled
    const baseScrollSpeed = 50 // pixels per second
    const transitionDuration = 200 // 200ms transition

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      
      // Handle speed transitions
      if (transitionStartTimeRef.current !== null) {
        const transitionElapsed = currentTime - transitionStartTimeRef.current
        const progress = Math.min(transitionElapsed / transitionDuration, 1)
        
        // Use easeOutCubic for smooth deceleration
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        
        currentSpeedRef.current = transitionStartSpeedRef.current + 
          (targetSpeedRef.current - transitionStartSpeedRef.current) * easeProgress
        
        // Transition complete
        if (progress >= 1) {
          transitionStartTimeRef.current = null
          currentSpeedRef.current = targetSpeedRef.current
        }
      }
      
      if (currentSpeedRef.current > 0.1) {
        // Calculate frame time delta
        const deltaTime = currentTime - (startTime || currentTime)
        startTime = currentTime
        
        // Add to accumulated distance based on current speed
        accumulatedDistance += (deltaTime / 1000) * currentSpeedRef.current
        
        // Get the width of a single partner item (including margin)
        const partnerWidth = 192 // 128px width + 64px margin (32px each side)
        const totalWidth = partners.length * partnerWidth
        
        // Calculate current scroll position from accumulated distance
        const scrollPosition = accumulatedDistance % totalWidth
        
        // Apply the transform
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`
      }
      
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [partners.length])

  const handleMouseEnter = () => {
    setIsHovered(true)
    
    // Start transition to stop
    transitionStartTimeRef.current = performance.now()
    transitionStartSpeedRef.current = currentSpeedRef.current
    targetSpeedRef.current = 0
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    
    // Start transition to resume
    transitionStartTimeRef.current = performance.now()
    transitionStartSpeedRef.current = currentSpeedRef.current
    targetSpeedRef.current = 50
  }

  // Create multiple copies to ensure seamless scrolling
  const extendedPartners = [...partners, ...partners, ...partners]

  return (
    <section id="partnerships" className="py-16 bg-muted/30 overflow-hidden">
      {/* Infinite scrolling logo carousel */}
      <div className="relative">
        {/* Left fade overlay */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-muted/30 to-transparent z-10"></div>
        
        {/* Right fade overlay */}
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-muted/30 to-transparent z-10"></div>
        
        {/* Scrolling container */}
        <div 
          ref={scrollRef}
          className="flex"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {extendedPartners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <div className="w-32 h-20 relative grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
