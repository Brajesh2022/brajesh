"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "R. K. Yadav",
    role: "Parent",
    image: "https://i.postimg.cc/s2JBY9VH/Firefly-20250329152738.png",
    quote:
      "DPS Keoti has provided an excellent learning environment for my child. The teachers are dedicated and the facilities are top-notch. I've seen remarkable improvement in my child's academic performance and overall development.",
  },
  {
    id: 2,
    name: "Avani Y.",
    role: "Alumni",
    image: "https://i.postimg.cc/dtKjjnvw/IMG-20250114-WA0002.jpg",
    quote:
      "DPS Keoti provided a nurturing environment that balanced academics and personal growth. The dedicated teachers and holistic approach to education shaped me into a confident and well-rounded individual. Grateful to be an alumnus!",
  },
  {
    id: 3,
    name: "Brajesh K.",
    role: "Alumni",
    image: "https://i.postimg.cc/wTc78QNq/width-412.png",
    quote:
      "My years at DPS Keoti were transformative. The school's emphasis on character building alongside academic excellence prepared me well for college and beyond. I'm proud to be an alumnus of this prestigious institution.",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden py-12 dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full decorative-dots opacity-20 -z-10"></div>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">What Parents & Alumni Say</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:border-primary"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/20 hover:border-primary"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                index === current
                  ? "opacity-100 translate-x-0"
                  : index < current
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
              style={{ zIndex: index === current ? 10 : 0 }}
            >
              <Card className="border-none shadow-lg testimonial-card overflow-hidden dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex flex-col items-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg?height=96&width=96"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg text-center">{testimonial.name}</h3>
                      <p className="text-primary text-sm">{testimonial.role}</p>
                    </div>
                    <div className="md:w-3/4">
                      <Quote className="h-10 w-10 text-primary/20 mb-4" />
                      <p className="text-muted-foreground italic">{testimonial.quote}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}

          {/* Current testimonial (visible) */}
          <Card className="border-none shadow-lg testimonial-card invisible">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 mb-4">
                    <div className="w-full h-full bg-gray-200"></div>
                  </div>
                  <div className="h-5 w-32 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="md:w-3/4">
                  <div className="h-10 w-10 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-all ${
                index === current ? "bg-primary scale-125" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}

