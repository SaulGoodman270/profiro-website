import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <Head>
        <title>Compound Interest: The Secret to Wealth Building — Profiro</title>
        <meta
          name="description"
          content="Understand how compound interest works and why starting early is the key to financial freedom. See real-world examples of wealth growth over time."
        />
        <link rel="canonical" href="https://www.profiroapp.com/blog/compound-interest" />

        {/* Open Graph */}
        <meta property="og:title" content="Compound Interest: Let Your Money Work for You" />
        <meta property="og:description" content="Discover the snowball effect that turns small amounts into great wealth over time." />
        <meta property="og:image" content="https://www.profiroapp.com/blog_pictures/compound-interest.png" />
        <meta property="og:url" content="https://www.profiroapp.com/blog/compound-interest" />
        <meta property="og:type" content="article" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "Compound Interest: Let Your Money Work for You",
              "image": "https://www.profiroapp.com/blog_pictures/compound-interest.png",
              "datePublished": "2025-10-20",
              "author": {
                "@type": "Person",
                "name": "Marek Brichcin"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Profiro",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.profiroapp.com/Profiro%20P%20logo%20cerne.png"
                }
              },
              "description": "Compound interest explained: how small amounts can grow into great wealth over time."
            })
          }}
        />
      </Head>

      <Nav />

      <main className="container blog-article">
        <h1>Compound Interest: Let Your Money Work for You</h1>
        <p className="publish-date"><em>Published: October 20, 2025</em></p>

        <img
          src="/blog_pictures/compound-interest.png"
          alt="Compound Interest Illustration"
          style={{ width: "100%" }}
        />

        <p>
          Albert Einstein reportedly called compound interest the eighth wonder of the world. Why?
          Because it can turn small amounts into a fortune — given enough time and consistency.
        </p>

        <h2>🔁 What Is Compound Interest?</h2>
        <p>
          It means earning <strong>“interest on interest.”</strong> Over time, this creates a snowball
          effect that accelerates growth — your money starts earning more money for you.
        </p>

        <h2>Simple vs. Compound Example</h2>
        <p>
          <strong>Simple interest:</strong> $10,000 at 10% → $13,000 after 3 years.
          <br />
          <strong>Compound interest:</strong> $10,000 → $11,000 → $12,100 →{" "}
          <strong>$13,310</strong> after 3 years.
        </p>

        <h2>📘 A Real Story: Ronald Read — the Janitor Millionaire</h2>
        <p>
          Ronald Read lived a modest life, working as a janitor and gas station attendant. But he
          consistently invested small sums into solid dividend-paying companies and reinvested his
          earnings. Over decades, compound interest turned him into a millionaire.
        </p>
        <p><strong>Lesson:</strong> start early, stay patient, and let time work its magic.</p>

        <h2>⏳ Two Keys to Success: Time and Consistency</h2>
        <ol>
          <li><strong>Time</strong> — the earlier you start, the more your money grows.</li>
          <li><strong>Consistency</strong> — regular investing, even in small amounts, makes a huge difference.</li>
        </ol>

        <h2>🧮 Example: Adam vs. Barbara</h2>
        <p>
          Both invest $500 per month at an 8% average annual return.
        </p>
        <ul>
          <li><strong>Adam</strong> starts at 25 and stops after 10 years (total invested $60,000). He leaves it untouched until 65.</li>
          <li><strong>Barbara</strong> starts at 35 and invests for 30 years ($180,000 total).</li>
        </ul>
        <p>
          <strong>Result at 65:</strong> Adam ≈ $930,000, Barbara ≈ $740,000 — Adam wins by starting earlier.
        </p>

        <hr style={{ margin: "28px 0" }} />
        <p>
          👉 <strong>Try the Compound Interest Calculator</strong> inside the Profiro app and see how
          your own numbers grow.{" "}
          <Link href="https://apps.apple.com/app/id6753187157">Open in the App Store</Link>
        </p>
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