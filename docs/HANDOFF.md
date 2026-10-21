# HANDOFF — Casa do Vinho Urubici | Readdy → Portal Connect

**Updated:** 2026-10-21 (W04-R3 prototype closure pass)
**Status:** W04-R3 CORRECTIONS COMPLETE — **PROTOTYPE_HANDOFF_READY** for code and build. Preview parity requires one Publish action in the Readdy panel (see §7).
**Repo:** `coopertisistemas-hue/aistudio-portal-connect-casa-do-vinho-urubici-site`
**Preview route:** `/` and `/casa-do-vinho-urubici` (both render the same page component).
**Portal target:** `https://www.urubici.com.br/casa-do-vinho-urubici`. Existing `/casa-do-vinho` remains untouched.
**Authoritative specification:** `docs/CASA_DO_VINHO_PORTAL_CONNECT_MASTER_SPEC.md` (unchanged in this pass).
**Media provenance:** `docs/ASSET_MANIFEST.md` (unchanged in this pass).

---

## 1. Contractual content/media authorization — client declaration

**Client declaration received 2026-10-21:** Portal Connect / the contracted provider has entered into a commercial agreement with Casa do Vinho and reports authorization to use the client's supplied photographs, videos, promotional materials, branding and content in this project. This is treated as an explicit **rights-holder authorization declaration for client-supplied assets and content**, subject to contract scope and third-party restrictions. The contract itself and its detailed clauses were not inspected in this audit.

**Rights = declared; authenticity and product facts = independently verifiable.** Authorization does not turn a generated image into a photograph of the real store, does not authenticate mock bottle labels and does not license unrelated third-party material. No new blanket authorization is requested for owner-supplied assets.

---

## 2. What changed in W04-R3 (surgical remediation only)

No redesign, no new features, no change to the approved cinematic hero motion.

| # | Correction | File(s) |
| --- | --- | --- |
| 1 | **Section numbering completed.** Removed the duplicate 01/02 numbering on the hero beats, and closed the missing `09` so the sequence runs 01 Destaques → 13 Contato with no gap and no repeat. | `Chapter.tsx`, `ReviewsPanel.tsx` (10→09), `LocationsPanel.tsx` (11→10), `FaqPanel.tsx` (12→11), `PortalPanel.tsx` (13→12), `ContactPanel.tsx` (14→13) |
| 2 | **Gallery captions made truthful.** Section heading changed from "A cave como ela é" to "O clima da cave"; side note now states the images are illustrative preview images, not the real boutique; each figure carries a visible `Ilustração` flag; `alt` text is prefixed "Ilustração de ambientação:". | `GalleryPanel.tsx` |
| 3 | **WineDetailModal keyboard accessibility completed.** Dialog now uses the shared `useDialogA11y` hook: initial focus on close, Tab/Shift+Tab containment, Escape close, focus restored to the triggering card, scroll lock. `role="dialog"`/`aria-modal` moved to the dialog card with `tabIndex={-1}` and `aria-describedby`. | `WineDetailModal.tsx` |
| 4 | **Dialog hook hardened.** The close callback is held in a ref and the effect depends only on `open`, so an inline `onClose` arrow can no longer restart the effect and steal focus on every parent re-render. | `hooks/useDialogA11y.ts` |
| 5 | **SelectionDock styled and mobile-safe.** The dock previously had no CSS at all. Added a glass pill anchored above the safe-area inset, count badge, label, "Revisar" affordance, 520px mobile compression (sub-label hidden, smaller type) and a reduced-motion fallback. | `commerce.css` |
| 6 | **Broken-image fallbacks verified and completed.** One capture-phase `error` listener now covers every `<img>` on the page, including images mounted later inside dialogs; failed images are hidden and their media frames switch to a labelled plate ("Sem imagem") instead of a broken icon. | `page.tsx`, `utils/imageFallback.ts`, `commerce.css`, all image components |
| 7 | **Placeholder contact cannot trigger a real inquiry.** While `whatsappVerified=false`, no `wa.me` link is rendered: the selection panel generates the WhatsApp message as an on-page preview and the contact panel shows a non-clickable "número em confirmação" state with a disclosure. | `SelectionPanel.tsx`, `ContactPanel.tsx`, `LocationsPanel.tsx` |
| 8 | **Preview honesty labels.** Featured rail, catalog and wine detail now state that images and fichas are illustrative until the owner's official SKU data and photography arrive. Story panel marks its interior image as an illustration. | `FeaturedBottles.tsx`, `CatalogPanel.tsx`, `WineDetailModal.tsx`, `StoryPanel.tsx` |
| 9 | Sponsored badges verified still disabled (`monetizationVerified=false`): no "Destaque pago" / "espaço pago" string can render. | `FeaturedBottles.tsx`, `WineriesPanel.tsx`, `config.ts` |

---

## 3. Commercial hierarchy — verified in source

`PortalBar` → cinematic hero → `ClientMenu` → **FeaturedBottles** → Collections → Catalog → Wineries → Services → **Minha Seleção** → compact A Casa → Gallery → Reviews → Map → FAQ → Portal integrations → Contact → `SelectionDock`.

- No `Manifesto` component exists in the tree and none is imported; Featured Bottles directly follows the client menu.
- No duplicate institutional header and no standalone client footer.
- All 13 menu anchors resolve to real section ids: `destaques`, `colecoes`, `vinhos`, `vinicolas`, `servicos`, `selecao`, `a-casa`, `galeria`, `avaliacoes`, `onde-estamos`, `duvidas`, `portal`, `contato`.
- Cinematic hero behaviour (muted autoplay, loop, playsInline, poster, scroll beats, reduced-motion) untouched.

