import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast"

import { Layout } from "./components";
import { StateContext } from "./context/StateContext";
import App from "./App.jsx";
import "./styles/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateContext>
      <Layout>
        <Toaster />
        <App />
      </Layout>
    </StateContext>
  </React.StrictMode>
);
