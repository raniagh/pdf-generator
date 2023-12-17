import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/pdf/Home";
import "./colors.css";
import { PdfProvider } from "./context/PdfContext";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PdfProvider>
      <Home />
      <ToastContainer />
    </PdfProvider>
  </React.StrictMode>
);
