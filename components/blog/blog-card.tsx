import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface BlogPost {
  title: string
  description: string
  image: string
  date: string
  author: {
    name: string
    avatar: string
  }
  slug: string
  category: string
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">{post.author.name}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
        
        <Button asChild variant="ghost" className="group/btn">
          <Link href={`/blog/${post.slug}`}>
            read more 
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </article>
  )
}