import { useRef } from "react";
import { casaConfig } from "@/mocks/casaDoVinho/config";
import { useChapterFilm } from "@/pages/casaDoVinhoUrubici/hooks/useChapterFilm";

export default function Chapter() {
  const ref = useRef<HTMLDivElement>(null);
  useChapterFilm(ref);

  return (
    <section
      className="chapter"
      ref={ref}
      data-video={casaConfig.video}
      data-duration="14"
      data-poster={casaConfig.poster}
      data-label="Casa do Vinho Urubici"
    >
      <div className="stage">
        <img
          className="plate"
          src={casaConfig.poster}
          width={1920}
          height={1080}
          fetchPriority="high"
          decoding="async"
          alt="Vinho tinto sendo servido em uma taça de cristal sobre a bancada de madeira da boutique, com prateleiras de garrafas e a porta aberta para as montanhas de Urubici ao fundo"
        />
        <div className="veil" aria-hidden="true" />
        <div className="veil veil-deep" aria-hidden="true" />

        <div
          className="beat"
          data-from="0"
          data-to=".4286"
          data-pos="bottom"
          data-depth="soft"
          data-tone="dark"
          data-motion="track"
          id="abertura"
        >
          <p className="stamp">01 · Casa do Vinho · Urubici</p>
          <h1 data-split="lines">
            <span className="line">
              <span className="line-in">Uma cave acesa</span>
            </span>
            <span className="line">
              <span className="line-in">
                no alto da <em className="accent">serra</em>.
              </span>
            </span>
          </h1>
          <p className="sub">
            Vinhos escolhidos um a um, taças de cristal e a noite fria de Urubici.
          </p>
          <a className="cta" href="#colecoes">
            Explorar a cave
            <i className="ri-arrow-right-line" aria-hidden="true"></i>
          </a>
        </div>

        <div
          className="beat"
          data-from=".4286"
          data-to="1"
          data-pos="left"
          data-depth="busy"
          data-tone="dark"
          data-motion="drift"
          id="colecao"
        >
          <p className="stamp">02 · A coleção</p>
          <h2 data-split="lines">
            <span className="line">
              <span className="line-in">Rótulos que</span>
            </span>
            <span className="line">
              <span className="line-in">
                merecem a <em className="accent">taça</em>.
              </span>
            </span>
          </h2>
          <p className="sub">
            Império do Vinho, Comendador e garrafas que chegam em lotes pequenos.
          </p>
          <ul className="chips" data-side="right">
            <li>Curadoria da casa</li>
            <li>Degustação guiada</li>
            <li>Presentes e taças</li>
          </ul>
          <a className="cta" href="#vinhos">
            Ver catálogo
            <i className="ri-arrow-right-line" aria-hidden="true"></i>
          </a>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span></span>
        </div>
      </div>
    </section>
  );
}