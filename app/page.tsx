
import HeroSection from "@/components/home/hero-section"
import ServicesSection from "@/components/home/service-section"
import IndustriesSection from "@/components/home/industries-section"
import ProjectsSection from "@/components/home/projects-section"
import { Metadata } from "next"
import TechStack from "@/components/home/tech-stack"

export const metadata:Metadata = {
  title: "Home",
  description: "Your website description",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IndustriesSection />
      <ServicesSection />
      <ProjectsSection />
      <TechStack />
    </main>
  )
}

