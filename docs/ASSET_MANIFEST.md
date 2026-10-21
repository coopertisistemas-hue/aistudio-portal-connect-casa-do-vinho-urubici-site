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

### B.1 Official product photograph — Comendador Montepulciano 750 ml

Verified on 2026-10-21 by direct retrieval from the brand's own storefront (not a re-host, not a search engine copy). Every value below was measured from the downloaded file, not inferred.

| Field | Verified record |
| --- | --- |
| `asset_id` | `comendador-montepulciano-bottle-01` |
| Role | Isolated bottle cutout — authentic label reference; candidate source for photographic compositing of the hero film bottle sequence |
| Official product page | `https://www.casadovinho.net/vinho-comendador-montepulciano.html` |
| Source URL (original asset path) | `https://www.casadovinho.net/media/catalog/product/g/r/grande-produto-vinho-comendador-montepulciano-d1008.png` |
| Served cache URL | `https://www.casadovinho.net/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/g/r/grande-produto-vinho-comendador-montepulciano-d1008.png` |
| Format | PNG, 8-bit/colour RGBA, non-interlaced |
| Dimensions | **1503 × 1920 px** |
| Subject bounding box | x 536–966, y 139–1783 → the bottle occupies 430 × 1644 px |
| Alpha / background | Fully transparent background (all four corners `0,0,0,0`); 17.95 % of the canvas is fully opaque. Clean cutout, suitable for compositing without matting work |
| File size | 767,741 bytes (original path) · 934,093 bytes (cache path, identical dimensions) |
| MD5 (original path) | `1d030ee1640213154a4a1153d4acd9a7` |
| MD5 (cache path) | `6db73167ab826382493916132c9a403e` |
| Maximum resolution available | 1503 × 1920. Magento cache variants `2400x` and `1200x` return **HTTP 404** — no larger original is published anywhere on the storefront |
| Target repository path | `public/branding/casa-do-vinho/comendador/comendador-montepulciano-1503x1920.png` |
| Repository commit | **NOT PERFORMED** — no repository connector in the Readdy session. See B.2 for the completed in-app import instead. |
| `authenticity_status` | `CLIENT_SUPPLIED_AUTHORIZED_DECLARED` for rights (brand's own storefront, within the declared 2026-10-21 agreement) + verified original file (retrieved, hashed, dimensions and alpha inspected) |
| `rights_basis` | Executed commercial agreement as declared by the client. Storefront terms of use were not independently reviewed. |
| `production_ready` | Photograph: yes, as an authentic source asset. Hero film: **no** — see below. |

**Label fidelity note.** The label occupies roughly a 300 × 300 px region of the source. At that density the typography ("COMENDADOR", "RESERVA ESPECIAL", "MONTEPULCIANO 750 ml") is fully legible in the still photograph. Any generative video re-render of the bottle would have to invent that typography across camera motion and a liquid pour, which is exactly the outcome the brief forbids.

### B.2 Completed binary import into the prototype

Performed on 2026-10-21. The official photograph was downloaded, re-verified and imported into the running prototype. This is a real import, not a recorded intention.

| Field | Result |
| --- | --- |
| Verification | Re-downloaded bytes are **identical** to the B.1 record: 767,741 bytes · MD5 `1d030ee1640213154a4a1153d4acd9a7` · PNG RGBA **1503 × 1920** · alpha bbox `(536, 139, 966, 1783)` |
| Texture integrity | Pixels copied bit-for-bit. No resize, no re-encode, no generative reconstruction, no label retouching |
| Served URL in use | `https://public.readdy.ai/ai/img_res/sandbox/daaeb431035eb8ca1d104d3de0d1c417/47b9731d-7fb4-4b52-9391-45ffff466367_comendador-montepulciano-1503x1920.png` |
| Canonical source | `https://www.casadovinho.net/media/catalog/product/g/r/grande-produto-vinho-comendador-montepulciano-d1008.png` (unchanged, still the authoritative original) |
| Data wiring | `wines[comendador-tinto].image` + `imageKind: "official-cutout"` + `imageCredit` in `src/mocks/casaDoVinho/wines.ts` |
| Surfaces using it | Featured rail (`#destaques`), catalog grid (`#vinhos`), wine detail modal, Minha Seleção row thumbnail |
| Rendering | `object-fit: contain` on a warm backplate — cropped only through `contain`, so the label is never cut. Normalised so the transparent background does not read as a broken image |
| Alt text | "Foto oficial da garrafa …" for this bottle, vs "Imagem ilustrativa …" for generated ones |
| Product facts | Corrected to the official page: 100% Montepulciano, tinto seco, São Joaquim (SC), house Comendador line. Previous mock entry (Tannat · Vale dos Vinhedos) was invented and has been removed |
| `authenticity_status` | `READY_FOR_PRODUCTION` for this single image |

**Repository asset status: NOT COMMITTED.** The binary is live in the prototype through the served URL above, but it is **not** yet present at `public/branding/casa-do-vinho/comendador/` in the repository. The Readdy file tools write text only and this workspace has no `public/` folder, so no byte-accurate binary copy could be committed from here. Portal phase action: drop the verified PNG at that path (or keep the served URL) and re-run the MD5 check against B.1 so the committed file is provably the original.

**Hero film blocker (B.1).** The official photograph is available, but the approved 14 s cinematic film cannot be modified by *controlled photographic compositing* in the Readdy environment. There is no frame-level video compositing capability here: the only offered operation re-runs the generative film director and replaces the **entire** clip, which would both regenerate the approved interior and camera path (violating "preserve the approved cinematic hero") and re-synthesise the label with generative AI (violating "preserve the exact original label"). The film therefore remains `BLOCKED_AUTHENTIC_MEDIA` for the Comendador sequence specifically, and the current AI placeholder film stays in place unchanged.

**Unblock condition.** A compositing pass outside Readdy: track the bottle in the existing plate, or re-shoot the 6–14 s bottle/pour segment against the real boutique with the real bottle, then re-encode to the existing duration, resolution, mobile crop and poster. The cutout PNG in this record is the correct source for that pass.

## C. Wine catalog / featured rail

Source: `src/mocks/casaDoVinho/wines.ts` (nine entries in the last inspected manifest).

| Current media | Status |
| --- | --- |
| Bottle image URLs under `readdy.ai/api/search-image` | `AI_GENERATED_PLACEHOLDER`; NOT official product photography |
| Wine names, grapes, notes, regions, pairings | `OWNER_FACT_CONFIRMATION_REQUIRED`; not verified against official SKU catalog |
| Featured bottle rail | Prototype UX; not production-ready until real SKU imagery and content are substituted |

**Update (B.2):** `comendador-tinto` is now backed by the official product photograph and official product facts, so its `AI_GENERATED_PLACEHOLDER` status no longer applies — see B.2. The remaining eight entries and their images are still `AI_GENERATED_PLACEHOLDER` with `OWNER_FACT_CONFIRMATION_REQUIRED` copy.

Replacement priority: `imperio-reserva-tinto`, `imperio-gran-terroir`, `comendador-branco`, then remaining wines. Do not represent generic AI bottle labels as genuine brands. Where authenticity cannot be shown, use a neutral non-misleading placeholder or hide the item in production.

Superseded priority list (kept for trace): `comendador-tinto`, `imperio-reserva-tinto`, `imperio-gran-terroir`, `comendador-branco`, then remaining wines. Do not represent generic AI bottle labels as genuine brands. Where authenticity cannot be shown, use a neutral non-misleading placeholder or hide the item in production.

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
