"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function BrandStorySection() {
    return (
        <section className="py-24 bg-black text-white overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/30 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/30 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Designing Spaces That <span className="text-primary italic">Tell Your Story</span>
                        </h2>
                        <div className="space-y-6 text-lg opacity-80 leading-relaxed font-light">
                            <p>
                                Founded in 2010, Aakar Interiors began with a simple belief: that the spaces we inhabit shape who we are. What started as a small boutique studio has grown into one of Mumbai&apos;s most sought-after design firms.
                            </p>
                            <p>
                                We don&apos;t just arrange furniture; we choreograph life. Our philosophy blends the precision of architecture with the emotion of art, creating environments that feel inevitable—as if they were always meant to be that way.
                            </p>
                            <p>
                                From heritage restorations in South Mumbai to ultra-modern penthouses in Bandra, our signature aesthetic is unmistakable yet uniquely tailored to every client.
                            </p>
                        </div>

                        <div className="mt-10 flex gap-8">
                            <div>
                                <h4 className="text-3xl font-serif font-bold text-primary">15+</h4>
                                <p className="text-sm opacity-60 uppercase tracking-wide">Years of Excellence</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif font-bold text-primary">750+</h4>
                                <p className="text-sm opacity-60 uppercase tracking-wide">Projects Delivered</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif font-bold text-primary">40+</h4>
                                <p className="text-sm opacity-60 uppercase tracking-wide">Design Awards</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/5] rounded-lg overflow-hidden group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                            alt="Aakar Interiors Studio"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                        <div className="absolute bottom-8 left-8">
                            <p className="text-sm font-bold uppercase tracking-widest text-white/90">Inside Aakar Studio</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
