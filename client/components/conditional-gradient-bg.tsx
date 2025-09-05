"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function ConditionalGradientBg() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(pathname === "/")
  const [shouldRender, setShouldRender] = useState(true)
  
  useEffect(() => {
    if (pathname === "/") {
      // Fading in to main page
      setShouldRender(true)
      // Small delay to ensure element is rendered before fade in
      setTimeout(() => setIsVisible(true), 10)
    } else {
      // Fading out from main page
      setIsVisible(false)
      // Wait for fade out animation to complete before removing from DOM
      setTimeout(() => setShouldRender(false), 300)
    }
  }, [pathname])
  
  if (!shouldRender) {
    return null
  }
  
  return (
    <div 
      className={`radial-gradient-bg transition-opacity duration-300 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  )
}
