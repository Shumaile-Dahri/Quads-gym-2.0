import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Dumbbell, Shield, ChevronDown, Award, Star } from "lucide-react";
import heroImage from "../assets/images/heavy_iron_epic_gym_1780767389595.png";

interface HeroProps {
  onJoinClick: () => void;
  onTourClick: () => void;
}

export function Hero({ onJoinClick, onTourClick }: HeroProps) {
  const [particleCount, setParticleCount] = useState<number>(30);
  const [currentStatIndex, setCurrentStatIndex] = useState<number>(0);

  const stats = [
    { label: "IRON RESERVE", value: "35,000+ LBS" },
    { label: "CHAMPIONS BUILT", value: "71+ TITLES" },
    { label: "SQUARE FOOTAGE", value: "40,000 SQ FT" },
    { label: "EGO TOLERANCE", value: "ZERO PERCENT" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <section id="hero" className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-between pt-24 pb-12">
      {/* Cinematic Background Image with slow continuous breathing scale/zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 1.01],
            rotate: [0, 0.5, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={heroImage}
            alt="Quads Gym Epic Interior"
            className="w-full h-full object-cover filtering brightness-[0.38] contrast-[1.12]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Cinematic dramatic gradients overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90" />
        {/* Dynamic laser lightning flare simulation (pulsing dark-amber/red light accent) */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[35vh] bg-amber-500/10 blur-[180px] rounded-full mix-blend-screen animate-pulse pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* Floating Sparkle/Chalk Dust Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        {[...Array(particleCount)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight + window.innerHeight,
              opacity: Math.random() * 0.4 + 0.1,
              scale: Math.random() * 2 + 1
            }}
            animate={{
              y: -100,
              x: `calc(100% * ${Math.random()} + ${Math.sin(i) * 50}px)`,
              opacity: [0, 0.4, 0.3, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-amber-400 rounded-full blur-[0.5px]"
          />
        ))}
      </div>

      {/* Hero Core Content Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex-grow flex flex-col justify-center gap-10 mt-12">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="self-start flex items-center gap-2 bg-zinc-950/90 border border-amber-500/50 px-4 py-2 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.15)] backdrop-blur-md"
        >
          <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.3em] text-[#D4AF37] uppercase">
            THE WORLD'S MOST LEGENDARY TRAINING GROUND • EST. 1977
          </span>
        </motion.div>

        {/* Hero Copy (Massive Luxury Typography) */}
        <div className="space-y-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-[88px] leading-[0.85] font-black italic uppercase tracking-tighter flex flex-col pt-4"
          >
            <span className="text-white">WHERE LIFTING</span>
            <span className="stroke-text" style={{ WebkitTextStroke: "1px #D4AF37" }}>BECOMES LEGENDARY.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="text-sm md:text-base text-white/60 font-light tracking-wide max-w-xl leading-relaxed"
          >
            No fluorescent neon trends, no influencer photo booths. Just 40,000 square feet of world-class steel, zero-attitude comradery, and Chicago's most historic iron legacy.
          </motion.p>
        </div>

        {/* Authentic Multi-CTA buttons + magnetic interactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 self-start w-full sm:w-auto"
        >
          <button
            id="hero-join-now-btn"
            onClick={onJoinClick}
            className="bg-[#D4AF37] hover:bg-white hover:text-black text-black px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Dumbbell className="w-4 h-4 text-black shrink-0" />
            Claim Your Legacy
          </button>

          <button
            id="hero-book-tour-btn"
            onClick={onTourClick}
            className="bg-white/5 border border-white/10 hover:border-white/30 backdrop-blur-sm text-white px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Shield className="w-4 h-4 text-zinc-400 shrink-0" />
            View Equipment Vault
          </button>
        </motion.div>
      </div>

      {/* Cinematic Horizontal Running Footer Ribbon */}
      <div className="w-full relative z-10 border-y border-zinc-900 bg-zinc-950/60 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex text-amber-500 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-xs md:text-sm font-semibold tracking-wider text-zinc-300">
              4.9/5 Rating (Google & Yelp Reviews)
            </span>
          </div>

          {/* Dynamic Cycling Stats Grid */}
          <div className="flex items-center gap-6 overflow-hidden min-w-[200px] h-8 relative justify-end">
            <motion.div
              key={currentStatIndex}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-widest text-zinc-500">
                {stats[currentStatIndex].label}
              </span>
              <span className="text-lg md:text-xl font-black font-mono tracking-tighter text-amber-500">
                {stats[currentStatIndex].value}
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Downward scroll guide arrow button */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity duration-300 z-10">
        <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">EXPLORE TEMPLE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-amber-500" />
        </motion.div>
      </div>
    </section>
  );
}
