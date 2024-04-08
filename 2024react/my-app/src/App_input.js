import React, { useEffect, useState } from "react";
import "./css/style.scss";

function App() {
  let [viewData, setViewData] = useState([]);
  let [textData, setTextData] = useState("");

  function clickListener() {
    let copy = [...viewData]; //배열 복사
    copy.push(textData); //작성한 입력값을 배열에 push
    // copy.unshift(textData); //작성값을 맨 앞에 넣는다.
    setViewData(copy); //push된 배열로 변경
    setTextData(""); //input value 지워줌
  }

  function textDataChange(e) {
    // console.log(e.target.value); //input의 value값을 onChange할때마다 실행
    setTextData(e.target.value);
  }

  function enter(e) {
    if (e.code == "Enter") {
      clickListener();
    }
  }

  // modal
  let [viewModal, setViewModal] = useState(false);
  let [index, setIndex] = useState("");
  function modalClose() {
    setViewModal(false);
  }
  function modalOpen(idx) {
    setIndex(idx);
    setViewModal(true);
  }

  useEffect(function () {}, []); //useEffect는 [] 안에 있는 배열이 변경되면 함수 실행

  return (
    <>
      <div>
        <label htmlFor="name"></label>
        <input
          type="text"
          id="name"
          onChange={textDataChange}
          value={textData}
          // onKeyDown={enter}
          onKeyPress={enter}
          placeholder="이름을 입력하세요"
        />

        <button onClick={clickListener}>입력</button>
      </div>

      <div className="todoWrap">
        <ul className="todoModal">
          {viewData.map((item, idx) => {
            return (
              <>
                <li
                  onClick={() => {
                    modalOpen(idx);
                  }}
                >
                  {idx + 1}. {item}
                </li>
              </>
            );
          })}
        </ul>
      </div>
      {viewModal == true ? (
        <ListModal modalClose={modalClose} viewData={viewData} idx={index} />
      ) : null}
    </>
  );
}

function ListModal(props) {
  console.log(props);
  return (
    <div className="listback">
      <div className="listModalWrap">
        <div onClick={props.modalClose}>닫기</div>
        <div>{props.viewData[props.idx]}</div>
      </div>
    </div>
  );
}

export default App;
