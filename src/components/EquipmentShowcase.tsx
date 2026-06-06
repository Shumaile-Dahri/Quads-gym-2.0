import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Dumbbell, Hammer, Award, Plus, Minus, Info } from "lucide-react";
import { EQUIPMENT_CATALOG } from "../data";
import showcaseImage from "../assets/images/metal_plates_aesthetic_1780767411036.png";

export function EquipmentShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [barbellPlates, setBarbellPlates] = useState<number>(2); // starting at 135 lbs (2 plates of 45)

  // Floating Dumbbell Mouse Parallax Setup
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for high performance cursor reaction
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-200, 200], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-200, 200], [-15, 15]), springConfig);
  const floatX = useSpring(useTransform(x, [-200, 200], [-20, 20]), springConfig);
  const floatY = useSpring(useTransform(y, [-200, 200], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Barbell weight compiler
  const baseBarPercent = 45;
  const plateWeight = 45;
  const currentTotalWeight = baseBarPercent + barbellPlates * plateWeight * 2;

  const handleAddPlates = () => {
    if (barbellPlates < 10) {
      setBarbellPlates((prev) => prev + 1);
    }
  };

  const handleRemovePlates = () => {
    if (barbellPlates > 0) {
      setBarbellPlates((prev) => prev - 1);
    }
  };

  const getWeightStatus = (w: number) => {
    if (w <= 45) return { text: "Barbell Bare Steel", color: "text-zinc-500", desc: "Warmup. Checking wrist alignment." };
    if (w <= 135) return { text: "Common Athlete Press", color: "text-blue-400", desc: "Solid conditioning standard. Focus." };
    if (w <= 225) return { text: "Serious Lifter Standard", color: "text-emerald-400", desc: "The benchmark of a dedicated Quads routine." };
    if (w <= 315) return { text: "Powerlifting Sentinel Status", color: "text-amber-500 font-bold", desc: "Elite output. Muscle fibers fully firing." };
    if (w <= 405) return { text: "THE GIANTS PREP STAGE", color: "text-red-500 font-bold animate-pulse", desc: "Chicago Heavyweights gather. Sweet sweet steel." };
    return { text: "ED COAN PLATFORM LEGEND", color: "text-red-600 font-extrabold underline animate-pulse", desc: "Absolute raw human supremacy. Earth starts to vibrate." };
  };

  const status = getWeightStatus(currentTotalWeight);

  // Categories
  const categories = [
    { id: "all", label: "Show All Iron" },
    { id: "Legs", label: "Leg Density" },
    { id: "Free Weights", label: "Dumbbells & Bars" },
    { id: "Chest", label: "Plate Loaded Presses" },
    { id: "Rare Vintage", label: "Vintage Biomechanics" }
  ];

  const filteredEquipment = EQUIPMENT_CATALOG.filter((eq) => {
    if (activeCategory === "all") return true;
    return eq.category === activeCategory;
  });

  return (
    <section id="equipment" className="relative py-28 bg-black overflow-hidden border-t border-zinc-900">
      {/* Visual background texture */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-zinc-950/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-[#D4AF37] font-mono text-[10px] font-bold tracking-[0.4em] uppercase flex items-center justify-center gap-2">
            ● ENGINEERED FOR ANATOMY
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-[0.95]">
            THE BIOMECHANICAL <br />
            <span className="stroke-text" style={{ WebkitTextStroke: "1px #D4AF37" }}>MUSEUM OF POWER.</span>
          </h2>
          <p className="text-white/60 text-sm font-light max-w-xl mx-auto leading-relaxed">
            At Quads Gym, we don't buy generic single-brand catalog bundles. Every legacy item, from heavy Pit Sharks to original Nautilus pullovers, is curated for perfect muscle load.
          </p>
        </div>

        {/* Outer Split: Left Interactive Playground, Right Dynamic Catalog */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Interactive 3D Playground & Barbell Loader */}
          <div className="lg:col-span-6 space-y-10">
            
            {/* Box 1: 3D Floated Dumbbell with Cursor Parallax */}
            <div 
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative p-8 border border-white/10 bg-white/[0.01] backdrop-blur-md h-[330px] flex flex-col justify-between overflow-hidden cursor-crosshair group shadow-xl"
            >
              {/* Radial gradient background that responds to mouse */}
              <div className="absolute inset-0 bg-radial-gradient from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none" />

              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]/70 uppercase">
                  Interactive Depth Sandbox
                </span>
                <span className="bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 border border-[#D4AF37]/20 text-[9px] font-mono font-bold uppercase tracking-wider animate-pulse">
                  Slide Mouse Over Box
                </span>
              </div>

              {/* 3D Realistic Dumbbell Visual Render */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    translateX: floatX,
                    translateY: floatY,
                  }}
                  className="relative w-64 h-24 flex items-center justify-center transition-all duration-100"
                >
                  {/* Steel Shaft center bar with high metallic gloss */}
                  <div className="absolute w-44 h-4 bg-gradient-to-r from-zinc-700 via-zinc-100 to-zinc-700 rounded-lg shadow-inner border-y border-white/10" />
                  
                  {/* Left Chrome Knurling Knots */}
                  <div className="absolute left-16 w-32 h-5 bg-zinc-400 opacity-65 border-x border-zinc-600 rounded-sm" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #333 2px, #333 4px)" }} />
                  
                  {/* Left plates stacks */}
                  <div className="absolute left-6 w-10 h-20 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-950 border border-zinc-800 rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.8)]" />
                  <div className="absolute left-10 w-6 h-22 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-950 border border-zinc-800 rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.8)]" />
                  <div className="absolute left-12 w-6 h-24 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-900 border border-zinc-800 rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.8)]" />

                  {/* Right plates stacks */}
                  <div className="absolute right-6 w-10 h-20 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-900 border border-zinc-800 rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.8)]" />
                  <div className="absolute right-10 w-6 h-22 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-900 border border-zinc-800 rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.8)]" />
                  <div className="absolute right-12 w-6 h-24 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-950 border border-zinc-800 rounded-md shadow-[0_5px_15px_rgba(0,0,0,0.8)]" />

                  {/* Center weight engraving text badge */}
                  <div className="absolute left-12 h-6 w-6 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center font-mono text-[9px] text-zinc-500 font-bold">LBS</div>
                  <div className="absolute right-12 h-6 w-6 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center font-mono text-[9px] text-zinc-500 font-bold">150</div>
                </motion.div>
              </div>

              {/* Responsive Shadow underneath that scales conversely to position */}
              <motion.div
                style={{
                  translateX: useTransform(floatX, (v) => -v * 0.4),
                  translateY: useTransform(floatY, (v) => -v * 0.4),
                  scale: useTransform(rotateX, (v) => 1 - Math.abs(v) / 100)
                }}
                className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-4 bg-black/60 filter blur-md rounded-full pointer-events-none"
              />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm font-black text-white uppercase tracking-tight">
                  Quads Signature Dumbbells
                </span>
                <span className="text-zinc-500 text-[11px] font-mono">
                  Up to 200lb calibrated dumbbells, hand-tightened
                </span>
              </div>
            </div>

            {/* Box 2: Barbell Plate Loader Simulation */}
            <div className="p-8 border border-white/10 bg-black/60 shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white uppercase flex items-center gap-2 tracking-wider">
                    <Plus className="w-4 h-4 text-[#D4AF37]" />
                    Broadway Platform Plate Loader
                  </h3>
                  <p className="text-white/40 text-xs font-light">
                    Load up plates to test absolute structural alignment.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-mono text-white/40 uppercase">Current Load</div>
                  <div className="text-2xl font-black font-mono text-[#D4AF37]">
                    {currentTotalWeight} <span className="text-xs text-white/50 uppercase font-bold">LBS</span>
                  </div>
                </div>
              </div>

              {/* Barbell Visual Representation with plates stacked */}
              <div className="h-28 bg-white/[0.01] border border-white/10 flex items-center justify-center relative overflow-hidden px-4">
                {/* Horizontal Barbell Shaft */}
                <div className="absolute w-11/12 h-2.5 bg-gradient-to-b from-zinc-500 via-zinc-300 to-zinc-600 rounded-full" />
                <div className="absolute w-5/12 h-3.5 bg-gradient-to-r from-zinc-500 via-zinc-100 to-zinc-600 border border-zinc-700 right-[29%] rounded-sm" />
                <div className="absolute w-5/12 h-3.5 bg-gradient-to-l from-zinc-500 via-zinc-100 to-zinc-600 border border-zinc-700 left-[29%] rounded-sm" />
                
                {/* Visual barbell knurling rings */}
                <div className="absolute w-16 h-3 bg-zinc-900 opacity-40 left-[45%]" />

                {/* PLATES STACKED LEFT SIDE */}
                <div className="absolute left-[33%] -translate-x-full h-20 flex gap-0.5 items-center flex-row-reverse">
                  {[...Array(barbellPlates)].map((_, i) => (
                    <motion.div
                      key={`l-plate-${i}`}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      className="w-4 h-20 bg-zinc-950 border-r-2 border-zinc-700 relative flex items-center justify-center rounded-[3px] shadow-lg"
                    >
                      <div className="absolute h-5 w-px bg-amber-500 opacity-60" />
                      <div className="text-[7px] text-zinc-600 uppercase font-mono tracking-tighter rotate-90 select-none">45LB</div>
                    </motion.div>
                  ))}
                </div>

                {/* PLATES STACKED RIGHT SIDE */}
                <div className="absolute right-[33%] translate-x-full h-20 flex gap-0.5 items-center flex-row">
                  {[...Array(barbellPlates)].map((_, i) => (
                    <motion.div
                      key={`r-plate-${i}`}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      className="w-4 h-20 bg-zinc-950 border-l-2 border-zinc-700 relative flex items-center justify-center rounded-[3px] shadow-lg"
                    >
                      <div className="absolute h-5 w-px bg-amber-500 opacity-60" />
                      <div className="text-[7px] text-zinc-600 uppercase font-mono tracking-tighter rotate-90 select-none">45LB</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Status & Loader controllers */}
              <div className="bg-black border border-white/10 p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className={`text-xs uppercase font-mono tracking-[0.1em] ${status.color}`}>
                    {status.text}
                  </div>
                  <div className="text-white/60 text-xs font-light">
                    {status.desc}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-center sm:self-auto">
                  <button
                    id="remove-plate-btn"
                    onClick={handleRemovePlates}
                    disabled={barbellPlates === 0}
                    className="p-3 bg-black hover:bg-white/5 border border-white/10 disabled:opacity-30 disabled:pointer-events-none text-white transition-all cursor-pointer"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <button
                    id="add-plate-btn"
                    onClick={handleAddPlates}
                    disabled={barbellPlates >= 10}
                    className="p-3 bg-[#D4AF37] hover:bg-white text-black transition-all disabled:opacity-35 disabled:bg-zinc-800 disabled:text-zinc-500 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Equipment Catalog Selector */}
          <div className="lg:col-span-6 space-y-8">
            {/* Quick selectors row */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  id={`cat-btn-${c.id}`}
                  onClick={() => setActiveCategory(c.id)}
                  className={`px-4 py-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer border ${
                    activeCategory === c.id
                      ? "bg-[#D4AF37] text-black font-bold border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                      : "bg-black hover:bg-zinc-900 text-zinc-400 hover:text-white border-white/10"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* List block */}
            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredEquipment.map((eq, index) => (
                <motion.div
                  key={eq.id}
                  layoutId={eq.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 border border-white/10 bg-white/[0.01]/80 hover:border-[#D4AF37]/50 transition-all duration-300 relative group flex gap-5"
                >
                  <div className="p-3 h-12 w-12 bg-black border border-white/10 flex items-center justify-center shrink-0 text-[#D4AF37]">
                    <Hammer className="w-5 h-5" />
                  </div>
                  
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <h4 className="text-white text-base font-bold uppercase tracking-wide">
                        {eq.name}
                      </h4>
                      <span className="text-[9px] bg-black border border-white/10 text-white/50 font-mono px-2 py-0.5 rounded uppercase">
                        {eq.brand}
                      </span>
                    </div>

                    <p className="text-white/60 text-xs font-light leading-relaxed">
                      {eq.description}
                    </p>

                    <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-1 text-[10px] font-mono text-white/40">
                        <Info className="w-3 h-3 text-[#D4AF37]" />
                        <span>Volume: {eq.quantity}</span>
                      </div>
                      
                      <div className="text-[10px] font-mono text-[#D4AF37] italic">
                        {eq.notableDetail}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Aesthetic CTA Promo banner */}
            <div className="p-5 bg-black border border-white/15 text-xs text-white/60 flex items-center gap-4">
              <span className="p-3 bg-white/[0.02] border border-white/15 text-[#D4AF37] shrink-0">
                <Award className="w-5 h-5" />
              </span>
              <p className="font-sans leading-relaxed font-light">
                <strong className="text-[#D4AF37] uppercase font-mono">Chicago Bodybuilding Fact:</strong> 7 out of 10 competitive Midwest powerlifters train at Quads prior to events just to use the legendary calibrated Nebula hacks and welded Hammer machinery.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
