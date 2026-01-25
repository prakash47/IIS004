import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-neutral text-neutral-content pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="block">
                            <Image
                                src="/logo-new.png"
                                alt="Aakar Logo"
                                width={60}
                                height={60}
                                className="w-[60px] h-[60px] object-contain"
                            />
                        </Link>
                        <p className="text-sm opacity-70">
                            Transforming spaces into living works of art. Premium interior design for residential and commercial properties.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">Explore</h4>
                        <ul className="space-y-2 text-sm opacity-70">
                            <li><Link href="/about" className="hover:text-primary hover:opacity-100 transition">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-primary hover:opacity-100 transition">Services</Link></li>
                            <li><Link href="/portfolio" className="hover:text-primary hover:opacity-100 transition">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-primary hover:opacity-100 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">Legal</h4>
                        <ul className="space-y-2 text-sm opacity-70">
                            <li><Link href="/privacy" className="hover:text-primary hover:opacity-100 transition">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-primary hover:opacity-100 transition">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-widest text-xs">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-primary transition"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primary transition"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-xs opacity-50">
                    © {new Date().getFullYear()} Aakar Interiors. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
