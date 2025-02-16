const mode = import.meta.env.MODE;
if (mode === "development" && typeof window !== "undefined") {
  const reactScan = import("react-scan");
  reactScan.then(({ scan }) =>
    scan({
      enabled: true,
    }),
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let root = document.getElementById("root")!;
if (!root) {
  root = document.createElement("div");
  root.id = "root";
  document.body.prepend(root);
}
root.classList.add("h-screen", "flex", "flex-col", "pb-12");

const queryClient = new QueryClient();

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
