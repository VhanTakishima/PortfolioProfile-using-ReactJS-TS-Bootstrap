import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Nav from "./component/Nav.tsx";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    <App />
  </React.StrictMode>
);
