import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { AcademyData } from "../data";
import "./styles/Academy.scss";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";
const Academy = () => {
  const carouselRef = useRef(null);
  const language = useSelector((state) => state.language.language);
  const academyData = AcademyData(language);
  return (
    <div className="home-academy">
      <div className="bg"></div>
      <div className="absolute">
        <h1>
          <FormattedMessage id={translate[language].academy_title1} />
          <br />
          <FormattedMessage id={translate[language].academy_title2} />

          <br />
          <FormattedMessage id={translate[language].academy_title3} />
        </h1>
      </div>
      <Carousel
        itemsToShow={1}
        ref={carouselRef}
        className="absoluteSlider"
        disableArrowsOnEnd={false}
      >
        {academyData.map((item, index) => (
          <div key={index} class="academy-content" tabindex="0">
            {item.icon}
            <p class="def-txt">{item.text}</p>
            <StyledLink
              to="/"
              link={<FormattedMessage id={translate[language].academy_join} />}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Academy;
