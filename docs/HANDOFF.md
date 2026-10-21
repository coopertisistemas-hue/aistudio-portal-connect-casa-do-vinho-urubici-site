# HANDOFF — Casa do Vinho Urubici | Readdy → Portal Connect

**Updated:** 2026-10-21  
**Status:** W04 V5 REMEDIATION IN PROGRESS — HOLD for completion and QA; NOT production-certified.  
**Repo:** `coopertisistemas-hue/aistudio-portal-connect-casa-do-vinho-urubici-site`  
**Preview route:** `/casa-do-vinho-urubici` (root may alias for preview).  
**Portal target:** `https://www.urubici.com.br/casa-do-vinho-urubici`. Existing `/casa-do-vinho` must remain untouched.  
**Authoritative specification:** `docs/CASA_DO_VINHO_PORTAL_CONNECT_MASTER_SPEC.md`.  
**Media provenance:** `docs/ASSET_MANIFEST.md`.

## 1. Contractual content/media authorization — client declaration

**Client declaration received 2026-10-21:** Portal Connect / the contracted provider has entered into a commercial agreement with Casa do Vinho and reports authorization to use the client's supplied photographs, videos, promotional materials, branding and content in this project. Treat this as an explicit **rights-holder authorization declaration for client-provided assets and content**, subject to the actual contract scope and any third-party restrictions. The contract itself and its detailed clauses were **not inspected in this audit**.

**Important distinction:** authorization to use owner-provided material does NOT establish that the current Readdy-generated boutique imagery depicts the real store, that mock bottle labels are genuine, that all product facts are correct, or that unrelated third-party images/music are licensed. It does not waive rights of photographers, brands or subjects outside the contract's scope. Do not request a new blanket authorization for each owner-supplied asset; verify its source, asset identity and any specific exclusions instead. **Rights = declared; authenticity and product facts = independently verifiable.**

## 2. Current source observations and delivery boundary

GitHub `main` was inspected through the connector after Readdy's V5 push. `page.tsx` imports `FeaturedBottles`, `SelectionDock`, and `StoryPanel` and no longer imports `Manifesto`. `config.ts` includes `monetizationVerified=false`, `whatsappVerified=false`, `addressVerified=false`. The previous HANDOFF remained stale; this document replaces it. **No local build, browser preview, automated test or deployed SHA verification was performed by the documentation editor.** Readdy must produce those results.

Readdy's V5 log reports a mid-pass HOLD: gallery honesty, remaining section numbering, wine modal focus management, dock CSS and build verification were unfinished. Treat these as **unverified until the executor finishes and provides evidence**.

### Required component order
Portal shell/header → cinematic hero → client menu → Featured Bottles → Collections → Catalog → Wineries → Services → Minha Seleção → compact A Casa → Gallery → Reviews → Map → FAQ → Portal cross-links → Contact. No duplicate institutional header/footer in the final Portal integration.

## 3. W04 compliance matrix (source audit + executor-reported state)

