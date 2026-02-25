import { projects } from "@/lib/projects";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Work | AnthemByte",
    description:
        "Explore our portfolio of web development projects — from e-commerce platforms to corporate websites and travel tech.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen bg-neo-main text-white">
            {/* Header Bar */}
            <div className="sticky top-0 z-50 border-b-2 border-white/20 bg-neo-main/95 backdrop-blur-sm">
                <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className="text-2xl font-black tracking-widest uppercase relative flex items-center">
                            <span className="text-white/60 hover:text-white transition-colors duration-300">
                                Anthem
                            </span>
                            <span className="text-neo-accent hover:text-neo-highlight transition-colors duration-300">
                                Byte
                            </span>
                        </span>
                    </Link>
                    <Link href="/">
                        <Button
                            variant="outline"
                            size="sm"
                            className="text-white border-white/40 hover:bg-white hover:text-neo-main"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Page Header */}
            <section className="container mx-auto px-4 md:px-6 pt-16 pb-12">
                <div className="max-w-3xl">
                    <p className="text-neo-accent text-sm font-[var(--font-space-mono)] uppercase tracking-widest mb-4">
                        Portfolio
                    </p>
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        All <span className="text-neo-accent">Projects</span>
                    </h1>
                    <p className="text-lg text-white/70 leading-relaxed max-w-xl">
                        A curated selection of websites and platforms we&apos;ve
                        built for clients across industries — from textiles to
                        travel tech to corporate enterprises.
                    </p>
                </div>
                <div className="h-1 w-32 bg-neo-accent mt-8"></div>
            </section>

            {/* Projects Grid */}
            <section className="container mx-auto px-4 md:px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block"
                        >
                            <Card
                                hoverEffect
                                className="bg-black border-white text-white p-0 flex flex-col overflow-hidden"
                            >
                                {/* Screenshot */}
                                <div
                                    className={`${project.bg} relative border-b-2 border-white overflow-hidden`}
                                >
                                    <div
                                        className="relative w-full"
                                        style={{ aspectRatio: "16/9" }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} website screenshot`}
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>

                                {/* Info Bar */}
                                <div className="p-6 flex flex-col gap-3 bg-neo-main">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="text-2xl font-bold uppercase tracking-wide">
                                                {project.title}
                                            </h2>
                                            <p className="text-neo-accent text-sm font-[var(--font-space-mono)] mt-1">
                                                {project.category}
                                            </p>
                                        </div>
                                        <div className="p-3 border-2 border-white rounded-full group-hover:bg-neo-accent group-hover:border-neo-accent transition-all transform group-hover:rotate-45 shrink-0">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-0.5 border border-white/30 text-[10px] font-[var(--font-space-mono)] uppercase tracking-wider text-white/70"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="border-t-2 border-white/20 bg-black">
                <div className="container mx-auto px-4 md:px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
                            Have a project in mind?
                        </h2>
                        <p className="text-white/50 mt-2">
                            Let&apos;s build something exceptional together.
                        </p>
                    </div>
                    <Link href="/#contact">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="text-lg px-10"
                        >
                            Start a Project
                        </Button>
                    </Link>
                </div>
            </section>
        </main>
    );
}
