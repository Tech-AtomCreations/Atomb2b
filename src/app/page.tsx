import Header from './compnents/Header'
import Hero from './compnents/Hero'
import Stats from './compnents/Stats'
import Products from './compnents/Products'
import Materials from './compnents/Materials'
import Process from './compnents/Process'
import PastWorks from './compnents/Pastworks'
import Contact from './compnents/Contact'
import FAQ from './compnents/FAQ'
import Footer from './compnents/Footer'
import Product from './compnents/Product' 

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Stats />
      <Products />
      <Product />
      <Materials />
      <Process />
      <PastWorks />
      <Contact />
      <FAQ />
      <Footer />
    </main>
  )
}