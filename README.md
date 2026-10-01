# Field Manual: Gajendhiran Mohan

Personal portfolio. Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4. No UI kit, no icon library, no animation library.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL before deploying, so canonical links and the OG image resolve.

## Concept

The site is laid out like a printed technical manual. Sections are numbered §01–§09, a running header tracks the current section, and a left margin rail carries metadata. Layout comes from hairline rules and an asymmetric 12-column grid, not cards.

**Signature interaction:** `~/work`. Selected work behaves like a directory tree, and opening a folder loads its case study.

- Keyboard: ↑ ↓ Home End move through the tree (ARIA tabs pattern).
- Each project is deep-linkable at `/#work/<slug>`. Any link on the page that points at one opens it in the explorer (capabilities, principles, career, log).
- Below 1024px it becomes an accordion of directories.

## Where things live

| | |
|---|---|
| `src/content/profile.ts` | **All content.** Edit this, not the components. |
| `src/components/` | One component per section, plus `Section`, `CaseStudy` and `SystemSketch` |
| `src/app/globals.css` | Colour tokens (light + dark), type primitives (`.meta`, `.display`), motion |
| `src/app/opengraph-image.tsx` | Generated social card |

### Adding things

- **New case study:** add an entry to `works`. `layout` sets the rhythm of the spread: `"metrics"` leads with the numbers, `"system"` with the sketch, `"narrative"` with the problem.
- **Log entry:** add to the top of `log`. Tags: `shipped`, `building`, `certified`, `notes`.
- **Accent colour:** change `--accent` and `--accent-ink` in `globals.css` (light and dark blocks).

## Content rules

The resume (`Gajendhiran_M.pdf`) is the source of truth. Every figure on the site appears in it. `CONTENT-NOTES.md` lists the lines that interpret a resume bullet rather than quote it; review them before publishing.