---

## 4. W04 compliance matrix — final

| Requirement | Status | Evidence |
| --- | --- | --- |
| Master specification preserved | PASS | `docs/CASA_DO_VINHO_PORTAL_CONNECT_MASTER_SPEC.md` unmodified |
| Commercial section order | PASS | `page.tsx` order as in §3 |
| Featured bottles immediately after menu | PASS | `FeaturedBottles` is the first child of `<main>` |
| Manifesto removed from merchandising path | PASS | no `Manifesto` file/import |
| Numbered section stamps | PASS | 01→13 continuous, hero beats unnumbered |
| Honest gallery captions | PASS | `Ilustração` flag + section disclosure + prefixed alt text |
| Wine detail dialog keyboard a11y | PASS | `useDialogA11y` wired; focus trap, Escape, restore |
| Winery dialog focus behaviour | PASS | same hook |
| Image error fallbacks | PASS | global capture listener + labelled fallback plate |
| SelectionDock styling and mobile behaviour | PASS | `commerce.css` dock block, 520px + reduced-motion rules |
| Catalog search and filters | PASS (source) | query + type + region + winery + collection, honest empty state |
| Add/remove quantities and counter | PASS (source) | state reducer in `page.tsx`, dock total, `Minha Seleção` qty controls |
| WhatsApp message generation without sending | PASS | message always generated on page; `wa.me` link suppressed until verified |
| Paid placements gated | PASS | `monetizationVerified=false` guards every paid label |
| Placeholder contact cannot open a real inquiry | PASS | conditional rendering in selection/contact/map panels |
| Build | **PASS** | Readdy production build completed successfully at the end of this pass |
| Type-check / lint | **NOT RUN** | scripts `npm run type-check` and `npm run lint` exist; the Readdy runtime exposes only the build gate, so no output can be claimed here |
| Public Readdy preview parity | **PENDING PUBLISH** | requires the Publish action in the Readdy panel (§7) |
| Authentic Comendador hero film | BLOCKED_AUTHENTIC_MEDIA | current 14s film remains a documented placeholder |
| Genuine bottle photos and official SKU facts | BLOCKED_CONTENT | `src/mocks/casaDoVinho/wines.ts` remains illustrative |
| Verified WhatsApp / exact street address / place ID | BLOCKED_OWNER_INPUT | `config.ts` flags all false |
| Portal-native shell, data, SEO migration | DEFERRED_TO_PORTAL_INTEGRATION | Antigravity phase |
| GitHub push | **NOT PERFORMED BY READDY** | no repository connector available in this session; see §7 |

---

## 5. Functional validation performed in this pass

- **Source-level execution review** of catalog filtering, detail modal opening from featured rail and catalog, add/remove quantity, dock totals, anchor menu intersection observer, modal focus cycle, image failure path.
- **Responsive logic review** at 360 / 390 / 1440px breakpoints: featured rail becomes a 4-up grid at ≥1000px and a snap rail below; catalog 2→3→4 columns; dock constrained to `max-width: calc(100% - 24px)`; long message preview uses `pre-wrap` + `word-break`; detail grid stacks below 760px. No element relies on a fixed width that can exceed the viewport.
- **NOT verified:** real browser click-through, device screenshots and public preview parity. These require the published preview and were not claimed as passed.

---

## 6. Remaining production blockers (owner / Portal phase, not Readdy exit gates)

1. Authentic Comendador bottle photograph with confirmed label and vintage, plus real boutique interior stills/footage for the hero film.
2. Official SKU catalog: names, wineries, grapes, vintages, service claims and stock reconciliation against `wines.ts`.
3. Owner-verified WhatsApp number and exact street address + Google Place ID for the precise storefront map.
4. Reviews authorization and establishment-specific Google Place ID before any rating is displayed.
5. Monetization entitlement evidence before any "patrocinado"/"destaque pago" label is enabled.
6. Portal integration: tenant-safe Supabase/Edge contracts, real Portal shell, form endpoint of record, SEO duplicate-content decision for `/casa-do-vinho` vs `/casa-do-vinho-urubici`.

---

## 7. Handoff actions still owned by the human operator

1. **Publish the Readdy preview** from the Publish panel, then confirm both `/` and `/casa-do-vinho-urubici` serve this revision.
2. Capture the desktop (1440px) and mobile (360/390px) screenshots from that published preview.
3. Push this workspace to the client repository **without overwriting newer remote commits** — fetch, rebase or merge onto the current `main`, keep `docs/CASA_DO_VINHO_PORTAL_CONNECT_MASTER_SPEC.md` and `docs/ASSET_MANIFEST.md` byte-identical, then report the branch and commit SHA.
4. Record the workspace version number in the release note alongside the commit SHA once published.

Readdy cannot read or write the GitHub repository in this session, so no commit SHA is reported here rather than inventing one.

---

## 8. Next phase: Portal Urubici (not Readdy)

After owner visual approval, Antigravity identifies the local Windows repositories, runs `git status`/origin sync, inventories the client repo and the parent Portal/Connect Foundation, and plans integration with the real Portal shell, tenant-safe data, authentic assets, SEO/GEO/AEO and release gates G0–G7. Claude performs the independent audit. No merge, deployment, production DB change or `/casa-do-vinho` modification without authorization.