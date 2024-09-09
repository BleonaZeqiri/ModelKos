import React, { useState, useEffect, useRef } from "react";
import Carousel from "react-elastic-carousel";
import "./styles/Benefits.scss";
import { BenefitsData } from "./data";
// import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translate";

const Benefits = () => {
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

  const benefitsData = BenefitsData(language);
  return (
    <div className="about-benefits">
      <div className="text">
        <h1 className="big-title">
          <FormattedMessage id={translate[language].benefits_title} />
        </h1>
      </div>
      <Carousel
        itemsToShow={itemsToShow}
        ref={carouselRef}
        disableArrowsOnEnd={false}
      >
        {benefitsData.map((item, index) => (
          <div key={index} className="Card">
            <div className="img">
              <div className="bg"></div>
            </div>
            <p className="def-text">{item.text}</p>
          </div>
        ))}
      </Carousel>

      <StyledLink
        to="/"
        link={<FormattedMessage id={translate[language].benefits_see_all} />}
      />
    </div>
  );
};

export default Benefits;
