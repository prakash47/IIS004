import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
    PenTool,
    HardHat,
    CheckCircle,
    ClipboardList,
    Lightbulb,
    Truck,
    Building2,
    Home as HomeIcon,
    ArrowRight,
    Layers,
    Gem,
} from "lucide-react";
import { AnimatedImage } from "@/components/ui/AnimatedImage";
import {
    AnimatedSpecializedServices,
    AnimatedProcessStep,
    AnimatedPricingCard,
    AnimatedWhyChooseUs,
    AnimatedTestimonials
} from "@/components/services/AnimatedSections";
import Link from "next/link";
import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Interior Design Services - Residential, Commercial & Hospitality",
    description: "Comprehensive interior design services in Mumbai. From space planning to turnkey execution, we offer residential, commercial, hospitality & office interior design. Free consultation available. Get 5-year warranty on all projects.",
    keywords: [
        "interior design services",
        "residential interior design",
        "commercial interior design",
        "hospitality interior design",
        "office interior design Mumbai",
        "space planning services",
        "turnkey interior solutions",
        "luxury interior services",
        "interior consultation Mumbai",
        "interior renovation services",
    ],
    alternates: {
        canonical: "https://aakarinteriors.com/services",
    },
    openGraph: {
        title: "Interior Design Services | Aakar Interiors Mumbai",
        description: "Full-service interior design from concept to completion. Residential, commercial & hospitality projects with 5-year warranty.",
        url: "https://aakarinteriors.com/services",
        type: "website",
    },
};

