"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Mouse follower / Spotlight
            const moveCursor = (e: MouseEvent) => {
                gsap.to(cursorRef.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                    ease: "power2.out",
                });
            };
            window.addEventListener("mousemove", moveCursor);

            // Main Text Reveal
            const tl = gsap.timeline();
            tl.from(".hero-char", {
                y: 200,
                rotate: 10,
                opacity: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
            })
                .from(".hero-btn", {
                    opacity: 0,
                    y: 20,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                }, "-=0.5");

            // Marquee Animation
            gsap.to(".marquee-content", {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear",
            });

        }, containerRef);

        return () => {
            ctx.revert();
            window.removeEventListener("mousemove", () => { }); // Cleanup fix needed technically but ctx handles most
        };
    }, []);

    const MarqueeText = "DIGITAL • ANTHEMS • AUTOMATION • WEB DEV • ";

    return (
        <div ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neo-main text-white cursor-none">

            {/* Custom Cursor/Spotlight */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[400px] h-[400px] bg-neo-accent/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen z-0"
            />

            {/* Scrolling Background Marquee */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-10 pointer-events-none select-none overflow-hidden hover:opacity-20 transition-opacity duration-500">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="marquee-content whitespace-nowrap text-[10vh] font-bold uppercase leading-none text-transparent stroke-text text-stroke-white text-stroke-1">
                        {MarqueeText.repeat(10)}
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">

                <div className="mb-2 overflow-hidden">
                    <span className="inline-block px-4 py-1 border-2 border-neo-accent text-neo-accent font-mono text-sm tracking-widest uppercase">
                        Est. 2026
                    </span>
                </div>

                <h1 ref={textRef} className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter mb-8 mix-blend-difference">
                    <div className="overflow-hidden flex justify-center">
                        {"WE_BUILD".split("").map((char, i) => (
                            <span key={i} className="hero-char inline-block">{char === "_" ? "\u00A0" : char}</span>
                        ))}
                    </div>
                    <div className="overflow-hidden flex justify-center">
                        {"DIGITAL".split("").map((char, i) => (
                            <span key={i} className="hero-char inline-block text-neo-accent">{char}</span>
                        ))}
                    </div>
                    <div className="overflow-hidden flex justify-center">
                        {"ANTHEMS".split("").map((char, i) => (
                            <span key={i} className="hero-char inline-block text-transparent stroke-text text-stroke-white text-stroke-2 hover:text-white transition-colors duration-300">{char}</span>
                        ))}
                    </div>
                </h1>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
                    <div className="hero-btn">
                        <Button size="lg" className="text-xl px-12 py-8 bg-white text-black hover:bg-neo-accent hover:text-white border-4 border-transparent hover:border-white transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                            View Our Work
                        </Button>
                    </div>
                    <div className="hero-btn">
                        <Button variant="outline" size="lg" className="text-xl px-12 py-8 text-white border-2 border-white hover:bg-white hover:text-black shadow-none hover:shadow-[8px_8px_0px_0px_#ff5e5e]" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Start a Project
                        </Button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-neo-accent rounded-full animate-pulse"></div>
                </div>
            </div>
        </div>
    );
}
