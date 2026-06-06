import { Review, EquipmentItem, TimelineEvent, PricingTier, FAQItem } from "./types";

export const KEY_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Marcello G.",
    text: "The selection of equipment is absolutely unmatched. This isn't your standard commercial gym with three squat racks and 50 treadmills. They have rare, antique biomechanical masterpieces from Hammer Strength, Icarian, Nebulas, and Cybex that isolate muscles in ways modern cheap gear never will. Over 100 leg machines alone. An absolute temple.",
    rating: 5,
    role: "Competitive Powerlifter / Coach",
    age: "34",
    yearsOfTraining: "12+ Years"
  },
  {
    id: "rev-2",
    author: "Sarah Jenkins",
    text: "I was super intimidated to step foot inside a 'bodybuilding mecca', but the 'zero-attitude' policy is 100% real. The veterans and elite pros here are the quickest to offer a friendly spot, help you load a machine, or just smile and encourage you. It is the most welcoming, high-energy environment I've ever experienced in fitness. Like a giant family of people who just love working hard.",
    rating: 5,
    role: "Everyday Athlete / Designer",
    age: "28",
    yearsOfTraining: "3 Years"
  },
  {
    id: "rev-3",
    author: "Dave 'Big Iron' Kowalski",
    text: "Been training at Quads for 25 years. This is Chicago's last true iron refuge. Tom Jager and Dave DeYoung have done something magical here. They have 5 complete sets of dumbbells going all the way up to 200lbs—never have to wait for a pair. Smells like authentic chalk, sweat, and absolute legend. 365 days a year, no corporate nonsense, pure focus.",
    rating: 5,
    role: "Master Bodybuilder & Coach",
    age: "52",
    yearsOfTraining: "30+ Years"
  },
  {
    id: "rev-4",
    author: "Elena Rostov",
    text: "I switched from a big premium chain because of the broken machines and crowds of people filming TikToks. At Quads, there is an unspoken mutual respect. You lift heavy, you use chalk, you re-rack your weights, and you focus on your craft. The culture here demands excellence, yet everyone is humble. Best move I ever made for my athletic career.",
    rating: 5,
    role: "Figure Competitor & PT",
    age: "31",
    yearsOfTraining: "8 Years"
  },
  {
    id: "rev-5",
    author: "Hiroshi T.",
    text: "Flew all the way from Tokyo to train here for 3 days on a Chicago trip. The staff set me up with a simple $25 day pass with absolutely no sales pitch or hassle. The sheer density of heavy metal plates, the overhead industrial rock, and the history written on the walls with signed athlete photos is deeply inspiring. An absolute bucket-list experience that lived up to every ounce of the hype.",
    rating: 5,
    role: "International Visitor / Weightlifter",
    age: "41",
    yearsOfTraining: "15 Years"
  }
];

export const EQUIPMENT_CATALOG: EquipmentItem[] = [
  {
    id: "eq-1",
    name: "Classic Calibrated Cast Iron Plates & DBs",
    brand: "Ivanko & York Barbell",
    category: "Free Weights",
    description: "Deep-dish vintage plates with that distinct sweet clang that rings true effort. Five complete sets of dumbbells scaling from 3lbs up to 200lbs in dedicated heavy bays.",
    quantity: "35,000+ lbs of pure iron",
    weightRange: "Dumbbells up to 200 lbs",
    notableDetail: "Each dumbbell is checked and hand-tightened weekly for absolute balance."
  },
  {
    id: "eq-2",
    name: "Line-Art Hack Squat & Pendulum Leg Press",
    brand: "Nebula & Custom",
    category: "Legs",
    description: "Over 100 individual leg training pieces. Features rare legacy Nebula hack squats and ultra-smooth pendulum presses engineered for maximum quad overload and zero lower-back strain.",
    quantity: "28 distinct leg presses & hack squats",
    weightRange: "Plate-loadable up to 1,500+ lbs",
    notableDetail: "Preferred by powerlifting royalty for ultimate biomechanical alignment."
  },
  {
    id: "eq-3",
    name: "Unilateral Iso-Lateral Row & Incline Press",
    brand: "Vintage Hammer Strength (MTS)",
    category: "Chest",
    description: "The golden era of heavy-duty welded plate-loaded equipment. These original Hammer Strength pieces utilize converging/diverging axes of motion to match the body's natural strength curves.",
    quantity: "24 original welded frames",
    weightRange: "Up to 450 lbs per side",
    notableDetail: "Original heavy steel welds that resist flexing even under absolute maximum load."
  },
  {
    id: "eq-4",
    name: "Classic Pullover & Belt Squat Series",
    brand: "Nautilus & Pit Shark",
    category: "Rare Vintage",
    description: "Features the legendary Arthur Jones-designed Nautilus pullover—the 'shrug' machine of champions—and clean, heavy Pit Shark belt squats for full lumbar spinal decompression.",
    quantity: "12 collectors gems",
    weightRange: "Varies per stack",
    notableDetail: "Lovingly restored to perfect moving silk operational standards."
  }
];

