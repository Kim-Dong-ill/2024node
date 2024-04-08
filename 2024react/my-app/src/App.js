import React, { useEffect, useState } from "react";
import "./css/style.scss";
import axios from "axios";

function App() {
  let [viewData, setViewData] = useState([]);
  let [num, setNum] = useState(0);

  function numLoding() {
    setNum(num + 1);
    setLodingView(true);
  }

  let [modalView, setModalView] = useState(false);
  let [lodingView, setLodingView] = useState(false);
  let [idx, setIdx] = useState(0);
  function modalClosed() {
    setModalView(false);
  }
  function modalOpen(num) {
    setModalView(true);
    setIdx(num);
  }

  useEffect(
    function () {
      axios
        .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
        .then(function (res) {
          // <Loding />;
          console.log(res.data);
          setViewData(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      console.log("numchange");
    },
    [num]
  ); //useEffect는 [] 안에 있는 배열이 변경되면 함수 실행

  return (
    <div>
      {num}
      <button onClick={numLoding}>좋아요</button>
      {viewData.map((item, idx) => {
        return (
          <>
            <li
              onClick={() => {
                modalOpen(idx);
              }}
            >
              {item.id}. {item.title}
            </li>
          </>
        );
      })}
      {/* 모달 */}
      {modalView == true ? (
        <BasicModal modalClosed={modalClosed} viewData={viewData} idx={idx} />
      ) : null}

      {/* 로딩 */}
      {/* <Loding></Loding> */}
    </div>
  );
}

function BasicModal(props) {
  return (
    <>
      <div className="axiosModalWrap">
        <div className="axiosModal">
          <div className="modalClose" onClick={props.modalClosed}>
            닫기
          </div>
          <div className="modalTitle">
            {props.idx + 1}title = {props.viewData[props.idx].title}
          </div>
          <div className="modalBody">{props.viewData[props.idx].body}</div>
        </div>
      </div>
    </>
  );
}

function Loding() {
  return (
    <>
      <div className="lodingWrap">
        <div className="lodingModal">로딩중...</div>
      </div>
    </>
  );
}

export default App;
