// ============================================================
// SITE CONTENT — edit this file to update the website.
// Replace images by adding files to src/assets and importing them here.
// ============================================================
import hero from "@/assets/hero.jpg";
import prewedding from "@/assets/prewedding.jpg";
import portrait from "@/assets/portrait.jpg";
import event from "@/assets/event.jpg";
import maternity from "@/assets/maternity.jpg";
import bride from "@/assets/bride.jpg";

export const business = {
  name: "Danish Ibrahim Photography",
  location: "Bhopal, Madhya Pradesh, India",
  phoneDisplay: "+91 79997 93126",
  whatsapp: "917999793126",
  instagram: "https://www.instagram.com/danish_ibrahim_photography__/",
  instagramHandle: "@danish_ibrahim_photography__",
};

export const waLink = (text = "Hello Danish Ibrahim Photography, I'd like to enquire about a shoot.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;

export const images = { hero, prewedding, portrait, event, maternity, bride };

export const galleryCategories = ["Weddings", "Pre-Weddings", "Events", "Portraits", "Fashion", "Maternity & Baby"] as const;

export const gallery: { src: string; category: (typeof galleryCategories)[number]; title: string; tall?: boolean }[] = [
  { src: hero, category: "Weddings", title: "Golden Vows" },
  { src: prewedding, category: "Pre-Weddings", title: "Palace Sunset", tall: true },
  { src: portrait, category: "Portraits", title: "Noir & Gold", tall: true },
  { src: event, category: "Events", title: "Haldi Laughter" },
  { src: maternity, category: "Maternity & Baby", title: "Awaiting", tall: true },
  { src: bride, category: "Weddings", title: "The Details" },
  { src: portrait, category: "Fashion", title: "Editorial Study", tall: true },
  { src: prewedding, category: "Pre-Weddings", title: "Old City Walk", tall: true },
  { src: event, category: "Weddings", title: "Family Moments" },
];

export const services = [
  { title: "Wedding Photography", desc: "Complete coverage of your wedding day — rituals, portraits and every fleeting glance.", img: hero },
  { title: "Pre-Wedding Photography", desc: "Cinematic couple sessions at palaces, lakes and hidden corners of Bhopal.", img: prewedding },
  { title: "Candid Photography", desc: "Unposed, honest moments captured as they unfold, naturally.", img: event },
  { title: "Wedding Videography", desc: "Cinematic films and highlight reels that tell your story in motion.", img: bride },
  { title: "Birthday & Events", desc: "Celebrations, anniversaries and family gatherings, beautifully documented.", img: event },
  { title: "Fashion & Portrait", desc: "Editorial portraits and model portfolios with studio-grade lighting.", img: portrait },
  { title: "Maternity & Baby", desc: "Gentle, timeless sessions for the most tender chapters of life.", img: maternity },
  { title: "Commercial & Product", desc: "Clean, compelling imagery for brands, menus and catalogues.", img: bride },
];

// SAMPLE PRICES — placeholders only, edit to real prices.
export const packages = [
  { name: "Essential", price: "₹ 35,000", note: "Single-day event", features: ["1 Photographer", "6 hours coverage", "300+ edited photos", "Online gallery", "Delivery in 3 weeks"] },
  { name: "Signature", price: "₹ 85,000", note: "Most loved", featured: true, features: ["Candid + traditional team", "2 days coverage", "700+ edited photos", "Cinematic highlight film", "Premium photo album", "Pre-wedding mini session"] },
  { name: "Luxury", price: "₹ 1,60,000", note: "Full wedding story", features: ["Full photo + film crew", "3 days coverage", "Unlimited edited photos", "Wedding film + teaser", "Two luxury albums", "Drone coverage", "Full pre-wedding shoot"] },
];

export const testimonials = [
  { quote: "Every photo feels like a frame from a film. Danish captured emotions we didn't even notice on the day.", name: "Ayesha & Faraz", event: "Wedding, Bhopal" },
  { quote: "Calm, professional and incredibly creative. Our pre-wedding shoot at the old city was magical.", name: "Riya & Karan", event: "Pre-Wedding" },
  { quote: "The maternity photos are the most precious thing we own. Thank you for making me feel so comfortable.", name: "Sana M.", event: "Maternity Session" },
];
