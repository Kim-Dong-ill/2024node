import React, { useState } from "react";
import "./App.css";

function App() {
  const [mView, setMView] = useState(false);
  const [num, setNum] = useState(0);
  function onClick(idx) {
    setNum(idx);
    setMView(true);
  }
  function modalClose() {
    setMView(false);
  }
  const viewList = [
    {
      title: "타이틀",
      content:
        "1Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit?",
    },
    {
      title: "타이틀",
      content:
        "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit?",
    },
    {
      title: "타이틀",
      content:
        "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit?",
    },
    {
      title: "타이틀",
      content:
        "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit?",
    },
    {
      title: "타이틀",
      content:
        "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, fugit?",
    },
  ];
  return (
    <>
      <div>
        <ul>
          {viewList.map((item, idx) => {
            return (
              <li
                className={`tab ${idx == num ? "active" : null}`}
                onClick={() => {
                  onClick(idx);
                }}
              >
                {idx + 1} {item.title}
              </li>
            );
          })}
        </ul>
      </div>

      {mView == true ? (
        <ModalView modalClose={modalClose} viewList={viewList} idx={num} />
      ) : null}
    </>
  );
}

function ModalView(props) {
  return (
    <div className="modalWrap">
      <div className="modal">
        <p onClick={props.modalClose}>닫기</p>
        <h2>{props.viewList[props.idx].title}</h2>
        <p>{props.viewList[props.idx].content}</p>
      </div>
    </div>
  );
}

export default App;
