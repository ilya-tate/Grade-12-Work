import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './styles/main.css'
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./util/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <App />
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
