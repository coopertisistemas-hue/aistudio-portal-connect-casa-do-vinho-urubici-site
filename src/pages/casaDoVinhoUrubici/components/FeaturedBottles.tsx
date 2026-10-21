import { useState } from "react";
import { wines } from "@/mocks/casaDoVinho/wines";
import { casaConfig } from "@/mocks/casaDoVinho/config";
import type { Selection, Wine } from "../types";
import { handleImageError } from "../utils/imageFallback";
import WineDetailModal from "./WineDetailModal";

type Props = {
  onAdd: (id: string) => void;
  selection: Selection;
};

const rail = [
  "comendador-tinto",
  "imperio-reserva-tinto",
  "imperio-gran-terroir",
  "comendador-branco"
];

export default function FeaturedBottles({ onAdd, selection }: Props) {
  const [detail, setDetail] = useState<Wine | null>(null);
  const list = wines as Wine[];
  const bottles = list.filter((w) => rail.includes(w.id));
  const ordered = rail
    .map((id) => bottles.find((w) => w.id === id))
    .filter((w): w is Wine => Boolean(w));
  const total = Object.values(selection).reduce((sum, qty) => sum + qty, 0);

  return (
    <section
      className="panel panel--content"
      data-side="full"
      id="destaques"
      aria-labelledby="destaques-title"
    >
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Warm%20blurred%20wine%20shop%20interior%20at%20night%20with%20amber%20pools%20of%20light%20falling%20across%20dark%20wooden%20shelving%20and%20bottle%20silhouettes%2C%20deep%20garnet%20and%20gold%20bokeh%2C%20entirely%20out%20of%20focus%20texture%20with%20no%20readable%20text%2C%20cinematic%20shallow%20depth%20of%20field&width=2400&height=1350&seq=cdv-featured-rail-bokeh&orientation=landscape"
        alt="Interior da boutique ao fundo, desfocado em tons de âmbar"
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
              01 — Destaques da casa
            </p>
            <h2 id="destaques-title" data-reveal>
              As garrafas que
              <br />
              saem <em className="accent">primeiro</em>.
            </h2>
            <p data-reveal>
              Quatro rótulos escolhidos pela casa para começar a conversa. Toque na
              garrafa para ler as notas de degustação e montar a sua seleção — sem preço na
              tela e sem compra online.
            </p>
          </div>
          <p className="section-head__side" data-reveal>
            {total > 0 ? `${total} garrafa(s) na seleção` : "Seleção vazia"}
          </p>
        </div>

        <p className="media-note" data-reveal>
          Prévia: imagens e fichas ilustrativas. As fotos oficiais dos rótulos e os dados de
          safra entram com o catálogo da casa.
        </p>

        <div className="featured-rail" data-reveal>
          {ordered.map((w) => (
            <article className="featured-card" key={w.id}>
              <button
                type="button"
                className="featured-card__media"
                onClick={() => setDetail(w)}
                aria-label={`Ver detalhes de ${w.name}`}
              >
                {casaConfig.monetizationVerified && casaConfig.featuredWineIds.includes(w.id) && (
                  <span className="wine-card__badge">Destaque pago</span>
                )}
                <img
                  src={w.image}
                  alt={`Garrafa de ${w.name}, ${w.winery}`}
                  width={900}
                  height={1125}
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
              </button>
              <div className="featured-card__body">
                <p className="featured-card__type">{`${w.type} · ${w.region}`}</p>
                <h3 className="featured-card__name">{w.name}</h3>
                <p className="featured-card__winery">{w.winery}</p>
                <div className="featured-card__actions">
                  <button
                    type="button"
                    className="featured-add"
                    onClick={() => onAdd(w.id)}
                    aria-label={`Adicionar ${w.name} à Minha Seleção`}
                  >
                    <i className="ri-add-line" aria-hidden="true"></i>
                    Adicionar
                  </button>
                  {selection[w.id] ? (
                    <span className="featured-card__qty">{`${selection[w.id]} na seleção`}</span>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-foot" data-reveal>
          <a className="clear-link" href="#selecao">
            Revisar Minha Seleção
          </a>
          <a className="clear-link" href="#vinhos">
            Ver o catálogo completo
          </a>
        </div>
      </div>

      <WineDetailModal
        wine={detail}
        onClose={() => setDetail(null)}
        onAdd={(id) => {
          onAdd(id);
          setDetail(null);
        }}
      />
    </section>
  );
}