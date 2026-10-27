import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";

const hits = new Map<string, number[]>(); // per-instance only; use a shared store (e.g. Upstash) at scale
const limited = (ip: string) => {
  const now = Date.now(), recent = (hits.get(ip) ?? []).filter((t) => now - t < 600_000);
  recent.push(now); hits.set(ip, recent); return recent.length > 5;
};

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    if ((body as { website?: string })?.website) return NextResponse.json({ ok: true }); // silently drop bots
    return NextResponse.json({ error: "Please correct the highlighted fields.", fields: parsed.error.flatten().fieldErrors }, { status: 422 });
  }
  const d = parsed.data, key = process.env.RESEND_API_KEY;
  const text = [`Name: ${d.name}`, `Email: ${d.email}`, `Organisation: ${d.organisation || "-"}`, `Type: ${d.type}`, `Budget: ${d.budget || "-"}`, `Timeline: ${d.timeline || "-"}`, "", d.message].join("\n");
  if (!key) {
    if (process.env.NODE_ENV !== "production") { console.log("[dev only] contact submission not emailed:", d.type, d.subject); return NextResponse.json({ ok: true, delivered: false }); }
    return NextResponse.json({ error: "Email delivery is not configured. Please email us directly." }, { status: 503 });
  }
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST", headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL, to: [process.env.CONTACT_TO_EMAIL ?? "info.bytezira@gmail.com"], reply_to: d.email, subject: `[Website] ${d.type}: ${d.subject}`.slice(0, 200), text }),
    });
    if (!r.ok) throw new Error(String(r.status));
    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    return NextResponse.json({ error: "We couldn't send your message. Please try again or email us directly." }, { status: 502 });
  }
}
