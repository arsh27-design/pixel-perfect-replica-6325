import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/SiteChrome";
import { images, packages } from "@/data/site";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Packages & Pricing — Danish Ibrahim Photography" },
      { name: "description", content: "Wedding photography and film packages in Bhopal. Sample pricing in INR." },
      { property: "og:title", content: "Photography Packages — Danish Ibrahim" },
      { property: "og:description", content: "Explore our Essential, Signature and Luxury collections." },
    ],
  }),
  component: Packages,
});

function Packages() {
  return (
    <>
      <PageHero eyebrow="Collections" title="Packages" img={images.bride} />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className={`flex flex-col border p-10 ${p.featured ? "border-primary bg-card" : "border-border"}`}>
              <p className="eyebrow">{p.note}</p>
              <h3 className="mt-3 text-4xl">{p.name}</h3>
              <p className="mt-6 font-display text-5xl text-primary">{p.price}</p>
              <p className="text-xs text-muted-foreground">starting from</p>
              <ul className="my-8 flex-1 space-y-3 text-sm">
                {p.features.map((f) => <li key={f} className="flex gap-3"><Check className="h-4 w-4 shrink-0 text-primary" />{f}</li>)}
              </ul>
              <Link to="/booking" search={{ package: p.name }} className={p.featured ? "btn-gold" : "btn-ghost"}>Book Now</Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Sample pricing for reference — final quotes are customised to your event. Contact us for a personalised package.</p>
      </section>
    </>
  );
}
