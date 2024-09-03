import React, { useState } from "react";
import "./styles/Banner.scss";
import { BannerData1 } from "../data";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { FaSortDown } from "react-icons/fa";
import image from "../../../assets/Banner/FemaleModelsInput.svg";
import image11 from "../../../assets/Banner/HireText1.svg";

const Banner = () => {
  const [isOpenModelDropdown, setIsOpenModelDropdown] = useState(false);
  const [isOpenLocationDropdown, setIsOpenLocationDropdown] = useState(false);

  const toggleModelDropdown = () => {
    setIsOpenModelDropdown(!isOpenModelDropdown);
  };

  const toggleLocationDropdown = () => {
    setIsOpenLocationDropdown(!isOpenLocationDropdown);
  };

  const handleSelectModel = (option) => {
    console.log(`Selected Model: ${option}`);
    setIsOpenModelDropdown(false);
  };

  const handleSelectLocation = (option) => {
    console.log(`Selected Location: ${option}`);
    setIsOpenLocationDropdown(false);
  };

  return (
    <div className="banner">
      <div
        className="bg"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></div>

      <div className="banner-content">
        <img className="image-banner" src={image11} alt="Hire text graphic" />
        <div className="left">
          <div className="text">
            <h1 className="big-title">
              <FormattedMessage
                id="home-banner-text"
                defaultMessage="Hire a model or"
              />
            </h1>
            <h1 className="big-title1">
              <FormattedMessage
                id="home-banner-text"
                defaultMessage="become one"
              />
            </h1>
          </div>
          <div className="row">
            <div className="input">
              <div className="icon">
                <img src={image} alt="Female models icon" />
              </div>
              <input type="text" placeholder="Female Models" />
              <div className="icon-down" onClick={toggleModelDropdown}>
                <FaSortDown />
              </div>
              {isOpenModelDropdown && (
                <div className="dropdown">
                  <ul>
                    <li onClick={() => handleSelectModel("Female Model")}>
                      <FormattedMessage
                        id="home-banner-title"
                        defaultMessage="Female"
                      />
                    </li>
                    <li onClick={() => handleSelectModel("Male Model")}>
                      <FormattedMessage
                        id="home-banner-title"
                        defaultMessage="Male Model"
                      />
                    </li>
                    <li onClick={() => handleSelectModel("Child Model")}>
                      <FormattedMessage
                        id="home-banner-title"
                        defaultMessage="Models"
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="input">
              <div className="icon">
                <SlLocationPin />
              </div>
              <input type="text" placeholder="Find location" />
              <div className="icon-down" onClick={toggleLocationDropdown}>
                <FaSortDown />
              </div>
              {isOpenLocationDropdown && (
                <div className="dropdown">
                  <ul>
                    <li onClick={() => handleSelectLocation("Kosovo")}>
                      <FormattedMessage
                        id="home-banner-title"
                        defaultMessage="Kosovo"
                      />
                    </li>
                    <li onClick={() => handleSelectLocation("Albania")}>
                      <FormattedMessage
                        id="home-banner-title"
                        defaultMessage="  Albania"
                      />
                    </li>
                    <li onClick={() => handleSelectLocation("Macedonia")}>
                      <FormattedMessage
                        id="home-banner-title"
                        defaultMessage="  Macedonia"
                      />
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button class="styledButton">
              <p>
                <FormattedMessage id="find-model" defaultMessage="Find model" />
              </p>
            </button>
          </div>
        </div>

        {BannerData1.map((item, index) => (
          <div className="right" key={index}>
            <Link to="/some-route" className="circleLink">
              <img src={item.image_1} alt="Interactive link icon" />
            </Link>
            <div className="img1">
              <div className="inner-img">
                <img src={item.image_2} alt="Banner detail 1" />
              </div>
            </div>
            <div className="img2">
              <div className="inner-img">
                <img src={item.image_3} alt="Banner detail 2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
