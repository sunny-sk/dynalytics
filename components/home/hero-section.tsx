'use client'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("/images/grid-pattern.svg")',
          backgroundSize: '30px 30px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Data-driven solutions for modern businesses
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
                Transform your business with advanced analytics, custom software
                solutions, and expert consulting services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                <button className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="flex-1 w-full max-w-xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <Carousel 
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/images/1.svg"
                        alt="Analytics Dashboard"
                        width={600}
                        height={400}
                        className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/images/2.svg"
                        alt="Data Visualization"
                        width={600}
                        height={400}
                        className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src="/images/3.svg"
                        alt="Business Intelligence"
                        width={600}
                        height={400}
                        className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
