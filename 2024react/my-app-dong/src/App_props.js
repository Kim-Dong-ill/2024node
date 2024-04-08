import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(10);
  return (
    <>
      <div className="wrap">
        부모 컨테이너{num}
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          숫자 변경
        </button>
        <Child1 num1={num} />
      </div>
    </>
  );
}
function Child1(props) {
  // console.log(props); //오브젝트 형태로 num 이 저장됨
  return (
    <>
      <div className="wrap">
        자식1 컨테이너{props.num1}
        <Child2 num2={props.num1}></Child2>
        {/* 자식의 자식  컴포넌트인데 데이터를 부모에서 가져오는게 아니라 부모에서 가져온다 */}
      </div>
    </>
  );
}

function Child2(props) {
  console.log(props.num2); //오브젝트 형태로 num 이 저장됨
  return (
    <>
      <div className="wrap">자식2 컨테이너{props.num2}</div>
    </>
  );
}

export default App;
