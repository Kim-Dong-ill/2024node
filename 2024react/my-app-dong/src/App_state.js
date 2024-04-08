import { useState } from "react";
import "./App.css";

function App() {
  const text = "tstestest";
  const styleText = { fontSize: "2rem", color: "red" };
  const btnClick = function () {
    alert("a");
  };

  const [title, setTitle] = useState(["seoul", "busan", "daegu"]);

  const changeData = () => {
    const newArray = [...title];
    newArray[0] = "inchon";
    setTitle(newArray);
  };

  const [num, setNum] = useState(0); //num을 선언할때 useState의 값으로 선언하고 setNum만든다
  const changeNum = () => {
    setNum(1);
  };
  const originNum = () => {
    setNum(0);
  };

  const [myNum, setMyNum] = useState(0);
  const like = () => {
    setMyNum(myNum + 1);
  };
  return (
    <>
      {num}
      <div className="text" style={styleText}>
        {title}
        <button onClick={changeData}>클릭</button>
      </div>

      <button onClick={changeNum}>클릭Num</button>
      <button onClick={originNum}>원래값</button>

      <div>
        {title[0]}{" "}
        <span onClick={like} style={{ cursor: "pointer" }}>
          ❤
        </span>
        {myNum}
      </div>
    </>
  );
}

export default App;
