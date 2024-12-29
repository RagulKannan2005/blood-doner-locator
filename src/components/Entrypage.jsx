import React from "react";
import "./Entrypage.css";

const Entrypage = () => {
  return (
    <div className="page-container">
      <div className="main-container">
        <h1>Welcome to Blood Doner Website</h1>
        <div className="slogen">
          <span>Share Life, Give Hope.</span>
        </div>
        <div className="button-container">
          <button className="btn ">Seeker</button>
          <button className="btn ">Doner</button>
          <button className="btn ">Test center</button>
        </div>
      </div>
    </div>
  );
};

export default Entrypage;
