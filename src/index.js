import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { Home } from "./components/Home";
import { Detail } from "./components/Detail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/detail/:imdbId" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);
