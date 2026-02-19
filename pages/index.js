import Head from "next/head";
import Link from "next/link";
import Nav from "./components/Nav";
import { useRef, useState } from "react";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);
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

  // Carousel Logic
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -304, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 304, behavior: "smooth" });
    }
  };

  // Video Interaction Handler (Hybrid)
  const videoRef = useRef(null);
  const handleVideoInteraction = () => {
    setIsMuted(false);
    if (videoRef.current) {
      videoRef.current.muted = false; // Force mute off
      videoRef.current.controls = true; // Enable native controls
    }
  };

  return (
    <>
      <Head>
        <title>Profiro — Make Work Optional | Your Personal Financial Compass</title>
        <meta
          name="description"
          content="Stop working because you have to. Start building a plan for Financial Independence (FIRE). Profiro is the privacy-first net worth tracker and FIRE calculator for iOS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.profiroapp.com/" />

        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Profiro — Make Work Optional | Financial Independence" />
        <meta
          property="og:description"
          content="Don't just track expenses. Plan your exit from the rat race. Privacy-first net worth tracking and FIRE planning on iOS."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.profiroapp.com/" />
        <meta property="og:image" content="https://www.profiroapp.com/og/home.png" />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <Nav />

      <main>
        {/* =========================================
           1. HERO SECTION (Split Layout)
           ========================================= */}
        <header className="hero" style={{ background: '#fff', textAlign: 'center' }}>
          <div className="container hero-v2-container" style={{ alignItems: 'center' }}>

            {/* LEFT: Text Content */}
            <div className="hero-v2-left" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Logo removed from here as it is now in Nav */}

              <h1 className="hero-title" style={{ lineHeight: '1.2', marginBottom: '24px', textAlign: 'center' }}>
                Tired of Working <br />
                <span className="text-gradient-red">Just to Pay the Bills?</span>
              </h1>

              <img
                src="/ilustracni-obrazky/hero-section-picture.png"
                alt="Tired of working just to pay the bills"
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  marginBottom: '16px',
                  display: 'block',
                  margin: '0 auto 16px'
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div className="narrative-box" style={{ textAlign: 'center', margin: '4px 0 35px' }}>
                  <h2 style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: 'white',
                    lineHeight: '1.2',
                    marginBottom: '16px',
                    letterSpacing: '-0.02em'
                  }}>
                    Picture this: <br />
                    Your bills vanish on autopilot.
                  </h2>
                  <p style={{
                    fontSize: '1.1rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    lineHeight: '1.6',
                    marginBottom: '12px',
                    fontWeight: 400,
                    maxWidth: '460px',
                    margin: '0 auto 12px'
                  }}>
                    Suddenly, you're free to chase that dream trip, hug your kids longer, or pour your heart into a passion project.
                  </p>

                  {/* Separator Line */}
                  <div style={{
                    width: '40px',
                    height: '2px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    margin: '0 auto 12px',
                    borderRadius: '2px'
                  }}></div>

                  <p style={{
                    fontSize: '1rem',
                    color: '#0f172a', // Premium dark/black for contrast experiment
                    lineHeight: '1.5',
                    marginBottom: 0,
                    fontWeight: 700,
                    fontStyle: 'italic',
                    maxWidth: '400px',
                    margin: '0 auto'
                  }}>
                    No more grinding in a soul-sucking job just to survive.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: Video Visuals */}
            <div className="hero-v2-right">
              <div className="decorative-blob"></div>

              <div className="hero-video-wrapper" style={{ position: 'relative' }}>
                <video
                  ref={videoRef}
                  src="/video/Profiro-landing-page-video.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster="/screenshots/1.png"
                  style={{ width: '100%', height: '100%', borderRadius: '24px', cursor: 'pointer' }}
                  onClick={handleVideoInteraction}
                />

                {isMuted && (
                  <button
                    onClick={handleVideoInteraction}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(0, 0, 0, 0.5)',
                      color: '#fff',
                      border: '1.5px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '50%',
                      width: '72px',
                      height: '72px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      backdropFilter: 'blur(12px)',
                      zIndex: 10,
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.05)';
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.65)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                    }}
                    aria-label="Unmute video"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* FULL WIDTH BOTTOM SECTION (Centered) */}
          <div className="container hero-bottom-centered">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <p style={{ color: '#64748b', fontWeight: 500, marginBottom: '32px', maxWidth: '600px' }}>
                It’s just a matter of math and time. Profiro helps you build the plan to make it happen.
                <span style={{ display: 'block', marginTop: '8px', fontSize: '0.9em', color: '#94a3b8', fontWeight: 400 }}>
                  🛡️ 100% Private. Manual Control. Mobile-first.
                </span>
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
                <a
                  href="https://apps.apple.com/app/id6753187157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-link"
                  style={{ margin: 0 }}
                >
                  <img
                    src="/badges/app-store-badge.svg"
                    alt="Download on the App Store"
                    width="180"
                    height="60"
                  />
                </a>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                  Start your 14-day free trial. Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </header>



        {/* =========================================
           2. THE PAIN (Better Cards)
           ========================================= */}
        <section id="problem" className="pain-dark-section">
          <div className="pain-glow"></div>
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>
            <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '24px', lineHeight: 1.2 }}>Do you feel trapped in the system?</h2>
              <p className="section-desc" style={{ color: '#cbd5e1' }}>
                Millions of people work jobs they dislike just to pay bills, with no end in sight.
                <span style={{ display: 'block', marginTop: '12px' }}>
                  <strong style={{ color: '#e11d48' }}>Is this your reality?</strong>
                </span>
              </p>
            </div>

            <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              <article className="card-v2" style={{ padding: '8px 32px 32px' }}>
                <div style={{
                  width: '240px',
                  height: '240px',
                  margin: '0 auto 4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '0'
                }}>
                  <img src="/ilustracni-obrazky/Rat-Race.PNG" alt="Rat Race" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title">The Rat Race</h3>
                <p className="feature-text text-slate-600">
                  You're earning, spending, and staring at an empty bank account every month. That knot in your stomach when the bills hit?
                  Years slip by, and you're still spinning in the same endless loop – exhausted, but no closer to escape.
                </p>
              </article>
              <article className="card-v2">
                <div style={{
                  width: '190px',
                  height: '190px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '8px'
                }}>
                  <img src="/ilustracni-obrazky/Fear-of-the-Future.PNG" alt="Fear of the Future" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title">Fear of the Future</h3>
                <p className="feature-text text-slate-600">
                  The thought of slaving away until 70 keeps you up at night. Without a real plan, retirement feels like a <strong>distant fantasy</strong>, leaving you anxious about tomorrow.
                </p>
              </article>
              <article className="card-v2">
                <div style={{
                  width: '200px',
                  height: '200px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '8px'
                }}>
                  <img src="/ilustracni-obrazky/Dead-End.PNG" alt="The Dead End" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title">The Dead End</h3>
                <p className="feature-text text-slate-600">
                  Your bank app mocks you with yesterday's regrets. It doesn't whisper how to break free – just reminds you of the cage you're in.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================
           3. THE SOLUTION (Highlighting USP)
           ========================================= */}
        <section id="solution" className="section-v2" style={{ background: '#fff' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '20px' }}>
              <h2 className="section-v2-title">
                Stop just saving. <br />
                <span className="text-gradient">Start buying your freedom.</span>
              </h2>
              <p className="section-desc">
                Profiro turns your foggy dreams into a crystal-clear roadmap, empowering you to make choices that feel liberating.
              </p>
            </div>

            <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

              {/* GOAL DEFITION */}
              <article className="card-v2" style={{ background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)', border: '1px solid #047857' }}>
                <div style={{
                  width: '100%',
                  height: '180px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img src="/ilustracni-obrazky/Define-Your-Goal.PNG" alt="Define Your Goal" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title text-gradient-gold">Define Your Goal</h3>
                <p className="feature-text" style={{ color: '#ecfdf5' }}>
                  You can’t reach a goal if you don’t know what it is.
                  Did you know that the amount you need for financial freedom might be smaller than you think?
                  But unless you know your exact number, independence will forever stay a vague destination.
                  Profiro calculates your path instantly.
                </p>
              </article>

              {/* MINDFUL SPENDING (Highlighted) */}
              <article className="card-v2" style={{ background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)', border: '1px solid #34d399', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '100px', height: '100px', background: '#34d399', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.3 }}></div>
                <div style={{
                  width: '100%',
                  height: '180px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img src="/ilustracni-obrazky/Mindful-Spending.PNG" alt="Mindful Spending" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title text-gradient-gold">Mindful Spending</h3>
                <p className="feature-text" style={{ color: '#ecfdf5' }}>
                  <strong>Why no bank sync?</strong> Automatic tracking is easy to ignore.
                  Manual entry forces you to pay attention to every dollar.
                  This simple habit is the fastest way to regain control.
                  It's that 'aha' moment when you realize you're not just surviving – you're thriving.
                </p>
              </article>

              {/* PRIVACY */}
              <article className="card-v2" style={{ background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)', border: '1px solid #047857' }}>
                <div style={{
                  width: '100%',
                  height: '180px',
                  margin: '0 auto 20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <img src="/ilustracni-obrazky/Privacy.PNG" alt="Privacy" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title text-gradient-gold">Privacy</h3>
                <p className="feature-text" style={{ color: '#ecfdf5' }}>
                  <strong>What happens on your iPhone...</strong><br />
                  ...stays on your iPhone. Rest easy knowing your financial plans are private.
                  Your data lives securely on your device and your personal iCloud.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================
           3.5 SCREENSHOTS STRIP (Relocated)
           ========================================= */}
        <section className="screenshots-strip" style={{ backgroundColor: '#f8fafc' }}>
          <div className="container">
            <div className="carousel-v2-container" style={{ maxWidth: '100%' }}>
              <button className="carousel-control-btn left" onClick={scrollLeft} aria-label="Scroll left" style={{ left: '10px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>

              <div className="carousel-v2-scroll" ref={scrollRef}>
                <img className="carousel-v2-item" src="/screenshots/1.png" alt="Dashboard" />
                <img className="carousel-v2-item" src="/screenshots/2.png" alt="Financial Freedom" />
                <img className="carousel-v2-item" src="/screenshots/3.png" alt="Compound Interest" />
                <img className="carousel-v2-item" src="/screenshots/4.png" alt="Goals" />
                <img className="carousel-v2-item" src="/screenshots/5.png" alt="Account Management" />
                <img className="carousel-v2-item" src="/screenshots/6.png" alt="Secure Privacy" />
              </div>

              <button className="carousel-control-btn right" onClick={scrollRight} aria-label="Scroll right" style={{ right: '10px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================
           4. KEY FEATURES (Bento Grid)
           ========================================= */}
        <section id="features" className="section-v2" style={{ background: 'linear-gradient(135deg, #059669 0%, #065f46 100%)' }}>
          <div className="container">
            <div className="text-center" style={{ marginBottom: '24px' }}>
              <span style={{ display: 'block', color: '#fff', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Features</span>
              <h2 className="section-v2-title text-gradient-gold" style={{ marginTop: '8px' }}>Tools for Financial Independence</h2>
              <p className="section-desc" style={{ color: '#ecfdf5' }}>
                Profiro is not a trading app. It is a powerful planner and tracker for your journey to financial freedom.
              </p>
            </div>

            <div className="bento-grid">
              {/* Feature 1 - Highlighted USP (Large) */}
              <article className="card-v2 bento-span-2-row" style={{ border: '2px solid #d1fae5', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ width: '100%', height: '200px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/ilustracni-obrazky/Financial-Freedom-Planner.PNG" alt="Financial Freedom Planner" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title" style={{ fontSize: '1.5rem' }}>Financial Freedom Planner</h3>
                <p className="feature-text text-slate-600">
                  Breathe easy knowing exactly what it takes. Simply <strong>input your desired monthly income</strong> and set your timeline.
                  <br /><br />
                  Based on the proven <strong>4% Rule</strong>, Profiro calculates exactly how much you need to contribute monthly (to your own brokerage) to reach <strong>Financial Independence (FIRE)</strong>.
                </p>
              </article>

              {/* Feature 2 */}
              <article className="card-v2">
                <div style={{ width: '100%', height: '160px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/ilustracni-obrazky/Compound-Interest.png" alt="Compound Interest" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title">Compound Interest Calculator</h3>
                <p className="feature-text text-slate-600">
                  <span className="text-emerald-600" style={{ fontWeight: 600 }}>Make money while you sleep.</span> If you only trade time for money, you'll work forever. Visualize how compound interest turns your savings into a 24/7 income stream that grows exponentially.
                </p>
              </article>

              {/* Feature 3 */}
              <article className="card-v2">
                <div style={{ width: '100%', height: '160px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/ilustracni-obrazky/All-Assets.PNG" alt="All Assets in One Place" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title">All Assets in One Place</h3>
                <p className="feature-text text-slate-600">
                  Unite everything in one spot. Manually create accounts for <strong>any asset</strong>: Cash, Bank Accounts, Crypto (Bitcoin, ETH), or Real Estate. Update their value manually and watch your total Net Worth grow.
                </p>
              </article>

              {/* Feature 4 */}
              <article className="card-v2">
                <div style={{ width: '100%', height: '160px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/ilustracni-obrazky/75-15-10-Rule.PNG" alt="75/15/10 Rule" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title">75/15/10 Rule</h3>
                <p className="feature-text text-slate-600">
                  Reclaim your peace – this simple rule turns chaos into calm. Learn to allocate 15% to investments and 10% to savings automatically, while living comfortably on the rest.
                </p>
              </article>

              {/* Feature 5 - Multi-currency */}
              <article className="card-v2">
                <div style={{ width: '100%', height: '160px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/ilustracni-obrazky/Multi-Currency.PNG" alt="Multi-Currency" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title">Multi-Currency</h3>
                <p className="feature-text text-slate-600">
                  Track the value of your assets in USD, EUR, CZK or any other currency. Fully localized in 11 languages.
                </p>
              </article>

              {/* Feature 6 */}
              <article className="card-v2">
                <div style={{ width: '100%', height: '160px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/ilustracni-obrazky/Educational-Hub.PNG" alt="Educational Hub" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
                <h3 className="feature-title">Educational Hub</h3>
                <p className="feature-text text-slate-600">
                  Empower yourself with knowledge that sticks – understand the "why" behind the numbers. Read built-in articles about The 4% Rule, Compound Interest, and budgeting systems.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* =========================================
           5. URGENCY (Dark Mode)
           ========================================= */}
        <section id="urgency" className="urgency-dark-section">
          <div className="urgency-glow"></div>
          <div className="container" style={{ position: 'relative', zIndex: 10 }}>

            {/* H2: Malý nadpis */}
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#94a3b8', marginBottom: '32px' }}>
              Don't wait for "more money" to take control.
            </h2>

            {/* H3: Hlavní nadpis */}
            <h3 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '40px' }}>
              <span className="text-gradient-mint">Time compounds your wealth</span><br />
              <span className="text-gradient-red">— or your regrets.</span>
            </h3>

            {/* P: Tělo textu - ROZDĚLENO PRO ČITELNOST */}
            <p style={{ maxWidth: 700, margin: '0 auto 48px', fontSize: '1.25rem', color: '#cbd5e1', lineHeight: '1.6' }}>
              The biggest mistake is thinking you need to be rich to manage your money.
              In reality, <strong>managing what you have now</strong> is how you build wealth.
              <br /><br />
              The sooner you start, the less you'll need to invest each month – and the sooner you'll be free.
              <br /><br />
              Imagine looking back in 5 years, wishing you had started today.
              Don't let another day be stolen from your freedom.

              {/* CTA Text */}
              <strong style={{ color: '#fff', display: 'block', marginTop: '32px', fontSize: '1.3rem' }}>
                Your future self is begging you to start.
              </strong>
            </p>

            <a
              href="https://apps.apple.com/app/id6753187157"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow btn-gradient-mint"
              style={{
                display: "inline-block",
                padding: '16px 40px',
                fontSize: '1.1rem',
                borderRadius: '100px',
                textDecoration: 'none',
                fontWeight: 700
              }}
            >
              Get Your Plan Now →
            </a>
          </div>
        </section>

        {/* =========================================
           6. PRICING & OFFER
           ========================================= */}
        <section className="section-v2 bg-white" style={{ paddingBottom: '20px' }}>
          <div className="container">
            <div className="pricing-card pricing-card-v2">
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>Invest in your future</h2>
              <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '16px' }}>
                The price of financial independence is less than one coffee a month.
              </p>
              <div style={{
                width: '40px',
                height: '2px',
                background: '#e2e8f0',
                margin: '0 auto 16px',
                borderRadius: '2px'
              }}></div>
              <p style={{ fontSize: '1.1rem', color: '#475569', marginBottom: '32px' }}>
                It's not just an app – it's your ticket to sleeping better, knowing freedom is within reach.
              </p>

              <div className="pricing-internal-box">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#334155' }}>
                    <span className="text-emerald-600" style={{ fontSize: '1.25rem' }}>✅</span> <strong>14-Day Free Trial</strong> (Zero Risk)
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#334155' }}>
                    <span className="text-emerald-600" style={{ fontSize: '1.25rem' }}>✅</span> Full Access to All Planners
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#334155' }}>
                    <span className="text-emerald-600" style={{ fontSize: '1.25rem' }}>✅</span> Unlimited Accounts & Goals
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="https://apps.apple.com/app/id6753187157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="store-link"
                  style={{ display: "inline-block", transition: 'opacity 0.2s' }}
                >
                  <img
                    src="/badges/app-store-badge.svg"
                    alt="Download on the App Store"
                    width="180"
                    height="60"
                  />
                </a>
              </div>
              <p style={{ fontSize: '0.8rem', marginTop: '16px', marginBottom: 0, color: '#94a3b8' }}>
                No charge until the trial ends. Cancel anytime in Apple Settings.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
           7. FAQ
           ========================================= */}
        <section id="faq" className="section-v2 bg-white">
          <div className="container" style={{ maxWidth: '800px' }}>
            <h2 className="section-v2-title text-center" style={{ marginBottom: '48px' }}>FAQ</h2>

            <details className="details-v2">
              <summary className="summary-v2">Why no automatic bank sync?</summary>
              <p style={{ marginTop: 16, color: "#475569", lineHeight: 1.6 }}>
                We believe in <strong>mindful spending</strong>. Automatic tracking often goes unnoticed.
                Manually entering transactions makes you hyper-aware of your spending habits, which is key to saving more.
                Plus, it guarantees that no third-party service ever accesses your bank credentials.
              </p>
            </details>

            <details className="details-v2">
              <summary className="summary-v2">Is my data secure?</summary>
              <p style={{ marginTop: 16, color: "#475569", lineHeight: 1.6 }}>
                Yes. Profiro uses an <strong>offline-first architecture</strong>. Your data resides on your device and syncs only via your personal <strong>Apple iCloud</strong>.
                We have absolutely no access to your financial data.
              </p>
            </details>

            <details className="details-v2">
              <summary className="summary-v2">I don't earn much yet. Is this for me?</summary>
              <p style={{ marginTop: 16, color: "#475569", lineHeight: 1.6 }}>
                Absolutely. Profiro is not a trading platform, so you don't need capital to use it.
                It is a planner that helps you optimize your current finances.
                The goal is to help you find the money to start investing elsewhere, regardless of your current income.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer footer-force-full">
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
