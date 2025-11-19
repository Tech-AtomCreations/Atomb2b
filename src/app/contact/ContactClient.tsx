'use client';

import Contact from '../compnents/Contact';
import FAQ from '../compnents/FAQ';
import Footer from '../compnents/Footer';
import Header from '../compnents/Header';
import Testimonials from '../compnents/Testimonials';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-12 max-[769px]:pt-20">
        <Contact />
      </div>

      {/* Header above Testimonials */}
      <div className="max-w-xl mx-auto px-2 sm:px-4 lg:px-8 mt-10 mb-0">
        <h2 className="contact-title text-center">Testimonials</h2>

        <style jsx>{`
          .contact-title {
            font-family: 'DM Sans', sans-serif;
            font-weight: 500;
            font-size: 34px;
            line-height: 1;
            text-align: center;
            max-width: 480px;
            margin: 0 auto 0.15rem; /* almost no space */
            color: #0B0014;
          }
          @media (max-width: 769px) {
            .contact-title {
              font-size: 20px;
              margin-bottom: 0.05rem; /* ultra-tight for mobile */
              max-width: 280px;
            }
          }
        `}</style>
      </div>

      {/* Testimonials — zero bottom gap */}
      <div className="mb-[-16px] max-[769px]:mb-[-30px] max-[480px]:mb-[-40px]">
        <Testimonials />
      </div>

      {/* FAQ pulled upward */}
      <div className="mt-[-10px] max-[769px]:mt-[-25px] max-[480px]:mt-[-35px]">
        <FAQ />
      </div>

      <Footer />
    </main>
  );
}