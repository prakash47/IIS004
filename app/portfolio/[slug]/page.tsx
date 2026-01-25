import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/lib/data";
import { getProjectDetails } from "@/lib/projectDetails";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    MapPin,
    Ruler,
    Clock,
    Users,
    Award,
    CheckCircle2,
    Palette,
    Lightbulb,
    Target,
    Sparkles,
    Quote,
    ArrowRight,
    Home,
    Building2
} from "lucide-react";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Aakar Interiors`,
        description: project.description,
    };
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Helper function to get related projects
function getRelatedProjects(currentSlug: string, category: string) {
    return projects
        .filter(p => p.slug !== currentSlug && p.category === category)
        .slice(0, 3);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const details = getProjectDetails(slug);
    const relatedProjects = getRelatedProjects(slug, project.category);

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-14">
                {/* Hero Banner */}
                <div className="relative h-[70vh] w-full">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                        <div className="space-y-2 mb-6">
                            <span className="uppercase tracking-widest text-sm bg-primary/20 px-4 py-2 rounded-full border border-primary/30 inline-flex items-center gap-2">
                                {project.category === "residential" ? <Home size={14} /> : <Building2 size={14} />}
                                {project.category}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 max-w-4xl">{project.title}</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl">{project.description}</p>
                    </div>
                </div>

                {/* Quick Stats Bar */}
                <div className="bg-base-200 py-8 border-b border-base-300">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="flex flex-col items-center gap-2">
                                <MapPin className="text-primary" size={24} />
                                <span className="font-bold">{project.location || "Mumbai, India"}</span>
                                <span className="text-xs opacity-60 uppercase tracking-wide">Location</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Ruler className="text-primary" size={24} />
                                <span className="font-bold">{details.area}</span>
                                <span className="text-xs opacity-60 uppercase tracking-wide">Project Area</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Clock className="text-primary" size={24} />
                                <span className="font-bold">{details.duration}</span>
                                <span className="text-xs opacity-60 uppercase tracking-wide">Duration</span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <Users className="text-primary" size={24} />
                                <span className="font-bold">{details.team}</span>
                                <span className="text-xs opacity-60 uppercase tracking-wide">Team Size</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-5xl mx-auto">

                        {/* Back Link */}
                        <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-primary transition-colors mb-12">
                            <ArrowLeft size={16} /> Back to Portfolio
                        </Link>

                        {/* Project Overview */}
                        <section className="mb-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Sparkles size={24} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold">Project Overview</h2>
                            </div>
                            <p className="text-lg opacity-80 leading-relaxed mb-6">
                                {project.description} This project represents our commitment to creating spaces that transcend mere aesthetics to become an integral part of our clients&apos; lives. From the initial concept to the final walkthrough, every decision was made with purpose and precision.
                            </p>
                            <p className="text-lg opacity-80 leading-relaxed">
                                The completed space stands as a testament to what&apos;s possible when vision, expertise, and craftsmanship converge. Every room tells a story, every corner invites discovery, and every detail rewards closer inspection.
                            </p>
                        </section>

                        {/* Project Highlights */}
                        <section className="mb-20 bg-base-200 rounded-2xl p-8 md:p-12">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Award size={24} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold">Project Highlights</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {details.highlights.map((highlight, i) => (
                                    <div key={i} className="flex items-start gap-4 bg-base-100 p-5 rounded-xl">
                                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                        <span className="text-sm">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* The Challenge */}
                        <section className="mb-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Target size={24} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold">The Challenge</h2>
                            </div>
                            <p className="text-lg opacity-80 leading-relaxed">
                                {details.challenge}
                            </p>
                        </section>

                        {/* Our Approach */}
                        <section className="mb-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Lightbulb size={24} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold">Our Approach</h2>
                            </div>
                            <p className="text-lg opacity-80 leading-relaxed">
                                {details.approach}
                            </p>
                        </section>

                        {/* Design Process */}
                        <section className="mb-20 bg-neutral text-neutral-content rounded-2xl p-8 md:p-12">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-serif font-bold mb-4">Our Design Process</h2>
                                <p className="opacity-70 max-w-2xl mx-auto">From initial concept to final execution, here&apos;s how we brought this vision to life.</p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-8">
                                {details.process.map((step, i) => (
                                    <div key={i} className="relative">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold shrink-0">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-2">{step.title}</h4>
                                                <p className="text-sm opacity-70">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Gallery Section */}
                        <section className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Palette size={24} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold">Project Gallery</h2>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {details.galleryImages.map((img, i) => (
                                    <div key={i} className={`relative rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
                                        <Image
                                            src={img}
                                            alt={`${project.title} - Image ${i + 1}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Design Philosophy */}
                        <section className="mb-20">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Sparkles size={24} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold">Design Philosophy</h2>
                            </div>
                            <p className="text-lg opacity-80 leading-relaxed">
                                {details.philosophy}
                            </p>
                        </section>

                        {/* Design Elements */}
                        <section className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <h2 className="text-3xl font-serif font-bold">Key Design Elements</h2>
                            </div>
                            <div className="grid gap-4">
                                {details.designElements.map((element, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 bg-base-200 rounded-xl hover:bg-base-300 transition-colors">
                                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                                        <span>{element}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Material Specifications */}
                        <section className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <h2 className="text-3xl font-serif font-bold">Material Specifications</h2>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                {details.materials.map((material, i) => (
                                    <div key={i} className="border border-base-300 rounded-xl p-6 hover:border-primary/30 transition-colors">
                                        <h4 className="font-bold text-lg mb-2 text-primary">{material.name}</h4>
                                        <p className="text-sm opacity-70">{material.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Client Testimonial */}
                        <section className="mb-20 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 md:p-12 relative overflow-hidden">
                            <Quote className="absolute top-4 left-4 text-primary/10" size={80} />
                            <div className="relative z-10">
                                <p className="text-xl md:text-2xl italic leading-relaxed mb-8 opacity-90">
                                    &quot;{details.testimonial.text}&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                        <Users className="text-primary" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-bold">{details.testimonial.author}</div>
                                        <div className="text-sm opacity-60">{details.testimonial.role}</div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Call to Action */}
                        <section className="mb-20 bg-neutral text-neutral-content rounded-2xl p-8 md:p-12 text-center">
                            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">Inspired by This Project?</h3>
                            <p className="opacity-70 max-w-2xl mx-auto mb-8">
                                Let us help you create a space that tells your story. Our team is ready to bring your vision to life with the same dedication and craftsmanship.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="btn btn-primary btn-lg rounded-full px-8">
                                    Start Your Project
                                    <ArrowRight size={18} />
                                </Link>
                                <Link href="/portfolio" className="btn btn-outline btn-lg rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                                    View More Projects
                                </Link>
                            </div>
                        </section>

                        {/* Related Projects */}
                        {relatedProjects.length > 0 && (
                            <section>
                                <div className="flex items-center justify-between mb-8">
                                    <h2 className="text-3xl font-serif font-bold">Related Projects</h2>
                                    <Link href="/portfolio" className="text-sm text-primary hover:underline flex items-center gap-1">
                                        View All <ArrowRight size={14} />
                                    </Link>
                                </div>
                                <div className="grid md:grid-cols-3 gap-6">
                                    {relatedProjects.map((p) => (
                                        <Link key={p.id} href={`/portfolio/${p.slug}`} className="group">
                                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                                                <Image
                                                    src={p.image}
                                                    alt={p.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <h4 className="font-bold group-hover:text-primary transition-colors">{p.title}</h4>
                                            <p className="text-sm opacity-60">{p.location}</p>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        )}

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
