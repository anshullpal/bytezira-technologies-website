import type { Metadata } from "next";
import { site } from "@/content/site";
import { PageHero, Section } from "@/components/ui";
export const metadata: Metadata = { title: "Terms of Service", description: "Terms for using the ByteZira Technologies website.", alternates: { canonical: "/terms" } };
const sections: [string, string][] = [
  ["Use of the website", "You may use this site for lawful purposes. Do not attempt to disrupt it or access it without authorisation."],
  ["Intellectual property", "Site content, design and the ByteZira name are owned by ByteZira Technologies unless stated otherwise."],
  ["Informational content", "Content is general information and not a binding offer. Project descriptions, statuses and specifications may change."],
  ["Service enquiries", "Sending an enquiry does not create an agreement. Work begins only under a separate written agreement."],
  ["External links", "We are not responsible for the content of third-party sites."],
  ["Liability", "To the extent permitted by applicable law, ByteZira is not liable for losses arising from use of this website."]
];
export default function Page() {
  return (<><PageHero title="Terms of Service.">Draft for legal review before publication. It has not been independently certified for compliance.</PageHero>
    <Section><div className="max-w-2xl space-y-8">{sections.map(([h, t]) => <div key={h}><h2 className="text-xl font-semibold text-navy">{h}</h2><p className="mt-2 text-muted">{t}</p></div>)}
      <p className="text-muted">Contact: <a className="font-semibold text-primary" href={`mailto:${site.email}`}>{site.email}</a></p></div></Section></>);
}
