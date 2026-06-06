import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dumbbell, Shield, Menu, X } from "lucide-react";

interface NavigationProps {
  onJoinClick: () => void;
}

export function Navigation({ onJoinClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Monitor scroll height
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      
      // Calculate scroll velocity progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Ethos", href: "#why" },
    { title: "Iron Museum", href: "#equipment" },
    { title: "Legacy", href: "#legacy" },
    { title: "Pricing", href: "#pricing" },
    { title: "FAQ", href: "#faq" }
  ];

  return (
    <>
      {/* Real-time relative scroll progress bar running on top of viewport */}
      <div className="fixed top-0 left-0 right-0 h-[2px] z-[99] bg-zinc-950">
        <motion.div
          style={{ width: `${scrollProgress}%` }}
          className="h-full bg-[#D4AF37] shadow-[0_0_10px_rgba(212,175,55,0.6)]"
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? "py-5 bg-black/95 border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.9)] backdrop-blur-md"
            : "py-7 bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO: Editorial Badge Style */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-[#D4AF37] flex items-center justify-center font-black text-black text-xs italic tracking-tighter shrink-0 transition-transform duration-300 group-hover:rotate-12">
              QG
            </div>
            
            <div className="flex flex-col select-none leading-none">
              <span className="text-lg font-bold tracking-[0.2em] uppercase italic text-white group-hover:text-amber-500 duration-200">
                QUADS<span className="text-[#D4AF37]">GYM</span>
              </span>
              <span className="text-[7px] font-mono tracking-[0.4em] text-zinc-500 uppercase mt-0.5">
                CHICAGO MECCA • EST. 1977
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (luxury-spaced) */}
          <nav className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.3em] font-medium text-zinc-400">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="hover:text-[#D4AF37] relative transition-colors duration-200 py-1"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              id="nav-join-btn"
              onClick={onJoinClick}
              className="px-6 py-2 border border-white/20 text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all cursor-pointer font-medium"
            >
              Get Lift Pass
            </button>
          </div>

          {/* Mobile hamburger menu toggle button */}
          <button
            id="mobile-hamburger-btn"
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 border border-white/10 bg-zinc-950 text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-amber-500" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* MOBILE BAR NAV DRAWER POPOUT SCREEN */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/95 backdrop-blur-3xl flex flex-col justify-center px-12 md:hidden"
          >
            {/* Drawer grid layout */}
            <nav className="flex flex-col gap-8 text-2xl font-black text-white uppercase font-sans tracking-tight">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.title}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                   className="hover:text-[#D4AF37] flex items-center justify-between group border-b border-zinc-900 pb-3"
                >
                  <span>{link.title}</span>
                  <span className="text-zinc-700 text-sm font-mono group-hover:text-[#D4AF37]">_0{idx+1}</span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 space-y-4 flex flex-col align-stretch"
            >
              <button
                id="drawer-join-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onJoinClick();
                }}
                className="w-full py-4 bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-[0.2em] transition-all text-center cursor-pointer font-sans shadow-xl"
              >
                Secure Membership Pass
              </button>
              
              <div className="text-center font-mono text-[8px] text-zinc-500 uppercase tracking-[0.3em]">
                * BROADWAY CHICAGO ORIGINAL TEMPLE *
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