export default function ServicesPage() {
    const mainServices = [
        {
            icon: <HomeIcon size={40} />,
            title: "Residential Design",
            tagline: "Crafting Dream Homes",
            description: "Transform your house into a sanctuary that reflects your personality, supports your lifestyle, and brings joy to everyday moments. Our residential design service covers every room, every detail, every dream.",
            features: [
                "Complete Home Interior Design",
                "Kitchen & Bath Renovations",
                "Custom Furniture Design",
                "Smart Home Integration",
                "Lighting Design",
                "Color Consultation"
            ],
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
            stats: { projects: "500+", satisfaction: "98%" }
        },
        {
            icon: <Building2 size={40} />,
            title: "Commercial & Office",
            tagline: "Spaces That Mean Business",
            description: "Create workspaces that inspire productivity, foster collaboration, and communicate your brand values. From startups to corporate headquarters, we design offices where work feels different.",
            features: [
                "Corporate Office Fit-outs",
                "Co-Working Space Design",
                "Executive Cabin Interiors",
                "Conference Room Design",
                "Acoustic Solutions",
                "Biophilic Design"
            ],
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
            stats: { projects: "150+", satisfaction: "99%" }
        },
        {
            icon: <Gem size={40} />,
            title: "Luxury & Hospitality",
            tagline: "Redefining Opulence",
            description: "Design experiences that captivate guests and create lasting memories. From boutique hotels to fine dining restaurants, we craft environments that tell stories and evoke emotions.",
            features: [
                "Hotel & Resort Interiors",
                "Restaurant & Bar Design",
                "Spa & Wellness Centers",
                "Retail Showrooms",
                "Branded Environments",
                "Wayfinding Systems"
            ],
            image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
            stats: { projects: "75+", satisfaction: "100%" }
        }
    ];



    const process = [
        {
            num: "01",
            title: "Discovery",
            desc: "We begin with a deep dive into your lifestyle, preferences, aspirations, and budget. Through detailed questionnaires, site visits, and inspiration sessions, we understand not just what you want, but why you want it.",
            icon: <ClipboardList size={24} />,
            duration: "1-2 weeks",
            deliverables: ["Detailed Brief Document", "Site Analysis Report", "Budget Framework"]
        },
        {
            num: "02",
            title: "Concept Design",
            desc: "Our designers brainstorm to create multiple concept directions. We present Mood Boards, Concept Sketches, and preliminary layouts that capture different interpretations of your vision.",
            icon: <Lightbulb size={24} />,
            duration: "2-3 weeks",
            deliverables: ["Mood Boards", "Concept Sketches", "Material Palettes"]
        },
        {
            num: "03",
            title: "Design Development",
            desc: "Once you've chosen a direction, we dive deep. We produce precise 2D floor plans, 3D visualizations, detailed elevations, material specifications, and comprehensive lighting plans.",
            icon: <PenTool size={24} />,
            duration: "3-4 weeks",
            deliverables: ["Detailed Drawings", "3D Renders", "Material Schedules"]
        },
        {
            num: "04",
            title: "Documentation",
            desc: "We prepare exhaustive working drawings, BOQs (Bills of Quantities), and specifications that ensure precise execution. Every detail is documented for clarity with contractors.",
            icon: <Layers size={24} />,
            duration: "2-3 weeks",
            deliverables: ["Working Drawings", "BOQ", "Vendor Specifications"]
        },
        {
            num: "05",
            title: "Execution",
            desc: "Our skilled craftsmen and trusted vendors bring the design to life under strict supervision. We manage every aspect—civil, carpentry, MEP, painting, and installations.",
            icon: <HardHat size={24} />,
            duration: "8-16 weeks",
            deliverables: ["Weekly Progress Reports", "Quality Inspections", "Change Management"]
        },
        {
            num: "06",
            title: "Reveal & Support",
            desc: "The final styling, walkthrough, and handover. We don't just deliver keys—we ensure you're comfortable with every system and provide ongoing support for years to come.",
            icon: <Truck size={24} />,
            duration: "1 week",
            deliverables: ["Final Styling", "User Manuals", "5-Year Warranty"]
        },
    ];



    const packages = [
        {
            name: "Essential",
            price: "₹1,200",
            unit: "per sq.ft.",
            description: "Perfect for budget-conscious projects without compromising on design quality.",
            features: [
                "Space Planning & Layout",
                "2D Drawings",
                "Basic 3D Visualization",
                "Material Specification",
                "Project Coordination",
                "Standard Finishes"
            ],
            highlight: false
        },
        {
            name: "Premium",
            price: "₹2,400",
            unit: "per sq.ft.",
            description: "Our most popular package balancing quality, customization, and value.",
            features: [
                "Everything in Essential",
                "Detailed 3D Renders",
                "Custom Furniture Design",
                "Lighting Design",
                "On-Site Supervision",
                "Premium Finishes",
                "Smart Home Basics"
            ],
            highlight: true
        },
        {
            name: "Luxury",
            price: "₹4,500",
            unit: "per sq.ft.",
            description: "Bespoke excellence for discerning clients who accept nothing but the best.",
            features: [
                "Everything in Premium",
                "Photorealistic Visualization",
                "Virtual Reality Walkthrough",
                "Custom Art Curation",
                "Full Smart Home Integration",
                "Imported Materials",
                "White Glove Service",
                "Post-Completion Support"
            ],
            highlight: false
        }
    ];



    const faqs = [
        {
            question: "How long does a typical project take?",
            answer: "Timeline varies based on scope. A single room design takes 4-6 weeks, a full apartment 3-4 months, and a villa or commercial space 6-12 months. We provide detailed timelines during the discovery phase."
        },
        {
            question: "Do you work with clients outside major cities?",
            answer: "Absolutely! We have completed projects across India and internationally. For remote projects, we use virtual consultations, detailed documentation, and partner with trusted local contractors."
        },
        {
            question: "Can I be involved in the design process?",
            answer: "We encourage it! Your input is invaluable. We have structured approval points at each phase, and you can be as involved as you'd like—from weekly check-ins to hands-on material shopping."
        },
        {
            question: "What is included in your pricing?",
            answer: "Our fees cover design consultation, concept development, detailed drawings, 3D visualization, material specification, vendor coordination, and project management. Material and execution costs are separate and quoted via BOQ."
        },
        {
            question: "Do you offer payment plans?",
            answer: "Yes! We structure payments in milestones aligned with project phases—typically 30% at signing, 30% at design approval, 30% at execution midpoint, and 10% at handover."
        },
        {
            question: "What happens if I want to make changes mid-project?",
            answer: "Changes are a natural part of design. Minor adjustments are accommodated seamlessly. Significant changes are assessed for cost and timeline impact, and we provide revised proposals for your approval."
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-14">

                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000"
                        alt="Interior Design Services"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                    <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                        <span className="inline-block px-4 py-2 bg-white/10 rounded-full text-white text-sm font-medium mb-6 border border-white/20">
                            Comprehensive Design Solutions
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
                            Transform Your Space.<br />Elevate Your Life.
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
                            From vision to reality, we craft interiors that inspire, comfort, and delight. Experience the Aakar difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-primary btn-lg rounded-full px-8">
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                            <Link href="/portfolio" className="btn btn-outline btn-lg rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Stats Bar */}
                <section className="bg-primary text-primary-content py-8">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                            <div>
                                <div className="text-3xl md:text-4xl font-bold">750+</div>
                                <div className="text-sm opacity-80">Projects Completed</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold">15+</div>
                                <div className="text-sm opacity-80">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold">98%</div>
                                <div className="text-sm opacity-80">Client Satisfaction</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-bold">40+</div>
                                <div className="text-sm opacity-80">Design Awards</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Main Services Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">What We Do</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Our Core Services</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                Three pillars of design excellence, each backed by years of expertise and hundreds of successful projects.
                            </p>
                        </div>

                        <div className="space-y-24">
                            {mainServices.map((service, i) => (
                                <div key={i} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                                        <div className="text-primary mb-4">{service.icon}</div>
                                        <span className="text-sm text-primary font-medium">{service.tagline}</span>
                                        <h3 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">{service.title}</h3>
                                        <p className="text-lg opacity-70 mb-6">{service.description}</p>

                                        <div className="grid grid-cols-2 gap-3 mb-8">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2">
                                                    <CheckCircle size={16} className="text-primary shrink-0" />
                                                    <span className="text-sm">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex gap-8 mb-6">
                                            <div>
                                                <div className="text-2xl font-bold text-primary">{service.stats.projects}</div>
                                                <div className="text-xs opacity-60 uppercase">Projects</div>
                                            </div>
                                            <div>
                                                <div className="text-2xl font-bold text-primary">{service.stats.satisfaction}</div>
                                                <div className="text-xs opacity-60 uppercase">Satisfaction</div>
                                            </div>
                                        </div>

                                        <Link href="/contact" className="btn btn-primary rounded-full px-6">
                                            Discuss Your Project <ArrowRight size={16} />
                                        </Link>
                                    </div>
                                    <div className={`relative ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                                        <AnimatedImage
                                            containerClassName="aspect-[4/3] rounded-2xl shadow-2xl"
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Specialized Services Grid */}
                <section className="py-24 bg-base-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Specialized Expertise</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Additional Services</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                Beyond core design, we offer specialized services to address every aspect of your project.
                            </p>
                        </div>

                        <AnimatedSpecializedServices />
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Our Methodology</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">From Concept to Reality</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                A proven six-phase process refined over 15 years and 750+ projects. No surprises, just results.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {process.map((step, i) => (
                                <AnimatedProcessStep
                                    key={i}
                                    num={step.num}
                                    title={step.title}
                                    desc={step.desc}
                                    icon={step.icon}
                                    duration={step.duration}
                                    deliverables={step.deliverables}
                                    index={i}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Packages */}
                <section className="py-24 bg-neutral text-neutral-content">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Investment</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Transparent Pricing</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                Choose the package that fits your needs. All packages include our signature design quality.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {packages.map((pkg, i) => (
                                <AnimatedPricingCard
                                    key={i}
                                    name={pkg.name}
                                    price={pkg.price}
                                    unit={pkg.unit}
                                    description={pkg.description}
                                    features={pkg.features}
                                    highlight={pkg.highlight}
                                    index={i}
                                />
                            ))}
                        </div>

                        <p className="text-center text-sm opacity-60 mt-8">
                            * Prices are indicative and vary based on project scope, materials, and location. Custom quotes provided after consultation.
                        </p>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">The Aakar Advantage</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Why Clients Choose Us</h2>
                            <p className="text-lg opacity-70 max-w-2xl mx-auto">
                                We know you have choices. Here&apos;s what sets Aakar apart from the rest.
                            </p>
                        </div>

                        <AnimatedWhyChooseUs />
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-24 bg-base-200">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Testimonials</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">What Clients Say</h2>
                        </div>

                        <AnimatedTestimonials />
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm">FAQ</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">Frequently Asked Questions</h2>
                                <p className="text-lg opacity-70 mb-8">
                                    Got questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, reach out—we&apos;re always happy to help.
                                </p>
                                <AnimatedImage
                                    containerClassName="aspect-[4/3] rounded-2xl shadow-xl"
                                    src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800"
                                    alt="Interior Design Consultation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div key={i} className="collapse collapse-plus bg-base-200 rounded-xl">
                                        <input type="radio" name="faq-accordion" defaultChecked={i === 0} />
                                        <div className="collapse-title text-lg font-medium">{faq.question}</div>
                                        <div className="collapse-content">
                                            <p className="opacity-70">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
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
                            Book a free consultation and let&apos;s discuss how we can bring your vision to life. No obligations, just possibilities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-lg bg-white text-primary hover:bg-white/90 rounded-full px-8">
                                Book Free Consultation
                            </Link>
                            <Link href="/portfolio" className="btn btn-lg btn-outline rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:border-white">
                                Explore Our Portfolio
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
