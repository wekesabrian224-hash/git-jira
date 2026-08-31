import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contacts from './Pages/Contacts.jsx'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Projects from "./Pages/Project";
import About from "./Pages/About";
import Contacts from "./Pages/Contacts";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Projects />
import About from "./Pages/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<Contacts />
    <About />
  </StrictMode>,
);
