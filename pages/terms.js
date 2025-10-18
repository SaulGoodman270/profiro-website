import Head from 'next/head'
import Nav from './components/Nav'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use — Profiro</title>
        <meta name="robots" content="index,follow" />
      </Head>
      <Nav />
      <main className="container legal">
        <h1>Terms of Use</h1>
        <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
        <ol>
          <li><strong>Acceptance.</strong> By using Profiro you agree to these Terms.</li>
          <li><strong>License.</strong> You are granted a personal, non‑transferable license to use the app.</li>
          <li><strong>No investment advice.</strong> Profiro provides educational tools, not financial advice.</li>
          <li><strong>Subscription.</strong> Managed via Apple’s in‑app purchases and App Store terms.</li>
          <li><strong>Limitation of liability.</strong> To the extent permitted by law.</li>
          <li><strong>Contact.</strong> <a href="mailto:support@profiroapp.com">support@profiroapp.com</a></li>
        </ol>
      </main>
      <footer className="footer container">
        © {new Date().getFullYear()} Profiro. All rights reserved.
      </footer>
    </>
  )
}
