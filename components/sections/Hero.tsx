"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowDown, ArrowUpRight, Minus } from "lucide-react";
import gsap from "gsap";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Cinematic entrance
            tl.from(".hero-overlay", {
                scaleY: 1,
                duration: 0.8,
                ease: "power2.inOut",
            })
                .from(".hero-headline-word", {
                    y: 120,
                    rotateX: -80,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.12,
                    ease: "power4.out",
                }, "-=0.3")
                .from(".hero-sub", {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.5")
                .from(".hero-cell-reveal", {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.08,
                }, "-=0.4")
                .from(".hero-cta-btn", {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.15,
                }, "-=0.3")
                .from(".hero-bottom-bar", {
                    y: 20,
                    opacity: 0,
                    duration: 0.5,
                }, "-=0.3");

            // Floating accent shapes
            gsap.to(".hero-shape-1", {
                y: -20, rotation: 5,
                repeat: -1, yoyo: true, duration: 3, ease: "sine.inOut",
            });
            gsap.to(".hero-shape-2", {
                y: 15, rotation: -3,
                repeat: -1, yoyo: true, duration: 4, ease: "sine.inOut", delay: 1,
            });
            gsap.to(".hero-shape-3", {
                y: -10, x: 10,
                repeat: -1, yoyo: true, duration: 3.5, ease: "sine.inOut", delay: 0.5,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-neo-main text-white overflow-hidden flex flex-col">

            {/* Decorative floating shapes */}
            <div className="hero-shape-1 absolute top-20 right-[15%] w-32 h-32 border-4 border-neo-accent/30 rotate-12 pointer-events-none" />
            <div className="hero-shape-2 absolute bottom-40 left-[10%] w-20 h-20 bg-neo-accent/20 pointer-events-none" />
            <div className="hero-shape-3 absolute top-[40%] right-[8%] w-16 h-16 border-4 border-white/10 rounded-full pointer-events-none" />

            {/* Subtle grid texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Main Content Area */}
            <div className="container mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center pt-12 pb-8 relative z-10">

                {/* Top Label */}
                <div className="hero-cell-reveal mb-8">
                    <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-neo-accent rounded-full animate-pulse" />
                        <span className="font-[var(--font-space-mono)] text-[11px] uppercase tracking-[0.25em] text-white/70">
                            Available for New Projects
                        </span>
                    </div>
                </div>

                {/* Headline */}
                <div className="mb-10" style={{ perspective: "1000px" }}>
                    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.88]">
                        <div className="overflow-hidden">
                            <span className="hero-headline-word inline-block">We craft</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="hero-headline-word inline-block text-neo-accent">digital</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="hero-headline-word inline-block">experiences</span>
                        </div>
                    </h1>
                </div>

                {/* Sub content grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 mb-12">

                    {/* Description */}
                    <div className="hero-sub md:col-span-5 md:pr-12">
                        <p className="text-lg md:text-xl text-white/50 leading-relaxed max-w-md">
                            From e-commerce platforms to corporate websites — we build systems
                            that perform, scale, and look sharp.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <div className="hero-cta-btn">
                                <Button
                                    size="lg"
                                    className="text-lg px-10 py-7 bg-neo-accent text-white border-2 border-neo-accent hover:bg-transparent hover:text-neo-accent transition-all shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)]"
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Start a Project
                                    <ArrowUpRight className="w-5 h-5 ml-2" />
                                </Button>
                            </div>
                            <div className="hero-cta-btn">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg px-10 py-7 text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all"
                                    onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Work
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { num: "6+", label: "Projects Shipped", accent: true },
                            { num: "4+", label: "Industries Served", accent: false },
                            { num: "100%", label: "Client Satisfaction", accent: false },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className={`hero-cell-reveal p-5 md:p-6 border-2 transition-all duration-300 hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_var(--neo-accent)] cursor-default ${stat.accent
                                        ? "border-neo-accent bg-neo-accent/10"
                                        : "border-white/15 bg-white/5 hover:border-white/40"
                                    }`}
                            >
                                <span className="block text-3xl md:text-4xl font-black font-[var(--font-space-mono)] text-neo-accent mb-1">
                                    {stat.num}
                                </span>
                                <span className="text-[10px] md:text-xs uppercase tracking-wider text-white/40 font-[var(--font-space-mono)]">
                                    {stat.label}
                                </span>
                            </div>
                        ))}

                        {/* Tech Stack Cell */}
                        <div className="hero-cell-reveal col-span-2 md:col-span-3 p-4 border-2 border-white/10 bg-white/5 flex flex-wrap gap-2 items-center">
                            <Minus className="w-4 h-4 text-white/30 mr-1" />
                            {["Next.js", "React", "Node.js", "Tailwind", "GSAP", "TypeScript"].map((tag) => (
                                <span
                                    key={tag}
                                    className="hero-cell-reveal px-3 py-1 text-[10px] font-[var(--font-space-mono)] uppercase tracking-wider border border-white/20 text-white/50 hover:text-white hover:border-neo-accent hover:bg-neo-accent/10 transition-all cursor-default"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="hero-bottom-bar border-t border-white/10 relative z-10">
                <div className="container mx-auto px-4 md:px-6 py-5 flex justify-between items-center">
                    <button
                        className="flex items-center gap-2 text-xs font-[var(--font-space-mono)] uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors group"
                        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <ArrowDown className="w-3 h-3 animate-bounce" />
                        Scroll to explore
                    </button>

                    <div className="hidden md:flex items-center gap-6 text-xs font-[var(--font-space-mono)] uppercase tracking-widest text-white/30">
                        <span>Based in Navi Mumbai</span>
                        <span className="w-1 h-1 bg-neo-accent rounded-full" />
                        <span>Est. 2026</span>
                        <span className="w-1 h-1 bg-neo-accent rounded-full" />
                        <span>info@anthembyte.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