export const LEGACY_TIMELINE: TimelineEvent[] = [
  {
    year: "1977",
    title: "Origins on Broadway",
    description: "Founders Tom Jager and Dave DeYoung open Quads Gym in Chicago with a singular manifesto: gather the world's finest ironware, scrap the corporate fluff, and build a haven of self-improvement.",
    badge: "The Genesis"
  },
  {
    year: "1988",
    title: "The Mecca of the Midwest",
    description: "As bodybuilding experiences a massive golden era, Quads becomes known as the central hub for elite training in mid-America. Champion powerlifters and athletes train alongside local neighborhood lifters.",
    badge: "Iconic Statues"
  },
  {
    year: "1997",
    title: "Ed Coan's Power Fortress",
    description: "Ed Coan, widely regarded as the greatest powerlifter in history (racking up 71 world records), preps for his massive historic lifts right here, solidifying the gym's legendary hard-core pedigree.",
    badge: "Powerlifting Royalty"
  },
  {
    year: "2010",
    title: "40,000 Sq Ft Iron Treasury",
    description: "Quads expands its footprints, meticulously collecting and saving legendary rare equipment lines from defunct facilities across America. The gym transforms into a living, breathing museum of strength.",
    badge: "Ultimate Expansion"
  },
  {
    year: "Present",
    title: "A Timeless Monument",
    description: "Under the same zero-attitude vision, Quads stands tall. While modern corporate gyms implement rules banning chalk, grunting, and lifting bare, Quads remains the proud standard-bearer of raw human effort.",
    badge: "Living Legend"
  }
];

export const PRICING_PLANS: PricingTier[] = [
  {
    id: "plan-day",
    name: "Legendary Day Pass",
    price: "25",
    period: "single visit",
    description: "The ultimate direct test of raw iron. Perfect for visitors, travelers, or local lifters who want to test their limits on legendary equipment with zero strings attached.",
    features: [
      "Full access to 40,000 sq ft facility",
      "No reservation or pre-booking required",
      "Full access to all 5 dumbbell sets (up to 200 lbs)",
      "Zero-attitude policy & supportive spot culture",
      "Complimentary chalk & heavy lifting chains access",
      "Open gym usage 365 days a year"
    ],
    isPopular: false,
    ctaText: "Get Day Pass Instantly",
    objectionBuster: "Just walk in, pay cash/card, and train. No high-pressure sales pitches."
  },
  {
    id: "plan-month",
    name: "Classic Iron Monthly",
    price: "59",
    period: "per month",
    description: "Uncapped elite standard. Designed for the serious trainer, community lover, or everyday athlete who wants consistent premium output without lock-in contracts.",
    features: [
      "Unlimited 365-day access to Quads Gym",
      "Free onboarding session & rare machine guidance",
      "Zero setup fees, zero cancellation fees",
      "Unrestricted gym floor & power rack usage",
      "Bring 1 first-time guest free every month",
      "10% off legendary Quads Gym apparel"
    ],
    isPopular: true,
    ctaText: "Initiate Monthly Elite",
    objectionBuster: "No yearly commitments. Cancel online or in person with zero penalty."
  },
  {
    id: "plan-annual",
    name: "The Founder's Circle",
    price: "549",
    period: "per year",
    description: "Our absolute signature value for committed warriors. Secure your perpetual space in bodybuilding and powerlifting history and shave over 20% off the monthly rate.",
    features: [
      "Full 12-month prepay access (save over $150)",
      "Limited edition heavyweight Quads Gym Hoodie in signature gold",
      "3 complimentary 'Iron Friend' Day Passes per quarter",
      "Extended booking for specialized coach-assisted platforms",
      "Exclusive invitation to pre-competition workshops",
      "Lifetime locker rate freeze guarantee"
    ],
    isPopular: false,
    ctaText: "Lock In Legacy Annual",
    objectionBuster: "Best value. Translates to just $45/month for Chicago's finest iron temple."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Do you have contracts with hidden sign-up or cancellation fees?",
    answer: "Absolutely not. We hate corporate tricks. Our monthly membership is purely month-to-month, and you can cancel anytime. We do not charge registration fees, key card fees, or maintenance surcharges. What you see is what you pay.",
    category: "Policies"
  },
  {
    question: "Is Quads Gym only for giant bodybuilders and powerlifters?",
    answer: "No! This is the most common myth. While we are proud to host elite athletes, national size champions, and powerlifting legends, our 'zero-attitude' culture means everyone is welcome. You'll see grandmothers, college students, local chefs, and beginner lifters training right alongside Mr. Olympia contenders. If you have the drive to improve, you belong here.",
    category: "Access"
  },
  {
    question: "Do you allow chalk, grunting, and drops?",
    answer: "Yes, yes, and yes. Real heavy training requires real tools. We provide chalk bowls or you can bring your own. All we ask is that you respect the facility: re-rack your weights when finished, wipe down the benches, and treat other lifters with human decency.",
    category: "Policies"
  },
  {
    question: "Can I just buy a Day Pass, or do I need to be a member?",
    answer: "Day Passes are extremely popular and cost $25. No appointments necessary. Just walk up to our front desk on Broadway, purchase your pass, and you're set to lift for the day. You also can purchase 10-visit punch cards.",
    category: "Access"
  },
  {
    question: "What makes your leg equipment so famous?",
    answer: "We have over 100 dedicated pieces of lower-body equipment. corporate gyms usually have 3 or 4 leg presses. We have 28 separate heavy hack squats, pendulum presses, bilateral leg presses, and rare vertical leg presses from Nebulas, Cybex, and Hammer Strength. This density allows you to target muscles from biomechanically flawless angles without waiting in line.",
    category: "Equipment"
  },
  {
    question: "Who are Dave and Tom, and what is their vision?",
    answer: "Tom Jager and Dave DeYoung are the legendary founders who built Quads into a global brand. Their vision has always been to prioritize lifting experience over profit. They personally curate every piece of steel on the floor, ensuring Quads retains its historic pedigree while maintaining a friendly, warm, non-judgmental neighborhood gym charm.",
    category: "History"
  }
];
