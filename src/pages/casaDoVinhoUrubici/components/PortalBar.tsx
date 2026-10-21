import { casaConfig } from "@/mocks/casaDoVinho/config";

export default function PortalBar() {
  return (
    <header className="portal-bar">
      <div className="portal-bar__left">
        <a
          className="portal-bar__back"
          href={casaConfig.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-arrow-left-line" aria-hidden="true"></i>
          Portal Urubici
        </a>
        <span className="portal-bar__mark">Casa do Vinho Urubici</span>
      </div>
      <div className="portal-bar__right">
        <span className="portal-bar__brand">Serra Catarinense · SC</span>
        <a className="portal-bar__cta" href="#contato">
          <i className="ri-whatsapp-line" aria-hidden="true"></i>
          <span>Falar com a casa</span>
        </a>
      </div>
    </header>
  );
}