import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell, ShieldCheck, Flame, Star, Zap } from "lucide-react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { SocialProof } from "./components/SocialProof";
import { WhyQuads } from "./components/WhyQuads";
import { EquipmentShowcase } from "./components/EquipmentShowcase";
import { Legacy } from "./components/Legacy";
import { Membership } from "./components/Membership";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { AudioPlayer } from "./components/AudioPlayer";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadPercentage, setLoadPercentage] = useState<number>(0);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState<boolean>(true);

  // Loading animation simulation (0% to 100%)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const interval = setInterval(() => {
      setLoadPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 600); // graceful delay
          return 100;
        }
        return prev + Math.floor(Math.random() * 12 + 4);
      });
    }, 100);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Tracking cursor positions for premium custom cursor halo effects
  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  const handleTriggerJoinScroll = () => {
    const el = document.getElementById("pricing");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* PREMIUM INTRO COVER LOGO ANIMATED LOADER */
          <motion.div
            key="portal-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white"
          >
            {/* Dark moving background particles inside loader */}
            <div className="absolute inset-0 bg-radial-gradient from-zinc-950 via-black to-black" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full" />
            
            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
              {/* Pulsing dumbbell icon with metallic shadows */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-20 w-20 bg-gradient-to-br from-red-600 via-amber-500 to-yellow-400 rounded-2xl flex items-center justify-center text-black shadow-[0_0_50px_rgba(245,158,11,0.25)] border border-white/20"
              >
                <Dumbbell className="w-10 h-10 fill-black font-black" />
              </motion.div>

              <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl font-black font-mono tracking-[0.25em] text-white">
                  QUADS<span className="text-amber-500">GYM</span>
                </h1>
                <p className="text-[10px] md:text-xs font-mono tracking-[0.4em] text-zinc-500 uppercase">
                  CHICAGO MECCA • ACCESS PORTAL LIFTING
                </p>
              </div>

              {/* Progress track */}
              <div className="w-64 h-1 bg-zinc-900 rounded-full overflow-hidden relative border border-white/5 mt-4">
                <motion.div
                  style={{ width: `${Math.min(loadPercentage, 100)}%` }}
                  className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]"
                />
              </div>

              <div className="text-[10px] font-mono tracking-widest text-zinc-400 font-bold uppercase transition-all duration-100">
                LOADING IRON DEPOTS: <span className="text-amber-500 font-black">{Math.min(loadPercentage, 100)}%</span>
              </div>
            </div>

            {/* Bottom historical quote */}
            <div className="absolute bottom-12 text-center text-[9px] font-mono text-zinc-600 tracking-[0.2em] uppercase select-none">
              "WE DON'T CARE IF YOU TRAIN WITH US FOR A MONTH, OR WITH US FOR A LIFETIME."
            </div>
          </motion.div>
        ) : (
          /* CORE PRODUCTION GYM WEB PORTAL EXPERIENCE */
          <motion.div
            key="core-landing-experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-black text-zinc-300 antialiased selection:bg-amber-500 selection:text-black font-sans"
          >
            {/* Custom Mouse Cursor Halo (Desktop Only) */}
            {!isMobile && (
              <motion.div
                animate={{
                  x: cursorPos.x - 24,
                  y: cursorPos.y - 24,
                }}
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                  mass: 0.2
                }}
                className="fixed top-0 left-0 h-12 w-12 border border-amber-500/25 rounded-full pointer-events-none z-50 mix-blend-screen bg-amber-500/5 shadow-[0_0_15px_rgba(245,158,11,0.1)]"
              />
            )}

            {/* Floating Quick Action Badge */}
            <motion.a
              href="#pricing"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="fixed bottom-6 left-6 z-30 bg-zinc-950/90 hover:bg-black border border-zinc-800 text-white hover:text-amber-500 p-4 rounded-2xl flex items-center gap-3 backdrop-blur-xl duration-200 group cursor-pointer shadow-2xl"
            >
              <div className="p-2 bg-amber-500 rounded-xl text-black shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <Flame className="w-4 h-4 animate-pulse" />
              </div>
              <div className="text-left font-sans">
                <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400 group-hover:text-amber-500 transition-colors">
                  Day Pass Special
                </div>
                <div className="text-xs font-black uppercase text-white leading-tight">
                  Train Today - Just $25
                </div>
              </div>
            </motion.a>

            {/* Audio Loop Simulator Controller */}
            <AudioPlayer />

            {/* Sticky Navigation headers */}
            <Navigation onJoinClick={handleTriggerJoinScroll} />

            {/* Hero Banner Grid */}
            <Hero onJoinClick={handleTriggerJoinScroll} onTourClick={handleTriggerJoinScroll} />

            {/* Vetted Social Proof Wall */}
            <SocialProof />

            {/* Facilities core pillars */}
            <WhyQuads />

            {/* Interactive Sandbox & Dumbbell tilt */}
            <EquipmentShowcase />

            {/* Legacies timelines of Chicago Bodybuilding */}
            <Legacy />

            {/* Pricings & comparison list */}
            <Membership />

            {/* FAQ objection busters */}
            <FAQ />

            {/* Conversion closings and bottom links */}
            <Footer onJoinClick={handleTriggerJoinScroll} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
