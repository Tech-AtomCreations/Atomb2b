import React from "react"
import { Metadata } from "next"
import CatalogueClient from "./CatalogueClient"

export const metadata: Metadata = {
  title: 'Product Catalogue',
  description: 'Browse our comprehensive catalogue of custom apparel and garments. Download our latest product catalog with pricing, materials, and customization options.',
  keywords: ['product catalogue', 'apparel catalog', 'custom clothing options', 'garment specifications', 'pricing guide'],
  openGraph: {
    title: 'Product Catalogue - Atom Creations',
    description: 'Browse our comprehensive catalogue of custom apparel and garments. Download our latest product catalog.',
    url: 'https://atomcreations.com/catalogue',
  },
  twitter: {
    title: 'Product Catalogue - Atom Creations',
    description: 'Browse our comprehensive catalogue of custom apparel and garments.',
  },
}

export default function CataloguePage() {
  return <CatalogueClient />
}
