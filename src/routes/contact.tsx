import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/SiteChrome";
import { EnquiryForm } from "@/components/EnquiryForm";
import { business, images, waLink } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Danish Ibrahim Photography, Bhopal" },
      { name: "description", content: "Contact Danish Ibrahim Photography in Bhopal via WhatsApp, Instagram or our enquiry form." },
      { property: "og:title", content: "Contact Danish Ibrahim Photography" },
      { property: "og:description", content: "Reach our Bhopal studio on WhatsApp or Instagram." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const items = [
    { icon: MapPin, label: "Studio", value: business.location },
    { icon: MessageCircle, label: "WhatsApp", value: business.phoneDisplay, href: waLink() },
    { icon: Instagram, label: "Instagram", value: business.instagramHandle, href: business.instagram },
  ];
  return (
    <>
      <PageHero eyebrow="Contact" title="Say hello" img={images.maternity} />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[1fr_2fr]">
        <div className="space-y-8">
          {items.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex gap-4">
              <Icon className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <div className="min-w-0">
                <p className="eyebrow">{label}</p>
                {href ? <a href={href} target="_blank" rel="noreferrer" className="break-words hover:text-primary">{value}</a> : <p>{value}</p>}
              </div>
            </div>
          ))}
          <a href={waLink()} target="_blank" rel="noreferrer" className="btn-gold"><MessageCircle className="h-4 w-4" />Chat on WhatsApp</a>
        </div>
        <EnquiryForm full={false} />
      </section>
    </>
  );
}
