import React, { useState } from "react";

import "./styles/Banner.scss";
import { BannerData1 } from "./data";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { FaSortDown } from "react-icons/fa";
import image from "../../../assets/Banner/FemaleModelsInput.svg";
import image11 from "../../../assets/Banner/HireText1.svg";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";
const Banner = () => {
  const language = useSelector((state) => state.language.language);
  const [isOpenModelDropdown, setIsOpenModelDropdown] = useState(false);
  const [isOpenLocationDropdown, setIsOpenLocationDropdown] = useState(false);
  const placeholderText = `${translate[language].banner_dropdown_find_location} `;
  const placeholderText1 = `${translate[language].banner_dropdown_find_Female_models} `;
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
              <FormattedMessage id={translate[language].banner_text} />
            </h1>
            <h1 className="big-title1">
              <FormattedMessage id={translate[language].banner_text1} />
            </h1>
          </div>
          <div className="row">
            <div className="input">
              <div className="icon">
                <div className="img" style={{ content: `url(${image})` }}></div>
              </div>
              <input type="text" placeholder={placeholderText1} />
              <div className="icon-down" onClick={toggleModelDropdown}>
                <FaSortDown />
              </div>
              {isOpenModelDropdown && (
                <div className="dropdown">
                  <ul>
                    <Link>
                      <li onClick={() => handleSelectModel("Female Model")}>
                        <FormattedMessage
                          id={translate[language].banner_dropdown_female}
                        />
                      </li>
                    </Link>
                    <Link>
                      <li onClick={() => handleSelectModel("Male Model")}>
                        <FormattedMessage
                          id={translate[language].banner_dropdown_male}
                        />
                      </li>
                    </Link>
                    <Link>
                      <li onClick={() => handleSelectModel("Models")}>
                        <FormattedMessage
                          id={translate[language].banner_dropdown_models}
                        />
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>

            <div className="input">
              <div className="icon">
                <SlLocationPin />
              </div>
              <input type="text" placeholder={placeholderText} />
              <div className="icon-down" onClick={toggleLocationDropdown}>
                <FaSortDown />
              </div>
              {isOpenLocationDropdown && (
                <div className="dropdown">
                  <ul>
                    <Link>
                      <li onClick={() => handleSelectLocation("Kosovo")}>
                        <FormattedMessage
                          id={translate[language].banner_dropdown_Kosovo}
                        />
                      </li>
                    </Link>
                    <Link>
                      <li onClick={() => handleSelectLocation("Albania")}>
                        <FormattedMessage
                          id={translate[language].banner_dropdown_Albania}
                        />
                      </li>
                    </Link>
                    <Link>
                      <li onClick={() => handleSelectLocation("Macedonia")}>
                        <FormattedMessage
                          id={translate[language].banner_dropdown_Macedonia}
                        />
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>

            <button class="styledButton">
              <Link>
                <p>
                  <FormattedMessage
                    id={translate[language].banner_dropdown_find}
                  />
                </p>
              </Link>
            </button>
          </div>
        </div>

        {BannerData1.map((item, index) => (
          <div className="right" key={index}>
            <Link to="/some-route" className="circleLink">
              <div
                className="icon"
                style={{ content: `url(${item.image_1})` }}
              ></div>
            </Link>
            <div className="img1">
              <div className="inner-img">
                <div
                  className="img-img1"
                  style={{ content: `url(${item.image_2})` }}
                ></div>
              </div>
            </div>
            <div className="img2">
              <div className="inner-img">
                <div
                  className="img-img2"
                  style={{ content: `url(${item.image_3})` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
