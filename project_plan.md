# Casa do Vinho Urubici — Portal Urubici Premium Landing

## 1. Project Description
A premium, mobile-first landing page for **Casa do Vinho Urubici**, a wine boutique in the Serra Catarinense. The page lives inside Portal Urubici as a premium client page at `/casa-do-vinho-urubici`: a cinematic video opening, an editorial story of the house, a browsable wine catalog (Vivino-inspired structure, never its design), a working "Minha Seleção" inquiry list that ends on WhatsApp, winery profiles, services, an authentic gallery, verified-proof section, embedded map, FAQ and Portal integrations.

## 2. Page Structure
- `/` — existing template route (**not modified**)
- `/casa-do-vinho-urubici` — the new landing page (single scrolling page with anchor navigation + internal detail views)

Anchors on the page: `#a-casa`, `#colecoes`, `#vinhos`, `#selecao`, `#vinicolas`, `#servicos`, `#galeria`, `#avaliacoes`, `#onde-estamos`, `#duvidas`, `#portal`, `#contato`.

## 3. Core Features
- [x] Cinematic autoplaying video chapter (one screen tall) with copy timed to the footage acts
- [x] Full-screen parallax panels after the chapter, pointer parallax, scroll reveals
- [x] Manifesto panel with word-by-word lighting
- [x] Wine catalog: search, filters (type, region, winery, collection), detail view
- [x] "Minha Seleção": quantities, summary, name/phone, explicit WhatsApp inquiry (no checkout, no prices)
- [x] Winery editorial profiles + internal detail views (premium/sponsored placement labels)
- [x] Services, gallery, verified-proof fallback, embedded Google map, FAQ
- [x] Portal Urubici integration-ready placeholders (lodging, restaurants, attractions, events, editorial)
- [x] Real contact form (Readdy Form), SEO metadata + JSON-LD

## 4. Data Model Design
No database in this phase. Static, typed mock adapters under `src/mocks/casaDoVinho/`:
- `wines` — name, winery, region, country, type, grape, collection, notes, pairing, image
- `wineries` — name, origin, story, styles, labels, placement (premium / sponsored / standard)
- `reviews` — source, date, rating, verified flag (empty-safe fallback)
- `faq`, `portal`, `gallery`, `services` — content contracts ready to be swapped for Portal Connect data

## 5. Backend / Third-party Integration Plan
- Database: not connected — static mock adapters, documented as replaceable
- Phone/WhatsApp: configurable constant (placeholder to be replaced by the client)
- Form: Readdy Form `dbce7u5pirsr9cnblbc0`
- Shopify / Stripe: not used (no checkout; catalog is an inquiry list)

## 6. Development Phase Plan

### Phase 1: Cinematic chapter + visual system
- Goal: video hero with timed beats, palette, type system, client menu
- Deliverable: `/casa-do-vinho-urubici` first screen

### Phase 2: Editorial panels
- Goal: manifesto, story, collections, parallax system, reveals
- Deliverable: full-screen panels with motion

### Phase 3: Commerce layers
- Goal: catalog, selection + WhatsApp, wineries, services, gallery, proof, map, FAQ, portal, contact form
- Deliverable: complete page

## 7. Handoff Notes
- All prices, stock, ratings and testimonials are intentionally absent (no invented facts)
- Winery placements flagged as paid are visible as such
- Panel images and wine images are licensed/generated placeholders matching the brand mood