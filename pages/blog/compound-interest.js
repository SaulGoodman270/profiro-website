import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <Head>
        <title>Compound Interest — Profiro</title>
        <meta name="description" content="Compound interest explained with simple examples." />
        <link rel="canonical" href="https://www.profiroapp.com/blog/compound-interest" />
      </Head>
      <Nav />
      <main className="container" style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px", lineHeight: 1.6 }}>
        <h1>Compound Interest</h1>
        <p><em>Published: 2025-10-20</em></p>
        <p>Tady bude finální text z XLIFF, včetně tabulek/příkladů, pokud je v appce máš.</p>
        <hr style={{ margin: "24px 0" }} />
        <p>Chceš si to spočítat na svých číslech? Zkus aplikaci Profiro. <Link href="https://apps.apple.com/">Get it on the App Store</Link></p>
      </main>
      <footer className="footer container">© {new Date().getFullYear()} Profiro. All rights reserved.</footer>
    </>
  );
}