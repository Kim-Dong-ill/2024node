import React, {useEffect, useState} from "react";
import axios from "axios";
import "./assets/css/style.scss";

function App() {
  let [viewData, setViewData] = useState([]);
  let [num, setNum] = useState(1);
  let [load, setLoad] = useState(true);
  function dataInsert() {}

  useEffect(() => {
    //load true
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10")
      .then(function (res) {
        //console.log(res.data);
        //load false
        let inData = res.data;
        setViewData(inData);
      })
      .catch(function (error) {
        console.log("no data");
      });
    console.log("view");
  }, []);

  // useEffect(function(){},[])
  // useEffect(()=>{},[])
  console.log("잘읽어요" + num);
  return (
    <>
      {num}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        좋아요
      </button>

      {viewData.map((item) => {
        return (
          <>
            <div>{item.title}</div>
          </>
        );
      })}
    </>
  );
}

export default App;
