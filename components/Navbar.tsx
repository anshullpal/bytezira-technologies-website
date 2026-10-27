"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content/site";

export function Logo() {
  return (<span className="flex items-center gap-2 font-semibold text-navy"><svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="7" fill="#1769E0" /><path d="M9 8h7a3.5 3.5 0 0 1 0 7H9zm0 9h8a3.5 3.5 0 0 1 0 7H9z" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinejoin="round" /></svg>ByteZira <span className="font-normal text-muted">Technologies</span></span>);
}

export default function Navbar() {
  const path = usePathname(), [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false); window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k); }, []);
  const link = (href: string) => `rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${(href === "/" ? path === "/" : path.startsWith(href)) ? "text-primary" : "text-ink"}`;
  const cta = "inline-flex min-h-10 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary/90";
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="ByteZira Technologies home"><Logo /></Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {nav.map((n) => <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined} className={link(n.href)}>{n.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className={`${cta} hidden sm:inline-flex`}>Book a Consultation</Link>
          <button type="button" className="inline-flex size-11 items-center justify-center rounded-md border border-line lg:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-white px-5 pb-5 pt-3 lg:hidden">
          <ul className="flex flex-col">{nav.map((n) => <li key={n.href}><Link href={n.href} aria-current={path === n.href ? "page" : undefined} className={`block py-3 ${link(n.href)}`}>{n.label}</Link></li>)}</ul>
          <Link href="/contact" className={`${cta} mt-3 w-full justify-center`}>Book a Consultation</Link>
        </nav>
      )}
    </header>
  );
}
