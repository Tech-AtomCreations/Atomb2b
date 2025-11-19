"use client"

import React, { useState } from 'react'

type Product = {
  id: number
  title: string
  image?: string
  video?: string
  fabric?: string
  composition?: string
  features?: string
}

const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M7 17L17 7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
)

const products: Product[] = [
  { 
    id: 1, 
    title: 'Honeycomb 180 GSM', 
    image: '/products/product1.png',
    fabric: 'Honeycomb Knit',
    composition: '60% Cotton, 40% Polyester',
    features: 'Breathable structured knit'
  },
  { 
    id: 2, 
    title: 'Spun Matty 200 GSM', 
    image: '/products/product2.png',
    fabric: 'Spun Matty',
    composition: '100% Spun Polyester',
    features: 'Smooth, durable fabric'
  },
  { 
    id: 3, 
    title: 'Cotton Matty 220 GSM', 
    image: '/products/product3.png',
    fabric: 'Cotton Matty',
    composition: '100% Combed Cotton',
    features: 'Premium robust breathable'
  },
  { 
    id: 4, 
    title: 'Cotton Matty 240 GSM', 
    image: '/products/product4.png',
    fabric: 'Cotton Matty',
    composition: '100% Combed Cotton',
    features: 'Heavier luxurious feel'
  },
  { 
    id: 5, 
    title: 'Oversized 180 GSM', 
    image: '/products/product5.png',
    fabric: 'Premium Bio-wash Cotton',
    composition: '100% Cotton',
    features: 'Lighter oversized comfort'
  },
  { 
    id: 6, 
    title: 'Oversized 240 GSM', 
    image: '/products/product6.png',
    fabric: 'French Terry Cotton',
    composition: '100% Cotton',
    features: 'Relaxed superior comfort'
  },
  { 
    id: 7, 
    title: 'Round Neck 180 GSM', 
    image: '/products/product7.png',
    fabric: 'Premium Bio-wash Cotton',
    composition: '100% Cotton',
    features: 'Classic soft hand feel'
  },
  { 
    id: 8, 
    title: 'Round Neck 200 GSM', 
    image: '/products/product8.png',
    fabric: 'Premium Bio-wash Cotton',
    composition: '100% Cotton',
    features: 'Enhanced durable quality'
  }
]

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <article
      className="w-full rounded-2xl border border-[#efe6db] p-6 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top labels */}
      <div className="flex justify-between text-[11px] text-[#8b8578] font-medium z-20 relative">
        <span className='text-[#333333]'>10% off</span>
        <span className='text-[#333333]'>MOQ 10</span>
      </div>

      {/* Image area */}
      <div className="mt-4 h-[320px] flex items-center justify-center relative overflow-hidden rounded-md">
        {(() => {
          // Use product images from /public/products. Apply a slight zoom effect on hover for visual interest.
          const zoomedIds = [1, 2, 3, 4, 5, 6, 7, 8]
          const isZoomed = zoomedIds.includes(product.id)
          const baseScale = isZoomed ? 'scale-[1.03]' : 'scale-100'
          const hoverScale = isZoomed ? 'scale-[1.08]' : 'scale-[1.05]'
          const fitClass = isZoomed ? 'object-cover w-full h-full' : 'object-contain h-full w-auto'

          return (
            <img
              src={product.image}
              alt={product.title}
              className={`${fitClass} select-none transition-transform duration-300 ease-in-out ${isHovered ? hoverScale : baseScale}`}
            />
          )
        })()}

        {/* The glass overlay: slides up from bottom on hover */}
        <div
          className={`absolute inset-x-0 bottom-0 h-[35%] flex flex-col justify-end p-6 transform transition-transform transition-opacity duration-300 ease-in-out z-20
            ${isHovered ? 'translate-y-0 opacity-100 bg-white/50 backdrop-blur-sm pointer-events-auto' : 'translate-y-full opacity-0 bg-white/0 backdrop-blur-0 pointer-events-none'}`}
        >
          <div className="text-sm text-gray-700 transition-opacity duration-200">
            <div className="flex items-center justify-between">
              <div>{product.title}</div>
              <ArrowUpRightIcon className="w-4 h-4 text-gray-800" />
            </div>
<div className="mt-2 text-xs text-gray-600">
  <p className="text-[#333333]">{product.fabric}</p>
  <p className="text-[#333333]">{product.composition}</p>
  <p className="text-[#333333]">{product.features}</p>
</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ProductsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <style jsx>{`
          /* Products header responsive styles (mobile-first) */
          .products-title {
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-size: 20px; /* base for very small screens */
            line-height: 1;
            letter-spacing: 0;
            text-align: center;
            max-width: 300px;
            margin: 0 auto 1.75rem;
            color: #0B0014;
          }

          /* 375px and above */
          @media (min-width: 375px) {
            .products-title {
              font-size: 22px;
              max-width: 360px;
              margin-bottom: 2.25rem;
            }
          }

          /* 425px and above */
          @media (min-width: 425px) {
            .products-title {
              font-size: 28px;
              max-width: 420px;
              margin-bottom: 3rem;
            }
          }

          /* 769px and above (desktop/tablet) */
          @media (min-width: 769px) {
            .products-title {
              font-size: 36.65px; /* original desktop size */
              max-width: 500px;
              margin-bottom: 3rem;
            }
          }
        `}</style>

        <h2 className="products-title">Products</h2>

        {/* --- Desktop / md+ layout: 4 across, two rows --- */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* --- Mobile / small screens: 2 columns --- */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
