## Technical SEO Findings

**Site:** when-to-visit-china.com | **Framework:** Astro 7.1.6 (SSG) | **Pages:** 9

### What Works
- robots.txt present, allows all crawlers, references sitemap correctly
- XML sitemap is valid, 8 URLs listed with appropriate priorities and changefreq
- Clean URL structure: descriptive, hyphenated, no query parameters
- Mobile responsive: viewport meta tag present, Tailwind CSS responsive utilities in use
- JavaScript rendering: Astro SSG outputs full HTML — content is indexable without JS execution
- All pages have valid, semantic HTML structure

### Findings

**Critical**
- **Missing canonical tags**: No `<link rel="canonical">` in BaseLayout or any page. Every page is at risk of duplicate content issues and parameter-based URL variations being indexed.
- **No redirect setup**: No 301 redirects from non-www to www (or vice versa). Both versions could be indexed simultaneously, splitting link equity.

**High**
- **Missing security headers**: No CSP, HSTS, X-Frame-Options, X-Content-Type-Options, or Referrer-Policy headers. This is a trust signal Google factors into ranking.
- **No AI crawler directives**: robots.txt has no rules for GPTBot, ClaudeBot, Google-Extended, or other AI crawlers. Without explicit rules, all AI bots will freely crawl — consider whether this aligns with your content strategy.

**Medium**
- **IndexNow not implemented**: Bing, Yandex, and Naver support IndexNow for instant indexing. Adding indexnow_key.txt and pinging the API would improve non-Google indexing speed.
- **No breadcrumb navigation**: While internal linking is good, structured breadcrumbs (both HTML and schema) would improve crawl efficiency and provide SERP breadcrumb rich results.

