import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Interior Design Blog - Tips, Trends & Project Stories",
    description: "Explore interior design inspiration, expert tips, and behind-the-scenes project stories. Stay updated with the latest trends in residential, commercial, and hospitality design from Mumbai's leading interior designers.",
    keywords: [
        "interior design blog",
        "home decor tips",
        "interior design trends",
        "design inspiration",
        "home renovation ideas",
        "interior design ideas",
        "design tips Mumbai",
        "modern interior trends",
        "luxury design blog",
        "space design articles",
    ],
    alternates: {
        canonical: "https://aakarinteriors.com/blog",
    },
    openGraph: {
        title: "Interior Design Blog | Aakar Interiors",
        description: "Design tips, project stories, and the latest trends in interior design. Get inspired for your next home or office project.",
        url: "https://aakarinteriors.com/blog",
        type: "website",
    },
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
