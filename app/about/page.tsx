import type { Metadata } from "next";
import Link from "next/link";
import { products, company, site } from "@/content/site";
import { Founders, CompanyDetails } from "@/components/CompanyDetails";
import { PageHero, Section, Card, FinalCTA } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Anshul Pal, Founder and Technical Lead of ByteZira Technologies, an India-based technology venture focused on engineering, AI, and product development.",
  alternates: { canonical: "/about" },
};

const values = [
  "Engineering quality",
  "Practical innovation",
  "Transparency",
  "Continuous learning",
  "Responsible technology",
  "Security and privacy by design",
];

export default function About() {
  return (
    <>
      <PageHero title="About ByteZira Technologies">
        An India-based technology venture bringing together software
        engineering, AI experimentation, cloud infrastructure, and digital
        services.
      </PageHero>

      <Section title="Company overview">
        <div className="max-w-3xl space-y-4 text-muted">
          <p>
            {site.name} combines technology services with the development of
            its own models and engineering projects. Its areas of focus include
            AI and machine learning, software development, cloud and DevOps,
            cybersecurity, networking, technical consulting, and technical
            content.
          </p>
          <p>
            ByteZira is an emerging venture. The website presents projects
            according to their documented scope and status, distinguishing
            experimental work from production services and publicly available
            products.
          </p>
          <p>
            The goal is to build practical, customer-focused solutions through
            thoughtful engineering, transparent communication, and responsible
            technology development.
          </p>
        </div>
      </Section>

      <Section alt>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-navy">Mission</h2>
            <p className="mt-2 text-muted">
              To make useful technology more accessible through thoughtful
              engineering, practical innovation, and responsible development.
            </p>
          </Card>
          <Card>
            <h2 className="text-xl font-semibold text-navy">Vision</h2>
            <p className="mt-2 text-muted">
              To build technology products and digital solutions that help
              people and organisations solve meaningful problems.
            </p>
          </Card>
        </div>
      </Section>

      <Section title="Core values">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <li
              key={value}
              className="rounded-xl border border-line p-5 font-medium text-navy"
            >
              {value}
            </li>
          ))}
        </ul>
      </Section>

      <Section alt title="Areas of focus">
        <p className="max-w-2xl text-muted">
          Artificial intelligence, software engineering, cloud infrastructure,
          networking, defensive security, technical consulting, and digital
          content.{" "}
          <Link
            href="/services"
            className="font-semibold text-primary hover:underline"
          >
            Explore our services
          </Link>
          .
        </p>
      </Section>

      <Section title="Selected work">
        <ul className="space-y-3">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products#${product.slug}`}
                className="font-semibold text-primary hover:underline"
              >
                {product.name}
              </Link>{" "}
              <span className="text-sm text-muted">
                — {product.status}
              </span>
              <p className="mt-1 text-sm text-muted">{product.summary}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Founders />
      <CompanyDetails />

      <FinalCTA title="Have a project or collaboration in mind?" />
    </>
  );
}
