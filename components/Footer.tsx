import Image from "next/image";
import Link from "next/link";
import { site, nav, services, company } from "@/content/site";
import { Logo } from "./Navbar";

const headingClass = "mb-3 text-sm font-semibold text-navy";
const linkClass = "text-sm text-muted transition-colors hover:text-primary";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {/* Brand and verification marks */}
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            {site.description}
          </p>

          {/* Both marks sit side-by-side beneath the company description. */}
          <div className="mt-4 flex max-w-xs items-center gap-3">
            <a
              href="/udyam-qr-high-resolution.png"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open the Udyam registration QR code at full size"
              className="inline-flex shrink-0 rounded-lg border border-line bg-white p-1.5"
            >
              <Image
                src="/udyam-qr-high-resolution.png"
                alt="QR code for Udyam registration verification"
                width={112}
                height={112}
                sizes="112px"
                className="h-24 w-24 object-contain sm:h-28 sm:w-28"
              />
            </a>

            <div className="flex min-w-0 flex-1 items-center justify-center">
              <Image
                src="/msme-logo.png"
                alt="MSME logo"
                width={500}
                height={120}
                sizes="500px"
                className="h-auto max-h-20 w-full max-w-[600px] object-contain"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className={headingClass}>Explore</h2>
          <ul className="space-y-2">
            {nav
              .filter((item) => item.href !== "/contact")
              .map((item) => (
                <li key={item.href}>
                  <Link className={linkClass} href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Services</h2>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  className={linkClass}
                  href={`/services#${service.slug}`}
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={headingClass}>Contact</h2>
          <ul className="space-y-2">
            <li>
              <a className={linkClass} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <Link className={linkClass} href="/contact">
                Contact page
              </Link>
            </li>
            <li className="text-sm text-muted">
              Serving clients from {company.location}
            </li>
            {site.socials.map((social) => (
              <li key={social.href}>
                <a
                  className={linkClass}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>

          <h2 className={`${headingClass} mt-6`}>Legal</h2>
          <ul className="space-y-2">
            <li>
              <Link className={linkClass} href="/privacy">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className={linkClass} href="/terms">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-xs text-muted">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="mt-1">
          {company.businessStructure} · {company.location}
        </p>
      </div>
    </footer>
  );
}
