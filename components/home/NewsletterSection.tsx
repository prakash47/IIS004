"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export function NewsletterSection() {
    return (
        <section className="py-24 bg-primary text-primary-content relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-black/10 rounded-full blur-[80px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Join Our Design Community
                        </h2>
                        <p className="text-xl opacity-90 mb-10 leading-relaxed">
                            Get exclusive design tips, trend alerts, and showcase of our latest transformations delivered straight to your inbox.
                        </p>

                        <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative flex-grow">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full pl-12 pr-4 py-4 rounded-full text-black focus:outline-none focus:ring-4 focus:ring-white/30"
                                />
                            </div>
                            <button className="btn bg-white text-primary hover:bg-neutral-100 border-none rounded-full px-8 py-4 h-auto text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                                Subscribe
                            </button>
                        </form>

                        <p className="text-sm opacity-60 mt-6">
                            No spam, ever. Unsubscribe anytime.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
