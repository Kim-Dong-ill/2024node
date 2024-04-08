import React from "react";
import { NavLink } from "react-router-dom";

function Main({ vData }) {
  return (
    <div>
      <div className="visual d-flex">mainVisual</div>

      <div className="container">
        <ul className="proList">
          {vData.map((item, idx) => {
            return (
              <li>
                <NavLink to={`./pro/${item.id}`}>
                  <img src={`./images/${item.img}`} alt="" />
                  {item.title}
                </NavLink>
                {/* <a href={`./pro/${item.id}`}> */}
                {/* idx를 사용하지 않고 id를 사용하는것은 나중에 정렬을 했을때 순서가 바뀌거나
                  업데이트순으로 했을때도 순서가 바뀐다. */}
                {/* <img src={`./images/${item.img}`} alt="" /> */}
                {/* {item.title} */}
                {/* </a> */}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Main;
