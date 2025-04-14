import Image from 'next/image';
import Link from 'next/link';

export default function IndustriesSection() {
  const industries = [
    {
      name: 'Healthcare',
      description: 'Custom solutions for patient management, medical data analysis, and healthcare operations',
      icon: '/images/industries/healthcare.svg',
      link: '/industries/healthcare'
    },
    {
      name: 'Finance',
      description: 'Secure platforms for financial analysis, transaction processing, and regulatory compliance',
      icon: '/images/industries/finance.svg',
      link: '/industries/finance'
    },
    {
      name: 'Retail',
      description: 'Omnichannel solutions for inventory management, customer engagement, and sales analytics',
      icon: '/images/industries/retail.svg',
      link: '/industries/retail'
    },
    {
      name: 'Manufacturing',
      description: 'IoT and automation systems for production optimization, quality control, and supply chain',
      icon: '/images/industries/manufacturing.svg',
      link: '/industries/manufacturing'
    },
    {
      name: 'Education',
      description: 'Learning platforms, student management systems, and educational analytics tools',
      icon: '/images/industries/education.svg',
      link: '/industries/education'
    },
    {
      name: 'Technology',
      description: 'Cutting-edge solutions for SaaS platforms, cloud infrastructure, and tech startups',
      icon: '/images/industries/technology.svg',
      link: '/industries/technology'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We deliver tailored solutions across diverse industries, helping organizations overcome unique challenges and achieve their goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Link 
              href={industry.link} 
              key={industry.name}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-4 relative">
                <Image
                  src={industry.icon}
                  alt={`${industry.name} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}