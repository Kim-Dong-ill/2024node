import React from "react";

function ModalView(props) {
  console.log(props);
  return (
    <>
      <div className="modalWrap">
        <div className="modal">
          <div onClick={props.onClick} className="modalClose">
            {/* modal창에 x 누르면 onclick함수 실행하면서 위에서 가져온 {modalClose}기능 실행 */}
            X
          </div>
          <div className="modalBody">
            <h3>{props.viewListdata[props.vNum].title}</h3>
            <p>{props.viewListdata[props.vNum].content}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalView;
