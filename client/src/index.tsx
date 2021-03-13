import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Providers from "./shared/utils/providers/providers";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

ReactDOM.render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById("root")
);
