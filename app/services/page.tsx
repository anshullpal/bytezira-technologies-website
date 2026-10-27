import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/site";
import { PageHero, Section, Button, Checklist, Container } from "@/components/ui";
export const metadata: Metadata = { title: "Services", description: "AI, software development, cloud and DevOps, cybersecurity, networking, technical consulting, and technical content from ByteZira Technologies.", alternates: { canonical: "/services" } };
export default function Services() {
  return (<>
    <PageHero title="Technology services.">Engineering support from first idea to deployment. Scope and pricing are agreed per project.</PageHero>
    <nav aria-label="Services" className="border-b border-line"></nav>
    {services.map((s, i) => (
      <Section key={s.slug} id={s.slug} alt={i % 2 === 1}><div className="grid gap-8 lg:grid-cols-2">
        <div><s.icon className="mb-3 text-primary" size={28} aria-hidden="true" /><h2 className="text-2xl font-semibold text-navy">{s.title}</h2><p className="mt-3 text-muted">{s.summary}</p>{s.note && <p className="mt-3 rounded-lg border border-line bg-white p-3 text-sm text-muted">{s.note}</p>}</div>
        <div><h3 className="mb-3 font-semibold text-navy">What we can help with</h3><Checklist items={s.items} /><div className="mt-6"><Button href={`/contact?type=${encodeURIComponent(s.enquiry)}`}>Discuss {s.title}</Button></div></div>
      </div></Section>))}
  </>);
}
