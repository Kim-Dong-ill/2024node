import React from "react";
import "./assets/css/style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Company from "./components/Company";
import Product from "./components/Product";
import Community from "./components/Community";
import { vData } from "./data";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main vData={vData} />} />
        <Route path="/com" element={<Company />} />
        <Route path="/pro/:item" element={<Product vData={vData} />} />
        <Route path="/comm" element={<Community />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
