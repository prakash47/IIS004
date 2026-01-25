"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

interface CountingNumberProps {
    value: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    className?: string;
    decimals?: number;
}

export function CountingNumber({
    value,
    suffix = "",
    prefix = "",
    duration = 2,
    className = "",
    decimals = 0
}: CountingNumberProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    const spring = useSpring(0, {
        damping: 30,
        stiffness: 100,
        duration: duration * 1000
    });

    const display = useTransform(spring, (current) =>
        decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
    );

    const [displayValue, setDisplayValue] = useState("0");

    useEffect(() => {
        if (isInView && !hasAnimated) {
            spring.set(value);
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated, spring, value]);

    useEffect(() => {
        const unsubscribe = display.on("change", (v) => {
            setDisplayValue(v);
        });
        return unsubscribe;
    }, [display]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {prefix}{displayValue}{suffix}
        </motion.span>
    );
}
