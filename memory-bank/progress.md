# Progress

## What Works
- [x] Eleventy build system configured and functional
- [x] Base layout with navigation and footer
- [x] Component-based architecture in place
- [x] Responsive CSS system with design tokens
- [x] Mobile navigation (collapsible) working
- [x] Blog listing page functional
- [x] Blog post template working
- [x] AOS animations integrated

## Primary Work: Content Replacement (All Placeholder)
- [x] **Hero section** - Updated: "Your Vision, Engineered" headline, consulting-focused tagline, CTA links to /contact
- [x] **Features section** - Updated: 3 services (Custom Web Development, Software & App Development, Ongoing Support & Maintenance). Removed WordPress slot. All "Learn more" links point to /contact. Section header: "Services That Drive Your Business Forward"
- [x] **Domain/lead-capture section** - Converted to simple CTA: "Ready to Start Your Project?" header with "Book a Free Consultation" button linking to /contact. Removed domain search input and price list. Uses existing .block__header centering pattern.
- [x] **Plan section** - Updated: 3 tiers (Launch/Build/Scale) with "How We Work Together" header. "Starting at" pricing with NEEDS INPUT placeholders for actual prices and support durations. Build tier highlighted as "Most Popular". All CTAs link to /contact.
- [x] **Showcase section** - Converted to 4-step process overview: Discovery, Planning, Build, Launch & Support. Header: "From Idea to Launch". Icons updated (#computer, #growth, #easy, #clock). Image deferred.
- [x] **About section** - Converted testimonials.njk to About section. Header: "The Person Behind the Code". Bio paragraph (8 years experience, healthcare background) + standalone tagline ("Happiness is not a destination — it's a journey.") with quote icon. Attribution: Héber Sandoval, Founder & Developer. Photo deferred.
- [x] **Callout section** - Updated: Heading "Let's Build Something Great", body copy "Let's discuss your project and find the right engagement for your needs.", button "Get in Touch" linking to /contact.
- [x] **Navigation** - Updated: 6 nav items (Services, Process, Pricing, About, Blog, Contact) with /#anchor links for homepage sections and /page/ links for blog/contact. Section IDs added to features, plan, showcase, and testimonials components.
- [x] **Footer** - Updated: 3-column structure (Services, Company, Connect) with real links. Removed hosting-specific content (Products, Domains, Support sections). Copyright line unchanged.
- [ ] **Blog** - Add real blog posts (currently only example-post.md)
- [x] **Meta tags** - Updated: Dynamic title/description via pageId and frontmatter. Added Twitter cards (summary_large_image), canonical URL, robots tag. og:image and twitter:image use logo.svg (temporary — needs dedicated 1200x630px social-share image before launch). Removed duplicate og:url.

## Incomplete / Needs Work
- [x] **Contact page stub** - Created minimal contact.njk using existing design system classes (.block, .container, .block__header). Links to mailto:hello@simplyenginee.red. Note: This is a temporary stub, NOT the full custom-designed contact form.
- [ ] **Contact form (custom)** - Previous implementation removed due to not matching design system (component style, CSS custom properties, BEM naming conventions). Needs to be rebuilt using the existing design language rather than a generic form. Not yet started. Separate from the stub above.
- [ ] **CSS TODO** - Line 856 in styles.css has: `/* TODO: Consider refactoring this and applying it to all images. */`

## Known Issues
- Plan cards all have duplicate content (all say "Entry" with same specs)
- `assets/styles/` folder contains unused CSS files (style.css, style-2.css, font-awesome.min.css, loader.css)
- `assets/styles/normalize.css` duplicates `assets/css/normalize.css`
