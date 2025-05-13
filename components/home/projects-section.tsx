'use client'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cybees",
    description: "A comprehensive dashboard for visualizing complex data sets with interactive charts and real-time updates.",
    image: "/images/projects/project1.jpg",
    technologies: ["React-Native", "Node.js", "MongoDB", "AWS", 'React.Js'],
    link: "https://play.google.com/store/apps/details?id=com.bytebrackets.cybees&hl=en"
  },
  {
    id: 2,
    title: "NowYouKnow",
    description: "AI-powered system that predicts equipment failures before they occur, reducing downtime and maintenance costs.",
    image: "/images/projects/project2.jpg",
    technologies: ["React-Native", "Node.js", 'Redis', "MongoDB", "AWS", 'CDN'],
    link: "https://play.google.com/store/apps/details?id=com.nowyouknow&hl=en"
  },
  {
    id: 3,
    title: "Web scrapping ingestion",
    description: "End-to-end solution for optimizing supply chain operations using advanced analytics and machine learning.",
    image: "/images/projects/project3.jpg",
    technologies: ["Python", "AWS", "Docker", "Scrapy"],
    link: ""
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6">Featured <span className="text-blue-400">Projects</span></h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Innovative solutions that transform data into actionable insights and drive business growth
          </p>
        </motion.div>
        
        {/* Horizontal scrolling cards layout */}
        <div className="relative overflow-hidden">
          <div className="flex justify-start md:justify-center space-x-8 pb-12 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    delay: index * 0.2,
                    duration: 0.6
                  }
                } : { opacity: 0, x: 100 }}
                className="flex-shrink-0 w-[350px] snap-center"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl overflow-hidden h-[480px] border border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 group">
                  {/* Project Number */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-800/50 flex items-center justify-center text-blue-200 font-bold">
                    {index + 1}
                  </div>
                  
                  {/* Project Image */}
                  <div className="h-[180px] bg-blue-800/30 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <span className="text-white/50 text-xl font-light">Project Image</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/70"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold mb-3 text-blue-200 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-5 line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="px-3 py-1 bg-blue-900/80 text-blue-200 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Link */}
                    {project.link && (
                      <Link 
                        href={project.link} 
                        className="inline-flex items-center text-blue-300 hover:text-blue-100 font-medium"
                      >
                        <span>View Project</span>
                        <svg 
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {projects.map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 rounded-full ${index === activeProject - 1 ? 'bg-blue-400' : 'bg-blue-800/50'}`}
              />
            ))}
          </div>
        </div>
        
        {/* Featured Project - Larger Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 bg-blue-900/20 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-400/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="h-[300px] lg:h-auto bg-blue-800/30 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/50 text-2xl font-light">Featured Project</span>
              </div>
            </div>
            <div className="p-8 lg:p-10">
              <div className="text-blue-300 text-sm font-medium mb-2">FEATURED PROJECT</div>
              <h3 className="text-3xl font-bold mb-4 text-white">Influencer Marketplace Platform</h3>
              <p className="text-gray-300 mb-6">
                Our flagship analytics platform combines real-time data processing with advanced visualization tools, 
                enabling businesses to make data-driven decisions faster and more accurately than ever before.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-900/80 text-blue-200 text-xs font-medium rounded-full">React</span>
                <span className="px-3 py-1 bg-blue-900/80 text-blue-200 text-xs font-medium rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-blue-900/80 text-blue-200 text-xs font-medium rounded-full">Firebase</span>
                <span className="px-3 py-1 bg-blue-900/80 text-blue-200 text-xs font-medium rounded-full">AWS</span>
              </div>
              <Link 
                href="https://brands.cybees.in/" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <span>Explore Project</span>
                <svg 
                  className="w-4 h-4 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-400 text-blue-300 hover:bg-blue-800/30 hover:text-white text-lg font-medium rounded-lg transition-all duration-300 group"
          >
            <span>View All Projects</span>
            <svg 
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}