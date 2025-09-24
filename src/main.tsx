import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { RouterPath } from "./routes";
import "./i18n";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastContainer position="top-right"></ToastContainer>
    <RouterProvider router={RouterPath}></RouterProvider>
  </StrictMode>
);
