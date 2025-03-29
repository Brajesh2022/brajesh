"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Search, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  // Check if we're on the home page
  const isHomePage = pathname === "/"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isGalleryOpen) setIsGalleryOpen(false)
  }

  const toggleGallery = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsGalleryOpen(!isGalleryOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Add this effect to handle body overflow when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [isMenuOpen])

  // Determine text color based on whether we're on home page and if scrolled
  const getTextColor = () => {
    if (isScrolled) {
      return "text-gray-800" // Dark text when scrolled on any page
    }
    if (isHomePage) {
      return "text-white" // White text on home page when not scrolled
    }
    return "text-gray-800" // Dark text on other pages when not scrolled
  }

  const textColor = getTextColor()
  const buttonBorderColor =
    isScrolled || !isHomePage
      ? "border-primary text-primary hover:bg-primary hover:text-white"
      : "border-white text-primary hover:bg-white/20 hover:text-primary"

  // Add this function to properly handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <>
      <header
        className={cn(
          "header-sticky transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2"
            : isHomePage
              ? "bg-transparent py-4"
              : "bg-white py-4",
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 z-10">
              <div
                className={cn(
                  "relative w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm transition-all",
                  isScrolled ? "scale-90" : "",
                )}
              >
                <Image src="/logo.png" alt="DPS Keoti Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-bold text-lg md:text-xl hidden sm:inline transition-all",
                    isScrolled ? "text-primary" : isHomePage ? "text-white" : "text-primary",
                  )}
                >
                  Delhi Public School
                </span>
                <span
                  className={cn(
                    "text-xs uppercase tracking-wider hidden sm:inline transition-all",
                    isScrolled ? "text-gray-600" : isHomePage ? "text-white/80" : "text-gray-600",
                  )}
                >
                  Keoti • Excellence in Education
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className={cn("hidden md:flex items-center gap-8 transition-colors", textColor)}>
              <Link href="/" className="hover:text-primary transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <div className="relative group">
                <button
                  onClick={toggleGallery}
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  Gallery <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                </button>
                <div
                  className={cn(
                    "absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded-md w-48 py-2 z-50 transition-all",
                    isGalleryOpen
                      ? "opacity-100 visible translate-y-0"
                      : "opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                  )}
                >
                  <Link
                    href="/gallery/photos"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Photo Gallery
                  </Link>
                  <Link
                    href="/gallery/videos"
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-primary transition-colors"
                  >
                    Video Gallery
                  </Link>
                </div>
              </div>
              <Link href="/contact" className="hover:text-primary transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>
              <Button
                asChild
                variant="outline"
                className={cn("rounded-full border-2 transition-colors", buttonBorderColor)}
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 rounded-full animate-pulse">
                <Link href="/admission">Admissions Open</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={cn(
                "md:hidden p-2 z-50 rounded-full",
                isScrolled || !isHomePage ? "text-primary" : "text-white",
                isMenuOpen ? "fixed top-4 right-4 bg-white text-primary shadow-md" : "relative",
              )}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Completely separate from header */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-900 z-40 overflow-y-auto">
          <div className="pt-20 pb-6 px-6">
            <nav className="flex flex-col gap-3 animate-in slide-in-from-top-5">
              <Link
                href="/"
                className="px-4 py-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between dark:text-white"
                onClick={toggleMenu}
              >
                Home
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md transition-colors dark:text-white"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <div>
                <button
                  onClick={toggleGallery}
                  className="w-full text-left px-4 py-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md transition-colors flex items-center justify-between dark:text-white"
                >
                  Gallery{" "}
                  <ChevronDown
                    size={16}
                    className={isGalleryOpen ? "rotate-180 transition-transform" : "transition-transform"}
                  />
                </button>
                {isGalleryOpen && (
                  <div className="pl-4 mt-1 border-l-2 border-primary/20 ml-4">
                    <Link
                      href="/gallery/photos"
                      className="block px-4 py-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md transition-colors dark:text-white"
                      onClick={toggleMenu}
                    >
                      Photo Gallery
                    </Link>
                    <Link
                      href="/gallery/videos"
                      className="block px-4 py-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md transition-colors dark:text-white"
                      onClick={toggleMenu}
                    >
                      Video Gallery
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/contact"
                className="px-4 py-3 hover:bg-primary/10 dark:hover:bg-primary/20 rounded-md transition-colors dark:text-white"
                onClick={toggleMenu}
              >
                Contact
              </Link>

              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <div className="flex justify-between mb-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleTheme}
                    className="rounded-full dark:text-white dark:hover:bg-gray-800"
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4 mr-2" /> : <Moon className="h-4 w-4 mr-2" />}
                    {theme === "dark" ? "Light Mode" : "Dark Mode"}
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-full dark:text-white dark:hover:bg-gray-800">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white w-full"
                  >
                    <Link href="/login" onClick={toggleMenu}>
                      Login
                    </Link>
                  </Button>
                  <Button asChild className="bg-primary hover:bg-primary/90 w-full">
                    <Link href="/admission" onClick={toggleMenu}>
                      Admissions Open
                    </Link>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

