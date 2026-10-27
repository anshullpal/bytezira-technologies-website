import type { Metadata } from "next";
import { site, company } from "@/content/site";
import { enquiryTypes } from "@/lib/contact";
import ContactForm from "@/components/ContactForm";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact ByteZira Technologies in India about AI, software development, cloud infrastructure, cybersecurity, networking, consulting, or collaboration.",
  alternates: { canonical: "/contact" },
};

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const defaultType = enquiryTypes.find((item) => item === type) ?? "";

  return (
    <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Contact ByteZira
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Let&apos;s build something meaningful.
        </h1>
        <p className="mt-4 max-w-xl text-muted">
          Tell us about your project, technical challenge, product idea, or
          research collaboration. Share a few details and we can understand
          your requirements.
        </p>

        <div className="mt-8 space-y-5">
          <div>
            <h2 className="text-sm font-semibold text-navy">Email</h2>
            <a
              className="mt-1 inline-block font-medium text-primary hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-navy">Location</h2>
            <p className="mt-1 text-sm text-muted">{company.location}</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-navy">Connect</h2>
            <ul className="mt-1 space-y-1">
              {site.socials.map((social) => (
                <li key={social.href}>
                  <a
                    className="text-sm font-medium text-primary hover:underline"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ByteZira on {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ContactForm defaultType={defaultType} />
    </Container>
  );
}
