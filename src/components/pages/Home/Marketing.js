import React from "react";
import { Link } from "react-router-dom";
import "./styles/Marketing.scss";
import {
  MarketingData,
  MarketingData1,
  MarketingData2,
  MarketingData3,
} from "../data";

const Marketing = () => {
  return (
    <div className="home-marketing">
      <div className="left">
        {MarketingData.map((item, index) => (
          <React.Fragment key={`marketing-${index}`}>
            <h1 className="marketing-title">{item.title}</h1>
            <p className="marketing-text">{item.description}</p>
          </React.Fragment>
        ))}

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
        {MarketingData2.map((item, index) => (
          <React.Fragment key={`marketing-images-${index}`}>
            <Link to="#" className="circleLink">
              {item.icon}
            </Link>
            <div className="images">
              <div
                className="img img1"
                style={{ backgroundImage: `url(${item.img1})` }}
              >
                <div className="inner-img"></div>
              </div>
              <div
                className="img img2"
                style={{ backgroundImage: `url(${item.img2})` }}
              >
                <div className="inner-img"></div>
              </div>
            </div>
          </React.Fragment>
        ))}

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
