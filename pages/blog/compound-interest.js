import Head from "next/head";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Post() {
  return (
    <>
      <Head>
        <title>Compound Interest — Profiro</title>
        <meta
          name="description"
          content="Compound interest explained: how small amounts can grow into great wealth over time."
        />
        <link rel="canonical" href="https://www.profiroapp.com/blog/compound-interest" />
      </Head>

      <Nav />

      <main
        className="container"
        style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px", lineHeight: 1.65 }}
      >
        <h1>Compound Interest: Let Your Money Work for You</h1>
        <p><em>Published: October 20, 2025</em></p>

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

      <footer className="footer container">
        © {new Date().getFullYear()} Profiro. All rights reserved.
      </footer>
    </>
  );
}