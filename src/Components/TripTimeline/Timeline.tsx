"use client"

import { useRef } from "react"
import type { Trip } from "./tripsdata"
import { TripCard } from "@/Components/TripTimeline/TripCard"
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface TimelineProps {
  trips: Trip[]
}

export function Timeline({ trips }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: containerRef })
  const scale = useTransform(scrollXProgress, [0, 1], [0, 1])

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth * 0.8
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600" />
      <motion.div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-500 origin-left" style={{ scaleX: scale }} />
      <div className="relative overflow-x-hidden" ref={containerRef}>
        <div className="flex space-x-16 p-8 min-w-max">
          {trips.map((trip) => (
            <div key={trip.id} className="relative flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-800 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
              <div className="mt-8 mb-4">
                <TripCard trip={trip} />
              </div>
              <p className="text-gray-400 text-sm">{trip.date}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => handleScroll("left")}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => handleScroll("right")}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-700 transition-colors"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

