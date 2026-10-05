import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "@/components/SiteChrome";
import { gallery, galleryCategories, images } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Danish Ibrahim Photography" },
      { name: "description", content: "Browse weddings, pre-weddings, events, portraits, fashion and maternity photography." },
      { property: "og:title", content: "Portfolio Gallery — Danish Ibrahim Photography" },
      { property: "og:description", content: "A curated portfolio of cinematic photography from Bhopal." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const [cat, setCat] = useState<string>("All");
  const [open, setOpen] = useState<string | null>(null);
  const items = cat === "All" ? gallery : gallery.filter((g) => g.category === cat);
  return (
    <>
      <PageHero eyebrow="Portfolio" title="Gallery" img={images.hero} />
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {["All", ...galleryCategories].map((c) => (
            <button key={c} onClick={() => setCat(c)}
              className={`border px-5 py-2 text-xs uppercase tracking-[0.2em] transition-colors ${cat === c ? "border-primary text-primary" : "border-border text-muted-foreground hover:text-foreground"}`}>
              {c}
            </button>
          ))}
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((g, i) => (
            <button key={`${cat}-${i}`} onClick={() => setOpen(g.src)} className="group animate-rise relative mb-4 block w-full overflow-hidden break-inside-avoid">
              <img src={g.src} alt={g.title} loading="lazy" className={`img-zoom w-full object-cover ${g.tall ? "aspect-[4/5]" : "aspect-[4/3]"}`} />
              <div className="absolute inset-x-0 bottom-0 bg-background/70 p-4 text-left opacity-0 transition-opacity group-hover:opacity-100">
                <p className="eyebrow">{g.category}</p>
                <p className="font-display text-xl">{g.title}</p>
              </div>
            </button>
          ))}
        </div>
        {items.length === 0 && <p className="text-center text-muted-foreground">More work coming soon.</p>}
      </section>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-6" onClick={() => setOpen(null)}>
          <button className="absolute right-6 top-6" aria-label="Close"><X /></button>
          <img src={open} alt="" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </>
  );
}
