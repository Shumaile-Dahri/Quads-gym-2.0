import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, X, ShieldCheck, CreditCard, Ticket, Sparkles, Award } from "lucide-react";
import { PRICING_PLANS } from "../data";

export function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardNumber: "4000 1234 5678 9010",
    cardExpiry: "12/28",
    cardCVV: "456",
  });

  const [validationError, setValidationError] = useState<string>("");

  const handleOpenCheckout = (plan: any) => {
    setSelectedPlan(plan);
    setCheckoutStep("form");
    setValidationError("");
    // Autofill guest name if they are simulating
    setFormData({
      name: "Guest Warrior",
      email: "warrior@example.com",
      phone: "(312) 555-7030",
      cardNumber: "4111 •••• •••• 9820",
      cardExpiry: "07/29",
      cardCVV: "088"
    });
  };

  const handleProcessOrSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setValidationError("Please fill out all required fields.");
      return;
    }
    setCheckoutStep("success");
  };

  const comparisonFeatures = [
    { name: "365 Days Uncapped Access", day: "Paid Visit Only", month: true, annual: true },
    { name: "Over 40,000 sq ft & 100+ Leg Machines", day: true, month: true, annual: true },
    { name: "No Hidden or Sneaky Cancellation Fees", day: true, month: true, annual: true },
    { name: "5 Sets of Dumbbells (Up to 200 lbs)", day: true, month: true, annual: true },
    { name: "Bring 1 Free New Guest per Month", day: false, month: true, annual: true },
    { name: "Signature Heavyweight Gold Hoodie", day: false, month: false, annual: true },
    { name: "Exclusive Founder pre-comp Workshops", day: false, month: false, annual: true },
    { name: "10% Off Quads Apparel Merch Store", day: false, month: "10%", annual: "20%" },
  ];

  return (
    <section id="pricing" className="relative py-28 bg-[#0a0a0a] overflow-hidden border-t border-white/10">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-[#D4AF37] font-mono text-[10px] font-bold tracking-[0.4em] uppercase flex items-center justify-center gap-2">
            ● DIRECT ACCESS POLICY
          </span>
          <h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter text-white leading-[0.95]">
            THE NO-SENSE <br />
            <span className="stroke-text" style={{ WebkitTextStroke: "1px #D4AF37" }}>PRICING CODES.</span>
          </h2>
          <p className="text-white/60 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Choose standard access. No complex multi-tier lock-in packages, no registration taxes. Just straightforward raw iron.
          </p>
        </div>

        {/* Dynamic Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {PRICING_PLANS.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -8 }}
              className={`relative flex flex-col justify-between p-8 border transition-all duration-300 shadow-2xl overflow-hidden ${
                plan.isPopular
                  ? "bg-black border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.15)] md:scale-105"
                  : "bg-white/[0.01] border-white/10 hover:border-white/20"
              }`}
            >
              {/* Popular Star Badge */}
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#D4AF37] text-black font-mono font-black text-[9px] uppercase tracking-[0.15em] px-4 py-1.5 flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3 fill-black animate-pulse" /> Highly Requested
                </div>
              )}

              {/* Top info and header */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-white/40 font-mono text-[10px] font-bold uppercase tracking-widest block mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-1 text-white">
                    <span className="text-lg font-bold font-mono text-[#D4AF37]">$</span>
                    <span className="text-5xl md:text-6xl font-extrabold font-mono tracking-tighter leading-none">
                      {plan.price}
                    </span>
                    <span className="text-white/40 font-mono text-[10px] uppercase tracking-wider pl-1 font-semibold">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                <p className="text-white/60 text-xs font-light leading-relaxed">
                  {plan.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 pt-6 border-t border-white/10">
                  {plan.features.map((feat: string, index: number) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs text-white/70 font-light">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA block */}
              <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
                <button
                  id={`cta-btn-plan-${plan.id}`}
                  onClick={() => handleOpenCheckout(plan)}
                  className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    plan.isPopular
                      ? "bg-[#D4AF37] hover:bg-white text-black shadow-lg"
                      : "bg-black hover:bg-zinc-900 text-white border border-white/10"
                  }`}
                >
                  {plan.ctaText}
                </button>

                <div className="text-[9px] font-mono text-white/40 text-center uppercase tracking-wider italic">
                  * {plan.objectionBuster}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Access Comparison Matrix Panel */}
        <div className="border border-white/10 bg-black p-8 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10 pb-4 text-[10px] font-mono uppercase tracking-widest text-white/40">
                <th className="py-4">Core Feature Grid</th>
                <th>Single Day Pass</th>
                <th>Classic Monthly</th>
                <th>Founder Annual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-xs text-white/70 font-sans">
              {comparisonFeatures.map((f, i) => (
                <tr key={i} className="hover:bg-white/[0.02] duration-150">
                  <td className="py-4 font-normal text-white">{f.name}</td>
                  
                  <td>
                    {typeof f.day === "boolean" ? (
                      f.day ? <Check className="w-4 h-4 text-emerald-500" /> : <X className="w-4 h-4 text-white/10" />
                    ) : (
                      <span className="text-white/40 font-mono text-[10px] uppercase">{f.day}</span>
                    )}
                  </td>

                  <td>
                    {typeof f.month === "boolean" ? (
                      f.month ? <Check className="w-4 h-4 text-[#D4AF37]" /> : <X className="w-4 h-4 text-white/10" />
                    ) : (
                      <span className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase">{f.month}</span>
                    )}
                  </td>

                  <td>
                    {typeof f.annual === "boolean" ? (
                      f.annual ? <Check className="w-4 h-4 text-[#D4AF37]" /> : <X className="w-4 h-4 text-white/10" />
                    ) : (
                      <span className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase">{f.annual}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* RETAIL CHECKOUT OVERLAY DIALOG MODAL SIMULATOR */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg border border-white/10 bg-[#0c0c0c] text-white overflow-hidden shadow-2xl p-6 md:p-8"
            >
              {/* Close Button */}
              <button
                id="close-checkout-modal-btn"
                aria-label="Close"
                onClick={() => setSelectedPlan(null)}
                className="absolute top-6 right-6 p-2 bg-[#141414] border border-white/5 hover:bg-white/10 text-white/65 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {checkoutStep === "form" ? (
                /* STEP 1: Billing and Warrior Data Form */
                <form onSubmit={handleProcessOrSubmit} className="space-y-6">
                  <div className="space-y-1.5 pt-4">
                    <span className="text-[#D4AF37] font-mono text-[9px] font-bold uppercase tracking-[0.25em] block">
                      ● SECURE LIFT PASS TERMINAL
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-wide text-white leading-none">
                      INITIATING: {selectedPlan.name}
                    </h3>
                    <p className="text-white/40 text-[11px] font-light">
                      Join Chicago's premier bodybuilding haven. Simulated Checkout.
                    </p>
                  </div>

                  {/* Summary row */}
                  <div className="bg-black border border-white/10 p-4 flex items-center justify-between text-sm">
                    <span className="text-white/60">Total Purchase:</span>
                    <span className="text-[#D4AF37] font-bold font-mono text-xl">
                      ${selectedPlan.price}
                    </span>
                  </div>

                  {/* Fields */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label htmlFor="checkout-field-name" className="text-[9px] text-white/50 font-mono uppercase tracking-wider block">Your Full Name *</label>
                      <input
                        id="checkout-field-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 bg-black border border-white/10 text-sm focus:outline-none focus:border-[#D4AF37] text-white font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label htmlFor="checkout-field-email" className="text-[9px] text-white/50 font-mono uppercase tracking-wider block">Email Address *</label>
                        <input
                          id="checkout-field-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. name@domain.com"
                          className="w-full px-4 py-3 bg-black border border-white/10 text-sm focus:outline-none focus:border-[#D4AF37] text-white font-sans"
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="checkout-field-phone" className="text-[9px] text-white/50 font-mono uppercase tracking-wider block">Cell Phone *</label>
                        <input
                          id="checkout-field-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. (312) 555-0199"
                          className="w-full px-4 py-3 bg-black border border-white/10 text-sm focus:outline-none focus:border-[#D4AF37] text-white font-sans"
                        />
                      </div>
                    </div>

                    {/* Dummy credit card */}
                    <div className="p-4 bg-black border border-white/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-[#D4AF37] uppercase tracking-widest flex items-center gap-1.5">
                          <CreditCard className="w-3 h-3 text-[#D4AF37]" /> Secure payment gateway
                        </span>
                        <span className="text-[9px] text-white/40 font-mono">Visa / Mastercard / Cash In Person</span>
                      </div>
                      
                      <div className="space-y-2">
                        <input
                          id="checkout-field-card"
                          aria-label="Card number"
                          type="text"
                          disabled
                          value={formData.cardNumber}
                          className="w-full bg-white/[0.01] border border-white/5 text-white/40 px-3 py-2 text-xs font-mono"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            id="checkout-field-expiry"
                            aria-label="Card expiry"
                            type="text"
                            disabled
                            value={formData.cardExpiry}
                            className="w-full bg-white/[0.01] border border-white/5 text-white/40 px-3 py-2 text-xs font-mono text-center"
                          />
                          <input
                            id="checkout-field-cvv"
                            aria-label="Card CVV"
                            type="text"
                            disabled
                            value={formData.cardCVV}
                            className="w-full bg-white/[0.01] border border-white/5 text-white/40 px-3 py-2 text-xs font-mono text-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {validationError && (
                    <div className="text-red-500 text-xs text-center uppercase font-mono font-bold tracking-wider">
                      {validationError}
                    </div>
                  )}

                  {/* Submission and warning */}
                  <div className="space-y-3">
                    <button
                      id="submit-checkout-btn"
                      type="submit"
                      className="w-full py-4 bg-[#D4AF37] hover:bg-white text-black text-xs font-bold uppercase tracking-widest transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4" /> Secure Order Authority
                    </button>
                    <p className="text-[9px] text-white/30 text-center uppercase tracking-wider">
                      By clicking above, you confirm immediate entry approval. Day pass buyers: print or show barcode at front desk lobby on Broadway.
                    </p>
                  </div>
                </form>
              ) : (
                /* STEP 2: Glorious digital pass ticket screen */
                <div className="text-center space-y-8 py-6">
                  
                  {/* Success animation icon */}
                  <div className="mx-auto h-16 w-16 bg-emerald-500/10 border border-emerald-500 flex items-center justify-center text-emerald-400 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>

                  {/* Core Ticket Visual */}
                  <div className="p-6 bg-black border-2 border-dashed border-white/15 text-left relative overflow-hidden space-y-4">
                    {/* Visual notches represent physical ticket */}
                    <div className="absolute top-1/2 -left-3 h-6 w-6 rounded-full bg-[#0c0c0c] border-r border-white/10" />
                    <div className="absolute top-1/2 -right-3 h-6 w-6 rounded-full bg-[#0c0c0c] border-l border-white/10" />

                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <span className="text-[9px] text-[#D4AF37] font-mono tracking-widest uppercase block">QUADS GYM CHICAGO</span>
                        <span className="text-sm font-bold text-white uppercase tracking-tight">OFFICIAL PLATINUM ENTRY</span>
                      </div>
                      <Ticket className="w-8 h-8 text-[#D4AF37] opacity-60" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                      <div>
                        <span className="text-white/40 block text-[9px] uppercase">TRAINER NAME</span>
                        <span className="text-white font-bold uppercase">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9px] uppercase">STATUS LEVEL</span>
                        <span className="text-[#D4AF37] font-bold uppercase">{selectedPlan.name.split(" ")[0]} APPROVED</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9px] uppercase">PASS PASS ID</span>
                        <span className="text-zinc-300">#QG-{Math.floor(Math.random() * 90000) + 10000}</span>
                      </div>
                      <div>
                        <span className="text-white/40 block text-[9px] uppercase">VALID THROUGH</span>
                        <span className="text-zinc-300 font-bold">PERPETUAL ACCESS</span>
                      </div>
                    </div>

                    {/* Barcode representation */}
                    <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-1">
                      <div className="h-10 w-full flex gap-1 bg-white p-2 rounded justify-between">
                        {[...Array(40)].map((_, idx) => (
                          <div
                            key={idx}
                            className="bg-black shrink-0"
                            style={{
                              width: (idx % 3 === 0 ? "5px" : idx % 5 === 0 ? "1px" : "3px"),
                              opacity: (idx % 7 === 0 ? 0.35 : 1)
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono text-white/40 tracking-wider uppercase mt-1">
                        * SCREENSHOT FOR BROADWAY DESK CHECK-IN *
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white uppercase tracking-wide">
                        WELCOME TO THE MECCA, {formData.name.split(" ")[0]}!
                      </h4>
                      <p className="text-white/60 text-xs font-light px-4 leading-relaxed">
                        We have registered your details. Simply present your ticket barcode above on your phone to our Broadway lobby. See you on the platform!
                      </p>
                    </div>

                    <button
                      id="checkout-finalize-btn"
                      onClick={() => setSelectedPlan(null)}
                      className="px-6 py-2.5 bg-black border border-white/10 text-white/80 hover:text-white text-xs uppercase tracking-wider transition-all"
                    >
                      Dismiss Pass Terminal
                    </button>
                  </div>

                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
