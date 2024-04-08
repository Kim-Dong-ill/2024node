import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import "./assets/css/style.scss";

function App() {
  return (
    <>
      <div className="container">
        <h1>Logo</h1>
        <ul className="menu">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/company">회사소개</NavLink>
          </li>
          <li>
            <NavLink to="/product">제품소개</NavLink>
          </li>
          <li>
            <NavLink to="/community">게시판</NavLink>
          </li>
        </ul>
      </div>
      <div className="section">
        <Routes>
          <Route path="/" element={<div>메인</div>} />
          <Route path="/company" element={<div>회사소개</div>} />
          <Route path="/product" element={<div>제품소개</div>} />
          <Route path="/community" element={<div>게시판</div>} />
        </Routes>
      </div>
      <div className="footer">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          odit!
        </div>
      </div>
    </>
  );
}

export default App;
