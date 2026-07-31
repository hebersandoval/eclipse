# Active Context

## Current Focus
CUBE CSS refactoring — migrated from a single monolithic `styles.css` (1,483 lines) to a modular CUBE CSS architecture with 24 organized files.

## Recent Changes

### CUBE CSS Migration (July 24, 2026)
- Split `assets/css/styles.css` into 24 files following CUBE CSS methodology
- Created directory structure: `abstracts/`, `base/`, `composition/`, `blocks/`, `utilities/`, `exceptions/`
- New `styles.css` serves as the entry point with `@import` statements in correct cascade order
- No HTML classes renamed — zero visual changes
- No Eleventy config changes needed

### Bug Fixes Applied
1. **`--border-radius` → `var(--radius-sm)`** — Fixed undefined CSS variable in `.input` and `.input-group` (lines 376, 398 of old CSS). Was using `var(--border-radius)` which was never defined.
2. **`.btn--accent:hover` color** — Changed from hardcoded `#ec3000` (red-orange) to `var(--color-accent-hover)` (`#1d4ed8` blue) for brand consistency.

### Dead CSS Removed
- Removed `.block-domain` pricing grid styles (~25 lines) — the `domain.njk` template was rewritten to a simple CTA section and no longer uses those classes.

### New Composition Added
- `composition/flow.css` — `.flow` class for consistent sibling spacing (opt-in, no HTML changes needed)

### Contact Card Redesign (July 30, 2026)
- Replaced inline phone reveal widget with a structured `.contact-card` component
- Added vertical card layout with label/value pairs, thin divider, and consistent spacing
- Improved premium feel with subtle background, restrained typography, and calm interaction
- Maintained progressive enhancement, accessibility, and zero layout shifts during phone reveal

### 404 Page Redesign (July 30, 2026)
- Redesigned 404 page with full-screen dark hero section and animated "404" background
- Added CSS-only floating animation and subtle gradient shift background
- Included three navigation actions: Return Home, View Services, Contact Us
- Created new `blocks/error.css` with animations that respect `prefers-reduced-motion`
- GitHub Pages automatically serves `404/index.html` for missing pages

## File Structure
```
assets/css/
├── abstracts/
│   └── tokens.css              # Design tokens (custom properties)
├── base/
│   ├── reset.css                # Box-sizing reset
│   ├── typography.css           # html/body/h1-h3/p typography
│   └── base.css                 # Links, focus states, skip-link, reduced motion
├── composition/
│   ├── container.css            # .container
│   ├── flow.css                 # .flow (new — sibling spacing)
│   ├── grid.css                 # .grid, .grid--1x2, .grid--1x3
│   └── media.css                # .media object
├── blocks/
│   ├── about.css
│   ├── back-to-top.css
│   ├── badge.css
│   ├── block.css                # .block section wrapper
│   ├── button.css
│   ├── callout.css
│   ├── card.css
│   ├── collapsible.css
│   ├── contact.css
│   ├── features.css
│   ├── footer.css
│   ├── form.css                 # .input, .input-group, .form
│   ├── hero.css
│   ├── icon.css
│   ├── list.css
│   ├── nav.css
│   ├── plan.css
│   ├── process.css              # .block-showcase
│   ├── quote.css
│   └── testimonial.css
├── utilities/
│   └── utilities.css            # .sr-only, .link-arrow
├── exceptions/
│   └── exceptions.css           # .block--skewed, .callout-signup
└── styles.css                   # Entry point with @imports
```

## Next Steps
- Verify visual output matches pre-refactor (compare screenshots)
- Consider adding a build-time CSS concatenation step if HTTP request waterfall is a concern
- The `normalize.css` file still loads separately — could be inlined into `base/reset.css` for one fewer request