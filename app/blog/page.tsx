import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { BlogCard } from "@/components/blog/blog-card"
import { blogPosts } from "@/lib/blog-data"

export default function BlogPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">our insights</h1>
          <p className="text-gray-600 text-lg">
            discover the latest trends, insights, and best practices in software development and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </main>
  )
}