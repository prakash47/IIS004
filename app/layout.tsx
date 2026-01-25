import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Comprehensive SEO metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://aakarinteriors.com'),
  title: {
    default: "Aakar Interiors | Premium Interior Design Services in Mumbai, India",
    template: "%s | Aakar Interiors"
  },
  description: "Award-winning interior design studio in Mumbai. We specialize in luxury residential, commercial, and hospitality interior design. 15+ years of excellence, 750+ projects completed. Transform your space with India's top interior designers.",
  keywords: [
    "interior design Mumbai",
    "luxury interior designers India",
    "home interior design",
    "residential interior design",
    "commercial interior design",
    "hospitality interior design",
    "office interior design",
    "best interior designers Mumbai",
    "premium interior design services",
    "modern interior design",
    "contemporary interior design",
    "luxury home design",
    "interior decoration",
    "space planning",
    "interior architecture",
    "sustainable interior design",
    "Aakar Interiors",
    "Mumbai interior designers",
    "Bandra interior design",
    "penthouse interior design",
    "villa interior design"
  ],
  authors: [{ name: "Aakar Interiors", url: "https://aakarinteriors.com" }],
  creator: "Aakar Interiors",
  publisher: "Aakar Interiors",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aakarinteriors.com",
    siteName: "Aakar Interiors",
    title: "Aakar Interiors | Premium Interior Design Services in Mumbai, India",
    description: "Award-winning interior design studio in Mumbai specializing in luxury residential, commercial, and hospitality projects. 750+ projects completed with 98% client satisfaction.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aakar Interiors - Premium Interior Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aakar Interiors | Premium Interior Design Services",
    description: "Award-winning interior design studio in Mumbai. Transform your space with India's top interior designers.",
    images: ["/og-image.jpg"],
    creator: "@aakarinteriors",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://aakarinteriors.com",
  },
  category: "Interior Design",
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a2e' },
  ],
};

// JSON-LD Structured Data for Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InteriorDesignBusiness",
  "name": "Aakar Interiors",
  "alternateName": "Aakar Interior Design Studio",
  "url": "https://aakarinteriors.com",
  "logo": "https://aakarinteriors.com/logo.png",
  "image": "https://aakarinteriors.com/og-image.jpg",
  "description": "Award-winning interior design studio in Mumbai specializing in luxury residential, commercial, and hospitality interior design. Over 15 years of excellence with 750+ completed projects.",
  "foundingDate": "2010",
  "founder": {
    "@type": "Person",
    "name": "Arjun Malhotra"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4th Floor, Skyline Tower, Bandra West",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400050",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.0596",
    "longitude": "72.8295"
  },
  "telephone": "+91-22-2640-5555",
  "email": "hello@aakarinteriors.com",
  "openingHours": "Mo-Sa 10:00-19:00",
  "priceRange": "₹₹₹₹",
  "areaServed": [
    "Mumbai",
    "Pune",
    "Bangalore",
    "Delhi",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Ahmedabad",
    "Goa",
    "Dubai"
  ],
  "serviceType": [
    "Residential Interior Design",
    "Commercial Interior Design",
    "Hospitality Interior Design",
    "Office Interior Design",
    "Luxury Home Design",
    "Space Planning",
    "Interior Consultation"
  ],
  "sameAs": [
    "https://www.facebook.com/aakarinteriors",
    "https://www.instagram.com/aakarinteriors",
    "https://www.linkedin.com/company/aakar-interiors",
    "https://www.pinterest.com/aakarinteriors",
    "https://twitter.com/aakarinteriors"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "156",
    "bestRating": "5"
  },
  "award": [
    "IIID Design Excellence Award 2024",
    "Best Luxury Residential Interior - Asia Design Awards 2023",
    "Sustainability Champion - Green Building Council 2024"
  ]
};

// JSON-LD for WebSite with SearchAction
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Aakar Interiors",
  "url": "https://aakarinteriors.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://aakarinteriors.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external resources for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/icon-192x192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
