"use client"

import { useState, useEffect } from "react"

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"
const TARGET_WORD = "Blockchain"

export function AnimatedBlockchain() {
  const [displayText, setDisplayText] = useState(TARGET_WORD.split(''))
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    if (!isAnimating) return

    const intervals: NodeJS.Timeout[] = []
    
    TARGET_WORD.split('').forEach((targetChar, index) => {
      // Random delay for each letter to start (0-500ms)
      const startDelay = Math.random() * 500
      
      // Random duration for each letter (1000-2000ms of cycling)
      const cycleDuration = 700 + Math.random() * 1000
      
      setTimeout(() => {
        let cycleCount = 0
        const maxCycles = Math.floor(cycleDuration / 50) // 50ms per cycle
        
        const interval = setInterval(() => {
          cycleCount++
          
          if (cycleCount >= maxCycles) {
            // Slow down phase - last 500ms
            const slowPhase = setInterval(() => {
              setDisplayText(prev => {
                const newText = [...prev]
                newText[index] = Math.random() < 0.7 ? targetChar : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
                return newText
              })
            }, 100)
            
            // Final settle after 500ms
            setTimeout(() => {
              clearInterval(slowPhase)
              setDisplayText(prev => {
                const newText = [...prev]
                newText[index] = targetChar
                return newText
              })
              
              // Check if all letters are done
              setTimeout(() => {
                setDisplayText(prev => {
                  if (prev.join('') === TARGET_WORD) {
                    setIsAnimating(false)
                  }
                  return prev
                })
              }, 100)
            }, 500)
            
            clearInterval(interval)
          } else {
            // Fast cycling phase
            setDisplayText(prev => {
              const newText = [...prev]
              newText[index] = CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
              return newText
            })
          }
        }, 50)
        
        intervals.push(interval)
      }, startDelay)
    })

    return () => {
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [isAnimating])

  // Reset animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <span className="inline-block">
      {displayText.map((char, index) => (
        <span key={index} className="inline-block">
          {char}
        </span>
      ))}
    </span>
  )
}
