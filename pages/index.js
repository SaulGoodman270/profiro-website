import Head from "next/head";
import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Profiro",
    "operatingSystem": "iOS",
    "applicationCategory": "FinanceApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "seller": {
        "@type": "Organization",
        "name": "Profiro"
      }
    },
    "description": "Your personal financial compass. Calculate your Financial Freedom number, build a monthly plan, and let compound growth work for you. Privacy-first, on your iPhone.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "10"
    }
  };

  return (
    <>
      <Head>
        <title>Profiro — Your Personal Financial Compass</title>
        <meta
          name="description"
          content="Profiro is more than a tracker. It's a manual financial compass for iOS that helps you plan for Financial Independence (FIRE) with privacy and clarity."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.profiroapp.com/" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Profiro — Master Your Financial Independence" />
        <meta
          property="og:description"
          content="Privacy-first net worth tracking and FIRE planning on iOS. Start your journey to financial freedom today."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.profiroapp.com/" />
        <meta property="og:image" content="https://www.profiroapp.com/og/home.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Profiro — Financial Independence App" />
        <meta name="twitter:description" content="Calculate your 4% rule, track net worth, and retire early. Privacy-first." />
        <meta name="twitter:image" content="https://www.profiroapp.com/og/home.png" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Nav />

      <main>
        {/* HERO HEADER */}
        <header className="hero">
          <div className="container">
            {/* Logo: User specified 'Profiro P logo cerne.png' which has correct ratio & bg */}
            <Link href="https://apps.apple.com/app/id6753187157" target="_blank" aria-label="View on App Store">
              <img
                src="/Profiro P logo cerne.png"
                alt="Profiro App Icon"
                className="brandmark-hero"
                width={120}
                height={120}
                loading="eager"
              />
            </Link>

            <h1 className="hero-title">
              Plan Your Path to <br />
              <span style={{ color: "var(--color-primary)" }}>Financial Freedom</span>
            </h1>

            <p className="hero-tagline">
              Profiro is your personal <strong>financial compass</strong>.<br />
              Don't just track the past—actively plan your future. <br className="mobile-break" />
              <strong>100% Private. Manual Control. Mobile-first.</strong>
            </p>

            {/* CTA Badge */}
            <div className="store-buttons">
              <a
                href="https://apps.apple.com/app/id6753187157"
                target="_blank"
                rel="noopener noreferrer"
                className="store-link"
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
          </div>

          {/* SCREENSHOTS CAROUSEL */}
          <div className="screenshots-container">
            <div className="screenshots-scroll">
              <img className="screenshot-item" src="/screenshots/1.png" alt="Net Worth Dashboard" width={280} height={560} />
              <img className="screenshot-item" src="/screenshots/2.png" alt="Financial Independence Calculator" width={280} height={560} />
              <img className="screenshot-item" src="/screenshots/3.png" alt="Compound Interest Projection" width={280} height={560} />
              <img className="screenshot-item" src="/screenshots/4.png" alt="Monthly Savings Goals" width={280} height={560} />
            </div>
          </div>
        </header>

        {/* WHY / VALUE PROPOSITION */}
        <section id="why" className="features-section" style={{ background: '#fff' }}>
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Why Profiro?</h2>
              <p className="section-desc">
                Most apps just show you where your money went. <br />
                Profiro helps you decide <strong>where it will go</strong>.
              </p>
            </div>

            <div className="features-grid">
              <article className="feature-card">
                <div className="feature-icon">🧭</div>
                <h3 className="feature-title">Your Financial Compass</h3>
                <p className="feature-text">
                  Navigate towards Financial Independence (FIRE). Set clear goals, link your accounts, and visualize your progress daily.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🛡️</div>
                <h3 className="feature-title">100% Control & Privacy</h3>
                <p className="feature-text">
                  <strong>No bank connections.</strong> You enter data manually, ensuring total privacy and mindfulness over every transaction. Data lives on <strong>your iCloud</strong>.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🔎</div>
                <h3 className="feature-title">Focus on What Matters</h3>
                <p className="feature-text">
                  Simple, distraction-free tools. No ads, no selling of your data. Just you and your path to wealth.
                </p>
              </article>
              <article className="feature-card">
                <div className="feature-icon">🌍</div>
                <h3 className="feature-title">Global & Ready</h3>
                <p className="feature-text">
                  Fully localized in <strong>11 languages</strong> including English, Czech, and German. Add accounts in any currency.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* KEY FEATURES */}
        <section id="features" className="features-section" style={{ background: 'var(--bg-surface)' }}>
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Powerful Planning Tools</h2>
              <p className="section-desc">
                Built with native iOS technologies (SwiftUI) for a premium, responsive experience.
              </p>
            </div>

            <div className="features-grid">
              {/* Feature 1 */}
              <article className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3 className="feature-title">Financial Freedom Planner</h3>
                <p className="feature-text">
                  Based on the <strong>4% Rule</strong>. Input your portfolio and expected returns to calculate exactly how much you need to retire early.
                </p>
              </article>

              {/* Feature 2 */}
              <article className="feature-card">
                <div className="feature-icon">💰</div>
                <h3 className="feature-title">Income & Savings (75/15/10)</h3>
                <p className="feature-text">
                  Optimize your cash flow. A practical tool to help you save 15%, invest 10%, and live comfortably on the rest.
                </p>
              </article>

              {/* Feature 3 */}
              <article className="feature-card">
                <div className="feature-icon">📈</div>
                <h3 className="feature-title">Compound Interest</h3>
                <p className="feature-text">
                  See the magic of time. Visualize how small monthly contributions grow into millions over 10, 20, or 30 years.
                </p>
              </article>

              {/* Feature 4 */}
              <article className="feature-card">
                <div className="feature-icon">🎓</div>
                <h3 className="feature-title">Educational Center</h3>
                <p className="feature-text">
                  Not just a tool, but a guide. Access built-in articles that explain complex financial concepts in simple terms.
                </p>
              </article>

              {/* Feature 5 */}
              <article className="feature-card">
                <div className="feature-icon">💳</div>
                <h3 className="feature-title">Smart Account Management</h3>
                <p className="feature-text">
                  Track unlimited accounts (Cash, Bank, Investment). Use templates for recurring transactions and categorize flawlessly.
                </p>
              </article>

              {/* Feature 6 */}
              <article className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3 className="feature-title">Privacy & Sync</h3>
                <p className="feature-text">
                  Your data syncs automatically via <strong>iCloud</strong>. We never see your transactions or bank logins.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* PRIVACY & SYNC */}
        <section id="privacy" className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
          <h2 className="section-title">Privacy & Security</h2>
          <p style={{ maxWidth: 700, margin: '0 auto 20px', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
            Profiro is designed for those who value privacy. <strong>100% Manual Entry</strong> means no third-party bank connectors reading your data.
            Everything stays on your device and your personal iCloud.
          </p>
          <p>
            Read our <Link href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</Link> and <Link href="/terms" style={{ textDecoration: 'underline' }}>Terms of Use</Link>.
          </p>
        </section>

        {/* PRICING & CALL TO ACTION */}
        <section className="container">
          <div className="pricing-card">
            <h2>Start your journey today</h2>
            <p>
              Try Profiro with a <strong>14-day free trial</strong> (full access). <br />
              Unlock your financial future for less than the price of a coffee per month.
            </p>

            <a
              href="https://apps.apple.com/app/id6753187157"
              target="_blank"
              rel="noopener noreferrer"
              className="store-link"
              style={{ display: "inline-block" }}
            >
              <img
                src="/badges/app-store-badge.svg"
                alt="Download on the App Store"
                width="180"
                height="60"
              />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="container" style={{ paddingBottom: 80 }}>
          <h2 className="section-title text-center">FAQ</h2>
          <div style={{ maxWidth: 680, margin: "0 auto", marginTop: 40 }}>
            <details style={{ marginBottom: 16, padding: "16px", background: "#f8fafc", borderRadius: 8 }}>
              <summary style={{ fontWeight: 600, cursor: "pointer" }}>Why no automatic bank sync?</summary>
              <p style={{ marginTop: 12, color: "var(--text-muted)" }}>
                We believe in <strong>mindful spending</strong>. Manually entering transactions makes you more aware of your money flow. Plus, it guarantees that no third-party service ever accesses your bank credentials.
              </p>
            </details>
            <details style={{ marginBottom: 16, padding: "16px", background: "#f8fafc", borderRadius: 8 }}>
              <summary style={{ fontWeight: 600, cursor: "pointer" }}>Is my data backed up?</summary>
              <p style={{ marginTop: 12, color: "var(--text-muted)" }}>
                Yes, automatically via your own private <strong>Apple iCloud</strong>. If you lose your phone, your data is safe and will restore on your new device.
              </p>
            </details>
            <details style={{ padding: "16px", background: "#f8fafc", borderRadius: 8 }}>
              <summary style={{ fontWeight: 600, cursor: "pointer" }}>Is there a free version?</summary>
              <p style={{ marginTop: 12, color: "var(--text-muted)" }}>
                We offer a generous <strong>14-day free trial</strong> with full access to all features (Financial Plans, Unlimited Accounts). After that, a subscription is required to support development.
              </p>
            </details>
          </div>
        </section>
      </main>

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
  );
}