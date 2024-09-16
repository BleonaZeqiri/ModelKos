import React from "react";
import { FormattedMessage } from "react-intl";
import img from "../../../assets/ApplyNow/ApplyModel.png";
import ApplyNowText from "../../../assets/ApplyNow/ApplyNowText.svg";
import { Link } from "react-router-dom";
import "./styles/BecomeModel.scss";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";

const BecomeModel = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div className="apply-BecomeModel">
      <div className="left">
        <div className="text-item">
          <h1>
            <FormattedMessage id={translate[language].become_model_title} />
          </h1>
          <p className="text">
            <FormattedMessage id={translate[language].become_model_text} />
            <span>
              <FormattedMessage
                id="become_model_email"
                defaultMessage=" info@modelkos.com"
              />
            </span>
          </p>
        </div>
        <Link className="circleLink" to="/">
          <div className="circleText">
            <div
              className="circle"
              style={{ content: `url(${ApplyNowText})` }}
            ></div>
          </div>
        </Link>
      </div>
      <div className="right">
        <div className="img" style={{ content: `url(${img})` }}></div>
      </div>
    </div>
  );
};

export default BecomeModel;
