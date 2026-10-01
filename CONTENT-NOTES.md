# Content notes: review before publishing

Every number on the site comes from the resume. The items below are **framing**: sentences I wrote to turn a resume bullet into a case study. They are reasonable readings of the resume, but only you know whether they're accurate. Edit them in `src/content/profile.ts`.

## Not on the resume, but on the site

- **"Forward Deployed Engineer"** as the headline. This was your requested positioning. The site also shows your actual title (Chief Product Engineer, Predigle) right next to it.
- **"Going deeper on: model evaluation, AI observability, RAG/Chroma"** (§06). These are listed as skills on the resume, and I've presented them as current learning focus.
- **"Next frontier: forward-deployed engineering, distributed systems, system design"** (§06). This is direction, not a claim.

## Interpretive framing per case study (`works[]`)

| Project | Fields that are interpretation |
|---|---|
| CrewFox | `context` ("not a notebook demo"), `problem`, `decisions`, `challenge` |
| Rule engine | `context` ("behind several business workflows"), `problem`, `decisions`, `challenge` |
| Practice management | `problem`, `decisions` ("modernised in place"), `challenge` |
| Prior authorization | `problem`, `decisions` ("OCR in the intake path"), `challenge` |
| Config platform | `problem`, `decisions`, `challenge` |
| Benchmarking | `problem`, `decisions` ("real-time instead of periodic reports"), `challenge` |
| APIs & microservices | `problem`, `decisions`, `challenge` |

`built`, `metrics`, `stack` and `role` are taken directly from the resume.

## Career stages (§03)

The resume dates only education (2018–2022) and Predigle (May 2022–present). Stages 03–06 are grouped by system, not date, and the site says so. The "What I learned" lines are interpretation.

## Deliberately left out

- **Phone number.** It's on the resume, but a public site doesn't need it.
- **Resume PDF download.** Leaving it out keeps the phone number off the web. To add one, export a version without the phone number to `public/` and link it from Contact.
- **MCP / personal experiments.** Not on the resume. Add them to `log` (tag `notes`) once you write them up.

## Worth adding (would make the site stronger)

- A public repo or demo link for CrewFox. Links would go in the case study and the log.
- Real log entries with dates, as you ship or write things.
- A production domain (set `NEXT_PUBLIC_SITE_URL`).
