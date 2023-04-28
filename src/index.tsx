import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { element } from "./routes/AllRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux/es/exports";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { Store } from "./services/statemanagement/Store";

const queryQlient = new QueryClient();
let persitstore = persistStore(Store);

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider store={Store}>
        <PersistGate persistor={persitstore}>
          <QueryClientProvider client={queryQlient}>
            <RouterProvider router={element} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
