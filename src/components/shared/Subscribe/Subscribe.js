import React from "react";
import { useSelector } from "react-redux";
import { SubscribeData } from "./data";
import "./Subscribe.scss";
import { translate } from "../../../translation/translate";

const Subscribe = () => {
  const language = useSelector((state) => state.language.language);
  const subscribeData = SubscribeData(language);
  const placeholderInput1 = `${translate[language].subscribe_input} `;

  return (
    <div className="subscribe">
      {subscribeData.map((item, index) => (
        <React.Fragment key={index}>
          <h1 className="mid-title">{item.title}</h1>
          <p className="def-text">{item.text}</p>
          <div className="input">
            <div className="icon">{item.icon}</div>
            <input type="text" placeholder={placeholderInput1} />
            <button className="blackButton">
              <p className="def-text">{item.button}</p>
            </button>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
export default Subscribe;
