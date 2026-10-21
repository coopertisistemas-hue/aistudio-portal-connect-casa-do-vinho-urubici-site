import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import CasaDoVinhoUrubici from "../pages/casaDoVinhoUrubici/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <CasaDoVinhoUrubici />,
  },
  {
    path: "/casa-do-vinho-urubici",
    element: <CasaDoVinhoUrubici />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;