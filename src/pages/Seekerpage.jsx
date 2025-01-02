import React from "react";
import Navbar from "../components/navbar/Navbar";
import "../components/cssfiles/Seekerpage.css"
import { Link, useNavigate } from "react-router-dom";
const Seekerpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <h1>Seekerpage</h1>
     
    </>
  );
};

export default Seekerpage;
