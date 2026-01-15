import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { projects } from "@/lib/data";

export default function PortfolioPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-12">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 space-y-4 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold">Our Masterpieces</h1>
                        <p className="opacity-70 max-w-2xl mx-auto text-lg leading-relaxed">
                            Explore a curated selection of our finest work. Each project tells a unique story of collaboration, innovation, and impeccable design.
                        </p>
                    </div>

                    <PortfolioGrid projects={projects} />
                </div>
            </main>
            <Footer />
        </>
    );
}
