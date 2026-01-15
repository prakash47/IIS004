"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectCategory } from "@/types/portfolio";
import { AnimatedImage } from "@/components/ui/AnimatedImage";

interface PortfolioGridProps {
    projects: Project[];
}

export function PortfolioGrid({ projects }: PortfolioGridProps) {
    const [filter, setFilter] = useState<ProjectCategory | "all">("all");

    const filteredProjects = projects.filter(
        (p) => filter === "all" || p.category === filter
    );

    return (
        <div>
            {/* Filters */}
            <div className="flex justify-center gap-4 mb-12">
                {(["all", "residential", "commercial"] as const).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                            ? "bg-primary text-primary-content shadow-lg scale-105"
                            : "bg-base-200 hover:bg-base-300 text-base-content/70"
                            }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="group relative overflow-hidden rounded-xl bg-base-100 shadow-xl border border-base-200"
                        >
                            <Link href={`/portfolio/${project.slug}`}>
                                <AnimatedImage
                                    containerClassName="aspect-[4/3]"
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white">
                                        <ArrowUpRight />
                                    </div>
                                </div>

                                <div className="p-6 relative bg-base-100 z-10">
                                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                                        {project.category}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-base-content/70 text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
