import React from "react";
import { Link } from "react-router-dom";
import "./styles/Marketing.scss";
import { FormattedMessage } from "react-intl";
import { ReactComponent as MarketingIcon } from "../../../assets/ModelsMarketing/ModelsMarektingText.svg";
import { MarketingData1, MarketingData3 } from "../data";
import image from "../../../assets/ModelsMarketing/Image2.png";
const Marketing = () => {
  return (
    <div className="home-marketing">
      <div className="left">
        <h1 className="marketing-title">
          <FormattedMessage
            id="home-modeling-title"
            defaultMessage="MODEL MARKETING"
          />
        </h1>
        <p className="marketing-text">
          <FormattedMessage
            id="home-modeling-title"
            defaultMessage=" With a network of over 200,000 active members, ModelKos is the top market place for models, photographers, and creative talents in fashion to look for work. Add your online modeling portfolio to ModelKos so that prospective clients can view and make direct bookings. Modeling profiles are completely customizable, allowing you to add your Instagram feed for potential clients to view. So far, thousands of members have been scouted by industry professionals fo both castings and work. Join our community to get started!"
          />
        </p>

        <div className="row">
          {MarketingData1.map((item, index) => (
            <div key={`stats-${index}`} className="item">
              <h1>{item.number}</h1>
              <p className="marketing-textt">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="image-item">
          <Link to="#" className="circleLink">
            <MarketingIcon />
          </Link>
          <div className="image">
            <img src={image} className="left-image" />
          </div>
        </div>
        <div className="tabs">
          {MarketingData3.map((item, index) => (
            <div key={`tab-${index}`} className="tab">
              {item.icon}
              <p className="marketing-textt">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketing;
