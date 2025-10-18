import Head from 'next/head'
import Nav from './components/Nav'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Profiro</title>
        <meta name="robots" content="index,follow" />
      </Head>
      <Nav />
      <main className="container legal">
        <h1>Privacy Policy</h1>
        <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
        <p>This Privacy Policy describes how Profiro ("we", "us") handles your information.</p>
        <h2>1. Data We Do Not Collect</h2>
        <p>Profiro processes your financial planning data locally on your device. We do not sell personal data.</p>
        <h2>2. iCloud Sync (Optional)</h2>
        <p>If you enable iCloud, your data is stored in your private iCloud account managed by Apple. Apple’s terms apply.</p>
        <h2>3. Purchases</h2>
        <p>We use Apple’s in-app purchases. Apple may process limited data to complete transactions.</p>
        <h2>4. Contact</h2>
        <p>For any questions, contact: <a href="mailto:support@profiroapp.com">support@profiroapp.com</a></p>
      </main>
      <footer className="footer container">
        © {new Date().getFullYear()} Profiro. All rights reserved.
      </footer>
    </>
  )
}
