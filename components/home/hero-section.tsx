'use client'
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link";
import { ArrowRight, BarChart2, Database, LineChart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("/images/grid-pattern.svg")',
          backgroundSize: '30px 30px',
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 bg-blue-900/40 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-4 border border-blue-700/30">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                  Data Analytics & Business Intelligence
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Transform Your Business with Data-Driven Insights
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed opacity-90 max-w-2xl">
                Unlock the full potential of your data with our advanced analytics, 
                custom software solutions, and expert consulting services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-6">
                <Link 
                  href="/contact-us" 
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/services" 
                  className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 text-sm">
                <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <BarChart2 className="h-5 w-5 text-blue-300 mr-3" />
                  <span>Advanced Analytics</span>
                </div>
                <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Database className="h-5 w-5 text-blue-300 mr-3" />
                  <span>Data Management</span>
                </div>
                <div className="flex items-center p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <LineChart className="h-5 w-5 text-blue-300 mr-3" />
                  <span>Business Intelligence</span>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="flex-1 w-full max-w-xl mt-12 lg:mt-0">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-blue-400/30 rounded-tl-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-blue-400/30 rounded-br-xl"></div>
              
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 shadow-[0_20px_50px_rgba(8,_112,_184,_0.3)] border border-white/10">
                <Carousel 
                  plugins={[
                    Autoplay({
                      delay: 4000,
                    }),
                  ]}
                  className="w-full"
                  opts={{
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
                        <Image
                          src="/images/1.svg"
                          alt="Analytics Dashboard"
                          width={600}
                          height={400}
                          className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                          <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                          <p className="text-sm text-blue-100 mt-1 max-w-xs">Real-time insights to drive strategic business decisions</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
                        <Image
                          src="/images/2.svg"
                          alt="Data Visualization"
                          width={600}
                          height={400}
                          className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                          <h3 className="text-xl font-semibold">Data Visualization</h3>
                          <p className="text-sm text-blue-100 mt-1 max-w-xs">Interactive visual analytics that tell your data story</p>
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative overflow-hidden rounded-xl">
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent z-10"></div>
                        <Image
                          src="/images/3.svg"
                          alt="Business Intelligence"
                          width={600}
                          height={400}
                          className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-6 left-6 z-20 text-white">
                          <h3 className="text-xl font-semibold">Business Intelligence</h3>
                          <p className="text-sm text-blue-100 mt-1 max-w-xs">Strategic insights that power your business growth</p>
                        </div>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
                
                {/* Carousel indicators */}
                <div className="flex justify-center mt-4 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-blue-400/70"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="white" fillOpacity="0.05" d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
}
