"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface Video {
  id: string
  title: string
  thumbnail: string
}

export default function VideoGalleryPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [nextPageToken, setNextPageToken] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const API_KEY = "AIzaSyD0AY2r5C3gYNrJKsgboO3QYW9KYkOKki0"
  const CHANNEL_ID = "UCuc5zjyZA8CgtY83o3Y5cbQ"

  useEffect(() => {
    fetchVideos()
  }, [])

  const fetchVideos = async (pageToken = "") => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=9&pageToken=${pageToken}`,
      )

      if (!response.ok) {
        throw new Error("Failed to fetch videos")
      }

      const data = await response.json()

      const newVideos = data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
      }))

      if (pageToken === "") {
        setVideos(newVideos)
      } else {
        setVideos((prev) => [...prev, ...newVideos])
      }

      setNextPageToken(data.nextPageToken || "")
      setLoading(false)
    } catch (error) {
      console.error("Error fetching videos:", error)
      setLoading(false)
    }
  }

  const loadMoreVideos = () => {
    if (nextPageToken) {
      fetchVideos(nextPageToken)
    }
  }

  const openVideo = (videoId: string) => {
    setSelectedVideo(videoId)
    document.body.style.overflow = "hidden"
  }

  const closeVideo = () => {
    setSelectedVideo(null)
    document.body.style.overflow = "auto"
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 page-content">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Video Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of videos showcasing school events, activities, and achievements.
          </p>
        </div>

        {loading && videos.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                  onClick={() => openVideo(video.id)}
                >
                  <div className="relative aspect-video">
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center">
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
                          className="text-white"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium line-clamp-2 h-12">{video.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>

            {nextPageToken && (
              <div className="flex justify-center mt-12">
                <Button onClick={loadMoreVideos} disabled={loading} className="px-8">
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Loading...
                    </span>
                  ) : (
                    "Load More"
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Video Lightbox */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={closeVideo}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
          <div className="w-full max-w-4xl aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

