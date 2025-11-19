"use client"

import React from "react"
import Image from 'next/image'
import Header from '../compnents/Header'
import Footer from '../compnents/Footer'

export default function GalleryPage() {

const galleryImages = [
  '/IMG_0650.JPG',
  '/gallery/tobeadded2.jpg',
    '/gallery/tobeadded.jpg',
    '/gallery/IMG_2041 (1).jpg',
   '/gallery/tobeadded7.jpg',
    '/gallery/tobeadded1.jpg',
    '/gallery/WhatsApp Image 2025-10-30 at 23.50.43_aeb8d09d.jpg',
    '/gallery/WhatsApp Image 2025-10-30 at 23.50.44_61261e26.jpg',
    '/gallery/WhatsApp Image 2025-10-31 at 00.25.30_4a76d6da.jpg',
    '/gallery/IMG_7377.png',
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-12 pb-20 mt-15">
        {/* Heading */}
  <div className="max-w-[680px] mx-auto text-center px-0">
            <h1
              className={
                "mb-4 mx-auto text-center font-[\"DM Sans\",sans-serif] font-medium " +
                "text-[36.65px] leading-[100%] text-[#0B0014] w-full max-w-[500px] " +
                "max-[769px]:text-[32px] max-[425px]:text-[28px] max-[375px]:text-[24px]"
              }
            >
              Gallery
            </h1>
            <p className="text-sm text-gray-600 w-full mx-auto mt-4 max-[769px]:px-4 max-[769px]:max-w-3xl">
            Step into our gallery and witness how innovation meets creativity — each T‑shirt is a canvas, every print a masterpiece, and every design a testament to the power of precision printing.
          </p>
        </div>

        {/* Grid Gallery matching reference layout */}
        <div className="max-w-6xl mx-auto mt-14 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px] md:auto-rows-[260px]">
          {galleryImages.map((src, i) => (
            <div key={i} className={`relative overflow-hidden rounded-xl shadow-md ${
              i % 5 === 0 ? 'row-span-2' : ''
            }`}>
              <Image
                src={src}
                alt={`gallery-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
