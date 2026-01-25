"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar, Sparkles } from "lucide-react";
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
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className={`group relative overflow-hidden rounded-xl bg-base-100 shadow-xl border transition-all duration-500 ${project.featured
                                ? "border-primary/30 hover:border-primary hover:shadow-[0_0_30px_rgba(var(--p),0.3)]"
                                : "border-base-200 hover:shadow-2xl"
                                }`}
                        >
                            <Link href={`/portfolio/${project.slug}`} className="block">
                                {/* Image Container */}
                                <div className="relative">
                                    <AnimatedImage
                                        containerClassName={project.featured ? "aspect-[3/4]" : "aspect-[4/3]"}
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Category & Featured Badges */}
                                    <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-primary text-primary-content text-xs font-bold uppercase rounded-full shadow-lg">
                                            {project.category}
                                        </span>
                                        {project.featured && (
                                            <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold uppercase rounded-full shadow-lg flex items-center gap-1">
                                                <Sparkles size={12} />
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6 z-10 bg-gradient-to-t from-black/95 via-black/60 to-black/20">
                                        {/* Content Container */}
                                        <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                            {/* Project Title */}
                                            <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-white/90 text-sm mb-4 leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Meta Info Row */}
                                            <div className="flex flex-wrap items-center gap-3 text-white/80 text-sm mb-5">
                                                {project.location && (
                                                    <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                                                        <MapPin size={14} />
                                                        {project.location}
                                                    </span>
                                                )}
                                                {project.year && (
                                                    <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full">
                                                        <Calendar size={14} />
                                                        {project.year}
                                                    </span>
                                                )}
                                            </div>

                                            {/* View Details Button */}
                                            <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-colors ${project.featured
                                                ? "bg-white text-primary hover:bg-primary-content"
                                                : "bg-white text-neutral hover:bg-primary hover:text-primary-content"
                                                }`}>
                                                <span>View Project Details</span>
                                                <ArrowUpRight size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Info Bar */}
                                <div className={`p-6 relative z-10 group-hover:opacity-0 transition-opacity duration-300 ${project.featured ? "bg-gradient-to-r from-primary/5 to-transparent" : "bg-base-100"
                                    }`}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        {project.featured && (
                                            <Sparkles size={12} className="text-amber-500" />
                                        )}
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
