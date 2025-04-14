import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Our services</h2>
          <p className="text-base md:text-lg text-gray-600">
            we provide comprehensive solutions to help businesses thrive in the digital age
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-4 md:p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contains group-hover:scale-100 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild 
                variant="outline" 
                className="w-full md:w-auto group-hover:bg-blue-50"
              >
                <Link href={`/services/${service.slug}`} className="flex items-center justify-center">
                  learn more 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}