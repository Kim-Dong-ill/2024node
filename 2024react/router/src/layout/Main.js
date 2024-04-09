import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Company from "../components/Company";
import Community from "../components/Community";
import Product from "../components/Product";

function Main({ vData }) {
  return (
    <div>
      <div className="container mainVisual">메인 슬라이더 (안변함)</div>
      <Routes>
        <Route path="/" element={<Home vData={vData}></Home>} />
        <Route path="/company" element={<Company></Company>} />
        <Route
          path="/product/:id"
          element={<Product vData={vData}></Product>}
        />
        <Route path="/community" element={<Community></Community>} />
      </Routes>
    </div>
  );
}

export default Main;
