import React from "react";
import { vData } from "./data";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";

import "./assets/css/style.scss";

function App() {
  return (
    <>
      <Header></Header>

      <Main vData={vData}></Main>

      <Footer></Footer>
    </>
  );
}

export default App;
