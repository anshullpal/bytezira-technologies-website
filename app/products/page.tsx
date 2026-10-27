import type { Metadata } from "next";
import { products } from "@/content/site";
import { PageHero, Section, Card, Button } from "@/components/ui";
export const metadata: Metadata = { title: "Products", description: "Language models, applications and infrastructure projects built by ByteZira Technologies.", alternates: { canonical: "/products" } };
export default function Products() {
  const cats = [...new Set(products.map((p) => p.category))];
  return (<>
    <PageHero title="Products and engineering projects.">Our own technology work. Statuses are shown as they currently stand.</PageHero>
    {cats.map((c, i) => (
      <Section key={c} title={c} alt={i % 2 === 1}><div className="grid gap-6">
        {products.filter((p) => p.category === c).map((p) => (
          <article key={p.slug} id={p.slug} className="scroll-mt-24"><Card>
            <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-xl font-semibold text-navy">{p.name}</h3><span className="rounded-md bg-pale px-2 py-1 text-xs text-navy">{p.status}</span></div>
            <p className="mt-3 max-w-3xl text-muted">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-md border border-line px-2 py-1 text-xs">{t}</span>)}</div>
            {(p.docsUrl || p.repoUrl) && <div className="mt-5 flex gap-3">{p.docsUrl && <a className="text-sm font-semibold text-primary hover:underline" href={p.docsUrl} rel="noopener noreferrer">Documentation</a>}{p.repoUrl && <a className="text-sm font-semibold text-primary hover:underline" href={p.repoUrl} rel="noopener noreferrer">Source</a>}</div>}
          </Card></article>))}
      </div></Section>))}
    <Section><Button href="/contact">Ask about a project</Button></Section>
  </>);
}
