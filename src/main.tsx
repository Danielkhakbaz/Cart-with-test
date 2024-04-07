import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import axios from "axios";
import { Routes } from "src/routes";
import "src/styles/index.css";

axios.defaults.baseURL = "http://localhost:3000";

const router = createBrowserRouter(Routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
