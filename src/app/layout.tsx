import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Atom Creations - Bulk Custom Apparel Manufacturing | MOQ 10',
    template: '%s | Atom Creations'
  },
  description: 'Leading manufacturer of custom apparel and garments. Minimum order quantity of just 10 pieces. Fast 3-day turnaround with 60% volume guarantee. Premium quality custom clothing solutions.',
  keywords: [
    'custom apparel',
    'bulk clothing manufacturing',
    'custom t-shirts',
    'garment manufacturing',
    'custom printing',
    'low MOQ apparel',
    'bulk custom clothing',
    'apparel manufacturer',
    'custom embroidery',
    'promotional clothing'
  ],
  authors: [{ name: 'Atom Creations' }],
  creator: 'Atom Creations',
  publisher: 'Atom Creations',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://atomcreations.com',
    title: 'Atom Creations - Custom Apparel Manufacturing | MOQ 10',
    description: 'Leading manufacturer of custom apparel and garments. Minimum order quantity of just 10 pieces. Fast 3-day turnaround with premium quality.',
    siteName: 'Atom Creations',
    images: [
      {
        url: '/logo 1.svg',
        width: 1200,
        height: 630,
        alt: 'Atom Creations - Custom Apparel Manufacturing'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atom Creations - Custom Apparel Manufacturing | MOQ 10',
    description: 'Leading manufacturer of custom apparel and garments. Minimum order quantity of just 10 pieces. Fast 3-day turnaround.',
    images: ['/logo 1.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://atomcreations.com',
  },
  category: 'manufacturing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Atom Creations",
    "description": "Leading manufacturer of custom apparel and garments with low minimum order quantities",
    "url": "https://atomcreations.com",
    "logo": "https://atomcreations.com/logo 1.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "Worldwide",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://www.instagram.com/atomcreations",
      "https://www.facebook.com/atomcreations",
      "https://www.linkedin.com/company/atomcreations"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Atom Creations Team"
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Custom Apparel Manufacturing",
        "description": "Bulk custom apparel manufacturing with MOQ of just 10 pieces"
      }
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white min-h-screen`}>{children}</body>
    </html>
  )
}