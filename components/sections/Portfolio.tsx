import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Neon Finance",
        category: "Fintech Platform",
        bg: "bg-blue-100",
    },
    {
        title: "Cyber Dust",
        category: "NFT Marketplace",
        bg: "bg-purple-100",
    },
    {
        title: "Urban Pulse",
        category: "Real Estate App",
        bg: "bg-yellow-100",
    },
];

export function Portfolio() {
    return (
        <Section id="work" className="bg-neo-main text-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4 text-white">
                        Selected <span className="text-neo-accent">Works</span>
                    </h2>
                    <div className="h-2 w-24 bg-white"></div>
                </div>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                    View All Projects
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Card key={index} hoverEffect className="bg-black border-white text-white p-0 h-[500px] flex flex-col group">
                        {/* Placeholder for project image using color block for now */}
                        <div className={`flex-1 ${project.bg} relative border-b-2 border-white overflow-hidden`}>
                            <div className="absolute inset-0 flex items-center justify-center text-black/20 text-6xl font-bold uppercase rotate-12 select-none">
                                Preview
                            </div>
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-neo-accent/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                                <Button variant="outline" className="bg-white text-black border-black">View Case Study</Button>
                            </div>
                        </div>

                        <div className="p-6 flex justify-between items-center bg-neo-main">
                            <div>
                                <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
                                <p className="text-gray-400">{project.category}</p>
                            </div>
                            <div className="p-3 border-2 border-white rounded-full group-hover:bg-white group-hover:text-black transition-all">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
