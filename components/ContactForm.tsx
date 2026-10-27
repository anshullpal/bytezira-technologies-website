"use client";
import { useState, type FormEvent } from "react";
import { contactSchema, enquiryTypes } from "@/lib/contact";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "ok"; delivered: boolean } | { kind: "error"; msg: string };
const f = "mt-1 block min-h-11 w-full rounded-lg border border-line bg-white px-3 text-sm";

export default function ContactForm({ defaultType = "" }: { defaultType?: string }) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "sending") return;
    const fd = new FormData(e.currentTarget), raw = Object.fromEntries(fd) as Record<string, unknown>;
    raw.consent = fd.get("consent") === "on";
    const p = contactSchema.safeParse(raw);
    if (!p.success) { setErrors(Object.fromEntries(p.error.issues.map((i) => [String(i.path[0]), i.message]))); return; }
    setErrors({}); setStatus({ kind: "sending" });
    try {
      const r = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(p.data) });
      const j = await r.json();
      if (!r.ok) { if (j.fields) setErrors(Object.fromEntries(Object.entries(j.fields).map(([k, v]) => [k, (v as string[])[0]]))); setStatus({ kind: "error", msg: j.error ?? "Something went wrong." }); return; }
      setStatus({ kind: "ok", delivered: j.delivered !== false }); e.currentTarget.reset();
    } catch { setStatus({ kind: "error", msg: "Network error. Your entries are kept. Try again or email us directly." }); }
  }

  const field = (id: string, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div><label htmlFor={id} className="text-sm font-medium text-navy">{label}{props.required ? " (required)" : ""}</label>
      <input id={id} name={id} className={f} aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-e` : undefined} {...props} />
      {errors[id] && <p id={`${id}-e`} className="mt-1 text-sm text-red-700">Error: {errors[id]}</p>}</div>
  );

  if (status.kind === "ok") return <div role="status" className="rounded-xl border border-line bg-pale p-6 text-navy">{status.delivered ? "Thanks. Your message was sent and we'll reply by email." : "Development mode: the message was validated but not emailed because delivery isn't configured."}</div>;

  return (
    <form onSubmit={submit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">{field("name", "Full name", { required: true, autoComplete: "name" })}{field("email", "Work or contact email", { required: true, type: "email", autoComplete: "email" })}</div>
      <div className="grid gap-5 sm:grid-cols-2">{field("organisation", "Organisation", { autoComplete: "organization" })}
        <div><label htmlFor="type" className="text-sm font-medium text-navy">Enquiry type (required)</label>
          <select id="type" name="type" defaultValue={defaultType} className={f} aria-invalid={!!errors.type} aria-describedby={errors.type ? "type-e" : undefined}><option value="" disabled>Select a type</option>{enquiryTypes.map((t) => <option key={t}>{t}</option>)}</select>
          {errors.type && <p id="type-e" className="mt-1 text-sm text-red-700">Error: {errors.type}</p>}</div></div>
      {field("subject", "Subject", { required: true })}
      <div><label htmlFor="message" className="text-sm font-medium text-navy">Project description (required)</label>
        <textarea id="message" name="message" rows={6} className={`${f} py-2`} aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-e" : undefined} />
        {errors.message && <p id="message-e" className="mt-1 text-sm text-red-700">Error: {errors.message}</p>}</div>
      <div className="grid gap-5 sm:grid-cols-2">{field("budget", "Budget range")}{field("timeline", "Preferred timeline")}</div>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div><label className="flex gap-2 text-sm"><input type="checkbox" name="consent" className="mt-1 size-4" aria-invalid={!!errors.consent} />I agree that ByteZira may use these details to reply to my enquiry, as described in the Privacy Policy.</label>
        {errors.consent && <p className="mt-1 text-sm text-red-700">Error: {errors.consent}</p>}</div>
      {status.kind === "error" && <p role="alert" className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-800">Error: {status.msg}</p>}
      <button type="submit" disabled={status.kind === "sending"} className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-60 sm:w-fit">{status.kind === "sending" ? "Sending…" : "Send enquiry"}</button>
    </form>
  );
}
