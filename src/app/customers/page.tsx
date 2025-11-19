import Image from 'next/image'
import Header from '../compnents/Header'
import Footer from '../compnents/Footer'
import Testimonials from '../compnents/Testimonials'

export default function CustomersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

  <div className="flex-1 w-full flex flex-col items-center justify-center pt-30 pb-0 px-6 gap-0">
        {/* Full-width plain image from public/Frame 105.png */}
  <div className="pt-12 pb-8 max-[769px]:pt-0">
          <Image
            src="/Frame 105.png"
            alt="Customers"
            width={500}
            height={300}
            className="w-full max-w-lg mx-auto h-auto object-contain"
          />
        </div>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '30px',
            color: '#333333',
            textAlign: 'center',
            margin: 0
          }}
        >
          4,000+ brands trust us for fast, premium custom apparel...
        </p>
        {/* Additional image below the text */}
        <Image
          src="/Frame 87 (1).png"
          alt="Supporting graphic"
          width={1000}
          height={600}
          className="-mt-5 w-full max-w-4xl mx-auto h-auto object-contain max-[769px]:-mt-0 max-[769px]:max-w-3xl max-[769px]:scale-105 transform transition-transform duration-200"
        />
      </div>
      <div className="-mt-6">
        <Testimonials />
      </div>
      
      <Footer />
    </main>
  )
}
