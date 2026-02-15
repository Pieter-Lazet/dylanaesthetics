"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function VisionSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

    return (
        <section ref={containerRef} className="py-24 md:py-40 overflow-hidden bg-[#050505]">

            {/* Marquee Text */}
            <div className="relative w-full mb-20 pointer-events-none select-none">
                <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-8 mb-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="text-8xl md:text-[10rem] font-black uppercase text-white/5 tracking-tighter">
                            New wave
                        </span>
                    ))}
                </motion.div>
                <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-8">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <span key={i} className="text-8xl md:text-[10rem] font-black uppercase text-transparent stroke-text tracking-tighter" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.05)" }}>
                            Geen Grenzen
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Bio Content */}
            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="inline-block mb-6 px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm tracking-widest uppercase">
                        De Visie
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold font-sans mb-8 leading-tight text-balance">
                        Herdefinieer wat het betekent om <span className="text-gold-500">esthetisch</span> te zijn.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-balance">
                        Het gaat niet alleen om de fysiek. Het gaat om de mindset. Het harde werk. Het onverbiddelijke streven naar perfectie in elk aspect van het leven.
                        Sluit je aan bij de beweging en verhoog je standaard.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
