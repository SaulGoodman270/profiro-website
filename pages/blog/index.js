import Head from "next/head";
import Link from "next/link";
import Nav from "../components/Nav";

export default function BlogIndex() {
  return (
    <>
      <Head>
        <title>Blog — Profiro</title>
        <meta name="description" content="Articles about Financial Independence (FIRE), saving, and using Profiro effectively." />
        <link rel="canonical" href="https://www.profiroapp.com/blog" />
      </Head>

      <Nav />

      <main className="container" style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px", lineHeight: 1.6 }}>
        <h1 style={{ marginBottom: 24 }}>Blog</h1>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {/* Tyto položky doplním přesně podle XLIFF */}
          <li style={{ marginBottom: 20 }}>
            <h2 style={{ margin: "0 0 6px" }}>
              <Link href="/blog/fire-basics">FIRE: Basics</Link>
            </h2>
            <p style={{ margin: 0, color: "#475569" }}>Co je Financial Independence, jak se počítá FI číslo a jak s tím pomáhá Profiro.</p>
          </li>

          <li style={{ marginBottom: 20 }}>
            <h2 style={{ margin: "0 0 6px" }}>
              <Link href="/blog/smart-saving-habits">Smart Saving Habits</Link>
            </h2>
            <p style={{ margin: 0, color: "#475569" }}>Jednoduché návyky, které zrychlí cestu k finanční nezávislosti.</p>
          </li>

          <li style={{ marginBottom: 20 }}>
            <h2 style={{ margin: "0 0 6px" }}>
              <Link href="/blog/compound-interest">Compound Interest</Link>
            </h2>
            <p style={{ margin: 0, color: "#475569" }}>Složené úročení v praxi — proč je důležité začít co nejdříve.</p>
          </li>
        </ul>
      </main>

      <footer className="footer container">© {new Date().getFullYear()} Profiro. All rights reserved.</footer>
    </>
  );
}