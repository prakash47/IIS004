import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Aakar Interiors`,
        description: project.description,
    };
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24">
                {/* Banner */}
                <div className="relative h-[60vh] w-full">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                        <div className="space-y-2 mb-6">
                            <span className="uppercase tracking-widest text-sm bg-primary/20 px-3 py-1 rounded-full border border-primary/30">
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{project.title}</h1>
                    </div>
                </div>

                <div className="container mx-auto px-4 py-12 -mt-20 relative z-10">
                    <div className="bg-base-100 rounded-2xl shadow-xl p-8 md:p-12 border border-white/5 max-w-4xl mx-auto">
                        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors mb-8">
                            <ArrowLeft size={16} /> Back to Portfolio
                        </Link>

                        <div className="flex flex-wrap gap-6 mb-8 border-b border-base-content/10 pb-8 text-sm opacity-80">
                            <div className="flex items-center gap-2">
                                <MapPin size={18} className="text-primary" />
                                <span>{project.location || "Mumbai, India"}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-primary" />
                                <span>{project.year || "2024"}</span>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h3 className="text-2xl font-serif font-bold mb-4">Project Overview</h3>
                            <p className="opacity-80 leading-relaxed">
                                {project.description}
                                {" "}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p className="opacity-80 leading-relaxed mt-4">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
