import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";

import "./styles/Our_blog.scss";
import { Our_workData } from "../data";

const Our_blog = () => {
  const [itemsToShow, setItemsToShow] = useState(4);
  const carouselRef = useRef(null);

  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 550) {
      setItemsToShow(1);
    } else if (screenWidth <= 850) {
      setItemsToShow(2);
    } else {
      setItemsToShow(3);
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
    <div className="home-our_work">
      <div className="text">
        <h1 className="big-title">OUR BLOG</h1>

        <Carousel
          itemsToShow={itemsToShow}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
        >
          {Our_workData.map((item, index) => (
            <div className="blogCard" key={index}>
              <div
                className="img"
                style={{ content: `url(${item.image})` }}
              ></div>
              <p className="def-text">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="def-text text2">{item.text}</p>
              <div className="styledLink">
                <Link className="styledLink unstyled" to="/">
                  <p>{item.link}</p>
                  <div className="icon">{item.icon}</div>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
        <div class="styledLink">
          <a class="styledLink black" href="/">
            <p>Read all blog</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Our_blog;
