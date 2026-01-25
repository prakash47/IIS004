// Unique detailed data for each project
export interface ProjectDetails {
    area: string;
    duration: string;
    team: string;
    budget: string;
    challenge: string;
    approach: string;
    philosophy: string;
    designElements: string[];
    materials: { name: string; description: string }[];
    testimonial: { text: string; author: string; role: string };
    galleryImages: string[];
    highlights: string[];
    process: { title: string; description: string }[];
}

export const projectDetails: Record<string, ProjectDetails> = {
    "azure-heights": {
        area: "4,200 sq. ft.",
        duration: "8 months",
        team: "12 specialists",
        budget: "Ultra-Premium",
        challenge: "The Azure Heights penthouse presented a unique challenge: creating an ultra-modern living space in a heritage building with strict renovation guidelines. The clients, a power couple with a love for contemporary art, wanted a home that could double as a gallery while remaining warm and livable. We had to work around load-bearing walls, preserve original architectural elements, and integrate state-of-the-art technology without compromising the building's historic character.",
        approach: "We embraced a 'museum meets home' philosophy, designing floating gallery walls that could display rotating art collections while concealing smart home infrastructure. Our team collaborated with structural engineers to reinforce floors for the indoor infinity pool and with lighting designers to create museum-quality illumination. Every sight line was carefully choreographed to frame views of the Mumbai skyline.",
        philosophy: "This penthouse embodies our belief that luxury is found in thoughtful restraint. Rather than overwhelming the senses, we created moments of discovery—a hidden bar that emerges from the wall, skylights that track the sun's journey, and furniture that seems to float. The space breathes with the rhythm of its inhabitants.",
        designElements: [
            "360-degree panoramic windows with electrochromic glass that adjusts transparency based on sunlight",
            "Cantilevered floating staircase with glass treads and integrated LED lighting",
            "Indoor infinity pool with underwater speakers and retractable glass enclosure",
            "Art gallery walls with museum-grade lighting and climate control systems",
            "Home automation hub centralized through a custom-built control room",
            "Rooftop terrace with automated pergola system and outdoor kitchen"
        ],
        materials: [
            { name: "Calacatta Borghini Marble", description: "Rare Italian marble with bold gold veining for statement flooring in the grand foyer" },
            { name: "Walnut Burl", description: "Exotic wood veneer with distinctive swirling grain patterns for custom cabinetry" },
            { name: "Patinated Bronze", description: "Hand-aged bronze for door handles, railings, and sculptural elements" },
            { name: "Mohair Velvet", description: "Ultra-soft velvet from Belgium for seating in the formal living areas" },
            { name: "Onyx Backlit Panels", description: "Translucent honey onyx used for bar countertops and feature walls" },
            { name: "Terrazzo Flooring", description: "Custom-mixed terrazzo with brass inlays for the entertainment level" }
        ],
        testimonial: {
            text: "Aakar Interiors understood that we didn't just want a home—we wanted a sanctuary that celebrates art, architecture, and the Mumbai skyline. They delivered beyond our wildest imagination. Every guest who visits is left speechless. Our penthouse has become a landmark in the city's design scene.",
            author: "Vikram & Priya Mehta",
            role: "Business Leaders & Art Collectors"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "Featured on the cover of Architectural Digest India",
            "Winner of the Asia Pacific Property Awards 2024",
            "First residential project in India with electrochromic smart glass throughout",
            "Custom furniture pieces now in permanent collection at Design Museum Mumbai"
        ],
        process: [
            { title: "Client Immersion", description: "We spent two weeks living alongside the clients, understanding their art collection, entertaining patterns, and daily rituals to inform every design decision." },
            { title: "Collaborative Design", description: "Working with world-renowned artists and furniture designers, we created bespoke pieces that exist nowhere else in the world." },
            { title: "Precision Engineering", description: "The floating staircase alone required 3,000 hours of structural calculations and fabrication to achieve its gravity-defying appearance." },
            { title: "White Glove Delivery", description: "A dedicated project manager oversaw the installation of over 200 custom elements, ensuring each piece was placed with museum precision." }
        ]
    },

    "techspace-office": {
        area: "15,000 sq. ft.",
        duration: "5 months",
        team: "18 specialists",
        budget: "Premium",
        challenge: "TechSpace needed to accommodate 200 employees across engineering, design, and sales teams, each with vastly different work styles. The challenge was creating a cohesive environment that fostered collaboration while providing quiet zones for focused work. Additionally, the startup culture demanded flexibility—the space needed to scale from 50 to 200 employees without major renovations.",
        approach: "We designed a 'neighborhood' concept where each team has a home base with customizable zones, connected by a central 'Main Street' with cafés, lounges, and collaboration spaces. Modular furniture systems allow overnight reconfiguration. We studied traffic patterns and work habits to position amenities strategically, reducing unnecessary movement while encouraging serendipitous encounters.",
        philosophy: "Great office design should be invisible—it should support work without demanding attention. We created spaces that feel residential rather than corporate, where employees genuinely want to spend time. The design anticipates future ways of working, with hybrid-ready meeting rooms and flexible hot-desking zones.",
        designElements: [
            "Modular workstation pods that can be reconfigured in 48 different layouts",
            "Acoustic cloud ceilings with integrated circadian lighting systems",
            "Living plant walls with automated irrigation filtering indoor air",
            "Hybrid meeting rooms with 360-degree cameras and spatial audio",
            "Wellness rooms for meditation, nursing mothers, and mental health breaks",
            "Indoor amphitheater seating for all-hands meetings and company events"
        ],
        materials: [
            { name: "Recycled PET Felt", description: "Acoustic panels made from recycled plastic bottles in brand colors" },
            { name: "Bamboo Engineered Flooring", description: "Sustainable bamboo flooring throughout open work areas" },
            { name: "Cork Wall Tiles", description: "Natural cork for pinnable walls in collaborative zones" },
            { name: "Powder-Coated Steel", description: "Durable steel frames for modular furniture in custom colors" },
            { name: "Recycled Rubber", description: "High-performance rubber flooring for the wellness center and cafeteria" },
            { name: "Reclaimed Teak", description: "Salvaged teak from old buildings for café tables and accent walls" }
        ],
        testimonial: {
            text: "Our employee satisfaction scores jumped 40% after moving into the new office. The design literally changed how we work—teams that never collaborated before now bump into each other at the coffee bar. Aakar understood that office design is really about human behavior.",
            author: "Rahul Krishnan",
            role: "CEO, TechSpace Solutions"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "40% increase in employee satisfaction scores post-move",
            "LEED Gold certification for sustainable workplace design",
            "Featured in Fast Company's 'Best Designed Offices in Asia'",
            "Zero-waste construction with 98% of materials recycled or repurposed"
        ],
        process: [
            { title: "Workplace Research", description: "We conducted surveys, workshops, and shadowing sessions with employees across all departments to understand work patterns and pain points." },
            { title: "Scenario Planning", description: "We designed for three growth scenarios—50, 100, and 200 employees—ensuring the space could adapt without major construction." },
            { title: "Prototype Testing", description: "Before finalizing designs, we built full-scale mockups of key spaces and had employees test them for a week." },
            { title: "Phased Rollout", description: "We moved teams in waves over three weekends, ensuring zero disruption to business operations." }
        ]
    },

    "serenity-villa": {
        area: "6,500 sq. ft.",
        duration: "14 months",
        team: "15 specialists",
        budget: "Ultra-Premium",
        challenge: "The Serenity Villa sits on a cliff overlooking the Arabian Sea, presenting both breathtaking opportunities and significant challenges. The corrosive salt air, monsoon rains, and intense tropical sun demanded materials that could withstand extreme conditions. The clients wanted to merge indoor and outdoor living while maintaining privacy from neighboring properties and protecting interiors from the elements.",
        approach: "We designed the villa as a series of pavilions connected by covered walkways and water features, allowing air to flow naturally and framing ocean views from every room. Local laterite stone and treated teak create a palette that ages gracefully in the coastal environment. Retractable glass walls blur the boundary between inside and out, while strategic landscaping creates private microclimates.",
        philosophy: "The best beach houses disappear into their environment. We drew inspiration from traditional Goan architecture—courtyards, verandas, and thick walls that keep interiors cool—reinterpreting these elements for contemporary living. The villa feels as ancient as the cliff it sits upon, yet offers every modern luxury.",
        designElements: [
            "Infinity pool that appears to merge with the ocean horizon",
            "Retractable glass walls opening 90% of the living space to the outdoors",
            "Rainwater harvesting system feeding lush tropical gardens",
            "Open-air master bathroom with private courtyard garden",
            "Traditional Goan roof tiles over modern steel structure",
            "Suspended daybed pavilion overlooking the cliff edge"
        ],
        materials: [
            { name: "Laterite Stone", description: "Local red stone hand-cut by Goan masons for walls and pavements" },
            { name: "Marine-Grade Teak", description: "Plantation teak treated for salt air resistance on all woodwork" },
            { name: "Kota Stone", description: "Cool limestone flooring that stays comfortable underfoot in tropical heat" },
            { name: "Hand-Woven Cane", description: "Traditional cane work from Kerala for furniture and ceiling details" },
            { name: "Mangalore Tiles", description: "Handmade terracotta roof tiles sourced from century-old manufacturers" },
            { name: "Oxidized Copper", description: "Copper rainwater channels and fixtures designed to develop green patina" }
        ],
        testimonial: {
            text: "Every morning, I wake up to the sound of waves and the sight of dolphins playing in the distance. Aakar didn't just build us a vacation home—they built us a reason to leave our busy Mumbai lives behind. This villa is our sanctuary, our escape, our forever place.",
            author: "The Fernandes Family",
            role: "Villa Owners"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "Featured in Condé Nast Traveller's 'Dream Homes of India'",
            "100% energy self-sufficient through solar and wind power",
            "Built using 80% locally sourced materials reducing carbon footprint",
            "Winner of HUDCO Design Award for Sustainable Residential Architecture"
        ],
        process: [
            { title: "Site Meditation", description: "We spent three monsoons studying the site—understanding sun paths, wind patterns, and the rhythm of the tides before drawing a single line." },
            { title: "Artisan Collaboration", description: "We partnered with traditional Goan craftsmen, reviving building techniques that had nearly disappeared from modern construction." },
            { title: "Environmental Integration", description: "Every tree on the property was mapped and preserved. The villa was designed around existing vegetation, not the other way around." },
            { title: "Seasonal Testing", description: "We completed the exterior shell and lived through one full monsoon season before finalizing interior specifications." }
        ]
    },

    "urban-cafe": {
        area: "2,800 sq. ft.",
        duration: "4 months",
        team: "10 specialists",
        budget: "Mid-Premium",
        challenge: "Located in a converted warehouse in Pune's industrial district, the Urban Café needed to stand out in a crowded specialty coffee market while honoring the building's industrial heritage. The clients wanted a space that could transition from focused laptop work in the morning to a vibrant cocktail lounge at night—essentially two venues in one.",
        approach: "We embraced the warehouse DNA—exposed brick, steel trusses, and concrete floors—while adding warmth through strategic lighting and soft furnishings. A massive central bar anchors the space, with motorized elements that literally transform: coffee equipment retracts at 5 PM as the bar station rises into place. Lighting shifts from cool productivity-focused LEDs to warm amber throughout the day.",
        philosophy: "Great café design is theater. It must enchant at first glance and reveal new details over time. We layered textures, scents, and sounds to create an immersive experience where the coffee tastes better because of the environment. Every surface tells a story of craft and intention.",
        designElements: [
            "Transforming central bar with motorized coffee-to-cocktail conversion",
            "Circadian lighting system that shifts color temperature throughout the day",
            "Acoustic fabric banquettes eliminating laptop typing echo",
            "Custom terrazzo bar top with embedded coffee bean fragments",
            "Vintage industrial pendant lights salvaged from local factories",
            "Living moss wall that doubles as sound absorption"
        ],
        materials: [
            { name: "Exposed Brick", description: "Original warehouse brick walls carefully cleaned and sealed" },
            { name: "Blackened Steel", description: "New steel elements finished to match the building's industrial heritage" },
            { name: "Leather Banquettes", description: "Full-aniline leather seating that develops beautiful patina over time" },
            { name: "Custom Terrazzo", description: "Bespoke floor and counter terrazzo with copper and coffee bean aggregate" },
            { name: "Edison Bulb Fixtures", description: "Reproduction vintage bulbs with dimmable warm filaments" },
            { name: "Cork Underlay", description: "Hidden cork layer under seating areas for acoustic comfort" }
        ],
        testimonial: {
            text: "We wanted a café that felt like an old friend's living room but could turn into a sophisticated bar at night. Aakar nailed it. Our regulars come at 8 AM for pour-overs and stay until midnight for cocktails. The transformation still amazes me every time.",
            author: "Sneha Kapoor",
            role: "Founder, Urban Café"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "Named 'Best Designed Café in Pune' by TimeOut Magazine",
            "Featured in Dezeen's 'Coffee Shop Design Inspiration'",
            "Revenue increased 300% compared to previous location",
            "Zero-VOC finishes and sustainable materials throughout"
        ],
        process: [
            { title: "Barista Integration", description: "We worked alongside the barista team to design the bar workflow, ensuring every movement was efficient and every tool within reach." },
            { title: "Lighting Studies", description: "We tested 47 different lighting scenarios before landing on the circadian system that transforms the space throughout the day." },
            { title: "Sound Design", description: "An acoustic engineer mapped the space to eliminate dead zones and echo, creating the perfect ambient buzz." },
            { title: "Soft Opening", description: "We ran two weeks of soft opening events, making real-time adjustments based on how guests actually used the space." }
        ]
    },

    "heritage-home": {
        area: "5,800 sq. ft.",
        duration: "18 months",
        team: "20 specialists",
        budget: "Heritage Premium",
        challenge: "This 50-year-old bungalow in Jaipur's old city was a treasured family heirloom with significant structural issues. The clients wanted to preserve the building's heritage character—hand-painted frescoes, ornate jali screens, and traditional courtyards—while adding modern amenities for three generations living under one roof. Navigating heritage regulations while upgrading electrical, plumbing, and HVAC systems required extraordinary care.",
        approach: "We assembled a team of heritage conservation specialists, structural engineers, and traditional craftsmen. Every original element was documented, carefully removed, restored, and reinstalled. New interventions were designed to be 'reversible'—clearly contemporary but respectful of the original architecture. A hidden service core conceals all modern infrastructure.",
        philosophy: "In heritage restoration, humility is key. The building has stories to tell that are more important than any design statement we could make. Our job was to listen, to heal, and to prepare the home for its next 50 years while honoring the previous 50.",
        designElements: [
            "Restored hand-painted fresco ceilings by master artisans from Udaipur",
            "Hidden air conditioning through discreet floor vents and restored ceiling fans",
            "Original jali screens retrofitted with automated opening mechanisms",
            "Courtyard water feature reviving the traditional 'baoli' concept",
            "LED lighting reproducing the warmth of oil lamps in heritage chandeliers",
            "Accessible lift concealed within a restored wooden almira cabinet"
        ],
        materials: [
            { name: "Makrana Marble", description: "The same white marble used in the Taj Mahal, sourced for floor restoration" },
            { name: "Lime Plaster", description: "Traditional lime-based plaster matching original wall textures" },
            { name: "Sheesham Wood", description: "Seasoned rosewood for door and furniture restoration" },
            { name: "Natural Pigments", description: "Mineral and vegetable dyes matching the original fresco palette" },
            { name: "Brass Hardware", description: "Hand-cast brass reproductions of original door handles and fittings" },
            { name: "Dhurrie Rugs", description: "Hand-woven cotton rugs from Jodhpur workshops using ancestral patterns" }
        ],
        testimonial: {
            text: "My grandmother smiled when she saw her childhood home restored to its former glory. My children run through the courtyard just as I did decades ago. Aakar gave us back our memories while preparing our home for generations to come. They treat heritage with the reverence it deserves.",
            author: "Rajendra Singh Shekhawat",
            role: "Third-Generation Homeowner"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "Received UNESCO Asia-Pacific Heritage Conservation Award",
            "Featured in Architectural Heritage Foundation's annual publication",
            "96% of original building materials preserved and restored",
            "Revived 5 traditional crafts that were at risk of extinction"
        ],
        process: [
            { title: "Archival Research", description: "We discovered original building plans in family archives and consulted with octogenarian craftsmen who remembered the construction." },
            { title: "Forensic Documentation", description: "Every fresco, tile, and moulding was photographed, measured, and catalogued before any work began." },
            { title: "Craft Revival", description: "We located and trained young artisans in nearly-lost techniques, ensuring this knowledge survives in Rajasthan." },
            { title: "Family Workshops", description: "Monthly meetings with three generations of the family ensured every decision honored collective memories." }
        ]
    },

    "apex-hq": {
        area: "45,000 sq. ft.",
        duration: "12 months",
        team: "35 specialists",
        budget: "Corporate Premium",
        challenge: "Apex Technologies needed a headquarters that would attract top talent in the competitive Gurgaon tech corridor while projecting innovation and stability to investors. The building had an awkward L-shaped footprint and limited natural light in the core. They required spaces for 500 employees with room to grow, a prestigious client-facing zone, and a company culture that values transparency and collaboration.",
        approach: "We inverted the typical corporate layout, placing the 'heart' of the company—cafeteria, town hall, and innovation labs—at the building's center, visible from every floor through a soaring atrium we carved into the structure. Executive offices have glass walls; meeting rooms are available to all. The design literally embodies the company's commitment to open communication.",
        philosophy: "Corporate headquarters should inspire without intimidating. We rejected corner-office hierarchies in favor of democratic spaces where great ideas can come from anywhere. The building itself becomes a recruitment tool and a daily reminder of company values.",
        designElements: [
            "Central atrium carved through five floors with suspended meeting pods",
            "Living wall spanning 40 feet, purifying air for the entire building",
            "Transparent executive suite with electrochromic privacy glass",
            "Innovation lab with rapid prototyping equipment open to all employees",
            "Rooftop running track and outdoor workspace pavilions",
            "Art installations commissioned from emerging Indian artists"
        ],
        materials: [
            { name: "Low-Iron Glass", description: "Ultra-clear glass for maximum transparency and natural light" },
            { name: "Recycled Aluminum", description: "100% recycled aluminum for curtain wall framing" },
            { name: "Acoustic Timber Slats", description: "Sustainably harvested wood for ceiling treatments" },
            { name: "Polished Concrete", description: "Low-maintenance concrete floors with embedded radiant heating" },
            { name: "Acoustic Fabric Panels", description: "Custom geometric panels in brand colors for sound absorption" },
            { name: "Laser-Cut Steel", description: "Intricate steel screens for wayfinding and space division" }
        ],
        testimonial: {
            text: "Our new headquarters helped us close three major funding rounds. Investors walk in and immediately understand what kind of company we are. More importantly, our employees feel proud. The design reflects who we aspire to be—open, innovative, and bold.",
            author: "Arun Sharma",
            role: "Founder & CEO, Apex Technologies"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "LEED Platinum certification—highest in Gurgaon",
            "Named 'Best Corporate Interior' by CII Design Excellence Awards",
            "Employee retention improved 60% in first year post-move",
            "Featured on CNBC's 'Future of Work' documentary series"
        ],
        process: [
            { title: "Culture Audit", description: "We interviewed 50 employees across all levels to understand where the existing culture succeeded and where spaces failed to support it." },
            { title: "Change Management", description: "We conducted workshops preparing staff for the shift from cubicles to open plan, addressing concerns proactively." },
            { title: "Pilot Spaces", description: "We built prototype workstations and tested them with real teams for three months before committing to the final design." },
            { title: "Programmed Rollout", description: "Teams moved in phases with dedicated change ambassadors helping colleagues adjust to new ways of working." }
        ]
    },

    "luxe-apartment": {
        area: "3,200 sq. ft.",
        duration: "7 months",
        team: "9 specialists",
        budget: "Premium",
        challenge: "This Delhi apartment for a young tech entrepreneur required a space that could shift from intense work-from-home sessions to sophisticated entertaining. The client wanted clean minimalism but also warmth—a notoriously difficult balance. The apartment had good bones but suffered from poor storage, dated finishes, and an inefficient layout that made the 3,200 sq. ft. feel cramped.",
        approach: "We gutted the apartment to the concrete shell and reimagined the layout around the client's daily rhythms. A concealed home office disappears behind walnut panels when not in use. Storage walls with integrated lighting replace bulky furniture. We used a restrained palette of warm woods, soft grays, and brass accents that feels calm yet never cold.",
        philosophy: "True minimalism isn't about having less—it's about having exactly what you need, beautifully made and thoughtfully placed. Every object in this apartment earns its place through function, beauty, or meaning. There is no clutter because there are no superfluous things.",
        designElements: [
            "Disappearing home office with motorized walnut panels",
            "Full-height storage walls with hidden integrated lighting",
            "Smart glass partitions converting open plan to private rooms",
            "Floating kitchen island with induction cooking and hidden ventilation",
            "Integrated Sonos audio invisible within walls and ceilings",
            "Automated window treatments responding to light and time"
        ],
        materials: [
            { name: "American Walnut", description: "Warm-toned walnut for all millwork and concealed storage" },
            { name: "Marmorino Plaster", description: "Italian lime plaster creating subtle texture on feature walls" },
            { name: "Nero Marquina Marble", description: "Black marble with white veining for bathroom and kitchen accents" },
            { name: "Brushed Nickel", description: "Satin-finish hardware and fixtures for understated elegance" },
            { name: "Cashmere Wool", description: "Hand-woven wool rugs from Kashmir adding warmth to concrete floors" },
            { name: "Smoked Oak Flooring", description: "Engineered oak with subtle gray undertones, matte finished" }
        ],
        testimonial: {
            text: "My apartment is my sanctuary after 16-hour workdays and my stage for hosting investors. Aakar understood that these weren't conflicting needs—they designed a space that's both a cocoon and a showcase. Every surface feels intentional, yet the space remains flexible and alive.",
            author: "Ankit Agarwal",
            role: "Founder, Tech Startup"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "Featured in Elle Decor India's 'Homes Under 40'",
            "Winner of FOAID Award for Residential Interiors",
            "50% reduction in energy consumption through smart systems",
            "Custom furniture pieces designed specifically for this project"
        ],
        process: [
            { title: "Day-in-Life Study", description: "We shadowed the client for 48 hours to understand work patterns, social habits, and pain points in his previous living situation." },
            { title: "Storage Audit", description: "Every possession was catalogued to design storage solutions with precisely enough capacity—not too much, not too little." },
            { title: "Technology Integration", description: "We worked with smart home specialists to ensure all systems communicate seamlessly through a single interface." },
            { title: "Reveal Experience", description: "We staged the completed apartment before the client saw it, creating a reveal moment that showcased its transformation." }
        ]
    },

    "fintech-hub": {
        area: "22,000 sq. ft.",
        duration: "6 months",
        team: "22 specialists",
        budget: "Tech Premium",
        challenge: "This fintech company handles sensitive financial data, requiring enterprise-grade security without creating a bunker atmosphere. The Hyderabad office needed to project trustworthiness to banking partners while maintaining the casual energy that attracts top tech talent. We had to integrate secure server rooms, SOC-compliant workspaces, and visitor areas that couldn't access sensitive zones—all while feeling like one cohesive space.",
        approach: "We designed three 'permission zones' with invisible security thresholds—public lobbies, employee workspaces, and high-security zones—each progressively more controlled but never feeling restrictive. Biometric access is disguised within elegant hardware. The design language shifts subtly between zones while maintaining visual continuity.",
        philosophy: "Security and hospitality are not opposites. The most secure spaces can also be the most welcoming when the design is thoughtful. We wanted visitors to feel trusted while knowing they're in capable hands.",
        designElements: [
            "Invisible biometric access integrated into door handles and artwork",
            "Soundproofed dealing rooms for confidential trading operations",
            "Secure data center with viewing gallery for client tours",
            "Casual collaboration spaces that don't trigger security protocols",
            "Visitor management system with smart badge integration",
            "Emergency evacuation lighting disguised as design elements"
        ],
        materials: [
            { name: "RF-Shielded Glass", description: "Specialty glass preventing electronic eavesdropping in sensitive areas" },
            { name: "Acoustic Flooring", description: "Sound-dampening flooring preventing vibration-based surveillance" },
            { name: "Copper Mesh Ceiling", description: "Decorative mesh providing Faraday cage protection in secure zones" },
            { name: "Ballistic-Rated Walls", description: "Security walls hidden behind premium finishes in high-risk areas" },
            { name: "Anti-Tailgating Flooring", description: "Pressure-sensitive flooring detecting unauthorized access attempts" },
            { name: "Smart Glass Partitions", description: "Instant-privacy glass for confidential meetings in open spaces" }
        ],
        testimonial: {
            text: "We passed RBI's audit with flying colors, yet our office feels nothing like a bank. Engineers love working here, and our banking partners are impressed by how seriously we take security. Aakar proved you can have both. The invisible security infrastructure is genuinely invisible.",
            author: "Nirmala Iyer",
            role: "COO, FinSecure Technologies"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "Passed RBI Cyber Security Framework audit on first attempt",
            "Zero security breaches since office opening",
            "Featured in Banking Frontiers magazine as model fintech office",
            "Employee satisfaction 35% above industry benchmark"
        ],
        process: [
            { title: "Security Consultation", description: "We worked with former intelligence officers to understand threat landscapes and design appropriate countermeasures." },
            { title: "Compliance Mapping", description: "Every design decision was checked against RBI, PCI-DSS, and SOC 2 requirements before implementation." },
            { title: "Red Team Testing", description: "Before occupancy, security consultants attempted to breach physical and digital security, leading to design refinements." },
            { title: "Employee Security Training", description: "We designed spaces that reinforce security behaviors without constant reminders, making compliance natural." }
        ]
    },

    "coastal-retreat": {
        area: "4,500 sq. ft.",
        duration: "11 months",
        team: "14 specialists",
        budget: "Luxury Premium",
        challenge: "This beachfront villa outside Chennai faces extreme weather—summer heat exceeding 45°C, monsoon storms, and constant salt air. The clients wanted panoramic ocean views without the brutal heat gain that typically comes with glass walls facing west. The site's elevation meant incredible views but exposure to powerful winds that made traditional outdoor living impractical.",
        approach: "We oriented the villa to catch morning sun while shielding from afternoon heat through deep overhangs and automated screens. Cross-ventilation paths were studied using computational fluid dynamics to maximize natural cooling. A swimming pool creates a microclimate that cools breezes before they enter living spaces. Wind-protected courtyards offer sheltered outdoor living.",
        philosophy: "Tropical architecture must work with climate, not against it. Before air conditioning, builders here knew how to create comfort through design. We merged that ancestral wisdom with modern technology, reducing energy dependence while maximizing comfort.",
        designElements: [
            "Automated exterior louvers tracking sun position throughout the day",
            "Computational fluid dynamics-optimized natural ventilation paths",
            "Infinity pool positioned to pre-cool sea breezes",
            "Underground thermal mass for passive cooling",
            "Green roof with native coastal plants reducing heat gain",
            "Storm shutters integrating seamlessly into architectural design"
        ],
        materials: [
            { name: "Athangudi Tiles", description: "Traditional handmade Tamil Nadu tiles for cool flooring" },
            { name: "Chettinad Teak", description: "Reclaimed teak from demolished Chettinad mansions for all woodwork" },
            { name: "Oxide Red Flooring", description: "Traditional Tamil floor finish using natural oxides" },
            { name: "Palmyra Wood", description: "Local palm wood for ceiling lattices and outdoor furniture" },
            { name: "Kadapa Stone", description: "Black limestone for bathrooms and pool surrounds" },
            { name: "Marine-Grade Stainless", description: "316 stainless steel for all exterior hardware and fittings" }
        ],
        testimonial: {
            text: "We spend more time outdoors here than in our city apartment. The villa breathes with the ocean, stays cool without constant AC, and survives monsoons without a scratch. Aakar designed a home that respects this powerful location while making us feel perfectly safe and comfortable.",
            author: "Dr. Karthik Sundaram",
            role: "Neurosurgeon & Homeowner"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "70% reduction in energy consumption compared to conventional coastal homes",
            "Survived Cyclone Mandous with zero structural damage",
            "Featured in Sanctuary Magazine's 'Climate Responsive Homes'",
            "Winner of Green Building Council India's Residential Award"
        ],
        process: [
            { title: "Climate Modeling", description: "We ran 12 months of weather simulations to understand sun angles, wind patterns, and storm frequencies before designing." },
            { title: "Material Testing", description: "Samples of all exterior materials were exposed to coastal conditions for 6 months before specification." },
            { title: "Local Craft Integration", description: "We partnered with Chettinad craftsmen to incorporate traditional cooling techniques into modern construction." },
            { title: "Storm Preparation", description: "The villa was tested against simulated cyclone conditions, with storm shutters and drainage systems verified before occupation." }
        ]
    },

    "boutique-hotel": {
        area: "8,500 sq. ft.",
        duration: "10 months",
        team: "25 specialists",
        budget: "Hospitality Premium",
        challenge: "This boutique hotel lobby in Udaipur needed to compete with heritage palace hotels while offering a more contemporary experience. The challenge was creating a grand arrival experience within a relatively modest footprint, managing guest flow between restaurant, spa, and rooms, and establishing a strong brand identity for a new hospitality venture in an established market.",
        approach: "We designed the lobby as a 'curated marketplace'—a series of intimate alcoves rather than one grand hall. Each zone offers a different activity: check-in concealed within a library, a champagne bar, an artifact gallery, and a meditation garden. Guests discover new spaces over multiple visits, creating the layered experience typically found in much larger hotels.",
        philosophy: "Great hospitality design creates the feeling of being expected. Every detail should communicate care and attention, from the height of the reception desk to the scent in the air. The lobby is our first handshake with every guest.",
        designElements: [
            "Library-style concealed check-in desk avoiding hotel lobby clichés",
            "Suspended brass chandeliers handcrafted by local metalworkers",
            "Hand-laid mosaic floors inspired by Lake Pichola reflections",
            "Curated artifact galleries throughout public spaces",
            "Signature scent diffused through hidden systems",
            "Live musician alcove with optimal acoustics for daily performances"
        ],
        materials: [
            { name: "Udaipur Green Marble", description: "Local green marble with distinctive white veining for statement floors" },
            { name: "Beaten Brass", description: "Hand-hammered brass sheets from Jodhpur for ceiling and wall details" },
            { name: "Block-Printed Fabrics", description: "Custom textiles block-printed by traditional Rajasthani artisans" },
            { name: "Carved Sandstone", description: "Intricately carved jali screens providing privacy and pattern" },
            { name: "Antique Doors", description: "Reclaimed haveli doors repurposed as decorative elements" },
            { name: "Mirror Mosaic", description: "Traditional 'thikri' mirror work on select ceiling coffers" }
        ],
        testimonial: {
            text: "Guests consistently mention the lobby in their reviews—they feel transported the moment they step through the doors. Aakar understood that in Udaipur, we're competing with centuries of palace architecture. They created something that honors that heritage while being unmistakably contemporary.",
            author: "Fatima Khan",
            role: "Owner, The Lake Pavilion Hotel"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "Ranked #1 New Hotel in Rajasthan on TripAdvisor within 3 months",
            "Featured in Condé Nast Traveller's Hot List 2024",
            "Average stay duration 40% longer than city average",
            "Supporting 15 local artisan families through design commissions"
        ],
        process: [
            { title: "Competition Audit", description: "We stayed at 12 competing hotels to understand what works, what's overdone, and where opportunities exist." },
            { title: "Journey Mapping", description: "Every guest touchpoint from arrival to departure was designed as a coherent narrative experience." },
            { title: "Artisan Immersion", description: "We spent weeks in local craft villages, commissioning pieces that tell authentic Rajasthani stories." },
            { title: "Soft Launch Refinement", description: "A month of trial guests provided feedback that informed last-minute adjustments before official opening." }
        ]
    },

    "default": {
        area: "3,500 sq. ft.",
        duration: "6 months",
        team: "8 specialists",
        budget: "Premium",
        challenge: "The primary challenge was to create a space that seamlessly blends contemporary aesthetics with functional living requirements. The clients desired an environment that would reflect their sophisticated taste while accommodating their active lifestyle and entertaining needs. Additionally, we needed to work within the existing structural constraints while maximizing natural light and creating distinct zones for various activities.",
        approach: "Our approach began with an extensive discovery phase, where we conducted multiple sessions with the clients to understand their daily routines, preferences, and aspirations for the space. We created detailed mood boards and 3D visualizations to ensure alignment before proceeding. The design strategy focused on creating a cohesive visual language throughout the space while allowing each area to have its unique character.",
        philosophy: "At the heart of this project lies our belief that great design should feel inevitable—as if the space could not have been conceived any other way. We drew inspiration from the interplay of light and shadow in traditional architecture, reinterpreting these elements through a contemporary lens.",
        designElements: [
            "Custom-designed furniture pieces by master craftsmen",
            "Bespoke lighting fixtures for versatile mood settings",
            "Handcrafted wall treatments with artisanal textures",
            "Floor-to-ceiling windows maximizing natural light",
            "Integrated smart home system for seamless control",
            "Acoustic panels ensuring optimal sound quality"
        ],
        materials: [
            { name: "Italian Marble", description: "Premium marble for flooring and accent walls" },
            { name: "European Oak", description: "Sustainable oak for custom millwork" },
            { name: "Brushed Brass", description: "Elegant brass fixtures and hardware" },
            { name: "Belgian Linen", description: "Premium linen for drapery and upholstery" },
            { name: "Venetian Plaster", description: "Traditional plaster for textured walls" },
            { name: "Blackened Steel", description: "Steel frames for modern industrial elements" }
        ],
        testimonial: {
            text: "Aakar Interiors transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. We couldn't be happier with our new space.",
            author: "The Homeowners",
            role: "Project Client"
        },
        galleryImages: [
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
        ],
        highlights: [
            "Award-winning design recognized by industry publications",
            "Sustainable materials and practices throughout",
            "Completed on schedule with exceptional quality",
            "Client satisfaction exceeding all expectations"
        ],
        process: [
            { title: "Discovery & Briefing", description: "Understanding client needs, lifestyle, and aspirations through in-depth consultations." },
            { title: "Concept Development", description: "Creating mood boards, 3D visualizations, and material selections for client approval." },
            { title: "Design Development", description: "Refining every detail from layouts to specifications with precision." },
            { title: "Execution & Delivery", description: "Coordinating with vendors and craftsmen for flawless implementation." }
        ]
    }
};

export function getProjectDetails(slug: string): ProjectDetails {
    return projectDetails[slug] || projectDetails.default;
}
