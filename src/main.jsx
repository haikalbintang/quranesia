import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ReadQuran from "./pages/ReadQuran/index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReadQuran />
  </StrictMode>
);
