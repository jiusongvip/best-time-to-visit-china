## Performance Findings

### What Works
- **Astro SSG**: Full static HTML generation means LCP should be excellent — content arrives in the initial HTML payload with no client-side rendering delay.
- **Tailwind CSS**: Utility-first approach produces minimal CSS, especially with Vite tree-shaking.
- **No render-blocking third-party scripts**: Only Google Fonts (preconnected) and Astro's island hydration scripts. No analytics, ad networks, or heavy third-party embeds.

### Findings

**High**
- **No OG image exists**: BaseLayout references `/og-default.png` as the fallback OG image, but no such file exists in the public/ or assets directory. This means social shares have no preview image — a major missed traffic opportunity.
- **Google Fonts with render-blocking potential**: While `preconnect` is used, the font stylesheet itself loads synchronously. Consider self-hosting Geist font files to eliminate the external dependency and improve LCP.

**Medium**
- **No font-display strategy**: The Google Fonts link doesn't specify `display=swap`, which means invisible text during font load (FOIT). Add `&display=swap` to the Google Fonts URL for a FOUT approach that's better for LCP.
- **Scroll-reveal animations may impact CLS**: The `.reveal` CSS class uses `opacity: 0` + `transform: translateY(28px)` which reserves no space in layout. During page load, these elements pop in as they enter the viewport, potentially contributing to Cumulative Layout Shift.
- **React islands (Recharts, etc.) are not lazy-loaded with loading boundaries**: The CostChart, HotelComparison, ChinaMap, and ComparisonTool are hydrated as client:visible islands — this is correct for interactivity but these islands ship React (~45KB gzipped) + Recharts (~50KB gzipped) to every user, even those who don't interact.

**Low**
- **Missing preload hints for key above-fold assets**: No `<link rel="preload">` for critical fonts or icons.
- **No service worker or offline strategy**: While not essential, this would improve repeat-visit performance.

