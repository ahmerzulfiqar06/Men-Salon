'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Clock, Shield, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const packages = [
  {
    name: 'Essential',
    price: 35,
    originalPrice: null,
    duration: '30 min',
    description: 'Perfect for a quick, professional refresh',
    features: [
      'Classic Cut',
      'Basic Styling',
      'Hot Towel Finish',
      'Style Consultation'
    ],
    popular: false,
    image: '/images/essential-package.jpg'
  },
  {
    name: 'Gentleman',
    price: 65,
    originalPrice: 75,
    duration: '60 min',
    description: 'Most popular choice for complete grooming',
    features: [
      'Premium Cut & Style',
      'Beard Trim & Shape',
      'Hot Towel Treatment',
      'Hair Wash & Condition',
      'Styling Products',
      'Style Consultation'
    ],
    popular: true,
    image: '/images/gentleman-package.jpg'
  },
  {
    name: 'Executive',
    price: 120,
    originalPrice: 145,
    duration: '90 min',
    description: 'Ultimate grooming experience for the modern gentleman',
    features: [
      'Premium Cut & Style',
      'Beard Trim & Shape',
      'Hot Towel Shave',
      'Eyebrow Trim',
      'Scalp Massage',
      'Hair Wash & Condition',
      'Premium Product Application',
      'Detailed Style Consultation',
      'Aftercare Kit'
    ],
    popular: false,
    image: '/images/executive-package.jpg'
  }
]

const addOnServices = [
  { name: 'Hot Towel Treatment', price: 10 },
  { name: 'Hair Wash & Condition', price: 15 },
  { name: 'Scalp Massage', price: 20 },
  { name: 'Premium Beard Oil', price: 25 },
  { name: 'Eyebrow Trim', price: 20 },
  { name: 'Face Cleansing', price: 15 }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
}

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Pricing Packages
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect package for your grooming needs. All packages include expert consultation 
            and use of premium products.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 pt-6"
        >
          {packages.map((pkg, index) => (
            <motion.div key={pkg.name} variants={itemVariants}>
              <Card className={`h-full relative ${
                pkg.popular 
                  ? 'ring-2 ring-amber-500 shadow-lg scale-105' 
                  : 'hover:shadow-lg'
              } transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-amber-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="relative h-48 w-full">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} Package`}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2" />
                      {pkg.duration}
                    </div>
                  </div>
                </div>

                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-amber-600">${pkg.price}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-400 line-through">${pkg.originalPrice}</span>
                      )}
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-sm text-green-600 font-medium">
                        Save ${pkg.originalPrice - pkg.price}
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600">{pkg.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${pkg.popular ? 'bg-amber-600 hover:bg-amber-700' : ''}`}
                    size="lg"
                    asChild
                  >
                    <Link href="/book">Book {pkg.name}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Add-On Services */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Add-On Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance any package with these premium add-on services
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOnServices.map((service, index) => (
                <div key={service.name} className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm">
                  <span className="font-medium text-gray-900">{service.name}</span>
                  <span className="text-amber-600 font-bold">+${service.price}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Add-on services can be included with any package during booking
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Policies Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Policies & Information
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Booking Policy */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 text-green-500 mr-3" />
                    Booking Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Reservations</h4>
                    <p className="text-gray-600 text-sm">
                      We recommend booking appointments in advance. Walk-ins are welcome based on availability.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Confirmation</h4>
                    <p className="text-gray-600 text-sm">
                      All appointments will be confirmed within 24 hours of booking. You&apos;ll receive email confirmation and calendar invitation.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Changes</h4>
                    <p className="text-gray-600 text-sm">
                      Appointment changes can be made up to 4 hours before your scheduled time. Call us for assistance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cancellation Policy */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="h-6 w-6 text-amber-500 mr-3" />
                    Cancellation & No-Show Policy
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cancellation</h4>
                    <p className="text-gray-600 text-sm">
                      Please provide at least 4 hours notice for cancellations. Same-day cancellations may incur a $15 fee.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">No-Show Policy</h4>
                    <p className="text-gray-600 text-sm">
                      No-shows will be charged 50% of the service price. After 2 no-shows, future appointments may require prepayment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Late Arrivals</h4>
                    <p className="text-gray-600 text-sm">
                      Please arrive 5 minutes early. Late arrivals may result in shortened service time or rescheduling.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Payment Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="bg-gray-900 text-white rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Payment & Gift Cards</h2>
              <p className="text-gray-300">
                We accept all major payment methods and offer gift cards for the perfect present
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold mb-3">Accepted Payments</h3>
                <p className="text-gray-300 text-sm">
                  Cash, Credit Cards, Debit Cards, Apple Pay, Google Pay
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Gift Cards</h3>
                <p className="text-gray-300 text-sm">
                  Available in any amount. Perfect for birthdays, holidays, or special occasions.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Gratuity</h3>
                <p className="text-gray-300 text-sm">
                  Tips are appreciated but never required. Your satisfaction is our priority.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="bg-amber-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience CLIPPERZ?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your preferred package today and discover why we&apos;re the city&apos;s premier men&apos;s salon
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-amber-600 hover:bg-gray-100 font-semibold" asChild>
                  <Link href="/book">Book Now</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent font-semibold transition-all duration-200" 
                  asChild
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
