import { useCallback, useState } from "react";
import "./chapter.css";
import "./panels.css";
import "./commerce.css";
import "./sections.css";
import PortalBar from "./components/PortalBar";
import Chapter from "./components/Chapter";
import ClientMenu from "./components/ClientMenu";
import Manifesto from "./components/Manifesto";
import FeaturedBottles from "./components/FeaturedBottles";
import StoryPanel from "./components/StoryPanel";
import CollectionsPanel from "./components/CollectionsPanel";
import CatalogPanel from "./components/CatalogPanel";
import WineriesPanel from "./components/WineriesPanel";
import ServicesPanel from "./components/ServicesPanel";
import SelectionPanel from "./components/SelectionPanel";
import GalleryPanel from "./components/GalleryPanel";
import ReviewsPanel from "./components/ReviewsPanel";
import LocationsPanel from "./components/LocationsPanel";
import FaqPanel from "./components/FaqPanel";
import PortalPanel from "./components/PortalPanel";
import ContactPanel from "./components/ContactPanel";
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
      <main>
        <Manifesto />
        <FeaturedBottles selection={selection} onAdd={add} />
        <StoryPanel />
        <CollectionsPanel />
        <CatalogPanel selection={selection} onAdd={add} />
        <WineriesPanel />
        <ServicesPanel />
        <SelectionPanel selection={selection} onAdd={add} onRemove={remove} />
        <GalleryPanel />
        <ReviewsPanel />
        <LocationsPanel />
        <FaqPanel />
        <PortalPanel />
        <ContactPanel />
      </main>
    </div>
  );
}