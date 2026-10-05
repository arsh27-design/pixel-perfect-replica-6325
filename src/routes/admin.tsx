import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { loadEnquiries, saveEnquiries, type Enquiry } from "@/components/EnquiryForm";
import { gallery, galleryCategories, packages, services, testimonials } from "@/data/site";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Studio Admin — Danish Ibrahim Photography" },
      { name: "description", content: "Owner dashboard for enquiries and site content." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Studio Admin" },
      { property: "og:description", content: "Owner dashboard." },
    ],
  }),
  component: Admin,
});

function Admin() {
  const [list, setList] = useState<Enquiry[]>([]);
  useEffect(() => setList(loadEnquiries()), []);
  const remove = (id: string) => { const n = list.filter((e) => e.id !== id); setList(n); saveEnquiries(n); };

  const stats = [
    ["Enquiries", list.length], ["Gallery images", gallery.length], ["Categories", galleryCategories.length],
    ["Services", services.length], ["Packages", packages.length], ["Testimonials", testimonials.length],
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-32">
      <p className="eyebrow mb-3">Studio Admin</p>
      <h1 className="mb-10 text-5xl">Dashboard</h1>
      <div className="mb-14 grid grid-cols-2 gap-4 md:grid-cols-6">
        {stats.map(([l, v]) => (
          <div key={l} className="border border-border bg-card p-5"><p className="font-display text-4xl text-primary">{v}</p><p className="text-xs uppercase tracking-widest text-muted-foreground">{l}</p></div>
        ))}
      </div>

      <h2 className="mb-6 text-3xl">Enquiries</h2>
      {list.length === 0 ? (
        <p className="mb-14 text-muted-foreground">No enquiries yet. Submissions from the Booking and Contact forms appear here (on this device).</p>
      ) : (
        <div className="mb-14 overflow-x-auto border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-card text-xs uppercase tracking-widest text-muted-foreground">
              <tr>{["Date", "Name", "Phone", "Email", "Service", "Event", "Package", "Message", ""].map((h) => <th key={h} className="p-3 font-normal">{h}</th>)}</tr>
            </thead>
            <tbody>
              {list.map((e) => (
                <tr key={e.id} className="border-t border-border align-top">
                  <td className="p-3 whitespace-nowrap">{new Date(e.createdAt).toLocaleDateString()}</td>
                  <td className="p-3">{e.name}</td><td className="p-3">{e.phone}</td><td className="p-3">{e.email}</td>
                  <td className="p-3">{e.service}</td><td className="p-3">{e.date} {e.location}</td><td className="p-3">{e.package}</td>
                  <td className="max-w-xs p-3 text-muted-foreground">{e.message}</td>
                  <td className="p-3"><button onClick={() => remove(e.id)} aria-label="Delete"><Trash2 className="h-4 w-4 text-destructive" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2 className="mb-4 text-3xl">Managing content</h2>
      <p className="max-w-2xl text-muted-foreground">Gallery images, categories, services, packages & prices and testimonials are all kept in one content file, so they can be updated in one place. A full login-protected editor can be added in the next phase.</p>
    </section>
  );
}
