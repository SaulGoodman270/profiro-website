import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

const posts = [
  {
    slug: "rule-4-percent",
    title: "The 4% Rule: Your Ticket to Financial Freedom",
    excerpt: "A simple formula to estimate how much you need to retire and reach financial independence.",
    date: "2025-10-20",
  },
  {
    slug: "compound-interest",
    title: "Compound Interest: Let Your Money Work for You",
    excerpt: "Discover the snowball effect that turns small amounts into great wealth over time.",
    date: "2025-10-20",
  },
  {
    slug: "rule-75-15-10",
    title: "The 75/15/10 Rule: A Compass for Your Money",
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
            <li key={p.slug} style={{ marginBottom: 24 }}>
              <h2 style={{ margin: "0 0 6px" }}>
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p style={{ margin: "6px 0 4px", color: "#475569" }}>{p.excerpt}</p>
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

      <footer className="footer container">
        © {new Date().getFullYear()} Profiro. All rights reserved.
      </footer>
    </>
  );
}