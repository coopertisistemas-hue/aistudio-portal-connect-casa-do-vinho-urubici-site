# Casa do Vinho Urubici — Master Specification & Readdy Handoff

Status: AUTHORITATIVE PRODUCT BRIEF / NOT PRODUCTION CERTIFICATION
Updated: 2026-10-21
Repository: coopertisistemas-hue/aistudio-portal-connect-casa-do-vinho-urubici-site
Target route: /casa-do-vinho-urubici
Existing route /casa-do-vinho MUST remain unchanged.

## Purpose and governance
Create a premium, mobile-first, conversion-led client landing page **inside Portal Urubici**, not an independent website. Readdy owns prototype implementation, Antigravity handles later Portal integration and updates the existing Portal Connect Foundation, Claude performs independent audit. No production deployment or Portal repo modification without owner authorization.

## Required hierarchy
Portal institutional header -> cinematic video hero -> client navigation directly BELOW hero -> **featured authentic bottle cards immediately after the menu** -> collections -> searchable/filterable catalog -> verified wineries -> products/services -> Minha Seleção -> concise brand story and real gallery -> verified reputation -> precise embedded map -> FAQ -> native Portal integrations -> end.

The current workspace's `Manifesto` between menu and featured products **does not satisfy** the commercial priority. Remove, reduce or relocate it so genuine bottle merchandising is first. No duplicate Portal header or standalone client footer. No sprawling cinematic manifesto sections.

## Hero video
Preserve the approved hero's motion, transitions, accessible HTML text, mobile framing, muted autoplay, loop, playsInline, poster fallback and reduced-motion behavior. Replace the placeholder with a 12–15s film of the **real Casa do Vinho interior** and an **authentic Comendador bottle** only after owner-authorized original media are provided. The supplied 1200x344 Comendador banner is a visual identity reference, **not** a source for accurate isolated product imagery. Preferred candidate: central Comendador Reserva Especial Montepulciano, pending confirmation of actual bottle/label/vintage. Do not hallucinate, redraw or alter label text. If assets absent, record BLOCKED_AUTHENTIC_MEDIA for video only; continue V2 implementation.

## Merchandising and conversion
- Large genuine bottle photographs, visible labels, responsive featured rail and catalog cards; no AI-generated bottle masquerading as actual SKU.
- Verify product identity, winery, origin, grape, vintage, notes, pairing, stock and service claims before publication; unverified mock data must remain clearly nonproduction.
- Functional search and filters by wine type, winery, region and collection; detail modal; add/remove quantity; honest empty states.
- Minha Seleção collects an explicit inquiry, not checkout or reservation. Correct WhatsApp number MUST be owner-verified. Placeholder +55 (49) 90000-0000 is prohibited in production.
- No invented prices, discounts, product availability, customer reviews or paid partnerships.
- Monetization-ready placements may be coded but never display "Destaque pago", "patrocinado" or paid claims without a verified commercial entitlement.

## Business and location
Verify address, hours, services and actual units with owner. The map must embed the exact storefront, not Urubici city center. Verify and preserve legal/privacy compliance, contact form behavior, and no fake Google rating. Google reviews require an establishment-specific Google Place ID and secure server-side API/Edge Function contract; do not expose secrets.

## Visual direction
Luxury editorial boutique, product-first, not an all-dark storytelling microsite. Ruby/burgundy #4D1520 / #3F1B1E, CTA #681F30, champagne #C2A477, ivory #FAF7F2. Clear contrast and legible product information. Test 360/390px mobile and 1440px desktop, no overflow, accessible keyboard dialogs, working anchor menu and performant media.

## Portal integration
Use real Portal shell, native related lodging, gastronomy, attractions, editorial and events; tenant-safe Supabase/Edge Function contracts. Do not fabricate business cards or recommendations. Maintain component and asset provenance manifests. Document reusable architecture in the **existing** Portal Connect Foundation, not a new repository.

## SEO/GEO/AEO
The new target route is /casa-do-vinho-urubici; current old-route canonical/OG/schema values need an explicit duplicate-content and migration decision before indexing. Provide accurate semantic HTML, crawlable content/prerender or SSR strategy, verified LocalBusiness/Product/BreadcrumbList structured data, correct internal linking, sitemap and Core Web Vitals. No unverified schema facts.

## Readdy synchronization and handoff
Before claiming completion:
1. Identify exact editor/workspace version and GitHub branch + commit; do not claim GitHub access if absent.
2. Preserve this file and docs/HANDOFF.md and docs/ASSET_MANIFEST.md across pushes; never overwrite newer remote commits or silently remove docs.
3. Verify preview at root and /casa-do-vinho-urubici; republish if required; capture desktop/mobile screenshots.
4. Prove featured bottle cards render **directly after menu**, catalog filters and selection work, assets load, and labels are authentic.
5. Run build, typecheck and lint when available; report PASS/FAIL per gate, not an unqualified PASS.
6. List remaining missing owner inputs separately: original Comendador bottle photograph, authentic boutique footage/stills, official SKU data, correct WhatsApp, exact address, reviews authorization.
7. No production deploy, Supabase changes, Portal main repo edits, or modification of /casa-do-vinho.

## Release gates
G0 editor/GitHub/preview parity; G1 authentic media; G2 mobile UX; G3 functional catalog and WhatsApp inquiry; G4 verified facts and monetization; G5 Portal/tenant integration; G6 SEO/accessibility/performance; G7 independent Claude audit, owner authorization, production certification and Git hygiene.

## GitHub observation at 2026-10-21
After Readdy's reported V3 push, main `page.tsx` includes `FeaturedBottles` but still places `Manifesto` before it; `docs/HANDOFF.md` and `docs/ASSET_MANIFEST.md` are present. This specification was absent after that push and is being restored. This is source-level inspection, not proof of public preview or production behavior.
