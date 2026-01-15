"use client";

import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends ImageProps {
    containerClassName?: string;
}

export function AnimatedImage({ containerClassName, className, ...props }: AnimatedImageProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("relative overflow-hidden", containerClassName)}
        >
            <Image
                {...props}
                className={cn("transition-transform duration-700 hover:scale-105", className)}
            />
        </motion.div>
    );
}
