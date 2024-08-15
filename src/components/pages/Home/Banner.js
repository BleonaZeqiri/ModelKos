import React, { useState } from "react";
import "./styles/Banner.scss";
import { FaSortDown } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BannerData } from "../data";
import { Link } from "react-router-dom";
import image from "../../../assets/Banner/FemaleModelsInput.svg";
import image1 from "../../../assets/Banner/Text.svg";
import image2 from "../../../assets/Banner/HireText1.svg";
import image3 from "../../../assets/Banner/Imag1.png";
import image4 from "../../../assets/Banner/Image2.png";

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
        <img className="image-banner" src={image2} alt="Banner" />
        {BannerData.map((item, index) => (
          <div key={index} className="left">
            <div className="text">
              <h1 className="big-title">{item.text1}</h1>
              <h1 className="big-title1">{item.text2}</h1>
            </div>
            <div className="row">
              <div className="input">
                <div className="icon">
                  <img src={image} alt="Input Icon" />
                </div>
                <input type="text" placeholder="Female Models" />
                <div className="icon-down" onClick={toggleModelDropdown}>
                  <FaSortDown />
                </div>
                {isOpenModelDropdown && (
                  <div className="dropdown">
                    <ul>
                      <li onClick={() => handleSelectModel("Female Model")}>
                        Female Model
                      </li>
                      <li onClick={() => handleSelectModel("Male Model")}>
                        Male Model
                      </li>
                      <li onClick={() => handleSelectModel("Child Model")}>
                        Females Model
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
                      <li onClick={() => handleSelectLocation("New York")}>
                        Kosovo
                      </li>
                      <li onClick={() => handleSelectLocation("Los Angeles")}>
                        Albania
                      </li>
                      <li onClick={() => handleSelectLocation("Chicago")}>
                        Macedonia
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              <button className="styledButton">
                <p>{item.button_text}</p>
              </button>
            </div>
          </div>
        ))}

        <div className="right">
          <Link to="/some-route" className="circleLink">
            <img src={image1} alt="Link Icon" />
          </Link>
          <div className="img1">
            <div className="inner-img">
              <img src={image3} alt="Image 1" />
            </div>
          </div>
          <div className="img2">
            <div className="inner-img">
              <img src={image4} alt="Image 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
