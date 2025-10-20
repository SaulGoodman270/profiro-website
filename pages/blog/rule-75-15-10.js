import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <Head>
        <title>The 75/15/10 Rule — Profiro</title>
        <meta
          name="description"
          content="A simple budgeting rule: 15% investing, 10% saving, 75% living. A practical compass for your money."
        />
        <link rel="canonical" href="https://www.profiroapp.com/blog/rule-75-15-10" />
      </Head>

      <Nav />

      <main
        className="container"
        style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px", lineHeight: 1.65 }}
      >
        <h1>The 75/15/10 Rule: A Compass for Your Money</h1>
        <p><em>Published: October 20, 2025</em></p>

        <p>
          Most people handle money with no real plan — salary comes in, bills get paid, something
          gets spent, and if there’s anything left, maybe a bit gets saved. But that mindset rarely
          leads to financial freedom. The 75/15/10 rule flips that logic on its head.
        </p>

        <h2>🔢 What Is the 75/15/10 Rule?</h2>
        <p>
          It’s a simple framework for dividing your after-tax income into three categories —
          always in the same order.
        </p>

        <h2>1️⃣ 15% to INVESTING — Your Future Engine</h2>
        <p>
          These are the most valuable dollars you’ll ever spend — on your future self. This 15% goes
          into assets that grow or generate income (stocks, ETFs, real estate). The key: let time and
          compound interest work for you.
        </p>

        <h2>2️⃣ 10% to SAVINGS — Your Financial Safety Net</h2>
        <p>
          This builds your emergency fund and covers planned goals. It belongs in safe, liquid
          places — savings accounts, term deposits, etc. Aim for 3–6 months of expenses saved.
        </p>

        <h2>3️⃣ 75% to LIVING — Your Lifestyle Budget</h2>
        <p>
          Rent, food, transport, entertainment, loans, clothes. 75% is a ceiling, not a target — if
          you can live on less, redirect the extra to investing and accelerate your path to
          financial independence.
        </p>

        <h2>💭 Why It Works</h2>
        <p>
          Instead of asking “How much will I have left at the end of the month?”, you ask “How can I
          live well on 75% so I can pay my future self first?” That shift in thinking changes
          everything.
        </p>

        <h2>📘 The Principle That Changes Lives</h2>
        <p>
          Many financial experts echo the same message:{" "}
          <strong>“Wealth isn’t about how much you earn — it’s about how you manage what you earn.”</strong>
        </p>

        <hr style={{ margin: "28px 0" }} />
        <p>
          🧭 <strong>Try it yourself:</strong> open the <em>Income & Savings Planner</em> in the Profiro
          app to see what your 75/15/10 split looks like.{" "}
          <Link href="https://apps.apple.com/">Get it on the App Store</Link>
        </p>
      </main>

      <footer className="footer container">
        © {new Date().getFullYear()} Profiro. All rights reserved.
      </footer>
    </>
  );
}