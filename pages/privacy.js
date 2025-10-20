import Head from "next/head";

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Profiro</title>
        <meta
          name="description"
          content="How Profiro handles your information: no server-side collection, optional iCloud sync, and purchases via Apple's In-App Purchase."
        />
        <link rel="canonical" href="https://www.profiroapp.com/privacy" />
      </Head>

      <main style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px", lineHeight: 1.6, color: "#0f172a" }}>
        <h1 style={{ lineHeight: 1.25, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ color: "#475569" }}>
          <em>Effective date: October 16, 2025</em>
        </p>

        <p>
          This Privacy Policy applies to the <strong>Profiro</strong> mobile application (the “Application”) created by{" "}
          <strong>Marek Brichcín</strong> (the “Service Provider”). Profiro is offered as a commercial service available on Apple’s
          App Store and is provided “AS IS”.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Information the Application Does and Does Not Collect</h2>
        <p>
          Profiro does <strong>not</strong> collect, transmit, or store personal information on external servers controlled by the
          Service Provider. All data you enter in the Application (e.g., financial goals, contributions, or projections) are stored{" "}
          <strong>locally on your device</strong> and, if you enable sync, are stored in your <strong>private Apple iCloud account</strong>{" "}
          via Apple’s CloudKit. The Service Provider has <strong>no access</strong> to this data.
        </p>
        <p>Registration or creation of a user account is <strong>not required</strong> to use the Application.</p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>In-App Purchases and Subscription</h2>
        <p>
          The Application offers a <strong>14-day free trial</strong> with full access to all features. After the trial, continued
          access requires an active <strong>monthly or annual subscription</strong>, processed securely through{" "}
          <strong>Apple’s App Store In-App Purchase</strong> system. Billing and payment information are handled by Apple; the Service
          Provider does not collect or store any payment details.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Location Data</h2>
        <p>The Application does <strong>not</strong> collect or use precise real-time location information of your device.</p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Third-Party Services</h2>
        <p>
          The Application does not share personal information with analytics, advertising, or other third parties. Platform services
          provided by Apple (iCloud/CloudKit and App Store) are used solely to enable synchronization and purchases in accordance with
          Apple’s terms and privacy policies.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Opt-Out</h2>
        <p>
          You can stop all processing by uninstalling the Application using the standard uninstall process available on your device or
          through the App Store.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Children’s Privacy</h2>
        <p>
          The Application is not directed to children under the age of 13 and does not knowingly collect personal information from them.
          If you believe a child has provided personal information through the Application, please contact the Service Provider so that
          appropriate action can be taken.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Security</h2>
        <p>
          The Service Provider is committed to protecting your information. Because data remain on your device or within your private
          iCloud account, no user data are stored on servers controlled by the Service Provider. Apple’s privacy and security practices
          apply to any data stored in iCloud.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Changes to This Policy</h2>
        <p>
          This Privacy Policy may be updated from time to time. Any changes will be posted on this page with an updated effective date.
          Your continued use of the Application constitutes acceptance of the updated Policy.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Contact</h2>
        <p>For questions about this Policy or the Application’s privacy practices, contact:</p>
        <p>
          <strong>Marek Brichcín</strong>
          <br />
          Email: <a href="mailto:profiro.finance@gmail.com">profiro.finance@gmail.com</a>
          <br />
          Website:{" "}
          <a href="https://www.profiroapp.com" rel="noopener noreferrer">
            https://www.profiroapp.com
          </a>
        </p>
      </main>
    </>
  );
}