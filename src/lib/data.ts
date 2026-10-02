export const PX = (id: number, w = 1000) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
export const fmt = (n: number) => n.toLocaleString("en-KE");

export const CONTACT = {
  phone: "0729 008 500",
  tel: "tel:0729008500",
  address: "2nd Floor, TJ&U Fitness Complex, Rabai Road, BuruBuru",
  landmark: "Opposite TJ&U Garage, next to Rubis Petrol Station",
};

export type Plan = {
  id: string; name: string; duration: string; price: number; blurb: string;
  pt: string; reports: string; days: number; featured?: boolean;
};

export const PLANS: Plan[] = [
  { id: "daily", name: "Daily Pass", duration: "1 DAY", price: 500, blurb: "Single-day gym access", pt: "Not included on this plan", reports: "Not included on this plan", days: 1 },
  { id: "two", name: "Short-Term Pass", duration: "2 WEEKS", price: 2500, blurb: "Short-term gym access", pt: "Not included on this plan", reports: "Not included on this plan", days: 14 },
  { id: "starter", name: "Starter Package", duration: "1 MONTH", price: 5000, blurb: "Gym + 2 PT sessions a week", pt: "2 × 30-min sessions per week", reports: "Monthly progress report", days: 30 },
  { id: "gold", name: "Gold Package", duration: "6 MONTHS", price: 26000, blurb: "PT, nutrition, unlimited classes", pt: "6 × 60-min sessions per week", reports: "Weekly progress reports", days: 182, featured: true },
  { id: "ultimate", name: "Ultimate Package", duration: "12 MONTHS", price: 45000, blurb: "Full-year access", pt: "Book with a coach at the desk", reports: "Ask your coach", days: 365 },
];

// "c" = check, "n" = not included, anything else = text
export const COMPARE_ROWS: [string, string[]][] = [
  ["Gym floor access", ["c", "c", "c", "c", "c"]],
  ["Length", ["1 day", "2 weeks", "1 month", "6 months", "12 months"]],
  ["Access", ["Single day", "Short-term", "Regular access", "6 days a week", "Full year"]],
  ["Personal training", ["n", "n", "2 × 30 min / week", "6 × 60 min / week", "n"]],
  ["Progress reports", ["n", "n", "Monthly", "Weekly", "n"]],
  ["Customised nutrition plan", ["n", "n", "n", "c", "n"]],
  ["Unlimited group classes", ["n", "n", "n", "c", "n"]],
  ["Washrooms, showers, lockers, Wi-Fi", ["c", "c", "c", "c", "c"]],
];

export const SERVICES = [
  { title: "Strength & weights", img: PX(6455963), text: "Free weights, racks and machines for every level, from your first squat to your heaviest deadlift.", note: "All plans" },
  { title: "Cardio", img: PX(6456010), text: "Bikes and cardio machines for warm-ups, conditioning and steady endurance work.", note: "All plans" },
  { title: "Personal training", img: PX(6456140), text: "One-on-one sessions with a coach who builds your programme and tracks your progress.", note: "Starter: 2 × 30 min / week · Gold: 6 × 60 min / week" },
  { title: "Group classes", img: PX(3768730), text: "High-energy sessions where the group carries you through the last rep.", note: "Unlimited on Gold" },
  { title: "Boxing & kickboxing", img: PX(6793653), text: "Pads, bags and technique work that builds fitness, coordination and confidence.", note: "Ask at the front desk" },
  { title: "Nutrition plans", img: PX(6455813), text: "A customised eating plan that matches your training and your goal.", note: "Included in Gold" },
  { title: "Sauna, steam & massage", img: PX(3768593), text: "Recovery on site, so you can come back tomorrow ready to go again.", note: "On site" },
];

export const AMENITIES: [string, string][] = [
  ["Washrooms", "Including a wheelchair-accessible washroom"], ["Showers & lockers", "Freshen up before work"],
  ["Free Wi-Fi", "Stream your playlist"], ["Parking", "Including accessible parking"],
  ["Accessible entrance", "Step-free access"], ["Sauna", "On site"],
  ["Payments", "M-Pesa, debit cards, NFC"], ["Onsite services", "Coaches on the gym floor"],
];

export const GALLERY: [number, string][] = [
  [6793653, "Boxing"], [6455963, "Strength"], [3768730, "Classes"], [6456010, "Cardio"], [6456140, "Coaching"], [6455820, "Classes"],
  [3768593, "Classes"], [6455927, "Coaching"], [6455813, "Strength"], [6456160, "Boxing"], [4162451, "Strength"], [4761792, "Boxing"],
];

export const HOURS: [string, string][] = [
  ["Monday", "4am – 10pm"], ["Tuesday", "4am – 10pm"], ["Wednesday", "4am – 10pm"], ["Thursday", "4am – 10pm"],
  ["Friday", "4am – 10pm"], ["Saturday", "Call to confirm"], ["Sunday", "Call to confirm"],
];

export const HOME_TILES = [
  { title: "Cardio & conditioning", text: "Ropes, rowers and bikes to build your engine.", vid: 6389044 },
  { title: "Strength", text: "Racks, free weights and bodyweight work.", vid: 6388409 },
  { title: "Endurance", text: "Rowing and elliptical sessions at your pace.", vid: 6389558 },
  { title: "Mobility & recovery", text: "Stretch, reset and come back stronger.", vid: 6390389 },
];

export const MARQUEE = ["STRENGTH", "CARDIO", "PERSONAL TRAINING", "BOXING", "GROUP CLASSES", "SAUNA & STEAM", "NUTRITION", "OPEN 4AM"];

export const NAV = [
  { label: "Training", href: "/training" },
  { label: "Membership", href: "/membership" },
  { label: "Wellness", href: "/wellness" },
  { label: "Community", href: "/community" },
  { label: "Gallery", href: "/gallery" },
  { label: "Visit us", href: "/about" },
];
