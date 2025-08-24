import { NextRequest, NextResponse } from 'next/server'
import { bookingSchema } from '@/lib/validations'
import { sendBookingEmail } from '@/lib/email'
import { generateIcsFile } from '@/lib/ics'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = bookingSchema.parse(body)
    
    // Send booking email
    const emailResult = await sendBookingEmail(validatedData)
    
    if (!emailResult.success) {
      return NextResponse.json(
        { error: 'Failed to send booking email' },
        { status: 500 }
      )
    }
    
    // Generate ICS file content
    const icsContent = generateIcsFile(validatedData)
    
    return NextResponse.json(
      { 
        message: 'Booking submitted successfully',
        icsContent,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Booking API error:', error)
    
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid booking data' },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
