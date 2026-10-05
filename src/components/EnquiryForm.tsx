import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { packages, services, waLink } from "@/data/site";

export type Enquiry = Record<string, string> & { id: string; createdAt: string };
const KEY = "dip_enquiries";

export function loadEnquiries(): Enquiry[] {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}
export function saveEnquiries(list: Enquiry[]) { localStorage.setItem(KEY, JSON.stringify(list)); }

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().regex(/^[+\d\s-]{7,16}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(255),
  service: z.string().max(100).optional(),
  date: z.string().max(20).optional(),
  location: z.string().trim().max(150).optional(),
  package: z.string().max(50).optional(),
  message: z.string().trim().max(1000).optional(),
});

export function EnquiryForm({ full = true, defaultPackage = "" }: { full?: boolean; defaultPackage?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState<Record<string, string> | null>(null);
  const today = new Date().toISOString().slice(0, 10);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const list = loadEnquiries();
    list.unshift({ ...(r.data as Record<string, string>), id: crypto.randomUUID(), createdAt: new Date().toISOString() });
    saveEnquiries(list);
    setDone(r.data as Record<string, string>);
  }

  if (done) {
    const text = `Hello, I'm ${done.name}. Enquiry for ${done.service || "a shoot"}${done.date ? ` on ${done.date}` : ""}${done.location ? ` at ${done.location}` : ""}. ${done.message || ""}`;
    return (
      <div className="animate-rise border border-primary/40 bg-card p-10 text-center">
        <CheckCircle2 className="mx-auto mb-6 h-12 w-12 text-primary" />
        <h3 className="mb-3 text-3xl">Thank you, {done.name}</h3>
        <p className="mb-8 text-muted-foreground">Your enquiry has been received. We'll reach out within 24 hours to confirm availability.</p>
        <a href={waLink(text)} target="_blank" rel="noreferrer" className="btn-ghost"><MessageCircle className="h-4 w-4" />Follow up on WhatsApp</a>
      </div>
    );
  }

  const F = ({ name, label, children }: { name: string; label: string; children: React.ReactNode }) => (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      {children}
      {errors[name] && <span className="mt-1 block text-xs text-destructive">{errors[name]}</span>}
    </label>
  );

  return (
    <form onSubmit={submit} className="grid gap-8 sm:grid-cols-2" noValidate>
      <F name="name" label="Full name *"><input name="name" className="field" maxLength={100} /></F>
      <F name="phone" label="Phone *"><input name="phone" type="tel" className="field" maxLength={16} /></F>
      <F name="email" label="Email *"><input name="email" type="email" className="field" maxLength={255} /></F>
      <F name="service" label="Service">
        <select name="service" className="field" defaultValue="">
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.title}>{s.title}</option>)}
        </select>
      </F>
      {full && (
        <>
          <F name="date" label="Event date"><input name="date" type="date" min={today} className="field" /></F>
          <F name="location" label="Event location"><input name="location" className="field" maxLength={150} placeholder="Venue, city" /></F>
          <F name="package" label="Package">
            <select name="package" className="field" defaultValue={defaultPackage}>
              <option value="">Not sure yet</option>
              {packages.map((p) => <option key={p.name}>{p.name}</option>)}
            </select>
          </F>
        </>
      )}
      <div className="sm:col-span-2">
        <F name="message" label="Your story"><textarea name="message" rows={4} className="field resize-none" maxLength={1000} /></F>
      </div>
      <div className="flex flex-wrap gap-4 sm:col-span-2">
        <button type="submit" className="btn-gold">{full ? "Check Availability" : "Send Message"}</button>
        <a href={waLink()} target="_blank" rel="noreferrer" className="btn-ghost"><MessageCircle className="h-4 w-4" />Enquire on WhatsApp</a>
      </div>
    </form>
  );
}
