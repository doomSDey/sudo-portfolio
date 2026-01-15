# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-01-16

### Performance Optimizations

#### Critical LCP Fix
- **Root cause identified**: Hero content was wrapped in Framer Motion `motion.div` with `initial={{ opacity: 0 }}`, hiding the LCP element until JavaScript hydrated (~13s on throttled connections)
- **Solution**: Replaced Framer Motion animation with CSS-only `slideUp` animation that keeps content visible (no opacity: 0)
- Hero content now renders immediately with HTML/CSS, no JavaScript required
- Expected LCP improvement: 13s → <2.5s

#### Framer Motion Removal
- **Completely removed Framer Motion** from page.tsx
- Replaced all `motion.article` components with plain `article` elements
- Used CSS transitions (`hover:-translate-y-1 hover:scale-[1.01]`) instead of whileHover
- Eliminated JavaScript animation overhead entirely
- Bundle size reduction: First Load JS now 119 kB

#### Font Loading
- Self-host Inter and JetBrains Mono fonts locally (eliminates Google Fonts dependency)
- **Switched from variable fonts to static fonts** (Regular, SemiBold, Bold weights only)
- **Font subsetting**: Latin characters only using pyftsubset
- Font payload reduced: 830KB → 117KB (86% reduction)
- Add `display: swap` to prevent FOIT (Flash of Invisible Text)
- Enable font preloading for faster initial render

#### Image Optimization
- **Compressed hero-bg.png**: 375KB → 91KB (76% reduction) using pngquant
- **Compressed all project images**:
  - checko.png: 185KB → 51KB (-72%)
  - pathsure-hero.png: 225KB → 34KB (-85%)
  - capywarz.png: 139KB → 39KB (-72%)
  - pipeline.png: 105KB → 24KB (-77%)
- Enable AVIF and WebP image format support in Next.js config
- Add responsive `sizes` attribute to all Image components
- Configure 1-year cache TTL for optimized images
- Add `loading="lazy"` to below-fold images and iframes

#### Bundle Size Reduction
- **Remove Framer Motion entirely** - all animations now pure CSS
- Replace Framer Motion marquee animation with CSS `@keyframes`
- Replace Framer Motion AnimatePresence for mobile menu with CSS transitions
- Enable `optimizePackageImports` for lucide-react

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
- Global CSS overrides for `text-neutral-400` and `text-neutral-500`
- Boosted contrast ratios: 6.8:1 and 8.5:1 on black backgrounds
- Separate overrides for light backgrounds (hackathons section)
- Ensure WCAG AA compliance (4.5:1 minimum contrast ratio)

#### Focus Management
- Add visible focus ring to Contact button

#### Video Accessibility
- Add `aria-hidden="true"` to decorative profile video

### UI/UX Improvements

#### Hero Animation
- Staggered animation: image loads first, text fades in after 0.5s delay
- Slower, more elegant fade-in (1.2s duration)
- Subtle slide-up effect (30px travel distance)

### Files Modified

- `next.config.js` - Image formats, cache headers, package optimization
- `app/layout.tsx` - Local fonts, YouTube preconnect hints
- `app/page.tsx` - CSS animations, aria labels, image sizes, semantic HTML
- `app/globals.css` - Marquee animation, contrast fixes
- `public/fonts/` - Added Inter and JetBrains Mono woff2 files

### Asset Size Reductions

| Asset | Before | After | Reduction |
|-------|--------|-------|-----------|
| Fonts (total) | 830 KB | 117 KB | -86% |
| hero-bg.png | 375 KB | 91 KB | -76% |
| Other images | 654 KB | 148 KB | -77% |
| First Load JS | ~200+ KB | 119 KB | -40%+ |
| **Total payload** | **~1.9 MB** | **~475 KB** | **-75%** |

### Lighthouse Score Results

#### Mobile (Slow 4G Throttling)

| Metric | Before | After |
|--------|--------|-------|
| Performance | 69 | **91** |
| Accessibility | 89 | 96 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |
| FCP | 3.0s | **0.8s** |
| LCP | 10.2s | **3.5s** |
| TBT | 10ms | 10ms |
| CLS | 0 | 0 |

#### Desktop

| Metric | Score |
|--------|-------|
| Performance | **100** |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 100 |
| FCP | **0.2s** |
| LCP | **0.6s** |
| TBT | 0ms |
| CLS | 0 |
| Speed Index | 0.3s |

---

## [1.0.0] - Initial Release

- Portfolio website with Next.js 15, Tailwind CSS, and Framer Motion
- Sections: Hero, Hackathons, Projects, Experience, Tech Stack, About, Blog, Contact
- Responsive design with mobile navigation
- Dark/light section alternation
- SEO optimization with JSON-LD structured data
- Keyboard shortcuts for navigation
