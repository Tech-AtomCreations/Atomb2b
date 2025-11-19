import { Metadata } from "next"
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Atom Creations for your custom apparel needs. Fast quotes, expert consultation, and personalized service for bulk orders.',
  keywords: ['contact', 'quote', 'custom apparel inquiry', 'bulk order', 'consultation'],
  openGraph: {
    title: 'Contact Us - Atom Creations',
    description: 'Get in touch with Atom Creations for your custom apparel needs. Fast quotes and expert consultation.',
    url: 'https://atomcreations.com/contact',
  },
  twitter: {
    title: 'Contact Us - Atom Creations',
    description: 'Get in touch with Atom Creations for your custom apparel needs.',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
