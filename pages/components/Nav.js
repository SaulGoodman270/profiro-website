import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect, useRef } from 'react'

export default function Nav() {
  const { pathname } = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFixed, setIsFixed] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 10)

      if (window.innerWidth < 1024) {
        if (currentScrollY > lastScrollY.current) {
          // Scrolling DOWN:
          if (currentScrollY < 80) {
            // Very near the top: keep it absolute (still part of the flow)
            setIsVisible(true)
            setIsFixed(false)
          } else {
            // Further down: hide it
            setIsVisible(false)
            // Once hidden, we can switch it back to fixed for the "slide in" effect later
            // but for now, we leave it hidden
          }
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling UP:
          setIsVisible(true)
          setIsFixed(true) // Switch to fixed so it can slide in from viewport top
        }
      } else {
        setIsVisible(true)
        setIsFixed(true)
      }

      if (currentScrollY < 10) {
        setIsVisible(true)
        setIsFixed(false) // Stick to top normally when at the very top
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const isActive = (path) => pathname === path ? 'active' : ''

  return (
    <nav className={`
      ${!isVisible ? 'nav-hidden' : ''} 
      ${isScrolled ? 'nav-scrolled' : ''} 
      ${isFixed ? 'nav-fixed' : ''}
    `}>
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
