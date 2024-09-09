import React from "react";
import { FormattedMessage } from "react-intl";
// import { Link } from "react-router-dom";
import "./styles/History.scss";
import historyImage1 from "../../../assets/AboutUsPage/History/banner-5.png";
import historyImage2 from "../../../assets/AboutUsPage/History/banner-4.png";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";

const History = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div className="about-history">
      <div className="left">
        <h1>
          <FormattedMessage id={translate[language].history_title} />
        </h1>
        <div className="text">
          <p>
            <FormattedMessage
              id={translate[language].history_text1}
            ></FormattedMessage>
          </p>
          <p>
            <FormattedMessage
              id={translate[language].history_text2}
            ></FormattedMessage>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="img" style={{ content: `url(${historyImage1})` }}></div>

        <div className="img" style={{ content: `url(${historyImage2})` }}></div>
      </div>
    </div>
  );
};

export default History;
