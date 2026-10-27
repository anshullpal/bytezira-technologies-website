import { Button, Container } from "@/components/ui";
export default function NotFound() {
  return <Container className="py-24"><h1 className="text-3xl font-semibold text-navy">Page not found</h1><p className="mt-3 text-muted">That address doesn&apos;t exist. Return to the homepage or contact us.</p><div className="mt-6 flex gap-3"><Button href="/">Go to homepage</Button><Button href="/contact" variant="secondary">Contact us</Button></div></Container>;
}
