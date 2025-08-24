'use client'

import { motion } from 'framer-motion'
import BookingForm from '@/components/BookingForm'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, CheckCircle, AlertCircle } from 'lucide-react'

const benefits = [
  {
    icon: CheckCircle,
    title: 'Confirmed Appointment',
    description: 'Receive email confirmation and calendar invite'
  },
  {
    icon: Clock,
    title: 'No Waiting',
    description: 'Skip the wait with your reserved time slot'
  },
  {
    icon: AlertCircle,
    title: 'Easy Changes',
    description: 'Modify or cancel up to 4 hours before'
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

export default function BookPage() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Book Your Appointment
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your service, preferred time, and barber. We'll confirm your appointment 
            within 24 hours and send you a calendar invitation.
          </motion.p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={benefit.title} variants={itemVariants}>
              <Card className="text-center p-6 bg-white">
                <CardContent className="p-0">
                  <benefit.icon className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Booking Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <BookingForm />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="bg-amber-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Submit Request',
                  description: 'Fill out the booking form with your preferences'
                },
                {
                  step: '2',
                  title: 'Confirmation',
                  description: 'We\'ll confirm your appointment within 24 hours'
                },
                {
                  step: '3',
                  title: 'Preparation',
                  description: 'Receive email confirmation and calendar invite'
                },
                {
                  step: '4',
                  title: 'Your Visit',
                  description: 'Arrive 5 minutes early for your appointment'
                }
              ].map((step, index) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {step.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-gray-600 mb-6">
              If you have questions or need assistance with your booking, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${process.env.NEXT_PUBLIC_SALON_PHONE || '5551234567'}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
              >
                Call Us: {process.env.NEXT_PUBLIC_SALON_PHONE || '(555) 123-4567'}
              </a>
              {process.env.NEXT_PUBLIC_SALON_WHATSAPP_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_SALON_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  WhatsApp Us
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
