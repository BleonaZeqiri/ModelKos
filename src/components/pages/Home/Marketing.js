import React from "react";
import { Link } from "react-router-dom";
import "./styles/Marketing.scss";
import { FormattedMessage } from "react-intl";
import { ReactComponent as MarketingIcon } from "../../../assets/ModelsMarketing/ModelsMarektingText.svg";
import { MarketingData1, MarketingData3 } from "./data";
import image from "../../../assets/ModelsMarketing/Image2.png";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translate";

const Marketing = () => {
  const language = useSelector((state) => state.language.language);
  const marketingData1 = MarketingData1(language);
  const marketingData3 = MarketingData3(language);

  return (
    <div className="home-marketing">
      <div className="left">
        <h1 className="marketing-title">
          <FormattedMessage id={translate[language].marketing_title1} />
        </h1>
        <p className="marketing-text">
          <FormattedMessage id={translate[language].marketing_title2} />
        </p>

        <div className="row">
          {marketingData1.map((item, index) => (
            <div key={`stats-${index}`} className="item">
              <h1>{item.number}</h1>
              <p className="marketing-textt content">{item.name}</p>
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
            <div
              className="left-image"
              style={{ content: `url(${image})` }}
            ></div>
          </div>
        </div>
        <div className="tabs">
          {marketingData3.map((item, index) => (
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
