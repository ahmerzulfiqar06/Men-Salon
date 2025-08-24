'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Star, MapPin, Clock, Phone, Scissors, Users, Shield, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import HeroParallax from '@/components/HeroParallax'

const services = [
  {
    name: 'Classic Cut',
    description: 'Traditional haircut with scissors and clippers',
    price: 'from $35',
    duration: '30 min',
    image: '/images/classic-cut.jpg'
  },
  {
    name: 'Premium Cut & Style',
    description: 'Complete styling with modern techniques',
    price: 'from $50',
    duration: '45 min',
    image: '/images/premium-cut.jpg'
  },
  {
    name: 'Beard Trim',
    description: 'Professional beard trimming and shaping',
    price: 'from $25',
    duration: '20 min',
    image: '/images/beard-trim.jpg'
  },
  {
    name: 'Hot Towel Shave',
    description: 'Traditional wet shave with hot towel treatment',
    price: 'from $45',
    duration: '45 min',
    image: '/images/hot-towel-shave.jpg'
  }
]

const testimonials = [
  {
    name: 'Michael Johnson',
    rating: 5,
    text: 'Best haircut I\'ve had in years! The attention to detail is incredible.',
    image: '/images/testimonial-1.jpg'
  },
  {
    name: 'David Rodriguez',
    rating: 5,
    text: 'Professional service, great atmosphere, and amazing barbers. Highly recommend!',
    image: '/images/testimonial-2.jpg'
  },
  {
    name: 'James Wilson',
    rating: 5,
    text: 'The hot towel shave was an incredible experience. Will definitely be back.',
    image: '/images/testimonial-3.jpg'
  }
]

const stats = [
  { icon: Users, label: 'Happy Clients', value: '5000+' },
  { icon: Award, label: 'Years Experience', value: '15+' },
  { icon: Star, label: 'Average Rating', value: '4.9' },
  { icon: Scissors, label: 'Services Daily', value: '50+' }
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

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroParallax />

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Premium Services
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience exceptional grooming with our expert barbers and premium services
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-amber-600 font-semibold">{service.price}</span>
                      <span className="text-gray-500 text-sm">{service.duration}</span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href="/book">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center">
                <stat.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Affordable Excellence
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Premium grooming services at competitive prices. Quality you can trust, value you'll appreciate.
            </motion.p>

            <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">$35</div>
                  <div className="text-gray-600">Starting Price</div>
                  <div className="text-sm text-gray-500 mt-1">Classic Cut</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">$65</div>
                  <div className="text-gray-600">Most Popular</div>
                  <div className="text-sm text-gray-500 mt-1">Cut & Beard Combo</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-amber-600 mb-2">$120</div>
                  <div className="text-gray-600">Premium Package</div>
                  <div className="text-sm text-gray-500 mt-1">Full Service</div>
                </div>
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/pricing">View All Packages</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={testimonial.name} variants={itemVariants}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center">
                      <div className="relative h-12 w-12 mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">Verified Customer</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Salon</h2>
              <p className="text-xl text-gray-600 mb-8">
                Conveniently located in the heart of the city with ample parking available.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      {process.env.NEXT_PUBLIC_SALON_ADDRESS || '123 Main Street, Anytown, ST 12345'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <div>Monday - Friday: 9:00 AM - 7:00 PM</div>
                      <div>Saturday: 8:00 AM - 6:00 PM</div>
                      <div>Sunday: 10:00 AM - 4:00 PM</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contact</h3>
                    <p className="text-gray-600">
                      {process.env.NEXT_PUBLIC_SALON_PHONE || '(555) 123-4567'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Directions</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative h-96 lg:h-full min-h-[400px]">
              <Image
                src="/images/salon-exterior.jpg"
                alt="CLIPPERZ Salon Exterior"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Best Look?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Book your appointment today and experience the CLIPPERZ difference. 
              Professional service, exceptional results.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" asChild>
                <Link href="/book">Book Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900" 
                asChild
              >
                <Link href="/contact">Call Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
