import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Projects from "./Pages/Project";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Projects />
import About from "./Pages/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <About />
  </StrictMode>,
);
