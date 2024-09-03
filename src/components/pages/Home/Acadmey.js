import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { AcademyData } from "../data";
import "./styles/Academy.scss";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";

const Academy = () => {
  const carouselRef = useRef(null);

  return (
    <div className="home-academy">
      <div className="bg"></div>
      <div className="absolute">
        <h1>
          <FormattedMessage id="home-academy-text1" defaultMessage="Be" />
          <br />
          <FormattedMessage id="home-academy-text1" defaultMessage="a" />

          <br />
          <FormattedMessage id="home-academy-text1" defaultMessage="model" />
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
            <StyledLink
              to="/"
              link={
                <FormattedMessage
                  id="find-model"
                  defaultMessage="Join academy"
                />
              }
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Academy;
