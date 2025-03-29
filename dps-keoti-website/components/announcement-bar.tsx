"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const announcements = [
  "Admissions open for 2023-24 academic year!",
  "Congratulations to our students for excellent board results!",
  "New sports facilities coming soon!",
]

export default function AnnouncementBar() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-primary to-blue-600 text-white py-2 relative overflow-hidden">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="animate-in fade-in duration-700 flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-white mr-2 animate-pulse"></span>
          <p className="text-sm font-medium">{announcements[currentAnnouncement]}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white/80 hover:text-white"
          aria-label="Close announcement"
        >
          <X size={16} />
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20"></div>
    </div>
  )
}

