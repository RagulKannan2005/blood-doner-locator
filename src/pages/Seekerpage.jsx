import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/cssfiles/Seekerpage.css";
import { Link } from "react-router-dom";

const Seekerpage = () => {
  return (
    <>
      <Navbar />
      <div className="seeker-page-container">
        <h1>Blood Seeker Portal</h1>
      </div>
    </>
  );
};

export default Seekerpage;
