"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const contentPosts = [
    { id: 1, views: "1.2M", type: "TikTok", src: "/videos/1.mp4", url: "https://www.tiktok.com/@dylanaesthetics/video/7607005605064101152" },
    { id: 2, views: "850K", type: "Reel", src: "/videos/2.mp4", url: "https://www.instagram.com/p/DUyBSmljPx6/" },
    { id: 3, views: "2.5M", type: "TikTok", src: "/videos/3.mp4", url: "https://www.tiktok.com/@dylanaesthetics/video/7606658874942180641" },
];

export default function SocialProofSection() {
    return (
        <section className="py-24 pb-40 bg-[#050505]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                        Nieuwste <span className="text-gold-500">Content</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {contentPosts.map((post, i) => (
                        <motion.a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.6 }}
                            className="group relative aspect-[9/16] bg-neutral-900/50 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-500/50 transition-colors duration-500 block"
                        >
                            {/* Video Player */}
                            <div className="absolute inset-0 z-0">
                                <video
                                    src={post.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                            {/* Play Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="absolute bottom-6 left-6 right-6 z-20">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                                        {post.type}
                                    </span>
                                    <span className="text-gold-400 font-bold flex items-center gap-1">
                                        <svg className="w-5 h-5 drop-shadow-[0_0_5px_rgba(255,215,0,0.5)]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
