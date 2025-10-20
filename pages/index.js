import Head from "next/head";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profiro — Plan Your Path to Financial Independence</title>
        <meta
          name="description"
          content="Calculate your FI number, build a monthly plan, and watch compounding do the heavy lifting — privacy-first, on your iPhone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.profiroapp.com/" />
        {/* Open Graph / social preview (doplníš obrázek, až bude k dispozici) */}
        <meta property="og:title" content="Profiro — Plan Your Path to Financial Independence" />
        <meta
          property="og:description"
          content="Calculate your FI number, build a monthly plan, and watch compounding do the heavy lifting — privacy-first, on your iPhone."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.profiroapp.com/" />
        {/* <meta property="og:image" content="https://www.profiroapp.com/og-image.jpg" /> */}
        {/* Favicon / Apple Touch Icon (viz dřívější instrukce) */}
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </Head>

      <Nav />

      {/* HERO */}
      <header className="hero" style={{ padding: "56px 16px", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 980, margin: "0 auto" }}>
          <h1 style={{ marginBottom: 12 }}>Profiro — Plan Your Path to Financial Independence</h1>
          <p style={{ margin: "0 auto 20px", maxWidth: 760, lineHeight: 1.6 }}>
            Calculate your FI number, build a monthly plan, and watch compounding do the heavy lifting — privacy-first, on your iPhone.
          </p>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="cta" href="https://apps.apple.com/">
              Get it on the App Store
            </Link>
            <a className="cta secondary" href="#how-it-works">
              How it works
            </a>
          </div>
        </div>
      </header>

      <main className="container" style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px", lineHeight: 1.65 }}>
        {/* WHY */}
        <section aria-labelledby="why">
          <h2 id="why">Why Profiro?</h2>
          <ul>
            <li><strong>Know your Freedom Number</strong> — estimate what you need using the time-tested 4% rule.</li>
            <li><strong>Turn goals into a plan</strong> — set monthly contributions and track real progress.</li>
            <li><strong>Let compounding work</strong> — see long-term projections that keep you motivated.</li>
            <li><strong>Stay in control</strong> — simple, focused tools you’ll actually use every month.</li>
          </ul>
        </section>

        {/* FEATURES */}
        <section id="how-it-works" aria-labelledby="features" style={{ marginTop: 28 }}>
          <h2 id="features">Key features</h2>
          <ul>
            <li><strong>FI Number Calculator (4% Rule)</strong> — a clear target you can plan around.</li>
            <li><strong>Compound Interest Calculator</strong> — experiment with contributions, time horizon and returns.</li>
            <li><strong>Income &amp; Savings Planner (75/15/10)</strong> — pay your future self first, then live on the rest.</li>
            <li><strong>What-if Scenarios</strong> — adjust returns, inflation or monthly savings to compare outcomes.</li>
            <li><strong>Multi-language</strong> — built for an international audience.</li>
            <li><strong>Privacy-first</strong> — no analytics, no ads, no server-side data collection.</li>
          </ul>
        </section>

        {/* PRIVACY */}
        <section aria-labelledby="privacy" style={{ marginTop: 28 }}>
          <h2 id="privacy">Privacy &amp; sync</h2>
          <p>
            Your data stays <strong>on your device</strong>. If you turn on sync, it uses your <strong>private iCloud account</strong> via Apple CloudKit.
            We do <strong>not</strong> run any servers that process your data.
          </p>
          <p>
            Read our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>.
          </p>
        </section>

        {/* PRICING */}
        <section aria-labelledby="pricing" style={{ marginTop: 28 }}>
          <h2 id="pricing">Free trial &amp; pricing</h2>
          <p>
            Try Profiro with a <strong>14-day free trial</strong> (full access). Continue with a <strong>monthly or annual</strong> subscription via Apple’s
            In-App Purchase. Cancel anytime in your Apple ID settings.
          </p>
          <p>
            <Link className="cta" href="https://apps.apple.com/">Get it on the App Store</Link>
          </p>
        </section>

        {/* BLOG SHORTCUT */}
        <section aria-labelledby="learn-more" style={{ marginTop: 28 }}>
          <h2 id="learn-more">Learn more</h2>
          <ul>
            <li><Link href="/blog/rule-4-percent">The 4% Rule</Link> — your ticket to financial freedom</li>
            <li><Link href="/blog/compound-interest">Compound Interest</Link> — let your money work for you</li>
            <li><Link href="/blog/rule-75-15-10">The 75/15/10 Rule</Link> — a practical compass for your money</li>
          </ul>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq" style={{ marginTop: 28 }}>
          <h2 id="faq">FAQ</h2>
          <details style={{ marginBottom: 8 }}>
            <summary>Is my data private?</summary>
            <p>Yes. Data stays on device and (optionally) in your iCloud. We don’t collect analytics and don’t run servers with your data.</p>
          </details>
          <details style={{ marginBottom: 8 }}>
            <summary>Is there a free version?</summary>
            <p>You get a 14-day free trial with full access. After that, continue with a monthly or annual plan via Apple In-App Purchase.</p>
          </details>
          <details>
            <summary>Can I change assumptions (returns, inflation)?</summary>
            <p>Yes. Use scenario inputs and compare results over time.</p>
          </details>
        </section>
      </main>

      <footer className="footer container">© {new Date().getFullYear()} Profiro. All rights reserved.</footer>
    </>
  );
}