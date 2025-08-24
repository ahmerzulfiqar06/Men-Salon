'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, User, Mail, Phone, MessageSquare, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { bookingSchema, BookingFormData } from '@/lib/validations'
import { downloadIcsFile } from '@/lib/ics'

const services = [
  { value: 'classic-cut', label: 'Classic Cut', duration: '30 min', price: 35 },
  { value: 'premium-cut', label: 'Premium Cut & Style', duration: '45 min', price: 50 },
  { value: 'beard-trim', label: 'Beard Trim', duration: '20 min', price: 25 },
  { value: 'hot-towel-shave', label: 'Hot Towel Shave', duration: '45 min', price: 45 },
  { value: 'cut-and-beard', label: 'Cut & Beard Combo', duration: '60 min', price: 65 },
  { value: 'head-shave', label: 'Head Shave', duration: '30 min', price: 40 },
]

const addOns = [
  { value: 'hot-towel', label: 'Hot Towel Treatment', price: 10 },
  { value: 'hair-wash', label: 'Hair Wash & Condition', price: 15 },
  { value: 'scalp-massage', label: 'Scalp Massage', price: 20 },
  { value: 'beard-oil', label: 'Premium Beard Oil', price: 25 },
]

const barbers = [
  { value: 'any', label: 'No Preference' },
  { value: 'mike', label: 'Mike Rodriguez' },
  { value: 'david', label: 'David Chen' },
  { value: 'alex', label: 'Alex Thompson' },
  { value: 'james', label: 'James Wilson' },
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM'
]

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([])
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      addOns: [],
    },
  })

  const selectedService = watch('service')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    
    try {
      // For static deployment, we'll create a mailto link with booking details
      const bookingDetails = `
Booking Request Details:

Service: ${data.service}
Add-ons: ${data.addOns.length > 0 ? data.addOns.join(', ') : 'None'}
${data.barber && data.barber !== 'any' ? `Barber Preference: ${data.barber}` : ''}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}

Customer Information:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.notes ? `Notes: ${data.notes}` : ''}

Estimated Total: $${totalPrice}
      `.trim()

      const subject = 'Booking Request - CLIPPERZ Salon'
      const mailtoLink = `mailto:${process.env.NEXT_PUBLIC_SALON_EMAIL_TO || 'info@clipperz.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bookingDetails)}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Show success state
      setSubmittedData(data)
      setIsSuccess(true)
      reset()
      setSelectedAddOns([])
    } catch (error) {
      console.error('Booking submission error:', error)
      alert('Failed to open email client. Please call us directly at ' + (process.env.NEXT_PUBLIC_SALON_PHONE || '(555) 123-4567'))
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAddOnToggle = (addOnValue: string) => {
    const updatedAddOns = selectedAddOns.includes(addOnValue)
      ? selectedAddOns.filter(item => item !== addOnValue)
      : [...selectedAddOns, addOnValue]
    
    setSelectedAddOns(updatedAddOns)
    setValue('addOns', updatedAddOns)
  }

  const handleDownloadCalendar = () => {
    if (submittedData) {
      downloadIcsFile(submittedData)
    }
  }

  const selectedServiceData = services.find(s => s.value === selectedService)
  const totalAddOnPrice = selectedAddOns.reduce((total, addOnValue) => {
    const addOn = addOns.find(a => a.value === addOnValue)
    return total + (addOn?.price || 0)
  }, 0)
  const totalPrice = (selectedServiceData?.price || 0) + totalAddOnPrice

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-lg text-gray-600 mb-6">
            Your email client should have opened with your booking details. Please send the email and we&apos;ll contact you within 24 hours to confirm your appointment.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left max-w-md mx-auto">
          <h3 className="font-semibold mb-4">Booking Details:</h3>
          {submittedData && (
            <div className="space-y-2 text-sm">
              <div><strong>Service:</strong> {submittedData.service}</div>
              {submittedData.addOns.length > 0 && (
                <div><strong>Add-ons:</strong> {submittedData.addOns.join(', ')}</div>
              )}
              {submittedData.barber && submittedData.barber !== 'any' && (
                <div><strong>Barber:</strong> {submittedData.barber}</div>
              )}
              <div><strong>Date:</strong> {submittedData.preferredDate}</div>
              <div><strong>Time:</strong> {submittedData.preferredTime}</div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <Button onClick={handleDownloadCalendar} variant="outline" size="lg">
            <CalendarDays className="h-5 w-5 mr-2" />
            Download Calendar Event
          </Button>
          <div>
            <Button onClick={() => setIsSuccess(false)} size="lg">
              Book Another Appointment
            </Button>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Service Selection */}
      <div>
        <Label className="text-base font-semibold flex items-center mb-3">
          <User className="h-5 w-5 mr-2" />
          Select Service *
        </Label>
        <Select onValueChange={(value) => setValue('service', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                <div className="flex justify-between items-center w-full">
                  <div>
                    <div className="font-medium">{service.label}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                  <div className="text-sm font-medium ml-4">${service.price}</div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && (
          <p className="text-sm text-red-600 mt-1">{errors.service.message}</p>
        )}
      </div>

      {/* Add-ons */}
      {selectedService && (
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Add-ons (Optional)
          </Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addOns.map((addOn) => (
              <label
                key={addOn.value}
                className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-all ${
                  selectedAddOns.includes(addOn.value)
                    ? 'border-amber-500 bg-amber-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div>
                  <div className="font-medium">{addOn.label}</div>
                  <div className="text-sm text-gray-500">+${addOn.price}</div>
                </div>
                <input
                  type="checkbox"
                  checked={selectedAddOns.includes(addOn.value)}
                  onChange={() => handleAddOnToggle(addOn.value)}
                  className="rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                />
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Total Price */}
      {selectedService && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Estimated Total:</span>
            <span className="text-xl font-bold text-amber-600">${totalPrice}</span>
          </div>
        </div>
      )}

      {/* Barber Preference */}
      <div>
        <Label className="text-base font-semibold mb-3 block">
          Barber Preference
        </Label>
        <Select onValueChange={(value) => setValue('barber', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Choose a barber (optional)" />
          </SelectTrigger>
          <SelectContent>
            {barbers.map((barber) => (
              <SelectItem key={barber.value} value={barber.value}>
                {barber.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="preferredDate" className="text-base font-semibold flex items-center mb-3">
            <CalendarDays className="h-5 w-5 mr-2" />
            Preferred Date *
          </Label>
          <Input
            id="preferredDate"
            type="date"
            min={new Date().toISOString().split('T')[0]}
            {...register('preferredDate')}
            className="w-full"
          />
          {errors.preferredDate && (
            <p className="text-sm text-red-600 mt-1">{errors.preferredDate.message}</p>
          )}
        </div>

        <div>
          <Label className="text-base font-semibold flex items-center mb-3">
            <Clock className="h-5 w-5 mr-2" />
            Preferred Time *
          </Label>
          <Select onValueChange={(value) => setValue('preferredTime', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.preferredTime && (
            <p className="text-sm text-red-600 mt-1">{errors.preferredTime.message}</p>
          )}
        </div>
      </div>

      {/* Personal Information */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name" className="text-base font-semibold flex items-center mb-3">
              <User className="h-5 w-5 mr-2" />
              Full Name *
            </Label>
            <Input
              id="name"
              {...register('name')}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-base font-semibold flex items-center mb-3">
              <Phone className="h-5 w-5 mr-2" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone')}
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <Label htmlFor="email" className="text-base font-semibold flex items-center mb-3">
            <Mail className="h-5 w-5 mr-2" />
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder="your.email@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Notes */}
      <div>
        <Label htmlFor="notes" className="text-base font-semibold flex items-center mb-3">
          <MessageSquare className="h-5 w-5 mr-2" />
          Additional Notes
        </Label>
        <Textarea
          id="notes"
          {...register('notes')}
          placeholder="Any special requests or notes for your appointment..."
          rows={3}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Book Appointment'}
      </Button>

      <p className="text-sm text-gray-600 text-center">
        We&apos;ll contact you within 24 hours to confirm your appointment details.
      </p>
    </form>
  )
}
