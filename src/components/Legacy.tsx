import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, BookOpen, Clock, Users, ArrowRight } from "lucide-react";
import { LEGACY_TIMELINE } from "../data";
import legacyImage from "../assets/images/legendary_iron_history_1780767431389.png";

export function Legacy() {
  const [activeEventIndex, setActiveEventIndex] = useState<number>(0);

  const selectedEvent = LEGACY_TIMELINE[activeEventIndex];

  return (
    <section id="legacy" className="relative py-28 bg-[#080808] overflow-hidden border-t border-white/10">
      {/* Absolute floating graphics */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#D4AF37]/3 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-20">
          <span className="text-[#D4AF37] font-mono text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-2">
            ● CHICAGO'S TRUE IRON SANCTUARY
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-[0.95]">
            A HISTORIC <br />
            <span className="stroke-text" style={{ WebkitTextStroke: "1px #D4AF37" }}>LEGACY OF COAL & EFFORT.</span>
          </h2>
          <p className="text-white/60 text-sm font-light max-w-xl leading-relaxed">
            We aren't a venture-backed franchise model designed by consulting firms in fancy offices. We are built by Dave DeYoung & Tom Jager on raw midwestern sweat, community trust, and absolute love for the sport.
          </p>
        </div>

        {/* Master layout panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT PANEL: Narrative and vintage photo frame */}
          <div className="lg:col-span-6 space-y-8">
            <div className="relative group">
              {/* Outer double borders */}
              <div className="absolute -inset-1 border border-[#D4AF37]/30 pointer-events-none transition-all duration-700 group-hover:scale-[1.02]" />
              
              <div className="relative border border-white/10 bg-black overflow-hidden shadow-2xl">
                <img
                  src={legacyImage}
                  alt="Vintage Bodybuilding Era Quads Gym"
                  className="w-full h-[320px] md:h-[400px] object-cover filter grayscale contrast-125 hover:scale-105 duration-700 transition-all"
                  referrerPolicy="no-referrer"
                />
                
                {/* Vintage overlay texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/45" />
                
                {/* Small floating historical badge on photo */}
                <div className="absolute bottom-6 left-6 bg-black border border-white/10 px-4 py-2 flex items-center gap-2.5 backdrop-blur-md">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/80">
                    Broadway Chicago Old School Original
                  </span>
                </div>
              </div>
            </div>

            {/* Quick historical side quote */}
            <blockquote className="border-l-2 border-[#D4AF37] pl-6 space-y-2">
              <p className="text-white/80 italic text-sm md:text-base font-light font-sans leading-relaxed">
                "Tom Jager and Dave DeYoung saved unique steel from facilities around the world, turning Quads into a global museum of lifting science."
              </p>
              <cite className="block text-[9px] font-mono tracking-widest text-[#D4AF37]/70 uppercase">
                • Chicago Tribune Historical Gym Reviews, 1999
              </cite>
            </blockquote>
          </div>

          {/* RIGHT PANEL: Chronological Timeline interactive explorer */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Timeline selector row */}
            <div className="relative flex items-center justify-between gap-4 border-b border-white/10 pb-6 overflow-x-auto">
              {LEGACY_TIMELINE.map((evt, idx) => (
                <button
                  key={evt.year}
                  id={`era-btn-${evt.year}`}
                  onClick={() => setActiveEventIndex(idx)}
                  className={`flex flex-col items-center gap-1.5 px-4 py-2 text-center transition-all duration-300 cursor-pointer group shrink-0 ${
                    activeEventIndex === idx ? "scale-105" : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <span className={`text-[10px] font-mono px-2 py-0.5 font-bold uppercase tracking-wider ${
                    activeEventIndex === idx ? "bg-[#D4AF37] text-black text-[9px]" : "bg-white/5 text-white/40"
                  }`}>
                    {evt.badge}
                  </span>
                  <span className={`text-lg md:text-2xl font-black font-mono tracking-tighter ${
                    activeEventIndex === idx ? "text-[#D4AF37]" : "text-white/40"
                  }`}>
                    {evt.year}
                  </span>
                </button>
              ))}
            </div>

            {/* Timline Event Description Content Panel with animations */}
            <div className="min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedEvent.year}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 bg-white/[0.01]/80 p-8 border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 shrink-0">
                      <Shield className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="text-[9px] font-mono text-[#D4AF37]/70 uppercase tracking-widest leading-none">
                        Historical Milestone
                      </span>
                      <h4 className="text-white text-base font-bold uppercase tracking-wide mt-0.5">
                        {selectedEvent.title}
                      </h4>
                    </div>
                  </div>

                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {selectedEvent.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-white/30 tracking-tight text-[10px]">ERA: {selectedEvent.year} • LAKE VIEW AREA</span>
                    <span className="text-[#D4AF37] font-bold uppercase tracking-wider flex items-center gap-1 text-[10px]">
                      Read Complete Chronicles <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Famous guest profile list */}
            <div className="p-6 bg-black border border-white/10">
              <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block mb-4">
                Legends Who Trained Here
              </span>
              
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Ed Coan", note: "Powerlifting GOAT" },
                  { name: "Ronnie Coleman", note: "8x Mr. Olympia" },
                  { name: "Dorian Yates", note: "6x Mr. Olympia" },
                  { name: "Dave Draper", note: "Classic Golden Era Champion" }
                ].map((leg, i) => (
                  <div key={i} className="bg-white/[0.01]/50 border border-white/10 px-3.5 py-2 text-xs flex flex-col">
                    <span className="text-white font-bold uppercase font-mono tracking-wide">{leg.name}</span>
                    <span className="text-[9px] text-[#D4AF37] font-mono mt-0.5">{leg.note}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
