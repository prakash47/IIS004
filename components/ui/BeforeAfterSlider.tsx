"use client";

import { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    alt: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    // Fallback images if ones provided fail (using reliable placeholders)
    // But ideally we fix the props passed in.

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    };


    return (
        <div
            className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none bg-base-300"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* After Image (Background) */}
            <div className="relative w-full h-full">
                <Image
                    src={afterImage}
                    alt={`After ${alt}`}
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <Image
                    src={beforeImage}
                    alt={`Before ${alt}`}
                    fill
                    className="object-cover"
                    draggable={false}
                />
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center -ml-0.5 z-20"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-black">
                    <MoveHorizontal size={16} />
                </div>
            </div>

            {/* Labels - Added z-index to stay above images */}
            <div className="absolute top-4 left-4 z-30 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium border border-white/10">Before</div>
            <div className="absolute top-4 right-4 z-30 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium border border-white/10">After</div>
        </div>
    );
}
