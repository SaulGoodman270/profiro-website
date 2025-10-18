import Head from 'next/head'
import Link from 'next/link'
import Nav from './components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Profiro — Financial Independence made simple</title>
        <meta name="description" content="Profiro: iOS app that helps you plan and reach financial independence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <header className="hero">
        <h1>Profiro</h1>
        <p>Plan, track, and accelerate your path to Financial Independence (FIRE) — right on your iPhone.</p>
        <Link className="cta" href="https://apps.apple.com/">Get it on the App Store</Link>
      </header>
      <main className="container">
        <h2>Why Profiro?</h2>
        <ul>
          <li>Freedom planner: set your FI number and see your roadmap.</li>
          <li>Clear monthly contributions & projections.</li>
          <li>Multi-language, privacy-first (your data stays yours).</li>
        </ul>

        <p>Learn more on our <Link href="/blog">blog</Link> or read our <Link href="/privacy">Privacy Policy</Link>.</p>
      </main>
      <footer className="footer container">
        © {new Date().getFullYear()} Profiro. All rights reserved.
      </footer>
    </>
  )
}
