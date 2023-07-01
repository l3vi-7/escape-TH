import HomingCompassForm from "./Form";
import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

const App: React.FC = () => {
  return <HomingCompassForm />;
};

const root = createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
