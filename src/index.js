import React from "react";
import ReactDOM from "react-dom/client";
import ShopContextProvider from "./context/ShopContent";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
