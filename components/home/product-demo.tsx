'use client'

import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ProductDemo() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const features = [
    {
      title: "real-time analytics",
      description: "monitor your business metrics in real-time with interactive dashboards",
      image: "/images/demo/analytics-dashboard.png"
    },
    {
      title: "predictive insights",
      description: "leverage ai-powered predictions to make data-driven decisions",
      image: "/images/demo/predictive-insights.png"
    },
    {
      title: "automated reporting",
      description: "generate comprehensive reports automatically with customizable templates",
      image: "/images/demo/automated-reports.png"
    }
  ]

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            see our platform in action
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            discover how our solutions can transform your business operations
          </motion.p>
        </div>

        <div ref={ref} className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="bg-white p-4 rounded-lg shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="text-blue-600 text-lg mb-2">✓</div>
                    <div className="text-sm">real-time updates</div>
                  </motion.div>
                  <motion.div
                    className="bg-white p-4 rounded-lg shadow-sm"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="text-blue-600 text-lg mb-2">✓</div>
                    <div className="text-sm">interactive charts</div>
                  </motion.div>
                </div>
              </div>
              <motion.div 
                className="flex-1"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}