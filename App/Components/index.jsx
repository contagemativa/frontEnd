import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom"; // Use HashRouter para GitHub Pages ou BrowserRouter se estiver usando um servidor com suporte a roteamento HTML5
import App from "./App";
import "../../public/css/output.css";
import "react-toastify/dist/ReactToastify.css";
import ToastMediaQuery from "./Common/Toast/ToastMediaQuery";

const root = createRoot(document.getElementById("program-container"));
root.render(
  <>
    <Router basename="/public">
      <App />
      <ToastMediaQuery />
    </Router>
  </>
);
