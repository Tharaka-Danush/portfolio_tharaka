# Tharaka Jayarathne — Portfolio

A responsive portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS v4 and Lucide icons. Content is based on the supplied CV. Project graphics are illustrative concept interfaces, not actual application screenshots.

## Run locally

Requires Node.js 20.9+.

```sh
npm ci
npm run dev
```

## Production

```sh
npm run build
```

The static deployment output is `out/`. Deploy that folder on a static host, or import this repository into Vercel using its Next.js preset. No API keys, database or environment variables are needed. `next start` is not used with a static export; preview `out/` with a static server instead.

## Customize

- Content, experience, skills, links and projects: `app/page.tsx`
- Theme, layout and responsive breakpoints: `app/globals.css`
- SEO title, description and canonical origin: `app/layout.tsx`
- Downloadable CV: `public/Tharaka-Jayarathne-CV.pdf`
- Export configuration: `next.config.ts`

The SLIC role is marked upcoming because the CV lists a November 2026 start date. Update its status and description when appropriate. Project detail buttons open accessible dialogs; category filters work locally. Contact opens an email client; no contact submissions are stored. Project links lead to the supplied GitHub profile because individual repository URLs were not supplied. The original CV download includes the contact details present in the uploaded document.
