import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PathProvider } from "./hooks/usePath/PathProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PathProvider>
        <App />
      </PathProvider>
    </BrowserRouter>
  </React.StrictMode>
);
