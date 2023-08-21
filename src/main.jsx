import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { StateContext } from "./context/StateContext";
import App from "./App.jsx";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <StateContext>
        <App />
      </StateContext>
    </AuthProvider>
  </BrowserRouter>
);
