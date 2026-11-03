# Video Editor Portfolio — Radhika Saxena

One-page portfolio aimed at short-form food content: 24-hour turnaround, revisions, 10–15 videos a month, long-form tutorials from the same footage, colorist-ready handoff.

Built with React 19, TypeScript, Tailwind CSS 4, Framer Motion and Vite.

## Edit the content

Everything lives in **`src/data/site.ts`**. You should not need to touch a component to publish.

| What | Where |
| --- | --- |
| Name, role, email, time zone | `site` |
| Showreel embed | `site.showreel.url` (YouTube/Vimeo, unlisted is fine) |
| Test-edit offer | `site.testEdit` |
| Work cards | `work` array |
| Services, commitments, process, tools | `services`, `commitments`, `process`, `toolGroups` |
| About + FAQ | `about`, `faq` |

Anything marked `TODO` is still placeholder. **Do not publish a turnaround or a tool you cannot actually deliver** — the first missed 24-hour deadline costs more than a thin portfolio.

## Run locally

```bash
npm install
npm run dev
```

Build and check:

```bash
npm run typecheck
npm run lint
npm run build
npm run preview
```

## Deploy

`vite.config.ts` sets `base: '/video-editor-portfolio/'`, which matches the repository name.

1. Create a public repo named `video-editor-portfolio`.
2. Push this project to its `main` branch.
3. Repo → Settings → Pages → Source: **GitHub Actions**.
4. The included workflow builds and deploys on every push.

Live at `https://<your-username>.github.io/video-editor-portfolio/`.

If you rename the repo, change `base` in `vite.config.ts` to match.

## Notes

- Dark-only by design; no theme toggle to maintain.
- `prefers-reduced-motion` is respected (marquee, transitions, Framer Motion).
- No external images: poster areas are CSS gradients, so nothing breaks if an asset goes missing.
- Add `public/portrait.jpg` for the About photo slot.
