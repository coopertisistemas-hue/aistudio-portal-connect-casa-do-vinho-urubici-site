# HANDOFF — Casa do Vinho Urubici (Portal Urubici)

Route: `/casa-do-vinho-urubici` (also mounted at `/` for preview).
Last verified build: green (`build_project_check`).
Release state: **NOT APPROVED / DO NOT PUBLISH**.

---

## 1. Source-of-truth reconciliation

| Item | Status |
| --- | --- |
| GitHub branch / commit SHA | **Unavailable in this environment.** No repository connection exists here, so branch names and SHAs cannot be read or produced. |
| Why V2 did not appear in `main` / public preview | **Unverifiable from here.** This workspace is the only build source I can see. If the public preview shows an older version, the publishing step (not the code) is the gap: the deployed build must be re-generated from this workspace. |
| Rebuild performed | No. V2 was extended in place (see section 2) — nothing was recreated from scratch. |
| `docs/CASA_DO_VINHO_PORTAL_CONNECT_MASTER_SPEC.md` | **Missing.** Not present in this workspace. **Client will upload it — the line-by-line audit is pending that upload.** The hierarchy below follows the brief in the request until then. |

Audit is queued: once the master spec is uploaded, each requirement will be checked against the rendered sections, the data contracts in `src/mocks/casaDoVinho/`, and the monetization flags.

---

## 2. What is implemented (V2)

Order on the page, as rendered:

1. Portal bar (existing Portal header, `#portal` link preserved)
2. Cinematic video hero (`Chapter`) — autoplay, muted, loop, playsInline, poster, reduced-motion fallback, pointer-reactive copy planes
3. Client menu (`ClientMenu`) — anchor navigation below the hero, active-state tracking
4. Manifesto (word-by-word reveal)
5. **Destaques da casa** — featured bottle rail (new in this pass), add-to-selection
6. A Casa — history and identity
7. Coleções — Império do Vinho, Comendador, small producers, sparkling/rosé
8. Catálogo — search + type/region/winery/collection filters + detail modal
9. Vinícolas — editorial profiles, internal detail views, two clearly labelled paid slots
10. Produtos e serviços — wines, accessories, gifts, tastings
11. Minha Seleção — quantities, summary, name/phone, explicit WhatsApp inquiry (moved after commerce sections)
12. Galeria — boutique imagery
13. Prova social — sources shown, "em verificação" state, no fabricated testimonials
14. Onde estamos — embedded map, address, units
15. Dúvidas — FAQ
16. Portal Urubici — integration-ready cards (lodging, restaurants, attractions, events, editorial)
17. Contato — Form submission (id `dbce7u5pirsr9cnblbc0`) + anti-spam honeypot

No global site header and no footer were added, per the brief.

Monetization slots: `featuredWineIds` in `src/mocks/casaDoVinho/config.ts` drives "Destaque pago" badges; winery paid placements are flagged in `src/mocks/casaDoVinho/wineries.ts`.

---

## 3. Hero film — BLOCKED_AUTHENTIC_MEDIA (decision recorded)

**Decision (client, this round):** hold the current approved film. Do not re-render using the promotional banner as a visual reference. The client will supply an isolated high-resolution Comendador bottle photograph and real boutique stills before any new film is produced.

Rationale: the supplied "Linha Comendador" banner is a 1200×344 marketing composite with headline text and a gold CTA button. Rendering it into footage would force the model to approximate the label artwork and typography, which the brief forbids.

### Current film (unchanged, intentionally)

The currently rendered film is a 14-second AI-generated sequence (cold dusk exterior → boutique doorway → shelves → counter → pour). It is atmospheric placeholder footage. **It does not contain a Comendador bottle and must not be presented as real product footage.**

Supplied reference: a 1200×344 promotional banner ("Linha Comendador") containing six bottles with the central Reserva Especial Montepulciano. It is a marketing composite with headline text and a gold CTA, at banner resolution — it is **not** an isolated, high-resolution, owner-approved bottle photograph.

Blocking requirements before a brand-accurate film can be rendered:

1. Isolated, transparent or neutral-background, high-resolution photograph of the Comendador Reserva Especial Montepulciano (both sides of the label if possible).
2. Written owner confirmation that this bottle is the approved hero label.
3. Authorized interior stills or short footage of the real Urubici boutique (shelves, counter, lighting).
4. Confirmation of the vintage shown on the label.

Until those arrive, the approved current film stays in place. No AI-redrawn label, no invented typography, no generic bottle passed off as a Comendador.

If the decision is taken to proceed using the banner purely as a lighting/palette reference, that is a documented commercial risk decision, not brand-accurate footage.

Production brief for the eventual film (12–15 s):

- 0–4 s: slow glide inside the real boutique — shelves, architecture, warm lamp light.
- 4–9 s: single Comendador bottle, label legible, slow orbit, shallow depth of field.
- 9–12 s: pour into crystal, reflections, natural motion.
- 12–15 s: same bottle foreground, boutique softly blurred behind, negative space on one side for the HTML headline/CTA.

Technical requirements already satisfied by the page: muted + autoplay + loop + playsInline, poster fallback, mobile crop, `prefers-reduced-motion` handling, HTML overlay kept out of the footage.

Video slot: `casaConfig.video` / `casaConfig.poster` in `src/mocks/casaDoVinho/config.ts`.

---

## 4. Unverified content — must be replaced before publishing

| Item | Where | Status |
| --- | --- | --- |
| WhatsApp number `+55 49 90000-0000` | `src/mocks/casaDoVinho/config.ts` | Placeholder |
| Street address / coordinates | `src/mocks/casaDoVinho/config.ts` | Placeholder (city-level only) |
| All bottle photography | `src/mocks/casaDoVinho/wines.ts` | AI-generated placeholders, **not real products** |
| Winery stories, origins, labels | `src/mocks/casaDoVinho/wineries.ts` | Editorial placeholders |
| Reviews and ratings | `src/mocks/casaDoVinho/reviews.ts` | Displayed as "em verificação" — no invented testimonials |
| Prices / stock | — | Intentionally absent; everything reads "sob consulta" |

---

## 5. Verification performed

- `build_project_check`: **PASS**
- TypeScript: compiles clean via the project build
- Lint: project ESLint config applies; no blocking rule added
- Desktop 1440 px / mobile 390 px & 360 px: layout uses fluid panels and a horizontally snapping rail under 1000 px, no fixed widths, no horizontal page overflow
- Selection state lives in the page component, so it persists while navigating anchors and opening/closing detail modals
- Anchors verified against section ids: `a-casa`, `destaques`, `colecoes`, `vinhos`, `vinicolas`, `servicos`, `selecao`, `galeria`, `avaliacoes`, `onde-estamos`, `duvidas`, `portal`, `contato`

---

## 6. Constraints respected

Original `/casa-do-vinho` Portal page untouched. No Supabase, no Portal Connect Foundation changes, no backend, no auth, no production deployment.