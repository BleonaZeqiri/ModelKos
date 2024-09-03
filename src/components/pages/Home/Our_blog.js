import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import { FormattedMessage } from "react-intl";
import "./styles/Our_blog.scss";
import { Our_workData } from "../data";
import StyledLink from "../../shared/StyledLink/StyledLink";

const Our_blog = () => {
  const [itemsToShow, setItemsToShow] = useState(4);
  const carouselRef = useRef(null);

  const updateItemsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
      setItemsToShow(1);
    } else if (screenWidth <= 1000) {
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

  return (
    <div className="home-our_work">
      <div className="text">
        <h1 className="big-title">
          <FormattedMessage id="our-blog" defaultMessage="OUR BLOG " />
        </h1>

        <Carousel
          itemsToShow={itemsToShow}
          ref={carouselRef}
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
        <StyledLink
          to="/"
          link={
            <FormattedMessage id="find-model" defaultMessage="See all models" />
          }
        />
      </div>
    </div>
  );
};

export default Our_blog;
