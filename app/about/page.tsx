import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedImage } from "@/components/ui/AnimatedImage";
import { Award, Briefcase, Users, Milestone, Globe2, Leaf, HeartHandshake } from "lucide-react";

export default function AboutPage() {
    const history = [
        { year: "2010", title: "The Inception", desc: "Aakar Interiors was established in a modest 300 sq. ft. studio in South Mumbai, fueled by a singular vision: to democratize luxury design." },
        { year: "2015", title: "National Recognition", desc: "Our 'Skyline Villa' project earned the prestigious 'Best Residential Design' award, putting us on the national map." },
        { year: "2019", title: "Commercial Expansion", desc: "We diversified into the commercial sector, designing cutting-edge workspaces for tech giants in Bangalore and Hyderabad." },
        { year: "2024", title: "Global Footprint", desc: "Marking a new era, we completed our first international penthouse project in Dubai, setting the stage for global operations." },
    ];

    const values = [
        { icon: <Leaf size={24} />, title: "Sustainable Living", desc: "We prioritize eco-friendly materials and energy-efficient designs to reduce our carbon footprint without compromising on luxury." },
        { icon: <Globe2 size={24} />, title: "Global Standards", desc: "Our design philosophy adheres to international standards of ergonomics, safety, and aesthetics, bringing world-class interiors to your doorstep." },
        { icon: <HeartHandshake size={24} />, title: "Client-Centricity", desc: "Your home is a reflection of you. We listen, adapt, and co-create spaces that truly resonate with your personal narrative." }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-12">
                <div className="container mx-auto px-4">

                    {/* Header */}
                    <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold">The Aakar Story</h1>
                        <p className="opacity-70 max-w-2xl mx-auto text-lg leading-relaxed">
                            From a boutique studio to a design powerhouse, our journey is defined by passion, precision, and an unwavering commitment to excellence.
                        </p>
                    </div>

                    {/* Philosophy Section */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <AnimatedImage
                            containerClassName="aspect-square rounded-2xl shadow-2xl"
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                            alt="Our Studio"
                            fill
                            className="object-cover"
                        />
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-serif font-bold mb-4">Design Beyond Aesthetics</h2>
                                <p className="opacity-80 leading-relaxed text-lg">
                                    At Aakar Interiors, we believe that true design transcends visual appeal—it creates an emotional connection. We don&apos;t just fill rooms with furniture; we curate experiences. Our approach blends architectural rigour with artistic flair to solve complex spatial problems.
                                </p>
                            </div>
                            <div>
                                <p className="opacity-80 leading-relaxed text-lg">
                                    Over the last decade, we have honed a process that is as rigorous as it is creative. We delve deep into the psychology of space, understanding how light, texture, and volume influence mood and productivity.
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-4 pt-4">
                                <div className="bg-base-200 p-4 rounded-xl text-center hover:bg-base-300 transition-colors">
                                    <Briefcase className="mx-auto mb-2 text-primary" />
                                    <span className="block text-2xl font-bold">200+</span>
                                    <span className="text-xs uppercase opacity-70">Projects</span>
                                </div>
                                <div className="bg-base-200 p-4 rounded-xl text-center hover:bg-base-300 transition-colors">
                                    <Users className="mx-auto mb-2 text-primary" />
                                    <span className="block text-2xl font-bold">50+</span>
                                    <span className="text-xs uppercase opacity-70">Experts</span>
                                </div>
                                <div className="bg-base-200 p-4 rounded-xl text-center hover:bg-base-300 transition-colors">
                                    <Award className="mx-auto mb-2 text-primary" />
                                    <span className="block text-2xl font-bold">15+</span>
                                    <span className="text-xs uppercase opacity-70">Awards</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-4">Our Core Values</h2>
                            <p className="opacity-70">The principles that guide every line we draw.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((v, i) => (
                                <div key={i} className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300">
                                    <div className="card-body items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                                            {v.icon}
                                        </div>
                                        <h3 className="card-title font-serif">{v.title}</h3>
                                        <p className="opacity-70 text-sm leading-relaxed">{v.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* New History Timeline Section */}
                    <div className="mb-24">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-4">Our Journey</h2>
                            <p className="opacity-70">A timeline of our growth and excellence.</p>
                        </div>

                        <div className="relative max-w-4xl mx-auto">
                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-base-300 -translate-x-1/2 hidden md:block" />

                            <div className="space-y-12">
                                {history.map((item, i) => (
                                    <div key={i} className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                        <div className="flex-1 text-center md:text-right">
                                            {i % 2 === 0 && (
                                                <>
                                                    <span className="text-5xl font-bold text-primary font-serif block mb-2">{item.year}</span>
                                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                                    <p className="opacity-70 text-sm mt-2">{item.desc}</p>
                                                </>
                                            )}
                                            {i % 2 !== 0 && (
                                                <div className="hidden md:block">
                                                    {/* Spacer for reverse layout */}
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative z-10 w-12 h-12 bg-primary text-primary-content rounded-full flex items-center justify-center shrink-0 shadow-xl border-4 border-base-100">
                                            <Milestone size={20} />
                                        </div>

                                        <div className="flex-1 text-center md:text-left">
                                            {i % 2 !== 0 && (
                                                <>
                                                    <span className="text-5xl font-bold text-primary font-serif block mb-2">{item.year}</span>
                                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                                    <p className="opacity-70 text-sm mt-2">{item.desc}</p>
                                                </>
                                            )}
                                            {i % 2 === 0 && (
                                                <div className="hidden md:block">
                                                    {/* Spacer for reverse layout */}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-neutral text-neutral-content rounded-2xl p-12 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Space?</h2>
                            <p className="opacity-70 max-w-xl mx-auto mb-8">Join hundreds of satisfied clients who have entrusted us with their dream projects. Let&apos;s create something extraordinary together.</p>
                            <a href="/contact" className="btn btn-primary btn-lg rounded-full px-8">Schedule a Free Consultation</a>
                        </div>
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
