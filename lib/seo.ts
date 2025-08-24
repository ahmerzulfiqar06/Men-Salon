import { Metadata } from 'next'

const siteConfig = {
  name: 'CLIPPERZ',
  description: 'Professional Men\'s Salon & Barber Shop - Expert cuts, premium service, modern style',
  url: 'https://clipperz.com',
  ogImage: '/images/og-image.jpg',
}

export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    keywords: [
      'barber shop',
      'men\'s salon',
      'haircut',
      'beard trim',
      'men\'s grooming',
      'professional barber',
      'hair styling',
      'men\'s hair',
      'clipperz',
    ],
    authors: [{ name: 'CLIPPERZ' }],
    creator: 'CLIPPERZ',
    publisher: 'CLIPPERZ',
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: [
        {
          url: image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description: description || siteConfig.description,
      images: [image || siteConfig.ogImage],
      creator: '@clipperz',
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
  }
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'CLIPPERZ',
    description: 'Professional Men\'s Salon & Barber Shop',
    url: siteConfig.url,
    telephone: process.env.SALON_PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: process.env.SALON_ADDRESS?.split(',')[0] || '123 Main Street',
      addressLocality: process.env.SALON_ADDRESS?.split(',')[1]?.trim() || 'Anytown',
      addressRegion: process.env.SALON_ADDRESS?.split(',')[2]?.trim() || 'ST',
      postalCode: process.env.SALON_ADDRESS?.split(',')[3]?.trim() || '12345',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.7128',
      longitude: '-74.0060',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card',
    servesCuisine: 'Hair Salon Services',
    serviceType: 'Men\'s Grooming Services',
    areaServed: {
      '@type': 'City',
      name: 'Anytown',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hair and Grooming Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Classic Cut',
            description: 'Traditional haircut with scissors and clippers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Beard Trim',
            description: 'Professional beard trimming and shaping',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hot Towel Shave',
            description: 'Traditional wet shave with hot towel treatment',
          },
        },
      ],
    },
  }
}
