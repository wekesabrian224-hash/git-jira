import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Projects from "./Pages/Project";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Projects />
  </StrictMode>,
);
