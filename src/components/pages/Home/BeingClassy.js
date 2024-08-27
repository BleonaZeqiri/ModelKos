import React from "react";
import "./styles/BeingClassy.scss";
import { BeingClassyData } from "../data";
import { Link } from "react-router-dom";

const BeingClassy = () => {
  return (
    <div className="home-classy">
      {BeingClassyData.map((data, index) => (
        <React.Fragment key={index}>
          <div className="image1">
            <data.image1 />
          </div>
          <div className="text1">
            <div className="row row1">
              <h1 className="big-title">BEING CLASSY IS BENEFICIAL</h1>
            </div>
            <div className="row row2">
              <h1 className="big-title">BEING PROFESSIONAL IS INVALUABLE</h1>
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
