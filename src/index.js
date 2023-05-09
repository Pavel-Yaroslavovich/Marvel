import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, hashHistory } from "react-router-dom";
import { router } from "./router/router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <hashHistory>
    <RouterProvider router={router} />
  </hashHistory>
);
