import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

export default function Nav() {
  const { pathname } = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const controlNavbar = () => {
      // Use pageYOffset as fallback for scrollY on older mobile browsers
      const currentScrollY = window.scrollY !== undefined ? window.scrollY : window.pageYOffset

      // Determine if we are at the top (shadow logic)
      setIsScrolled(currentScrollY > 20)

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        // Scrolling down - hide
        setIsVisible(false)
      } else {
        // Scrolling up - show
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    // Passive listener for better scroll performance
    window.addEventListener('scroll', controlNavbar, { passive: true })
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  const isActive = (path) => pathname === path ? 'active' : ''

  return (
    <nav className={`${!isVisible ? 'nav-hidden' : ''} ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Logo Icon */}
          <img
            src="/Profiro P logo cerne.png"
            alt="Profiro Icon"
            style={{ width: '30px', height: '30px', objectFit: 'contain', borderRadius: '8px' }}
          />
          <span style={{ fontWeight: 800, fontSize: '1.2rem', color: '#0f172a' }}>Profiro</span>
        </Link>
        <div className="nav-links">
          {/* Use standard <a> for anchors to ensure browser handles jump correctly across pages */}
          <a href="/#features">Features</a>
          <Link href="/blog" className={isActive('/blog')}>Blog</Link>
          <a href="/#faq">FAQ</a>
        </div>
      </div>
    </nav>
  )
}
