import HeroSection from "./components/sections/HeroSection";
import VisionSection from "./components/sections/VisionSection";
import SocialProofSection from "./components/sections/SocialProofSection";
import SocialDock from "./components/ui/SocialDock";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-gold-500/30 selection:text-gold-400">
      <HeroSection />
      <VisionSection />
      <SocialProofSection />
      <SocialDock />

      {/* Footer / Copyright */}
      <footer className="py-8 text-center text-gray-600 text-sm uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Dylanaesthetics. Alle Rechten Voorbehouden.
      </footer>
    </main>
  );
}
