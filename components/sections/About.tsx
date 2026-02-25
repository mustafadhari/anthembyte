import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Users, Target, Lightbulb, Award } from "lucide-react";

const stats = [
    { value: "6+", label: "Projects Delivered" },
    { value: "4+", label: "Industries Served" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "2026", label: "Est. Year" },
];

const values = [
    {
        icon: Target,
        title: "Precision Engineering",
        description:
            "Every line of code is intentional. We build systems that are lean, maintainable, and built to scale.",
    },
    {
        icon: Lightbulb,
        title: "Creative Problem Solving",
        description:
            "We don't just build what's asked — we challenge assumptions and find the smartest path forward.",
    },
    {
        icon: Users,
        title: "Client-First Approach",
        description:
            "Your business goals drive every decision. We measure success by the impact we create for you.",
    },
    {
        icon: Award,
        title: "Quality Over Quantity",
        description:
            "We take on fewer projects to deliver exceptional results. No templates, no shortcuts.",
    },
];

export function About() {
    return (
        <Section id="about" className="bg-white text-neo-accent">
            {/* Header */}
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">
                    About <span className="text-neo-accent">Us</span>
                </h2>
                <div className="h-2 w-24 bg-neo-accent"></div>
            </div>

            {/* Two Column: Story + Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                <div>
                    <p className="text-xl leading-relaxed text-gray-700 mb-6">
                        <span className="text-neo-main font-bold">AnthemByte</span> is a
                        web development and digital solutions agency based in Navi
                        Mumbai, India. We partner with businesses across industries —
                        from textiles and travel to building materials and EdTech — to
                        build digital experiences that drive real results.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-500 mb-8">
                        We believe the best software is built at the intersection of
                        sharp engineering and bold design. Our Neo-Brutalist approach
                        isn&apos;t just aesthetic — it reflects how we work: direct,
                        structured, and impactful.
                    </p>
                    <div className="h-px w-full bg-gray-200"></div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-6 border-2 border-black/10 hover:border-neo-accent transition-colors"
                        >
                            <p className="text-4xl md:text-5xl font-black text-neo-accent mb-2 font-[var(--font-space-mono)]">
                                {stat.value}
                            </p>
                            <p className="text-sm uppercase tracking-wider text-gray-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Values */}
            <div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 text-neo-main">
                    What Drives Us
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <Card
                            key={index}
                            className="bg-gray-50 border-black/10 text-neo-main hover:bg-gray-100 hover:border-neo-accent transition-all group"
                        >
                            <value.icon className="w-10 h-10 mb-4 text-neo-accent group-hover:scale-110 transition-transform" />
                            <h4 className="text-lg font-bold uppercase mb-2">
                                {value.title}
                            </h4>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {value.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
