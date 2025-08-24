'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, DollarSign, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { generateMetadata } from '@/lib/seo'

const services = [
  {
    id: 'classic-cut',
    name: 'Classic Cut',
    description: 'Traditional haircut using scissors and clippers with classic styling techniques. Perfect for a timeless, professional look.',
    duration: '30 minutes',
    price: 35,
    features: ['Consultation', 'Wash & Cut', 'Basic Styling', 'Hot Towel Finish'],
    image: '/images/classic-cut.jpg',
    popular: false
  },
  {
    id: 'premium-cut',
    name: 'Premium Cut & Style',
    description: 'Complete hair transformation with modern cutting techniques, premium products, and advanced styling.',
    duration: '45 minutes',
    price: 50,
    features: ['Detailed Consultation', 'Wash & Premium Cut', 'Advanced Styling', 'Product Application', 'Hot Towel Treatment'],
    image: '/images/premium-cut.jpg',
    popular: true
  },
  {
    id: 'beard-trim',
    name: 'Beard Trim & Shape',
    description: 'Professional beard trimming and shaping to complement your facial features and personal style.',
    duration: '20 minutes',
    price: 25,
    features: ['Beard Assessment', 'Precision Trimming', 'Edge Cleanup', 'Moisturizing Treatment'],
    image: '/images/beard-trim.jpg',
    popular: false
  },
  {
    id: 'hot-towel-shave',
    name: 'Hot Towel Shave',
    description: 'Traditional wet shave experience with hot towel preparation, premium shaving cream, and aftercare.',
    duration: '45 minutes',
    price: 45,
    features: ['Hot Towel Prep', 'Premium Shaving Cream', 'Straight Razor Shave', 'Aftershave Treatment', 'Moisturizer'],
    image: '/images/hot-towel-shave.jpg',
    popular: false
  },
  {
    id: 'cut-and-beard',
    name: 'Cut & Beard Combo',
    description: 'Complete grooming package combining our premium cut service with professional beard trimming.',
    duration: '60 minutes',
    price: 65,
    features: ['Full Consultation', 'Premium Haircut', 'Beard Trim & Shape', 'Styling', 'Hot Towel Finish'],
    image: '/images/cut-and-beard.jpg',
    popular: true
  },
  {
    id: 'head-shave',
    name: 'Head Shave',
    description: 'Complete head shave service using professional techniques for a smooth, clean finish.',
    duration: '30 minutes',
    price: 40,
    features: ['Scalp Preparation', 'Professional Shaving', 'Hot Towel Treatment', 'Moisturizing Care'],
    image: '/images/head-shave.jpg',
    popular: false
  },
  {
    id: 'eyebrow-trim',
    name: 'Eyebrow Trim',
    description: 'Precision eyebrow trimming and shaping to enhance your facial features.',
    duration: '15 minutes',
    price: 20,
    features: ['Brow Analysis', 'Precision Trimming', 'Shape Enhancement', 'Styling'],
    image: '/images/eyebrow-trim.jpg',
    popular: false
  },
  {
    id: 'deluxe-package',
    name: 'Deluxe Package',
    description: 'Ultimate grooming experience with all our premium services for the complete gentleman.',
    duration: '90 minutes',
    price: 120,
    features: ['Premium Cut & Style', 'Beard Trim & Shape', 'Hot Towel Shave', 'Eyebrow Trim', 'Scalp Massage', 'Premium Products'],
    image: '/images/deluxe-package.jpg',
    popular: false
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

export default function ServicesPage() {
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
            Our Services
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional grooming services tailored to your needs. Each service includes expert consultation 
            and premium products to ensure exceptional results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="relative h-64 w-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl flex items-start justify-between">
                    <span>{service.name}</span>
                    <span className="text-amber-600 font-bold text-xl">${service.price}</span>
                  </CardTitle>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    {service.duration}
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full" asChild>
                    <Link href="/book">Book This Service</Link>
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
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhance Your Experience
            </h2>
            <p className="text-lg text-gray-600">
              Add these premium services to any appointment for the ultimate grooming experience
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Hot Towel Treatment', price: 10, description: 'Relaxing hot towel application' },
                { name: 'Hair Wash & Condition', price: 15, description: 'Premium shampoo and conditioning' },
                { name: 'Scalp Massage', price: 20, description: 'Therapeutic scalp massage' },
                { name: 'Premium Beard Oil', price: 25, description: 'High-quality beard conditioning' }
              ].map((addon, index) => (
                <div key={addon.name} className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{addon.description}</p>
                    <div className="text-amber-600 font-bold">+${addon.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div variants={itemVariants} className="bg-amber-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Service?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Choose your preferred service and schedule your appointment today
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
                  <Link href="/book">Book Appointment</Link>
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
                  variant="outline" 
                  className="text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-amber-600 bg-transparent font-semibold" 
                  asChild
                >
                  <Link href="/contact">Ask Questions</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
