import React from "react";
import "./styles/About.scss";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { FormattedMessage } from "react-intl";

import { AboutUsData, AboutUsData2 } from "../data";
import image from "../../../assets/AboutUs-section/AboutUsText.svg";
const About = () => {
  const carouselRef = React.useRef(null);

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(carouselRef.current.props.itemsToShow - 1);
    }
  };

  return (
    <div className="home-about">
      <div className="left">
        <h1>
          <FormattedMessage id="home-about-title" defaultMessage="ABOUT US" />
        </h1>
        <p className="text">
          <FormattedMessage
            id="home-about-text"
            defaultMessage="ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent."
          />
        </p>
      </div>
      <div className="right">
        <Carousel
          itemsToShow={1}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
        >
          {AboutUsData.map((item, index) => (
            <div className="flex" key={index}>
              <div className="aboutCard about1">
                <div
                  to={AboutUsData[index].to}
                  className="img"
                  style={{
                    backgroundImage: `url(${AboutUsData[index].img})`,
                  }}
                ></div>
                <div className="model-item">
                  <h3>{item.name}</h3>
                  <div className="row">
                    {item.about.map((desc, idx) => (
                      <React.Fragment key={idx}>
                        <p className="def-text">{desc.name}</p>
                        {idx < item.about.length - 1 && (
                          <span className="dot"></span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                  <h3>{item.date}</h3>
                </div>
              </div>
              {AboutUsData2[index] && (
                <div className="aboutCard about2">
                  <div
                    to={AboutUsData2[index].to}
                    className="img"
                    style={{
                      backgroundImage: `url(${AboutUsData2[index].img})`,
                    }}
                  ></div>
                  <div className="model-item">
                    <h3>{AboutUsData2[index].name}</h3>
                    <div className="row">
                      {AboutUsData2[index].about.map((desc, idx) => (
                        <React.Fragment key={idx}>
                          <p className="def-text">{desc.name}</p>
                          {idx < AboutUsData2[index].about.length - 1 && (
                            <span className="dot"></span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <h3>{AboutUsData2[index].date}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>

        <Link className="circleLink">
          <div className="circleText">
            <img src={image} alt="About Us" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
