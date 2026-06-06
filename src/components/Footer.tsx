import React from "react";
import { Dumbbell, MapPin, Phone, Clock, Mail, ShieldAlert, Award, ArrowUp } from "lucide-react";

interface FooterProps {
  onJoinClick: () => void;
}

export function Footer({ onJoinClick }: FooterProps) {
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0a0a0a] text-zinc-500 border-t border-white/10 pt-24 pb-12 overflow-hidden">
      
      {/* Absolute background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* RETAIL CLOSING ACTION TRIGGER BANNER */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 mb-16 border-b border-white/10">
        
        {/* Left call to immediate attention */}
        <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
          <span className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase tracking-[0.2em] block">
            ● THE DECISION POINT
          </span>
          <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-white leading-none">
            RE-RACK THE EXCUSES. <br />
            <span className="stroke-text" style={{ WebkitTextStroke: "1px #D4AF37" }}>COMMITTED TO EFFORT.</span>
          </h3>
          <p className="text-white/60 text-xs md:text-sm max-w-xl font-light leading-relaxed">
            Your goals do not care about excuses. Tomorrow's performance is decided by today's action. Choose legendary output with Quads Gym Chicago.
          </p>
        </div>

        {/* Right CTA integration */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end gap-3">
          <button
            id="footer-final-cta-btn"
            onClick={onJoinClick}
            className="w-full sm:w-auto px-10 py-5 bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-xl cursor-pointer hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
          >
            Claim Immediate Membership Pass
          </button>
          
          <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">
            * NO CONTRACT TAXES • CANCEL ANYTIME ZERO RISK *
          </span>
        </div>

      </div>

      {/* Grid containing brand data columns */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
        
        {/* Col 1: Brand details column */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#D4AF37] flex items-center justify-center text-black shrink-0">
              <Dumbbell className="w-5 h-5 fill-black font-black" />
            </div>
            
            <div className="flex flex-col select-none leading-none">
              <span className="text-xl font-black text-white tracking-widest leading-none font-mono">
                QUADS<span className="text-[#D4AF37]">GYM</span>
              </span>
              <span className="text-[8px] font-mono tracking-[0.3em] text-white/40 uppercase mt-0.5">
                CHICAGO MECCA
              </span>
            </div>
          </div>

          <p className="text-white/60 text-xs font-light leading-relaxed font-sans">
            Established on North Broadway in 1977. We maintain Chicago's finest iron sanctuary. No corporate fluff, no nonsense, just purely optimized strength training.
          </p>

          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#D4AF37] font-mono text-xs">★</span>
            ))}
            <span className="text-[9px] text-white/40 font-mono uppercase tracking-widest pl-1 leading-relaxed">
              4.9/5 Rating (Google Vetted)
            </span>
          </div>
        </div>

        {/* Col 2: High fidelity location column */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider">
            Broadway Chicago HQ
          </h4>
          
          <ul className="space-y-3.5 text-xs text-white/60 font-sans font-light">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>
                <strong className="text-white">Quads Gym Chicago:</strong><br />
                3727 N Broadway St,<br />
                Lake View East, Chicago, IL 60613
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>(773) 472-8088</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>desk@quadsgymchicago.com</span>
            </li>
          </ul>
        </div>

        {/* Col 3: Hours columns */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-white text-xs font-bold font-mono uppercase tracking-wider">
            Operational Schedule
          </h4>
          
          <ul className="space-y-3 text-xs text-white/60 font-mono uppercase tracking-wider">
            <li className="flex items-center justify-between">
              <span className="text-white/30">Monday - Friday:</span>
              <span className="text-white font-bold">5:00 AM - 11:00 PM</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-white/30">Saturday:</span>
              <span className="text-white font-bold">7:00 AM - 9:00 PM</span>
            </li>
            <li className="flex items-center justify-between">
              <span className="text-white/30">Sunday:</span>
              <span className="text-white font-bold">7:00 AM - 9:00 PM</span>
            </li>
            <li className="border-t border-white/10 pt-2.5 flex items-center gap-2 text-[10px] text-[#D4AF37]">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>OPEN 365 DAYS A YEAR (INCLUDING HOLIDAYS)</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom disclaimer, back to top and credit links */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest text-center sm:text-left">
          © {new Date().getFullYear()} Quads Gym Chicago. All rights reserved. Voted "The Mecca of the Midwest".
        </div>

        <button
          id="scroll-to-top-btn"
          onClick={handleScrollToTop}
          className="flex items-center gap-1.5 px-4 py-2 bg-black border border-white/10 hover:border-[#D4AF37] text-white/70 hover:text-white text-[10px] font-mono uppercase tracking-widest transition-all cursor-pointer"
        >
          <ArrowUp className="w-3.5 h-3.5 text-[#D4AF37]" /> Back to top platform
        </button>

      </div>
    </footer>
  );
}
