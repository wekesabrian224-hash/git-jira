import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contacts from './Pages/Contacts.jsx'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import About from "./Pages/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
<Contacts />
    <About />
  </StrictMode>,
);
