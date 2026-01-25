import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedImage } from "@/components/ui/AnimatedImage";
import {
    AnimatedPhilosophyPoint,
    AnimatedCoreValues,
    AnimatedTimelineItem,
    AnimatedAwardCard,
    AnimatedPressCard,
    AnimatedTestimonialCard,
    AnimatedApproachItem
} from "@/components/about/AnimatedSections";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Users,
    Palette,
    Sparkles
} from "lucide-react";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us - Our Story & Design Philosophy",
    description: "Learn about Aakar Interiors' 15-year journey transforming spaces across India. Meet our award-winning team, discover our design philosophy, and explore our commitment to sustainable luxury interior design.",
    keywords: [
        "about Aakar Interiors",
        "interior design company Mumbai",
        "interior design team",
        "design philosophy",
        "sustainable interior design",
        "award-winning interior designers",
        "interior design story",
    ],
    alternates: {
        canonical: "https://aakarinteriors.com/about",
    },
    openGraph: {
        title: "About Aakar Interiors | 15 Years of Design Excellence",
        description: "Discover the story behind Mumbai's premier interior design studio. 750+ projects, 40+ awards, and a team passionate about creating extraordinary spaces.",
        url: "https://aakarinteriors.com/about",
        type: "website",
    },
};

export default function AboutPage() {
    const history = [
        { year: "2010", title: "The Inception", desc: "Aakar Interiors was established in a modest 300 sq. ft. studio in South Mumbai, fueled by a singular vision: to democratize luxury design." },
        { year: "2013", title: "First Major Recognition", desc: "Our 'Horizon Residence' project was featured in India's top architecture magazine, marking our emergence as a design force to reckon with." },
        { year: "2015", title: "National Recognition", desc: "Our 'Skyline Villa' project earned the prestigious 'Best Residential Design' award from IIID, putting us on the national map." },
        { year: "2017", title: "Team Expansion", desc: "We grew from a team of 8 to 35 specialists, establishing dedicated departments for residential, commercial, and hospitality projects." },
        { year: "2019", title: "Commercial Expansion", desc: "We diversified into the commercial sector, designing cutting-edge workspaces for tech giants in Bangalore and Hyderabad." },
        { year: "2021", title: "Sustainability Focus", desc: "Launched our 'Green Interiors' initiative, committing to sustainable design practices. Achieved GRIHA certification for three major projects." },
        { year: "2023", title: "Hospitality Milestone", desc: "Completed the interiors for 15 boutique hotels across India, including the award-winning 'Heritage Haveli' in Udaipur." },
        { year: "2024", title: "Global Footprint", desc: "Marking a new era, we completed our first international penthouse project in Dubai, setting the stage for global operations." },
    ];

    const awards = [
        { year: "2024", title: "Best Luxury Residential Interior", org: "IIID Design Excellence Awards" },
        { year: "2024", title: "Sustainability Champion", org: "Green Building Council India" },
        { year: "2023", title: "Best Hospitality Interior", org: "Asia Hospitality Design Awards" },
        { year: "2023", title: "Workplace Design of the Year", org: "Commercial Design Summit" },
        { year: "2022", title: "Best Use of Materials", org: "Surface Design Awards" },
        { year: "2022", title: "Designer of the Year", org: "India Design Forum" },
        { year: "2021", title: "Excellence in Sustainable Design", org: "GRIHA Council" },
        { year: "2020", title: "Best Residential Project Under 5000 sq.ft.", org: "Home Design Awards" },
        { year: "2019", title: "Innovation in Commercial Design", org: "Workspace Design Awards" },
        { year: "2018", title: "Best Emerging Firm", org: "Architecture + Design Magazine" },
        { year: "2015", title: "Best Residential Design", org: "IIID National Awards" },
        { year: "2013", title: "Young Designer of the Year", org: "Design Week India" },
    ];

    const testimonials = [
        {
            quote: "Aakar didn't just design our home; they understood our family's essence. Every room tells our story. The attention to detail and their ability to blend functionality with aesthetics is remarkable.",
            author: "Rajiv & Sunita Kapoor",
            role: "Homeowners, Mumbai",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
            project: "3BHK Apartment, Worli"
        },
        {
            quote: "Our office transformation has had a measurable impact on employee satisfaction and productivity. The design perfectly balances openness with private spaces for focused work.",
            author: "Neha Agarwal",
            role: "CEO, TechStart India",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
            project: "5,000 sq.ft. Office, Bangalore"
        },
        {
            quote: "The interiors of our boutique hotel have become our biggest differentiator. Guests constantly compliment the design, and our TripAdvisor rating has never been higher.",
            author: "Vikram Shah",
            role: "Owner, Heritage Haveli",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
            project: "25-Room Boutique Hotel, Udaipur"
        }
    ];

    const stats = [
        { number: "750+", label: "Projects Completed" },
        { number: "15+", label: "Years of Excellence" },
        { number: "50+", label: "Design Experts" },
        { number: "40+", label: "Awards Won" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "12", label: "Cities Served" }
    ];

    const philosophyPoints = [
        {
            title: "Form Follows Function",
            desc: "Beauty should never come at the cost of usability. Every design decision serves both aesthetic and practical purposes."
        },
        {
            title: "Timelessness Over Trends",
            desc: "We create spaces that remain elegant for decades, not just for the current season. Classic principles guide our modern expressions."
        },
        {
            title: "Harmony with Context",
            desc: "Great design responds to its environment—the architecture, the neighborhood, the culture, and the climate of the place it inhabits."
        },
        {
            title: "Craft & Materiality",
            desc: "We believe in honest materials and masterful craftsmanship. The texture of wood, the coolness of stone, the warmth of fabric—these details matter."
        }
    ];

    const pressFeatures = [
        { publication: "Architectural Digest India", title: "India's Top 20 Interior Designers", year: "2024" },
        { publication: "Elle Décor India", title: "The New Luxury: Spaces That Inspire", year: "2023" },
        { publication: "Vogue Living", title: "Dream Homes of Mumbai", year: "2023" },
        { publication: "Forbes India", title: "Design Entrepreneurs Transforming India", year: "2022" },
        { publication: "The Economic Times", title: "Future of Workspace Design", year: "2022" },
        { publication: "Condé Nast Traveller", title: "Boutique Hotels with Best Interiors", year: "2021" }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-14">

                {/* Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000"
                        alt="Aakar Interiors Studio"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                    <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 border border-white/20">
                            Established 2010
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
                            The Aakar Story
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                            From a boutique studio to a design powerhouse, our journey is defined by passion, precision, and an unwavering commitment to excellence.
                        </p>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="bg-primary text-primary-content py-10">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                            {stats.map((stat, i) => (
                                <div key={i} className="hover:scale-110 transition-transform cursor-default">
                                    <div className="text-3xl md:text-4xl font-bold">{stat.number}</div>
                                    <div className="text-sm opacity-80">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">Design Beyond Aesthetics</h2>
                                <p className="text-lg opacity-70 mb-6 leading-relaxed">
                                    At Aakar Interiors, we believe that true design transcends visual appeal—it creates an emotional connection. We don&apos;t just fill rooms with furniture; we curate experiences that transform how you live, work, and feel.
                                </p>
                                <p className="text-lg opacity-70 mb-8 leading-relaxed">
                                    Over the last 15 years, we have honed a process that is as rigorous as it is creative. We delve deep into the psychology of space, understanding how light, texture, and volume influence mood and productivity.
                                </p>

                                <div className="space-y-4">
                                    {philosophyPoints.map((point, i) => (
                                        <AnimatedPhilosophyPoint
                                            key={i}
                                            title={point.title}
                                            desc={point.desc}
                                            index={i}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <AnimatedImage
                                    containerClassName="aspect-[3/4] rounded-2xl shadow-xl"
                                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=600"
                                    alt="Design Philosophy"
                                    fill
                                    className="object-cover"
                                />
                                <AnimatedImage
                                    containerClassName="aspect-[3/4] rounded-2xl shadow-xl mt-12"
                                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600"
                                    alt="Interior Details"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="py-24 bg-base-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">What Drives Us</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Our Core Values</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                The principles that guide every line we draw and every decision we make.
                            </p>
                        </div>
                        <AnimatedCoreValues />
                    </div>
                </section>

                {/* Journey Timeline - LIGHT VERSION */}
                <section className="py-24 bg-gradient-to-b from-base-100 to-base-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Journey</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">15 Years of Excellence</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                A timeline of milestones that have shaped Aakar into the design powerhouse it is today.
                            </p>
                        </div>

                        <div className="relative max-w-5xl mx-auto">
                            {/* Timeline Line */}
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2 hidden md:block" />

                            <div className="space-y-12">
                                {history.map((item, i) => (
                                    <AnimatedTimelineItem
                                        key={i}
                                        year={item.year}
                                        title={item.title}
                                        desc={item.desc}
                                        index={i}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Awards Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Recognition</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Awards & Accolades</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                Our work has been recognized by industry peers and prestigious design organizations across India and beyond.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {awards.map((award, i) => (
                                <AnimatedAwardCard
                                    key={i}
                                    year={award.year}
                                    title={award.title}
                                    org={award.org}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Press & Media */}
                <section className="py-24 bg-base-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">In the Media</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Press Features</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                Our work and insights have been featured in leading design publications and business media.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {pressFeatures.map((press, i) => (
                                <AnimatedPressCard
                                    key={i}
                                    publication={press.publication}
                                    title={press.title}
                                    year={press.year}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">What Our Clients Say</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {testimonials.map((testimonial, i) => (
                                <AnimatedTestimonialCard
                                    key={i}
                                    quote={testimonial.quote}
                                    author={testimonial.author}
                                    role={testimonial.role}
                                    image={testimonial.image}
                                    project={testimonial.project}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Approach */}
                <section className="py-24 bg-base-200">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <AnimatedImage
                                containerClassName="aspect-square rounded-2xl shadow-2xl"
                                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000"
                                alt="Our Approach"
                                fill
                                className="object-cover"
                            />
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Approach</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">How We Work</h2>
                                <p className="text-lg opacity-70 mb-8 leading-relaxed">
                                    Every project at Aakar begins with deep listening. We believe that the best designs emerge from truly understanding our clients—their aspirations, their daily rituals, their aesthetic sensibilities, and their practical needs.
                                </p>

                                <div className="space-y-6">
                                    <AnimatedApproachItem
                                        icon={<Users size={20} />}
                                        title="Collaborative Process"
                                        description="We work closely with you at every stage, ensuring the final design reflects your vision as much as our expertise."
                                        index={0}
                                    />
                                    <AnimatedApproachItem
                                        icon={<Palette size={20} />}
                                        title="Material Excellence"
                                        description="We source materials from trusted suppliers worldwide, ensuring quality, durability, and sustainability in every project."
                                        index={1}
                                    />
                                    <AnimatedApproachItem
                                        icon={<Sparkles size={20} />}
                                        title="Attention to Detail"
                                        description="From doorknobs to ceiling moldings, we obsess over every detail because we know these moments of craftsmanship are what elevate good design to great."
                                        index={2}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-content">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Ready to Transform Your Space?
                        </h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
                            Join hundreds of satisfied clients who have entrusted us with their dream projects. Let&apos;s create something extraordinary together.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-lg bg-white text-primary hover:bg-white/90 rounded-full px-8">
                                Schedule a Free Consultation <ArrowRight size={18} />
                            </Link>
                            <Link href="/portfolio" className="btn btn-lg btn-outline rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:border-white">
                                View Our Portfolio
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
