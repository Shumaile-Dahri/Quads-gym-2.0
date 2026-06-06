import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronRight, MessageSquare, Award } from "lucide-react";
import { FAQ_DATA } from "../data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="relative py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/10">
      {/* Absolute decorative glow background */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#D4AF37] font-mono text-[10px] font-bold tracking-[0.4em] uppercase flex items-center justify-center gap-2">
            ● CLEARING ALL BARRIERS
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-[0.95]">
            OBJECTION BUSTERS <br />
            <span className="stroke-text" style={{ WebkitTextStroke: "1px #D4AF37" }}>& IRON SPECS.</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm font-light pt-1 leading-relaxed">
            Questions, fears, or doubts? We address common objections directly with total old-school transparency.
          </p>
        </div>

        {/* Collapsible FAQ Accordion Queue */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-black border-[#D4AF37]/70 shadow-[0_0_20px_rgba(212,175,55,0.05)]"
                    : "bg-white/[0.01]/60 border-white/10 hover:border-white/20"
                }`}
              >
                {/* Header click bar */}
                <button
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className="p-2.5 h-10 w-10 bg-black border border-white/10 text-white/50 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-4 h-4 text-[#D4AF37]" />
                    </span>
                    <h3 className="text-white text-sm md:text-base font-bold uppercase tracking-wide font-sans">
                      {faq.question}
                    </h3>
                  </div>

                  {/* Turning Chevron */}
                  <div
                    className={`h-8 w-8 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white transition-all duration-300 ${
                      isOpen ? "rotate-90 text-[#D4AF37] border-[#D4AF37]/30" : ""
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated Collapsible answer panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 text-[#D4AF37] text-xs md:text-sm leading-relaxed font-sans border-t border-white/10 pl-[72px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Dynamic objection buster summary banner */}
        <div className="mt-16 p-8 bg-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/5 blur-[40px] rounded-full" />
          
          <div className="space-y-1.5 relative z-10 text-center md:text-left">
            <span className="text-[#D4AF37] font-mono text-[9px] font-bold uppercase tracking-[0.2em] block">
              ● STALLING OR DELAYING?
            </span>
            <h4 className="text-white text-lg font-bold uppercase tracking-wide font-sans">
              Ready to see the steel yourself?
            </h4>
            <p className="text-white/60 text-xs font-light">
              Day passes are just $25 with absolute zero pressure tactics of corporate chains.
            </p>
          </div>

          <a
            id="faq-buy-pass-cta"
            href="#pricing"
            className="px-6 py-3.5 bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer"
          >
            Claim Single Visit Day Pass
          </a>
        </div>

      </div>
    </section>
  );
}
