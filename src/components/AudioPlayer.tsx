import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Volume2, VolumeX, Flame, Zap, HelpCircle } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.3);
  const [mood, setMood] = useState<"heavy" | "cyber" | "ambient">("heavy");
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalIdRef = useRef<any | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Synthesize realistic heavy industrial metal rhythmic pulse and metallic iron clashes
  const startSynth = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioContextClass();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      // Create a master gain controls
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Set up step sequencer loop (every 500ms)
      let step = 0;
      intervalIdRef.current = setInterval(() => {
        if (!ctx || ctx.state === "suspended") return;
        const now = ctx.currentTime;

        // Beat 1: Heavy Low Thud (sub-bass heartbeat)
        if (step % 2 === 0) {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          
          osc.type = "sine";
          osc.frequency.setValueAtTime(45, now); // Low thud
          osc.frequency.exponentialRampToValueAtTime(10, now + 0.35);

          gain.gain.setValueAtTime(0.8, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.4);
        }

        // Rhythmic synth growl for "heavy / cyber" physical aesthetics
        if (mood !== "ambient" && step % 4 === 1) {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          const gain = ctx.createGain();

          osc.type = mood === "heavy" ? "sawtooth" : "square";
          osc.frequency.setValueAtTime(mood === "heavy" ? 55 : 65, now);
          osc.frequency.linearRampToValueAtTime(mood === "heavy" ? 110 : 130, now + 0.2);

          filter.type = "lowpass";
          filter.frequency.setValueAtTime(300, now);
          filter.frequency.exponentialRampToValueAtTime(1200, now + 0.15);

          gain.gain.setValueAtTime(0.12, now);
          gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(masterGain);

          osc.start(now);
          osc.stop(now + 0.3);
        }

        // Randomly simulate legendary iron plate clink / metallic clunk (every few steps)
        if (step % 8 === 3 || step % 8 === 7 || Math.random() > 0.75) {
          // Iron plate click simulation
          const osc1 = ctx.createOscillator();
          const osc2 = ctx.createOscillator();
          const bandpass = ctx.createBiquadFilter();
          const gain = ctx.createGain();

          osc1.type = "sine";
          osc1.frequency.setValueAtTime(800 + Math.random() * 600, now);
          
          osc2.type = "triangle";
          osc2.frequency.setValueAtTime(1800 + Math.random() * 1000, now);

          bandpass.type = "bandpass";
          bandpass.frequency.setValueAtTime(1200, now);
          bandpass.Q.setValueAtTime(5, now);

          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

          osc1.connect(bandpass);
          osc2.connect(bandpass);
          bandpass.connect(gain);
          gain.connect(masterGain);

          osc1.start(now);
          osc2.start(now);
          osc1.stop(now + 0.2);
          osc2.stop(now + 0.2);
        }

        step = (step + 1) % 16;
      }, 350);

      setIsPlaying(true);
    } catch (e) {
      console.error("Failed to start Web Audio Synth:", e);
    }
  };

  const stopSynth = () => {
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
    setIsPlaying(false);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopSynth();
    } else {
      startSynth();
    }
  };

  // Adjust volume dynamically
  useEffect(() => {
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  // Handle cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 text-white">
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-black/90 p-4 shadow-2xl backdrop-blur-xl w-64"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-mono tracking-wider text-amber-500 uppercase">
                <Flame className="w-3.5 h-3.5 animate-pulse" />
                Iron Atmosphere
              </span>
              <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-400 font-mono">
                Procedural Synth
              </span>
            </div>

            {/* Visualizer bars */}
            <div className="flex items-end justify-center gap-1 h-6">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    height: isPlaying ? [2, Math.random() * 20 + 4, 2] : 2
                  }}
                  transition={{
                    duration: 0.4 + i * 0.05,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-1 bg-gradient-to-t from-red-600 via-amber-500 to-yellow-400 rounded-full"
                />
              ))}
            </div>

            {/* Volume Control */}
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono">
                <span>Output Volume</span>
                <span>{Math.round(volume * 100)}%</span>
              </div>
              <input
                id="volume-slider"
                aria-label="Volume slider"
                type="range"
                min="0"
                max="0.8"
                step="0.05"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>

            {/* Sound Mode */}
            <div className="grid grid-cols-3 gap-1">
              {(["heavy", "cyber", "ambient"] as const).map((m) => (
                <button
                  key={m}
                  id={`mood-btn-${m}`}
                  onClick={() => setMood(m)}
                  className={`text-[10px] font-mono py-1 rounded transition-colors uppercase cursor-pointer ${
                    mood === m
                      ? "bg-amber-500 text-black font-semibold shadow-inner"
                      : "bg-zinc-800 hover:bg-zinc-700 text-zinc-400"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Toggle CTA Button */}
      <div className="flex items-center gap-2">
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="px-3 py-1.5 bg-amber-500 text-black font-mono text-[11px] font-bold uppercase tracking-wider rounded-lg shadow-lg pointer-events-none"
            >
              Toggle Epic Gym Sound Mode
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          id="audio-toggle-btn"
          aria-label="Toggle gym audio simulator"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={togglePlayback}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center justify-center w-12 h-12 rounded-full cursor-pointer transition-all duration-300 relative group shadow-lg ${
            isPlaying
              ? "bg-amber-500 text-black shadow-amber-500/20"
              : "bg-zinc-900 text-white hover:text-amber-500 border border-zinc-800"
          }`}
        >
          {/* Pulsing ring for unclicked mode */}
          {!isPlaying && (
            <span className="absolute inset-0 rounded-full border border-amber-500/30 animate-ping" />
          )}

          {isPlaying ? (
            <Volume2 className="w-5 h-5" />
          ) : (
            <VolumeX className="w-5 h-5 group-hover:scale-110 duration-200" />
          )}
        </motion.button>
      </div>
    </div>
  );
}
