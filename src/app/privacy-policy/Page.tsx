import React from 'react';
import './style.scss'

export default function PrivacyPolicy() {
  return (
    <div className="pagestyle">
      <h1 className="title">Privacy Policy</h1>
      <p className="text-sm md:text-base mb-6">Effective Date: October 27, 2024</p>

      <p className="mb-6">
        Welcome to Aarooshi! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, <a href="https://www.aarooshi.com" className="text-blue-500 underline">https://www.aarooshi.com</a>, or use our services in connection with mobile app and website development. Please read this privacy policy carefully to understand our practices regarding your personal data.
      </p>

      <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
      <h3 className="text-lg font-medium mb-2">1.1 Personal Information</h3>
      <p className="mb-4">
        When you interact with Aarooshi, we may collect personally identifiable information, including but not limited to your name, email address, phone number, and company details.
      </p>

      <h3 className="text-lg font-medium mb-2">1.2 Usage Data</h3>
      <p className="mb-6">
        We may also collect information that your browser sends whenever you visit our website or use our services. This information may include details such as your device&apos;s IP address, browser type, and version, the pages of our website you visit, time and date of your visit, and other diagnostic data.
      </p>

      <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">We use the information we collect in various ways, including to:</p>
      <ul className="list-disc ml-5 mb-6 space-y-2">
        <li>Provide, operate, and maintain our website and services</li>
        <li>Improve and personalize your experience on our site</li>
        <li>Process transactions and manage your account</li>
        <li>Communicate with you about updates, offers, and other information</li>
        <li>Analyze usage patterns to improve our services</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">3. Sharing of Information</h2>
      <p className="mb-4">We may share your information with third parties under certain circumstances, including:</p>
      <ul className="list-disc ml-5 mb-6 space-y-2">
        <li>With service providers who assist in operating our business and website</li>
        <li>For legal compliance, in response to legal requests or as required by law</li>
        <li>In connection with any business transfers, mergers, or acquisitions</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3">4. Security of Your Information</h2>
      <p className="mb-6">
        We use administrative, technical, and physical security measures to protect your personal information. However, please be aware that no electronic transmission over the Internet or storage technology is 100% secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-semibold mb-3">5. Your Data Protection Rights</h2>
      <p className="mb-4">Depending on your location, you may have the following rights:</p>
      <ul className="list-disc ml-5 mb-6 space-y-2">
        <li>The right to access, update, or delete the information we have about you</li>
        <li>The right to object to our processing of your data</li>
        <li>The right to data portability</li>
      </ul>
      <p className="mb-6">To exercise these rights, please contact us at <a href="mailto:contact@aarooshi.com" className="text-blue-500 underline">contact@aarooshi.com</a>.</p>

      <h2 className="text-xl font-semibold mb-3">6. Third-Party Links</h2>
      <p className="mb-6">
        Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to read their privacy policies.
      </p>

      <h2 className="text-xl font-semibold mb-3">7. Changes to This Privacy Policy</h2>
      <p className="mb-6">
        We may update our Privacy Policy from time to time. Changes will be posted on this page, and we will notify you of any significant changes by placing a prominent notice on our website.
      </p>

      <h2 className="text-xl font-semibold mb-3">8. Contact Us</h2>
      <p className="mb-6">If you have any questions about this Privacy Policy, please contact us at:</p>
      <p className="mb-2">Email: <a href="mailto:contact@aarooshi.com" className="text-blue-500 underline">contact@aarooshi.com</a></p>
      <p className="mb-6">Website: <a href="https://www.aarooshi.com" className="text-blue-500 underline">https://www.aarooshi.com</a></p>

      <p>Thank you for choosing Aarooshi for your website and mobile app development needs!</p>
    </div>
  );
}

