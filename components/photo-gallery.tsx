"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { X, ZoomIn, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { format } from "date-fns"

interface GalleryItem {
  id: string
  title: string
  link: string
  pubDate: string
  images: string[]
  description: string
}

export default function PhotoGallery() {
  const [allImages, setAllImages] = useState<{ url: string; alt: string; date?: string }[]>([])
  const [visibleImages, setVisibleImages] = useState<{ url: string; alt: string; date?: string }[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageAlt, setCurrentImageAlt] = useState<string>("")
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())
  const [initialLoad, setInitialLoad] = useState(true)

  const galleryRef = useRef<HTMLDivElement>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  // Fetch gallery data from our API route
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/gallery")

        if (!response.ok) {
          throw new Error(`Failed to fetch gallery data: ${response.status}`)
        }

        const data = await response.json()

        // Extract all images from all gallery items
        const extractedImages: { url: string; alt: string; date?: string }[] = []
        ;(data.items || []).forEach((item: GalleryItem) => {
          item.images.forEach((imageUrl, index) => {
            extractedImages.push({
              url: imageUrl,
              alt: `${item.title} - Image ${index + 1}`,
              date: item.pubDate ? format(new Date(item.pubDate), "MMM dd, yyyy") : undefined,
            })
          })
        })

        setAllImages(extractedImages)

        // Initially show first batch of images
        setVisibleImages(extractedImages.slice(0, 16))

        setTimeout(() => {
          setInitialLoad(false)
        }, 500)
      } catch (err) {
        console.error("Error fetching gallery data:", err)
        setError("Failed to load gallery. Please try again later.")
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryData()
  }, [])

  // Load more images as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current && visibleImages.length < allImages.length) {
        const rect = galleryRef.current.getBoundingClientRect()
        const isNearBottom = rect.bottom <= window.innerHeight + 600

        if (isNearBottom) {
          const nextBatch = allImages.slice(visibleImages.length, visibleImages.length + 8)
          setVisibleImages((prev) => [...prev, ...nextBatch])
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [visibleImages, allImages])

  // Handle image click to open lightbox
  const openLightbox = useCallback((imageUrl: string, alt: string) => {
    setSelectedImage(imageUrl)
    setCurrentImageAlt(alt)
    document.body.style.overflow = "hidden"
  }, [])

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }, [])

  // Handle keyboard events for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedImage) {
        closeLightbox()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, closeLightbox])

  // Track loaded images
  const handleImageLoad = (url: string, event: React.SyntheticEvent<HTMLImageElement>) => {
    setLoadedImages((prev) => new Set(prev).add(url))

    // Get natural dimensions of the image
    const img = event.target as HTMLImageElement
    const aspectRatio = img.naturalHeight / img.naturalWidth

    // Set the grid-row-end based on aspect ratio
    const parent = img.closest(".masonry-brick")
    if (parent) {
      const span = Math.ceil(aspectRatio * 20) + 1 // Calculate span based on aspect ratio
      parent.style.gridRowEnd = `span ${span}`
    }
  }

  // Initialize masonry layout
  useEffect(() => {
    if (galleryRef.current && !initialLoad) {
      // Create a ResizeObserver to handle layout adjustments when window resizes
      resizeObserverRef.current = new ResizeObserver(() => {
        const bricks = galleryRef.current?.querySelectorAll(".masonry-brick") || []
        bricks.forEach((brick) => {
          const img = brick.querySelector("img")
          if (img && img.complete) {
            const aspectRatio = img.naturalHeight / img.naturalWidth
            const span = Math.ceil(aspectRatio * 20) + 1
            ;(brick as HTMLElement).style.gridRowEnd = `span ${span}`
          }
        })
      })

      resizeObserverRef.current.observe(galleryRef.current)
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
    }
  }, [initialLoad])

  // Render loading state
  if (loading && initialLoad) {
    return (
      <div className="flex flex-col justify-center items-center py-20">
        <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">Loading gallery images...</p>
      </div>
    )
  }

  // Render error state
  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg max-w-md mx-auto">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-200 mb-2">Gallery Error</h3>
          <p className="text-red-600 dark:text-red-300">{error}</p>
          <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  // Render empty state
  if (allImages.length === 0 && !loading) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No gallery images found. Please check back later.</p>
      </div>
    )
  }

  return (
    <>
      {/* True Masonry Layout */}
      <div className="masonry-grid" ref={galleryRef}>
        {visibleImages.map((image, index) => (
          <div
            key={`image-${index}`}
            className={`masonry-brick animate-in fade-in`}
            style={{
              animationDelay: `${(index % 8) * 0.1}s`,
              opacity: loadedImages.has(image.url) || initialLoad ? 1 : 0,
            }}
            onClick={() => openLightbox(image.url, image.alt)}
          >
            <div className="masonry-content">
              <div className="masonry-image-wrapper">
                {!loadedImages.has(image.url) && !initialLoad && (
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>
                )}
                <Image
                  src={image.url || "/placeholder.svg"}
                  alt={image.alt}
                  width={500}
                  height={350}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className={`masonry-image ${loadedImages.has(image.url) ? "loaded" : "loading"}`}
                  loading="lazy"
                  onLoad={(e) => handleImageLoad(image.url, e)}
                />
                <div className="masonry-overlay">
                  <ZoomIn className="text-white h-8 w-8" />
                </div>
              </div>
              {image.date && (
                <div className="masonry-caption">
                  <p className="text-xs text-gray-500 dark:text-gray-400">{image.date}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Loading more indicator */}
      {visibleImages.length < allImages.length && (
        <div className="flex justify-center items-center py-8">
          <Loader2 className="h-8 w-8 text-primary animate-spin" />
          <span className="ml-2 text-muted-foreground">Loading more images...</span>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeLightbox}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>

          <div
            className="max-w-5xl max-h-[90vh] relative animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={currentImageAlt}
              width={1200}
              height={800}
              className="object-contain max-h-[90vh] rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </>
  )
}

