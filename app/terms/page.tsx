import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | AnthemByte",
    description: "Terms and conditions for using AnthemByte's services and website.",
};

export default function TermsOfService() {
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
                    Terms of <span className="text-neo-accent">Service</span>
                </h1>
                <p className="text-sm text-gray-400 font-[var(--font-space-mono)] mb-12">
                    Last updated: February 2026
                </p>

                <div className="space-y-10 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">1. Agreement to Terms</h2>
                        <p>By accessing or using the AnthemByte website (&quot;anthembyte.com&quot;), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">2. Services</h2>
                        <p className="mb-3">AnthemByte provides web development, e-commerce solutions, digital design, and technology consulting services. Specific project terms, deliverables, timelines, and pricing are defined in individual project agreements between AnthemByte and the client.</p>
                        <p>This website serves as a portfolio and point of contact. It does not constitute a binding offer for services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">3. Intellectual Property</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Website Content:</strong> All content on this website — including text, design, code, graphics, and branding — is the property of AnthemByte and is protected by applicable intellectual property laws.</li>
                            <li><strong>Client Work:</strong> Portfolio items displayed on this website are showcased with client permission. The intellectual property of client projects is governed by individual project agreements.</li>
                            <li><strong>Restrictions:</strong> You may not reproduce, distribute, modify, or create derivative works of any content on this website without prior written consent.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">4. User Conduct</h2>
                        <p className="mb-3">When using our website or contact form, you agree not to:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Submit false, misleading, or spam content through the contact form.</li>
                            <li>Attempt to gain unauthorized access to our systems or data.</li>
                            <li>Use the website in any way that could damage, disable, or impair its functionality.</li>
                            <li>Use automated tools to scrape or collect data from the website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">5. Project Engagements</h2>
                        <p className="mb-3">For all project-based work:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>Project scope, timelines, and costs are agreed upon in writing before work begins.</li>
                            <li>Payment terms are defined in individual project proposals or contracts.</li>
                            <li>Either party may terminate an engagement as per the terms outlined in the project agreement.</li>
                            <li>AnthemByte reserves the right to showcase completed work in its portfolio unless otherwise agreed upon.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">6. Limitation of Liability</h2>
                        <p>AnthemByte provides this website &quot;as is&quot; without warranties of any kind. We shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or our services beyond the amount paid for the specific service in question.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">7. Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites (e.g., client project live sites). We are not responsible for the content, policies, or practices of these external sites.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">8. Governing Law</h2>
                        <p>These Terms are governed by the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Navi Mumbai, Maharashtra, India.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">9. Changes to Terms</h2>
                        <p>We reserve the right to update these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the revised terms.</p>
                    </section>

                    <section className="p-6 border-2 border-black bg-gray-50">
                        <h2 className="text-xl font-bold uppercase tracking-tight mb-3 text-neo-main">Contact</h2>
                        <p>For questions about these Terms, contact us at:</p>
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
