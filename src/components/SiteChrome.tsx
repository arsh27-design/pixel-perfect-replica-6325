import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Instagram, MessageCircle, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { business, waLink } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Danish Ibrahim Photography logo" className="h-12 w-12 rounded-full" />
          <span className="hidden font-display text-xl tracking-wide sm:block">Danish Ibrahim</span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }} className="text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary" activeProps={{ className: "!text-primary" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/booking" className="btn-gold !px-5 !py-3">Book</Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-6 border-t border-border bg-background px-6 py-8 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="font-display text-2xl" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/booking" onClick={() => setOpen(false)} className="btn-gold">Book Your Date</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <img src={logo.url} alt="" className="mb-4 h-20 w-20 rounded-full" />
          <p className="text-sm text-muted-foreground">Timeless wedding & portrait photography from Bhopal, for stories worth remembering.</p>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow mb-4">Contact</p>
          <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-4 w-4 text-primary" />{business.location}</p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Phone className="h-4 w-4 text-primary" />{business.phoneDisplay}</a>
          <a href={business.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary"><Instagram className="h-4 w-4 text-primary" />{business.instagramHandle}</a>
        </div>
        <div className="space-y-3 text-sm">
          <p className="eyebrow mb-4">Explore</p>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="block text-muted-foreground hover:text-primary">{n.label}</Link>
          ))}
        </div>
      </div>
      <p className="border-t border-border py-6 text-center text-xs tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} {business.name}
      </p>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-2xl transition-transform hover:scale-110">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function PageHero({ eyebrow, title, img }: { eyebrow: string; title: string; img: string }) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden">
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-fade absolute inset-0" />
      <div className="animate-rise relative mx-auto w-full max-w-7xl px-6 pb-16">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="text-5xl md:text-7xl">{title}</h1>
      </div>
    </section>
  );
}

export function SectionTitle({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <div className={center ? "mb-14 text-center" : "mb-14"}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}
