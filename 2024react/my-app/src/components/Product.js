import React from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  const { item } = useParams();

  let myData = props.vData.find(function (x) {
    return x.id == item; //vData에서 find하고 x에 데이터 저장,x의id와 url의 param(item)이 같은것을 저장
  });
  console.log(myData);
  return (
    <>
      <div className="subVisual">product</div>
      <div className="container subPro">
        <h3>{myData.title}</h3>
        <hr />
        <div className="content">
          <img src={`../images/${myData.img}`} alt="" />
          <p>{myData.content}</p>
        </div>
      </div>
      ;
    </>
  );
}

export default Product;
