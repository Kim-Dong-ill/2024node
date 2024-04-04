import React, { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("btn");
  const [onClickBtn, setOnClickBtn] = useState(false);

  const [test, setTest] = useState("test");
  function testChange(name) {
    if (onClickBtn == false) {
      setTest(name);
      setActive("btn active");
      setOnClickBtn(!onClickBtn);
    } else {
      setTest(name);
      setActive("btn");
      setOnClickBtn(!onClickBtn);
    }
  }
  console.log("ok");
  return (
    <div>
      <h1>{test}</h1>
      <button
        className={active}
        onClick={() => {
          testChange("홍길동");
        }}
      >
        클릭
      </button>
      <button
        className="btn"
        onClick={() => {
          testChange("이순신");
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
