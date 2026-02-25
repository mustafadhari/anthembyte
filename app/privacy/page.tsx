import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | AnthemByte",
    description: "Learn how AnthemByte handles your personal data and privacy.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white text-neo-main">
            {/* Header */}
            <div className="border-b-2 border-black bg-neo-main text-white">
                <div className="container mx-auto px-4 md:px-6 py-6 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-black tracking-widest uppercase">
                        <span className="text-white/60">Anthem</span>
                        <span className="text-neo-accent">Byte</span>
                    </Link>
                    <Link href="/">
                        <Button variant="outline" size="sm" className="text-white border-white/40 hover:bg-white hover:text-neo-main">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 py-16 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2">
                    Privacy <span className="text-neo-accent">Policy</span>
                </h1>
                <p className="text-sm text-gray-400 font-[var(--font-space-mono)] mb-12">
                    Last updated: February 2026
                </p>

                <div className="space-y-10 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">1. Information We Collect</h2>
                        <p className="mb-3">When you use our website or contact form, we may collect the following information:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Contact Information:</strong> Your name, email address, and any message content you submit through our contact form.</li>
                            <li><strong>Technical Data:</strong> Browser type, device information, IP address, and pages visited — collected automatically through standard web server logs.</li>
                            <li><strong>Cookies:</strong> We use minimal, essential cookies required for the website to function properly. We do not use tracking or advertising cookies.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">2. How We Use Your Information</h2>
                        <p className="mb-3">We use the information we collect to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Respond to your inquiries and project requests submitted through the contact form.</li>
                            <li>Communicate with you about potential projects or services.</li>
                            <li>Improve our website&apos;s performance and user experience.</li>
                            <li>Comply with legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">3. Data Sharing</h2>
                        <p>We do <strong>not</strong> sell, rent, or trade your personal data to third parties. Your information may be shared only with:</p>
                        <ul className="list-disc pl-6 space-y-1 mt-3">
                            <li>Email service providers used to deliver contact form submissions to our team.</li>
                            <li>Hosting providers necessary to operate this website.</li>
                            <li>Legal authorities, if required by law.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">4. Data Retention</h2>
                        <p>Contact form submissions are retained for as long as necessary to respond to your inquiry and for potential follow-up. You may request deletion of your data at any time by emailing us at <a href="mailto:info@anthembyte.com" className="text-neo-accent underline underline-offset-4">info@anthembyte.com</a>.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">5. Your Rights</h2>
                        <p className="mb-3">You have the right to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Request access to the personal data we hold about you.</li>
                            <li>Request correction or deletion of your personal data.</li>
                            <li>Withdraw consent for data processing at any time.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">6. Security</h2>
                        <p>We implement reasonable security measures to protect your data, including encrypted data transmission (HTTPS) and secure email protocols. However, no method of transmission over the internet is 100% secure.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">7. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
                    </section>

                    <section className="p-6 border-2 border-black bg-gray-50">
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">Contact</h2>
                        <p>If you have questions about this Privacy Policy, contact us at:</p>
                        <p className="mt-2 font-[var(--font-space-mono)] text-sm">
                            <a href="mailto:info@anthembyte.com" className="text-neo-accent underline underline-offset-4">info@anthembyte.com</a>
                            <br />
                            AnthemByte · Navi Mumbai, Maharashtra, India
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
