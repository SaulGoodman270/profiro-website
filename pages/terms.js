import Head from "next/head";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use — Profiro</title>
        <meta
          name="description"
          content="Terms for using the Profiro app: license, IP, subscription & free trial, data handling, disclaimer, and contact."
        />
        <link rel="canonical" href="https://www.profiroapp.com/terms" />
      </Head>

      <main style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px", lineHeight: 1.6, color: "#0f172a" }}>
        <h1 style={{ lineHeight: 1.25, marginBottom: 8 }}>Terms of Use</h1>
        <p style={{ color: "#475569" }}>
          <em>Effective date: October 16, 2025</em>
        </p>

        <p>
          These Terms of Use apply to the <strong>Profiro</strong> mobile application (the “Application”), developed and provided by{" "}
          <strong>Marek Brichcín</strong> (the “Service Provider”) as a commercial service available on Apple’s App Store.
        </p>
        <p>By downloading, installing, or using the Application, you agree to these Terms. If you do not agree, you should not use the Application.</p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>License and Ownership</h2>
        <p>
          The Application is licensed, not sold. You are granted a personal, non-transferable, non-exclusive license to use the
          Application on devices that you own or control, subject to these Terms and Apple’s App Store Terms and Conditions.
        </p>
        <p>
          All intellectual property rights, trademarks, logos, and source code of the Application remain the property of the Service
          Provider. You may not copy, modify, translate, reverse engineer, or distribute the Application or any of its content without
          written permission.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Intellectual Property &amp; Infringement</h2>
        <p>
          All intellectual property rights in and to the Application, including but not limited to copyrights, database rights,
          trademarks, trade dress, and other intellectual property rights, are and will remain the exclusive property of the Service
          Provider. The Service Provider grants you a limited, non-exclusive, non-transferable license to use the Application for
          personal purposes in accordance with these Terms.
        </p>
        <p>
          You shall not copy, reproduce, modify, translate, adapt, create derivative works from, decompile, disassemble, reverse
          engineer, publish, distribute, or otherwise exploit the Application or any part of it. Any unauthorized use of the Application
          constitutes a material breach of these Terms and may subject you to civil and/or criminal penalties.
        </p>
        <p>
          The Service Provider reserves the right to seek <strong>injunctive relief</strong> and any other legal remedies available under
          applicable law in the event of actual or threatened infringement. If the Service Provider incurs costs to enforce its rights,
          including reasonable attorneys’ fees, the infringing party shall be liable for such costs.
        </p>
        <p>
          To report suspected infringement of the Service Provider’s intellectual property, please contact:{" "}
          <a href="mailto:profiro.finance@gmail.com">profiro.finance@gmail.com</a>. Reports should include identification of the
          allegedly infringing material, its location, and the complainant’s contact information. The Service Provider will review and
          act on valid reports promptly.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Subscription and Free Trial</h2>
        <p>
          The Application offers a <strong>14-day free trial</strong> with full access to all features. After this period, continued
          access requires an active <strong>monthly or annual subscription</strong>, billed and managed through{" "}
          <strong>Apple’s In-App Purchase system</strong>. The Service Provider does not collect or store any payment information.
        </p>
        <p>Apple’s terms, refund policies, and billing rules apply to all transactions. You can manage or cancel your subscription at any time via your Apple ID account settings.</p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Use of the Application</h2>
        <p>
          You are responsible for maintaining the security of your device and access to the Application. Using the Application on
          jailbroken or rooted devices may compromise security and cause the Application to malfunction.
        </p>
        <p>
          The Application requires occasional internet access for updates and verification of your active subscription. The Service
          Provider is not responsible for data charges, network issues, or service interruptions.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Data Handling and Privacy</h2>
        <p>
          The Application does not collect or store personal information on external servers. All financial data you enter are stored
          locally on your device or synchronized through your private iCloud account using Apple’s CloudKit. For more details, please
          refer to the <a href="/privacy">Privacy Policy</a>.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Disclaimer</h2>
        <p>
          Profiro provides educational and planning tools to help users understand and manage their finances. It does{" "}
          <strong>not</strong> provide financial, investment, legal, or tax advice. You are solely responsible for any financial
          decisions made based on information from the Application.
        </p>
        <p>
          The Service Provider strives to keep the Application accurate and functional, but provides no guarantees that it will always
          be up to date or error-free. To the maximum extent permitted by law, the Service Provider shall not be liable for any damages
          arising from your use of the Application.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Updates and Termination</h2>
        <p>
          The Service Provider may update, modify, or discontinue the Application at any time without prior notice. If discontinued, you
          must stop using and remove the Application from your device. By accepting updates provided through the App Store, you agree to
          these Terms as updated.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Changes to These Terms</h2>
        <p>
          These Terms of Use may be revised from time to time. Any updates will be posted on this page with the new effective date.
          Continued use of the Application after such updates constitutes your acceptance of the revised Terms.
        </p>

        <h2 style={{ marginTop: 24, lineHeight: 1.25 }}>Contact</h2>
        <p>For questions about these Terms or the Application, please contact:</p>
        <p>
          <strong>Marek Brichcín</strong>
          <br />
          Email: <a href="mailto:profiro.finance@gmail.com">profiro.finance@gmail.com</a>
          <br />
          Website: <a href="https://www.profiroapp.com">https://www.profiroapp.com</a>
        </p>
      </main>
    </>
  );
}