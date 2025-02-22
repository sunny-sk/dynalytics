import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">our services</h2>
            <p className="text-gray-600 text-lg">
              we provide comprehensive solutions to help businesses thrive in the digital age
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">•</span> {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="group-hover:bg-blue-50">
                  <Link href={`/services/${service.slug}`}>
                    learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}