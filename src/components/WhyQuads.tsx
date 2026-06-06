import React from "react";
import { motion } from "motion/react";
import { Hammer, Users2, ShieldAlert, Zap, Calendar, Award, CheckSquare } from "lucide-react";

export function WhyQuads() {
  const pillars = [
    {
      icon: <Hammer className="w-8 h-8 text-[#D4AF37]" />,
      title: "EXTREME EQUIPMENT DENSITY",
      desc: "An incredible 40,000 square foot library of physical equipment. We don't just own a few leg presses—we have over 100 distinct legacy and biomechanical leg machines from Nebulas, Cybex, and Icarian.",
      stat: "100+ Legacy Leg Machines",
      detail: "More lower-body training options than any facility in mid-America."
    },
    {
      icon: <Users2 className="w-8 h-8 text-[#D4AF37]" />,
      title: "ZERO-ATTITUDE BROTHERHOOD",
      desc: "Our legendary zero-attitude standard is strictly upheld. We exist to build power, not egos. Beginner trainers, collegiate athletes, and Olympic lifters spot and motivate each other as equals.",
      stat: "100% Ego-Free Standard",
      detail: "No gym cameras blocking traffic. Just supportive community support."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#D4AF37]" />,
      title: "SWEET CLASSIC STAINLESS IRON",
      desc: "Deep-dish Ivanko & York weights. Real iron clanging, metal chains, magnesium chalk baskets, and 5 complete lines of dumbells starting from 3 lbs all the way to 200 lbs pairs.",
      stat: "5 Dumbbell Lines (Up to 200 lbs)",
      detail: "Proper industrial tools to guarantee linear muscular adaptations."
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#D4AF37]" />,
      title: "365 DAYS UNMATCHED FREEDOM",
      desc: "Open every single calendar day of the year, including holidays. No hidden registration fees, no sneaky key card rates, and zero tricky cancellation clauses. Clean, pure fitness truth.",
      stat: "Open 365 Days",
      detail: "Flexible monthly cancel-anytime plans designed for people, not lawyers."
    }
  ];

  return (
    <section id="why" className="relative py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/10">
      {/* Decorative vertical divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#D4AF37] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[#D4AF37] font-mono text-[10px] font-bold tracking-[0.4em] uppercase flex items-center gap-2">
              ● THE QUAD RESISTANCE STANDARD
            </span>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-[0.95]">
              SCRAP THE FLUFF. <br />
              <span className="stroke-text" style={{ WebkitTextStroke: "1px #D4AF37" }}>CHAMPIONS CRAVE DETAILS.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 col-span-1">
            <p className="text-white/60 font-light text-sm md:text-base leading-relaxed border-l-2 border-[#D4AF37]/50 pl-6 py-2">
              Corporate wellness chains want you to keep paying and never show up. We optimize for the exact opposite: an inspiring space so high-energy you cannot wait to lift.
            </p>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((p, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white/[0.01] border border-white/10 p-8 md:p-10 flex flex-col justify-between group transition-all duration-300 hover:border-white/20 shadow-2xl"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="p-4 bg-black border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-300">
                    {p.icon}
                  </div>
                  <span className="text-white/40 font-mono text-[10px] tracking-widest font-bold">
                    PILLAR _0{index + 1}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-[0.1em]">
                    {p.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed font-sans font-light">
                    {p.desc}
                  </p>
                </div>
              </div>

              {/* Pillar Stats Highlights */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Facility Metric</div>
                    <div className="text-[#D4AF37] font-bold text-sm mt-1">{p.stat}</div>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Core Advantage</div>
                    <div className="text-zinc-300 font-medium text-xs mt-1">{p.detail}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Counters Stats Section and comparison list */}
        <div className="mt-20 bg-black border border-white/10 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[70px] rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left relative z-10">
            <div className="space-y-2">
              <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">HARDWARE</span>
              <h4 className="text-3xl md:text-4xl font-extrabold text-white font-mono">100+ <span className="text-[#D4AF37] text-xl font-semibold italic">MACHINES</span></h4>
              <p className="text-white/60 text-xs font-light">For targeted muscular isolations and massive density.</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-6 md:py-0 md:px-8">
              <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">SOCIETY</span>
              <h4 className="text-3xl md:text-4xl font-extrabold text-white font-mono">0<span className="text-[#D4AF37] text-xl font-semibold italic">% ATTITUDE</span></h4>
              <p className="text-white/60 text-xs font-light">A family that spots you has your back for lifetime growth.</p>
            </div>
            <div className="space-y-2 md:pl-8">
              <span className="text-white/40 font-mono text-[10px] tracking-widest uppercase">EXPERIENCE</span>
              <h4 className="text-3xl md:text-4xl font-extrabold text-white font-mono">365 <span className="text-[#D4AF37] text-xl font-semibold italic">DAYS OPEN</span></h4>
              <p className="text-white/60 text-xs font-light">We never lock you out when your momentum counts most.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
