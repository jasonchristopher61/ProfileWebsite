# Jason Christopher — Portfolio

A premium, interactive personal portfolio for Jason Christopher, Senior
Full-Stack Developer. Built with Next.js (App Router), TypeScript, Tailwind
CSS v4, and Framer Motion.

## Features

- Animated hero with rotating role text, particle background, and a magnetic
  CTA
- Storytelling About section + interest tags
- "What I Do" interactive service cards
- Featured Projects with click-to-expand case studies
- Scroll-animated career "Journey" timeline
- "Beyond Code" creative playground (music/film/photo/game placeholders —
  fill in with real content whenever ready)
- A real interactive terminal (`help`, `whoami`, `skills`, `projects`,
  `experience`, `contact`, `clear` — plus a hidden `party` command)
- A floating "Ask Jason's AI" assistant — **demo mode only**, answers from a
  fixed set of canned topics in `data/assistant.ts`. No external API calls,
  no keys anywhere in the frontend.
- Light/dark theme toggle (persisted, no flash-of-wrong-theme)
- Scroll progress bar, cursor glow, reduced-motion support, skip-to-content
  link

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run lint
```

## Content you still need to fill in

This was built with **no invented achievements, metrics, or links** — only
what was supplied. A few things are intentionally left as placeholders:

- `data/social.ts` — GitHub and LinkedIn URLs are `"#"`. Swap in your real
  profile links.
- `public/resume.pdf` — the "Download Résumé" button links here; add your
  actual resume PDF to `public/resume.pdf`.
- `data/creative.ts` — the "Beyond Code" section (music, film, photography,
  game dev, experiments) is all placeholder copy. Replace with real
  titles/embeds/links once you have something to show.
- A real photo in the Hero section (currently a placeholder avatar icon).
- If you want the AI assistant to answer with a real LLM instead of canned
  responses: add a server route (e.g. `app/api/assistant/route.ts`) that
  calls your model of choice with the API key kept server-side only, and
  swap the `getAssistantReply` function in `components/Assistant.tsx` to
  call it instead.

## Deployment (Vercel)

This project is set up for zero-config deployment on
[Vercel](https://vercel.com):

1. Push this repo to GitHub (already done if you're reading this from the
   repo).
2. In Vercel, "Add New Project" → import this GitHub repo → it auto-detects
   Next.js → Deploy.
3. Every push to `main` redeploys automatically.

No environment variables are required for the current (demo-mode) feature
set.
