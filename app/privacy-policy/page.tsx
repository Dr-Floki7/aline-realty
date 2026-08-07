import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for A-Line Realty — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://www.alinerealty.in/privacy-policy" },
};

const LAST_UPDATED = "1 August 2026";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-950 py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-gold-400 hover:text-gold-300 transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-neutral-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-14 prose prose-neutral max-w-none">
        <div className="space-y-10 text-[15px] text-neutral-700 leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">1. Introduction</h2>
            <p>
              A-Line Realty (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operated by Zakir Ali Mishrikoti and based in
              Bengaluru, Karnataka, India, is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our
              website <strong>www.alinerealty.in</strong> or contact us through any channel.
            </p>
            <p className="mt-3">
              By using our website or services, you agree to the collection and use of information in
              accordance with this policy. If you do not agree, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">2. Information We Collect</h2>
            <p>We may collect the following types of personal information:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Contact Information:</strong> Name, phone number, and email address submitted through our enquiry form or WhatsApp.</li>
              <li><strong>Property Preferences:</strong> Budget range, property type, preferred location, and related requirements you share with us.</li>
              <li><strong>Communication Data:</strong> Messages, calls, and interactions you have with our team.</li>
              <li><strong>Usage Data:</strong> Browser type, device information, pages visited, time spent, and referring URLs collected automatically via standard web analytics tools.</li>
              <li><strong>Cookies:</strong> Small data files stored on your device to enhance your experience on our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Respond to your property enquiries and provide relevant recommendations.</li>
              <li>Schedule and coordinate site visits on your behalf.</li>
              <li>Assist with home loan guidance and documentation support.</li>
              <li>Send updates about new projects, offers, or services (only if you have opted in).</li>
              <li>Improve our website and services based on usage patterns.</li>
              <li>Comply with applicable legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">4. Sharing of Information</h2>
            <p>
              We do <strong>not</strong> sell, rent, or trade your personal information to third parties.
              We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Property Developers:</strong> To arrange site visits or provide project-specific information relevant to your enquiry, with your implicit consent.</li>
              <li><strong>Lending Partners:</strong> To facilitate home loan guidance, only with your explicit permission.</li>
              <li><strong>Service Providers:</strong> Third-party tools used to operate our website (e.g., analytics, hosting) under strict confidentiality agreements.</li>
              <li><strong>Legal Requirements:</strong> When required by applicable Indian law, court order, or government authority.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">5. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfil the purposes for which
              it was collected, including providing our services, complying with legal obligations, and
              resolving disputes. Once data is no longer required, we securely delete or anonymise it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">6. Cookies</h2>
            <p>
              Our website may use cookies to improve your browsing experience. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is being sent. However, if you
              do not accept cookies, some portions of our website may not function properly.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (e.g., property developers, Google
              Maps). We are not responsible for the privacy practices of those websites and encourage you
              to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">8. Security</h2>
            <p>
              We implement commercially reasonable technical and organisational measures to protect your
              personal information from unauthorised access, disclosure, alteration, or destruction.
              However, no method of transmission over the internet is 100% secure, and we cannot
              guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">9. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data, subject to legal obligations.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:alinerealty26@gmail.com" className="text-gold-600 hover:underline">
                alinerealty26@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">10. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly
              collect personal information from minors. If you believe we have inadvertently collected
              such data, please contact us immediately and we will take steps to delete it.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">11. Changes to This Policy</h2>
            <p>
              We reserve the right to update this Privacy Policy at any time. Changes will be posted on
              this page with a revised &quot;Last Updated&quot; date. We encourage you to review this policy
              periodically. Continued use of our website after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">12. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-3 bg-neutral-50 rounded-xl p-5 border border-neutral-100 text-sm space-y-1">
              <p><strong>A-Line Realty</strong></p>
              <p>Attn: Zakir Ali Mishrikoti (Founder)</p>
              <p>Bengaluru, Karnataka, India</p>
              <p>
                Email:{" "}
                <a href="mailto:alinerealty26@gmail.com" className="text-gold-600 hover:underline">
                  alinerealty26@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+917337861296" className="text-gold-600 hover:underline">
                  +91 73378 61296
                </a>
              </p>
            </div>
          </section>

        </div>
      </article>

      {/* Footer strip */}
      <div className="border-t border-neutral-100 bg-neutral-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} A-Line Realty. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-neutral-600 transition-colors">Home</Link>
            <Link href="/terms" className="hover:text-neutral-600 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
