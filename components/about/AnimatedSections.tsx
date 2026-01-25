"use client";

import { motion } from "framer-motion";
import {
    CheckCircle,
    Leaf,
    Globe2,
    HeartHandshake,
    Target,
    Lightbulb,
    Gem,
    Milestone,
    Trophy,
    BookOpen,
    Star,
    Quote,
} from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

// Philosophy Point Card
interface PhilosophyPointProps {
    title: string;
    desc: string;
    index: number;
}

export function AnimatedPhilosophyPoint({ title, desc, index }: PhilosophyPointProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                x: 10,
                scale: 1.02,
                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.15)"
            }}
            className="flex gap-4 p-4 bg-base-200 rounded-xl cursor-pointer group overflow-hidden relative"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="text-primary shrink-0 mt-1"
            >
                <CheckCircle size={20} />
            </motion.div>
            <div className="relative z-10">
                <h4 className="font-bold group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-sm opacity-70">{desc}</p>
            </div>
        </motion.div>
    );
}

// Core Value Card
interface ValueCardProps {
    icon: ReactNode;
    title: string;
    desc: string;
    index: number;
}

export function AnimatedValueCard({ icon, title, desc, index }: ValueCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            className="bg-base-100 p-8 rounded-2xl border border-base-300 cursor-pointer group overflow-hidden relative"
        >
            {/* Animated gradient on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <motion.div
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300 relative z-10"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-bold mb-3 relative z-10 group-hover:text-primary transition-colors">{title}</h3>
            <p className="opacity-70 leading-relaxed relative z-10">{desc}</p>

            {/* Animated corner accent */}
            <motion.div
                className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100"
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

// Values Data
const valuesData = [
    { icon: <Leaf size={28} />, title: "Sustainable Living", desc: "We prioritize eco-friendly materials and energy-efficient designs to reduce our carbon footprint without compromising on luxury. Every project considers its environmental impact." },
    { icon: <Globe2 size={28} />, title: "Global Standards", desc: "Our design philosophy adheres to international standards of ergonomics, safety, and aesthetics, bringing world-class interiors to your doorstep with meticulous attention to detail." },
    { icon: <HeartHandshake size={28} />, title: "Client-Centricity", desc: "Your home is a reflection of you. We listen, adapt, and co-create spaces that truly resonate with your personal narrative and lifestyle aspirations." },
    { icon: <Target size={28} />, title: "Precision & Excellence", desc: "From concept to completion, every detail is meticulously planned and executed. We believe in doing things right the first time, every time." },
    { icon: <Lightbulb size={28} />, title: "Innovation First", desc: "We embrace new technologies, materials, and methodologies to push the boundaries of what's possible in interior design while honoring timeless principles." },
    { icon: <Gem size={28} />, title: "Uncompromising Quality", desc: "We work only with the finest materials and trusted craftsmen. Our 5-year warranty on all projects reflects our confidence in our workmanship." }
];

export function AnimatedCoreValues() {
    return (
        <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {valuesData.map((v, i) => (
                <AnimatedValueCard
                    key={i}
                    icon={v.icon}
                    title={v.title}
                    desc={v.desc}
                    index={i}
                />
            ))}
        </motion.div>
    );
}

// Timeline Item
interface TimelineItemProps {
    year: string;
    title: string;
    desc: string;
    index: number;
}

export function AnimatedTimelineItem({ year, title, desc, index }: TimelineItemProps) {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            className={`relative flex flex-col md:flex-row gap-8 items-center ${!isLeft ? 'md:flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Content */}
            <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                <motion.div
                    className="bg-base-100 p-6 rounded-2xl shadow-lg border border-base-300 cursor-pointer group overflow-hidden relative"
                    whileHover={{
                        scale: 1.03,
                        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Animated gradient */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    />

                    <motion.span
                        className="text-3xl font-bold text-primary font-serif block mb-2 relative z-10"
                        whileHover={{ scale: 1.1 }}
                    >
                        {year}
                    </motion.span>
                    <h3 className="text-xl font-bold mb-2 relative z-10 group-hover:text-primary transition-colors">{title}</h3>
                    <p className="opacity-70 text-sm relative z-10">{desc}</p>
                </motion.div>
            </div>

            {/* Center Icon */}
            <motion.div
                className="relative z-10 w-16 h-16 bg-primary text-primary-content rounded-full flex items-center justify-center shrink-0 shadow-xl border-4 border-base-200"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                <Milestone size={24} />
            </motion.div>

            {/* Spacer */}
            <div className="flex-1 hidden md:block" />
        </motion.div>
    );
}

// Award Card
interface AwardCardProps {
    year: string;
    title: string;
    org: string;
    index: number;
}

export function AnimatedAwardCard({ year, title, org, index }: AwardCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)"
            }}
            className="flex items-start gap-4 p-4 bg-base-200 rounded-xl cursor-pointer group overflow-hidden relative"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <motion.div
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-colors relative z-10"
                whileHover={{ rotate: [0, -15, 15, 0] }}
                transition={{ duration: 0.4 }}
            >
                <Trophy size={20} />
            </motion.div>
            <div className="relative z-10">
                <div className="text-xs text-primary font-medium">{year}</div>
                <h4 className="font-bold group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-sm opacity-60">{org}</p>
            </div>
        </motion.div>
    );
}

// Press Card
interface PressCardProps {
    publication: string;
    title: string;
    year: string;
    index: number;
}

export function AnimatedPressCard({ publication, title, year, index }: PressCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
            }}
            className="bg-base-100 p-6 rounded-xl border border-base-300 cursor-pointer group overflow-hidden relative"
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />

            <div className="flex items-center gap-3 mb-3 relative z-10">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                    <BookOpen size={20} className="text-primary" />
                </motion.div>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{year}</span>
            </div>
            <h4 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors relative z-10">{publication}</h4>
            <p className="text-sm opacity-70 relative z-10">&quot;{title}&quot;</p>
        </motion.div>
    );
}

// Testimonial Card
interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    image: string;
    project: string;
    index: number;
}

export function AnimatedTestimonialCard({ quote, author, role, image, project, index }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
                y: -12,
                scale: 1.03,
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.2)"
            }}
            className="bg-base-200 p-8 rounded-2xl relative cursor-pointer group overflow-hidden"
        >
            {/* Animated quote icon */}
            <motion.div
                className="absolute top-4 right-4 text-primary/10"
                animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
            >
                <Quote size={60} />
            </motion.div>

            <div className="flex items-center gap-4 mb-6">
                <motion.div
                    className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                >
                    <Image
                        src={image}
                        alt={author}
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <div>
                    <motion.div
                        className="font-bold group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                    >
                        {author}
                    </motion.div>
                    <div className="text-sm opacity-60">{role}</div>
                </div>
            </div>

            <p className="italic opacity-80 mb-4 relative z-10 group-hover:opacity-100 transition-opacity">&quot;{quote}&quot;</p>
            <div className="text-xs text-primary font-medium">{project}</div>

            <motion.div
                className="flex gap-1 mt-4 text-primary"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
            >
                {[...Array(5)].map((_, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ rotate: 360, scale: 1.3 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                        <Star size={14} fill="currentColor" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

// Approach Item
interface ApproachItemProps {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

export function AnimatedApproachItem({ icon, title, description, index }: ApproachItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{
                x: 10,
                scale: 1.02
            }}
            className="flex gap-4 cursor-pointer group"
        >
            <motion.div
                className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-colors"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
            >
                {icon}
            </motion.div>
            <div>
                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-sm opacity-70">{description}</p>
            </div>
        </motion.div>
    );
}
