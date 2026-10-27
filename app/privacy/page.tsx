import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero, Section } from "@/components/ui";
export const metadata: Metadata = { title: "Privacy Policy", description: "How ByteZira Technologies handles information submitted through this website.", alternates: { canonical: "/privacy" } };
const sections: [string, string][] = [
  ["Information we collect", "Details you submit through the contact form: name, email, organisation, enquiry details, budget and timeline."],
  ["Why we use it", "To read and reply to your enquiry and to prevent abuse of the form."],
  ["Email and third parties", "Submissions are delivered by email through a third-party email provider, which processes them on our behalf. This website sets no analytics or advertising cookies."],
  ["Retention", "We keep enquiry emails only as long as needed to handle your request and related business records. Retention period to be confirmed."],
  ["Security", "We use HTTPS and server-side validation. No method of transmission or storage is completely secure."],
  ["Your rights", "You may ask to access, correct or delete your information by emailing us."]
];
export default function Page() {
  return (<><PageHero title="Privacy Policy.">Draft for legal review before publication. It has not been independently certified for compliance.</PageHero>
    <Section><div className="max-w-2xl space-y-8">{sections.map(([h, t]) => <div key={h}><h2 className="text-xl font-semibold text-navy">{h}</h2><p className="mt-2 text-muted">{t}</p></div>)}
      <p className="text-muted">Contact: <a className="font-semibold text-primary" href={`mailto:${site.email}`}>{site.email}</a></p></div></Section></>);
}
