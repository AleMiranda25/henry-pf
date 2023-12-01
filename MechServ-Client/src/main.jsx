// Funcionalidad
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { domain, clientId } from "../auth0Config.json";

// Styles
import "./index.css";

//* URL POR DEFECTO
axios.defaults.baseURL = "https://mechserv-pf.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
        cacheLocation="localstorage"
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </Provider>
);
