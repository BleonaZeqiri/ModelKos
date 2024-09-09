import React from "react";
import "./styles/About.scss";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translate";

import { AboutUsData, AboutUsData2 } from "../data";
import image from "../../../assets/AboutUs-section/AboutUsText.svg";

const About = () => {
  const language = useSelector((state) => state.language.language);

  const carouselRef = React.useRef(null);

  const aboutUsData = AboutUsData(language);
  const aboutUsData2 = AboutUsData2(language);

  return (
    <div className="about-AboutUs">
      <div className="left">
        <h1>
          <FormattedMessage id={translate[language].about_title} />
        </h1>
        <p className="text">
          <FormattedMessage id={translate[language].about_text} />
        </p>
        <Link className="circleLink" to="/">
          <div className="circleText">
            <div className="circle" style={{ content: `url(${image})` }}></div>
          </div>
        </Link>
      </div>
      <div className="right">
        <Carousel itemsToShow={1} ref={carouselRef} disableArrowsOnEnd={false}>
          {aboutUsData.map((item, index) => (
            <div className="flex" key={index}>
              <div className="aboutCard about1">
                <div
                  to={aboutUsData[index].to}
                  className="img"
                  style={{
                    backgroundImage: `url(${aboutUsData[index].img})`,
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
              {aboutUsData2[index] && (
                <div className="aboutCard about2">
                  <div
                    to={aboutUsData2[index].to}
                    className="img"
                    style={{
                      backgroundImage: `url(${aboutUsData2[index].img})`,
                    }}
                  ></div>
                  <div className="model-item">
                    <h3>{aboutUsData2[index].name}</h3>
                    <div className="row">
                      {aboutUsData2[index].about.map((desc, idx) => (
                        <React.Fragment key={idx}>
                          <p className="def-text">{desc.name}</p>
                          {idx < aboutUsData2[index].about.length - 1 && (
                            <span className="dot"></span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <h3>{aboutUsData2[index].date}</h3>
                  </div>
                </div>
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
