import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import "../../public/css/output.css";
import "react-toastify/dist/ReactToastify.css";
import ToastMediaQuery from "./Common/Toast/ToastMediaQuery"; 

const root = createRoot(document.getElementById("program-container"));
root.render(
  <>
    <Router>
      <App />
      <ToastMediaQuery />
    </Router>
  </>
);
