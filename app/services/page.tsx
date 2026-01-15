import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PenTool, HardHat, CheckCircle, ClipboardList, Lightbulb, Truck, Building2, Home as HomeIcon } from "lucide-react";
import { AnimatedImage } from "@/components/ui/AnimatedImage";

export default function ServicesPage() {
    const services = [
        {
            icon: <HomeIcon size={40} />,
            title: "Residential Sanctuaries",
            description: "We craft personalized homes, not just houses. From opulent villas to chic urban apartments, our residential designs focus on comfort, flow, and personal expression.",
            features: ["Bespoke Furniture Design", "Smart Home Integration", "Kitchen & Bath Renovation"]
        },
        {
            icon: <Building2 size={40} />,
            title: "Commercial & Retail",
            description: "Elevate your business with workspaces that inspire productivity and retail environments that drive sales. We merge brand identity with spatial utility.",
            features: ["Corporate Office Fit-outs", "Retail Visual Merchandising", "Hospitality Interiors"]
        },
        {
            icon: <HardHat size={40} />,
            title: "End-to-End Execution",
            description: "Leave the heavy lifting to us. Our turnkey execution service covers everything: civil work, carpentry, MEP (Mechanical, Electrical, Plumbing), and final styling.",
            features: ["Project Management", "Vendor Coordination", "Quality Assurance"]
        }
    ];

    const process = [
        { num: "01", title: "Discovery", desc: "We begin with a deep dive into your lifestyle, preferences, and budget. It&apos;s about listening to what you need.", icon: <ClipboardList /> },
        { num: "02", title: "Ideation", desc: "Our designers brainstorm to create Mood Boards and Concept Sketches that align with your vision.", icon: <Lightbulb /> },
        { num: "03", title: "Detailing", desc: "We produce precise 2D/3D drawings, material palettes, and lighting plans for approval.", icon: <PenTool /> },
        { num: "04", title: "Build", desc: "Our skilled craftsmen bring the design to life under strict supervision to ensure zero defects.", icon: <HardHat /> },
        { num: "05", title: "Reveal", desc: "The final reveal. We style the space and hand over the keys to your new reality.", icon: <Truck /> },
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-12">
                <div className="container mx-auto px-4">

                    {/* Hero */}
                    <div className="text-center mb-16 space-y-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">Comprehensive Design Services</h1>
                        <p className="opacity-70 max-w-2xl mx-auto text-lg">
                            Tailored solutions for every scale and style. Whether it&apos;s a single room revamp or a complete building overhaul, we have the expertise.
                        </p>
                    </div>

                    {/* Main Services */}
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {services.map((service, i) => (
                            <div key={i} className="bg-base-200 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                                <div className="mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-serif">{service.title}</h3>
                                <p className="opacity-70 mb-6 min-h-[80px] leading-relaxed">{service.description}</p>
                                <div className="divider"></div>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm">
                                            <CheckCircle size={16} className="text-primary" />
                                            <span className="opacity-80 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Process Section */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Our Methodology</h2>
                            <h3 className="text-3xl font-serif font-bold">From Concept to Reality</h3>
                        </div>

                        <div className="relative">
                            {/* Connection Line */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2 z-0"></div>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
                                {process.map((step, i) => (
                                    <div key={i} className="text-center bg-base-100 p-6 rounded-xl border border-base-200 shadow-sm md:border-none md:shadow-none md:bg-transparent">
                                        <div className="w-16 h-16 bg-base-100 border-4 border-base-200 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-xl font-bold shadow-lg">
                                            {step.num}
                                        </div>
                                        <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                        <p className="text-sm opacity-70 leading-snug">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* FAQ / Info */}
                    <div className="grid md:grid-cols-2 gap-12 items-center bg-base-200 rounded-3xl p-8 md:p-12">
                        <div className="space-y-6">
                            <h3 className="text-3xl font-serif font-bold">Why Aakar Stands Out</h3>
                            <p className="opacity-70">We know you have choices. Here&apos;s why Aakar is the preferred partner for discerning clients.</p>

                            <div className="join join-vertical w-full">
                                <div className="collapse collapse-plus join-item border border-base-300 bg-base-100">
                                    <input type="radio" name="my-accordion-4" defaultChecked />
                                    <div className="collapse-title text-xl font-medium">Transparent Costing, No Surprises</div>
                                    <div className="collapse-content">
                                        <p className="opacity-70 text-sm">We provide a line-item Bill of Quantities (BOQ) before we start. You know exactly where every rupee goes.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus join-item border border-base-300 bg-base-100">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">Tech-Enabled Project Tracking</div>
                                    <div className="collapse-content">
                                        <p className="opacity-70 text-sm">Stay updated with weekly progress reports and site photos via our client portal.</p>
                                    </div>
                                </div>
                                <div className="collapse collapse-plus join-item border border-base-300 bg-base-100">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title text-xl font-medium">5-Year Service Warranty</div>
                                    <div className="collapse-content">
                                        <p className="opacity-70 text-sm">We stand by our quality. All our woodwork and finishes come with a comprehensive 5-year warranty.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AnimatedImage
                            containerClassName="h-full min-h-[400px] rounded-2xl shadow-xl"
                            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800"
                            alt="Quality Interior"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
