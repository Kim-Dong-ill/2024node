import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([
    "01 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, mollitia.",
    "02 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, mollitia.",
    "03Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, mollitia.",
  ]);

  return (
    <div>
      <div>
        <h1>tab menu</h1>
        <div>
          <ul>
            {data.map((item, idx) => {
              //map을 사용해서 새로운 배열을 만듬 배열 내용은 item
              return (
                <>
                  <li
                    className={`btn ${idx == num ? "active" : null}`} //idx와 num이 같으면 "active 붙임"
                    onClick={() => {
                      setNum(idx); //onclick 했을때만 해당idx를 num과 같에 한다.
                    }}
                  >
                    tab{idx + 1}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div>{data[num]}</div>
      </div>
    </div>

    // <div>
    //   <h1>tab menu</h1>
    //   <ul className="menu">
    //     {data.map((item, idx) => {
    //       return (
    //         <div>
    //           <li
    //             className={`${idx == num ? "active" : null}`} //onClick했을때만 idx와 num이 같게한다
    //             onClick={() => {
    //               setNum(idx);
    //             }}
    //           >
    //             tab{idx + 1}
    //           </li>
    //         </div>
    //       );
    //     })}
    //   </ul>
    //   <div>{data[num]}</div>
    // </div>
  ); //return
}

export default App;
