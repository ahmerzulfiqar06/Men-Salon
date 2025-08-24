import Link from 'next/link'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Classic Cut', href: '/services' },
      { name: 'Beard Trim', href: '/services' },
      { name: 'Hot Towel Shave', href: '/services' },
      { name: 'Hair Styling', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Book Appointment', href: '/book' },
    ],
  },
  {
    title: 'Information',
    links: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Policies', href: '/pricing' },
      { name: 'Gift Cards', href: '/contact' },
      { name: 'Reviews', href: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold text-amber-500 mb-4 block">
              CLIPPERZ
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional men&apos;s salon and barber shop providing expert cuts, 
              premium service, and modern style in a comfortable environment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-300">
                  {process.env.NEXT_PUBLIC_SALON_ADDRESS || '123 Main Street, Anytown, ST 12345'}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a 
                  href={`tel:${process.env.NEXT_PUBLIC_SALON_PHONE || '5551234567'}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {process.env.NEXT_PUBLIC_SALON_PHONE || '(555) 123-4567'}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <a 
                  href={`mailto:${process.env.NEXT_PUBLIC_SALON_EMAIL_TO || 'info@clipperz.com'}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {process.env.NEXT_PUBLIC_SALON_EMAIL_TO || 'info@clipperz.com'}
                </a>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hours Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h3 className="font-semibold text-white mb-3 flex items-center">
                <Clock className="h-5 w-5 text-amber-500 mr-2" />
                Business Hours
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                <div>Saturday: 8:00 AM - 6:00 PM</div>
                <div>Sunday: 10:00 AM - 4:00 PM</div>
              </div>
            </div>
            
            {/* WhatsApp Link */}
            {process.env.NEXT_PUBLIC_SALON_WHATSAPP_URL && (
              <a
                href={process.env.NEXT_PUBLIC_SALON_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CLIPPERZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
