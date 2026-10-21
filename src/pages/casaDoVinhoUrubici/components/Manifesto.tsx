import { Fragment } from "react";

const words: { t: string; accent?: boolean }[] = [
  { t: "A" },
  { t: "serra" },
  { t: "impõe" },
  { t: "o" },
  { t: "frio." },
  { t: "Nós" },
  { t: "respondemos" },
  { t: "com" },
  { t: "fogo", accent: true },
  { t: "—" },
  { t: "garrafas" },
  { t: "escolhidas" },
  { t: "a" },
  { t: "dedo," },
  { t: "taças" },
  { t: "que" },
  { t: "esperam" },
  { t: "a" },
  { t: "conversa" },
  { t: "certa" },
  { t: "e" },
  { t: "uma" },
  { t: "noite" },
  { t: "sem", accent: true },
  { t: "pressa." }
];

export default function Manifesto() {
  return (
    <section className="panel manifesto" id="manifesto" aria-label="Manifesto da casa">
      <span className="panel-accent panel-accent--numeral" data-parallax="0.55" aria-hidden="true">
        01
      </span>
      <p className="stamp manifesto__tag" data-reveal>
        01 — Manifesto
      </p>
      <p className="manifesto-text" data-words>
        {words.map((w, i) => (
          <Fragment key={`${w.t}-${i}`}>
            {i > 0 ? " " : null}
            {w.accent ? (
              <em className="accent">
                <span className="w">{w.t}</span>
              </em>
            ) : (
              <span className="w">{w.t}</span>
            )}
          </Fragment>
        ))}
      </p>
    </section>
  );
}