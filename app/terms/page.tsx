import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for A-Line Realty — the rules and conditions governing use of our website and services.",
  alternates: { canonical: "https://www.alinerealty.in/terms" },
};

const LAST_UPDATED = "1 August 2026";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-neutral-950 py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-sm text-gold-400 hover:text-gold-300 transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2">
            Terms of Use
          </h1>
          <p className="text-neutral-400 text-sm">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-5 sm:px-8 py-14">
        <div className="space-y-10 text-[15px] text-neutral-700 leading-relaxed">

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the website <strong>www.alinerealty.in</strong> (the &quot;Site&quot;) or any
              services offered by A-Line Realty (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), you agree to be bound
              by these Terms of Use. If you do not agree with any part of these terms, you must not
              use our Site or services.
            </p>
            <p className="mt-3">
              These terms apply to all visitors, users, and others who access or use the Site.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">2. About A-Line Realty</h2>
            <p>
              A-Line Realty is a real estate consultancy and channel partner based in Bengaluru, Karnataka,
              India. We facilitate property transactions between buyers and property developers. We are not
              a property developer, builder, or financial institution.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">3. Use of the Website</h2>
            <p>You agree to use this Site only for lawful purposes and in a manner that does not:</p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li>Violate any applicable local, national, or international law or regulation.</li>
              <li>Transmit any unsolicited commercial communications or spam.</li>
              <li>Attempt to gain unauthorised access to any part of the Site or its related systems.</li>
              <li>Reproduce, distribute, or modify any content from the Site without prior written permission.</li>
              <li>Use automated tools to scrape, crawl, or extract data from the Site without consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">4. Information Accuracy</h2>
            <p>
              While we strive to keep all property information, pricing, availability, and related details
              accurate and up to date, we make no warranties or representations regarding the completeness,
              accuracy, or reliability of any content on this Site. Property information is subject to
              change without notice and should be verified directly with the developer or relevant authority.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">5. No Financial or Legal Advice</h2>
            <p>
              The content on this Site is provided for general informational purposes only and does not
              constitute financial, legal, or investment advice. Any property-related decisions you make
              are entirely your own responsibility. We strongly recommend consulting a qualified financial
              advisor or legal professional before making any property purchase or investment.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">6. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, icons, images, and software —
              is the property of A-Line Realty or its content suppliers and is protected under applicable
              Indian copyright and intellectual property laws. You may not reproduce, distribute, or
              create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">7. Third-Party Links</h2>
            <p>
              Our Site may contain links to third-party websites including property developers, financial
              institutions, or mapping services. These links are provided for convenience only. A-Line
              Realty does not endorse, control, or take responsibility for the content or practices of
              any third-party website. Your use of such sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, A-Line Realty shall not be liable for
              any indirect, incidental, consequential, special, or punitive damages arising from your use
              of, or inability to use, this Site or our services — including but not limited to loss of
              data, loss of profit, or business interruption.
            </p>
            <p className="mt-3">
              Our total liability to you for any direct damages shall not exceed the amount paid by you,
              if any, for accessing our services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">9. Disclaimers</h2>
            <p>
              This Site and all its content are provided &quot;as is&quot; without any warranty of any kind,
              express or implied, including but not limited to warranties of merchantability, fitness
              for a particular purpose, or non-infringement. We do not warrant that the Site will be
              uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">10. Privacy</h2>
            <p>
              Your use of this Site is also governed by our{" "}
              <Link href="/privacy-policy" className="text-gold-600 hover:underline">
                Privacy Policy
              </Link>
              , which is incorporated into these Terms by reference. Please review it carefully.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">11. Governing Law & Jurisdiction</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of India.
              Any disputes arising from or in connection with these Terms shall be subject to the
              exclusive jurisdiction of the courts located in Bengaluru, Karnataka, India.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">12. Changes to Terms</h2>
            <p>
              We reserve the right to revise these Terms at any time. Changes will be posted on this
              page with an updated &quot;Last Updated&quot; date. Continued use of the Site after changes are
              posted constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-neutral-900 mb-3">13. Contact Us</h2>
            <p>
              For any questions regarding these Terms of Use, please contact us:
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
            <Link href="/privacy-policy" className="hover:text-neutral-600 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
