import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
    <Navigation/>
    <main className="max-w-3xl mx-auto p-6 text-gray-800 mt-16">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-6">Effective Date: August 6, 2025</p>

      <p className="mb-4">
        At <strong>FlowGenic Technologies</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our website, services, and automated systems, including those integrated via platforms such as Facebook and n8n.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Personal Information (e.g., name, email address, phone number)</li>
          <li>Facebook data (e.g., profile info, responses to lead forms)</li>
          <li>Website usage data (via cookies and analytics)</li>
          <li>Contact form entries</li>
          <li>Any data entered via our automation workflows</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>To provide our services (automation, development, marketing, etc.)</li>
          <li>To respond to inquiries and provide customer support</li>
          <li>To personalize user experience</li>
          <li>To automate workflows (e.g., lead generation, messaging)</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Sharing of Information</h2>
        <p>We do <strong>not</strong> sell or rent your personal information. We may share data with:</p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Trusted third-party service providers (e.g., n8n, Facebook APIs)</li>
          <li>Legal or regulatory authorities if required</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Storage and Security</h2>
        <p>We use secure systems to protect your data from unauthorized access, alteration, or disclosure. All personal data is stored on protected servers with access limited to authorized personnel.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Facebook Data</h2>
        <p>
          When you interact with us through Facebook (e.g., Messenger bots, lead ads):
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>We only collect the data you consent to share</li>
          <li>We store and use this data only for providing the intended services</li>
          <li>You can request deletion of this data at any time</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul className="list-disc ml-6 space-y-1">
          <li>Access the personal data we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, contact us at: <a href="mailto:info.flowgenic@gmail.com" className="text-blue-600 underline">info.flowgenic@gmail.com</a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Cookies & Tracking Technologies</h2>
        <p>We may use cookies or third-party tracking tools (e.g., Google Analytics) to understand website usage and improve services. You can control cookies via your browser settings.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Data Retention</h2>
        <p>We retain your data only as long as necessary for business or legal purposes, or until you request its deletion.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy periodically. Changes will be posted on this page with the updated date.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us:</p>
        <p className="mt-2">
          📧 <a href="mailto:info.flowgenic@gmail.com" className="text-blue-600 underline">info.flowgenic@gmail.com</a><br />
          📍 Lalitpur, Nepal
        </p>
      </section>
    </main>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
