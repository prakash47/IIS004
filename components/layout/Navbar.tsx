"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ConsultationModal } from "@/components/contact/ConsultationModal";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 w-full z-50 bg-base-100/80 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold font-serif tracking-tighter">
                        AAKAR
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === link.href ? "text-primary" : "text-base-content/70"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn btn-primary btn-sm rounded-full px-6"
                        >
                            Book Consultation
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-base-100 border-b border-white/5 overflow-hidden"
                        >
                            <nav className="flex flex-col p-4 gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-lg font-medium py-2 px-4 rounded-lg transition-colors",
                                            pathname === link.href ? "bg-primary/10 text-primary" : "hover:bg-base-200"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => { setIsOpen(false); setIsModalOpen(true); }}
                                    className="btn btn-primary w-full rounded-lg"
                                >
                                    Book Consultation
                                </button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
