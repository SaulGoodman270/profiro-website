import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <Head>
        <title>Smart Saving Habits — Profiro</title>
        <meta name="description" content="Simple saving habits to speed up your path to FI." />
        <link rel="canonical" href="https://www.profiroapp.com/blog/smart-saving-habits" />
      </Head>
      <Nav />
      <main className="container" style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px", lineHeight: 1.6 }}>
        <h1>Smart Saving Habits</h1>
        <p><em>Published: 2025-10-20</em></p>
        <p>Tady brzy vložím finální text z XLIFF, sjednocený s obsahem v aplikaci.</p>
        <hr style={{ margin: "24px 0" }} />
        <p>Vyzkoušej tyto postupy přímo v aplikaci Profiro. <Link href="https://apps.apple.com/">Get it on the App Store</Link></p>
      </main>
      <footer className="footer container">© {new Date().getFullYear()} Profiro. All rights reserved.</footer>
    </>
  );
}