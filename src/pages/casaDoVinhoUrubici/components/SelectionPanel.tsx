import { useMemo, useState } from "react";
import { wines } from "@/mocks/casaDoVinho/wines";
import { casaConfig } from "@/mocks/casaDoVinho/config";
import type { Selection, Wine } from "../types";
import type { MouseEvent } from "react";

type Props = {
  selection: Selection;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function SelectionPanel({ selection, onAdd, onRemove }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const list = wines as Wine[];
  const rows = useMemo(
    () =>
      Object.keys(selection)
        .map((id) => {
          const wine = list.find((w) => w.id === id);
          return wine ? { wine, qty: selection[id] } : null;
        })
        .filter((r): r is { wine: Wine; qty: number } => Boolean(r)),
    [selection, list]
  );

  const bottles = rows.reduce((sum, r) => sum + r.qty, 0);

  const message = useMemo(() => {
    const lines = [
      `Olá, Casa do Vinho Urubici! Sou ${name || "…"}.`,
      "",
      "Minha seleção:",
      ...rows.map((r) => `• ${r.qty}x ${r.wine.name} (${r.wine.winery})`),
      "",
      `Telefone para contato: ${phone || "…"}`,
      "Pode confirmar disponibilidade e condições?"
    ];
    return encodeURIComponent(lines.join("\n"));
  }, [name, phone, rows]);

  const waHref = `https://wa.me/${casaConfig.whatsappNumber}?text=${message}`;

  const handleWhats = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!rows.length) {
      e.preventDefault();
      setError("Escolha pelo menos um rótulo no catálogo para enviar a seleção.");
      return;
    }
    if (!name.trim() || phone.trim().length < 8) {
      e.preventDefault();
      setError("Informe seu nome e um telefone com DDD para que a casa consiga responder.");
      return;
    }
    setError("");
  };

  return (
    <section className="panel panel--content" data-side="full" id="selecao" aria-labelledby="selecao-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Two%20crystal%20glasses%20of%20red%20wine%20side%20by%20side%20on%20a%20dark%20wooden%20counter%20with%20an%20open%20bottle%20behind%2C%20soft%20candle%20glow%20from%20the%20left%2C%20the%20subject%20placed%20in%20the%20lower%20right%20of%20the%20frame%20with%20the%20upper%20left%20calm%20dark%20empty%20space%2C%20cinematic%20low%20key%20photography%2C%20warm%20ruby%20tones&width=2400&height=1350&seq=cdv-selection-glasses&orientation=landscape"
        alt="Duas taças de vinho tinto sobre a bancada escura da boutique"
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
              08 — Minha Seleção
            </p>
            <h2 id="selecao-title" data-reveal>
              Sua lista, sem <em className="accent">pressa</em>.
            </h2>
            <p data-reveal>
              Monte a seleção enquanto navega. Ao final, envie o nome e o telefone e a casa
              responde pelo WhatsApp com disponibilidade, safra e condições. Sem pagamento,
              sem reserva automática.
            </p>
          </div>
        </div>

        <div className="sel-layout">
          <div className="sel-list" data-reveal aria-live="polite">
            {rows.length === 0 && (
              <div className="sel-empty">
                <i className="ri-goblet-line" aria-hidden="true"></i>
                Sua seleção está vazia. Abra um rótulo no catálogo e toque em “Adicionar à
                Minha Seleção”.
                <div style={{ marginTop: 14 }}>
                  <a className="cta cta--ghost" href="#vinhos">
                    Ir ao catálogo
                  </a>
                </div>
              </div>
            )}
            {rows.map((r) => (
              <div className="sel-row" key={r.wine.id}>
                <img
                  src={r.wine.image}
                  alt={`Garrafa de ${r.wine.name}`}
                  width={46}
                  height={58}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="sel-row__name">{r.wine.name}</p>
                  <p className="sel-row__meta">{`${r.wine.winery} · ${r.wine.region}`}</p>
                </div>
                <div className="qty">
                  <button
                    type="button"
                    onClick={() => onRemove(r.wine.id)}
                    aria-label={`Remover uma unidade de ${r.wine.name}`}
                  >
                    <i className="ri-subtract-line" aria-hidden="true"></i>
                  </button>
                  <span>{r.qty}</span>
                  <button
                    type="button"
                    onClick={() => onAdd(r.wine.id)}
                    aria-label={`Adicionar uma unidade de ${r.wine.name}`}
                  >
                    <i className="ri-add-line" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="sel-summary" data-reveal>
            <h3>Enviar para a casa</h3>
            <div className="sel-count">
              <span>Garrafas</span>
              <strong>{bottles}</strong>
            </div>
            <div className="field">
              <label htmlFor="sel-name">Seu nome</label>
              <input
                id="sel-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como podemos te chamar"
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="sel-phone">Telefone / WhatsApp</label>
              <input
                id="sel-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(00) 00000-0000"
                autoComplete="tel"
              />
            </div>
            <a
              className="cta"
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhats}
            >
              <i className="ri-whatsapp-line" aria-hidden="true"></i>
              Enviar seleção pelo WhatsApp
            </a>
            {error && (
              <p className="form-status is-err" role="alert">
                {error}
              </p>
            )}
            <p className="sel-note">
              Nenhum valor é cobrado nesta página. Disponibilidade, safra e entrega são
              combinadas diretamente com a Casa do Vinho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}