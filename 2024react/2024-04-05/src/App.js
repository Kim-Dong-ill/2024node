import React, { useEffect, useState } from "react";
import "./assets/style.scss";
import axois from "axios";

function App() {
  const [page, setPage] = useState(1);
  const [pagerCnt, setPagerCnt] = useState(4);
  const startPage = Math.floor((page - 1) / pagerCnt) * pagerCnt + 1;
  const endPage = startPage + pagerCnt - 1;
  const [listData, setListData] = useState([]);
  const [totalRecord, setTotalRecord] = useState(0);
  const [listCnt, setListCnt] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  useEffect(() => {
    axois
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${listCnt}`
      )
      .then((res) => {
        console.log(res.data);
        setTotalRecord(res.headers[`x-total-count`]);
        setListData(res.data);

        //totalPage
        let totalpage = Math.ceil(totalRecord / listCnt);
        setTotalPage(totalpage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  function clickPage(idx) {
    setPage(idx);
  }

  function preView() {
    if (page > 1) {
      setPage(page - 1);
    } else {
      alert("첫 페이지 입니다");
      setPage(startPage);
    }
  }

  function nextView() {
    if (page < endPage) {
      setPage(page + 1);
    } else {
      alert("마지막 페이지 입니다");
      setPage(endPage);
    }
  }

  function showPagenation() {
    let pageNum = [];
    for (let i = startPage; i <= endPage; i++) {
      pageNum.push(
        <li
          onClick={() => {
            clickPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pageNum;
  }
  return (
    <>
      <div>test</div>
      {listData.map((item, idx) => {
        return (
          <>
            <div>{item.name}</div>
            <br />
          </>
        );
      })}
      <span onClick={preView}>이전</span>
      <ul>{showPagenation()}</ul>
      <span onClick={nextView}>다음</span>
      <div>현재 페이지 = {page}</div>
    </>
  );
}

export default App;
