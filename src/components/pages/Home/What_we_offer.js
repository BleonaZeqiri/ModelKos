import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import "../Home/styles/What_we_offer.scss";
import { What_we_offerData } from "./data";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translate";

const What_we_offer = () => {
  const language = useSelector((state) => state.language.language);

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
  const what_we_offerData = What_we_offerData(language);
  return (
    <div className="home-what_we_offer">
      <div className="text">
        <h1 className="big-title">
          <FormattedMessage id={translate[language].what_we_offer_title} />
        </h1>
      </div>
      <Carousel
        itemsToShow={itemsToShow}
        ref={carouselRef}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
      >
        {what_we_offerData.map((item, index) => (
          <div key={index} className="Card">
            <div className="img">
              <div className="bg"></div>
              <h1>{item.course}</h1>
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

      <StyledLink
        to="/"
        link={
          <FormattedMessage id={translate[language].what_we_offer_see_all} />
        }
      />
    </div>
  );
};

export default What_we_offer;
