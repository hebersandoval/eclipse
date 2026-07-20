# System Patterns

## Architecture Overview
- **Static Site Generator**: Eleventy (11ty) v3.1.2
- **Template Engine**: Nunjucks (.njk)
- **Content Source**: Markdown files in `src/posts/`
- **Output**: `_site/` directory (GitHub Pages compatible)

## Folder Structure
```
src/
├── index.njk           # Homepage
├── blog.njk            # Blog listing page
├── posts/              # Markdown blog posts
│   └── *.md
└── _templates/
    ├── layouts/
    │   ├── base.njk    # Base HTML layout (shared head, nav, footer)
    │   └── post.njk    # Blog post layout
    └── components/     # Reusable UI components
        ├── hero.njk
        ├── domain.njk
        ├── features.njk
        ├── plan.njk
        ├── showcase.njk
        ├── testimonials.njk
        ├── callout.njk
        ├── nav.njk
        └── footer.njk
```

## Design Patterns

### Component-Based Architecture
- Each page section is a separate Nunjucks include
- Components are stored in `src/_templates/components/`
- Pages compose by including multiple components
- Layout inheritance via frontmatter `layout:` property

### CSS Architecture
- **BEM-like naming**: `.block__element--modifier`
- **CSS Custom Properties**: Design tokens for colors, border-radius
- **Mobile-first**: Media queries at 768px and 1024px breakpoints
- **Utility classes**: `.btn--primary`, `.badge--secondary`, etc.

### Responsive Patterns
- `.grid--1x2` → 2-column grid (768px+)
- `.grid--1x3` → 3-column grid (1024px+)
- `.collapsible` → Mobile accordion pattern (nav, footer sections)
- `.block--skewed-left/right` → Visual section dividers

### Data Flow
- Frontmatter in templates defines: `title`, `layout`, `pageId`, `permalink`
- Collections: `posts` collection for blog articles
- Custom filter: `date` (formats dates to `%Y-%m-%d` format)

## JavaScript Patterns
- ES module syntax
- Collapsible component: click toggles `collapsible--expanded` class
- AOS (Animate On Scroll) for scroll-triggered animations