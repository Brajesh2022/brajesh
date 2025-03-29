"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Users, BookOpen, Globe, ArrowRight } from "lucide-react"
import ScrollReveal from "@/components/scroll-reveal"
import StatsSection from "@/components/stats-section"
import TestimonialCarousel from "@/components/testimonial-carousel"
import NewsEvents from "@/components/news-events"

const HomePage = () => {
  // Image slider state
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const images = [
    {
      src: "/images/slider1.jpg",
      alt: "Students learning with a teacher",
    },
    {
      src: "/images/slider2.jpg",
      alt: "School building",
    },
    {
      src: "/images/slider3.jpg",
      alt: "Students in classroom",
    },
    {
      src: "/images/slider4.jpg",
      alt: "School event",
    },
    {
      src: "/images/slider5.jpg",
      alt: "Sports activities",
    },
  ]

  // Typewriter effect state
  const [displayText, setDisplayText] = useState("")
  const fullText = "Delhi Public School "

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  // Typewriter effect
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [displayText, fullText])

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return
      const scrollPosition = window.scrollY
      heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center bg-primary bg-opacity-90 overflow-hidden"
        style={{
          backgroundImage: 'url("/images/pattern-bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-green-900/90"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-wider text-white/80 bg-white/10 inline-block px-3 py-1 rounded-full">
                  Welcome to
                </p>
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                  <span>{displayText}</span>
                  <span className="text-yellow-400">Keoti</span>
                </h1>
                <div className="w-20 h-1 bg-yellow-400"></div>
                <p className="text-lg text-white/90 max-w-lg">
                  A part of the prestigious <strong>DPS Educational Society, New Delhi</strong>, Delhi Public School
                  Keoti is committed to providing a holistic education that nurtures the intellectual, physical, and
                  emotional growth of every student.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 px-8">
                  <Link href="/admission">Apply Now</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white text-primary hover:bg-white/20 hover:text-primary border-2"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg?height=720&width=1280"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}
              <div className="absolute inset-0 flex items-center justify-between p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 text-white hover:bg-black/50"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-black/30 text-white hover:bg-black/50"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
        ></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DPS Keoti?</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide a nurturing environment where students can excel academically and develop into well-rounded
                individuals
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all premium-card overflow-hidden group">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Experienced Faculty</h3>
                  <p className="text-muted-foreground">
                    Our team of dedicated and experienced teachers is committed to providing quality education and
                    mentorship to every student.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all premium-card overflow-hidden group">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">CBSE Curriculum</h3>
                  <p className="text-muted-foreground">
                    We follow the CBSE curriculum, ensuring a well-rounded education that prepares students for academic
                    and life success.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all premium-card overflow-hidden group">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Modern Facilities</h3>
                  <p className="text-muted-foreground">
                    Our campus is equipped with modern facilities, including smart classrooms, labs, and sports
                    infrastructure, to support holistic development.
                  </p>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <Link href="/about" className="inline-flex items-center text-primary hover:underline">
                      Learn more <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Management Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the dedicated team of professionals guiding our institution towards excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Director */}
            <ScrollReveal delay={100}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 premium-card overflow-hidden">
                <div className="relative">
                  <div className="bg-primary/10 h-32"></div>
                  <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image src="/images/director.jpg" alt="B.K. Yadav - Director" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center pt-20">
                  <h3 className="text-xl font-semibold">B.K. Yadav</h3>
                  <p className="text-primary mb-3">Director</p>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    The school ensures a climate of openness to new learning that incorporates best practices and
                    effective methodologies based on worth, uniqueness, polishing each individual's...
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href="/management/director">Read Message</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Principal */}
            <ScrollReveal delay={200}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 premium-card overflow-hidden">
                <div className="relative">
                  <div className="bg-primary/10 h-32"></div>
                  <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image src="/images/principal.jpg" alt="M.S. Yadav - Principal" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center pt-20">
                  <h3 className="text-xl font-semibold">M.S. Yadav</h3>
                  <p className="text-primary mb-3">Principal</p>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    Education is a shared commitment between dedicated teachers, motivated students, and enthusiastic
                    parents with high expectations...
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href="/management/principal">Read Message</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Chairman */}
            <ScrollReveal delay={300}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 premium-card overflow-hidden">
                <div className="relative">
                  <div className="bg-primary/10 h-32"></div>
                  <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image src="/images/chairman.jpg" alt="S.A. Khan - Chairman" fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center pt-20">
                  <h3 className="text-xl font-semibold">S.A. Khan</h3>
                  <p className="text-primary mb-3">Chairman</p>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    Education visualizes dreams and dreams are the touchstone of Character! Schools are the training
                    center for the citizens of tomorrow...
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href="/management/chairman">Read Message</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>

            {/* Exam Controller */}
            <ScrollReveal delay={400}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 premium-card overflow-hidden">
                <div className="relative">
                  <div className="bg-primary/10 h-32"></div>
                  <div className="absolute left-0 right-0 -bottom-16 flex justify-center">
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src="/images/exam-controller.jpg"
                        alt="S.P. Yadav - Examination Controller"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 text-center pt-20">
                  <h3 className="text-xl font-semibold">S.P. Yadav</h3>
                  <p className="text-primary mb-3">Examination Controller</p>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    I am committed to improving the evaluation system of the school with active participation from all
                    students, faculty members, staff, and other stakeholders...
                  </p>
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <Link href="/management/exam-controller">Read Message</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

     

      {/* Virtual Tour Section */}
      <section className="py-20 bg-primary/5 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Campus</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Take a virtual tour of our state-of-the-art facilities and beautiful campus
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ScrollReveal>
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/school-building.jpg"
                  alt="DPS Keoti Campus"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                  <Button className="rounded-full bg-white text-primary hover:bg-white/90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Watch Tour
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">World-Class Facilities</h3>
                <p className="text-muted-foreground">
                  Our campus is designed to provide students with the best possible learning environment. From modern
                  classrooms to specialized labs and sports facilities, we have everything needed to support holistic
                  development.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Smart Classroom with Interactive Board</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Well-equippedcomputer Lab</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Extensive Library</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Sports Facilities</span>
                  </li>
                </ul>
               
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-900 z-0"></div>
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our School?</h2>
              <p className="text-white/90 mb-8 text-lg">
                Take the first step towards providing your child with a quality education that will prepare them for a
                successful future. Admissions for the new academic year are now open!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 rounded-full px-8 animate-pulse"
                >
                  <Link href="/admission">Apply for Admission</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-primary hover:bg-white/20 hover:text-primary rounded-full px-8 border-2"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

