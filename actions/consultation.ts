"use server";

import { z } from "zod";
import { Resend } from "resend";
import { after } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const ConsultationSchema = z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    projectType: z.enum(["residential", "commercial", "other"]),
    budget: z.string().optional(),
});

export type ConsultationState = {
    errors?: {
        name?: string[];
        email?: string[];
        projectType?: string[];
        budget?: string[];
    };
    message?: string;
    success?: boolean;
};

export async function submitConsultation(
    prevState: ConsultationState,
    formData: FormData
): Promise<ConsultationState> {
    const validatedFields = ConsultationSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        projectType: formData.get("projectType"),
        budget: formData.get("budget"),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Please fix the errors below.",
            success: false,
        };
    }

    const { name, email, projectType, budget } = validatedFields.data;

    // Non-blocking email sending
    after(async () => {
        try {
            await resend.emails.send({
                from: "Aakar Interiors <onboarding@resend.dev>", // Update with verified domain later
                to: ["admin@aakarinteriors.com"], // Placeholder
                subject: `New Consultation Request: ${name}`,
                text: `Project Type: ${projectType}\nBudget: ${budget}\nEmail: ${email}`,
            });
        } catch (error) {
            console.error("Failed to send email:", error);
        }
    });

    return {
        success: true,
        message: "Request received! We will contact you shortly.",
    };
}
