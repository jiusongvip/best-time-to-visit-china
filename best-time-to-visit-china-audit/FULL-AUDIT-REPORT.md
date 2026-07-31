# Full SEO Audit Report: when-to-visit-china.com

**Date:** 2026-07-31 | **Business Type:** Travel Guide / Content Publisher | **Framework:** Astro 7.1.6  
**Overall SEO Health Score: 57/100**

---

## Executive Summary

when-to-visit-china.com is a well-structured travel guide site with 9 pages covering the best times to visit China. The content quality is genuinely strong — rich travel narratives, data-backed monthly breakdowns, and excellent internal linking. The site was clearly built with SEO awareness (clean URLs, unique title tags, logical heading hierarchy).

However, the site has significant gaps in areas Google increasingly values: **trust signals** (no author bylines, no about page, no legal pages), **structured data** (only one basic Article schema across 9 pages), and **visual content** (no on-page photography at all for a travel site).

The site's content is its strongest asset. With targeted fixes to technical foundations, trust signals, and schema coverage, the site is positioned to compete well for travel-intent queries about China trip planning.

### Top 5 Critical Issues

1. **Missing canonical tags** — All 9 pages lack self-referencing canonicals, risking duplicate content indexing
2. **No www/non-www redirect** — Link equity split between domain variants
3. **No author, about page, or E-E-A-T signals** — Missing all three "Who/How/Why" signals Google evaluates
4. **Missing foundational schema** — No WebSite, Organization, or BreadcrumbList markup
5. **No social share image** — og-default.png doesn't exist; social shares appear without previews

### Top 5 Quick Wins (under 1 hour total)

1. Add canonical tags to BaseLayout (10 min)
2. Add WebSite + Organization schema to homepage (15 min)
3. Add display=swap to Google Fonts (1 min)
4. Create og-default.png (30 min)
5. Add AI crawler rules to robots.txt (5 min)

---

## Category Breakdown

### Technical SEO — 55/100

| Aspect | Status | Notes |
|--------|--------|-------|
| robots.txt | ✅ Present | Correctly configured, references sitemap |
| Sitemap | ✅ Valid | 8 URLs, appropriate priorities |
| Canonicals | ❌ Missing | No canonical tags on any page |
| WWW redirect | ❌ Missing | Both versions could be indexed |
| HTTPS | ⚠️ Unverified | Not testable on local dev |
| Security headers | ❌ Missing | No CSP, HSTS, or other headers |
| URL structure | ✅ Clean | Descriptive, hyphenated, no params |
| Mobile responsive | ✅ Good | Viewport meta + Tailwind responsive |
| JS rendering | ✅ Excellent | Astro SSG — full HTML in initial payload |
| AI crawler rules | ❌ Missing | No directives for GPTBot, ClaudeBot, etc. |
| IndexNow | ❌ Missing | Not implemented |

### Content Quality — 68/100

The content itself is the site's strongest asset. The homepage is rich with vivid travel narratives, specific data points, and interactive elements. The monthly guide and FAQ are thorough and practical.

**What's missing:** The entire E-E-A-T infrastructure. No author bylines, no about page explaining methodology, no privacy policy, no contact information. The content is good enough to rank — but without trust signals, Google may hesitate to surface it for YMYL-adjacent queries (travel advice involving safety, costs, logistics).

- Experience signals: **Strong** (vivid first-person narratives)
- Expertise signals: **Weak** (no named authors or credentials)
- Authority signals: **Weak** (no external citations or backlinks)
- Trust signals: **Weak** (no about/contact/privacy pages)

### On-Page SEO — 82/100

Well-executed fundamentals. Every page has a unique, well-written title tag and meta description. H1 alignment is correct. Internal linking is excellent — navigation, footer, and contextual CTAs all work together. Heading hierarchy is consistent and logical.

Minor opportunities: secondary keyword targeting in H2/H3 headings, visible lastmod dates on content pages, and adding the year to the homepage H1.

### Schema & Structured Data — 25/100

The single biggest technical gap. Only the homepage has any schema at all (a basic Article type). Eight subpages carry zero structured data.

Priority additions:
- WebSite schema with SearchAction (homepage)
- Organization schema (homepage)
- BreadcrumbList schema (site-wide)
- QAPage schema (FAQ page)
- Enhanced Article schema with datePublished/dateModified/image

### Performance — 70/100

Astro's SSG output gives the site a strong performance foundation. The main concerns are:
- Missing OG image (social sharing impact)
- Google Fonts loading without display=swap (FOIT during load)
- Scroll-reveal animations potentially contributing to CLS
- React/Recharts bundle size for chart islands (~95KB gzipped)

### AI Search Readiness — 38/100

The site's well-structured content with data-rich tables is naturally AI-friendly. However, without Organization schema, author attribution, or an llms.txt file, the site is missing the signals AI systems use to identify trustworthy sources for citation.

### Images — 20/100

The site has no on-page photography. For a travel guide, this is a major gap. Travel content is inherently visual — destination photos, seasonal imagery, and festival pictures would dramatically improve engagement, shareability, and perceived quality. The missing OG image compounds this issue.

---

## Scoring Methodology

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 55 | 22% | 12.1 |
| Content Quality | 68 | 23% | 15.6 |
| On-Page SEO | 82 | 20% | 16.4 |
| Schema / Structured Data | 25 | 10% | 2.5 |
| Performance (CWV) | 70 | 10% | 7.0 |
| AI Search Readiness | 38 | 10% | 3.8 |
| Images | 20 | 5% | 1.0 |
| **Overall** | | | **56.5 → 57** |

---

## See Also

- [ACTION-PLAN.md](ACTION-PLAN.md) — Prioritized implementation roadmap
- [findings/technical.md](findings/technical.md) — Detailed technical SEO findings
- [findings/content.md](findings/content.md) — Content quality & E-E-A-T analysis
- [findings/schema.md](findings/schema.md) — Structured data audit
- [findings/onpage.md](findings/onpage.md) — On-page SEO analysis
- [findings/performance.md](findings/performance.md) — Performance & CWV
- [findings/images.md](findings/images.md) — Image optimization
- [findings/geo.md](findings/geo.md) — AI search readiness
- [findings/sxo.md](findings/sxo.md) — Search experience optimization
- [audit-data.json](audit-data.json) — Structured data envelope
