# Tech Context

## Stack
- **Runtime**: Node.js (ES modules)
- **Static Site Generator**: Eleventy (11ty) v3.1.2
- **Template Language**: Nunjucks (.njk)
- **Content Format**: Markdown (.md)
- **Styling**: Vanilla CSS (no preprocessor)
- **JavaScript**: ES6+ (minimal client-side)

## Dependencies
From package.json:
- `@11ty/eleventy`: ^3.1.2 (only production dependency)

## External Resources
- **Fonts**: Google Fonts (Inter)
- **Icons**: SVG sprite system (`/assets/images/icons/sprite.svg`)
- **Animations**: AOS (Animate On Scroll) v2.3.1 via CDN

## Development Setup
- **Start command**: `npm start` (runs `eleventy --serve`)
- **Input directory**: `src/`
- **Output directory**: `_site/`
- **Includes directory**: `src/_templates/`
- **Module type**: ES modules (`"type": "module"` in package.json)

## Configuration (.eleventy.js)
- Passthrough copy: `assets/` directory
- Plugin: HtmlBasePlugin (for base path support in CD)
- Collection: `posts` (filtered by `src/posts/*.md`)
- Filter: `date` (formats dates to `%Y-%m-%d` format)

## CSS System
- **Custom Properties**: `--color-primary`, `--color-secondary`, `--color-accent`, etc.
- **BEM naming**: `.block__element--modifier`
- **Breakpoints**: 768px (tablet), 1024px (desktop)
- **Key components**: buttons, cards, grids, collapsibles, badges, lists

## Build Output
- GitHub Pages compatible (uses `.nojekyll` file)
- CNAME file for custom domain: `www.simplyenginee.red`