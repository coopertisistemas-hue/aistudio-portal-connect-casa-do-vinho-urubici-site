import { useCallback, useState } from "react";
import "./chapter.css";
import "./panels.css";
import "./commerce.css";
import "./sections.css";
import PortalBar from "./components/PortalBar";
import Chapter from "./components/Chapter";
import ClientMenu from "./components/ClientMenu";
import FeaturedBottles from "./components/FeaturedBottles";
import CollectionsPanel from "./components/CollectionsPanel";
import CatalogPanel from "./components/CatalogPanel";
import WineriesPanel from "./components/WineriesPanel";
import ServicesPanel from "./components/ServicesPanel";
import SelectionPanel from "./components/SelectionPanel";
import StoryPanel from "./components/StoryPanel";
import GalleryPanel from "./components/GalleryPanel";
import ReviewsPanel from "./components/ReviewsPanel";
import LocationsPanel from "./components/LocationsPanel";
import FaqPanel from "./components/FaqPanel";
import PortalPanel from "./components/PortalPanel";
import ContactPanel from "./components/ContactPanel";
import SelectionDock from "./components/SelectionDock";
import { usePanelMotion } from "./hooks/usePanelMotion";
import type { Selection } from "./types";

export default function CasaDoVinhoUrubici() {
  usePanelMotion();
  const [selection, setSelection] = useState<Selection>({});

  const add = useCallback((id: string) => {
    setSelection((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  }, []);

  const remove = useCallback((id: string) => {
    setSelection((prev) => {
      const next = { ...prev };
      const qty = (next[id] || 0) - 1;
      if (qty > 0) next[id] = qty;
      else delete next[id];
      return next;
    });
  }, []);

  return (
    <div className="casa-root">
      <PortalBar />
      <Chapter />
      <ClientMenu />
      {/* Commercial hierarchy per master spec:
          hero → menu → featured bottles → collections → catalog → wineries →
          services → Minha Seleção → compact brand + gallery → reviews → map →
          FAQ → Portal integrations → contact */}
      <main>
        <FeaturedBottles selection={selection} onAdd={add} />
        <CollectionsPanel />
        <CatalogPanel selection={selection} onAdd={add} />
        <WineriesPanel />
        <ServicesPanel />
        <SelectionPanel selection={selection} onAdd={add} onRemove={remove} />
        <StoryPanel />
        <GalleryPanel />
        <ReviewsPanel />
        <LocationsPanel />
        <FaqPanel />
        <PortalPanel />
        <ContactPanel />
      </main>
      <SelectionDock selection={selection} />
    </div>
  );
}