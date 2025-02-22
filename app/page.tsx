
import HeroSection from "@/components/home/hero-section"
import ContactSection from "@/components/home/contact-section"
import ProductDemo from "@/components/home/product-demo"
import ServicesSection from "@/components/home/service-section"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: "Home",
  description: "Your website description",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProductDemo />
      <ContactSection />
    </main>
  )
}

