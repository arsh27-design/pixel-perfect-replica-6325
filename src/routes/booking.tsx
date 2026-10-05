import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PageHero } from "@/components/SiteChrome";
import { EnquiryForm } from "@/components/EnquiryForm";
import { images } from "@/data/site";

export const Route = createFileRoute("/booking")({
  validateSearch: z.object({ package: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Book Your Date — Danish Ibrahim Photography" },
      { name: "description", content: "Check availability and enquire about wedding or portrait photography in Bhopal." },
      { property: "og:title", content: "Book Danish Ibrahim Photography" },
      { property: "og:description", content: "Reserve your date for a cinematic photography experience." },
    ],
  }),
  component: Booking,
});

function Booking() {
  const { package: pkg } = Route.useSearch();
  return (
    <>
      <PageHero eyebrow="Booking" title="Reserve your date" img={images.prewedding} />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-4 text-muted-foreground">
          <h2 className="text-3xl text-foreground">Tell us about your day</h2>
          <p>Share a few details and your preferred date. We'll confirm availability and send a tailored proposal within 24 hours.</p>
          <p className="text-sm">Prefer to talk? Message us directly on WhatsApp.</p>
        </div>
        <EnquiryForm defaultPackage={pkg ?? ""} />
      </section>
    </>
  );
}
