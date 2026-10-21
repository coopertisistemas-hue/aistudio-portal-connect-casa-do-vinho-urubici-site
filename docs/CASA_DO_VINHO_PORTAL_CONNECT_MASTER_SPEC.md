# Casa do Vinho Urubici — Master Specification & Readdy Handoff

**Status:** DRAFT / READ-ONLY audit. **Date:** 2026-10-21. **Authority:** Owner-approved product requirements; implementation requires independent verification. **Repository:** `coopertisistemas-hue/aistudio-portal-connect-casa-do-vinho-urubici-site`, default `main`. **Target Portal route:** `/casa-do-vinho-urubici`. Existing `/casa-do-vinho` must not be changed.

## 1. Evidence-based audit of GitHub main

Inspected through GitHub connector: `package.json`, `index.html`, `src/pages/casaDoVinhoUrubici/page.tsx`, `Chapter.tsx`, `CatalogPanel.tsx`, `SelectionPanel.tsx`, `WineriesPanel.tsx`, `LocationsPanel.tsx`, `ClientMenu.tsx`, `src/mocks/casaDoVinho/wines.ts`, `config.ts`. The GitHub main page still imports `Manifesto`, `StoryPanel`, `GalleryPanel`, `panels.css`; it does **not** import `FeaturedBottles` or `shop.css`. Direct fetches of those last two files returned 404. **V2 changes reported in Readdy are not reflected in inspected GitHub main.** Do not assume their absence from Readdy's unpublished workspace or other branch; reconcile commit SHA and deployed artifact.

### Findings and severity

- **P0 — Delivery mismatch:** Readdy's reported V2 commercial layout differs from GitHub `main`; prove source branch, SHA, deployed SHA and preview contents before proceeding.
- **P0 — Fictional/unsafe commercial data:** `wines.ts` contains generated Readdy image-search URLs and detailed product names, grapes, tasting notes and pairings not proven by official inventory. No generated bottle may be represented as an authentic Casa do Vinho label. Verify each SKU against official records; hide unverified listings.
- **P0 — Unverified service assertions:** `Chapter.tsx`, `LocationsPanel.tsx` and `index.html` claim guided tastings, boutique ambience or other operational specifics without demonstrated confirmation. Replace with verified owner-approved copy.
- **P0 — Wrong conversion contact:** `config.ts` uses placeholder `+55 (49) 90000-0000` / `5549900000000`. Disable or gate WhatsApp conversion until owner confirms actual number. Never use placeholder in production.
- **P1 — Location is inaccurate:** `config.ts` uses only `Centro de Urubici`; map searches Urubici city rather than the actual storefront. Confirm Av. Adolfo Konder, 626, Centro, Urubici, SC with owner; embed precise location with consent-aware map loading.
- **P1 — SEO mismatch:** `index.html` canonical, OG URL, BreadcrumbList and LocalBusiness ID reference `/casa-do-vinho`, not the new target. Do not self-canonicalize or index the new page before the owner chooses duplicate-page strategy. Existing JSON-LD has unverified service descriptions.
- **P1 — Portal shell duplicated:** `page.tsx` renders `PortalBar` within client LP. Integrate the real Portal shell instead; no duplicate global header or footer.
- **P1 — Readdy-hosted assets:** hero video `storage.helloreaddy.io`, poster `static.readdy.ai`, product images via `readdy.ai/api/search-image`; inventory licenses, dependencies, fallback and migration to owner-controlled media. The current hero is a design/interaction proof, not approved authentic footage.
- **P1 — Conversion validation:** `SelectionPanel.tsx` builds wa.me inquiry with selected wines, name and phone, but needs phone format validation, empty-state and privacy review; verify mobile interactions and consent requirements.
- **P1 — Winery data and monetization:** `WineriesPanel.tsx` references paid placement fields. No paid badge, partnership, winery biography, photo or associated product may be published without verified evidence and active commercial entitlement.
- **P2 — Performance/accessibility:** check cinematic film CPU, reduced-motion, focus/pause, mobile hero visibility, fixed controls, semantic dialog focus trap and no horizontal overflow.
- **P2 — SEO delivery:** Vite SPA alone does not establish prerender/SSR, crawlable product detail routes, sitemap, structured data or GEO/AEO. Verify rendered HTML and indexing plan.

## 2. Non-negotiable product architecture

**Parent Portal header → premium cinematic VIDEO hero → CLIENT SECTION MENU immediately below hero → featured genuine bottles → collections → interactive catalog → wineries → products and services → Minha Seleção → brand/story and real gallery → verified reputation → embedded precise map and locations → FAQ → Portal integrations → end.** No LP-specific header/footer. Existing Portal header/footer behavior must be explicitly resolved with the parent integrator; never duplicate either.

