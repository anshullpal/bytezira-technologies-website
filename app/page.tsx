import { site, services, products } from "@/content/site";
import { Button, Container, Section, ServiceCard, ProductCard, FinalCTA, Card } from "@/components/ui";
import HeroVisual from "@/components/HeroVisual";

const caps = ["AI and language-model development", "Software engineering", "Cloud and network infrastructure", "Security-focused engineering"];
const steps = [["Discover", "Understand the problem, goals, requirements and constraints."], ["Plan", "Define the solution, architecture, scope and milestones."], ["Build", "Implement, test and refine the solution."], ["Deliver", "Document the result, support deployment and identify next steps."]];

export default function Home() {
  return (
    <>
      <section className="border-b border-line"><Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2">
        <div className="rise">
          <p className="mb-4 text-sm font-medium text-primary">AI · Software · Cloud · Security</p>
          <h1 className="text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl">{site.tagline}</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">ByteZira Technologies brings together software engineering, artificial intelligence, cloud infrastructure, and security to help turn technical ideas into practical digital solutions.</p>
          <div className="mt-8 flex flex-wrap gap-3"><Button href="/contact">Book a Consultation</Button><Button href="/products" variant="secondary">Explore Our Work</Button></div>
        </div>
        <div className="flex justify-center lg:justify-end"><HeroVisual /></div>
      </Container></section>

      <section aria-label="Capabilities" className="border-b border-line bg-alt"><Container><ul className="grid gap-4 py-6 text-sm font-medium text-navy sm:grid-cols-2 lg:grid-cols-4">{caps.map((c) => <li key={c} className="border-l-2 border-primary pl-3">{c}</li>)}</ul></Container></section>

      <Section title="Technology services built around real engineering needs." intro="Content writing and digital marketing are also available. See the full list on the Services page.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.slice(0, 6).map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
      </Section>

      <Section alt title="Products and engineering projects.">
        <div className="grid gap-6 md:grid-cols-3">{products.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      </Section>

      <Section title="AI and research spotlight." intro="ByteZira Vaani-350M is our first language-model project: a custom decoder-only Transformer. Architecture, training details, evaluation method and limitations will be published as documentation is finalised. No benchmark results are claimed.">
        <Button href="/research" variant="secondary">Read about our research</Button>
      </Section>

      <Section alt title="How we work." intro="Our proposed approach to every engagement.">
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{steps.map(([t, d], i) => <li key={t}><Card><span className="text-sm font-semibold text-primary">Step {i + 1}</span><h3 className="mt-1 text-lg font-semibold text-navy">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></Card></li>)}</ol>
      </Section>
      <FinalCTA />
    </>
  );
}
