import { useEffect, useMemo, useState } from "react";
import { wines } from "@/mocks/casaDoVinho/wines";
import type { Selection, Wine } from "../types";
import { handleImageError } from "../utils/imageFallback";
import WineDetailModal from "./WineDetailModal";

type Props = {
  onAdd: (id: string) => void;
  selection: Selection;
};

const types = ["Todos", "Tinto", "Branco", "Espumante", "Rosé"];

export default function CatalogPanel({ onAdd, selection }: Props) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Todos");
  const [region, setRegion] = useState("Todas");
  const [winery, setWinery] = useState("Todas");
  const [collection, setCollection] = useState("Todas");
  const [detail, setDetail] = useState<Wine | null>(null);

  const list = wines as Wine[];

  const regions = useMemo(
    () => Array.from(new Set(list.map((w) => w.region))).sort((a, b) => a.localeCompare(b)),
    [list]
  );
  const wineries = useMemo(
    () => Array.from(new Set(list.map((w) => w.winery))).sort((a, b) => a.localeCompare(b)),
    [list]
  );
  const collections = useMemo(
    () => Array.from(new Set(list.map((w) => w.collection))).sort((a, b) => a.localeCompare(b)),
    [list]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return list.filter((w) => {
      const matchesQuery =
        !q ||
        [w.name, w.winery, w.grape, w.region, w.notes, w.collection]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return (
        matchesQuery &&
        (type === "Todos" || w.type === type) &&
        (region === "Todas" || w.region === region) &&
        (winery === "Todas" || w.winery === winery) &&
        (collection === "Todas" || w.collection === collection)
      );
    });
  }, [list, query, type, region, winery, collection]);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("casa:refresh"));
  }, [filtered.length, type, region, winery, collection]);

  const reset = () => {
    setQuery("");
    setType("Todos");
    setRegion("Todas");
    setWinery("Todas");
    setCollection("Todas");
  };

  return (
    <section className="panel panel--content" data-side="full" id="vinhos" aria-labelledby="vinhos-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Extremely%20soft%20out%20of%20focus%20dark%20wine%20cellar%20with%20rows%20of%20bottles%20and%20small%20warm%20candle%20flames%2C%20deep%20brown%20and%20amber%20bokeh%20circles%2C%20no%20clear%20subject%2C%20quiet%20texture%20background%20for%20text%2C%20cinematic%20shallow%20depth%20of%20field&width=2400&height=1350&seq=cdv-catalog-bokeh&orientation=landscape"
        alt="Prateleiras de garrafas desfocadas ao fundo, em luz de vela"
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
              03 — Catálogo
            </p>
            <h2 id="vinhos-title" data-reveal>
              Encontre a sua <em className="accent">garrafa</em>.
            </h2>
            <p data-reveal>
              Busque por nome, uva ou vinícola, filtre por estilo e abra cada rótulo para
              ler as notas de degustação. Sem preço na tela: valores e safras são
              confirmados na conversa.
            </p>
          </div>
          <p className="section-head__side" data-reveal>
            {`${Object.keys(selection).length} rótulo(s) na sua seleção`}
          </p>
        </div>

        <div className="catalog-tools" data-reveal>
          <div className="search-wrap">
            <i className="ri-search-line" aria-hidden="true"></i>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por vinho, uva ou vinícola"
              aria-label="Buscar no catálogo"
            />
          </div>

          <div className="filter-row" role="group" aria-label="Filtrar por tipo">
            <span className="filter-label">Tipo</span>
            {types.map((t) => (
              <button
                key={t}
                type="button"
                className={`chip-btn${type === t ? " is-on" : ""}`}
                onClick={() => setType(t)}
                aria-pressed={type === t}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="filter-selects">
            <div className="filter-select">
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                aria-label="Filtrar por região"
              >
                <option value="Todas">Todas as regiões</option>
                {regions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </div>
            <div className="filter-select">
              <select
                value={winery}
                onChange={(e) => setWinery(e.target.value)}
                aria-label="Filtrar por vinícola"
              >
                <option value="Todas">Todas as vinícolas</option>
                {wineries.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </div>
            <div className="filter-select">
              <select
                value={collection}
                onChange={(e) => setCollection(e.target.value)}
                aria-label="Filtrar por coleção"
              >
                <option value="Todas">Todas as coleções</option>
                {collections.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div className="catalog-meta">
          <span>{`${filtered.length} rótulo(s) encontrados`}</span>
          <button type="button" className="clear-link" onClick={reset}>
            Limpar filtros
          </button>
        </div>

        <div className="wine-grid">
          {filtered.map((w) => (
            <button
              key={w.id}
              type="button"
              className="wine-card"
              onClick={() => setDetail(w)}
              aria-label={`Ver detalhes de ${w.name}`}
            >
              <span className="wine-card__thumb">
                <img
                  src={w.image}
                  alt={`Garrafa de ${w.name}, ${w.winery}`}
                  width={900}
                  height={1125}
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                />
              </span>
              <span className="wine-card__body">
                <span className="wine-card__type">{`${w.type} · ${w.region}`}</span>
                <span className="wine-card__name">{w.name}</span>
                <span className="wine-card__winery">{w.winery}</span>
                <span className="wine-card__add">
                  Ver detalhes
                  <i className="ri-arrow-right-line" aria-hidden="true"></i>
                </span>
              </span>
            </button>
          ))}
          {!filtered.length && (
            <div className="wine-empty">
              Nenhum rótulo combina com esses filtros.
              <br />
              Tente outra uva, região ou limpe a busca.
            </div>
          )}
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