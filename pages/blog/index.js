import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

const posts = [
  {
    slug: "rule-4-percent",
    title: "The 4% Rule: Your Ticket to Financial Freedom",
    image: "/blog_pictures/4-percent-rule.jpg",
    excerpt: "A simple formula to estimate how much you need to retire and reach financial independence.",
    date: "2025-10-20",
  },
  {
    slug: "compound-interest",
    title: "Compound Interest: Let Your Money Work for You",
    image: "/blog_pictures/compound-interest.png",
    excerpt: "Discover the snowball effect that turns small amounts into great wealth over time.",
    date: "2025-10-20",
  },
  {
    slug: "rule-75-15-10",
    title: "The 75/15/10 Rule: A Compass for Your Money",
    image: "/blog_pictures/The-75-15-10-rule.png",
    excerpt: "A practical budgeting system — 15% investing, 10% saving, 75% living.",
    date: "2025-10-20",
  },
];

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog — Profiro</title>
        <meta
          name="description"
          content="Articles about Financial Independence (FIRE), saving, investing, and using Profiro effectively."
        />
        <link rel="canonical" href="https://www.profiroapp.com/blog" />
      </Head>

      <Nav />

      <main
        className="container"
        style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px", lineHeight: 1.6 }}
      >
        <h1 style={{ marginBottom: 24 }}>Blog</h1>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {posts.map((p) => (
            <li key={p.slug} style={{ marginBottom: 48 }}>
              {p.image && (
                <div style={{ marginBottom: 16, borderRadius: 12, overflow: "hidden" }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ width: "100%", height: "auto", display: "block", maxHeight: 300, objectFit: "cover" }}
                  />
                </div>
              )}
              <h2 style={{ margin: "0 0 8px" }}>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p style={{ margin: "6px 0 8px", color: "#475569" }}>{p.excerpt}</p>
              <p style={{ margin: 0, fontSize: 13, color: "#64748b" }}>
                {new Date(p.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </li>
          ))}
        </ul>
      </main>

      {/* FIXED Footer structure for full width background */}
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