import type { Selection } from "../types";

type Props = {
  selection: Selection;
};

/**
 * Persistent conversion counter. It only exists once something is selected, so the
 * page stays clean, and it always states that this is an inquiry — never checkout.
 */
export default function SelectionDock({ selection }: Props) {
  const bottles = Object.values(selection).reduce((sum, qty) => sum + qty, 0);
  const labels = Object.keys(selection).length;

  if (!bottles) return null;

  return (
    <div className="sel-dock" aria-live="polite">
      <span className="sel-dock__count" aria-hidden="true">
        {bottles}
      </span>
      <span className="sel-dock__text">
        <strong>{`${labels} rótulo${labels > 1 ? "s" : ""} na seleção`}</strong>
        <span>Enviar sem compromisso</span>
      </span>
      <a className="sel-dock__link" href="#selecao">
        Revisar
        <i className="ri-arrow-right-line" aria-hidden="true"></i>
      </a>
    </div>
  );
}