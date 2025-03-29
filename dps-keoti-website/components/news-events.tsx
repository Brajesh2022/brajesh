"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "@/components/scroll-reveal"

const newsEvents = [
  {
    id: 1,
    title: "Annual Sports Day 2023",
    date: "December 15, 2023",
    time: "9:00 AM - 4:00 PM",
    description:
      "Join us for our annual sports day celebration featuring various athletic competitions and team events.",
    category: "event",
  },
  {
    id: 2,
    title: "DPS Keoti Students Win National Science Olympiad",
    date: "November 28, 2023",
    description: "Our students brought home three gold medals from the National Science Olympiad held in Delhi.",
    category: "news",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting",
    date: "January 10, 2024",
    time: "10:00 AM - 2:00 PM",
    description: "Discuss your child's academic progress and development with our faculty members.",
    category: "event",
  },
  {
    id: 4,
    title: "New Computer Lab Inaugurated",
    date: "October 5, 2023",
    description: "State-of-the-art computer lab with 30 new systems was inaugurated by the District Magistrate.",
    category: "news",
  },
  {
    id: 5,
    title: "Cultural Fest 'Tarang 2024'",
    date: "February 18-20, 2024",
    time: "10:00 AM - 6:00 PM",
    description: "Three-day cultural extravaganza showcasing talent in music, dance, art, and literary activities.",
    category: "event",
  },
  {
    id: 6,
    title: "DPS Keoti Ranked Among Top 10 Schools in Bihar",
    date: "September 15, 2023",
    description: "Our school has been recognized among the top 10 CBSE schools in Bihar by Education Today.",
    category: "news",
  },
]

export default function NewsEvents() {
  const [activeFilter, setActiveFilter] = useState<"all" | "news" | "event">("all")

  const filteredItems = newsEvents.filter((item) => {
    if (activeFilter === "all") return true
    return item.category === activeFilter
  })

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Latest News & Events</h2>
            <div className="flex space-x-2">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className="rounded-full"
              >
                All
              </Button>
              <Button
                variant={activeFilter === "news" ? "default" : "outline"}
                onClick={() => setActiveFilter("news")}
                className="rounded-full"
              >
                News
              </Button>
              <Button
                variant={activeFilter === "event" ? "default" : "outline"}
                onClick={() => setActiveFilter("event")}
                className="rounded-full"
              >
                Events
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 100}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all premium-card overflow-hidden dark:bg-gray-800">
                <CardContent className="p-0">
                  <div
                    className={`p-1 text-xs font-medium text-white uppercase ${item.category === "news" ? "bg-blue-600" : "bg-primary"}`}
                  >
                    {item.category}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2">{item.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.date}</span>
                      {item.time && (
                        <>
                          <span className="mx-2">•</span>
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{item.time}</span>
                        </>
                      )}
                    </div>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{item.description}</p>
                    <Link href="#" className="inline-flex items-center text-primary hover:underline">
                      Read more <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild variant="outline" className="rounded-full px-8">
            <Link href="/news">View All News & Events</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

