import React from "react";
import ReactDOM from "react-dom/client";

import { UiProvider } from "./context/ui";
import MainPage from "./pages/MainPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UiProvider>
      <MainPage />
    </UiProvider>
  </React.StrictMode>
);
