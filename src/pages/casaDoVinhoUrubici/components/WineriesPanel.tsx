import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { wineries, winerySlots } from "@/mocks/casaDoVinho/wineries";
import { wines } from "@/mocks/casaDoVinho/wines";
import type { Winery } from "../types";

function WineryModal({ winery, onClose }: { winery: Winery; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const related = wines.filter((w) => w.winery.toLowerCase().includes(winery.name.toLowerCase()));

  return createPortal(
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="winery-title"
      onClick={onClose}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar">
          <i className="ri-close-line" aria-hidden="true"></i>
        </button>
        <div className="detail-grid">
          <div className="detail-media">
            <img src={winery.image} alt={`Vinícola ${winery.name}`} width={1400} height={1000} />
          </div>
          <div className="detail-body">
            <p className="stamp">{winery.placement}</p>
            <h2 id="winery-title">{winery.name}</h2>
            <p className="detail-note">{winery.tagline}</p>
            <p style={{ margin: "0 0 4px", fontSize: 14, lineHeight: 1.7, color: "color-mix(in srgb, var(--text) 80%, transparent)" }}>
              {winery.story}
            </p>
            <dl style={{ margin: 0 }}>
              <div className="detail-row">
                <dt>Origem</dt>
                <dd>{winery.origin}</dd>
              </div>
              <div className="detail-row">
                <dt>Estilos</dt>
                <dd>{winery.styles}</dd>
              </div>
              <div className="detail-row">
                <dt>Rótulos</dt>
                <dd>{winery.labels}</dd>
              </div>
              {related.length > 0 && (
                <div className="detail-row">
                  <dt>Na cave</dt>
                  <dd>{related.map((w) => w.name).join(" · ")}</dd>
                </div>
              )}
            </dl>
            <div className="detail-actions">
              <a className="cta" href="#vinhos" onClick={onClose}>
                Ver os rótulos
                <i className="ri-arrow-right-line" aria-hidden="true"></i>
              </a>
              <a className="cta cta--ghost" href="#contato" onClick={onClose}>
                Falar com a casa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function WineriesPanel() {
  const [open, setOpen] = useState<Winery | null>(null);

  return (
    <section className="panel panel--content" data-side="full" id="vinicolas" aria-labelledby="vinicolas-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Wide%20highland%20vineyard%20at%20blue%20dusk%20with%20mountain%20ridges%20behind%20and%20low%20mist%20between%20the%20rows%2C%20the%20landscape%20quiet%20with%20no%20single%20subject%2C%20deep%20indigo%20and%20warm%20brown%20tones%2C%20small%20warm%20lights%20of%20a%20distant%20winery%20building%2C%20cinematic%20panoramic%20photography&width=2400&height=1350&seq=cdv-wineries-vineyard&orientation=landscape"
        alt="Vinhedos de altitude ao anoitecer na Serra Catarinense"
        width={2400}
        height={1350}
        loading="eager"
        fetchPriority="low"
        decoding="async"
        data-parallax="0.32"
      />
      <div className="panel-veil" aria-hidden="true" />
      <div className="panel-copy panel-copy--wide">
        <div className="section-head">
          <div>
            <p className="stamp" data-reveal>
              06 — Vinícolas
            </p>
            <h2 id="vinicolas-title" data-reveal>
              Quem faz o vinho<br />
              que <em className="accent">servimos</em>.
            </h2>
            <p data-reveal>
              Perfis editoriais das casas que ocupam a nossa cave — origem, história, estilos
              e os rótulos que chegam à prateleira.
            </p>
          </div>
          <p className="section-head__side" data-reveal>
            Perfis premium e coleções patrocinadas são identificados como espaços comerciais.
          </p>
        </div>

        <div className="winery-grid">
          {(wineries as Winery[]).map((w) => (
            <article className="winery-card" key={w.id} data-reveal>
              <div className="winery-card__media">
                <img
                  src={w.image}
                  alt={`Vinícola ${w.name}, ${w.origin}`}
                  width={1400}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                />
                <span className={`placement-badge${w.paid ? " placement-badge--paid" : ""}`}>
                  {w.paid ? `${w.placement} · espaço pago` : w.placement}
                </span>
              </div>
              <div className="winery-card__body">
                <span className="winery-card__origin">{w.origin}</span>
                <h3>{w.name}</h3>
                <p>{w.tagline}</p>
                <button
                  type="button"
                  className="winery-more"
                  onClick={() => setOpen(w)}
                  aria-label={`Abrir o perfil da vinícola ${w.name}`}
                >
                  Ler o perfil
                  <i className="ri-arrow-right-line" aria-hidden="true"></i>
                </button>
              </div>
            </article>
          ))}

          {winerySlots.map((s) => (
            <div className="slot-card" key={s.id} data-reveal>
              <p className="stamp">Espaço comercial</p>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contato">Quero este espaço</a>
            </div>
          ))}
        </div>

        <p className="monetize-note">
          Destaques e perfis identificados como pagos são espaços comerciais do Portal. A
          casa não publica rótulos que não prove.
        </p>
      </div>

      {open && <WineryModal winery={open} onClose={() => setOpen(null)} />}
    </section>
  );
}