import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8">
                        Let's <span className="text-neo-accent">Build</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Ready to disrupt the market? Tell us about your project and we'll craft the digital solution you need.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-neo-main text-white rounded-none border-2 border-black">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg uppercase">Email</h4>
                                <p className="text-gray-600">hello@anthembyte.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-neo-main text-white rounded-none border-2 border-black">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg uppercase">Phone</h4>
                                <p className="text-gray-600">+1 (555) 000-0000</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-neo-main text-white rounded-none border-2 border-black">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg uppercase">Location</h4>
                                <p className="text-gray-600">San Francisco, CA</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gray-50">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold uppercase mb-2">Name</label>
                            <input type="text" className="neo-input" placeholder="JOHN DOE" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase mb-2">Email</label>
                            <input type="email" className="neo-input" placeholder="JOHN@EXAMPLE.COM" />
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase mb-2">Project Type</label>
                            <select className="neo-input">
                                <option>Web Development</option>
                                <option>Automation</option>
                                <option>Design System</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold uppercase mb-2">Message</label>
                            <textarea className="neo-input min-h-[150px]" placeholder="TELL US ABOUT YOUR VISION..."></textarea>
                        </div>

                        <Button className="w-full text-lg">Send Message</Button>
                    </form>
                </div>
            </div>
        </Section>
    );
}
