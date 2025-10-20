import Head from "next/head";
import Nav from "./components/Nav";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use — Profiro</title>
        <meta
          name="description"
          content="Terms for using the Profiro app: license, IP, subscription & free trial, data handling, disclaimer, and contact."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.profiroapp.com/terms" />
      </Head>

      <Nav />

      <main className="container" style={{ maxWidth: 880, margin: "0 auto", padding: "32px 16px", lineHeight: 1.6 }}>
        <h1 style={{ lineHeight: 1.25, marginBottom: 8 }}>Terms of Use</h1>
        <p style={{ color: "#475569" }}>
          <em>Effective date: October 16, 2025</em>
        </p>

        <p>
          These Terms of Use apply to the <strong>Profiro</strong> mobile application (the “Application”), developed and provided by{" "}
          <strong>Marek Brichcín</strong> (the “Service Provider”) as a commercial service available on Apple’s App Store.
        </p>
        <p>By downloading, installing, or using the Application, you agree to these Terms. If you do not agree, you should not use the Application.</p>

        <h2 style={{ marginTop: 24 }}>License and Ownership</h2>
        <p>
          The Application is licensed, not sold. You are granted a personal, non-transferable, non-exclusive license to use the
          Application on devices that you own or control, subject to these Terms and Apple’s App Store Terms and Conditions.
        </p>
        <p>
          All intellectual property rights, trademarks, logos, and source code of the Application remain the property of the Service
          Provider. You may not copy, modify, translate, reverse engineer, or distribute the Application or any of its content without
          written permission.
        </p>

        <h2 style={{ marginTop: 24 }}>Intellectual Property &amp; Infringement</h2>
        <p>
          All intellectual property rights in and to the Application, including but not limited to copyrights, database rights,
          trademarks, trade dress, and other intellectual property rights, are and will remain the exclusive property of the Service
          Provider. The Service Provider grants you a limited, non-exclusive, non-transferable license to use the Application for
          personal purposes in accordance with these Terms.
        </p>
        <p>
          You shall not copy, reproduce, modify, translate, adapt, create derivative works from, decompile, disassemble, reverse
          engineer, publish, distribute, or otherwise exploit the Application or any part of it. Any unauthorized use constitutes a
          material breach and may subject you to civil and/or criminal penalties.
        </p>
        <p>
          The Service Provider reserves the right to seek <strong>injunctive relief</strong> and other legal remedies available under
          applicable law in the event of actual or threatened infringement, including recovery of reasonable enforcement costs and
          attorneys’ fees.
        </p>
        <p>
          To report suspected infringement, contact:{" "}
          <a href="mailto:profiro.finance@gmail.com">profiro.finance@gmail.com</a> with details and location of the allegedly
          infringing material.
        </p>

        <h2 style={{ marginTop: 24 }}>Subscription and Free Trial</h2>
        <p>
          The Application offers a <strong>14-day free trial</strong> with full access to all features. After this period, continued
          access requires an active <strong>monthly or annual subscription</strong>, billed and managed through{" "}
          <strong>Apple’s In-App Purchase</strong>. The Service Provider does not collect or store any payment information.
        </p>
        <p>Apple’s terms, refund policies, and billing rules apply. You can manage or cancel your subscription via your Apple ID settings.</p>

        <h2 style={{ marginTop: 24 }}>Use of the Application</h2>
        <p>
          You are responsible for maintaining the security of your device and access to the Application. Using the Application on
          jailbroken or rooted devices may compromise security and cause the Application to malfunction.
        </p>
        <p>
          The Application may require internet access for updates and subscription validation. The Service Provider is not responsible
          for data charges, network issues, or service interruptions.
        </p>

        <h2 style={{ marginTop: 24 }}>Data Handling and Privacy</h2>
        <p>
          The Application does not collect or store personal information on external servers. Data you enter remain on your device or in
          your private iCloud account via Apple’s CloudKit. See the <a href="/privacy">Privacy Policy</a> for details.
        </p>

        <h2 style={{ marginTop: 24 }}>Disclaimer</h2>
        <p>
          Profiro provides educational and planning tools and does <strong>not</strong> provide financial, investment, legal, or tax
          advice. You are solely responsible for financial decisions made using the Application.
        </p>
        <p>
          The Service Provider strives for accuracy and availability but provides no warranty that the Application will always be
          error-free or uninterrupted. To the maximum extent permitted by law, the Service Provider is not liable for damages arising
          from your use of the Application.
        </p>

        <h2 style={{ marginTop: 24 }}>Updates and Termination</h2>
        <p>
          The Service Provider may update, modify, or discontinue the Application at any time. If discontinued, you must stop using and
          remove the Application. By accepting updates via the App Store, you agree to the updated Terms.
        </p>

        <h2 style={{ marginTop: 24 }}>Changes to These Terms</h2>
        <p>
          These Terms may be revised from time to time. Updates will be posted on this page with the new effective date. Continued use
          constitutes acceptance of the revised Terms.
        </p>

        <h2 style={{ marginTop: 24 }}>Contact</h2>
        <p>
          <strong>Marek Brichcín</strong>
          <br />
          Email: <a href="mailto:profiro.finance@gmail.com">profiro.finance@gmail.com</a>
          <br />
          Website: <a href="https://www.profiroapp.com">https://www.profiroapp.com</a>
        </p>
      </main>

      <footer className="footer container">© {new Date().getFullYear()} Profiro. All rights reserved.</footer>
    </>
  );
}