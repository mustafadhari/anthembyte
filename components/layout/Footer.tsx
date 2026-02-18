import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t-2 border-black bg-neo-main text-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold uppercase tracking-tighter">AnthemByte</h2>
                        <p className="max-w-xs text-gray-400">
                            Forging digital experiences with sharp edges and bold ideas.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <Link href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            <Github className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            <Twitter className="h-5 w-5" />
                        </Link>
                        <Link href="#" className="p-3 border-2 border-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                            <Linkedin className="h-5 w-5" />
                        </Link>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between text-sm text-gray-400">
                    <p>© {new Date().getFullYear()} AnthemByte. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white underline decoration-neo-accent">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white underline decoration-neo-accent">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
