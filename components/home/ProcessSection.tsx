"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, Layers, HardHat, Truck, Smile } from "lucide-react";

const steps = [
    {
        num: "01",
        title: "Discovery",
        desc: "We listen to your needs, preferences, and lifestyle to understand your vision.",
        icon: <ClipboardList size={24} />
    },
    {
        num: "02",
        title: "Concept",
        desc: "We create mood boards and initial layouts to visualize the design direction.",
        icon: <PenTool size={24} />
    },
    {
        num: "03",
        title: "Design",
        desc: "Detailed 3D renders and material selection to finalize every look and feel.",
        icon: <Layers size={24} />
    },
    {
        num: "04",
        title: "Execution",
        desc: "Our skilled team brings the design to life with precision and care.",
        icon: <HardHat size={24} />
    },
    {
        num: "05",
        title: "Styling",
        desc: "Final touches, decor, and art placement to complete the narrative.",
        icon: <Truck size={24} />
    },
    {
        num: "06",
        title: "Handover",
        desc: "Walkthrough and handover of your dream space, ready for you to enjoy.",
        icon: <Smile size={24} />
    }
];

export function ProcessSection() {
    return (
        <section className="py-24 bg-base-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 px-4">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Workflow</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">From Sketch to Reality</h2>
                    <p className="text-lg opacity-70 max-w-2xl mx-auto">
                        We follow a streamlined, transparent process to ensure your project is delivered on time, within budget, and beyond expectations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-base-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20 group relative overflow-hidden"
                        >
                            {/* Background Number */}
                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                <span className="text-9xl font-serif font-bold text-primary">{step.num}</span>
                            </div>

                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6 group-hover:scale-110 transition-transform">
                                {step.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                                <span className="text-xs text-primary font-bold uppercase tracking-widest mr-2">{step.num}.</span>
                                {step.title}
                            </h3>
                            <p className="opacity-70 leading-relaxed font-light">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
