import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(["1. 첫번째", "2. 두번째", "3. 세번째"]);
  const [tabNum, setTabNum] = useState(1);
  const [modalView, setModalView] = useState(false);
  const switchModalClick = () => {
    setModalView(!modalView);
  };

  return (
    <>
      <div className="tabWrap">
        <ul className="tabMenu">
          <li
            className={`${tabNum == 0 ? "active" : null}`}
            onClick={() => {
              setTabNum(0);
            }}
          >
            tab1
          </li>
          <li
            className={`${tabNum == 1 ? "active" : null}`}
            onClick={() => {
              setTabNum(1);
            }}
          >
            tab2
          </li>
          <li
            className={`${tabNum == 2 ? "active" : null}`}
            onClick={() => {
              setTabNum(2);
            }}
          >
            tab3
          </li>
        </ul>
      </div>
      <div>{list[tabNum]}</div>
      <button onClick={switchModalClick}>모달창</button>
      {modalView == true ? (
        <div className="modals">
          <h4>모달창</h4>
          <p>모달창 내용...</p>
        </div>
      ) : null}
    </>
  );
}

export default App;
