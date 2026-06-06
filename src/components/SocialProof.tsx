import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Flame, Award, Dumbbell, ShieldAlert, Quote } from "lucide-react";
import { KEY_REVIEWS } from "../data";

export function SocialProof() {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const tags = [
    { id: "all", label: "All Stories" },
    { id: "bodybuilder", label: "Bodybuilding" },
    { id: "powerlifter", label: "Powerlifting" },
    { id: "everyday", label: "Ego-Free" },
    { id: "visitor", label: "Visitors" }
  ];

  const filteredReviews = KEY_REVIEWS.filter((rev) => {
    if (selectedTag === "all") return true;
    if (selectedTag === "bodybuilder") return rev.role.toLowerCase().includes("bodybuilder") || rev.role.toLowerCase().includes("competitor");
    if (selectedTag === "powerlifter") return rev.role.toLowerCase().includes("powerlifter") || rev.role.toLowerCase().includes("weightlifter");
    if (selectedTag === "everyday") return rev.role.toLowerCase().includes("everyday") || rev.role.toLowerCase().includes("athlete");
    if (selectedTag === "visitor") return rev.role.toLowerCase().includes("visitor") || rev.role.toLowerCase().includes("international");
    return true;
  });

  return (
    <section id="reviews" className="relative py-24 bg-black overflow-hidden border-t border-zinc-900">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="space-y-4 text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-mono text-[10px] font-bold tracking-[0.4em] uppercase flex items-center justify-center gap-2">
            ● VETTED BY CHAMPIONS
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter leading-[0.95] text-white">
            AUTHENTIC NO-NS <br />
            <span className="stroke-text animate-pulse" style={{ WebkitTextStroke: "1px #D4AF37" }}>COMMUNITY DIRECTIVE.</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm font-light leading-relaxed">
            Our reputation is built from physical work, not marketing budgets. Read the unfiltered experiences of people who call Quads Gym home.
          </p>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tags.map((t) => (
            <button
              key={t.id}
              id={`tag-filter-${t.id}`}
              onClick={() => setSelectedTag(t.id)}
              className={`px-5 py-2.5 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-200 cursor-pointer border ${
                selectedTag === t.id
                  ? "bg-[#D4AF37] text-black font-semibold border-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                  : "bg-black text-zinc-400 hover:text-white border-white/10 hover:border-white/30"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid Display of Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((rev, index) => (
              <motion.div
                layout
                key={rev.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.5)" }}
                className="relative flex flex-col justify-between p-8 border border-white/15 bg-white/[0.02] backdrop-blur-md transition-all duration-300 shadow-xl overflow-hidden group"
              >
                {/* Accent glow on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 blur-[60px] rounded-full group-hover:bg-[#D4AF37]/10 transition-all duration-500" />

                {/* Stars and Role */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-500 gap-0.5">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    {/* Badge */}
                    <span className="text-[9px] border border-white/10 text-white/50 px-2 py-0.5 font-mono uppercase tracking-[0.2em] text-right">
                      VERIFIED LIFE
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed italic font-serif">
                    "{rev.text}"
                  </p>
                </div>

                {/* Bottom User Profile */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest">
                      {rev.author}
                    </h4>
                    <p className="text-[#D4AF37] font-mono text-[9px] uppercase tracking-widest mt-1">
                      {rev.role}
                    </p>
                  </div>
                  <div className="text-right text-[9px] font-mono text-white/40">
                    <div>XP: {rev.yearsOfTraining}</div>
                    <div>Age: {rev.age}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* High energy infinite moving quote ticker at the bottom */}
        <div className="mt-20 border-y border-zinc-900/60 py-6 overflow-hidden relative w-full flex">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: "-50%" }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity
            }}
            className="flex gap-16 uppercase text-3xl md:text-5xl font-black text-zinc-900/50 whitespace-nowrap select-none tracking-tighter shrink-0"
          >
            <span>THE MECCA OF THE MIDWEST</span>
            <span className="text-amber-500/20">•</span>
            <span>LAND OF THE GIANTS</span>
            <span className="text-amber-500/20">•</span>
            <span>ZERO ATTITUDE POLICY</span>
            <span className="text-amber-500/20">•</span>
            <span>OPEN 365 DAYS</span>
            <span className="text-amber-500/20">•</span>
            <span>NO BS HIGH PRESSURE CONTRACTS</span>
            <span className="text-amber-500/20">•</span>
            {/* Repeat for endless flow */}
            <span>THE MECCA OF THE MIDWEST</span>
            <span className="text-amber-500/20">•</span>
            <span>LAND OF THE GIANTS</span>
            <span className="text-amber-500/20">•</span>
            <span>ZERO ATTITUDE POLICY</span>
            <span className="text-amber-500/20">•</span>
            <span>OPEN 365 DAYS</span>
            <span className="text-amber-500/20">•</span>
            <span>NO BS HIGH PRESSURE CONTRACTS</span>
            <span className="text-amber-500/20">•</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
