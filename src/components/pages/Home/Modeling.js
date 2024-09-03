import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import "./styles/Modeling.scss";
import image from "../../../assets/Modeling/DayOfModelingText.svg";
import { ModelingData } from "../data";
import { FormattedMessage } from "react-intl";

const Modeling = () => {
  const carouselRef = useRef(null);

  return (
    <div className="home-modeling">
      <div className="text1">
        <h1 className="title1 outside-background">
          <FormattedMessage
            id="home-modeling-title"
            defaultMessage="THE DAY OF"
          />
        </h1>
        <h1 className="title2 outside-background">
          <FormattedMessage
            id="home-modeling-title"
            defaultMessage="modeling"
          />
        </h1>
      </div>

      <Carousel
        itemsToShow={1}
        ref={carouselRef}
        className="absoluteSlider"
        disableArrowsOnEnd={false}
      >
        {ModelingData.map((item, index) => (
          <div className="flex" key={index}>
            <div
              className="img img1"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div
              className="img img2"
              style={{ backgroundImage: `url(${item.image1})` }}
            ></div>
            <Link to="/your-route" className="circleLink">
              <div className="circleText">
                <img src={image} alt="Modeling text" />
              </div>
            </Link>
          </div>
        ))}
      </Carousel>

      <h1 className="white white1">
        <FormattedMessage
          id="home-modeling-title1"
          defaultMessage="THE DAY OF"
        />
      </h1>
      <h1 className="white white2">
        <FormattedMessage id="home-modeling-title2" defaultMessage="modeling" />
      </h1>
      <h1 className="white white3">
        <FormattedMessage id="home-modeling-title3" defaultMessage="modelkos" />
      </h1>
    </div>
  );
};

export default Modeling;
