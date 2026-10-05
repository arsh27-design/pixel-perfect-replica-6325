import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteChrome";
import { images, services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Danish Ibrahim Photography" },
      { name: "description", content: "Wedding, pre-wedding, candid, videography, events, portrait, maternity and product photography in Bhopal." },
      { property: "og:title", content: "Photography Services in Bhopal" },
      { property: "og:description", content: "Eight specialised photography and film services for every occasion." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="What we create" img={images.event} />
      <section className="mx-auto grid max-w-7xl gap-x-6 gap-y-14 px-6 py-24 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <article key={s.title} className="group">
            <div className="overflow-hidden"><img src={s.img} alt={s.title} loading="lazy" className="img-zoom aspect-[3/4] w-full object-cover" /></div>
            <p className="eyebrow mt-5">0{i + 1}</p>
            <h3 className="mt-2 text-2xl">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            <Link to="/booking" className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-primary">Enquire →</Link>
          </article>
        ))}
      </section>
    </>
  );
}
