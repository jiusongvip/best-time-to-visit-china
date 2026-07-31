## AI Search Readiness (GEO) Findings

### What Works
- Well-structured content with clear sections, headings, and data-rich tables makes content digestible for AI summarizers.
- FAQ page with 12 Q&A pairs provides natural Q&A structure that AI systems (ChatGPT, Perplexity, Google AI Overviews) can extract and cite.
- Clean semantic HTML (Astro components) aids machine readability.

### Findings

**High**
- **No Organization schema**: Without Organization markup, AI systems cannot resolve your site as an entity. This limits your appearance in AI-generated recommendations, Knowledge Graph panels, and AI Overview citations.
- **No author attribution**: AI systems like ChatGPT and Perplexity increasingly cite content by named authors/outlets. Anonymous content is less likely to be surfaced as a trustworthy source.
- **No llms.txt file**: The emerging standard for AI-reader-friendly site maps. An llms.txt file at the root would give AI systems a curated index of your content with descriptions, improving discoverability in AI search.

**Medium**
- **No citation-friendly structure**: Consider adding inline data points with clear attribution (e.g., "Based on 10-year CMA weather data, Beijing averages...") to make individual claims more citable by AI systems.
- **Missing QAPage schema on FAQ page**: While FAQPage rich results are retired, QAPage schema still helps AI systems parse and surface individual Q&A pairs.
- **robots.txt AI crawler rules**: Currently all AI crawlers have unrestricted access. This is fine for visibility but you may want to explicitly allow ChatGPT-User (real-time browsing) while blocking GPTBot (training) depending on your strategy.

