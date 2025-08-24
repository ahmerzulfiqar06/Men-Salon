'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Shield, Heart, Scissors, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const team = [
  {
    name: 'Mike Rodriguez',
    role: 'Master Barber & Owner',
    experience: '15+ years',
    specialties: ['Classic Cuts', 'Beard Styling', 'Hot Towel Shaves'],
    bio: 'Mike founded CLIPPERZ with a vision to bring traditional barbering into the modern era. With over 15 years of experience, he specializes in classic cuts and traditional techniques.',
    image: '/images/barber-mike.jpg'
  },
  {
    name: 'David Chen',
    role: 'Senior Barber',
    experience: '10+ years',
    specialties: ['Modern Styles', 'Fade Cuts', 'Hair Design'],
    bio: 'David brings modern styling techniques and creative flair to the team. He stays current with the latest trends while maintaining classic quality.',
    image: '/images/barber-david.jpg'
  },
  {
    name: 'Alex Thompson',
    role: 'Barber Stylist',
    experience: '8+ years',
    specialties: ['Precision Cuts', 'Scalp Treatments', 'Color Work'],
    bio: 'Alex combines technical precision with artistic vision. He specializes in detailed work and scalp treatments for overall hair health.',
    image: '/images/barber-alex.jpg'
  },
  {
    name: 'James Wilson',
    role: 'Junior Barber',
    experience: '5+ years',
    specialties: ['Student Cuts', 'Basic Styling', 'Beard Trims'],
    bio: 'James is our rising star, bringing fresh energy and dedication to every cut. He excels at working with clients of all ages.',
    image: '/images/barber-james.jpg'
  }
]

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for perfection in every cut, ensuring each client leaves looking and feeling their best.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Building lasting relationships with our clients and contributing positively to our local community.'
  },
  {
    icon: Shield,
    title: 'Trust',
    description: 'Maintaining the highest standards of professionalism, hygiene, and customer service.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our love for the craft of barbering drives us to continuously improve and innovate.'
  }
]

const gallery = [
  { src: '/images/salon-interior-1.jpg', alt: 'Modern salon interior with classic barber chairs' },
  { src: '/images/salon-interior-2.jpg', alt: 'Professional styling stations with premium tools' },
  { src: '/images/salon-interior-3.jpg', alt: 'Comfortable waiting area with modern amenities' },
  { src: '/images/salon-interior-4.jpg', alt: 'Private consultation area for personalized service' },
  { src: '/images/salon-tools.jpg', alt: 'Professional-grade barbering tools and equipment' },
  { src: '/images/salon-products.jpg', alt: 'Premium hair care and styling products' }
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

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Founded in 2008, CLIPPERZ has been dedicated to providing exceptional 
              men's grooming services with a perfect blend of traditional craftsmanship 
              and modern techniques.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              What started as a single chair operation has grown into the city's 
              premier destination for discerning gentlemen who appreciate quality, 
              precision, and personalized service.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">5000+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-96 lg:h-full min-h-[500px]">
              <Image
                src="/images/salon-story.jpg"
                alt="CLIPPERZ salon story - vintage barbering meets modern style"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the experience 
              we create for every client who walks through our doors.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <value.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our skilled barbers bring decades of combined experience and a passion 
              for the craft to ensure every client receives exceptional service.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {team.map((member, index) => (
              <motion.div key={member.name} variants={itemVariants}>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="relative h-32 w-32 mx-auto sm:mx-0 flex-shrink-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-grow text-center sm:text-left">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-amber-600 font-medium mb-2">{member.role}</p>
                        <div className="flex items-center justify-center sm:justify-start mb-3">
                          <Clock className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-gray-600 text-sm">{member.experience}</span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                          {member.specialties.map((specialty) => (
                            <span 
                              key={specialty}
                              className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full"
                            >
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hygiene & Tools Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Hygiene & Professional Tools
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We maintain the highest standards of cleanliness and use only 
                  professional-grade equipment to ensure your safety and comfort.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Sanitization Protocol</h3>
                      <p className="text-gray-600 text-sm">
                        All tools are thoroughly sanitized and sterilized between clients using hospital-grade disinfectants.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Scissors className="h-6 w-6 text-amber-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Premium Equipment</h3>
                      <p className="text-gray-600 text-sm">
                        We use only the finest professional scissors, clippers, and razors for precise, comfortable cuts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Heart className="h-6 w-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Health & Safety</h3>
                      <p className="text-gray-600 text-sm">
                        Licensed professionals follow strict health department guidelines and safety protocols.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative h-80">
                <Image
                  src="/images/professional-tools.jpg"
                  alt="Professional barbering tools and hygiene standards"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Gallery Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Inside CLIPPERZ
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look inside our modern salon where traditional barbering 
              meets contemporary comfort and style.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {gallery.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <div className="relative h-64 group overflow-hidden rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.div variants={itemVariants} className="bg-gray-900 text-white rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              "To provide every client with an exceptional grooming experience that combines 
              time-honored barbering traditions with modern techniques, premium products, 
              and personalized service in a welcoming, comfortable environment."
            </p>
            <div className="mt-8 text-amber-500 font-semibold">
              - Mike Rodriguez, Founder & Master Barber
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
