# ASSET MANIFEST — Casa do Vinho Urubici

**Updated:** 2026-10-21  
**Route:** `/casa-do-vinho-urubici`  
**Purpose:** asset provenance, authenticity, rights declaration, replacement plan and Portal integration handoff.

## Rights and authenticity are separate checks

**Contractual authorization — client declaration (2026-10-21):** The contracted Portal Connect provider reports an executed commercial agreement with Casa do Vinho granting permission to use the client's supplied imagery and content for the project. The underlying contract and its detailed rights clauses were not independently inspected here. Treat **owner-supplied assets** as contractually authorized subject to scope, exclusions and third-party rights; do **not** demand repetitive blanket permissions. Maintain source/provenance records. **This authorization does not transform generated images into real boutique/product photographs and does not prove the accuracy of mock catalog data.**

Use the following states consistently:
- `CLIENT_SUPPLIED_AUTHORIZED_DECLARED`: client-provided asset within declared contract scope; provenance still recorded.
- `AI_GENERATED_PLACEHOLDER`: generated illustration, **not** authentic boutique or product photo.
- `THIRD_PARTY_REVIEW_REQUIRED`: outside-source asset with separate license/rights check.
- `OWNER_FACT_CONFIRMATION_REQUIRED`: authentic-looking but identity, label, vintage or facts still need verification.
- `READY_FOR_PROTOTYPE_ONLY`: permissible in preview when clearly distinguished from final content.
- `READY_FOR_PRODUCTION`: authenticity, rights scope, product/business facts and technical quality checked.

## A. Cinematic hero

| Field | Current record |
| --- | --- |
| Video | `https://storage.helloreaddy.io/project_files/400c85a9-2a6c-479b-b2fc-a60c51990d68/38569efa-416c-484d-970b-22db9221c0bc_scrub.mp4` |
| Poster | `https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/815eebecaf958e959e21d4427f6ee7be.jpeg` |
| Duration | Approx. 14 s |
| Source status | `AI_GENERATED_PLACEHOLDER`, `READY_FOR_PROTOTYPE_ONLY` |
| Brand authenticity | No verified Comendador bottle or actual Casa do Vinho interior |
| Replacement config | `casaConfig.video`, `casaConfig.poster` in `src/mocks/casaDoVinho/config.ts` |
| Gate | `BLOCKED_AUTHENTIC_MEDIA` for **film replacement only**, not the Readdy prototype handoff |

Production film direction: authentic interior (0–4 s), genuine Comendador bottle/legible original label (4–9 s), pour (9–12 s), bottle foreground against actual boutique (12–15 s). Preserve HTML overlays, muted autoplay, playsInline, loop, poster, mobile crop, reduced motion and performance. Do not synthesize or alter brand label typography.

## B. Owner-supplied Comendador reference

| Field | Record |
| --- | --- |
| Asset | Promotional "Linha Comendador" banner, 1200 × 344 |
| Provenance | `CLIENT_SUPPLIED_AUTHORIZED_DECLARED` |
| Visible | Six bottles; central candidate: Comendador Reserva Especial Montepulciano |
| Suitable for | Brand palette, label/packaging reference, layout direction |
| Unsuitable for | Isolated high-resolution bottle hero, accurate product card photo or synthetic reconstruction of label text |
| Next input | Isolated original bottle photograph, confirmed exact label/vintage; real boutique interior photos/video |

The existence of a commercial contract means client-supplied assets are authorized **as declared**, but does not overcome low resolution or the need for exact bottle fidelity.

## C. Wine catalog / featured rail

Source: `src/mocks/casaDoVinho/wines.ts` (nine entries in the last inspected manifest).

| Current media | Status |
| --- | --- |
| Bottle image URLs under `readdy.ai/api/search-image` | `AI_GENERATED_PLACEHOLDER`; NOT official product photography |
| Wine names, grapes, notes, regions, pairings | `OWNER_FACT_CONFIRMATION_REQUIRED`; not verified against official SKU catalog |
| Featured bottle rail | Prototype UX; not production-ready until real SKU imagery and content are substituted |

Replacement priority: `comendador-tinto`, `imperio-reserva-tinto`, `imperio-gran-terroir`, `comendador-branco`, then remaining wines. Do not represent generic AI bottle labels as genuine brands. Where authenticity cannot be shown, use a neutral non-misleading placeholder or hide the item in production.

## D. Section backgrounds and gallery

Readdy-generated backgrounds (featured, collections, catalog, winery, services, reviews, map, FAQ, Portal, contact, selection) and `src/mocks/casaDoVinho/gallery.ts` are `AI_GENERATED_PLACEHOLDER`. They are **not** client-provided authentic boutique photos. Never claim they are "authorized photographs of the boutique". Replace with client-supplied imagery as available; otherwise label illustrations accurately or omit in final Portal experience.

## E. Winery/editorial imagery and sponsorship

Images and profiles must be checked for real winery identity and media provenance. `wineries[].paid` and `featuredWineIds` are prototype placement contracts; visible "paid"/"sponsored" claims require a verified monetization entitlement, independent of the Casa do Vinho media-use contract. Current `casaConfig.monetizationVerified=false`.

## F. Other dependencies

- Icons: Remix Icon CDN; check runtime availability and license.
- Typography: Google Fonts via CSS; verify final font selections and performance.
- Portal cross-sell: `src/mocks/casaDoVinho/portal.ts` mock cards, replace with tenant-safe real data.
- Map: city-level embed, not precise storefront; replace after address/place ID verification.
- Contact: provisional WhatsApp `+55 (49) 90000-0000`, `whatsappVerified=false`; no live inquiry to placeholder.
- Prototype form: `dbce7u5pirsr9cnblbc0`; integration into Portal is pending.

## G. Handoff manifest contract

For each final asset record: `asset_id`, `role`, `source_file_or_url`, `owner_or_licensor`, `rights_basis`, `authenticity_status`, `related_sku_or_location`, `alt_text`, `crop_mobile`, `crop_desktop`, `poster_or_fallback`, `production_ready`.

**Exit condition for Readdy:** preserve current visual interactions and provide a replaceable, documented asset slot. Real media production and final content validation can continue in the Portal integration phase without blocking Readdy prototype closure.
