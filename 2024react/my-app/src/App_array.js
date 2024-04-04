import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState(["서울", "인천"]);
  function titleChange() {
    let newArray = [...title]; //배열은 대부분 깊은 복사로 사용
    newArray[0] = "경기";
    newArray[1] = "부산"; //배열 변경
    console.log(newArray);
    setTitle(newArray); //변경한 배열을 setTitle로 저장
  }
  function titlePush() {
    //배열 푸쉬
    let newArray = [...title];
    newArray.push("추가");
    setTitle(newArray);
    let text = "";
    for (let i = 0; i < title.length; i++) {
      console.log(title.length);
      text += `<li>${title[i]}</li>`;
    }
    console.log("text = " + text);
    document.querySelector(".listWrap").innerHTML = text;
  }
  function titleDelete() {
    //배열 삭제
    let newArray = [...title];

    // newArray.delete;
    setTitle(newArray.delete);
  }

  return (
    <div>
      <button onClick={titleChange} className="btn">
        클릭
      </button>
      <button onClick={titlePush} className="btn">
        추가
      </button>
      <button onClick={titleDelete} className="btn">
        전체삭제
      </button>
      <div>
        <ul className="listWrap">{/* <li>rudrl</li> */}</ul>
      </div>
    </div>
  );
}

export default App;
