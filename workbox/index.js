"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
require("./index.css");
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const react_router_dom_1 = require("react-router-dom");
const react_query_1 = require("@tanstack/react-query");
const react_query_devtools_1 = require("@tanstack/react-query-devtools");
const exports_1 = require("react-redux/es/exports");
const redux_persist_1 = require("redux-persist");
const react_2 = require("redux-persist/integration/react");
const Store_1 = require("./services/statemanagement/Store");
const routes_1 = require("./routes");
const queryQlient = new react_query_1.QueryClient();
let persitstore = (0, redux_persist_1.persistStore)(Store_1.Store);
const client = new react_query_1.QueryClient();
const root = client_1.default.createRoot(document.getElementById("root"));
root.render(<react_1.default.StrictMode>

    <react_query_1.QueryClientProvider client={client}>
      <exports_1.Provider store={Store_1.Store}>
        <react_2.PersistGate persistor={persitstore}>
          <react_query_1.QueryClientProvider client={queryQlient}>
            <react_router_dom_1.RouterProvider router={routes_1.element}/>
            <react_query_devtools_1.ReactQueryDevtools />
          </react_query_1.QueryClientProvider>
        </react_2.PersistGate>
        </exports_1.Provider> 
      </react_query_1.QueryClientProvider>
  

  </react_1.default.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
