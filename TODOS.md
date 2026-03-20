# TODOS

## Design & Development

### ~~Create DESIGN.md~~
**Completed:** 2026-03-20 — DESIGN.md created as the design system reference covering fonts, colours, components, schema, CTAs, and accessibility checklist.

---

### Individual Talk Topic Pages (/speaking-topic-{n}.html)
**What:** One dedicated HTML page per talk topic (5 pages total), each with full Event schema, longer talk description, key takeaways, and a PDF speaker brief download link.
**Why:** The current inline `<details>` expand on speaking.html is limited as a schema surface. Dedicated pages enable independent Google/AI indexing per talk, richer Event schema (with confirmed dates, venue, audience size), and a professional speaker brief URL to share with conference organizers.
**Pros:** Better AI citation per talk. Each confirmed engagement can link to its specific page. Richer schema unlocks Google Rich Results for events.
**Cons:** 5 new HTML files. Only valuable when talk content is mature and engagements are confirmed.
**Context:** speaking.html will launch with `<details>` expand inline (no-JS, works everywhere). Upgrade to dedicated pages when Neil has 2-3 confirmed speaking engagements and polished talk briefs ready to publish.
**Depends on:** speaking.html live + at least 2 confirmed talks with published content.
**Priority:** LOW — post-launch when speaking history exists.

---

### A11y Audit After Implementation
**What:** After all 3 new pages are built, verify: keyboard navigation works on all cards and CTAs, screen reader labels are correct (aria-label, aria-expanded, role attributes), contrast ratios pass AA for any new colour combinations, and all touch targets are >= 44px.
**Why:** Conference chairs and enterprise CTOs may use assistive tech. Google uses accessibility as a ranking signal. Well-structured pages are easier for AI crawlers to parse, boosting GEO citation potential.
**Pros:** Catches issues before pages are indexed. Low cost with CC.
**Cons:** Adds a step post-implementation.
**Depends on:** ✅ All 3 pages (/speaking.html, /enterprise.html, /collaborate.html) are now built.
**Priority:** MEDIUM — ready to run now, before public launch.
