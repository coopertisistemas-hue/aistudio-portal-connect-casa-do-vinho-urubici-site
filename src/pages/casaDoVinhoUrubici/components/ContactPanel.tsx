import { useState, type FormEvent } from "react";
import { casaConfig } from "@/mocks/casaDoVinho/config";

type FormResponse = {
  code?: string;
  message?: string;
  meta?: { message?: string; detail?: string };
};

const interests = [
  "Degustação guiada",
  "Seleção de vinhos",
  "Presentes e embalagens",
  "Visita à cave",
  "Parceria / vinícola"
];

export default function ContactPanel() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const [chars, setChars] = useState(0);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const honey = String(data.get("company_alt") ?? "").trim();
    if (honey) {
      setStatus("ok");
      setFeedback("Mensagem enviada. A casa responde em breve.");
      return;
    }

    const body = new URLSearchParams();
    data.forEach((value, key) => {
      if (key === "company_alt") return;
      if (typeof value === "string" && value.trim() !== "") body.append(key, value);
    });

    setStatus("sending");
    setFeedback("");

    try {
      const res = await fetch(casaConfig.formSubmitAddr, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString()
      });
      const responseText = await res.text();
      let parsed: FormResponse | null = null;
      try {
        parsed = JSON.parse(responseText) as FormResponse;
      } catch {
        parsed = null;
      }
      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = /spam/i.test(String(serverMsg || ""));

      if (res.ok && parsed?.code === "OK" && !isSpam) {
        setStatus("ok");
        setFeedback(
          "Mensagem enviada. A Casa do Vinho responde pelo contato informado — normalmente no mesmo dia."
        );
        form.reset();
        setChars(0);
      } else {
        setStatus("error");
        setFeedback(
          serverMsg && !isSpam
            ? String(serverMsg)
            : "Não foi possível enviar agora. Tente novamente ou fale com a casa pelo WhatsApp."
        );
      }
    } catch {
      setStatus("error");
      setFeedback(
        "Falha de conexão ao enviar. Tente novamente em instantes ou use o WhatsApp."
      );
    }
  };

  return (
    <section className="panel panel--content" data-side="full" id="contato" aria-labelledby="contato-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Deep%20red%20wine%20pouring%20into%20a%20crystal%20glass%20in%20a%20dark%20cellar%2C%20warm%20candle%20light%20behind%20the%20glass%2C%20shelves%20of%20bottles%20dissolving%20into%20shadow%2C%20no%20text%2C%20cinematic%20close%20up%20with%20rich%20ruby%20and%20amber%20highlights%2C%20quiet%20empty%20space%20on%20the%20left%20half&width=2400&height=1350&seq=cdv-contact-pour&orientation=landscape"
        alt="Vinho tinto sendo servido em uma taça de cristal, em detalhe"
        width={2400}
        height={1350}
        loading="eager"
        fetchPriority="low"
        decoding="async"
        data-parallax="0.32"
      />
      <div className="panel-veil" aria-hidden="true" />
      <div className="panel-copy panel-copy--wide">
        <div className="contact-grid">
          <div className="contact-aside">
            <p className="stamp" data-reveal>
              14 — Contato
            </p>
            <h2 id="contato-title" data-reveal>
              Vamos escolher<br />a sua <em className="accent">garrafa</em>.
            </h2>
            <p className="sub" data-reveal>
              Degustações, presentes, seleção para uma ocasião ou uma conversa sobre vinhos:
              escreva para a casa e receba a resposta com disponibilidade e condições.
            </p>
            <div className="contact-meta" data-reveal>
              <span>
                <strong>Endereço</strong>
                <br />
                {casaConfig.address}
              </span>
              <span>
                <strong>Atendimento</strong>
                <br />
                Visitas e degustações com agendamento prévio.
              </span>
            </div>
            <a
              className="wa-link"
              data-reveal
              href={`https://wa.me/${casaConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-whatsapp-line" aria-hidden="true"></i>
              WhatsApp direto da casa
            </a>
            <div className="pull" data-reveal>
              <p>
                Prefere vir primeiro? Suba a serra, entre na cave e prove. A porta fica
                aberta até tarde no inverno.
              </p>
            </div>
          </div>

          <form
            className="form-card"
            data-readdy-form
            id="casa-do-vinho-contato"
            onSubmit={submit}
            noValidate={false}
          >
            <div className="field-row">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="name" type="text" required placeholder="Seu nome" autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" required placeholder="voce@email.com" autoComplete="email" />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="telefone">Telefone / WhatsApp</label>
                <input id="telefone" name="phone" type="tel" placeholder="(00) 00000-0000" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="interesse">Assunto</label>
                <select id="interesse" name="interesse" defaultValue={interests[0]}>
                  {interests.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="message"
                required
                maxLength={500}
                placeholder="Conte a ocasião, a data desejada ou os rótulos que procura."
                onChange={(e) => setChars(e.target.value.length)}
              />
              <span style={{ fontFamily: "var(--font-label)", fontSize: 10, color: "var(--muted)" }}>
                {`${chars}/500`}
              </span>
            </div>

            <div className="field field-hp" aria-hidden="true">
              <label htmlFor="company_alt">Empresa</label>
              <input
                id="company_alt"
                name="company_alt"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                readOnly
              />
            </div>

            <button className="cta" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
              <i className="ri-send-plane-line" aria-hidden="true"></i>
            </button>

            {status === "ok" && (
              <p className="form-status is-ok" role="status">
                {feedback}
              </p>
            )}
            {status === "error" && (
              <p className="form-status is-err" role="alert">
                {feedback}
              </p>
            )}

            <p className="sel-note">
              Ao enviar, você concorda em ser contatado pela Casa do Vinho sobre este
              pedido. Nenhum dado é usado para outro fim.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}