
import HeroSection from "@/components/home/hero-section"
import ContactSection from "@/components/home/contact-section"
import ServicesSection from "@/components/home/service-section"
import IndustriesSection from "@/components/home/industries-section"
import { Metadata } from "next"
import MapComponent from "@/components/home/map-component"
import TechStack from "@/components/home/tech-stack"

export const metadata:Metadata = {
  title: "Home",
  description: "Your website description",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TechStack />
      <section className="relative">
        <div className="absolute inset-0">
          <div className="h-full w-full md:flex">
            <div className="md:w-1/2 h-[400px] md:h-full">
              <MapComponent />
            </div>
            <div className="hidden md:block md:w-1/2 bg-blue-600"></div>
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-lg ml-auto mr-0 bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="bg-blue-600 py-6 px-8">
              <h2 className="text-3xl font-bold text-white">Get in touch</h2>
              <p className="text-blue-100 mt-2">
                Ready to start your digital transformation? Reach out to us today
              </p>
            </div>
            <div className="p-8">
              <ContactSection />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

