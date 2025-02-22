'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ProductDemo() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    {
      title: "real-time analytics",
      description: "monitor your business metrics in real-time with interactive dashboards",
      image: "/images/demo/analytics-dashboard.png",
      benefits: [
        "instant data visualization",
        "customizable dashboards",
        "performance metrics",
        "real-time alerts"
      ]
    },
    {
      title: "predictive insights",
      description: "leverage ai-powered predictions to make data-driven decisions",
      image: "/images/demo/predictive-insights.png",
      benefits: [
        "trend analysis",
        "forecasting models",
        "risk assessment",
        "market predictions"
      ]
    },
    {
      title: "automated reporting",
      description: "generate comprehensive reports automatically with customizable templates",
      image: "/images/demo/automated-reports.png",
      benefits: [
        "scheduled reports",
        "custom templates",
        "data export",
        "multi-format support"
      ]
    }
  ]

  return (
    <section className="py-12 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            see our platform in action
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            discover how our solutions can transform your business operations
          </motion.p>
        </div>

        <div ref={ref} className="space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {feature.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
                <Button asChild variant="outline" className="group hidden md:inline-flex">
                  <Link href="/demo">
                    try it now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <motion.div 
                className="flex-1 w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-video">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}