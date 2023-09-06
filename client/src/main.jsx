import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthboolProvider from "./context/authbool.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthboolProvider>
      <React.StrictMode>
        <Auth0Provider
          domain="dev-ix81e3m50q1pszi3.us.auth0.com"
          clientId="FL37wJXl9bwlSPMBrvQIIrO9cvkrrS9B"
          authorizationParams={{
            redirect_uri: window.location.origin,
          }}
        >
          <App />
        </Auth0Provider>
      </React.StrictMode>
    </AuthboolProvider>
  </Provider>
);
