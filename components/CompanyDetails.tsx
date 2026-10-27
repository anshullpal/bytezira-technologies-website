import Link from "next/link";
import { company } from "@/content/site";
import { Section, Card } from "./ui";

export function Founders() {
  if (!company.founders.length) return null;

  return (
    <Section title="Founder">
      <ul className="grid gap-6 sm:grid-cols-2">
        {company.founders.map((founder) => (
          <li key={founder.name}>
            <Card>
              <h3 className="text-lg font-semibold text-navy">
                {founder.name}
              </h3>
              <p className="text-sm font-medium text-primary">
                {founder.role}
              </p>

              {founder.education && (
                <p className="mt-3 text-sm text-muted">
                  {founder.education}
                </p>
              )}

              {founder.bio && (
                <p className="mt-3 text-sm leading-6 text-muted">
                  {founder.bio}
                </p>
              )}

              {founder.recognitions.length > 0 && (
                <div className="mt-5 border-t border-line pt-4">
                  <h4 className="text-sm font-semibold text-navy">
                    Recognition
                  </h4>
                  <ul className="mt-3 space-y-3">
                    {founder.recognitions.map((recognition) => (
                      <li key={recognition.url}>
                        <p className="text-sm font-medium text-navy">
                          {recognition.organisation} ({recognition.year})
                        </p>
                        <p className="mt-1 text-sm text-muted">
                          {recognition.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted">
                          {recognition.description}
                        </p>
                        <a
                          href={recognition.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-sm font-semibold text-primary hover:underline"
                        >
                          View published recognition
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {founder.profileUrl && (
                <a
                  href={founder.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  View {founder.name}&apos;s profile
                </a>
              )}
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function CompanyDetails() {
  const { udyam } = company;

  if (!udyam) return null;

  return (
    <Section alt title="Business information">
      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <h3 className="text-sm text-muted">Business name</h3>
          <p className="mt-2 font-semibold text-navy">
            {company.publicBrandName}
          </p>
          <p className="mt-2 text-sm text-muted">
            {company.businessStructure} · {company.location}
          </p>
        </Card>

        <Card>
          <h3 className="text-sm text-muted">Registration</h3>
          <p className="mt-2 font-semibold text-navy">
            {company.registrationStatus}
          </p>
          <p className="mt-2 text-sm text-muted">
            Udyam Registration No. {udyam.number}
          </p>
          {udyam.showNumberPublicly}
        </Card>
      </div>
    </Section>
  );
}
