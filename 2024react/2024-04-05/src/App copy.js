import React, { useEffect, useState } from "react";
import "./assets/style.scss";
import axios from "axios";
// import Myprops from "./components/Myprops";

function App() {
  const [viewData, setViewData] = useState([]);

  //pagenation
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [listCnt, setListCnt] = useState(10);

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${listCnt}`
      )
      .then((res) => {
        // console.log(res);
        // setViewData(res.data);

        // console.log(res.headers.x-total-count); // - 를 빼기로 알고있어서 오류남
        console.log(res.headers["x-total-count"]); // [0] 에서 0번째가 아니라 x-total-count번째를 걍 적어서 가져옴
        let totalRecord = res.headers["x-total-count"]; //전체 레코드 수를 변수 이름 맞춰서 저장하기
        let totalPage = Math.ceil(totalRecord / listCnt); //totalPage 계산
        setTotalPage(totalPage); //totalPage 저장
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage]);

  const pageNumber = () => {
    const pagerCnt = 5;
    let startPage = Math.floor((currentPage - 1) / pagerCnt) * pagerCnt + 1;
    let endPage = startPage + pagerCnt - 1;

    console.log("startPage =" + startPage);
    console.log("endPage =" + endPage);

    let number = "";
    for (let i = startPage; i <= endPage; i++) {
      number += `<li>${i}</li>`;
    }

    return number;
  };

  return (
    <>
      현재 페이지{currentPage} / 전체 페이지{totalPage} / 한 페이지당 보여줄
      리스트{listCnt}
      <div>
        {viewData.map((item) => {
          return (
            <>
              <div>{item.title}</div>
            </>
          );
        })}
      </div>
      <div className="pagenation">
        <div>이전</div>
        <ul className="page">{pageNumber()}</ul>
        <div>다음</div>
      </div>
    </>
  );
}

export default App;
