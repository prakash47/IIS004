"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import {
    Calendar,
    Clock,
    User,
    ArrowRight,
    Tag,
    TrendingUp,
    BookOpen,
    ChevronRight,
    Search,
    ChevronDown,
    ChevronUp,
    Filter
} from "lucide-react";

// Blog categories with slug matching article categories
const categories = [
    { name: "All", slug: "all", count: 24 },
    { name: "Design Tips", slug: "Design Tips", count: 8 },
    { name: "Project Stories", slug: "Project Stories", count: 6 },
    { name: "Trends & Insights", slug: "Trends & Insights", count: 5 },
    { name: "Sustainability", slug: "Sustainability", count: 3 },
    { name: "Behind the Scenes", slug: "Behind the Scenes", count: 2 },
];

// Featured article
const featuredArticle = {
    id: 1,
    title: "The Art of Biophilic Design: Bringing Nature Indoors",
    excerpt: "Discover how incorporating natural elements into your interiors can transform your space into a sanctuary of calm and productivity. From living walls to natural materials, we explore the principles that guide our biophilic design philosophy.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    author: "Priya Sharma",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    date: "January 20, 2026",
    readTime: "8 min read",
    category: "Trends & Insights",
    slug: "art-of-biophilic-design"
};

// All blog articles
const allArticles = [
    {
        id: 2,
        title: "5 Color Palettes That Never Go Out of Style",
        excerpt: "Timeless color combinations that create sophisticated interiors for decades, not just seasons. Learn the secrets of enduring design.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=600",
        author: "Arjun Malhotra",
        date: "January 18, 2026",
        readTime: "6 min read",
        category: "Design Tips",
        slug: "timeless-color-palettes"
    },
    {
        id: 3,
        title: "Project Spotlight: The Skyline Penthouse",
        excerpt: "An inside look at our award-winning Mumbai penthouse project, from initial concept to stunning completion.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
        author: "Vikram Singh",
        date: "January 15, 2026",
        readTime: "10 min read",
        category: "Project Stories",
        slug: "skyline-penthouse-project"
    },
    {
        id: 4,
        title: "Smart Home Integration: The Future is Here",
        excerpt: "How we seamlessly blend cutting-edge technology with timeless design to create homes that are both beautiful and intelligent.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=600",
        author: "Rahul Krishnan",
        date: "January 12, 2026",
        readTime: "7 min read",
        category: "Trends & Insights",
        slug: "smart-home-integration"
    },
    {
        id: 5,
        title: "Sustainable Materials We Love in 2026",
        excerpt: "From recycled wood to low-VOC paints, discover the eco-friendly materials that are both beautiful and responsible.",
        image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&q=80&w=600",
        author: "Priya Sharma",
        date: "January 10, 2026",
        readTime: "5 min read",
        category: "Sustainability",
        slug: "sustainable-materials-2026"
    },
    {
        id: 6,
        title: "Small Space, Big Impact: Studio Apartment Ideas",
        excerpt: "Maximize every square foot with these clever design strategies for compact urban living spaces.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600",
        author: "Meera Patel",
        date: "January 8, 2026",
        readTime: "6 min read",
        category: "Design Tips",
        slug: "studio-apartment-ideas"
    },
    {
        id: 7,
        title: "The Psychology of Workspace Design",
        excerpt: "How thoughtful office interiors can boost productivity, creativity, and employee well-being by up to 25%.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600",
        author: "Vikram Singh",
        date: "January 5, 2026",
        readTime: "9 min read",
        category: "Trends & Insights",
        slug: "psychology-workspace-design"
    },
    {
        id: 8,
        title: "Heritage Haveli: A Restoration Journey",
        excerpt: "How we breathed new life into a 200-year-old haveli while preserving its rich cultural heritage and architectural integrity.",
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600",
        author: "Ananya Iyer",
        date: "January 2, 2026",
        readTime: "12 min read",
        category: "Project Stories",
        slug: "heritage-haveli-restoration"
    },
    {
        id: 9,
        title: "Lighting Design 101: Layers That Transform",
        excerpt: "Master the art of layered lighting with ambient, task, and accent strategies that bring your interiors to life.",
        image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600",
        author: "Arjun Malhotra",
        date: "December 28, 2025",
        readTime: "7 min read",
        category: "Design Tips",
        slug: "lighting-design-101"
    },
    {
        id: 10,
        title: "Japandi: Where East Meets Scandinavia",
        excerpt: "Exploring the beautiful fusion of Japanese minimalism and Scandinavian functionality that's taking the design world by storm.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
        author: "Priya Sharma",
        date: "December 25, 2025",
        readTime: "8 min read",
        category: "Trends & Insights",
        slug: "japandi-design-trend"
    },
    {
        id: 11,
        title: "Kitchen Renovation: Before & After Magic",
        excerpt: "See how we transformed dated kitchens into modern culinary spaces with smart storage and stunning aesthetics.",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=600",
        author: "Meera Patel",
        date: "December 22, 2025",
        readTime: "6 min read",
        category: "Project Stories",
        slug: "kitchen-renovation-transformation"
    },
    {
        id: 12,
        title: "The Art of Mixing Patterns Like a Pro",
        excerpt: "Learn the rules—and when to break them—for combining patterns to create visually rich, harmonious interiors.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=600",
        author: "Arjun Malhotra",
        date: "December 20, 2025",
        readTime: "5 min read",
        category: "Design Tips",
        slug: "mixing-patterns-guide"
    },
    {
        id: 13,
        title: "Creating a Home Office That Works",
        excerpt: "Essential tips for designing a productive, comfortable, and inspiring workspace in your home.",
        image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=600",
        author: "Vikram Singh",
        date: "December 18, 2025",
        readTime: "7 min read",
        category: "Design Tips",
        slug: "home-office-design"
    },
    {
        id: 14,
        title: "Behind the Scenes: A Day at Aakar Studio",
        excerpt: "Take a peek into our creative process and see how our design team brings ideas to life every day.",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=600",
        author: "Priya Sharma",
        date: "December 15, 2025",
        readTime: "5 min read",
        category: "Behind the Scenes",
        slug: "day-at-aakar-studio"
    },
    {
        id: 15,
        title: "Eco-Friendly Flooring Options for 2026",
        excerpt: "Discover sustainable flooring materials that combine style, durability, and environmental responsibility.",
        image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=600",
        author: "Ananya Iyer",
        date: "December 12, 2025",
        readTime: "6 min read",
        category: "Sustainability",
        slug: "eco-friendly-flooring"
    },
];

