# 7code website rebuild — content pack + build prompt

**Two steps. Then walk away.**

---

## Step 1 — put this folder in the repo

Unzip `7code-build/` into the root of the 7code.tech repository, so you have:

```
<repo-root>/
  7code-build/
    START-HERE.md
    CLAUDE-CODE-PROMPT.md
    _brief/CONTENT-STANDARDS.md
    content/...
  src/          ← your existing code
  package.json
  ...
```

## Step 2 — paste the prompt

Open Claude Code in the repo. Open `CLAUDE-CODE-PROMPT.md`, copy everything below the
`COPY EVERYTHING BELOW THIS LINE` marker, and paste it as your first message.

That's it. It will work through eight steps and open a single PR. It has been told not to stop for
approval on ordinary decisions, and to log every choice it makes in `IMPLEMENTATION-LOG.md`.

---

## What's in the pack

**17 pages of final, approved copy.** All of it written in 7code voice against the Notion Knowledge
Base positioning. All claims restricted to facts already public on 7code.tech or Clutch — nothing
invented, nothing needing your sign-off.

| | |
|---|---|
| **Homepage** | `content/pages/home.mdx` — rebuilt around a four-door ICP router |
| **Tier 1 money pages** | ai-automation-agency-uk · ai-development-company-uk · mvp-development-agency-uk · staff-augmentation-company-uk |
| **Tier 2 money pages** | ai-agent-development-company · rag-development-company · ai-consultancy-uk · nearshore-software-development-uk · ai-agency-uk |
| **Packages** | operational-quick-scan · ai-ready-ops-blueprint · automation-pilot · department-automation-sprint |
| **Hub articles** | what-ai-automation-costs-uk · questions-to-ask-an-ai-development-partner · gdpr-ip-data-residency-outsourcing-ai-eu |
| **Case study** | `_TEMPLATE.mdx` — fillable, for retemplating your 10 existing studies |

Plus `_brief/CONTENT-STANDARDS.md` (the rules the copy was written to) and
`content/content-spec.types.ts` (the schema the build enforces).

---

## Decisions I made so you don't have to

Each of these was an open question. I resolved it rather than sending it back to you. Change any of
them by editing one file — noted below.

| Decision | What I chose | Change it in |
|---|---|---|
| **Pricing approach** | Ranges inside FAQ answers + one cost article. No `/pricing/` page. *(Your call from the last round.)* | — |
| **Package prices** | Quick Scan €4,500–6,000 · Blueprint €9,000–14,000 · Pilot €15,000–25,000 · Sprint €40,000–65,000 · MVP €40,000–90,000 · prototype from €8,000 · senior €6,400–8,000/mo · architect €9,600–12,800/mo | `_brief/CONTENT-STANDARDS.md` §5, then find-replace in `content/` |
| **Booking tool** | Cal.com, unless the repo already has HubSpot Meetings — then that. Four routes: `/book/discovery`, `/book/quick-scan`, `/book/mvp-scoping`, `/book/technical-call` | `BOOKING_PROVIDER` config constant |
| **Named reviewer** | Defaults to Nicu Mardari with a TODO. The E-E-A-T signal only works if the reviewer differs from the author — pick a second senior engineer | `REVIEWER_NAME` config constant |
| **Client metrics** | Only what's already published on your site or Clutch: Hera (3-month MVP, RAG-verified intake) · Numerize (6,000+ accounts) · G42 (EXPO 2020 scale, 2 years) · Lidl Romania · WholeSum. **Nothing invented, nothing needing client sign-off.** | — |
| **Founding year** | 2017, per the company registration. Your `/about` page and several directories say otherwise — the prompt tells Claude Code to fix the site; the directories are in the off-page pack | `COMPANY.founded` |
| **Money pages vs service pages** | Kept separate. Money pages sit at root and rank for a search term; `/service/*` pages explain a capability. They link one direction only, so they don't cannibalise | — |

---

## What this does not include

- **Case study copy.** The template is there; the 10 existing studies need real numbers, and those need
  client sign-off. That's the one thing I couldn't decide for you.
- **The off-page work** — Clutch profile merge, directory cleanup, NAP fixes, listicle outreach. That's
  in `off-page-action-pack.md` from the previous message. It touches no code and you can start it today,
  in parallel. Given Clutch supplies roughly 85% of ChatGPT's citations in your category, the duplicate
  profile is arguably more urgent than anything in this pack.
- **Ahrefs validation.** The keyword targeting is built on live SERP observation, not verified volume —
  your Ahrefs plan blocked every Site Explorer and Keywords Explorer endpoint. Worth re-checking the
  Tier 1 terms once that's upgraded.
