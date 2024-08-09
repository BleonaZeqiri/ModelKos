import React from "react";
// import { FormattedMessage } from "react-intl";
import "./styles/Banner.scss";
// import { Link } from "react-router-dom";
// import StyledLink from "../../shared/StyledLink/StyledLink";
import image from "../../../assets/Footer/FooterTextt.svg";
const Banner = () => {
  return (
    <div className="banner">
      <div
        className="bg"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></div>
      <img className="image-banner" src={image}></img>
      <div className="left">
        <div className="text">
          <h1 className="big-title">Hire a model or </h1>
          <h1 className="big-title2">become one</h1>
        </div>
        <div className="row">
          <div className="input"></div>
          <div className="input"></div>

          <button className="styledButton">
            <p>shhs</p>
          </button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};
export default Banner;
