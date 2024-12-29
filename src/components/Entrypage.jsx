import React from "react";
import "./Entrypage.css";

const Entrypage = () => {
  return (
    <div className="page-container">
      <h1>Welcome to Blood Doner Website</h1>
      <div className="slogen"><span>Share Life, Give Hope.</span></div>
      <div className="button-container">
        <button className="btn btn-seeker">Seeker</button>
        <button className="btn btn-doner">Doner</button>
        <button className="btn btn-testcenter">Test center</button>
      </div>
    </div>
  );
};

export default Entrypage;
