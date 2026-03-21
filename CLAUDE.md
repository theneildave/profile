# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Is

Personal portfolio and consulting site for **Neil Dave — AI Solution Architect** (`theneildave.in`). Pure static HTML — no build step, no package manager, no server-side code. Deploy by pushing to the `main` branch (GitHub Pages or similar static host).

To preview locally, open any `.html` file directly in a browser, or serve with any static file server:
```
npx serve .
# or
python -m http.server 8080
```

## Site Architecture

```
index.html              ← Main single-page site (hero, about, skills, portfolio, newsletter, podcast, contact)
speaking.html           ← Speaker kit page for conference organisers
enterprise.html         ← Enterprise consulting landing page for CTOs / engineering leaders
collaborate.html        ← AI tool collaboration page for founders / builders
blog.html               ← Article listing page (cards link to /blog/*.html)
blog/post-template.html ← Template to copy when creating a new blog post
lead.html               ← Lead magnet / free resume template page (linked from footer)
/blog/*.html            ← Individual blog posts (each is a standalone HTML file)
/* portfolio pages */   ← gen-ai.html, sepsis.html, cv.html, cv-object-detection.html,
                           run-prediction.html, rai.html — each is a portfolio detail page

/* legacy template files — DO NOT edit or link to these */
inner-page.html, news.html, portfolio-details.html ← Leftover iPortfolio Bootstrap template
                                                       pages; not live, not linked, ignore them
DESIGN.md               ← Design system reference (fonts, colours, components, schema, CTAs)
sitemap.xml             ← Manually maintained — update when adding new pages
robots.txt              ← AI bot access explicitly configured (do not modify without care)
assets/css/style.css    ← Main stylesheet (based on iPortfolio Bootstrap template)
assets/vendor/          ← All JS/CSS vendors bundled locally (Bootstrap, AOS, Swiper, Boxicons, GLightbox)
```

**Root pages** reference assets as `assets/...`. **Sub-pages** (inside `/blog/`) use `../assets/...`.

## Key Conventions

### Adding a Blog Post
1. Copy `blog/post-template.html` → `blog/your-post-slug.html`
2. Fill every `[FILL IN]` placeholder: title, description, canonical URL, published date, schema keywords, breadcrumb title
3. Add a card to `blog.html` matching the existing card pattern (newest post first)
4. Update the **Articles section on `index.html`** (`#articles`) — swap the pinned card to the newest post and shift the previous one to the second column
5. Add the URL to `sitemap.xml`

### Schema Markup (JSON-LD)
Every page must have inline `<script type="application/ld+json">` blocks. Minimum required per page type:
- **All pages**: `BreadcrumbList`
- **Blog posts**: `BlogPosting` (use the template — it's pre-wired)
- **Portfolio pages**: `CreativeWork`
- **index.html**: `Person` + `ProfessionalService` (already present — do not remove)
- **speaking.html**: `Person` with `hasOccupation` Speaker
- **enterprise.html**: `ProfessionalService`
- **collaborate.html**: `Person` with `makesOffer` array (3 Offer items)

The `Person` schema on `index.html` contains the Wikidata entity ID (`Q138716797`) in `sameAs` — this is a critical GEO/AI-citation signal. Never remove or alter the Wikidata URL.

### Positioning — Use These Titles Consistently
The canonical title across all pages, schema, and headings is **"AI Solution Architect"**. Secondary descriptor is **"Generative AI Engineer"**. Do not introduce new title variants.

### Substack Newsletter Section
`index.html` has static HTML cards in `#substack-posts` (crawlable by search engines) and an inline `<script>` block that fetches the live Substack RSS feed and replaces them. When editing the static cards, keep them topically accurate — they are what Google and AI bots index.

### Social Profile URLs
| Platform | Handle/URL |
|---|---|
| LinkedIn | `https://www.linkedin.com/in/neil-dave/` |
| GitHub | `https://github.com/theneildave/` |
| Medium | `https://medium.com/@theneildave` |
| Substack | `https://theneildave.substack.com` |
| Google Scholar | `https://scholar.google.com/citations?user=93Ybux4AAAAJ&hl=en` |
| Twitter/X | `https://twitter.com/theneildave` |
| Instagram | `https://www.instagram.com/theneildave.ai` |

### robots.txt
All major AI crawlers are explicitly allowed (`GPTBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`). Do not add `Disallow` rules for these bots — it would prevent AI search citation.

### Sitemap
`sitemap.xml` is hand-maintained. Add a `<url>` block for every new page, including blog posts in `/blog/`.

### Sidebar Nav — Files That Must Stay in Sync
The left sidebar nav block is duplicated across every page. When adding or removing a nav item, update **all** of the following files:
- `index.html`
- `gen-ai.html`, `sepsis.html`, `cv.html`, `cv-object-detection.html`, `run-prediction.html`, `rai.html`
- `speaking.html`, `enterprise.html`, `collaborate.html`
- `blog/*.html` (every individual blog post file, including `post-template.html`)

Nav links on non-index pages use `index.html#section` format (e.g., `index.html#about`) rather than `#about`. Social links must use full URLs — never `href="#"`.

## GEO / AI-Citation Strategy

This site is intentionally optimised for Generative Engine Optimisation (GEO). Key signals in place:
- Wikidata entity ID in Person schema `sameAs`
- McKinsey + WEF citations with stats in About body copy (boosts AI citation rate ~40%)
- IEEE + Google Scholar publications for E-E-A-T
- `visually-hidden` static text in hero for crawlers (typed animation is JS-only)
- `ProfessionalService` schema with explicit `serviceType` array

When editing content, preserve statistics with source links and keep the "Last updated: Month YYYY" line in the About section current.
