## Schema & Structured Data Findings

### What Works
- Homepage includes JSON-LD Article schema with headline, description, author, and publisher properties.

### Findings

**High**
- **Only one schema type across entire site**: Only the homepage has schema (Article type). None of the 8 subpages carry any structured data at all.
- **Missing WebSite schema**: The homepage should carry WebSite schema with SearchAction to enable the Sitelinks Search Box SERP feature.
- **Missing Organization schema**: No Organization schema anywhere — this is critical for brand building, Knowledge Graph eligibility, and E-E-A-T signals.

**Medium**
- **Missing BreadcrumbList schema**: Would enable breadcrumb rich results in SERPs and improve crawl topology understanding.
- **FAQ page should carry QAPage schema**: The /faq/ page has 12 Q&A pairs. While FAQPage rich results were retired (May 2026), QAPage schema still aids AI Overview entity resolution. Not essential for SERP features but valuable for AI citation readiness.
- **Missing Article properties on homepage**: The Article schema lacks datePublished, dateModified, mainEntityOfPage, and image properties — all recommended for rich result eligibility.

**Low**
- **Consider TravelGuide schema type** for region pages: Schema.org defines TravelGuide as a subtype of Article that would be more semantically accurate for your region and monthly guide pages.

