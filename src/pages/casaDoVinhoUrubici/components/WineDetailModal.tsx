import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { Wine } from "../types";

type Props = {
  wine: Wine | null;
  onClose: () => void;
  onAdd: (id: string) => void;
};

export default function WineDetailModal({ wine, onClose, onAdd }: Props) {
  useEffect(() => {
    if (!wine) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [wine, onClose]);

  if (!wine) return null;

  return createPortal(
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wine-detail-title"
      onClick={onClose}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar">
          <i className="ri-close-line" aria-hidden="true"></i>
        </button>
        <div className="detail-grid">
          <div className="detail-media">
            <img src={wine.image} alt={`Garrafa de ${wine.name}`} width={900} height={1125} />
          </div>
          <div className="detail-body">
            <p className="stamp">{wine.collection}</p>
            <h2 id="wine-detail-title">{wine.name}</h2>
            <div className="detail-specs">
              <span className="spec-pill">{wine.type}</span>
              <span className="spec-pill">{wine.region}</span>
              <span className="spec-pill">{wine.country}</span>
              <span className="spec-pill">{wine.serve}</span>
            </div>
            <p className="detail-note">{wine.notes}</p>
            <dl style={{ margin: 0 }}>
              <div className="detail-row">
                <dt>Vinícola</dt>
                <dd>{wine.winery}</dd>
              </div>
              <div className="detail-row">
                <dt>Uvas</dt>
                <dd>{wine.grape}</dd>
              </div>
              <div className="detail-row">
                <dt>Harmoniza</dt>
                <dd>{wine.pairing}</dd>
              </div>
              <div className="detail-row">
                <dt>Disponibilidade</dt>
                <dd>
                  Sob consulta — confirmamos safra, lote e valor pelo WhatsApp antes de
                  qualquer reserva.
                </dd>
              </div>
            </dl>
            <div className="detail-actions">
              <button className="cta" type="button" onClick={() => onAdd(wine.id)}>
                Adicionar à Minha Seleção
                <i className="ri-add-line" aria-hidden="true"></i>
              </button>
              <a className="cta cta--ghost" href="#selecao" onClick={onClose}>
                Ver seleção
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}