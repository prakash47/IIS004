"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { projects } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, Users, Clock, Quote } from "lucide-react";
import { ConsultationModal } from "@/components/contact/ConsultationModal";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Using a very reliable Unsplash ID for Architecture */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-8">
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight animate-fade-in-up drop-shadow-2xl">
            Designing Dreams, <br />
            <span className="text-primary italic">Crafting Reality</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90 font-light leading-relaxed drop-shadow-md">
            We are Aakar Interiors, an award-winning studio creating bespoke residential and commercial spaces.
            We blend aesthetics with functionality to deliver environments that inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/portfolio" className="btn btn-primary btn-lg rounded-full px-8 text-lg border-2 border-primary hover:bg-transparent hover:text-white">
              View Our Work
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-outline btn-lg text-white rounded-full px-8 text-lg hover:bg-white hover:text-black border-2"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-base-300 border-b border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <h4 className="text-4xl font-bold font-serif text-primary">500+</h4>
            <p className="text-sm uppercase tracking-widest opacity-70">Happy Clients</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-4xl font-bold font-serif text-primary">15+</h4>
            <p className="text-sm uppercase tracking-widest opacity-70">Years Experience</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-4xl font-bold font-serif text-primary">50+</h4>
            <p className="text-sm uppercase tracking-widest opacity-70">Awards Won</p>
          </div>
          <div className="space-y-1">
            <h4 className="text-4xl font-bold font-serif text-primary">100%</h4>
            <p className="text-sm uppercase tracking-widest opacity-70">Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Portfolio</h2>
              <h3 className="text-4xl font-serif font-bold">Selected Works</h3>
            </div>
            <Link href="/portfolio" className="hidden md:flex items-center gap-2 group hover:text-primary transition-colors">
              View All Projects <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <PortfolioGrid projects={projects.slice(0, 3)} />

          <div className="mt-12 text-center md:hidden">
            <Link href="/portfolio" className="btn btn-outline rounded-full">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After Feature */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Transformations</h2>
              <h3 className="text-4xl font-serif font-bold">See The Difference</h3>
              <p className="opacity-70 text-lg leading-relaxed">
                We believe in the power of transformation. Our strategic approach ensures that every inch of space is utilized effectively while maintaining a breathtaking aesthetic. From cramped apartments to spacious villas, we unlock the hidden potential of your property.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  { text: "Smart Space Optimization", sub: "Maximizing utility in every corner." },
                  { text: "Lighting & Ambience", sub: "Creating the perfect mood for every room." },
                  { text: "Premium Material Selection", sub: "Sourcing the finest global materials." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 text-primary"><CheckCircle2 /></div>
                    <div>
                      <h5 className="font-bold">{item.text}</h5>
                      <p className="text-sm opacity-60">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 relative group bg-black">
              <div className="absolute inset-0 z-10 pointer-events-none ring-1 ring-inset ring-white/10 rounded-2xl"></div>
              <div className="aspect-video relative">
                {/* Using specific Unsplash IDs for Living Room Renovation that are reliable */}
                <BeforeAfterSlider
                  beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1000"
                  afterImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1000"
                  alt="Living Room Transformation"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (New Section) */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Testimonials</h2>
            <h3 className="text-4xl font-serif font-bold">What Our Clients Say</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Anjali Gupta", role: "Villa Owner", text: "Aakar Interiors completely transformed our home. The attention to detail and ability to capture our personality in the design was remarkable." },
              { name: "Rajesh Malhotra", role: "CEO, TechSolutions", text: "We hired them for our new office space in Bangalore. They created a vibrant, productive environment that our employees love. Highly recommended!" },
              { name: "Sarah Williams", role: "Expat", text: "Finding a reliable designer in a new city can be hard, but Aakar made it seamless. They handled everything from sourcing to installation." }
            ].map((t, i) => (
              <div key={i} className="bg-base-100 p-8 rounded-xl shadow-lg relative">
                <Quote className="absolute top-8 right-8 text-primary/20" size={40} />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-neutral rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-xs opacity-60 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <p className="opacity-80 leading-relaxed italic">&quot;{t.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-neutral text-neutral-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-2">Services</h2>
          <h3 className="text-4xl font-serif font-bold mb-16">What We Offer</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Design",
                desc: "Full-service interior design for luxury homes, villas, and apartments. We handle everything from concept to curtains.",
                icon: <Users size={32} />
              },
              {
                title: "Commercial Spaces",
                desc: "Innovative office and retail designs that enhance brand identity and productivity. Create a workspace your employees love.",
                icon: <Clock size={32} />
              },
              {
                title: "Turnkey Execution",
                desc: "End-to-end project management from demolition to finishing. We ensure timely delivery within your budget.",
                icon: <Star size={32} />
              }
            ].map((service, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-colors cursor-default text-left relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
                <p className="opacity-70 leading-relaxed mb-6">{service.desc}</p>
                <Link href="/services" className="text-primary text-sm font-bold uppercase tracking-wider hover:underline">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </>
  );
}
