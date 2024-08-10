import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { AcademyData } from "../data";
import "./megamenu.scss";
import StyledLink from "../../StyledLink/StyledLink";

const Academy = () => {
  return (
    <div className="nav-megamenu services-megamenu">
      <div className="menu-links">
        <h5>
          <FormattedMessage id="services" defaultMessage="Academy" />
        </h5>
        <div className="inner-links">
          {AcademyData.map((props) => {
            return (
              <Link to={props.to} className="menu-main-link">
                <div className="bg" style={{ background: `${props.bg}` }}></div>
                <div className="main">
                  <div className="icon-container">
                    <div
                      className="icon"
                      style={{ content: `url(${props.icon})` }}
                    ></div>
                  </div>
                  <div className="block">
                    <h6>{props.title}</h6>
                    <p>{props.text}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="right">
        <div className="logo"></div>
        <h6>
          <FormattedMessage
            id="we-can-shape-your-vision"
            defaultMessage="Fashion models"
          />
        </h6>
        <p>
          <FormattedMessage
            id="services-right-text"
            defaultMessage="Fashion models represent brands and designers by wearing their clothing and accessories in photo shoots, commercials, and runway shows."
          />
        </p>
        <div className="link">
          <StyledLink
            to="/"
            link={
              <FormattedMessage
                id="view-all-services"
                defaultMessage="View More"
              />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Academy;
