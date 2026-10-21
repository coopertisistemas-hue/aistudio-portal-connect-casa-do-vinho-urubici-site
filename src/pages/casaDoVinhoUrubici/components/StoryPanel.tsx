export default function StoryPanel() {
  return (
    <section className="panel" data-side="right" id="a-casa" aria-labelledby="a-casa-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Candlelit%20wine%20cellar%20interior%20with%20dark%20timber%20shelves%20full%20of%20bottles%2C%20a%20worn%20wooden%20counter%20and%20two%20crystal%20glasses%2C%20open%20doorway%20showing%20blue%20mountain%20dusk%2C%20the%20main%20subject%20sits%20in%20the%20left%20third%20of%20the%20frame%20and%20the%20right%20half%20stays%20calm%20and%20empty%20in%20deep%20brown%20shadow%2C%20warm%20amber%20light%2C%20cinematic%20editorial%20photography&width=2400&height=1350&seq=cdv-story-cellar&orientation=landscape"
        alt="Interior da cave da Casa do Vinho, com prateleiras de madeira, velas e a porta aberta para a noite da serra"
        width={2400}
        height={1350}
        loading="eager"
        fetchPriority="low"
        decoding="async"
        data-parallax="0.32"
      />
      <div className="panel-veil" aria-hidden="true" />
      <div className="panel-copy" data-parallax="-0.08">
        <p className="stamp" data-reveal>
          03 — A Casa
        </p>
        <h2 id="a-casa-title" data-reveal>
          Uma casa feita
          <br />
          de <em className="accent">tempo</em>.
        </h2>
        <p className="sub" data-reveal>
          A Casa do Vinho nasceu do encontro entre a noite fria de Urubici e a vontade de
          abrir uma garrafa boa. Um balcão de madeira, prateleiras até o teto e uma porta
          que nunca fecha cedo.
        </p>
        <div className="pull" data-reveal>
          <p>
            A carta é pequena de propósito: cada rótulo passa pela taça antes de entrar na
            prateleira. O que não convence a casa, não chega ao balcão.
          </p>
        </div>
        <a className="cta cta--ghost" href="#colecoes" data-reveal>
          Conhecer as coleções
          <i className="ri-arrow-right-line" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  );
}