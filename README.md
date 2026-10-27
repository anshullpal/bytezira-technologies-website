# ByteZira Technologies website

Next.js 15 (App Router), TypeScript (strict), Tailwind CSS, Zod, Lucide. Content is code-managed in `content/site.ts`.

## Run locally (Node 20.9+)
    npm install
    cp .env.example .env.local
    npm run dev        # http://localhost:3000
    npm run typecheck && npm run lint && npm run build

## Contact form
`POST /api/contact` validates with Zod (shared with the client), has a honeypot, and an in-memory rate limit (5 per 10 min per IP; use a shared store such as Upstash for multi-instance production). Email goes through Resend: set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (a verified sender/domain) and `CONTACT_TO_EMAIL`. Without a key, production returns an honest 503; development logs a notice and says it was not emailed.

## Deploy to Vercel
1. Push to Git, import in Vercel, add the three env vars. 2. Deploy. 3. Add `byteziralabs.online` under Project > Domains and create the DNS records Vercel displays for your registrar (don't copy values from elsewhere). 4. Confirm HTTPS, then send a test enquiry.

## Edit content
Add services, products (status, `docsUrl`, `repoUrl`) and `researchNotes` in `content/site.ts`; add verified social URLs to `site.socials`. Colours: CSS variables in `app/globals.css`.

## Needed before launch
Verify Vaani-350M specs and ScreenPen/DNS statuses (marked `VERIFY`); legal review of Privacy/Terms and retention period; Resend account and verified sender; domain control; social URLs; optional OG image.
