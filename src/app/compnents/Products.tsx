"use client"

import Image from 'next/image'

export default function Products() {
  return (
    <>
      <style jsx>{`
        /* Mobile First - Base styles for screens below 375px */
        .product-card {
          height: 280px;
          margin-bottom: 20px;
        }
        
        .overlay-stat {
          position: absolute;
          top: 8px;
          right: 8px;
          backdrop-filter: blur(16px);
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          padding: 12px;
          width: 140px;
        }
        
        .overlay-stat h3 {
          font-weight: bold;
          font-size: 16px;
          color: white;
          margin: 0;
        }
        
        .overlay-stat p {
          font-size: 12px;
          color: white;
          margin: 4px 0 0 0;
        }
        
        .overlay-bottom {
          position: absolute;
          left: 8px;
          bottom: 8px;
          border-radius: 8px;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(4px);
          color: white;
          padding: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          width: 160px;
        }
        
        .overlay-bottom-title {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.2;
          margin: 0;
        }
        
        .overlay-bottom-subtitle {
          font-size: 10px;
          opacity: 0.9;
          margin: 4px 0 0 0;
        }

        /* 375px and above */
        @media (min-width: 375px) {
          .product-card {
            height: 320px;
            margin-bottom: 24px;
          }
          
          .overlay-stat {
            top: 12px;
            right: 12px;
            padding: 16px;
            width: 160px;
          }
          
          .overlay-stat h3 {
            font-size: 18px;
          }
          
          .overlay-stat p {
            font-size: 13px;
          }
          
          .overlay-bottom {
            left: 12px;
            bottom: 12px;
            padding: 16px;
            width: 180px;
          }
          
          .overlay-bottom-title {
            font-size: 16px;
          }
          
          .overlay-bottom-subtitle {
            font-size: 11px;
          }
        }

        /* 425px and above */
        @media (min-width: 425px) {
          .product-card {
            height: 360px;
            margin-bottom: 28px;
          }
          
          .overlay-stat {
            top: 16px;
            right: 16px;
            padding: 20px;
            width: 180px;
          }
          
          .overlay-stat h3 {
            font-size: 20px;
          }
          
          .overlay-stat p {
            font-size: 14px;
          }
          
          .overlay-bottom {
            left: 16px;
            bottom: 16px;
            padding: 20px;
            width: 200px;
          }
          
          .overlay-bottom-title {
            font-size: 18px;
          }
          
          .overlay-bottom-subtitle {
            font-size: 12px;
          }
        }

  /* 769px and above */
  @media (min-width: 769px) {
          .product-card {
            height: 500px;
            margin-bottom: 0;
          }
          
          .overlay-stat {
            top: 20px;
            right: 20px;
            padding: 28px;
            width: 240px;
          }
          
          .overlay-stat h3 {
            font-size: 24px;
          }
          
          .overlay-stat p {
            font-size: 16px;
          }
          
          .overlay-bottom {
            left: 20px;
            bottom: 20px;
            padding: 28px;
            width: 260px;
          }
          
          .overlay-bottom-title {
            font-size: 22px;
          }
          
          .overlay-bottom-subtitle {
            font-size: 14px;
          }
        }

        /* Desktop (1024px and above) */
        @media (min-width: 1024px) {
          .product-card {
            height: 600px;
          }
          
          .overlay-stat {
            top: 8px;
            right: 8px;
            padding: 16px;
            width: 280px;
          }
          
          .overlay-stat h3 {
            font-size: 28px;
          }
          
          .overlay-stat p {
            font-size: 18px;
          }
          
          .overlay-bottom {
            left: 14px;
            bottom: 14px;
            padding: 22px;
            width: 280px;
          }
          
          .overlay-bottom-title {
            font-size: 24px;
          }
          
          .overlay-bottom-subtitle {
            font-size: 16px;
          }
        }
      `}</style>
      
      <section className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">

            {/* Left Card */}
            <div className="relative">
              <Image
                src="/576f2f4d40333f7d67f179fb922244955a6fdc92.png"
                alt="Pieces shipped"
                className="product-card rounded-lg sm:rounded-2xl object-cover w-full"
                width={1200}
                height={600}
              />

              {/* Overlay Stat Card (left) */}
              <div className="overlay-stat isolate z-[1]">
                <h3>50,000+</h3>
                <p>Pieces Shipped</p>
              </div>
            </div>

            {/* Middle Card */}
            <div className="relative">
<div className="relative h-[500px] sm:h-[420px] md:h-[450px] lg:h-[510px] overflow-hidden rounded-lg sm:rounded-2xl">
  <Image
    src="/4539dfa1a80805b965bae58bc2d5c7db06a6ed58.jpg"
    alt="Net Promoter Score"
    fill
    className="object-cover"
  />
  <div className="overlay-bottom">
    <div className="overlay-bottom-title">4.7/5</div>
    <div className="overlay-bottom-subtitle">Net Promoter Score</div>
  </div>
</div>
</div>


            {/* Right Card */}
            <div className="relative">
              <Image
                src="/3edfb6fca6a884b4907302e77bf4f958b718a15a.png"
                alt="Custom Orders"
                className="product-card rounded-lg sm:rounded-2xl object-cover w-full"
                width={1200}
                height={600}
              />

              {/* Overlay Stat Card (right) */}
              <div className="overlay-stat isolate z-[1]">
                <h3>1,000+</h3>
                <p>Custom Orders</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
