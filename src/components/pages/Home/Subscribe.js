import React from "react";
import { SubscribeData } from "../data";
import "./styles/Subscribe.scss";

const Subscribe = () => {
  return (
    <div className="home-subscribe">
      {SubscribeData.map((item, index) => (
        <React.Fragment key={index}>
          <h1 className="mid-title">{item.title}</h1>
          <p className="def-text">{item.text}</p>
          <div className="input">
            <div className="icon">{item.icon}</div>
            <input type="text" placeholder="Type email here" />
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
