import { BookingFormData } from './validations'

export function generateIcsFile(data: BookingFormData): string {
  const { service, preferredDate, preferredTime, name } = data
  
  // Parse the date and time
  const date = new Date(preferredDate)
  const [hours, minutes] = preferredTime.split(':').map(Number)
  
  // Set the start time
  const startDate = new Date(date)
  startDate.setHours(hours, minutes, 0, 0)
  
  // Set the end time (60 minutes later)
  const endDate = new Date(startDate)
  endDate.setHours(startDate.getHours() + 1)
  
  // Format dates for ICS (YYYYMMDDTHHMMSSZ)
  const formatDate = (date: Date): string => {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
  }
  
  const startDateFormatted = formatDate(startDate)
  const endDateFormatted = formatDate(endDate)
  const createdDate = formatDate(new Date())
  
  // Generate unique UID
  const uid = `booking-${Date.now()}@clipperz.com`
  
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//CLIPPERZ//Booking System//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTART:${startDateFormatted}`,
    `DTEND:${endDateFormatted}`,
    `DTSTAMP:${createdDate}`,
    `SUMMARY:${service} - CLIPPERZ`,
    `DESCRIPTION:Appointment at CLIPPERZ\\n\\nService: ${service}\\nClient: ${name}\\n\\nAddress: ${process.env.SALON_ADDRESS || 'CLIPPERZ Salon'}`,
    `LOCATION:${process.env.SALON_ADDRESS || 'CLIPPERZ Salon'}`,
    'STATUS:TENTATIVE',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT15M',
    'DESCRIPTION:Reminder',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')
  
  return icsContent
}

export function downloadIcsFile(data: BookingFormData): void {
  const icsContent = generateIcsFile(data)
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const link = document.createElement('a')
  
  link.href = window.URL.createObjectURL(blob)
  link.download = `clipperz-booking-${data.preferredDate}.ics`
  
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  
  window.URL.revokeObjectURL(link.href)
}
