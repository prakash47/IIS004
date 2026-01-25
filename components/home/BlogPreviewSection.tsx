"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
    {
        title: "The Art of Biophilic Design: Bringing Nature Indoors",
        excerpt: "Discover how incorporating natural elements into your home can improve well-being and reduce stress.",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80&w=800",
        date: "Jan 15, 2026",
        author: "Aditi Shah",
        category: "Design Trends",
        slug: "art-of-biophilic-design"
    },
    {
        title: "Timeless Color Palettes for Modern Indian Homes",
        excerpt: "Explore color combinations that blend contemporary aesthetics with traditional warmth.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800",
        date: "Jan 08, 2026",
        author: "Rahul Verma",
        category: "Color Guide",
        slug: "timeless-color-palettes"
    },
    {
        title: "Smart Home Integration: A Guide for 2026",
        excerpt: "How to seamlessly integrate technology into your interior design without compromising style.",
        image: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=800",
        date: "Dec 22, 2025",
        author: "Priya Menon",
        category: "Technology",
        slug: "smart-home-integration"
    }
];

export function BlogPreviewSection() {
    return (
        <section className="py-24 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Journal</span>
                        <h2 className="text-4xl font-serif font-bold">Latest Insights</h2>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center gap-2 group hover:text-primary transition-colors">
                        Read All Articles <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="relative aspect-[3/2] rounded-xl overflow-hidden mb-6">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-black">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 text-xs opacity-60 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={14} />
                                        <span>{post.author}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="opacity-70 text-sm line-clamp-2 mb-4">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider">
                                    Read Article <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/blog" className="btn btn-outline rounded-full">
                        View All Articles
                    </Link>
                </div>
            </div>
        </section>
    );
}
