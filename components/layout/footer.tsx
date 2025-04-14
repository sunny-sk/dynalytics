import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Dynalytics</h3>
            <p className="text-sm">transforming businesses through innovative software solutions</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Development</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/software-development" className="hover:text-white transition-colors">Custom Software</Link></li>
              <li><Link href="/services/data-analytics" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-white transition-colors">Mobile App Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">about us</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">case studies</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>email: hello@dynalytics.com</li>
              <li>phone: (555) 123-4567</li>
              <li>location: san francisco, ca</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} dynalytics. all rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}