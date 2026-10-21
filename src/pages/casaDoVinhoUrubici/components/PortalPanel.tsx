import { portalCategories } from "@/mocks/casaDoVinho/portal";

export default function PortalPanel() {
  return (
    <section className="panel panel--content" data-side="full" id="portal" aria-labelledby="portal-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Warm%20lit%20shop%20windows%20on%20a%20quiet%20mountain%20street%20at%20night%20with%20wet%20cobblestones%20reflecting%20amber%20light%2C%20cold%20blue%20mist%20between%20the%20rooftops%2C%20no%20single%20subject%2C%20wide%20calm%20atmospheric%20scene%2C%20cinematic%20travel%20photography%20with%20deep%20shadows&width=2400&height=1350&seq=cdv-portal-street&orientation=landscape"
        alt="Rua tranquila de montanha à noite com vitrines iluminadas"
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
              13 — Portal Urubici
            </p>
            <h2 id="portal-title" data-reveal>
              A serra inteira,<br />na mesma <em className="accent">navegação</em>.
            </h2>
            <p data-reveal>
              A Casa do Vinho é uma página de cliente dentro do Portal Urubici. Os módulos
              abaixo já estão preparados para receber o conteúdo do Portal — nenhuma empresa
              é listada antes da integração.
            </p>
          </div>
          <p className="section-head__side" data-reveal>
            Integração pronta · conteúdo aguardando publicação pelo Portal
          </p>
        </div>

        <div className="portal-grid">
          {portalCategories.map((c) => (
            <article className="portal-card" key={c.id} data-reveal>
              <i className={c.icon} aria-hidden="true"></i>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <span>{`Módulo ${c.anchor} · aguardando integração`}</span>
            </article>
          ))}
        </div>

        <p className="integration-note" data-reveal>
          Componentes de integração: hospedagem · restaurantes · atrativos · eventos ·
          conteúdo editorial — sem cadastro duplicado e sem sair do Portal Urubici.
        </p>
      </div>
    </section>
  );
}