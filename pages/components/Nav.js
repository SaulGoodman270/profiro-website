import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {
  const { pathname } = useRouter()
  const is = p => pathname === p ? 'active' : ''
  return (
    <nav>
      <Link className={is('/')} href="/">Profiro</Link>
      <Link className={is('/blog')} href="/blog">Blog</Link>
      <Link className={is('/terms')} href="/terms">Terms</Link>
      <Link className={is('/privacy')} href="/privacy">Privacy</Link>
    </nav>
  )
}
