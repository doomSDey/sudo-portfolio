# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-15

### Performance Optimizations

#### Font Loading
- Self-host Inter and JetBrains Mono fonts locally (eliminates Google Fonts dependency)
- Add `display: swap` to prevent FOIT (Flash of Invisible Text)
- Enable font preloading for faster initial render

#### Image Optimization
- Enable AVIF and WebP image format support in Next.js config
- Add responsive `sizes` attribute to all Image components
- Configure 1-year cache TTL for optimized images
- Add `loading="lazy"` to below-fold images and iframes

#### Bundle Size Reduction
- Replace Framer Motion marquee animation with CSS `@keyframes`
- Replace Framer Motion AnimatePresence for mobile menu with CSS transitions
- Enable `optimizePackageImports` for lucide-react and framer-motion

#### Caching
- Add Cache-Control headers for static assets (1-year immutable cache)
- Configure cache headers for Next.js static chunks
- Add cache TTL for optimized images

#### Network
- Add preconnect hints for YouTube embeds
- Remove external Google Fonts requests (now self-hosted)

### Accessibility Improvements

#### ARIA Labels
- Add `aria-label` to mobile menu toggle button
- Add `aria-expanded` state to mobile menu toggle
- Add `aria-controls` linking toggle to mobile menu
- Add `aria-label` to back-to-top button
- Add `aria-hidden="true"` to decorative icons

#### Semantic HTML
- Change card containers from `div` to `article` elements
- Fix heading hierarchy (H2 > H3 structure in Tech Stack and About sections)

#### Color Contrast
- Add CSS overrides to improve contrast for neutral text on dark backgrounds
- Ensure WCAG AA compliance (4.5:1 minimum contrast ratio)

#### Focus Management
- Add visible focus ring to Contact button

### Files Modified

- `next.config.js` - Image formats, cache headers, package optimization
- `app/layout.tsx` - Local fonts, YouTube preconnect hints
- `app/page.tsx` - CSS animations, aria labels, image sizes, semantic HTML
- `app/globals.css` - Marquee animation, contrast fixes
- `public/fonts/` - Added Inter and JetBrains Mono woff2 files

### Expected Lighthouse Score Improvements

| Metric | Before | After |
|--------|--------|-------|
| Performance | 69 | 95+ |
| Accessibility | 89 | 100 |
| LCP | 10.2s | <2.5s |
| FCP | 3.0s | <1.8s |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

---

## [1.0.0] - Initial Release

- Portfolio website with Next.js 15, Tailwind CSS, and Framer Motion
- Sections: Hero, Hackathons, Projects, Experience, Tech Stack, About, Blog, Contact
- Responsive design with mobile navigation
- Dark/light section alternation
- SEO optimization with JSON-LD structured data
- Keyboard shortcuts for navigation
