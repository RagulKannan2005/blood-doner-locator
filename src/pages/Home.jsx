import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles

const Home = () => {
  return (
    <>
      <Navbar />

      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+1"
            alt="Slide 1"
          />
          <p className="legend">Caption for Slide 1</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+2"
            alt="Slide 2"
          />
          <p className="legend">Caption for Slide 2</p>
        </div>
        <div>
          <img
            src="https://via.placeholder.com/800x400?text=Slide+3"
            alt="Slide 3"
          />
          <p className="legend">Caption for Slide 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default Home;
