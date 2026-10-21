# ASSET MANIFEST — Casa do Vinho Urubici

Provenance of every visual asset on `/casa-do-vinho-urubici`.
Rule: no asset in this file is an owner-supplied photograph unless explicitly marked **OWNER-SUPPLIED**.

---

## A. Hero film

| Field | Value |
| --- | --- |
| Current source | `https://storage.helloreaddy.io/project_files/400c85a9-2a6c-479b-b2fc-a60c51990d68/38569efa-416c-484d-970b-22db9221c0bc_scrub.mp4` |
| Duration | 14 s, looping |
| Provenance | AI-generated cinematic placeholder (`cinematic_edit` render) |
| Poster | `https://static.readdy.ai/image/5d8c52e05b67d949e032720b948d4541/815eebecaf958e959e21d4427f6ee7be.jpeg` |
| Brand accuracy | **FAILS** — no Comendador bottle, no real boutique interior |
| Status | `BLOCKED_AUTHENTIC_MEDIA` |
| Replacement slot | `casaConfig.video`, `casaConfig.poster` in `src/mocks/casaDoVinho/config.ts` |

## B. Comendador reference (supplied this round)

| Field | Value |
| --- | --- |
| Asset | "Linha Comendador" promotional banner, 1200×344 |
| Provenance | **OWNER-SUPPLIED** (attached by the client this round) |
| Contains | Six bottles; central bottle = Comendador Reserva Especial Montepulciano (per client instruction, subject to owner confirmation) |
| Usable for | Colour palette, proportions, collection composition, label reference |
| Not usable for | Hero footage, product cards, or any isolated-bottle slot — banner resolution, includes headline text and gold CTA button, not an isolated product shot |
| Required follow-up | Isolated high-resolution bottle photograph + written approval of the hero label and vintage |

## C. Bottle photography (catalog + featured rail)

All nine entries in `src/mocks/casaDoVinho/wines.ts` use `readdy.ai/api/search-image` URLs.
Provenance: **AI-generated placeholders**. They illustrate composition and mood only. They are **not** photographs of Império do Vinho, Comendador, Quinta do Vale, Encosta do Douro or Collina Toscana products, and they must never be presented as such.

| Wine id | Replacement priority |
| --- | --- |
| `comendador-tinto` | Critical (hero-adjacent) |
| `imperio-reserva-tinto` | High (featured) |
| `imperio-gran-terroir` | High (featured) |
| `comendador-branco` | High (featured) |
| remaining five | Standard |

## D. Section backgrounds

Generated placeholder imagery, one per panel: collections shelves, catalog bokeh, selection glasses, featured-rail bokeh, wineries, services, gallery, reviews, locations, FAQ, portal, contact. Provenance: AI-generated. Replace with authorized boutique photography when available.

## E. Gallery

`src/mocks/casaDoVinho/gallery.ts` — AI-generated boutique scenes. Must be replaced with real interior photographs before publishing; labelled as illustrative in the UI copy where applicable.

## F. Icons and type

Remix Icon (CDN) for UI icons. Typography loaded through Google Fonts in `src/index.css`. No proprietary brand font is embedded — the Comendador wordmark is never reproduced in code.

---

## Integration contracts (Portal Connect ready)

- Featured / paid slots: `casaConfig.featuredWineIds`, `wineries[].paid`
- Portal cross-sell cards: `src/mocks/casaDoVinho/portal.ts` (typed `PortalCard`, no invented businesses)
- Catalog data contract: `Wine` in `src/pages/casaDoVinhoUrubici/types.ts`
- Winery contract: `Winery` (includes `placement` and `paid` flags)
- Selection contract: `Selection = Record<wineId, qty>`
- Form: `dbce7u5pirsr9cnblbc0`