import { createPortal } from "react-dom";
import type { Wine } from "../types";
import { useDialogA11y } from "../hooks/useDialogA11y";
import { handleImageError } from "../utils/imageFallback";

type Props = {
  wine: Wine | null;
  onClose: () => void;
  onAdd: (id: string) => void;
};

export default function WineDetailModal({ wine, onClose, onAdd }: Props) {
  // Hook runs unconditionally: it only engages while a bottle is open.
  const dialogRef = useDialogA11y<HTMLDivElement>(Boolean(wine), onClose);

  if (!wine) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-card"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="wine-detail-title"
        aria-describedby="wine-detail-note"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fechar detalhes do rótulo">
          <i className="ri-close-line" aria-hidden="true"></i>
        </button>
        <div className="detail-grid">
          <div
            className="detail-media"
            data-cutout={wine.imageKind === "official-cutout" ? true : undefined}
          >
            <img
              src={wine.image}
              alt={
                wine.imageKind === "official-cutout"
                  ? `Foto oficial da garrafa ${wine.name}, ${wine.winery}`
                  : `Imagem ilustrativa da garrafa de ${wine.name}, ${wine.winery}`
              }
              width={900}
              height={1125}
              decoding="async"
              onError={handleImageError}
            />
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
            <p className="detail-note" id="wine-detail-note">
              {wine.notes}
            </p>
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
            <p className="media-note">
              {wine.imageKind === "official-cutout"
                ? `${wine.imageCredit ?? "Foto oficial do produto"}. Safra, lote e disponibilidade são confirmados pela casa antes de qualquer reserva.`
                : "Ficha e imagem ilustrativas nesta prévia do Portal. Rótulo, safra e dados oficiais são confirmados pela casa antes da publicação."}
            </p>
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