import PhotoGallery from "@/components/photo-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photo Gallery | DPS Keoti",
  description:
    "Browse through our collection of photos showcasing school events, activities, and achievements at Delhi Public School Keoti.",
  openGraph: {
    title: "Photo Gallery | DPS Keoti",
    description: "Browse through our collection of photos showcasing school events, activities, and achievements.",
    images: ["/images/school-building.jpg"],
  },
}

export default function PhotoGalleryPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 page-content">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of photos showcasing school events, activities, and achievements.
          </p>
        </div>

        <PhotoGallery />
      </div>
    </div>
  )
}

