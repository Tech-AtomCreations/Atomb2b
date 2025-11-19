'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  const router = useRouter()

  const navigateTo = (path: string) => {
    router.push(path)
  }

  const openExternal = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <style jsx>{`
        /* Footer responsive styles (mobile-first) */
        .footer-container {
          background: white;
          color: #0B0014;
          padding: 24px 0;
        }

        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 8px;
        }

        .footer-layout {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          text-align: center;
          margin: 0 auto;
          width: fit-content;
          padding-left: 0;
        }

        .footer-logo {
          flex-shrink: 0;
          display: flex;
          justify-content: center;
        }

        .footer-logo img {
          height: 80px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          color: #0B0014;
          transition: opacity 0.2s;
          background: none;
          border: none;
          padding: 0;
          font-size: inherit;
          font-family: inherit;
          cursor: pointer;
          text-align: left;
        }

        .footer-link:hover {
          opacity: 0.7;
        }

        .footer-icon {
          width: 14px;
          height: 14px;
          color: #6b7280;
          flex-shrink: 0;
        }

        /* 375px and above */
        @media (min-width: 375px) {
          .footer-container {
            padding: 28px 0;
          }

          .footer-content {
            padding: 0 12px;
          }

          .footer-layout {
            gap: 28px;
            padding-left: 16px;
          }

          .footer-logo img {
            height: 90px;
          }

          .footer-links {
            gap: 24px;
            font-size: 13px;
          }

          .footer-column {
            gap: 14px;
          }

          .footer-icon {
            width: 15px;
            height: 15px;
          }
        }

        /* 425px and above */
        @media (min-width: 425px) {
          .footer-container {
            padding: 32px 0;
          }

          .footer-content {
            padding: 0 16px;
          }

          .footer-layout {
            gap: 32px;
            padding-left: 24px;
          }

          .footer-logo img {
            height: 100px;
          }

          .footer-links {
            gap: 28px;
            font-size: 14px;
          }

          .footer-column {
            gap: 16px;
          }

          .footer-icon {
            width: 16px;
            height: 16px;
          }
        }

  /* 769px and above (tablet) */
  @media (min-width: 769px) {
          .footer-container {
            padding: 36px 0;
          }

          .footer-content {
            padding: 0 24px;
          }

          .footer-layout {
            flex-direction: row;
            align-items: center;
            gap: 48px;
            text-align: left;
            padding-left: 64px;
          }

          .footer-logo {
            justify-content: flex-start;
          }

          .footer-logo img {
            height: 112px;
          }

          .footer-links {
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            font-size: 14px;
          }

          .footer-column {
            gap: 12px;
          }

          /* Hide mobile columns and show desktop columns */
          .footer-column {
            display: none;
          }

          .footer-column-desktop {
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
        }

        /* 1024px and above (desktop) */
        @media (min-width: 1024px) {
          .footer-container {
            padding: 40px 0;
          }

          .footer-content {
            padding: 0 32px;
          }

          .footer-layout {
            gap: 64px;
            padding-left: 128px;
          }

          .footer-logo img {
            height: 144px; /* original desktop size */
          }

          .footer-links {
            grid-template-columns: repeat(3, 1fr);
            gap: 48px;
          }
        }

        /* Hide desktop columns on mobile and slightly reduce arrow icon size */
        @media (max-width: 769px) {
          .footer-column-desktop {
            display: none;
          }

          /* smaller logo for mobile */
          .footer-logo img {
            height: 50px;
          }

          /* decrease space between the two mobile columns */
          .footer-links {
            gap: 8px;
          }

          /* slightly smaller arrows for compact mobile layout */
          .footer-icon {
            width: 12px;
            height: 12px;
          }
        }

        /* Stronger override for very small viewports in case of specificity/cache issues */
        @media (max-width: 768px) {
          .footer-icon,
          svg.footer-icon,
          .footer-link svg {
            width: 12px !important;
            height: 12px !important;
          }
        }
      `}</style>

<footer className="footer-container">
  <div className="footer-content">
    <div className="footer-layout">

      {/* Logo */}
      <div className="footer-logo">
        <Image
          src="/70730ab86b76f312c94261995a5a5f645367a125.png"
          alt="ATOM Creations"
          width={120}
          height={40}
        />
      </div>

      {/* Links */}
      <div className="footer-links">
        {/* Mobile Layout: 2 columns (6-6 distribution) */}
        <div className="footer-column">
          <button onClick={() => navigateTo('/')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Home
          </button>
          <button onClick={() => navigateTo('/customers')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Customers
          </button>
          <button onClick={() => navigateTo('/gallery')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Gallery
          </button>
          <button onClick={() => navigateTo('/catalogue')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Catalogue
          </button>
          <button onClick={() => navigateTo('/blog')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Blogs
          </button>
          <button onClick={() => navigateTo('/contact')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Contact Us
          </button>
        </div>

        <div className="footer-column">
          <button onClick={() => navigateTo('/gallery')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Our Works
          </button>
          <button onClick={() => navigateTo('/blog/all-articles')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            All Articles
          </button>
          <button onClick={() => navigateTo('/catalogue')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Product Catalog
          </button>
          <button onClick={() => openExternal('https://www.instagram.com/atomcreations.co/?igsh=MWZvZHk4aXlodWUybw%3D%3D#')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Instagram
          </button>
          <button onClick={() => openExternal('https://www.twitter.com')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            X
          </button>
          <button onClick={() => openExternal('https://www.facebook.com')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Facebook
          </button>
        </div>

        {/* Desktop Layout: 3 columns (6-3-3 distribution) */}
        <div className="footer-column-desktop">
          <button onClick={() => navigateTo('/')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Home
          </button>
          <button onClick={() => navigateTo('/customers')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Customers
          </button>
          <button onClick={() => navigateTo('/gallery')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Gallery
          </button>
          <button onClick={() => navigateTo('/catalogue')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Catalogue
          </button>
          <button onClick={() => navigateTo('/blog')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Blogs
          </button>
          <button onClick={() => navigateTo('/contact')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Contact Us
          </button>
        </div>

        <div className="footer-column-desktop">
          <button onClick={() => navigateTo('/gallery')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Our Works
          </button>
          <button onClick={() => navigateTo('/blog/all-articles')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            All Articles
          </button>
          <button onClick={() => navigateTo('/catalogue')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Product Catalog
          </button>
        </div>

        <div className="footer-column-desktop">
          <button onClick={() => openExternal('https://www.instagram.com')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Instagram
          </button>
          <button onClick={() => openExternal('https://www.twitter.com')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            X
          </button>
          <button onClick={() => openExternal('https://www.facebook.com')} className="footer-link">
            <ArrowUpRight className="w-4 h-4" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}