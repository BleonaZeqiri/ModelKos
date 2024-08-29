import React from "react";
import Carousel from "react-elastic-carousel";
import "../Home/styles/What_people_say.scss";
import { What_people_sayData } from "../data.js";

const What_people_say = () => {
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

  return (
    <div className="home-what_people_say">
      <div className="text">
        <h1 className="big-title">What People Say</h1>
      </div>
      <div className="img">
        <div className="bg"></div>
        <div className="left">
          <h1>
            What
            <br />
            People
            <br />
            Say
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
              {What_people_sayData.map((item, index) => (
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
                    <img src={item.img} alt={`Image for ${item.title}`} />
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
