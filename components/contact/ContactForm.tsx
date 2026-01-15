"use client";

import { useActionState } from "react";
import { submitConsultation, type ConsultationState } from "@/actions/consultation";
import { Loader2 } from "lucide-react";

const initialState: ConsultationState = {
    message: "",
    success: false,
};

export function ContactForm() {
    const [state, formAction, isPending] = useActionState(submitConsultation, initialState);

    return (
        <form action={formAction} className="flex flex-col gap-4 w-full max-w-md mx-auto p-6 bg-base-200 rounded-xl shadow-xl border border-white/10 glass">
            <h2 className="text-2xl font-bold text-center mb-4 font-serif">Request Consultation</h2>

            {/* Name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered w-full"
                    required
                />
                {state?.errors?.name && <p className="text-error text-sm mt-1">{state.errors.name[0]}</p>}
            </div>

            {/* Email */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="input input-bordered w-full"
                    required
                />
                {state?.errors?.email && <p className="text-error text-sm mt-1">{state.errors.email[0]}</p>}
            </div>

            {/* Project Type */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Project Type</span>
                </label>
                <select name="projectType" className="select select-bordered w-full" defaultValue="residential">
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="other">Other</option>
                </select>
            </div>

            {/* Budget */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Budget (Optional)</span>
                </label>
                <input
                    name="budget"
                    type="text"
                    placeholder="$5,000 - $10,000"
                    className="input input-bordered w-full"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isPending}
                className="btn btn-primary w-full mt-4"
            >
                {isPending ? <Loader2 className="animate-spin" /> : "Submit Request"}
            </button>

            {/* Success/Error Message */}
            {state?.message && (
                <div role="alert" className={`alert ${state.success ? "alert-success" : "alert-error"} mt-4`}>
                    <span>{state.message}</span>
                </div>
            )}
        </form>
    );
}
