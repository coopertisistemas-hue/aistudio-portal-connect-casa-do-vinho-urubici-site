import { services } from "@/mocks/casaDoVinho/portal";

export default function ServicesPanel() {
  return (
    <section className="panel panel--content" data-side="full" id="servicos" aria-labelledby="servicos-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Dark%20wooden%20table%20with%20a%20linen%20wrapped%20wine%20gift%20box%2C%20two%20crystal%20glasses%2C%20a%20corkscrew%20and%20a%20bottle%20of%20red%20wine%2C%20warm%20candlelight%20pooling%20on%20the%20surface%2C%20deep%20shadow%20around%20the%20edges%2C%20no%20dominant%20subject%2C%20quiet%20luxury%20still%20life%20with%20amber%20and%20burgundy%20tones&width=2400&height=1350&seq=cdv-services-gift&orientation=landscape"
        alt="Mesa com caixa de presente, taças e acessórios de vinho sob luz de vela"
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
              07 — Produtos e serviços
            </p>
            <h2 id="servicos-title" data-reveal>
              Tudo o que acompanha<br />a <em className="accent">garrafa</em>.
            </h2>
            <p data-reveal>
              Da escolha do rótulo ao momento em que ele é servido. A Casa do Vinho monta a
              mesa, embala o presente e conduz a degustação.
            </p>
          </div>
        </div>

        <div className="svc-grid">
          {services.map((s) => (
            <article className="svc-card" key={s.id} data-reveal>
              <i className={s.icon} aria-hidden="true"></i>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="pull" style={{ marginTop: 24 }} data-reveal>
          <p>
            Não vendemos online. Disponibilidade, valores e condições de cada serviço são
            confirmados pelo WhatsApp ou pelo formulário desta página.
          </p>
        </div>
      </div>
    </section>
  );
}