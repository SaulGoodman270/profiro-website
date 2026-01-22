import Head from 'next/head'
import Nav from '../components/Nav'
import { useRouter } from 'next/router'
import Link from 'next/link'

const content = {
  'rule-4-percent': {
    title: 'The 4% Rule: Your Ticket to Financial Freedom',
    body: `The 4% rule is a common rule of thumb used to determine how much a retiree should withdraw from a retirement account each year. This rule seeks to provide a steady income stream to the retiree while also maintaining an account balance that keeps income flowing through retirement.

    Profiro helps you estimate your FI number, plan monthly contributions, and visualize your timeline so you can make informed decisions.`
  },
  'compound-interest': {
    title: 'Compound Interest: Let Your Money Work for You',
    body: `Compound interest is the interest on a loan or deposit calculated based on both the initial principal and the accumulated interest from previous periods.
    
    Profiro lets you visualize this snowball effect. See how small contributions today can turn into massive wealth over decades.`
  },
  'rule-75-15-10': {
    title: 'The 75/15/10 Rule: A Compass for Your Money',
    body: `This is a simple budgeting framework:
    - 75% of your income for living expenses (needs & wants)
    - 15% for investing (your future self)
    - 10% for short-term savings (emergency fund, holidays)
    
    Profiro includes a dedicated planner to help you distribute your income according to this ratio.`
  }
}

export default function Post() {
  const { query } = useRouter()
  const slug = query.slug
  const post = content[slug] || { title: 'Post not found', body: 'This post does not exist yet.' }

  return (
    <>
      <Head>
        <title>{post.title} — Profiro</title>
        <meta name="robots" content="noindex" /> {/* Prevent indexing of sample content */}
      </Head>
      <Nav />
      <main className="container" style={{ padding: "40px 20px" }}>
        <h1 style={{ marginBottom: "24px" }}>{post.title}</h1>
        <div style={{ whiteSpace: "pre-line", color: "var(--text-main)", maxWidth: "700px" }}>
          {post.body}
        </div>
        <div style={{ marginTop: "40px" }}>
          <Link href="/blog">← Back to Blog</Link>
        </div>
      </main>

      {/* FIXED Footer structure for full width background */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p style={{ fontWeight: 700, color: "var(--color-primary)" }}>Profiro</p>
            <p>© {new Date().getFullYear()} Marek Brichcin. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </div>
      </footer>
    </>
  )
}
