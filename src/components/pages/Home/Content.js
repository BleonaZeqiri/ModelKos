import React from "react";
import { ContentData } from "../data";
import "../Home/styles/Content.scss";

const Content = () => {
  return (
    <>
      {ContentData.map((item, index) => (
        <div key={index} className="home-content">
          <img src={item.image2} className="top-line"></img>

          <img src={item.image} alt="Content Image" className="image-logo" />

          <div className="text">
            <img src={item.image1} alt="Content Image 1" />
            <p className="def-text">{item.text}</p>
          </div>
          <div className="line">
            <img src={item.image3} className="bottom-line"></img>
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
