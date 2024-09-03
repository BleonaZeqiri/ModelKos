import React from "react";
import "./styles/Our_partnerships.scss";
import { Link } from "react-router-dom";
import { Our_partnershipsData } from "../data";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";

const Our_partnerships = () => {
  return (
    <div className="home-partnerships">
      <div className="text">
        <h1 className="big-title">
          <FormattedMessage id="find-model" defaultMessage="Our Partnerships" />
        </h1>
      </div>
      <div className="flex">
        {Our_partnershipsData.map((item, index) => (
          <div className="sharedText" key={index}>
            <div className="logo">
              {item.icon}{" "}
              <span>
                <FormattedMessage id="find-model" defaultMessage="MediaKos" />
              </span>
            </div>
            <h1>{item.title}</h1>
            <p className="text1">{item.text}</p>

            <StyledLink
              to="/"
              link={
                <FormattedMessage
                  id="find-model"
                  defaultMessage="See all models"
                />
              }
            />
          </div>
        ))}
        <div className="right">
          {Our_partnershipsData.map((item, index) => (
            <img
              className="img"
              key={index}
              src={item.image}
              alt={`Partnership ${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our_partnerships;
