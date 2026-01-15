export type ProjectCategory = "residential" | "commercial";

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    image: string;
    description: string;
    slug: string;
    location?: string;
    year?: string;
}
