import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import MainPage from "./Pages/MainPage";
import { UiProvider } from "./context/ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <UiProvider>
        <MainPage />
      </UiProvider>
    </Provider>
  </React.StrictMode>
);
