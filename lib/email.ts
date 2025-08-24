import { Resend } from 'resend'
import { BookingFormData, ContactFormData } from './validations'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendBookingEmail(data: BookingFormData) {
  const {
    service,
    addOns,
    barber,
    preferredDate,
    preferredTime,
    notes,
    name,
    email,
    phone,
  } = data

  const ownerEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #1f2937; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
        New Booking Request - CLIPPERZ
      </h1>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Service</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${service}</td>
        </tr>
        ${addOns.length > 0 ? `
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Add-ons</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${addOns.join(', ')}</td>
        </tr>
        ` : ''}
        ${barber ? `
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Preferred Barber</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${barber}</td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Date</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${preferredDate}</td>
        </tr>
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Time</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${preferredTime}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Name</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${name}</td>
        </tr>
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">
            <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">
            <a href="tel:${phone}" style="color: #3b82f6;">${phone}</a>
          </td>
        </tr>
        ${notes ? `
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Notes</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${notes}</td>
        </tr>
        ` : ''}
      </table>
      
      <p style="margin-top: 20px; color: #6b7280;">
        This booking request was submitted through the CLIPPERZ website.
      </p>
    </div>
  `

  const customerEmailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #1f2937; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
        Booking Confirmation - CLIPPERZ
      </h1>
      
      <p>Hi ${name},</p>
      
      <p>Thank you for your booking request! We've received your request for:</p>
      
      <div style="background-color: #f9fafb; padding: 20px; margin: 20px 0; border-left: 4px solid #f59e0b;">
        <p><strong>Service:</strong> ${service}</p>
        ${addOns.length > 0 ? `<p><strong>Add-ons:</strong> ${addOns.join(', ')}</p>` : ''}
        ${barber ? `<p><strong>Preferred Barber:</strong> ${barber}</p>` : ''}
        <p><strong>Date:</strong> ${preferredDate}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>
      </div>
      
      <p>We'll contact you within 24 hours to confirm your appointment and discuss any details.</p>
      
      <p>If you have any questions, please don't hesitate to reach out:</p>
      <ul>
        <li>Phone: ${process.env.SALON_PHONE}</li>
        <li>Email: ${process.env.SALON_EMAIL_TO}</li>
      </ul>
      
      <p>Looking forward to seeing you at CLIPPERZ!</p>
      
      <p style="margin-top: 30px; color: #6b7280; font-size: 14px;">
        ${process.env.SALON_ADDRESS}
      </p>
    </div>
  `

  try {
    // Send email to salon owner
    await resend.emails.send({
      from: process.env.SALON_EMAIL_FROM!,
      to: process.env.SALON_EMAIL_TO!,
      subject: `New Booking Request - ${name} - ${preferredDate}`,
      html: ownerEmailHtml,
    })

    // Send confirmation email to customer
    await resend.emails.send({
      from: process.env.SALON_EMAIL_FROM!,
      to: email,
      subject: 'Booking Confirmation - CLIPPERZ',
      html: customerEmailHtml,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send booking email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}

export async function sendContactEmail(data: ContactFormData) {
  const { name, email, phone, subject, message } = data

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #1f2937; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
        Contact Form Submission - CLIPPERZ
      </h1>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Name</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Email</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">
            <a href="mailto:${email}" style="color: #3b82f6;">${email}</a>
          </td>
        </tr>
        ${phone ? `
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Phone</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">
            <a href="tel:${phone}" style="color: #3b82f6;">${phone}</a>
          </td>
        </tr>
        ` : ''}
        <tr>
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold;">Subject</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${subject}</td>
        </tr>
        <tr style="background-color: #f9fafb;">
          <td style="padding: 12px; border: 1px solid #e5e7eb; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 12px; border: 1px solid #e5e7eb;">${message.replace(/\n/g, '<br>')}</td>
        </tr>
      </table>
      
      <p style="margin-top: 20px; color: #6b7280;">
        This message was submitted through the CLIPPERZ contact form.
      </p>
    </div>
  `

  try {
    await resend.emails.send({
      from: process.env.SALON_EMAIL_FROM!,
      to: process.env.SALON_EMAIL_TO!,
      subject: `Contact Form: ${subject}`,
      html: emailHtml,
      reply_to: email,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send contact email:', error)
    return { success: false, error: 'Failed to send email' }
  }
}
