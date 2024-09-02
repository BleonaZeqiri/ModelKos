import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { AcademyData } from "../data";
import "./styles/Academy.scss";

const Academy = () => {
  const carouselRef = useRef(null);

  return (
    <div className="home-academy">
      <div className="bg"></div>
      <div className="absolute">
        <h1>
          Be
          <br />
          a
          <br />
          model
        </h1>
      </div>
      <Carousel
        itemsToShow={1}
        ref={carouselRef}
        className="absoluteSlider"
        disableArrowsOnEnd={false}
      >
        {AcademyData.map((item, index) => (
          <div key={index} class="academy-content" tabindex="0">
            {item.icon}
            <p class="def-txt">{item.text}</p>
            <div className="styledLink">
              <a className="styledLink white" href={item.link.to}>
                <p>{item.link.send}</p>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Academy;
