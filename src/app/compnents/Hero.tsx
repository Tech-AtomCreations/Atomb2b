'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <style jsx>{`
        /* Mobile First - Base styles for screens below 375px */
        .hero-info {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 11px;
          line-height: 16px;
          color: #434343ff;
          opacity: 0.8;
          margin-bottom: 40px;
          padding-top: 55px;
          padding-bottom: 15px;
          padding-left: 10px;
          padding-right: 10px;
        
        }
        
        .hero-title {
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 1.8rem;
          line-height: 100%;
          letter-spacing: 0;
          color: #0B0014;
          opacity: 1;
          padding-left: 10px;
          padding-right: 10px;
        }
        
        .hero-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 100%;
          letter-spacing: 0;
          text-align: center;
          opacity: 1;
          color: var(--main, #0B0014);
          padding-top: 25px;
          padding-left: 10px;
          padding-right: 10px;
        }

        /* 375px and above */
        @media (min-width: 375px) {
          .hero-info {
            font-size: 12px;
            line-height: 18px;
            margin-bottom: 50px;
            padding-top: 55px;
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .hero-title {
            font-size: 2.2rem;
            padding-left: 15px;
            padding-right: 15px;
          }
          
          .hero-subtitle {
            font-size: 18px;
            padding-top: 30px;
            padding-left: 15px;
            padding-right: 15px;
          }
        }

        /* 425px and above */
        @media (min-width: 425px) {
          .hero-info {
            font-size: 13px;
            line-height: 19px;
            margin-bottom: 55px;
            padding-top: 65px;
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .hero-title {
            font-size: 2.5rem;
            padding-left: 20px;
            padding-right: 20px;
          }
          
          .hero-subtitle {
            font-size: 20px;
            padding-top: 35px;
            padding-left: 20px;
            padding-right: 20px;
          }
        }

  /* 769px and above */
  @media (min-width: 769px) {
          .hero-info {
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 68px;
            padding-top: 55px;
            padding-bottom: 20px;
            padding-left: 0;
            padding-right: 0;
          }
          
          .hero-title {
            font-size: 3.5rem;
            padding-left: 0;
            padding-right: 0;
          }
          
          .hero-subtitle {
            font-size: 25px;
            padding-top: 40px;
            padding-left: 0;
            padding-right: 0;
          }
        }
        /* Consistent 6px padding for CTA button across all screen sizes */
        .hero-cta {
          padding-left: 6px !important;
          padding-right: 6px !important;
          width: auto !important;
          flex: none !important;
        }
      `}</style>
      
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="text-center">
            <p className="hero-info">
              MOQ 10 • Pan India shipping • 7–12 day dispatch • <a href="https://wa.me/919971665564" target="_blank" rel="noopener noreferrer" className="text-[#434343ff] hover:text-green-600 transition-colors underline">WhatsApp: +91-9971665564</a>
            </p>
            
            <h1 className="hero-title font-semibold mb-6">
              Bulk Custom Apparel, MOQ 10 Made by Us.
            </h1>

            <p className="hero-subtitle mb-8 sm:mb-12">
              Manufacturer direct pricing, 3 step QC, reliable timelines.
            </p>


            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center py-4 sm:py-6 lg:py-10">
              <button
                onClick={() => {
                  const el = document.getElementById('contact')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
className="hero-cta bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#12285e] hover:cursor-pointer transition-colors max-[769px]:!px-23 max-[2000px]:!px-4"
              >
                Get Started
              </button>
              <a
                href={encodeURI('/Atom-Creations Catalogue (3).pdf')}
                download
                className="border border-gray-300 text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors w-auto inline-flex items-center justify-center"
              >
                Download Catalogue
              </a>
            </div>

            <Image 
              src="/18a7005c08c5a4486114815d31bdb2c66384d6cf (2).jpg" 
              width={800}
              height={600}
              className="rounded-lg sm:rounded-2xl w-full sm:w-5/6 lg:w-3/4 mx-auto"
              alt="Custom Apparel Showcase"
            />
          </div>
        </div>
      </section>
    </>
  )
}
