import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.png')] opacity-10"></div>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 z-10">
          <h1 className="text-5xl font-bold mb-6">
            data-driven solutions for modern businesses
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            transform your business with advanced analytics, custom software solutions, and expert consulting services
          </p>
          <div className="flex gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/contact">start your transformation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10">
              <Link href="/case-studies">view case studies <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
        <div className="flex-1 relative z-10">
          <Image
            src="/images/hero-dashboard.png"
            alt="Analytics Dashboard"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}