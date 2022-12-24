import React from "react";
import ReactDOM from "react-dom/client";
import { ExampleDashboard } from "./ExampleDashboard";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExampleDashboard />
  </React.StrictMode>
);
