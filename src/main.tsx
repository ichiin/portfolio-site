import React from "react";
import ReactDOM from "react-dom/client";
import "@/utils";
import App from "./containers/App/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
