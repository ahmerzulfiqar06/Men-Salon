# CLIPPERZ - Modern Men's Salon Website

A modern, mobile-first marketing website for men's salon/barber shops with email-only booking system. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

### 📱 **Mobile-First Design**
- Responsive design optimized for all devices
- Touch-friendly interface with smooth animations
- Progressive Web App (PWA) ready

### 🎨 **Modern UI/UX**
- Clean, professional design with tasteful animations
- Parallax hero section with barber chair background
- Smooth page transitions and loading states
- Accessible design with proper focus management

### 📧 **Email-Only Booking System**
- No database required - all bookings sent via email
- Professional email templates for both salon and customers
- Automatic calendar file (.ics) generation
- Form validation with Zod schema

### 🔧 **Technical Stack**
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion with reduced motion support
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend API integration
- **Images**: Next.js Image optimization

### 📊 **SEO & Performance**
- Server-side rendering (SSR)
- Automatic sitemap generation
- JSON-LD structured data for local business
- Meta tags and Open Graph optimization
- Mobile Lighthouse score ≥90

## 📄 Pages

- **`/`** - Home with parallax hero, services preview, pricing highlight, testimonials
- **`/services`** - Service grid with duration & pricing, book CTAs
- **`/shop`** - E-commerce style product catalog with men's grooming products
- **`/pricing`** - 3 packages + add-ons, policies, payment info
- **`/about`** - Story, team profiles, hygiene standards, gallery
- **`/contact`** - Contact form, map, hours, WhatsApp integration
- **`/book`** - Single-page booking form with service selection

## 🛠️ Setup Instructions

### 1. **Clone and Install**
```bash
git clone <repository-url>
cd clipperz-salon
npm install
```

### 2. **Environment Setup**
Copy the environment example file and configure your settings:
```bash
cp env.example .env.local
```

Update `.env.local` with your configuration:
```env
# Resend API Configuration
RESEND_API_KEY=re_your_api_key_here

# Salon Contact Information
SALON_EMAIL_TO=owner@clipperz.com
SALON_EMAIL_FROM=booking@clipperz.com
SALON_PHONE=+1 (555) 123-4567
SALON_ADDRESS=123 Main Street, Anytown, ST 12345
SALON_WHATSAPP_URL=https://wa.me/15551234567
```

### 3. **Resend Email Setup**
1. Sign up at [Resend.com](https://resend.com)
2. Create an API key in your dashboard
3. Add your domain for email sending
4. Update `RESEND_API_KEY` in your `.env.local`

### 4. **Image Assets**
Add your salon images to `/public/images/`. See `/public/images/placeholder.txt` for the complete list of required images and their dimensions.

### 5. **Customization**
- Update salon name from "CLIPPERZ" in components and content
- Modify services, pricing, and team information
- Customize colors in `tailwind.config.ts`
- Update business hours and contact information

## 🚀 Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📤 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [Vercel](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

2. **Environment Variables**
   Add your environment variables in the Vercel dashboard:
   ```
   RESEND_API_KEY=your_api_key
   SALON_EMAIL_TO=owner@clipperz.com
   SALON_EMAIL_FROM=booking@clipperz.com
   SALON_PHONE=+1 (555) 123-4567
   SALON_ADDRESS=123 Main Street, Anytown, ST 12345
   SALON_WHATSAPP_URL=https://wa.me/15551234567
   ```

3. **Deploy**
   - Click Deploy
   - Your site will be live with a vercel.app domain
   - Add custom domain in settings if needed

### Alternative Deployment Options

#### Cloudflare Pages (Static Only)
- **Note**: API routes won't work due to file size limits
- Best for static version without booking functionality
- Build output directory: `out`
- Requires static export configuration

#### Netlify
- Zero-config deployment with Git integration
- Supports serverless functions
- Environment variables in site settings

#### Traditional Hosting
- Build static files with `npm run build`
- Upload the `.next` folder to your hosting provider

## 🎯 Booking Flow

1. **Customer submits booking form** with:
   - Service selection with duration and pricing
   - Optional add-ons with pricing
   - Barber preference (optional)
   - Preferred date and time
   - Personal information (name, email, phone)
   - Additional notes

2. **Form validation** using Zod schema ensures:
   - All required fields are completed
   - Email format is valid
   - Phone number meets minimum length
   - Date is not in the past

3. **Email notifications** sent via Resend:
   - **Owner email**: HTML table with all booking details
   - **Customer email**: Confirmation with booking summary

4. **Calendar integration**:
   - Automatic .ics file generation (60-minute duration)
   - Download link provided on success page
   - Compatible with all major calendar applications

5. **Success confirmation**:
   - Success page with booking summary
   - Calendar download option
   - Option to book additional appointments

## 🎨 Customization Guide

### Brand Colors
Update colors in `tailwind.config.ts`:
```ts
colors: {
  primary: "hsl(var(--primary))", // Main brand color
  secondary: "hsl(var(--secondary))", // Secondary brand color
  accent: "hsl(var(--accent))", // Accent color
}
```

### Content Updates
- **Services**: Update `app/services/page.tsx` and `app/page.tsx`
- **Pricing**: Modify `app/pricing/page.tsx`
- **Team**: Update team data in `app/about/page.tsx`
- **Contact Info**: Update environment variables and contact pages

### Animations
All animations respect `prefers-reduced-motion` accessibility setting. Customize animations in individual page components using Framer Motion.

## 📱 Mobile Optimization

- Touch-friendly button sizes (minimum 44px)
- Optimized form inputs for mobile keyboards
- Swipeable image galleries
- Compressed images with Next.js Image optimization
- Lazy loading for better performance

## ♿ Accessibility Features

- Semantic HTML structure
- Proper heading hierarchy (h1-h6)
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast color scheme
- Focus indicators
- Screen reader compatibility
- Alternative text for all images

## 🔍 SEO Features

- **Structured Data**: JSON-LD for local business
- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Automatic XML sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Optimized images and lazy loading

## 🛡️ Security Considerations

- **Form Validation**: Client and server-side validation
- **Email Sanitization**: Prevents injection attacks
- **Environment Variables**: Sensitive data protection
- **API Rate Limiting**: Consider implementing for production
- **Content Security Policy**: Consider adding CSP headers

## 📊 Analytics & Monitoring

Consider adding these services for production:
- **Google Analytics**: Website traffic and user behavior
- **Google Tag Manager**: Tag and conversion tracking
- **Hotjar or similar**: User experience analytics
- **Sentry**: Error monitoring and performance tracking

## 🔧 Maintenance

### Regular Updates
- Update dependencies monthly: `npm update`
- Review and update content quarterly
- Monitor email delivery rates
- Check mobile performance regularly

### Backup Strategy
- Regular Git commits and pushes
- Environment variable backups
- Image asset backups
- Email template backups

## 📞 Support

For technical support or questions about this template:
- Review the documentation above
- Check the inline code comments
- Refer to the official Next.js documentation
- Contact the developer for custom modifications

## 📝 License

This project is provided as-is for educational and commercial use. Please update the salon name, branding, and content to match your business.

---

**Built with ❤️ for the modern barbering industry**
