import React, { useEffect, useState } from "react";
import "./css/style.scss";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import Header from "./layout/header";
import Main from "./layout/Main";
import Footer from "./layout/footer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
