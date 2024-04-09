import React from "react";

function Home(props) {
  const vData = props.vData;
  console.log(vData);
  return (
    <>
      <div className="container home">
        <div className="cardWrap">
          {vData.map((item) => {
            return (
              <a href={`/product/${item.id}`} className="card">
                <img src={`./images/${item.img}`} alt="" />
                <div className="title">{item.title}</div>
                <div className="content">{item.content}</div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
