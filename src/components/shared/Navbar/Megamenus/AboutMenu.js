import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.scss";

import { AboutData } from "../data";

import image1 from "../../../../assets/AboutUs/Image2.png";

const AboutMenu = () => {
  return (
    <div className="nav-megamenu about-megamenu">
      <div className="menu-links">
        <div className="inner-links">
          {AboutData.map((item) => {
            return (
              <Link to={item.to} className="menu-main-link">
                <div className="main">
                  <div className="icon-container">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="block">
                    <ul>
                      {item?.link?.map((link) => {
                        return <li>{link.name}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="right">
        <div className="image-item">
          <div className="image">
            <div className="item-name">
              <h3>Modelkos</h3>
              <h3>2022</h3>
            </div>
            <img src={image1} alt="Other" className="left-image" />
          </div>
        </div>
        <button className="button">About us</button>
      </div>
    </div>
  );
};

export default AboutMenu;
