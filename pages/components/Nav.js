import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const { pathname } = useRouter()

  // Helper to check active state if we want to highlight link
  // currently simply returning empty string or active class if needed
  const isActive = (path) => pathname === path ? 'active' : ''

  return (
    <nav>
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
          {/* On Landing Page (#links) vs Subpages (/links) */}
          {pathname === '/' ? (
            <>
              <Link href="#features">Features</Link>
              <Link href="/blog">Blog</Link>
              <Link href="#faq">FAQ</Link>
            </>
          ) : (
            <>
              <Link href="/#features">Features</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/#faq">FAQ</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
