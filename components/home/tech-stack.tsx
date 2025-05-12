import Image from 'next/image';

export default function TechStack() {
  const technologies = [
    { name: 'React', logo: '/images/tech/react.svg' },
    { name: 'Next.js', logo: '/images/tech/nextjs.svg' },
    { name: 'Node.js', logo: '/images/tech/nodejs.svg' },
    { name: 'Python', logo: '/images/tech/python.svg' },
    { name: 'AWS', logo: '/images/tech/aws.svg' },
    { name: 'MongoDB', logo: '/images/tech/mongodb.svg' },
    { name: 'Docker', logo: '/images/tech/docker.svg' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Technology Stack</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build robust, scalable, and high-performance solutions for our clients
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 relative mb-4">
                <Image
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-800">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}