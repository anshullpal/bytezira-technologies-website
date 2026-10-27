import type { Metadata } from "next";
import Link from "next/link";
import { researchNotes } from "@/content/site";
import { PageHero, Section, Card, Button } from "@/components/ui";
export const metadata: Metadata = { title: "Research", description: "AI experimentation and engineering research at ByteZira Technologies, starting with the Vaani-350M language model.", alternates: { canonical: "/research" } };
// VERIFY against final Vaani-350M documentation.
const spec: [string, string][] = [["Architecture", "Custom decoder-only Transformer"], ["Parameters", "Approximately 350 million"], ["Training tokens", "Around 3.3 billion (reported, pending verification)"], ["Framework and tooling", "To be published"], ["Intended use", "Research and experimentation"], ["Known limitations", "To be published with model documentation"], ["Evaluation", "No results published yet"], ["Status", "Experimental research model"]];
export default function Research() {
  return (<>
    <PageHero title="Research.">ByteZira explores AI experimentation, engineering and technical learning. We report what we have measured and label what we have not.</PageHero>
    <Section title="Featured: ByteZira Vaani-350M" intro="Training scale, measured performance and estimated capability are kept separate here. Only the first is reported so far.">
      <dl className="grid gap-4 sm:grid-cols-2">{spec.map(([k, v]) => <Card key={k}><dt className="text-sm text-muted">{k}</dt><dd className="mt-1 font-medium text-navy">{v}</dd></Card>)}</dl>
      <p className="mt-6 text-sm"><Link href="/products#vaani-350m" className="font-semibold text-primary hover:underline">View in Products</Link></p></Section>
    <Section alt title="Research methodology"><p className="max-w-2xl text-muted">We aim for reproducible experiments, documented evaluation methods and responsible reporting, including limitations.</p></Section>
    <Section title="Publications and technical notes">{researchNotes.length ? <ul className="space-y-2">{researchNotes.map((n) => <li key={n.title}>{n.href ? <Link href={n.href} className="font-semibold text-primary hover:underline">{n.title}</Link> : n.title} <span className="text-sm text-muted">{n.date}</span></li>)}</ul> : <p className="text-muted">No notes have been published yet. They will appear here.</p>}</Section>
    <Section alt title="Future research" intro="Exploratory and planned only. None of this is completed work."><Button href={`/contact?type=${encodeURIComponent("Research Collaboration")}`}>Research enquiries</Button></Section>
  </>);
}
