# Prioritized Action Plan: when-to-visit-china.com

**Start:** 2026-07-31 | **Current Health Score:** 57/100 | **Target:** 85+/100

---

## Phase 1: Critical Fixes (Week 1)

| # | Task | Severity | Effort | Category |
|---|------|----------|--------|----------|
| 1 | Add self-referencing canonical tags to BaseLayout.astro | Critical | 10 min | Technical |
| 2 | Configure www → non-www 301 redirect at hosting/CDN level | Critical | 15 min | Technical |
| 3 | Add WebSite + Organization JSON-LD schema to homepage | Critical | 15 min | Schema |
| 4 | Create og-default.png (1200×630px) in public/ directory | Critical | 30 min | Images |
| 5 | Add &display=swap to Google Fonts URL in BaseLayout | High | 1 min | Performance |
| 6 | Add AI crawler directives to robots.txt | High | 5 min | Technical |

**Estimated total:** ~1.5 hours

---

## Phase 2: High-Impact Improvements (Weeks 2-3)

| # | Task | Severity | Effort | Category |
|---|------|----------|--------|----------|
| 7 | Add author bylines with Person schema to all content pages | High | 2 hr | Content |
| 8 | Create /about/ page: credentials, methodology, data sources | High | 3 hr | Content |
| 9 | Create /contact/ page with simple form or email | High | 1 hr | Content |
| 10 | Create /privacy/ page with standard privacy policy | Medium | 1 hr | Content |
| 11 | Add BreadcrumbList JSON-LD schema to BaseLayout | High | 30 min | Schema |
| 12 | Add QAPage JSON-LD schema to /faq/ page | Medium | 20 min | Schema |
| 13 | Add datePublished/dateModified/mainEntityOfPage to Article schema | Medium | 10 min | Schema |
| 14 | Add security headers (CSP, HSTS, X-Frame-Options) | High | 1 hr | Technical |
| 15 | Fix scroll-reveal CLS: reserve layout space for .reveal elements | Medium | 30 min | Performance |

**Estimated total:** ~10 hours

---

## Phase 3: Content & Authority (Month 2)

| # | Task | Severity | Effort | Category |
|---|------|----------|--------|----------|
| 16 | Add destination photography to homepage and key subpages | High | 4 hr | Images |
| 17 | Create dedicated landing pages for high-value long-tail queries | Medium | 6 hr | Content |
| 18 | Add secondary keyword targeting to subpage H2/H3 headings | Low | 2 hr | On-Page |
| 19 | Create llms.txt at site root with page summaries | Medium | 30 min | GEO |
| 20 | Implement IndexNow key and build-pipeline ping | Medium | 1 hr | Technical |
| 21 | Add visible "Last updated" timestamps to content pages | Low | 30 min | On-Page |
| 22 | Self-host Geist fonts to eliminate Google Fonts dependency | Medium | 1 hr | Performance |
| 23 | Add schema markup to subpages (Article, TravelGuide where appropriate) | Medium | 1 hr | Schema |

**Estimated total:** ~16 hours

---

## Phase 4: Monitoring & Iteration (Ongoing)

| # | Task | Category |
|---|------|----------|
| 24 | Set up Google Search Console and verify site | Technical |
| 25 | Set up Bing Webmaster Tools | Technical |
| 26 | Monitor Core Web Vitals in CrUX dashboard | Performance |
| 27 | Track keyword rankings for 10-20 target queries | Content |
| 28 | A/B test OG images for social share CTR | Images |
| 29 | Update weather data and festival dates annually | Content |
| 30 | Evaluate static SVG charts vs. React/Recharts for performance | Performance |
| 31 | Build backlink profile: outreach to travel blogs, China tourism sites | Content |
| 32 | Consider programmatic SEO: unique pages per region×month combination | Content |

---

## Expected Impact

| Phase | After Completion | Estimated Score |
|-------|-----------------|-----------------|
| Baseline | Current state | 57 |
| Phase 1 | Critical fixes done | 65-70 |
| Phase 2 | Trust + schema foundation | 75-80 |
| Phase 3 | Content + visual enhancement | 82-87 |
| Phase 4 | Ongoing optimization | 85-92 |

---

## Effort Summary

| Phase | Tasks | Total Effort | Impact |
|-------|-------|-------------|--------|
| Phase 1 | 6 tasks | ~1.5 hours | High — fixes blocking issues |
| Phase 2 | 9 tasks | ~10 hours | High — builds trust foundation |
| Phase 3 | 8 tasks | ~16 hours | Medium — content & visual polish |
| Phase 4 | 9 tasks | Ongoing | Cumulative — maintenance & growth |
