import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../components/cssfiles/home.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="carousel-container">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Slide+1"
              alt="Slide 1"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Slide+2"
              alt="Slide 2"
            />
          </div>
          <div>
            <img
              src="https://via.placeholder.com/800x400?text=Slide+3"
              alt="Slide 3"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
