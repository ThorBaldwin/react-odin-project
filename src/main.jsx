import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Navbar.jsx";
import "./index.css";
import "./Navbar.css";
import Hero from "./Hero.jsx";
import "./Hero.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>
);
