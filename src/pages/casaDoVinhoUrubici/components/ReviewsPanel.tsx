import { reviewSources, reviewPrinciples } from "@/mocks/casaDoVinho/reviews";
import { casaConfig } from "@/mocks/casaDoVinho/config";

export default function ReviewsPanel() {
  return (
    <section className="panel panel--content" data-side="full" id="avaliacoes" aria-labelledby="avaliacoes-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Single%20candle%20flame%20beside%20a%20crystal%20wine%20glass%20on%20a%20dark%20wooden%20table%2C%20very%20soft%20blurred%20cellar%20behind%2C%20warm%20amber%20bokeh%2C%20quiet%20empty%20composition%20with%20space%20for%20text%2C%20deep%20brown%20shadow%2C%20intimate%20low%20key%20still%20life&width=2400&height=1350&seq=cdv-proof-candle&orientation=landscape"
        alt="Vela acesa ao lado de uma taça de vinho em ambiente escuro"
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
              09 — Prova social
            </p>
            <h2 id="avaliacoes-title" data-reveal>
              Só o que é <em className="accent">verificado</em>.
            </h2>
            <p data-reveal>
              Esta página não publica depoimentos escritos pela casa. As notas aparecem
              apenas quando vêm de uma fonte verificável, com data e origem.
            </p>
          </div>
        </div>

        <div className="proof-grid">
          {reviewSources.map((r) => (
            <article className="proof-card" key={r.id} data-reveal>
              <span className="proof-status">{r.status}</span>
              <h3>{r.label}</h3>
              <p>{r.note}</p>
              <p style={{ color: "var(--muted)", fontSize: 12 }}>
                Fonte: {r.source} · sem nota publicada até o momento
              </p>
              <a
                className="wa-link"
                href={casaConfig.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-external-link-line" aria-hidden="true"></i>
                Abrir a página no Portal Urubici
              </a>
            </article>
          ))}

          <article className="proof-card" data-reveal>
            <h3>Como tratamos avaliações</h3>
            <ul className="proof-list">
              {reviewPrinciples.map((p) => (
                <li key={p}>
                  <i className="ri-check-line" aria-hidden="true"></i>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p>
              Se você já visitou a casa, sua avaliação é bem-vinda pelo Portal Urubici e
              passa a aparecer aqui depois da checagem.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}