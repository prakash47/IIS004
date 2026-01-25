"use client";

import { motion } from "framer-motion";
import {
    CheckCircle,
    Star,
    Quote,
    Palette,
    Sofa,
    Lightbulb,
    Zap,
    TreePine,
    Wrench,
    Ruler,
    Camera,
    Shield,
    Clock,
    Award,
    Users,
    Heart,
    BadgeCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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



// Specialized Services Card with hover animation
interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

export function AnimatedServiceCard({ icon, title, description, index }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            className="bg-base-100 p-6 rounded-xl border border-base-300 cursor-pointer group overflow-hidden relative"
        >
            {/* Animated gradient background on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />

            <motion.div
                className="text-primary mb-4 relative z-10"
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
            >
                {icon}
            </motion.div>
            <h4 className="font-bold text-lg mb-2 relative z-10 group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-sm opacity-70 relative z-10">{description}</p>

            {/* Animated line on hover */}
            <motion.div
                className="absolute bottom-0 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
}

// Specialized Services Section
const specializedServicesData = [
    {
        icon: <Palette size={32} />,
        title: "Color & Material Consultation",
        description: "Expert guidance on color psychology, material selection, and finish specifications to create cohesive, harmonious spaces."
    },
    {
        icon: <Sofa size={32} />,
        title: "Custom Furniture Design",
        description: "Bespoke furniture pieces designed specifically for your space, crafted by master artisans using premium materials."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "Lighting Design",
        description: "Comprehensive lighting plans combining ambient, task, and accent lighting to transform mood and functionality."
    },
    {
        icon: <Zap size={32} />,
        title: "Smart Home Automation",
        description: "Seamless integration of technology for climate, lighting, security, and entertainment controlled at your fingertips."
    },
    {
        icon: <TreePine size={32} />,
        title: "Sustainable Design",
        description: "Eco-conscious solutions using sustainable materials, energy-efficient systems, and biophilic design principles."
    },
    {
        icon: <Wrench size={32} />,
        title: "Renovation & Remodeling",
        description: "Complete transformation of existing spaces with structural modifications, updated finishes, and modern amenities."
    },
    {
        icon: <Ruler size={32} />,
        title: "Space Planning",
        description: "Optimal layouts that maximize functionality, flow, and natural light while creating distinct zones for various activities."
    },
    {
        icon: <Camera size={32} />,
        title: "3D Visualization",
        description: "Photorealistic renders and virtual walkthroughs so you can experience your space before construction begins."
    }
];

export function AnimatedSpecializedServices() {
    return (
        <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {specializedServicesData.map((service, i) => (
                <AnimatedServiceCard
                    key={i}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    index={i}
                />
            ))}
        </motion.div>
    );
}

// Process Step with animations
interface ProcessStepProps {
    num: string;
    title: string;
    desc: string;
    icon: ReactNode;
    duration: string;
    deliverables: string[];
    index: number;
}

export function AnimatedProcessStep({ num, title, desc, icon, duration, deliverables, index }: ProcessStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
            }}
            className="relative bg-base-200 p-8 rounded-2xl border border-base-300 cursor-pointer group overflow-hidden"
        >
            {/* Animated glow effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-content rounded-xl flex items-center justify-center font-bold text-lg shadow-lg z-10"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                {num}
            </motion.div>

            <motion.div
                className="mb-4 mt-4 text-primary"
                whileHover={{ scale: 1.3, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.4 }}
            >
                {icon}
            </motion.div>

            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h4>
            <p className="text-sm opacity-70 mb-4">{desc}</p>
            <div className="text-xs text-primary font-medium mb-3">Duration: {duration}</div>

            <motion.div
                className="border-t border-base-300 pt-4"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
            >
                <div className="text-xs font-medium opacity-60 mb-2 uppercase">Deliverables:</div>
                <div className="flex flex-wrap gap-2">
                    {deliverables.map((item, idx) => (
                        <motion.span
                            key={idx}
                            className="text-xs bg-base-100 px-2 py-1 rounded"
                            whileHover={{ scale: 1.1, backgroundColor: "var(--primary)", color: "var(--primary-content)" }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}

// Pricing Card with animations
interface PricingCardProps {
    name: string;
    price: string;
    unit: string;
    description: string;
    features: string[];
    highlight: boolean;
    index: number;
}

export function AnimatedPricingCard({ name, price, unit, description, features, highlight, index }: PricingCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: highlight ? 1.05 : 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
                y: -15,
                scale: highlight ? 1.08 : 1.05,
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.4)"
            }}
            className={`relative bg-base-100 text-base-content rounded-2xl p-8 cursor-pointer group overflow-hidden ${highlight ? 'ring-2 ring-primary shadow-2xl' : 'shadow-lg'}`}
        >
            {/* Animated shimmer effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
            />

            {highlight && (
                <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content px-4 py-1 rounded-full text-sm font-medium"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                >
                    Most Popular
                </motion.div>
            )}

            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{name}</h3>

            <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <span className="text-4xl font-bold text-primary">{price}</span>
                <span className="text-sm opacity-60"> {unit}</span>
            </motion.div>

            <p className="text-sm opacity-70 mb-6">{description}</p>

            <ul className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                    <motion.li
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                        <motion.div whileHover={{ scale: 1.3, rotate: 360 }} transition={{ duration: 0.3 }}>
                            <CheckCircle size={16} className="text-primary shrink-0" />
                        </motion.div>
                        <span>{feature}</span>
                    </motion.li>
                ))}
            </ul>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/contact" className={`btn w-full rounded-full ${highlight ? 'btn-primary' : 'btn-outline'}`}>
                    Get Started
                </Link>
            </motion.div>
        </motion.div>
    );
}

// Why Choose Us Card
interface WhyChooseCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    index: number;
}

export function AnimatedWhyChooseCard({ icon, title, description, index }: WhyChooseCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)"
            }}
            className="flex gap-4 p-6 bg-base-200 rounded-xl cursor-pointer group relative overflow-hidden"
        >
            {/* Animated border on hover */}
            <motion.div
                className="absolute inset-0 border-2 border-primary/0 rounded-xl group-hover:border-primary/50 transition-all duration-300"
            />

            <motion.div
                className="text-primary shrink-0"
                whileHover={{ rotate: [0, -15, 15, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
            >
                {icon}
            </motion.div>
            <div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-sm opacity-70">{description}</p>
            </div>
        </motion.div>
    );
}

// Why Choose Us Section Data
const whyChooseUsData = [
    {
        icon: <Shield size={32} />,
        title: "Transparent Pricing",
        description: "Line-item BOQ with no hidden costs. You know exactly where every rupee goes before we start."
    },
    {
        icon: <Clock size={32} />,
        title: "On-Time Delivery",
        description: "We've delivered 94% of projects on or before schedule. Time is money, and we respect yours."
    },
    {
        icon: <Award size={32} />,
        title: "Award-Winning Design",
        description: "40+ design awards over 15 years. Our work is recognized by industry peers and publications."
    },
    {
        icon: <Users size={32} />,
        title: "Dedicated Team",
        description: "One project manager, one designer, one point of contact. Seamless communication throughout."
    },
    {
        icon: <BadgeCheck size={32} />,
        title: "5-Year Warranty",
        description: "Comprehensive warranty on all woodwork, finishes, and installations. We stand by our quality."
    },
    {
        icon: <Heart size={32} />,
        title: "Client-First Approach",
        description: "98% client satisfaction rate. We're not done until you're delighted with every detail."
    }
];

export function AnimatedWhyChooseUs() {
    return (
        <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {whyChooseUsData.map((item, i) => (
                <AnimatedWhyChooseCard
                    key={i}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    index={i}
                />
            ))}
        </motion.div>
    );
}

// Testimonial Card
interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    image: string;
    index: number;
}

