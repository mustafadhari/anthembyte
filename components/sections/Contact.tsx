"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";
import { useToast } from "@/components/ui/Toast";

interface FormErrors {
    name?: string;
    email?: string;
    projectType?: string;
    message?: string;
}

export function Contact() {
    const { addToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "Web Development",
        message: "",
    });

    function validateClient(): FormErrors {
        const errs: FormErrors = {};
        if (!formData.name.trim() || formData.name.trim().length < 2)
            errs.name = "Name must be at least 2 characters.";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
            errs.email = "Please enter a valid email address.";
        if (!formData.message.trim() || formData.message.trim().length < 10)
            errs.message = "Message must be at least 10 characters.";
        return errs;
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const clientErrors = validateClient();
        setErrors(clientErrors);
        if (Object.keys(clientErrors).length > 0) return;

        setIsSubmitting(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (data.success) {
                addToast({
                    type: "success",
                    title: "Message Sent",
                    message: data.message,
                });
                setFormData({ name: "", email: "", projectType: "Web Development", message: "" });
                setErrors({});
            } else if (data.errors) {
                setErrors(data.errors);
                addToast({
                    type: "error",
                    title: "Validation Error",
                    message: "Please fix the highlighted fields and try again.",
                });
            } else {
                addToast({
                    type: "error",
                    title: "Submission Failed",
                    message: data.message || "Something went wrong.",
                });
            }
        } catch {
            addToast({
                type: "error",
                title: "Network Error",
                message: "Could not reach the server. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Section id="contact" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
                        Let&apos;s <span className="text-neo-accent">Build</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Ready to disrupt the market? Tell us about your project and we&apos;ll craft the digital solution you need.
                    </p>

                    <div className="space-y-8">
                        <a href="mailto:info@anthembyte.com" className="flex items-center gap-6 group">
                            <div className="p-4 bg-neo-main text-white border-2 border-black group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg uppercase">Email</h4>
                                <p className="text-gray-600 group-hover:text-neo-main transition-colors">info@anthembyte.com</p>
                            </div>
                        </a>

                        <a href="tel:+919768168159" className="flex items-center gap-6 group">
                            <div className="p-4 bg-neo-main text-white border-2 border-black group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg uppercase">Phone</h4>
                                <p className="text-gray-600 group-hover:text-neo-main transition-colors">+91 97681 68159</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-neo-main text-white border-2 border-black">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg uppercase">Location</h4>
                                <p className="text-gray-600">Navi Mumbai, Maharashtra, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-50">
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                        <div>
                            <label className="block text-sm font-bold uppercase mb-2">Name</label>
                            <input
                                type="text"
                                className={`neo-input ${errors.name ? "border-neo-accent" : ""}`}
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={(e) => {
                                    setFormData({ ...formData, name: e.target.value });
                                    if (errors.name) setErrors({ ...errors, name: undefined });
                                }}
                            />
                            {errors.name && <p className="text-neo-accent text-xs font-bold mt-1 uppercase">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase mb-2">Email</label>
                            <input
                                type="email"
                                className={`neo-input ${errors.email ? "border-neo-accent" : ""}`}
                                placeholder="you@company.com"
                                value={formData.email}
                                onChange={(e) => {
                                    setFormData({ ...formData, email: e.target.value });
                                    if (errors.email) setErrors({ ...errors, email: undefined });
                                }}
                            />
                            {errors.email && <p className="text-neo-accent text-xs font-bold mt-1 uppercase">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase mb-2">Project Type</label>
                            <select
                                className="neo-input"
                                value={formData.projectType}
                                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            >
                                <option>Web Development</option>
                                <option>E-Commerce</option>
                                <option>Automation</option>
                                <option>Design System</option>
                                <option>Consulting</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase mb-2">Message</label>
                            <textarea
                                className={`neo-input min-h-[150px] ${errors.message ? "border-neo-accent" : ""}`}
                                placeholder="Tell us about your project, goals, and timeline..."
                                value={formData.message}
                                onChange={(e) => {
                                    setFormData({ ...formData, message: e.target.value });
                                    if (errors.message) setErrors({ ...errors, message: undefined });
                                }}
                            />
                            {errors.message && <p className="text-neo-accent text-xs font-bold mt-1 uppercase">{errors.message}</p>}
                        </div>

                        <Button className="w-full text-lg" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </span>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
