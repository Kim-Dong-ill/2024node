import React from "react";
import { useParams } from "react-router-dom";

function Product(props) {
  const { id } = useParams();
  let myData = props.vData.find(function (v) {
    return v.id == id;
  });
  console.log(myData);
  return (
    <div className="product container">
      <div className="card">
        <div className="img">
          <img src={`../images/${myData.img}`} alt="" />
        </div>
        <div className="title">{myData.title}</div>
        <div className="contnet">{myData.content}</div>
      </div>
    </div>
  );
}

export default Product;
