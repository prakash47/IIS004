import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { projects } from "@/lib/data";
import { Metadata } from "next";

// SEO Metadata for Portfolio Page
export const metadata: Metadata = {
    title: "Portfolio - Our Interior Design Projects",
    description: "Explore Aakar Interiors' portfolio of 750+ completed interior design projects. From luxury penthouses to boutique hotels, see our award-winning residential, commercial, and hospitality designs across Mumbai and India.",
    keywords: [
        "interior design portfolio",
        "luxury home projects",
        "penthouse interior design",
        "villa interior design",
        "commercial office design",
        "hotel interior design",
        "residential projects Mumbai",
        "interior design gallery",
        "design showcase",
    ],
    alternates: {
        canonical: "https://aakarinteriors.com/portfolio",
    },
    openGraph: {
        title: "Portfolio | Aakar Interiors - 750+ Completed Projects",
        description: "Browse our collection of stunning interior design projects. Luxury residences, modern offices, and boutique hotels designed with excellence.",
        url: "https://aakarinteriors.com/portfolio",
        type: "website",
    },
};

// JSON-LD for Portfolio Collection
const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Aakar Interiors Portfolio",
    "description": "A curated collection of 750+ interior design projects by Aakar Interiors including luxury residences, commercial spaces, and hospitality projects.",
    "url": "https://aakarinteriors.com/portfolio",
    "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": "750+",
        "itemListElement": projects.slice(0, 6).map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "CreativeWork",
                "name": project.title,
                "description": project.description,
                "image": project.image,
            }
        }))
    }
};

export default function PortfolioPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(portfolioSchema),
                }}
            />
            <Navbar />
            <main className="min-h-screen pt-14 pb-12">
                <div className="container mx-auto px-4">
                    {/* SEO-optimized header with H1 */}
                    <header className="text-center mb-16 mt-12 space-y-4 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold">Our Masterpieces</h1>
                        <p className="opacity-70 max-w-2xl mx-auto text-lg leading-relaxed">
                            Explore a curated selection of our finest work. Each project tells a unique story of collaboration, innovation, and impeccable design.
                        </p>
                    </header>

                    <PortfolioGrid projects={projects} />
                </div>
            </main>
            <Footer />
        </>
    );
}
