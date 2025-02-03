import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const mode = import.meta.env.MODE;

if (mode === "development") {
  const scan = document.createElement("script");
  scan.src = "https://unpkg.com/react-scan/dist/auto.global.js";
  scan.fetchPriority = "high";

  // Wait for the document to be fully loaded
  document.head.appendChild(scan);
}

let root = document.getElementById("root")!;
if (!root) {
  root = document.createElement("div");
  root.id = "root";
  document.body.prepend(root);
}
root.classList.add("h-screen", "flex", "flex-col", "pb-12");

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