// Project gallery with portfolio links
const projectGallery = [
    { image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400", slug: "skyline-penthouse" },
    { image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=400", slug: "heritage-haveli" },
    { image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400", slug: "modern-villa" },
    { image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=400", slug: "urban-loft" },
    { image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=400", slug: "studio-apartment" },
    { image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400", slug: "tech-office" },
    { image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=400", slug: "boutique-hotel" },
    { image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=400", slug: "luxury-residence" },
];

// Design tips/quick reads
const quickTips = [
    {
        title: "The 60-30-10 Color Rule",
        description: "Apply 60% dominant color, 30% secondary, and 10% accent for balanced interiors.",
        icon: "🎨"
    },
    {
        title: "Mirror Placement Magic",
        description: "Place mirrors opposite windows to double natural light and create depth.",
        icon: "✨"
    },
    {
        title: "The Rule of Thirds",
        description: "Group decor in odd numbers—3 or 5 items create more visual interest than even groups.",
        icon: "🖼️"
    },
    {
        title: "Texture Over Color",
        description: "In neutral rooms, vary textures—velvet, linen, wood, stone—to add dimension.",
        icon: "🧶"
    },
    {
        title: "Furniture Float",
        description: "Pull furniture away from walls to create intimate conversation areas.",
        icon: "🛋️"
    },
    {
        title: "Scale & Proportion",
        description: "Mix furniture heights and sizes—a low sofa beside a tall bookshelf creates drama.",
        icon: "📐"
    },
];

// Popular tags
const popularTags = [
    "Living Room", "Kitchen Design", "Bedroom", "Office Interiors",
    "Minimalism", "Luxury", "Sustainable", "Color Theory",
    "Furniture", "Lighting", "Art & Decor", "Storage Solutions"
];

// Trending topics
const trendingTopics = [
    { title: "Japandi Style", views: "12.5K" },
    { title: "Curved Furniture", views: "9.8K" },
    { title: "Earth Tones", views: "8.2K" },
    { title: "Statement Lighting", views: "7.6K" },
    { title: "Textured Walls", views: "6.9K" },
];

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showMoreArticles, setShowMoreArticles] = useState(false);

    // Filter articles based on active category
    const filteredArticles = useMemo(() => {
        if (activeCategory === "all") {
            return allArticles;
        }
        return allArticles.filter(article => article.category === activeCategory);
    }, [activeCategory]);

    // Limit displayed articles based on showMoreArticles state
    const displayedArticles = showMoreArticles
        ? filteredArticles
        : filteredArticles.slice(0, 6);

    // Get count for active category
    const getArticleCount = () => {
        if (activeCategory === "all") {
            return allArticles.length;
        }
        return filteredArticles.length;
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-14">

                {/* Hero Section */}
                <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=2000"
                        alt="Interior Design Blog"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/40" />
                    <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                        <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 border border-white/30">
                            Design Insights & Inspiration
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
                            The Aakar Blog
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            Explore ideas, trends, and stories from the world of interior design. Get inspired for your next project.
                        </p>
                    </div>
                </section>

                {/* Search Bar */}
                <section className="bg-base-200 py-4 border-b border-base-300">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center">
                            <div className="relative w-full max-w-md">
                                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/50" />
                                <input
                                    type="text"
                                    placeholder="Search articles, topics, authors..."
                                    className="input input-bordered pl-12 pr-4 py-3 rounded-full text-sm w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Article */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center gap-2 mb-8">
                            <TrendingUp className="text-primary" size={20} />
                            <h2 className="text-xl font-bold">Featured Article</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 items-center bg-base-200 rounded-3xl overflow-hidden">
                            <div className="relative h-80 md:h-full min-h-[400px]">
                                <Image
                                    src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-8 md:p-12">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
                                    {featuredArticle.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                                    {featuredArticle.title}
                                </h3>
                                <p className="opacity-70 mb-6 leading-relaxed">
                                    {featuredArticle.excerpt}
                                </p>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                                        <Image
                                            src={featuredArticle.authorImage}
                                            alt={featuredArticle.author}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-medium text-sm">{featuredArticle.author}</div>
                                        <div className="text-xs opacity-60 flex items-center gap-2">
                                            <Calendar size={12} /> {featuredArticle.date}
                                            <span>•</span>
                                            <Clock size={12} /> {featuredArticle.readTime}
                                        </div>
                                    </div>
                                </div>
                                <Link href={`/blog/${featuredArticle.slug}`} className="btn btn-primary rounded-full px-6">
                                    Read Article <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Quick Design Tips */}
                <section className="py-16 bg-base-200">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-between mb-8">
                            <div className="flex items-center gap-2">
                                <BookOpen className="text-primary" size={20} />
                                <h2 className="text-xl font-bold">Quick Design Tips</h2>
                            </div>
                            <span className="text-sm text-primary cursor-pointer hover:underline">See all tips →</span>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {quickTips.map((tip, i) => (
                                <div key={i} className="bg-base-100 p-6 rounded-xl border border-base-300 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                                    <div className="text-3xl mb-4">{tip.icon}</div>
                                    <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{tip.title}</h4>
                                    <p className="text-sm opacity-70">{tip.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Latest Articles Grid with Category Filter */}
                <section className="py-16">
                    <div className="container mx-auto px-4">

                        {/* Section Header with Title */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Latest Articles</h2>
                        </div>

                        {/* Category Filter Pills - Above Articles */}
                        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                            {categories.map((cat, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setActiveCategory(cat.slug);
                                        setShowMoreArticles(false); // Reset load more when changing category
                                    }}
                                    className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer border ${activeCategory === cat.slug
                                        ? 'bg-primary text-primary-content border-primary shadow-lg shadow-primary/20'
                                        : 'bg-base-100 text-base-content border-base-300 hover:border-primary/50 hover:bg-base-200'
                                        }`}
                                >
                                    {cat.name} <span className="opacity-60">({cat.slug === "all" ? allArticles.length : allArticles.filter(a => a.category === cat.slug).length})</span>
                                </button>
                            ))}
                        </div>

                        {/* Articles Count */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Filter size={16} className="text-primary" />
                                <span className="text-sm opacity-60">
                                    Showing {displayedArticles.length} of {getArticleCount()} articles
                                    {activeCategory !== "all" && ` in "${activeCategory}"`}
                                </span>
                            </div>
                        </div>

                        {/* Articles Grid */}
                        {displayedArticles.length > 0 ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {displayedArticles.map((article) => (
                                    <article key={article.id} className="bg-base-100 rounded-2xl overflow-hidden border border-base-200 hover:shadow-xl transition-all duration-300 group">
                                        <div className="relative h-52 overflow-hidden">
                                            <Image
                                                src={article.image}
                                                alt={article.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-base-100/90 backdrop-blur-sm text-xs font-medium rounded-full">
                                                    {article.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 text-xs opacity-60 mb-3">
                                                <Calendar size={12} /> {article.date}
                                                <span>•</span>
                                                <Clock size={12} /> {article.readTime}
                                            </div>
                                            <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="text-sm opacity-70 mb-4 line-clamp-2">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <User size={14} className="text-primary" />
                                                    <span className="text-xs font-medium">{article.author}</span>
                                                </div>
                                                <Link href={`/blog/${article.slug}`} className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                                                    Read <ChevronRight size={14} />
                                                </Link>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <p className="text-lg opacity-60">No articles found in this category.</p>
                            </div>
                        )}

                        {/* Load More / Show Less Button */}
                        {filteredArticles.length > 6 && (
                            <div className="text-center mt-12">
                                <button
                                    onClick={() => setShowMoreArticles(!showMoreArticles)}
                                    className="btn btn-outline btn-primary rounded-full px-8 gap-2"
                                >
                                    {showMoreArticles ? (
                                        <>
                                            <ChevronUp size={18} /> Show Less
                                        </>
                                    ) : (
                                        <>
                                            <ChevronDown size={18} /> Load More Articles ({filteredArticles.length - 6} more)
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Sidebar Content Section */}
                <section className="py-16 bg-base-200">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12">

                            {/* Trending & Tags - Taking more space */}
                            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">

                                {/* Trending Topics */}
                                <div className="bg-base-100 p-6 rounded-2xl h-fit">
                                    <div className="flex items-center gap-2 mb-6">
                                        <TrendingUp className="text-primary" size={18} />
                                        <h3 className="font-bold">Trending Topics</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {trendingTopics.map((topic, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-base-200 rounded-lg hover:bg-base-300 transition-colors cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-primary font-bold text-lg">#{i + 1}</span>
                                                    <span className="font-medium">{topic.title}</span>
                                                </div>
                                                <span className="text-xs opacity-60">{topic.views} views</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Popular Tags */}
                                <div className="bg-base-100 p-6 rounded-2xl h-fit">
                                    <div className="flex items-center gap-2 mb-6">
                                        <Tag className="text-primary" size={18} />
                                        <h3 className="font-bold">Popular Tags</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {popularTags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1.5 bg-base-200 text-sm rounded-full hover:bg-primary hover:text-primary-content transition-colors cursor-pointer">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter Signup */}
                            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-content p-8 rounded-2xl h-fit">
                                <h3 className="font-bold text-xl mb-3">Subscribe to Our Newsletter</h3>
                                <p className="text-sm opacity-80 mb-6">
                                    Get weekly design tips, project updates, and exclusive content delivered to your inbox.
                                </p>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="input w-full mb-4 text-base-content"
                                />
                                <button className="btn w-full bg-white text-primary hover:bg-white/90">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Inspiration Gallery - With Portfolio Links */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm">Visual Inspiration</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">Recent Project Snapshots</h2>
                            <p className="opacity-70 max-w-2xl mx-auto">
                                A curated gallery of our latest work. Click to explore the full project stories.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {projectGallery.map((project, i) => (
                                <Link
                                    key={i}
                                    href={`/portfolio/${project.slug}`}
                                    className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                                >
                                    <Image
                                        src={project.image}
                                        alt={`Project ${i + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium flex items-center gap-2">
                                            View Project <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="text-center mt-8">
                            <Link href="/portfolio" className="btn btn-outline rounded-full px-8">
                                View Full Portfolio <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-content">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Have a Story to Share?
                        </h2>
                        <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
                            We love featuring unique homes, innovative designs, and creative spaces. If you&apos;ve worked with us and want to share your experience, we&apos;d love to hear from you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact" className="btn btn-lg bg-white text-primary hover:bg-white/90 rounded-full px-8">
                                Submit Your Story <ArrowRight size={18} />
                            </Link>
                            <Link href="/contact" className="btn btn-lg btn-outline rounded-full px-8 border-white/30 text-white hover:bg-white/10 hover:border-white">
                                Contact Our Team
                            </Link>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
