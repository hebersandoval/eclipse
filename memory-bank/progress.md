# Progress

## Project Status
Live, deployed at www.simplyenginee.red

## What Works
- Full website with hero, services, pricing, process, about, contact sections
- Mobile-responsive design with collapsible navigation
- Blog with markdown posts
- Contact form integrated with Formspree
- Back to top button
- Smooth scroll for anchor links
- Skip link for keyboard users
- Structured data (JSON-LD) for SEO
- OG meta tags for social sharing
- WebP image format with PNG fallback

## Recent: CUBE CSS Refactoring (Jul 24, 2026)

### Completed
- [x] CSS audit of all 1,483 lines of `styles.css`
- [x] Identified 6 issues: undefined `--border-radius`, dead `.block-domain` CSS, hardcoded hover color, duplicate `a` selector, hardcoded spacings, unused AOS attributes
- [x] Created CUBE CSS directory structure: `abstracts/`, `base/`, `composition/`, `blocks/`, `utilities/`, `exceptions/`
- [x] Split into 24 CSS files organized by concern
- [x] New `styles.css` entry point with `@import` in correct cascade order
- [x] Fixed bug: `--border-radius` → `var(--radius-sm)` (forms now render correctly)
- [x] Fixed bug: `.btn--accent:hover` → `var(--color-accent-hover)` (brand consistency)
- [x] Removed dead `.block-domain` styles (~25 lines)
- [x] Added `composition/flow.css` for consistent sibling spacing
- [x] Full build passes with zero errors
- [x] All files copied to `_site/` via Eleventy passthrough copy

### Remaining Low-Priority Items
- [ ] Inline `normalize.css` into `base/reset.css` (saves 1 HTTP request)
- [ ] Consider build-time CSS concatenation if HTTP waterfall is a concern
- [ ] Remove unused AOS `data-aos` attributes from templates (CSS migrated, but JS lib not loaded)
- [ ] Replace hardcoded spacing values with spacing tokens throughout blocks (e.g., `margin: 3rem 0` → `var(--space-7)`)

## Known Issues
- Fixed: White gap on narrow mobile screens (Galaxy Note 3 and similar). Caused by combination of `clip-path` section dividers, wide stretched button padding, and no `overflow-x: hidden` guard. Patched with `body { overflow-x: hidden }`, `max-width: 100%` on hero images, and reduced `btn--stretched` padding on ≤480px.

## Recent Fixes (Jul 24, 2026)
- [x] Mobile horizontal overflow: added `body { overflow-x: hidden }` to `base/base.css`
- [x] Hero image: added `max-width: 100%` to `.hero__image` in `blocks/hero.css`
- [x] Stretched buttons: reduced horizontal padding on narrow screens (≤480px) in `blocks/button.css`

## Recent Changes (Jul 25, 2026)
- [x] Contact page mobile redesign: modernized form with recessed inputs, refined labels, cleaner button
- [x] Spam-resistant phone reveal: progressive enhancement with split string fragments, keyboard accessible
- [x] Footer mobile modernization: reduced padding, removed uppercase headings, tighter spacing
- [x] Removed redundant `domain.njk` CTA section from homepage (Option 1: remove entirely)
- [x] Mobile button modernization: reduced size from ~86px to ~48px, removed pill shape, sentence case
- [x] Pricing section redesign: replaced fixed-price tiers with engagement types (Fixed-Price, Hourly, Retainer)

## Recent Changes (Jul 27, 2026)
- [x] About/testimonial section refinement: constrained image max-width, improved typography hierarchy
- [x] Quote sizing: reduced mobile quote from 3rem to 2rem, desktop from 2rem to 1.8rem

## Next Milestones
- Elevation improvements (design polish, typography, spacing rhythm)
- Content refinement (replace remaining placeholder copy)
- Blog content strategy (publish posts)