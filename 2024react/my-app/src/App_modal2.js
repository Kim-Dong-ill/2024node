import React, { useState } from "react";
import "./App.css";
import ModalView from "./components/ModalView";

function App() {
  let [mView, setMView] = useState(false);
  let viewList = [
    {
      title: " 안녕하세요!!",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, alias",
    },
    {
      title: " 만2나서 반갑습니다.",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, alias",
    },
    {
      title: " 만3나서 반갑습니다.",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, alias",
    },
    {
      title: " 만4나서 반갑습니다.",
      content:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, alias",
    },
    {
      title: " 만5나서 반갑습니다.",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, alias",
    },
  ];

  let [vNum, setVNum] = useState(0);

  function modalView(idx) {
    setMView(true);
    setVNum(idx);
  }

  function modalClose() {
    setMView(false);
  }

  return (
    <>
      <div>
        <ul>
          {viewList.map((item, idx) => {
            return (
              <li
                onClick={() => {
                  modalView(idx);
                }}
              >
                {idx + 1}. {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      {mView == true ? (
        <ModalView onClick={modalClose} viewListdata={viewList} vNum={vNum} />
      ) : null}
    </>
  );
}

export default App;
