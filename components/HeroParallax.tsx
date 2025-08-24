'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

interface HeroImage {
  src: string
  alt: string
}

const heroImages: HeroImage[] = [
  {
    src: '/images/barber-chair-hero.jpg',
    alt: 'Professional barber chair in modern salon'
  },
  {
    src: '/images/salon-interior-1.jpg',
    alt: 'Modern salon interior with professional equipment'
  },
  {
    src: '/images/professional-tools.jpg',
    alt: 'Professional barbering tools and equipment'
  },
  {
    src: '/images/salon-exterior.jpg',
    alt: 'CLIPPERZ salon exterior view'
  }
]

export default function HeroParallax() {
  const [mounted, setMounted] = useState<boolean>(false)
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-cycle through images
  useEffect(() => {
    if (!mounted || isPaused) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex: number) => 
        (prevIndex + 1) % heroImages.length
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [mounted, isPaused])

  if (!mounted) {
    return (
      <div className="h-screen bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-amber-500">CLIPPERZ</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the finest in men&apos;s grooming with our expert barbers and premium services
          </p>
          <Button size="lg" asChild>
            <Link href="/book">Book Your Appointment</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Parallax and Transitions */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority={currentImageIndex === 0}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Image Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroImages.map((_, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-amber-500 scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
      >
        <motion.div
          key={`content-${currentImageIndex}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            Welcome to{' '}
            <span className="text-amber-500">CLIPPERZ</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the finest in men&apos;s grooming with our expert barbers, 
            premium services, and modern atmosphere
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(245, 158, 11, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button size="lg" className="text-lg px-8 py-4 bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold" asChild>
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
                className="text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20 font-semibold" 
                asChild
              >
                <Link href="/services">View Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/70"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}