**Hero:** Preserve successful V1 animation architecture, but replace placeholder film with owner-authorized genuine boutique interior and verified premium Casa do Vinho-branded bottle/label. 12–15s target, muted loop playsInline, mobile crop, lightweight poster, reduced-motion fallback, accessible HTML overlay; video asset separately authorized. Never generate fictitious label text or misrepresent stock imagery.

**Commercial priority:** Real bottle photographs must render prominently immediately after hero/menu. Standardized image ratio, alt text, explicit fallback; never substitute AI-generated bottles as real SKUs. Filter by type, winery, origin, collection; detail panel; add/remove quantity; review inquiry; no invented price/stock/checkout.

**Wineries:** Editorial photo-led profiles with verified region, story, portfolio and linked authentic SKUs; internal details, future client LP routes. Monetization-ready tier/featured slots but **no visible sponsored claims** without active verified contract.

**Services:** Clearly separated verified products (wine, accessories, gift options) and services/experiences. Hide unavailable or unconfirmed services.

**Portal integrations:** Native components for lodging, gastronomy, attractions, editorial, events and contextual recommendations, wired to tenant-safe Portal Connect/Supabase contracts by Antigravity. No fabricated results or outbound discovery redirects.

**Map:** Embedded, correct storefront coordinates; lazy-load with privacy considerations and no Google Maps redirect as the default UX.

**Reputation:** Edge Function/API contract for Google Place reviews: source, place ID, fetched_at, rating, review count, excerpts/rights, stale/empty/error states, cache/rate-limit, secrets server-side. Never fake scores. Place ID is per establishment/location, not globally shared.

**SEO/GEO/AEO:** Distinct canonical strategy after duplicate-page decision; semantic crawlable HTML, meaningful title/meta/OG, internal links, correct LocalBusiness/Product/BreadcrumbList JSON-LD only for verified data, structured FAQ where eligible, sitemap and prerender/SSR plan, image/video optimization and answer-first accurate business facts.

**Foundation governance:** Record multi-repo client architecture and reusable contracts in the **existing Portal Connect Foundation**, not a new foundation. Client repo owns presentation and client configuration. Foundation owns architectural documentation, reusable section manifests, tenancy, Supabase/EF contracts, monetization entitlements, audit gates and integration conventions. Parent Portal repo owns routing/shell/deployment. No production write, deploy, merge or Git push without authorization.

## 3. Readdy mandatory delivery contract

1. Report GitHub `owner/repo`, branch, HEAD SHA, last push result; identify whether V2 lives only in editor workspace.
2. Show public preview deployed SHA/build identifier and prove `/` and `/casa-do-vinho-urubici` serve same approved V2, or clearly state discrepancy.
3. Repair missing imports/style only in Readdy workspace, preserving the video interaction, and run build/typecheck/lint as available.
4. Produce desktop 1440 and mobile 390/360 screenshots showing **real rendered bottle cards** and functional catalog/selection; test actual images, not just source code.
5. Deliver versioned code export plus `HANDOFF.md`, `SECTION_MANIFEST.json`, `DATA_CONTRACTS.ts`, `ASSET_MANIFEST.json`, `SEO_HANDOFF.md`, `MONETIZATION.md`, `QA_REPORT.md` (where platform supports; otherwise provide text).
6. Distinguish `VERIFIED`, `OWNER_CONFIRMATION_REQUIRED`, `MOCK`, `UNAVAILABLE` for every SKU, winery, media, service, address, review and integration. Never publish unverified data as facts.
7. Explicit stop: no changes to existing `/casa-do-vinho`, Portal main repo, production DB, Supabase Edge Functions, or live Portal deploy.

## 4. Acceptance gates

- **G0 Repository parity:** Readdy editor, GitHub commit, preview deployed artifact are traceable and consistent.
- **G1 Art direction:** cinematic authentic film + premium bottle merchandising; no misleading media.
- **G2 Mobile:** 360/390, first-screen branding/CTA, fast load, usable filters and selection.
- **G3 Commerce:** product details, filters, quantity, correct WhatsApp message; confirmed number; no fake checkout.
- **G4 Truthfulness:** every published label, winery, claim, service, review and paid badge verified.
- **G5 Integrations:** embedded precise map, tenant-safe native Portal modules, no duplicated shell.
- **G6 SEO/GEO/AEO:** canonical decision, crawlable text and schema validation, performance/accessibility.
- **G7 Independent Claude audit:** evidence-based PASS before merge/deploy, owner authorization, production verification and Git hygiene.

## 5. Recommended next step

First reconcile the V2 source/preview mismatch. Use this document as the single source of truth for Readdy's corrective pass; do not request a V3 redesign. After owner visual approval, Antigravity performs integration and updates the existing Foundation; Claude audits independently.
