"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import MobileSidebar from './MobileSidebar'
import ReactDOM from 'react-dom'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // detect different screen sizes for responsive design
  const [screenSize, setScreenSize] = useState('large')
  useEffect(() => {
    function checkScreenSize() {
      if (typeof window === 'undefined') return
      const width = window.innerWidth
      if (width <= 375) {
        setScreenSize('narrow')
      } else if (width <= 425) {
        setScreenSize('small')
      } else if (width <= 769) {
        setScreenSize('medium')
      } else {
        setScreenSize('large')
      }
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const isActive = (path: string) => {
    // Treat root and empty pathname consistently
    if (!pathname) return path === '/'
    return pathname === path
  }

    return (
      <header className="glass-card isolate z-[1] backdrop-blur-xl bg-white/20 border border-white/30 rounded-xl shadow-2xl">
      <div className={`w-full ${
        screenSize === 'narrow' ? 'px-2' : 
        screenSize === 'small' ? 'px-3' : 
        screenSize === 'medium' ? 'px-4' : 
        'px-4 sm:px-6 lg:px-5'
      }`}>

  <div className={`flex items-center ${
    screenSize === 'narrow' ? 'h-10' : 
    screenSize === 'small' ? 'h-11' : 
    'h-12'
  } relative header-inner justify-between`}>
          {/* Left: logo */}
          <div className={`flex-shrink-0 flex items-center ${
            screenSize === 'narrow' ? 'mr-1' : 
            screenSize === 'small' ? 'mr-2' : 
            screenSize === 'medium' ? 'mr-3' : 
            'mr-2 md:mr-7'
          }`}>
            <Image
              src="/d1ba5d552e324a23916912cc1dd8ce8326ae3394.png"
              alt="ATOM"
              width={32}
              height={32}
              className={`object-contain ${
                screenSize === 'narrow' ? 'h-5' : 
                screenSize === 'small' ? 'h-5' : 
                screenSize === 'medium' ? 'h-6' : 
                'h-6 md:h-7'
              }`}
            />
          </div>

          {/* Center: nav (centered flex) - hidden on mobile/tablet */}
          <nav className="hidden lg:flex flex-1 justify-center nav-links">
            <Link href="/" className={isActive('/') ? 'nav-active' : 'nav-link'}>Home</Link>
            <Link href="/customers" className={isActive('/customers') ? 'nav-active' : 'nav-link'}>Customers</Link>
            <Link href="/gallery" className={isActive('/gallery') ? 'nav-active' : 'nav-link'}>Gallery</Link>
            <Link href="/catalogue" className={isActive('/catalogue') ? 'nav-active' : 'nav-link'}>Catalogue</Link>
            <Link href="/blog" className={isActive('/blog') ? 'nav-active' : 'nav-link'}>Blogs</Link>
            <Link href="/contact" className={isActive('/contact') ? 'nav-active' : 'nav-link'}>Contact Us</Link>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="nav-link mr-6">Shop Now</a>
          </nav>

          {/* Right side: chat button and mobile menu */}
          <div className="flex items-center gap-2 h-full">
            {/* Chat button - hidden on screens below 769px */}
            {screenSize === 'large' && (
              <button
                className="chat-btn rounded-full flex items-center justify-center shadow-lg w-8 h-8"
                aria-label="Chat"
              >
                <Image
                  src="/cropped_circle_image.png"
                  alt="Chat"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </button>
            )}

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700 hover:text-blue-700 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className={`${
                    screenSize === 'narrow' ? 'w-5 h-5' : 
                    screenSize === 'small' ? 'w-5 h-5' : 
                    'w-6 h-6'
                  }`} />
                ) : (
                  <Menu className={`${
                    screenSize === 'narrow' ? 'w-5 h-5' : 
                    screenSize === 'small' ? 'w-5 h-5' : 
                    'w-6 h-6'
                  }`} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Render the mobile sidebar into document.body to avoid being contained by
            the header's transform (which would create a containing block for fixed elements).
            Using a portal ensures the sidebar is positioned relative to the viewport. */}
        {typeof document !== 'undefined' && ReactDOM.createPortal(
          <MobileSidebar
            isOpen={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            links={[
              { href: '/', label: 'Home' },
              { href: '/customers', label: 'Customers' },
              { href: '/gallery', label: 'Gallery' },
              { href: '/catalogue', label: 'Catalogue' },
              { href: '/blog', label: 'Blogs' },
              { href: '/contact', label: 'Contact Us' },
              { href: 'https://www.google.com', label: 'B2C', external: true },
            ]}
          />,
          document.body
        )}
      </div>
    </header>
  )
}