import Head from "next/head";
import Nav from "./components/Nav";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Profiro</title>
        <meta
          name="description"
          content="How Profiro handles your information: no server-side collection, optional iCloud sync, and purchases via Apple's In-App Purchase."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.profiroapp.com/privacy" />
      </Head>

      <Nav />

      <main className="container" style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px", lineHeight: 1.6 }}>
        <h1 style={{ lineHeight: 1.25, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "#475569" }}>
          <em>Effective date: October 16, 2025</em>
        </p>

        <p>
          This Privacy Policy applies to the <strong>Profiro</strong> mobile application (the “Application”) created by{" "}
          <strong>Marek Brichcín</strong> (the “Service Provider”). Profiro is offered as a commercial service available on Apple’s
          App Store and is provided “AS IS”.
        </p>

        <h2 style={{ marginTop: 24 }}>Information the Application Does and Does Not Collect</h2>
        <p>
          Profiro does <strong>not</strong> collect, transmit, or store personal information on external servers controlled by the
          Service Provider. All data you enter in the Application are stored <strong>locally on your device</strong> and, if you enable
          sync, in your <strong>private Apple iCloud account</strong> via Apple’s CloudKit. The Service Provider has <strong>no access</strong> to this data.
        </p>
        <p>Registration or creation of a user account is <strong>not required</strong> to use the Application.</p>

        <h2 style={{ marginTop: 24 }}>In-App Purchases and Subscription</h2>
        <p>
          The Application offers a <strong>14-day free trial</strong> with full access to all features. After the trial, continued
          access requires an active <strong>monthly or annual subscription</strong>, processed securely through{" "}
          <strong>Apple’s In-App Purchase</strong>. Billing and payment information are handled by Apple; the Service Provider does not
          collect or store any payment details.
        </p>

        <h2 style={{ marginTop: 24 }}>Location Data</h2>
        <p>The Application does <strong>not</strong> collect or use precise real-time location information of your device.</p>

        <h2 style={{ marginTop: 24 }}>Third-Party Services</h2>
        <p>
          The Application does not share personal information with analytics, advertising, or other third parties. Platform services
          provided by Apple (iCloud/CloudKit and App Store) are used solely to enable synchronization and purchases in accordance with
          Apple’s terms and privacy policies.
        </p>

        <h2 style={{ marginTop: 24 }}>Opt-Out</h2>
        <p>
          You can stop all processing by uninstalling the Application using the standard uninstall process available on your device or
          through the App Store.
        </p>

        <h2 style={{ marginTop: 24 }}>Children’s Privacy</h2>
        <p>
          The Application is not directed to children under the age of 13 and does not knowingly collect personal information from them.
          If you believe a child has provided personal information through the Application, please contact the Service Provider so that
          appropriate action can be taken.
        </p>

        <h2 style={{ marginTop: 24 }}>Security</h2>
        <p>
          Because data remain on your device or within your private iCloud account, no user data are stored on servers controlled by the
          Service Provider. Apple’s privacy and security practices apply to any data stored in iCloud.
        </p>

        <h2 style={{ marginTop: 24 }}>Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time. Any changes will be posted on this page with an updated effective date.
          Your continued use of the Application constitutes acceptance of the updated Policy.
        </p>

        <h2 style={{ marginTop: 24 }}>Contact</h2>
        <p>For questions about this Policy or the Application’s privacy practices, contact:</p>
        <p>
          Email: <a href="mailto:profiro.finance@gmail.com">profiro.finance@gmail.com</a>
          <br />
          Website: <a href="https://www.profiroapp.com">https://www.profiroapp.com</a>
        </p>
      </main>

      <footer className="footer container">© {new Date().getFullYear()} Profiro. All rights reserved.</footer>
    </>
  );
}