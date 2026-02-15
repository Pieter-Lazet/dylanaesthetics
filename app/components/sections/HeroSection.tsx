"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function HeroSection() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image / Parallax */}
            <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-[#050505] z-10" />
                <Image
                    src="/api/placeholder/1920/1080"
                    alt="Gym Background"
                    fill
                    className="object-cover opacity-50 grayscale"
                    priority
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-7xl mx-auto">

                {/* Main Image (Influencer) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8 relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_-12px_rgba(255,215,0,0.3)]"
                >
                    <Image
                        src="/hero-image.png"
                        alt="Dylanaesthetics"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase"
                >
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500">
                        Dylan
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 animate-gradient-x bg-[length:200%_auto]">
                        Aesthetics
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-6 text-xl md:text-2xl font-light tracking-[0.2em] text-gray-300 uppercase"
                >
                    Lets start a new wave <span className="text-gold-400">💪</span>
                </motion.p>
            </div>
        </section>
    );
}
