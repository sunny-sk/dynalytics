import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    // Making hero section more mobile-friendly
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 z-10 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              data-driven solutions for modern businesses
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl">
              transform your business with advanced analytics, custom software solutions, and expert consulting services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* ... buttons ... */}
            </div>
          </div>
          <div className="flex-1 relative z-10 w-full max-w-lg mx-auto">
            <Image
              src="/images/hero-dashboard.png"
              alt="Analytics Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}