import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./App";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Resume />
    </React.StrictMode>
  );
}
