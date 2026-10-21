import { casaConfig } from "@/mocks/casaDoVinho/config";

export default function LocationsPanel() {
  return (
    <section className="panel panel--content" data-side="full" id="onde-estamos" aria-labelledby="mapa-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Small%20mountain%20town%20in%20the%20Brazilian%20highlands%20at%20blue%20hour%2C%20warm%20window%20lights%20scattered%20across%20the%20valley%2C%20dark%20mountain%20ridges%20above%2C%20light%20mist%2C%20wide%20quiet%20landscape%20with%20no%20dominant%20subject%2C%20muted%20indigo%20and%20amber%20tones%2C%20cinematic%20travel%20photography&width=2400&height=1350&seq=cdv-locations-town&orientation=landscape"
        alt="Vista da cidade de Urubici ao anoitecer entre as montanhas"
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
              11 — Onde estamos
            </p>
            <h2 id="mapa-title" data-reveal>
              No centro de <em className="accent">Urubici</em>.
            </h2>
            <p data-reveal>
              A cave fica na área central da cidade, a poucos minutos dos principais
              atrativos da serra. O mapa abaixo está incorporado nesta página — não é
              preciso sair do Portal.
            </p>
          </div>
        </div>

        <div className="map-grid">
          <div className="map-info" data-reveal>
            <h3>{casaConfig.brand}</h3>
            <dl>
              <div>
                <dt>Endereço</dt>
                <dd>{casaConfig.address}</dd>
              </div>
              <div>
                <dt>Atendimento</dt>
                <dd>
                  Visitas e degustações com agendamento. Horários atualizados na página da
                  casa dentro do Portal Urubici.
                </dd>
              </div>
              <div>
                <dt>Contato</dt>
                <dd>{casaConfig.whatsappDisplay}</dd>
              </div>
              <div>
                <dt>Unidades</dt>
                <dd>Urubici · Santa Catarina — atendimento único, na cave do centro.</dd>
              </div>
            </dl>
            <a className="wa-link" href="#contato">
              <i className="ri-map-pin-line" aria-hidden="true"></i>
              Combinar uma visita
            </a>
          </div>

          <div className="map-frame" data-reveal>
            <iframe
              title="Mapa da Casa do Vinho em Urubici, Santa Catarina"
              src={casaConfig.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>

          <p className="map-hint">
            Mapa incorporado · Urubici, Santa Catarina · coordenadas aproximadas do centro
          </p>
        </div>
      </div>
    </section>
  );
}