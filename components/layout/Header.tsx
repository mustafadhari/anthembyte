"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "/work" },
    { name: "About", href: "#about" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white/90 backdrop-blur-sm">
            <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-3xl font-black tracking-widest uppercase relative flex items-center">
                        <span className="text-transparent stroke-text text-stroke-1 hover:text-neo-main transition-colors duration-300">Anthem</span>
                        <span className="text-transparent stroke-text text-stroke-1 text-stroke-accent hover:text-neo-accent transition-colors duration-300">Byte</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium hover:text-neo-accent transition-colors relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Button variant="primary" size="sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        Let's Talk
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 hover:bg-gray-100 border-2 border-transparent hover:border-black transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t-2 border-black bg-white absolute w-full left-0 animate-in slide-in-from-top-5 fade-in duration-200">
                    <nav className="flex flex-col p-6 gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-xl font-bold hover:text-neo-accent transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button
                            className="w-full mt-4"
                            onClick={() => {
                                setIsOpen(false);
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Let's Talk
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