export function AnimatedTestimonialCard({ quote, author, role, image, index }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
                y: -12,
                scale: 1.03,
                rotateY: 5,
                boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)"
            }}
            className="bg-base-100 p-8 rounded-2xl shadow-lg relative cursor-pointer group overflow-hidden"
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

            <p className="italic opacity-80 relative z-10 group-hover:opacity-100 transition-opacity">&quot;{quote}&quot;</p>

            <motion.div
                className="flex gap-1 mt-4 text-primary"
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
            >
                {[...Array(5)].map((_, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360, scale: 1.3 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                        <Star size={16} fill="currentColor" />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

// Testimonials Data
const testimonialsData = [
    {
        quote: "Aakar transformed our outdated office into a vibrant workspace that our team actually enjoys coming to. The design perfectly captures our company culture.",
        author: "Priya Sharma",
        role: "CEO, TechVentures",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
    },
    {
        quote: "From our first meeting to the final reveal, the Aakar team was professional, creative, and responsive. They turned our vision into a reality beyond our expectations.",
        author: "Rajesh Mehta",
        role: "Homeowner, Mumbai",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
    },
    {
        quote: "The attention to detail is extraordinary. Every corner of our restaurant tells a story. Guest feedback has been overwhelmingly positive since the redesign.",
        author: "Chef Ananya Iyer",
        role: "Owner, Saffron Kitchen",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    }
];

export function AnimatedTestimonials() {
    return (
        <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {testimonialsData.map((testimonial, i) => (
                <AnimatedTestimonialCard
                    key={i}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    image={testimonial.image}
                    index={i}
                />
            ))}
        </motion.div>
    );
}
