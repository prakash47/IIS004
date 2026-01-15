"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, User, Mail, Phone } from "lucide-react";
import { useActionState } from "react";
import { submitConsultation, type ConsultationState } from "@/actions/consultation";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const initialState: ConsultationState = {
    message: "",
    success: false,
};

export function ConsultationModal({ isOpen, onClose }: ModalProps) {
    const [state, formAction, isPending] = useActionState(submitConsultation, initialState);

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="bg-base-100 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="bg-primary/5 p-6 flex justify-between items-center border-b border-white/5">
                        <div>
                            <h3 className="text-xl font-serif font-bold">Book a Consultation</h3>
                            <p className="text-xs opacity-70">Schedule a call with our design experts.</p>
                        </div>
                        <button onClick={onClose} className="btn btn-ghost btn-sm btn-circle">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-6">
                        {state.success ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calendar size={32} />
                                </div>
                                <h4 className="text-xl font-bold mb-2">Request Sent!</h4>
                                <p className="opacity-70 mb-6">We have received your details. Our team will contact you shortly to schedule the appointment.</p>
                                <button onClick={onClose} className="btn btn-primary w-full">Close</button>
                            </div>
                        ) : (
                            <form action={formAction} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label py-1"><span className="label-text text-xs">Name</span></label>
                                        <div className="relative">
                                            <User size={16} className="absolute left-3 top-3 opacity-50" />
                                            <input name="name" type="text" placeholder="John Doe" className="input input-bordered input-sm w-full pl-9" required />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label py-1"><span className="label-text text-xs">Phone</span></label>
                                        <div className="relative">
                                            <Phone size={16} className="absolute left-3 top-3 opacity-50" />
                                            <input name="phone" type="tel" placeholder="+91 98765..." className="input input-bordered input-sm w-full pl-9" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-control">
                                    <label className="label py-1"><span className="label-text text-xs">Email</span></label>
                                    <div className="relative">
                                        <Mail size={16} className="absolute left-3 top-3 opacity-50" />
                                        <input name="email" type="email" placeholder="john@example.com" className="input input-bordered input-sm w-full pl-9" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <label className="label py-1"><span className="label-text text-xs">Preferred Date</span></label>
                                        <div className="relative">
                                            <input name="date" type="date" className="input input-bordered input-sm w-full" />
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label py-1"><span className="label-text text-xs">Time Slot</span></label>
                                        <select name="timeSlot" className="select select-bordered select-sm w-full">
                                            <option>Morning (10am - 1pm)</option>
                                            <option>Afternoon (2pm - 5pm)</option>
                                            <option>Evening (6pm - 8pm)</option>
                                        </select>
                                    </div>
                                </div>

                                <input type="hidden" name="projectType" value="consultation" />

                                <div className="divider my-2"></div>

                                <button type="submit" disabled={isPending} className="btn btn-primary w-full shadow-lg shadow-primary/20">
                                    {isPending ? <span className="loading loading-spinner loading-sm"></span> : "Confirm Booking"}
                                </button>
                            </form>
                        )}
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}
