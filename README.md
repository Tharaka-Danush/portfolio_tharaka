# Tharaka Jayarathne — Portfolio

A responsive portfolio built with Next.js App Router, React, TypeScript, Tailwind CSS v4 and Lucide icons. Content is based on the supplied CV. Project cards use application screenshots from the supplied archives; the research card uses a decorative illustration.

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

- Content, experience, skills and links: `app/page.tsx`
- Project case studies and screenshot galleries: `app/projects.ts`
- Theme, layout and responsive breakpoints: `app/globals.css`
- SEO title, description and canonical origin: `app/layout.tsx`
- Downloadable CV: `public/Tharaka-Jayarathne-CV.pdf`
- Export configuration: `next.config.ts`

The SLIC role is marked upcoming because the CV lists a November 2026 start date. Update its status and description when appropriate. Project detail buttons open accessible dialogs; category filters work locally. Contact opens an email client; no contact submissions are stored. Project links lead to the supplied GitHub profile because individual repository URLs were not supplied. The original CV download includes the contact details present in the uploaded document.

## Updated portfolio content

- Five project case studies with problem, contribution, result, and features.
- Original application screenshots from the supplied project archives, with a selectable gallery and full-size viewing links. Student screenshots are explicitly marked as synthetic demonstration data in the supplied images.
- Office Attendance uses its sign-in screenshot; employee payroll and attendance screens are not included.
- Graduation portrait and social sharing metadata, favicon, canonical URL for the supplied Vercel deployment.
- Research links directly to https://github.com/Tharaka-Danush/Research . The public notebook uses EfficientNetV2S. The original CV refers to EfficientNetV2B0 and approximate accuracy values that are not substantiated by these saved notebook outputs, so the portfolio omits performance figures. The downloadable CV remains the original supplied PDF; review that PDF separately before sharing.
- Application ZIPs, SQL dumps, account credentials and internal configuration are not included in this portfolio.

### Update your Vercel site

Replace the matching source files in your existing portfolio repository with this project's files, commit and push. Vercel redeploys when connected to that branch. No environment variables are required. The `.openai/` folder configures the separate ChatGPT Sites preview and is unnecessary for Vercel.
