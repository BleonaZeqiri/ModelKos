import React from "react";
import Carousel from "react-elastic-carousel";
import "../Home/styles/What_people_say.scss";
import { What_people_sayData } from "../data.js";
import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";

import { useSelector } from "react-redux";

const What_people_say = () => {
  const language = useSelector((state) => state.language.language); // Adjust if needed

  const itemsToShow = 1;
  const carouselRef = React.createRef();

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === "PREV" ? "❮" : "❯";
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={`rec rec-arrow ${
          type === "PREV" ? "rec-arrow-left" : "rec-arrow-right"
        }`}
        tabIndex="0"
        type="button"
      >
        {pointer}
      </button>
    );
  };
  const what_people_sayData = What_people_sayData(language);
  return (
    <div className="home-what_people_say">
      <div className="text">
        <h1 className="big-title">
          <FormattedMessage id={translate[language].What_people_say_title} />
        </h1>
      </div>
      <div className="img">
        <div className="bg"></div>
        <div className="left">
          <h1>
            <FormattedMessage id={translate[language].What_people_say_title1} />
            <br />
            <FormattedMessage id={translate[language].What_people_say_title2} />
            <br />
            <FormattedMessage id={translate[language].What_people_say_title3} />
          </h1>
        </div>
        <div className="right">
          <div className="carousel-container">
            <div className="carousel-controls">
              <myArrow
                type="PREV"
                onClick={() => carouselRef.current.goTo(0)}
              />
              <myArrow
                type="NEXT"
                onClick={() => carouselRef.current.goTo(1)}
              />
            </div>
            <Carousel
              itemsToShow={itemsToShow}
              ref={carouselRef}
              disableArrowsOnEnd={false}
              renderArrow={myArrow}
            >
              {what_people_sayData.map((item, index) => (
                <div className="peopleCard" key={index}>
                  <h1 className="mid-title">{item.title}</h1>
                  <p className="def-text">{item.text}</p>
                  <div className="dots-shadow"></div>
                  <div className="profile">
                    {item.profile.map((profileItem, profileIndex) => (
                      <div className="left-side" key={profileIndex}>
                        <h3>{profileItem.name}</h3>
                        <p className="def-text">{profileItem.profile}</p>
                        <div className="rating">
                          <p className="def-text">{profileItem.text}</p>
                          <div className="dots">
                            {[...Array(5)].map((_, dotIndex) => (
                              <span
                                key={dotIndex}
                                className={`dot ${
                                  dotIndex < 4 ? "filled" : "unfilled"
                                }`}
                              ></span>
                            ))}
                          </div>
                          <p className="def-text">(4.0)</p>
                        </div>
                      </div>
                    ))}
                    <div
                      className="image"
                      style={{ content: `url(${item.img})` }}
                      alt={`Image for ${item.title}`}
                    ></div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What_people_say;
