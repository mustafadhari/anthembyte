import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t-2 border-black bg-neo-main text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter">AnthemByte</h2>
                        <p className="max-w-xs text-gray-400 leading-relaxed">
                            Forging digital experiences with sharp edges and bold ideas.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest font-[var(--font-space-mono)] text-white/60">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="#services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
                            <Link href="/work" className="text-gray-400 hover:text-white transition-colors">Our Work</Link>
                            <Link href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
                            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest font-[var(--font-space-mono)] text-white/60">Get in Touch</h3>
                        <div className="space-y-3">
                            <a href="mailto:info@anthembyte.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail className="w-4 h-4 text-neo-accent shrink-0" />
                                info@anthembyte.com
                            </a>
                            <a href="tel:+919768168159" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Phone className="w-4 h-4 text-neo-accent shrink-0" />
                                +91 97681 68159
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-4 h-4 text-neo-accent shrink-0" />
                                Navi Mumbai, Maharashtra, India
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
                    <p>© {new Date().getFullYear()} AnthemByte. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white underline decoration-neo-accent underline-offset-4">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white underline decoration-neo-accent underline-offset-4">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
