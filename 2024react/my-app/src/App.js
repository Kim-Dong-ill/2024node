import "./App.css";

const a = "test입니다.";
const hancss = { color: "blue", backgroundColor: "black", fontSize: 100 };
function onMyClick() {
  console.log("ggg");
}

function App() {
  return (
    <div className="App">
      <h3 className="title" style={hancss}>
        {a}
      </h3>
      <button className="btn" onClick={onMyClick}>
        test
      </button>
      <div className="btn btn-primary">button</div>
      <div className="container">
        <div className="row">
          <div className="col">1</div>
          <div className="col">2</div>
          <div className="col">3</div>
        </div>
      </div>
    </div>
  );
}

export default App;
