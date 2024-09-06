import React from "react";

import "./styles/BeingClassy.scss";
import { BeingClassyData } from "../data";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translate";

const BeingClassy = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div className="home-classy">
      {BeingClassyData.map((data, index) => (
        <React.Fragment key={index}>
          <div className="image1">
            <data.image1 />
          </div>
          <div className="text1">
            <div className="row row1">
              <h1 className="big-title">
                <FormattedMessage id={translate[language].beingClassy_title1} />
              </h1>
            </div>
            <div className="row row2">
              <h1 className="big-title">
                <FormattedMessage id={translate[language].beingClassy_title2} />
              </h1>
            </div>
          </div>
          <Link to="/" className="circleLink">
            <div className="circleText">
              <data.image2 />
            </div>
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BeingClassy;
