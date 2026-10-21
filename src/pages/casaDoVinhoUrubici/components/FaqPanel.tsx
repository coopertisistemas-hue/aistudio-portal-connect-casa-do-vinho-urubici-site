import { useState } from "react";
import { faqItems } from "@/mocks/casaDoVinho/faq";

export default function FaqPanel() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section className="panel panel--content" data-side="full" id="duvidas" aria-labelledby="faq-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Extremely%20close%20view%20of%20aged%20dark%20oak%20counter%20with%20a%20wine%20glass%20ring%20stain%20and%20soft%20candle%20light%20raking%20across%20the%20grain%2C%20no%20subject%2C%20calm%20quiet%20texture%2C%20deep%20umber%20tones%2C%20shallow%20depth%20of%20field%2C%20cinematic%20background&width=2400&height=1350&seq=cdv-faq-wood&orientation=landscape"
        alt="Detalhe da madeira escura do balcão da casa"
        width={2400}
        height={1350}
        loading="eager"
        fetchPriority="low"
        decoding="async"
        data-parallax="0.32"
      />
      <div className="panel-veil" aria-hidden="true" />
      <div className="panel-copy panel-copy--wide">
        <div className="section-head" style={{ justifyContent: "center", textAlign: "center" }}>
          <div>
            <p className="stamp" data-reveal>
              12 — Dúvidas
            </p>
            <h2 id="faq-title" data-reveal>
              Antes de subir a <em className="accent">serra</em>.
            </h2>
            <p data-reveal style={{ margin: "8px auto 0" }}>
              Respostas curtas para o que os visitantes perguntam com mais frequência.
            </p>
          </div>
        </div>

        <div className="faq-wrap">
          {faqItems.map((item) => {
            const open = openId === item.id;
            return (
              <div className={`faq-item${open ? " is-open" : ""}`} key={item.id} data-reveal>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={open}
                  aria-controls={`faq-${item.id}`}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  <span>{item.q}</span>
                  <i className="ri-add-line" aria-hidden="true"></i>
                </button>
                <div className="faq-a" id={`faq-${item.id}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}