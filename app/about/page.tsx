import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Dynalytics',
  description: 'Learn about Dynalytics - our mission, vision, and the team behind our data analytics platform.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/data-pattern.png')] bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">About Dynalytics</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
          Your Idea, Our Code, Real Impact
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Mission</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                At Dynalytics, we are on a mission to transform complex data into actionable insights. 
                We believe that data-driven decision making should be accessible to everyone, 
                regardless of their technical expertise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our platform combines powerful analytics capabilities with an intuitive interface, 
                enabling organizations to unlock the full potential of their data and drive meaningful outcomes.
              </p>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <div className="bg-blue-100 h-64 flex items-center justify-center">
                <svg className="w-32 h-32 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-blue-700">Our Story</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Founded in 2024, Dynalytics emerged from a simple observation: despite the abundance of data, 
                many organizations struggle to extract meaningful insights from it. Our founders, with backgrounds 
                in data science and user experience design, set out to bridge this gap.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we are proud to serve clients across various industries, helping them leverage data 
                to optimize operations, identify new opportunities, and stay ahead in an increasingly 
                data-driven world.
              </p>
            </div>
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
              <div className="bg-indigo-100 h-64 flex items-center justify-center">
                <svg className="w-32 h-32 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-700">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="h-2 bg-blue-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Innovation</h3>
                <p className="text-gray-600 leading-relaxed">We push boundaries by embracing cutting-edge technologies and fresh thinking—constantly evolving to deliver smarter, faster, and more impactful data solutions.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="h-2 bg-green-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Simplicity</h3>
                <p className="text-gray-600 leading-relaxed">We believe in making complex things simple. Our solutions are powerful yet 
                   intuitive, designed with the end user in mind.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">We uphold the highest standards of data privacy and security, ensuring that 
                   our clients&apos; information is always protected.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Our Team</h2>
          <p className="text-lg mb-10 text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
            Dynalytics is powered by a diverse team of data scientists, engineers, designers, 
            and business strategists, all united by a passion for data and its potential to 
            drive positive change.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team member placeholders - replace with actual team members */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <svg className="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Team Member {i}</h3>
                  <p className="text-blue-600 mb-4">Position</p>
                  <p className="text-gray-600">Short bio about the team member and their expertise.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}