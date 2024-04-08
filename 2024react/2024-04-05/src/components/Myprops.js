import React from "react";

function Myprops({ myData, product }) {
  // console.log(props);
  return (
    <>
      {/* <div className="wrap">
          Myprops
          <br />
          {props.mydata}
          이름 = {props.product[0].title}
          <br />
          가격 = {props.product[0].price}
          <br />
          <div className="imgWrap">
            이미지 = <img src={`./images/${props.product[0].img}`} alt="" />
          </div>
        </div> */}
      <div className="wrap">
        test
        {myData}
        <div className="imgWrap">
          <img src={`./images/${product[0].img}`} alt="" />
        </div>
      </div>
    </>
  );
}
export default Myprops;
