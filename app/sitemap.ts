import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aakarinteriors.com';
    const currentDate = new Date().toISOString();

    // Main pages
    const mainPages = [
        {
            url: baseUrl,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: currentDate,
            changeFrequency: 'daily' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: currentDate,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    // Portfolio project pages
    const portfolioProjects = [
        'skyline-penthouse',
        'heritage-haveli',
        'modern-villa',
        'urban-loft',
        'studio-apartment',
        'tech-office',
        'boutique-hotel',
        'luxury-residence',
    ].map((slug) => ({
        url: `${baseUrl}/portfolio/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // Blog article pages
    const blogArticles = [
        'art-of-biophilic-design',
        'timeless-color-palettes',
        'skyline-penthouse-project',
        'smart-home-integration',
        'sustainable-materials-2026',
        'studio-apartment-ideas',
        'psychology-workspace-design',
        'heritage-haveli-restoration',
        'lighting-design-101',
        'japandi-design-trend',
        'kitchen-renovation-transformation',
        'mixing-patterns-guide',
        'home-office-design',
        'day-at-aakar-studio',
        'eco-friendly-flooring',
    ].map((slug) => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...mainPages, ...portfolioProjects, ...blogArticles];
}
