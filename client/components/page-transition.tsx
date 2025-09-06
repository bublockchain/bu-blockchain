'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode, useRef, useEffect } from 'react'

interface PageTransitionProps {
  children: ReactNode
}

// Define the navigation order
const navigationOrder = [
  '/',
  '/sponsorship',
  '/resources',
  '/team',
  '/contact'
]

// Normalize paths for comparison
const normalizePath = (path: string) => {
  return path
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const previousPathname = useRef<string>('')

  // Determine animation direction based on navigation order
  const getAnimationDirection = (currentPath: string, previousPath: string) => {
    const normalizedCurrent = normalizePath(currentPath)
    const normalizedPrevious = normalizePath(previousPath)
    
    const currentIndex = navigationOrder.findIndex(path => normalizePath(path) === normalizedCurrent)
    const previousIndex = navigationOrder.findIndex(path => normalizePath(path) === normalizedPrevious)
    
    // If either path is not found in navigation, default to right
    if (currentIndex === -1 || previousIndex === -1) {
      return 'right'
    }
    
    // If moving to a page with higher index, animate from right
    // If moving to a page with lower index, animate from left
    return currentIndex > previousIndex ? 'right' : 'left'
  }

  const direction = getAnimationDirection(pathname, previousPathname.current)

  // Update previous pathname after determining direction
  useEffect(() => {
    previousPathname.current = pathname
  }, [pathname])

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ x: direction === 'right' ? '100%' : '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: 0 }}
          transition={{ 
            duration: 0.3, 
            ease: 'easeInOut' 
          }}
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}