const lines = [
  {
    idx: "01",
    title: "Império do Vinho",
    text: "Tintos de altitude e espumantes de método tradicional, a prateleira central da cave.",
    tag: "Linha verificada"
  },
  {
    idx: "02",
    title: "Comendador",
    text: "A escola clássica do sul do país, em Tannat, Chardonnay e lotes de guarda.",
    tag: "Linha verificada"
  },
  {
    idx: "03",
    title: "Pequenos produtores",
    text: "Garrafas que chegam em poucas caixas, escolhidas pela história de quem faz.",
    tag: "Curadoria da casa"
  },
  {
    idx: "04",
    title: "Espumantes e rosés",
    text: "Para a mesa de fim de tarde, servidos gelados mesmo no inverno da serra.",
    tag: "Curadoria da casa"
  }
];

export default function CollectionsPanel() {
  return (
    <section className="panel" data-side="left" id="colecoes" aria-labelledby="colecoes-title">
      <img
        className="panel-bg"
        src="https://readdy.ai/api/search-image?query=Close%20view%20of%20a%20row%20of%20premium%20wine%20bottles%20on%20a%20dark%20wooden%20shelf%20with%20candlelight%20grazing%20the%20glass%2C%20warm%20gold%20highlights%20on%20the%20labels%2C%20main%20subject%20in%20the%20right%20third%20of%20frame%20and%20the%20left%20half%20soft%20and%20empty%20in%20deep%20shadow%2C%20rich%20ruby%20and%20amber%20tones%2C%20luxury%20editorial%20still%20life&width=2400&height=1350&seq=cdv-collections-bottles&orientation=landscape"
        alt="Garrafas de vinho alinhadas em uma prateleira de madeira iluminada por velas"
        width={2400}
        height={1350}
        loading="eager"
        fetchPriority="low"
        decoding="async"
        data-parallax="0.32"
      />
      <div className="panel-veil" aria-hidden="true" />
      <div className="panel-copy panel-copy--list" data-parallax="-0.08" style={{ maxWidth: "min(640px, 100%)" }}>
        <p className="stamp" data-reveal>
          03 — Coleções
        </p>
        <h2 id="colecoes-title" data-reveal>
          Casas que
          <br />
          escolhemos a <em className="accent">dedo</em>.
        </h2>
        <p className="sub" data-reveal>
          Quatro famílias de rótulos organizam a cave — do produtor de altitude ao lote
          que só existe em poucas garrafas.
        </p>
        <ul className="rule-list" style={{ gridTemplateColumns: "1fr" }}>
          {lines.map((l) => (
            <li key={l.idx} data-reveal>
              <span className="idx">{l.idx}</span>
              <h3>{l.title}</h3>
              <p>{l.text}</p>
              <span className="tag">{l.tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}