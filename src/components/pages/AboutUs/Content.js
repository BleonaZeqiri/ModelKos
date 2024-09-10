import React from "react";
import image1 from "../../../assets/AboutUsPage/Content/model.png";
import image2 from "../../../assets/AboutUsPage/Content/model1.png";
import "./styles/Content.scss";

import { useSelector } from "react-redux";
import { translate } from "../../../translation/translate";
const Content = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div className="about-content">
      <div className="img" style={{ content: `url(${image1})` }}></div>
      <div className="content">
        <h3>
          <span>{translate[language].Content_title1}</span>
          {translate[language].Content_title2}
          <span>{translate[language].Content_title3}</span>
          <br />
          <span className="and">{translate[language].Content_title4}</span>
          {translate[language].Content_title5}

          <span>{translate[language].Content_title6}</span>
        </h3>
        <div className="image" style={{ content: `url(${image2})` }}></div>
      </div>
    </div>
  );
};

export default Content;
