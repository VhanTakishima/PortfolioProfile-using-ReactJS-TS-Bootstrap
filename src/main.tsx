import React from "react";
import ReactDOM from "react-dom/client";

import App from "./component/App.tsx";
import "bootstrap/dist/css/bootstrap.css";
//default theme
import "../node_modules/bootswatch/dist/flatly/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
