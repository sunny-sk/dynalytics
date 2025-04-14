import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Dynalytics',
  description: 'Explore our comprehensive data analytics services designed to transform your business data into actionable insights.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-700 text-white py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/data-pattern.png')] bg-repeat"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>
      </div>
      
      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">How We Help Businesses</h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            At Dynalytics, we offer end-to-end data analytics services designed to help organizations 
            of all sizes harness the power of their data. Our expert team combines technical expertise 
            with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        
        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Service 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="h-3 bg-blue-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Data Analytics</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Transform raw data into actionable insights with our comprehensive analytics services. 
                We help you identify patterns, trends, and correlations that drive business decisions.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Descriptive Analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Predictive Analytics
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Prescriptive Analytics
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="h-3 bg-purple-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Data Visualization</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Convert complex data into clear, compelling visuals that tell a story. Our visualization 
                solutions make it easy to communicate insights across your organization.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Interactive Dashboards
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Custom Reports
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Real-time Monitoring
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="h-3 bg-green-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Machine Learning</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Leverage the power of AI and machine learning to automate processes, predict outcomes, 
                and gain competitive advantage in your industry.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Predictive Modeling
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Anomaly Detection
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Natural Language Processing
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 4 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="h-3 bg-red-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Data Engineering</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Build robust data pipelines and infrastructure to collect, process, and store your data 
                efficiently and securely.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  ETL Pipeline Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Data Warehousing
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Cloud Integration
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 5 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="h-3 bg-yellow-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Consulting & Strategy</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Get expert guidance on developing and implementing a data strategy that aligns with your 
                business goals and maximizes ROI.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Data Strategy Development
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Technology Assessment
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Process Optimization
                </li>
              </ul>
            </div>
          </div>
          
          {/* Service 6 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
            <div className="h-3 bg-teal-500"></div>
            <div className="p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Training & Support</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Empower your team with the knowledge and skills they need to leverage data effectively 
                through customized training programs and ongoing support.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Customized Workshops
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Technical Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Knowledge Transfer
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Process Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700">Our Approach</h2>
          <div className="relative">
            {/* Process Timeline */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">1. Discovery</h3>
                  <p className="text-gray-600">
                    We begin by understanding your business goals, challenges, and data landscape 
                    to identify opportunities for improvement.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:w-16 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold z-10">
                    1
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none"></div>
                <div className="mt-6 md:mt-0 md:w-16 flex justify-center order-first md:order-none">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold z-10">
                    2
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 order-last md:order-none">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">2. Strategy</h3>
                  <p className="text-gray-600">
                    We develop a tailored strategy and roadmap that aligns with your objectives 
                    and maximizes the value of your data assets.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">3. Implementation</h3>
                  <p className="text-gray-600">
                    Our expert team executes the strategy, building and deploying solutions 
                    that meet your specific requirements.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:w-16 flex justify-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold z-10">
                    3
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-none"></div>
                <div className="mt-6 md:mt-0 md:w-16 flex justify-center order-first md:order-none">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold z-10">
                    4
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 order-last md:order-none">
                  <h3 className="text-2xl font-bold mb-3 text-indigo-600">4. Optimization</h3>
                  <p className="text-gray-600">
                    We continuously monitor, evaluate, and refine our solutions to ensure 
                    they deliver maximum value and adapt to changing needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-indigo-700 text-white rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto">
          <div className="p-10 md:p-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Ready to Transform Your Data?</h2>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto">
              Let&apos;s discuss how our data analytics services can help your organization make better decisions, 
              optimize operations, and drive growth.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="bg-white text-indigo-700 hover:bg-indigo-50 transition-colors duration-300 font-bold py-3 px-8 rounded-full text-lg shadow-md">
                Get Started
              </a>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700">What Our Clients Say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-indigo-500 transform rotate-45"></div>
              <p className="text-gray-600 italic mb-6">
              &quot;Dynalytics transformed our approach to customer data. Their analytics solution helped us 
                identify key trends that increased our customer retention by 27% in just six months.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">CTO, TechNova Inc.</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-indigo-500 transform rotate-45"></div>
              <p className="text-gray-600 italic mb-6">
              &quot;The predictive analytics model developed by Dynalytics has been a game-changer for our 
                inventory management. We&apos;ve reduced costs by 18% while improving product availability.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">Operations Director, Global Retail</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-indigo-500 transform rotate-45"></div>
              <p className="text-gray-600 italic mb-6">
              &quot;Working with Dynalytics has given us confidence in our data strategy. Their team&apos;s expertise 
                and collaborative approach made the entire process smooth and effective.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Emily Rodriguez</h4>
                  <p className="text-gray-500 text-sm">VP of Analytics, FinServe Group</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-indigo-500 transform rotate-45"></div>
              <p className="text-gray-600 italic mb-6">
              &quot;The custom dashboard Dynalytics created has become an essential tool for our executive team. 
                It provides real-time insights that drive our strategic decisions every day.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">David Thompson</h4>
                  <p className="text-gray-500 text-sm">CEO, Innovate Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-indigo-700">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How long does it typically take to implement a data analytics solution?</h3>
              <p className="text-gray-600">
                Implementation timelines vary based on the complexity of your needs and the state of your existing data infrastructure. 
                Simple dashboard projects can be completed in 2-4 weeks, while comprehensive analytics platforms might take 2-3 months. 
                During our initial consultation, we&apos;ll provide a more specific timeline for your project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Do we need to have technical expertise to use your solutions?</h3>
              <p className="text-gray-600">
                No, our solutions are designed with user-friendliness in mind. While having some technical knowledge can be helpful, 
                we build intuitive interfaces that non-technical users can navigate easily. We also provide comprehensive training 
                to ensure your team can effectively use and benefit from our solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">How do you ensure the security of our data?</h3>
              <p className="text-gray-600">
                Data security is our top priority. We implement industry-leading security measures including encryption, 
                secure authentication, regular security audits, and compliance with relevant data protection regulations. 
                We&apos;re happy to discuss our security protocols in detail during our consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Can your solutions integrate with our existing systems?</h3>
              <p className="text-gray-600">
                Yes, our solutions are designed to integrate seamlessly with a wide range of existing systems and data sources. 
                Whether you&apos;re using CRM software, ERP systems, or custom applications, we can build connectors to ensure 
                smooth data flow and unified analytics.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}