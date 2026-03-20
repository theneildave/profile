# DESIGN.md — theneildave.in Design System

This file is the single source of truth for the visual system used across all pages.
Reference it before building any new page or component.

---

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Headings (h1–h3) | Raleway | 600–700 | Sidebar name, section titles, card titles |
| Sub-headings (h4–h5) | Raleway | 500–600 | Card titles, FAQ headings |
| Body text | Open Sans | 400 | All paragraph text, list items |
| Labels / chips | Poppins | 500 | Skill badges, category tags, metadata pills |

Google Fonts load string (use on every page):
```
https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap
```

**Do NOT use Lato.** gen-ai.html uses Lato — this is a known inconsistency. New pages must use the stack above.

---

## Colours

| Token | Hex | Usage |
|---|---|---|
| Primary | `#0d6efd` | CTA buttons, links, active states |
| Primary hover | `#0b5ed7` | Button hover |
| Dark navy | `#1a3a6b` | Skill badge text, accent borders |
| Skill badge bg | `#e8f0fe` | Skill badge background |
| Blog tag bg | `#e8f4fd` | Category tag background |
| Blog tag text | `#0d6efd` | Category tag text |
| Body text | `#272829` | Default body colour (from iPortfolio) |
| Muted text | `#6c757d` | Metadata, captions, secondary copy |
| Light bg | `#f8f9fa` | Alternating section background |
| White | `#ffffff` | Card backgrounds, main content area |
| Sidebar bg | `#040b14` | Left sidebar (iPortfolio default) |

---

## Buttons

| Variant | Class | Usage |
|---|---|---|
| Primary CTA | `btn btn-primary btn-lg px-4 rounded-pill` | Hero CTA, main page CTA |
| Secondary CTA | `btn btn-outline-primary btn-sm rounded-pill` | Talk brief expand, view links |
| Pill style is mandatory | Always add `rounded-pill` | Never use square-cornered buttons |

---

## Components

### Skill Badge
```html
<span class="skill-badge">Machine Learning</span>
```
Defined in `assets/css/style.css`. Background `#e8f0fe`, text `#1a3a6b`, border-radius 6px.

### Blog / Category Tag
```html
<span class="blog-tag">Enterprise AI</span>
```
Defined in `assets/css/style.css`. Background `#e8f4fd`, text `#0d6efd`, border-radius 20px.

### Talk Topic Card (speaking.html)
Conference-program style. Structure:
```html
<div class="card mb-3">
  <div class="card-body">
    <div class="d-flex justify-content-between align-items-start mb-2">
      <span class="blog-tag">Enterprise AI</span>
      <small class="text-muted">45 min · Keynote</small>
    </div>
    <h5 class="card-title">Talk Title Here</h5>
    <p class="card-text text-muted small mb-2">For: CTOs and Engineering Leads</p>
    <details>
      <summary class="btn btn-outline-primary btn-sm rounded-pill">View Talk Brief</summary>
      <div class="mt-3">
        <p><strong>Key takeaways:</strong> ...</p>
        <p><strong>Why Neil:</strong> ...</p>
      </div>
    </details>
  </div>
</div>
```

### Service Pillar Card (enterprise.html)
Problem-first with left border accent. NOT icon-grid.
```html
<div class="card h-100 border-0 shadow-sm" style="border-left: 4px solid #1a3a6b !important;">
  <div class="card-body ps-4">
    <p class="fw-bold mb-1">Problem statement here</p>
    <p class="text-muted small">What Neil does about it.</p>
    <p class="small"><em>Proof point or outcome stat.</em></p>
  </div>
</div>
```

### Partnership Format Card (collaborate.html)
Lightweight term-sheet style. Alternating light/white rows (not a card grid).
```html
<div class="p-4 mb-3 bg-light rounded">
  <h5>Format Name</h5>
  <p class="text-muted small mb-1"><strong>This is for you if...</strong> description</p>
  <p class="text-muted small mb-1"><strong>What Neil brings:</strong> ...</p>
  <p class="text-muted small mb-0"><strong>Time commitment:</strong> ...</p>
</div>
```

### Routing Strip Card (index.html)
Navigation tool, not a feature card. Icon + 2 lines + arrow.
```html
<a href="enterprise.html" class="routing-card d-block p-3 rounded border text-decoration-none">
  <div class="d-flex align-items-center gap-2">
    <i class="bx bx-briefcase fs-4 text-primary"></i>
    <div>
      <div class="fw-semibold text-dark small">For enterprise organisations deploying AI</div>
      <div class="text-muted" style="font-size:0.8rem;">Strategy · Implementation · ROI →</div>
    </div>
  </div>
</a>
```

---

## Icons

Use **Boxicons** (`bx` prefix) exclusively. Bootstrap Icons (`bi` prefix) are also loaded and may be used for UI elements (accordion arrows, etc.). No additional icon libraries.

Common icons used:
- Home: `bx bx-home`
- About: `bx bx-user`
- Portfolio: `bx bx-book-content`
- Speaking: `bx bx-microphone`
- Enterprise: `bx bx-briefcase`
- Collaborate: `bx bx-group`
- Articles: `bx bx-edit`
- Contact: `bx bx-envelope`

---

## Animations

Use AOS (Animate on Scroll) — already loaded on all pages:
- `data-aos="fade-up"` — standard card/section entrance
- `data-aos="fade-in"` — hero container
- `data-aos-delay="100"` etc. — stagger items in a row

