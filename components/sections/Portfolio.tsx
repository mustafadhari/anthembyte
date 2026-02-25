import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export function Portfolio() {
    return (
        <Section id="work" className="bg-neo-main text-white">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-white">
                        Selected <span className="text-neo-accent">Works</span>
                    </h2>
                    <div className="h-2 w-24 bg-white mx-auto md:mx-0"></div>
                </div>
                <Link href="/work">
                    <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                        View All Projects
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.slice(0, 3).map((project, index) => (
                    <Card key={index} hoverEffect className="bg-black border-white text-white p-0 flex flex-col group relative overflow-hidden">

                        {/* Project Screenshot — clean, no overlays */}
                        <div className={`${project.bg} relative border-b-2 border-white overflow-hidden`}>
                            <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                                <Image
                                    src={project.image}
                                    alt={`${project.title} website screenshot`}
                                    fill
                                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Hover Overlay with Description */}
                            <div className="absolute inset-0 bg-neo-main/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center p-8 text-center z-20">
                                <p className="text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="bg-white text-black border-black hover:bg-neo-accent hover:text-white hover:border-neo-accent">
                                        View Live Site
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Bottom Bar — title, category, tags */}
                        <div className="p-5 flex flex-col gap-3 bg-neo-main z-20 relative">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-xl font-bold uppercase tracking-wide">{project.title}</h3>
                                    <p className="text-neo-accent text-sm font-[var(--font-space-mono)]">{project.category}</p>
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 border-2 border-white rounded-full group-hover:bg-neo-accent group-hover:border-neo-accent group-hover:text-white transition-all transform group-hover:rotate-45 cursor-pointer">
                                    <ArrowUpRight className="w-6 h-6" />
                                </a>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-0.5 border border-white/30 text-[10px] font-[var(--font-space-mono)] uppercase tracking-wider text-white/70">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
