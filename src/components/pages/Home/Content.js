import React from "react";
import { ContentData } from "./data";
import "../Home/styles/Content.scss";
import { useSelector } from "react-redux";

const Content = () => {
  const language = useSelector((state) => state.language.language);
  const contentData = ContentData(language);

  return (
    <>
      {contentData.map((item, index) => (
        <div key={index} className="home-content">
          <div
            className="top-line"
            style={{ content: `url(${item.image2})` }}
          ></div>

          <div
            className="image-logo"
            style={{ content: `url(${item.image})` }}
          ></div>

          <div className="text">
            <div
              className="img"
              style={{ content: `url(${item.image1})` }}
            ></div>
            <p className="def-text">{item.text}</p>
          </div>
          <div className="line">
            <div
              className="bottom-line"
              style={{ content: `url(${item.image3})` }}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
