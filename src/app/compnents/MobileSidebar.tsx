// ...existing code...
"use client"
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'
import React from 'react'

type LinkItem = { href: string; label: string; external?: boolean }

// small reusable hook that listens to a media query
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false
  )

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia(query)

    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // Modern browsers support addEventListener on MediaQueryList
    mq.addEventListener('change', handler)

    return () => {
      mq.removeEventListener('change', handler)
    }
  }, [query])

  return matches
}

export default function MobileSidebar({
  isOpen,
  onClose,
  links,
}: {
  isOpen: boolean
  onClose: () => void
  links: LinkItem[]
}) {
  // lock body scroll when sidebar is open and restore on close
  React.useEffect(() => {
    const prevOverflow = typeof document !== 'undefined' ? document.body.style.overflow : ''
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = prevOverflow
    }
    return () => {
      if (typeof document !== 'undefined') document.body.style.overflow = prevOverflow
    }
  }, [isOpen])
  const pathname = usePathname()

  // true when viewport is >= 769px
  const isWide = useMediaQuery('(min-width: 769px)')

  // auto-close when we cross the breakpoint into "wide"
  React.useEffect(() => {
    if (isWide && isOpen) onClose()
  }, [isWide, isOpen, onClose])

  // Keep the sidebar mounted to allow close animation to run
  const [visible, setVisible] = React.useState(isOpen)
  const [closing, setClosing] = React.useState(false)

  // sidebar positioned at the very left edge of screen

  React.useEffect(() => {
    if (isWide) return // don't show on wide
    if (isOpen) {
      setVisible(true)
      setClosing(false)
    } else if (visible) {
      // start closing animation
      setClosing(true)
      // after animation, unmount
      const t = setTimeout(() => {
        setVisible(false)
        setClosing(false)
      }, 300)
      return () => clearTimeout(t)
    }
  }, [isOpen, isWide, visible])

  if (isWide) return null
  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50" aria-hidden={!isOpen}>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={
          `fixed inset-0 bg-black transition-opacity duration-300 ${
            isOpen && !closing ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`
        }
      />

      {/* Sliding panel */}
      <aside
        role="dialog"
        aria-modal="true"
  className={`fixed top-0 left-0 h-screen bg-white shadow-2xl transform transition-transform duration-300 z-50 flex flex-col w-60 max-[769px]:w-56 max-[425px]:w-52 max-[375px]:w-48 ${
          isOpen && !closing ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <Image
              src="/d1ba5d552e324a23916912cc1dd8ce8326ae3394.png"
              alt="ATOM"
              width={32}
              height={32}
              className="object-contain h-7"
            />

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-slate-700 p-2 rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200"
            >
              <X />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {links.map((l) => {
              const active = pathname === l.href
              
              if (l.external) {
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onClose()}
                    className={`block text-base text-slate-800 px-2 py-3 rounded cursor-pointer transition-colors hover:bg-slate-100 hover:font-semibold`}
                  >
                    {l.label}
                  </a>
                )
              }
              
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => onClose()}
                  aria-current={active ? 'page' : undefined}
                  className={`block text-base text-slate-800 px-2 py-3 rounded cursor-pointer transition-colors ${
                    active ? 'bg-slate-100 font-semibold' : ''
                  } hover:bg-slate-100 hover:font-semibold`}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* optional footer area - keep at bottom */}
         
        </div>
      </aside>
    </div>
  )
}
// ...existing code...