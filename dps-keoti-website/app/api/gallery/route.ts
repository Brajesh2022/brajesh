import { NextResponse } from "next/server"
import { XMLParser } from "fast-xml-parser"
import { cache } from "react"

// Cache the fetch operation to avoid redundant requests
const fetchRSSFeed = cache(async () => {
  try {
    const response = await fetch("https://gallery-dps.blogspot.com/feeds/posts/default?alt=rss", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; DPS-Keoti-Website/1.0)",
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status} ${response.statusText}`)
    }

    const xmlData = await response.text()
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    })

    const result = parser.parse(xmlData)
    return result
  } catch (error) {
    console.error("Error fetching RSS feed:", error)
    throw error
  }
})

// Extract images from HTML content
function extractImagesFromContent(content: string): string[] {
  const imgRegex = /<img[^>]+src="([^">]+)"/g
  const images: string[] = []
  let match

  while ((match = imgRegex.exec(content)) !== null) {
    let imageUrl = match[1]

    // Get larger version of the image if it's from Blogger
    if (imageUrl.includes("blogger.googleusercontent.com")) {
      imageUrl = imageUrl.replace(/\/s\d+(-c)?\//, "/s1600/")
    }

    images.push(imageUrl)
  }

  return images
}

export async function GET() {
  try {
    const rssData = await fetchRSSFeed()

    if (!rssData.rss || !rssData.rss.channel || !rssData.rss.channel.item) {
      return NextResponse.json({ error: "Invalid RSS feed structure" }, { status: 500 })
    }

    const items = Array.isArray(rssData.rss.channel.item) ? rssData.rss.channel.item : [rssData.rss.channel.item]

    const galleryItems = items
      .map((item) => {
        const content = item.description || ""
        const images = extractImagesFromContent(content)

        return {
          id: item.guid || item.link,
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          images: images,
          description: content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
        }
      })
      .filter((item) => item.images.length > 0)

    return NextResponse.json({
      items: galleryItems,
      total: galleryItems.length,
    })
  } catch (error) {
    console.error("Error in gallery API route:", error)
    return NextResponse.json({ error: "Failed to fetch gallery data" }, { status: 500 })
  }
}

