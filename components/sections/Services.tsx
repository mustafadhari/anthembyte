import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Code, Cpu, Globe, Rocket, Terminal, Zap } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "High-performance websites built with Next.js, React, and modern tech stacks.",
        icon: Globe,
    },
    {
        title: "Automation",
        description: "Streamline your workflows with custom automation scripts and bot integration.",
        icon: Cpu,
    },
    {
        title: "UI/UX Design",
        description: "Bold, intuitive designs that captivate users and drive conversions.",
        icon: Zap,
    },
    {
        title: "Custom Software",
        description: "Tailored software solutions to solve complex business problems.",
        icon: Terminal,
    },
    {
        title: "E-Commerce",
        description: "Scalable online stores designed for sales and seamless user experience.",
        icon: Rocket,
    },
    {
        title: "API Integration",
        description: "Connect your systems with robust and secure API architectures.",
        icon: Code,
    },
];

export function Services() {
    return (
        <Section id="services" className="bg-white">
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                    Our <span className="text-neo-accent">Capabilities</span>
                </h2>
                <div className="h-2 w-24 bg-black"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <Card key={index} hoverEffect className="group relative overflow-hidden bg-gray-50">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <service.icon className="w-24 h-24" />
                        </div>

                        <service.icon className="w-12 h-12 mb-6 text-neo-accent" />
                        <h3 className="text-2xl font-bold mb-3 uppercase">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
