import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteChrome";
import { images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Danish Ibrahim Photography" },
      { name: "description", content: "Meet Danish Ibrahim, a Bhopal photographer crafting cinematic wedding and portrait stories." },
      { property: "og:title", content: "About Danish Ibrahim Photography" },
      { property: "og:description", content: "The story and approach behind our Bhopal photography studio." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About" title="The eye behind the lens" img={images.portrait} />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2">
        <img src={images.prewedding} alt="Couple portrait" loading="lazy" className="aspect-[4/5] w-full object-cover" />
        <div className="space-y-6 self-center text-muted-foreground">
          <p className="eyebrow">Danish Ibrahim</p>
          <h2 className="text-4xl text-foreground md:text-5xl">Photographs that feel, not just look.</h2>
          <p>Based in Bhopal, Madhya Pradesh, we photograph weddings, love stories, families and brands across India. Our approach is quiet and observant — we let real moments unfold, then frame them with cinematic light.</p>
          <p>From grand celebrations to intimate portraits, every story is treated with the same care: thoughtful direction, honest emotion, and images designed to last generations.</p>
          <div className="grid grid-cols-3 gap-6 border-t border-border pt-8 text-center">
            {[["Weddings", "Story-first"], ["Style", "Cinematic"], ["Based in", "Bhopal"]].map(([a, b]) => (
              <div key={a}><p className="font-display text-2xl text-primary">{b}</p><p className="text-xs uppercase tracking-widest">{a}</p></div>
            ))}
          </div>
          <Link to="/booking" className="btn-gold">Work With Us</Link>
        </div>
      </section>
    </>
  );
}
