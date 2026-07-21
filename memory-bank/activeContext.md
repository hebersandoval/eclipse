# Active Context

## Current Focus
Content replacement work in progress. Hero, features, domain/CTA, plan, showcase, and About sections complete.

## Recent Changes
- Created memory-bank/ folder with 6 core files
- Analyzed existing codebase structure and patterns
- **Hero section updated**: "Your Vision, Engineered" headline, consulting-focused tagline, CTA links to /contact
- **Contact stub created**: Minimal contact.njk page using existing design system classes (not the full custom form)
- **Features section updated**: 3 services (Custom Web Development, Software & App Development, Ongoing Support & Maintenance), removed WordPress slot, all "Learn more" links point to /contact
- **Domain/CTA section converted**: Simple CTA with "Ready to Start Your Project?" header, button links to /contact. Removed domain search input and price list.
- **Plan section updated**: 3 tiers (Launch/Build/Scale) with "How We Work Together" header. Prices and support durations use NEEDS INPUT placeholders. Build tier highlighted as "Most Popular".
- **Showcase section converted**: 4-step process overview (Discovery, Planning, Build, Launch & Support) with "From Idea to Launch" header. Icons updated to match process steps.
- **About section created**: Converted testimonials.njk to About section. Header: "The Person Behind the Code". Bio paragraph + standalone tagline with quote icon. Photo deferred.

## Next Steps
- Navigation links update
- Footer links update
- Blog posts
- Meta tags update

## Active Decisions
- Business name: "Simply Engineered" (stays as-is)
- Target audience: Small-to-medium businesses, startups, entrepreneurs, local businesses
- Tone: Professional but approachable
- Contact stub uses existing .block/.container pattern (not custom form yet)
- Features section uses 3 services (not 4) - technical consulting not a standalone offering
- Feature images deferred (same as hero image)
- Domain section uses simple CTA (Option 1) - no embedded form/email capture. Uses existing .block__header centering pattern.
- Plan section uses project-based tiers (Launch/Build/Scale) with "starting at" pricing. Prices and support durations are NEEDS INPUT placeholders - not invented.
- Showcase section uses 4-step process (not 3). Image deferred. Icons: #computer, #growth, #easy, #clock.
- About section: Bio is plain paragraph (semantic), tagline is blockquote. Reuses existing .quote and .quote__organization classes. Photo deferred.
