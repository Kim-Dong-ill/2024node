import React, {useEffect, useState} from "react";
import "./assets/css/style.scss";

function App() {
  const [num, setNum] = useState(1);
  const [inpData, setInpData] = useState("");
  const [myData, setMyData] = useState("");

  console.log("자료변경");
  useEffect(() => {
    console.log("이펙트");
    
  }, [myData]);

  useEffect(() => {
    console.log("이펙트");
  }, [num]);

  function inpChange(e) {
    console.log(e.target.value);
    setInpData(e.target.value);
  }
  function sendData() {
    setMyData(inpData);
  }
  return (
    <>
      {num} / {inpData}
      <div>
        <button
          onClick={() => {
            setNum(2);
          }}
        >
          클릭
        </button>
        <div>
          <input type="text" onChange={inpChange} value={inpData} />
          <button onClick={sendData}>자료전송</button>
          <br />
          자료전송내용 : {myData}
        </div>
      </div>
    </>
  );
}

export default App;
