import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/SiteChrome";
import { gallery, images, services, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Danish Ibrahim Photography — Stories Worth Remembering" },
      { name: "description", content: "Luxury wedding, pre-wedding, candid and portrait photography in Bhopal, Madhya Pradesh." },
      { property: "og:title", content: "Danish Ibrahim Photography — Bhopal" },
      { property: "og:description", content: "Cinematic wedding and portrait photography capturing timeless emotions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative flex h-screen min-h-[640px] items-center overflow-hidden">
        <img src={images.hero} alt="Bride and groom at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-fade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20">
          <p className="eyebrow animate-rise mb-6">Bhopal · Wedding & Portrait Photography</p>
          <h1 className="animate-rise max-w-3xl text-6xl leading-[0.95] md:text-8xl" style={{ animationDelay: ".15s" }}>
            Stories Worth <em className="text-primary">Remembering</em>
          </h1>
          <p className="animate-rise mt-8 max-w-lg text-lg text-muted-foreground" style={{ animationDelay: ".3s" }}>
            We capture the timeless emotions of your most important days — honestly, cinematically, beautifully.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: ".45s" }}>
            <Link to="/gallery" className="btn-ghost">View Our Work</Link>
            <Link to="/booking" className="btn-gold">Book Your Date</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2">
        <img src={images.bride} alt="Bridal details" loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div>
          <p className="eyebrow mb-4">The Studio</p>
          <h2 className="mb-6 text-4xl md:text-5xl">Light, emotion, and the moments in between.</h2>
          <p className="mb-8 text-muted-foreground">Danish Ibrahim Photography is a Bhopal-based studio documenting weddings, love stories and portraits with an editorial eye and a quiet presence.</p>
          <Link to="/about" className="text-xs uppercase tracking-[0.3em] text-primary">Our story →</Link>
        </div>
      </section>

      <section className="bg-card py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="What We Do" title="Featured Services" />
          <div className="grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((s) => (
              <Link to="/services" key={s.title} className="group block">
                <div className="overflow-hidden"><img src={s.img} alt={s.title} loading="lazy" className="img-zoom aspect-[4/5] w-full object-cover" /></div>
                <h3 className="mt-5 text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Portfolio" title="Selected Frames" />
          <Link to="/gallery" className="btn-ghost mb-14">Full Gallery</Link>
        </div>
        <div className="columns-2 gap-4 md:columns-3">
          {gallery.slice(0, 6).map((g, i) => (
            <div key={i} className="group mb-4 overflow-hidden break-inside-avoid">
              <img src={g.src} alt={g.title} loading="lazy" className="img-zoom w-full" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle eyebrow="Kind Words" title="From Our Couples" center />
          <div className="grid gap-12 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="text-center">
                <blockquote className="font-display text-2xl italic leading-snug">“{t.quote}”</blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.25em] text-primary">{t.name}<span className="block pt-1 text-muted-foreground normal-case tracking-normal">{t.event}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-36 text-center">
        <img src={images.prewedding} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="relative px-6">
          <p className="eyebrow mb-4">Now booking 2026 – 2027</p>
          <h2 className="mx-auto mb-10 max-w-2xl text-5xl md:text-6xl">Let's tell your story.</h2>
          <Link to="/booking" className="btn-gold">Book Your Date</Link>
        </div>
      </section>
    </>
  );
}
