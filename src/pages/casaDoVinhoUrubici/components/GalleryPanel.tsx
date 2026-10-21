import { galleryImages } from "@/mocks/casaDoVinho/gallery";

const spans = ["gallery-item--tall", "", "gallery-item--wide", "", "gallery-item--wide", ""];

export default function GalleryPanel() {
  return (
    <section className="panel panel--content" data-side="full" id="galeria" aria-labelledby="galeria-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Old%20stone%20and%20dark%20timber%20cellar%20wall%20with%20a%20single%20warm%20lamp%20glow%20and%20soft%20falling%20dust%2C%20an%20empty%20quiet%20texture%20with%20no%20subject%2C%20deep%20umber%20and%20amber%20tones%2C%20very%20soft%20focus%2C%20cinematic%20background%20plate&width=2400&height=1350&seq=cdv-gallery-texture&orientation=landscape"
        alt="Parede de pedra e madeira da cave em luz baixa"
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
              09 — Galeria
            </p>
            <h2 id="galeria-title" data-reveal>
              A cave como ela <em className="accent">é</em>.
            </h2>
            <p data-reveal>
              Luz de vela, madeira gasta e garrafas que chegaram de longe. Registros do
              balcão e da porta aberta para a serra.
            </p>
          </div>
          <p className="section-head__side" data-reveal>
            Imagens de ambientação autorizadas para uso no Portal Urubici.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((g, i) => (
            <figure className={`gallery-item ${spans[i] || ""}`} key={g.id} data-reveal>
              <img
                src={g.image}
                alt={g.alt}
                width={1200}
                height={900}
                loading="lazy"
                decoding="async"
                title={`Casa do Vinho Urubici — ${g.caption}`}
              />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}