import Head from "next/head";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Profiro — Plan Your Path to Financial Freedom</title>
        <meta
          name="description"
          content="Calculate your Financial Freedom number, build a monthly plan, and let compound growth work for you. Privacy-first, on your iPhone."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.profiroapp.com/" />

        <meta property="og:title" content="Profiro — Plan Your Path to Financial Freedom" />
        <meta
          property="og:description"
          content="Calculate your Financial Freedom number, build a monthly plan, and let compound growth work for you. Privacy-first, on your iPhone."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.profiroapp.com/" />
        <meta property="og:image" content="https://www.profiroapp.com/og/home.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.profiroapp.com/og/home.png" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </Head>

      <Nav />

      {/* HERO */}
<header className="hero">
  <div className="container hero-inner">
    {/* Logo */}
    <img
      src="/brand/profiro-logo-black.png"
      alt="Profiro logo"
      className="brandmark"
      width={96}
      height={96}
      loading="eager"
      decoding="async"
    />

    {/* Název značky pod logem */}
    <h1 className="appname">Profiro</h1>

    {/* Hlavní headline zvlášť */}
    <h2 className="hero-title">Plan Your Path to Financial Freedom</h2>

    {/* Podtitul */}
    <p className="hero-tagline">
      Calculate your Financial Freedom number, build a monthly plan, and let compound growth work for you.
      Privacy-first, on your iPhone.
    </p>

    {/* App Store badge */}
    <div className="store-badge">
      <a
        href="https://apps.apple.com/app/id6753187157"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on the App Store"
      >
        <img
          src="/badges/app-store-badge.svg"
          alt="Download on the App Store"
          width="180"
          height="60"
        />
      </a>
    </div>

{/* SCREENSHOTS SECTION */}
    <div className="screenshots">
      <img src="/screenshots/1.png" alt="Profiro screenshot 1" />
      <img src="/screenshots/2.png" alt="Profiro screenshot 2" />
      <img src="/screenshots/3.png" alt="Profiro screenshot 3" />
      <img src="/screenshots/4.png" alt="Profiro screenshot 4" />
      <img src="/screenshots/5.png" alt="Profiro screenshot 5" />
      <img src="/screenshots/6.png" alt="Profiro screenshot 6" />
    </div>

  </div>
</header>

      <main
        className="container"
        style={{ maxWidth: 980, margin: "0 auto", padding: "32px 16px", lineHeight: 1.65 }}
      >
        {/* WHY */}
        <section aria-labelledby="why">
          <h2 id="why">Why Profiro?</h2>
          <ul>
            <li>
              <strong>Know your Financial Freedom number</strong> — estimate what you need using the time-tested 4%
              rule.
            </li>
            <li>
              <strong>Turn goals into a plan</strong> — set monthly contributions and track real progress.
            </li>
            <li>
              <strong>Let compounding work</strong> — see long-term projections that keep you motivated.
            </li>
            <li>
              <strong>Stay in control</strong> — simple, focused tools you’ll actually use every month.
            </li>
          </ul>
        </section>

        {/* FEATURES */}
        <section id="features" aria-labelledby="features" style={{ marginTop: 28 }}>
          <h2 id="features">Key features</h2>
          <ul>
            <li>
              <strong>Financial Freedom Number (4% Rule)</strong> — a clear target you can plan around.
            </li>
            <li>
              <strong>Compound Interest Calculator</strong> — experiment with contributions, time horizon and returns.
            </li>
            <li>
              <strong>Income &amp; Savings Planner (75/15/10)</strong> — pay your future self first, then live on the
              rest.
            </li>
            <li>
              <strong>What-if Scenarios</strong> — adjust returns, inflation or monthly savings to compare outcomes.
            </li>
            <li>
              <strong>Multi-language</strong> — built for an international audience.
            </li>
            <li>
              <strong>Privacy-first</strong> — no analytics, no ads, no server-side data collection.
            </li>
          </ul>
        </section>

        {/* PRIVACY */}
        <section aria-labelledby="privacy" style={{ marginTop: 28 }}>
          <h2 id="privacy">Privacy &amp; sync</h2>
          <p>
            Your data stays <strong>on your device</strong>. Sync uses your <strong>private iCloud account</strong> via
            Apple CloudKit and is <strong>enabled by default</strong>. We don’t run servers that process your data.
          </p>
          <p>
            Read our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>.
          </p>
        </section>

        {/* PRICING */}
        <section aria-labelledby="pricing" style={{ marginTop: 28 }}>
          <h2 id="pricing">Free trial &amp; pricing</h2>
          <p>
            Try Profiro with a <strong>14-day free trial</strong> (full access). Continue with a{" "}
            <strong>monthly or annual</strong> subscription via Apple’s In-App Purchase. Cancel anytime in your Apple ID
            settings.
          </p>

          {/* Official App Store Badge */}
          <div style={{ marginTop: 12 }}>
            <a
              href="https://apps.apple.com/app/id6753187157"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
            >
              <img
                src="/badges/app-store-badge.svg"
                alt="Download on the App Store"
                width="160"
                height="54"
                style={{ display: "block", margin: "0 auto" }}
              />
            </a>
          </div>
        </section>

        {/* BLOG SHORTCUT */}
        <section aria-labelledby="learn-more" style={{ marginTop: 28 }}>
          <h2 id="learn-more">Learn more</h2>
          <ul>
            <li>
              <Link href="/blog/rule-4-percent">The 4% Rule</Link> — your ticket to financial freedom
            </li>
            <li>
              <Link href="/blog/compound-interest">Compound Interest</Link> — let your money work for you
            </li>
            <li>
              <Link href="/blog/rule-75-15-10">The 75/15/10 Rule</Link> — a practical compass for your money
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq" style={{ marginTop: 28 }}>
          <h2 id="faq">FAQ</h2>
          <details style={{ marginBottom: 8 }}>
            <summary>Is my data private?</summary>
            <p>
              Yes. Data stays on your device and (optionally) in your iCloud. We don’t collect analytics and don’t run
              servers with your data.
            </p>
          </details>
          <details>
            <summary>Is there a free version?</summary>
            <p>
              You get a 14-day free trial with full access. After that, continue with a monthly or annual plan via Apple
              In-App Purchase.
            </p>
          </details>
        </section>
      </main>

      <footer className="footer container">© {new Date().getFullYear()} Profiro. All rights reserved.</footer>
    </>
  );
}