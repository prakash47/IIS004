import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { AnimatedImage } from "@/components/ui/AnimatedImage";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-12">
                <div className="container mx-auto px-4">

                    {/* Header */}
                    <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold">Get In Touch</h1>
                        <p className="opacity-70 max-w-2xl mx-auto text-lg">
                            Ready to start your design journey? We&apos;d love to hear from you. Visit our studio or drop us a line.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24">

                        {/* Contact Info Side */}
                        <div className="space-y-12">
                            <div className="bg-base-200 p-8 rounded-2xl border border-white/5">
                                <h3 className="text-2xl font-bold font-serif mb-6">Studio Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Visit Us</h4>
                                            <p className="opacity-70 text-sm">
                                                Aakar Interiors, 4th Floor, Skyline Tower,<br />
                                                Bandra West, Mumbai - 400050
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Call Us</h4>
                                            <p className="opacity-70 text-sm">
                                                +91 98765 43210<br />
                                                +91 22 2600 1234
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Email Us</h4>
                                            <p className="opacity-70 text-sm">
                                                hello@aakarinteriors.com<br />
                                                careers@aakarinteriors.com
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Clock size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Business Hours</h4>
                                            <p className="opacity-70 text-sm">
                                                Mon - Sat: 10:00 AM - 7:00 PM<br />
                                                Sunday: Closed
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl group">
                                <AnimatedImage
                                    containerClassName="h-full w-full"
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                                    alt="Our Studio Location"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <a href="#" className="btn btn-sm btn-primary rounded-full gap-2">
                                        View on Google Maps <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-base-100 p-8 rounded-3xl shadow-2xl border border-base-300">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold font-serif mb-2">Send us a Message</h3>
                                <p className="opacity-60 text-sm">Fill out the form below and well get back to you within 24 hours.</p>
                            </div>
                            <ContactForm />
                        </div>

                    </div>

                </div>
            </main>
            <Footer />
        </>
    );
}
