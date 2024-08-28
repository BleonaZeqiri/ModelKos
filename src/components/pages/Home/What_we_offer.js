import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import "../Home/styles/What_we_offer.scss";
import { What_we_offerData } from "../data";
import { Link } from "react-router-dom";

const What_we_offer = () => {
  const [itemsToShow, setItemsToShow] = useState(4);
  const carouselRef = useRef(null);

  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 550) {
      setItemsToShow(1);
    } else if (screenWidth <= 850) {
      setItemsToShow(2);
    } else if (screenWidth <= 1020) {
      setItemsToShow(3);
    } else {
      setItemsToShow(4);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const onPrevStart = () => {};
  const onNextStart = () => {};

  return (
    <div className="home-what_we_offer">
      <div className="text">
        <h1 className="big-title">What we offer</h1>
      </div>
      <Carousel
        itemsToShow={itemsToShow}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
      >
        {What_we_offerData.map((item, index) => (
          <div key={index} className="Card">
            <div className="img">
              <div className="bg"></div>
              <h1>Training</h1>
            </div>
            <div className="icon">{item.icon}</div>
            <h3>{item.course}</h3>
            <p className="def-text">{item.text}</p>
            <div className="styledLink">
              <Link className="styledLink unstyled" to={item.button.to}>
                <p>{item.button.text}</p>
                <div className="icon">{item.button.icon}</div>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="styledLink">
        <a className="styledLink black" href="/">
          <p>See all</p>
        </a>
      </div>
    </div>
  );
};

export default What_we_offer;
