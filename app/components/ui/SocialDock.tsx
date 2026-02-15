"use client";

import { motion } from "framer-motion";
import { Instagram, Twitch, Youtube } from "lucide-react";
import MagneticButton from "./MagneticButton";

const socialLinks = [
    {
        name: "Instagram",
        icon: Instagram,
        url: "https://www.instagram.com/dylanaesthetics_/",
        color: "hover:text-pink-500",
    },
    {
        name: "TikTok",
        icon: ({ className }: { className?: string }) => (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
        ),
        url: "https://www.tiktok.com/@dylanaesthetics",
        color: "hover:text-cyan-400",
    },
    {
        name: "Snapchat",
        icon: ({ className }: { className?: string }) => (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={className}
            >
                <path d="M12 2c-3.5 0-6 2.5-6 6 0 1.5 1 2.5 1.5 3 .5.5-1 2.5-1.5 3.5-.5 1-2 2-2 3.5 0 2.5 3 4 8 4s8-1.5 8-4c0-1.5-1.5-2.5-2-3.5-.5-1-2-3-1.5-3.5.5-.5 1.5-1.5 1.5-3 0-3.5-2.5-6-6-6z" />
            </svg>
        ),
        url: "https://snapchat.com/t/FakxSHu0",
        color: "hover:text-yellow-400",
    },
];

export default function SocialDock() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50"
        >
            {socialLinks.map((social) => (
                <MagneticButton key={social.name}>
                    <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.6)] hover:scale-110 ${social.color}`}
                        aria-label={social.name}
                    >
                        <social.icon className="w-6 h-6" />
                    </a>
                </MagneticButton>
            ))}
        </motion.div>
    );
}
