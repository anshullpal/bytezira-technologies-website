import Link from "next/link";
import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { site, type Service, type Product } from "@/content/site";

export const Container = ({ children, className = "" }: { children: ReactNode; className?: string }) => <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;

export function Button({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" }) {
  const cls = `inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors ${variant === "primary" ? "bg-primary text-white hover:bg-primary/90" : "border border-line bg-white text-navy hover:bg-pale"}`;
  return href.startsWith("mailto:") ? <a href={href} className={cls}>{children}</a> : <Link href={href} className={cls}>{children}</Link>;
}

export const Section = ({ id, alt, title, intro, children }: { id?: string; alt?: boolean; title?: string; intro?: string; children: ReactNode }) => (
  <section id={id} className={`scroll-mt-20 py-16 sm:py-20 ${alt ? "bg-alt" : ""}`}><Container>
    {title && <div className="mb-10 max-w-2xl"><h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">{title}</h2>{intro && <p className="mt-3 text-muted">{intro}</p>}</div>}
    {children}</Container></section>
);

export const PageHero = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="border-b border-line bg-alt py-16 sm:py-20"><Container><h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-navy sm:text-5xl">{title}</h1><p className="mt-4 max-w-2xl text-lg text-muted">{children}</p></Container></section>
);

export const Card = ({ children }: { children: ReactNode }) => <div className="flex h-full flex-col rounded-xl border border-line bg-white p-6 shadow-sm">{children}</div>;

export const Checklist = ({ items }: { items: string[] }) => <ul className="space-y-2 text-sm">{items.map((i) => <li key={i} className="flex gap-2"><Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />{i}</li>)}</ul>;

export function ServiceCard({ s }: { s: Service }) {
  return (<Card><s.icon className="mb-4 text-primary" size={26} aria-hidden="true" /><h3 className="text-lg font-semibold text-navy">{s.title}</h3><p className="mt-2 mb-4 text-sm text-muted">{s.summary}</p><Checklist items={s.items} />
    <Link href={`/services#${s.slug}`} className="mt-5 pt-2 text-sm font-semibold text-primary hover:underline">Learn about {s.title.toLowerCase()}</Link></Card>);
}

export function ProductCard({ p }: { p: Product }) {
  return (<Card><p className="text-xs font-medium text-muted">{p.category}</p><h3 className="mt-1 text-lg font-semibold text-navy">{p.name}</h3><p className="mt-2 text-sm text-muted">{p.summary}</p>
    <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-md bg-pale px-2 py-1 text-xs text-navy">{t}</span>)}</div><p className="mt-3 text-xs text-muted">Status: {p.status}</p>
    <Link href={`/products#${p.slug}`} className="mt-4 text-sm font-semibold text-primary hover:underline">View details for {p.name}</Link></Card>);
}

export const FinalCTA = ({ title = "Have a technology challenge in mind?" }: { title?: string }) => (
  <Section alt><div className="max-w-2xl"><h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">{title}</h2><p className="mt-3 text-muted">Let&apos;s discuss your requirements and explore a practical way forward.</p>
    <div className="mt-6 flex flex-wrap gap-3"><Button href="/contact">Book a Consultation</Button><Button href={`mailto:${site.email}`} variant="secondary">Email {site.email}</Button></div></div></Section>
);
