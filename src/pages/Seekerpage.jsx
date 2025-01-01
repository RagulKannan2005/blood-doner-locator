import React from "react";
import Navbar from "../components/navbar/Navbar";
import '../components/cssfiles/seekerpage.css'
import { Link } from "react-router-dom";


const Seekerpage = () => {
  return (
    <>
      <Navbar />
      <div className="need-btn">
        <button >Need Blood</button>
      </div>
      <h2>Seeker page</h2>
    </>
  );
};

export default Seekerpage;
