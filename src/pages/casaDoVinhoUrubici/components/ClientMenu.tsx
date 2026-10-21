import { useEffect, useState } from "react";

// Order mirrors the rendered page exactly (master spec hierarchy).
const items = [
  { id: "destaques", label: "Destaques" },
  { id: "colecoes", label: "Coleções" },
  { id: "vinhos", label: "Catálogo" },
  { id: "vinicolas", label: "Vinícolas" },
  { id: "servicos", label: "Serviços" },
  { id: "selecao", label: "Minha Seleção" },
  { id: "a-casa", label: "A Casa" },
  { id: "galeria", label: "Galeria" },
  { id: "avaliacoes", label: "Avaliações" },
  { id: "onde-estamos", label: "Onde Estamos" },
  { id: "duvidas", label: "Dúvidas" },
  { id: "portal", label: "Portal" },
  { id: "contato", label: "Contato" }
];

export default function ClientMenu() {
  const [active, setActive] = useState(items[0].id);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-46% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="client-menu" aria-label="Navegação da Casa do Vinho">
      <div className="client-menu__inner">
        <span className="client-menu__label">Casa do Vinho</span>
        {items.map((item) => (
          <a
            key={item.id}
            className={`menu-link${active === item.id ? " is-active" : ""}`}
            href={`#${item.id}`}
            aria-current={active === item.id ? "true" : undefined}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}