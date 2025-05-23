'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
import mixpanel from "mixpanel-browser";

export default function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    // { name: "Blogs", href: "/blogs" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ]

  useEffect(() => {
    mixpanel.init(process.env.MIXPANEL_TOKEN!, {
      debug: true,
      track_pageview: true,
      persistence: "localStorage",
    });
  
    return () => {
    }
  }, [])

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Dynalytics
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link href={'/contact-us'}>
            <Button size="sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}