Do not add new animation libraries.

---

## Layout

Bootstrap 5 grid. Sidebar is fixed-width 300px on desktop (handled by iPortfolio CSS).

| Breakpoint | Sidebar | Content columns |
|---|---|---|
| ≥ 1200px (xl) | Fixed left, 300px | Full remaining width |
| 768–1199px | Collapsed (hamburger) | Full width |
| < 768px | Collapsed (hamburger) | Full width, single column |

Card grids per page:
- **Talk topic cards** (speaking.html): `col-lg-6` (2-column desktop, 1-column mobile)
- **Service pillar cards** (enterprise.html): `col-lg-4` (3-column desktop, 1-column mobile)
- **Routing strip** (index.html): `col-lg-4` (3-column desktop, 1-column mobile)
- **Collaborate formats**: single-column (alternating bg rows, not a grid)

---

## Navigation — Sidebar (all pages)

Every page uses the same left sidebar. On new pages (not index.html), nav links use `index.html#section` format except for dedicated pages:

```html
<nav id="navbar" class="nav-menu navbar" aria-label="Main navigation">
  <ul>
    <li><a href="index.html#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
    <li><a href="index.html#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
    <li><a href="index.html#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
    <li><a href="speaking.html" class="nav-link"><i class="bx bx-microphone"></i> <span>Speaking</span></a></li>
    <li><a href="enterprise.html" class="nav-link"><i class="bx bx-briefcase"></i> <span>For Enterprise</span></a></li>
    <li><a href="blog.html" class="nav-link"><i class="bx bx-edit"></i> <span>Articles</span></a></li>
    <li><a href="index.html#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
  </ul>
</nav>
```

Files that must be updated when nav changes (from CLAUDE.md):
- `index.html`
- `gen-ai.html`, `sepsis.html`, `cv.html`, `cv-object-detection.html`, `run-prediction.html`, `rai.html`
- `speaking.html`, `enterprise.html`, `collaborate.html`

---

## Schema Markup Requirements

Every page must have `<script type="application/ld+json">` blocks:

| Page | Required schemas |
|---|---|
| All pages | BreadcrumbList |
| index.html | Person + ProfessionalService (already present — do not remove) |
| speaking.html | BreadcrumbList + Speaker (Person with hasOccupation) |
| enterprise.html | BreadcrumbList + ProfessionalService |
| collaborate.html | BreadcrumbList + Person + Offer |
| blog posts | BreadcrumbList + BlogPosting |
| portfolio pages | BreadcrumbList + CreativeWork |

The Wikidata entity ID in Person schema `sameAs` is a critical GEO signal — never remove `https://www.wikidata.org/wiki/Q138716797`.

---

## CTA Patterns

### mailto: CTA (speaking.html, collaborate.html)
Always include a plain-text fallback below the button:
```html
<a href="mailto:hello@theneildave.in?subject=Speaker%20Inquiry%20%E2%80%94%20[Your%20Event%20Name]"
   class="btn btn-primary btn-lg px-4 rounded-pill speaking-cta">
  Invite Neil to Speak
</a>
<p class="text-muted small mt-2">Or email directly:
  <a href="mailto:hello@theneildave.in">hello@theneildave.in</a>
</p>
```

### Calendly CTA (enterprise.html)
Always include a fallback link below the widget:
```html
<div class="calendly-inline-widget" data-url="https://calendly.com/theneildave" style="min-width:320px;height:630px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<p class="text-center mt-2 text-muted small">
  If the calendar doesn't load,
  <a href="https://calendly.com/theneildave" target="_blank" rel="noopener">book directly here →</a>
</p>
```

---

## Accessibility Checklist

- All CTA buttons: `btn-lg` (min 48px height) ✓
- Mobile cards: min 44px tap target ✓
- Sidebar nav: `aria-label="Main navigation"` on `<nav>`
- Talk card expand: `<details>/<summary>` — keyboard accessible natively ✓
- All images: descriptive `alt` text (not filename)
- Skip-to-content link on each new page (visually hidden until focused)
- Color contrast: body text on white passes AA; badge text on badge bg ~7.5:1 (passes)

---

## Page Boilerplate (every new page)

Required in `<body>` — first element:
```html
<i class="bi bi-list mobile-nav-toggle d-xl-none"></i>
```

Required in `<head>`:
```html
<!-- Canonical -->
<link rel="canonical" href="https://theneildave.in/PAGE.html">

<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet">

<!-- Vendor CSS -->
<link href="assets/vendor/aos/aos.css" rel="stylesheet">
<link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
<link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
<link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
<link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
<link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

<!-- Main CSS -->
<link href="assets/css/style.css" rel="stylesheet">
```

Required at end of `<body>`:
```html
<script src="assets/vendor/purecounter/purecounter_vanilla.js" defer></script>
<script src="assets/vendor/aos/aos.js" defer></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js" defer></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js" defer></script>
<script src="assets/vendor/isotope-layout/isotope.pkgd.min.js" defer></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js" defer></script>
<script src="assets/vendor/typed.js/typed.umd.js" defer></script>
<script src="assets/vendor/waypoints/noframework.waypoints.js" defer></script>
<script src="assets/vendor/php-email-form/validate.js" defer></script>
<script src="assets/js/main.js" defer></script>
```
