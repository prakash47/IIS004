"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "Do you charge a consultation fee?",
        answer: "Our initial consultation is completely free! We visit your site, understand your requirements, and provide a preliminary cost estimate."
    },
    {
        question: "What is the typical timeline for a 3BHK project?",
        answer: "A complete interior project for a 3BHK typically takes 3-4 months from design approval to handover, depending on the scope of work."
    },
    {
        question: "Do you provide a warranty on your work?",
        answer: "Yes, we offer a comprehensive 5-year warranty on all woodwork and installations, ensuring peace of mind long after the handover."
    },
    {
        question: "Can you work with my existing furniture?",
        answer: "Absolutely. We believe in sustainable design and can seamlessly integrate your cherished pieces into the new design narrative."
    },
    {
        question: "Do you take up projects outside Mumbai?",
        answer: "Yes, we have successfully delivered projects in Pune, Bangalore, Goa, and Delhi. We handle logistics and supervision seamlessly."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-base-200">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-5">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Common Questions</span>
                        <h2 className="text-4xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
                        <p className="text-lg opacity-70 mb-8 leading-relaxed">
                            Understand our process, policies, and pricing. If you have more questions, our team is just a call away.
                        </p>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl hidden lg:block">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=800"
                                alt="Interior Design FAQ"
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className={`bg-base-100 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === i ? 'shadow-lg ring-1 ring-primary/20' : 'hover:bg-white'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold text-lg ${openIndex === i ? 'text-primary' : ''}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-colors ${openIndex === i ? 'bg-primary/10 text-primary' : 'bg-base-200'}`}>
                                        {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>

                                <motion.div
                                    initial={false}
                                    animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0 opacity-80 leading-relaxed border-t border-base-200/50 mt-2">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