| Requirement | Status | Evidence / required next action |
| --- | --- | --- |
| Master specification accessible | PASS | Present at `docs/CASA_DO_VINHO_PORTAL_CONNECT_MASTER_SPEC.md` on GitHub main; Readdy confirms workspace pull |
| Commercial section order | PARTIAL | `page.tsx` reordered; verify anchors, stamps and rendered preview |
| Featured bottles immediately after menu | PARTIAL | `FeaturedBottles` imported; actual images and responsive behavior not independently tested |
| Remove manifesto ahead of products | PASS (source) | `page.tsx` no longer imports `Manifesto` |
| Paid placements behind entitlement | PARTIAL | `config.ts` flag false; audit every paid badge and winery placement at runtime |
| Honest gallery captions | FAIL / IN PROGRESS | Readdy V5 explicitly queued caption correction |
| Wine detail dialog keyboard a11y | FAIL / IN PROGRESS | Readdy V5 reports hook not yet wired to `WineDetailModal` |
| Winery dialog focus behavior | PARTIAL | Readdy reports hook integrated; keyboard test evidence pending |
| Image error fallbacks | PARTIAL | Readdy reports handlers added; broken URL tests pending |
| SelectionDock styling and behavior | PARTIAL | Component present; CSS and mobile QA pending |
| Numbered section stamps | PARTIAL | Remaining Reviews/Map/FAQ/Portal/Contact reported pending |
| Build/typecheck/lint | BLOCKED BY VERIFICATION | Readdy V5 says build not rerun after latest edits; run and log exact commands |
| Public Readdy preview parity | BLOCKED BY VERIFICATION | Need published preview, screenshot and source/deployed revision |
| Authentic Comendador hero film | BLOCKED_AUTHENTIC_MEDIA | Current generated film remains as design placeholder; isolated authentic bottle/interior footage still needed |
| Genuine bottle photos and SKU facts | BLOCKED_CONTENT | `src/mocks/casaDoVinho/wines.ts` uses generated imagery and unverified SKU copy |
| Verified WhatsApp / exact address | BLOCKED_OWNER_INPUT | `config.ts` flags false; no production conversion to placeholder number |
| Portal-native shell, data and SEO | DEFERRED_TO_PORTAL_INTEGRATION | Antigravity integration phase, independent audit before production |

**Interpretation:** PASS (source) does not equal browser-certified PASS. Do not inflate results.

## 4. Owner inputs and truthful placeholders

- **Rights:** contractual authorization for client-provided media/content **declared**; no need to treat the commercial relationship as missing.
- **Authentic film:** need an isolated high-resolution photo of selected Comendador bottle (candidate: Reserva Especial Montepulciano, subject to final label/vintage confirmation) and actual interior stills/footage. Current 14-second film is an AI-generated atmospheric placeholder, not a depiction of the real boutique.
- **Catalog:** all nine currently mocked bottle images are AI-generated; product data and winery editorial content need reconciliation against client catalog. Do not label them as official photographs.
- **WhatsApp:** `+55 (49) 90000-0000` is a placeholder; `whatsappVerified=false`. Do not present as live/verified.
- **Address/map:** only city-level location confirmed in code; street, coordinates and place ID pending. `addressVerified=false`.
- **Reputation/monetization:** no fabricated reviews or sponsorships; paid placements require active entitlement evidence distinct from media authorization.
- **Form:** Readdy form ID `dbce7u5pirsr9cnblbc0` is a prototype integration, not a certified Portal endpoint.

## 5. Finish Readdy NOW — narrow scope and exit criteria

**One final bounded corrective pass, no new design exploration.**
1. Finish stamps, truthful gallery copy, WineDetailModal focus trap/restore, dock CSS, fallback and provisional contact disclosure.
2. Verify catalog filters, detail modal, selection quantity, anchor menu, paid badge gating, broken images, reduced motion and mobile 360/390 + desktop 1440.
3. Run `npm run build`, `npm run type-check`, `npm run lint` where available; record pass/fail and exact output. Do not claim tests not run.
4. Publish **Readdy preview only**, prove visual parity, provide exact preview URL and desktop/mobile screenshots. If publishing is unavailable, state the precise blocker.
5. Update compliance matrix with evidence; do not overwrite this document with obsolete V2 assumptions or delete the master spec.
6. Push final prototype code/docs to client GitHub repo without clobbering remote commits; report branch and SHA if available.

**Readdy exit gate: PROTOTYPE_HANDOFF_READY** if code compiles, critical interactions work, and preview matches the final code. Owner-dependent authentic content and production integrations can remain **documented blockers for Portal production**, not blockers to completing Readdy's prototype. If critical functional/build defects remain, return HOLD with precise evidence.

## 6. Next phase: Portal Urubici (not Readdy)

After owner visual approval, Antigravity starts with local Windows repo identification, `git status` and origin synchronization; inventories the client repo and parent Portal/Connect Foundation, plans integration with real Portal shell, tenant-safe Supabase/Edge Function data, authentic assets, SEO/GEO/AEO and release gates. Claude performs independent audit. No merge, deployment, production DB changes or branch cleanup without authorization and certification.
