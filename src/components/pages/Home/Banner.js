import React from "react";
// import { FormattedMessage } from "react-intl";
import "./styles/Banner.scss";
// import { Link } from "react-router-dom";
// import StyledLink from "../../shared/StyledLink/StyledLink";
import image from "../../../assets/Footer/FooterTextt.svg";
import image1 from "../../../assets/HireModel/FemaleModelsInput.svg";
import image3 from "../../../assets/HireModel/down.svg";
import image4 from "../../../assets/HireModel/location.svg";
import image5 from "../../../assets/HireModel//HireText2.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div
        className="bg"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></div>

      <img className="image-banner" src={image5}></img>
      {/* <div className="left">
        <div className="text">
          <h1 className="big-title">Hire a model or </h1>
          <h1 className="big-title2">become one</h1>
        </div>
        <div className="row">
          <div className="input">
            <div className="icon">
              <img src={image1}></img>
            </div>
            <input type="text" placeholder="Female Models"></input>
            <div className="icon-down">
              <img src={image3}></img>
            </div>
          </div>
          <div className="input">
            <div className="icon">
              <img src={image4}></img>
            </div>
            <input type="text" placeholder="Find location"></input>
            <div className="icon-down">
              <img src={image3}></img>
            </div>
          </div>

          <button className="styledButton">
            <p>Find Model</p>
          </button>
        </div>
      </div>
      <div className="right"></div> */}
    </div>
  );
};
export default Banner;
