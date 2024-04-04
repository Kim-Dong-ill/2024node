import React, { useState } from "react";
import "./App.css";

function App() {
  let [mView, setMView] = useState(false);
  function modalView() {
    setMView(true);
  }
  function modalClose() {
    setMView(false);
  }
  return (
    <>
      <div>
        <button className="btn" onClick={modalView}>
          모달창 열기
        </button>
      </div>
      {mView == true ? <Modal onClick={modalClose} /> : null}
      {/* Modal컴포넌트에 onclick이란 변수에 닫기 기능인 함수를 실어 보낸다. */}
    </>
  );
}

function Modal(props) {
  console.log(props);
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          <div onClick={props.onClick} className="modalClose">
            {/* modal창에 x 누르면 onclick함수 실행하면서 위에서 가져온 {modalClose}기능 실행 */}
            X
          </div>
          모달창
        </div>
      </div>
    </>
  );
}

export default App;
