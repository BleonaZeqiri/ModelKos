import React from "react";
import { Link } from "react-router-dom";
import "./megamenu.scss";
import { useSelector } from "react-redux";
import { AboutData, AboutData1 } from "../data";

const AboutMenu = () => {
  const language = useSelector((state) => state.language.language);
  const aboutData1 = AboutData1(language);
  const aboutData = AboutData(language);

  return (
    <div className="nav-megamenu about-megamenu">
      <div className="menu-links">
        <div className="inner-links">
          {aboutData.map((item) => (
            <div className="main" key={item.section}>
              <div className="icon-container">
                <h3>{item.title}</h3>
              </div>
              <div className="block">
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index}>
                      <Link to={link.to} className="menu-main-link">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {aboutData1.map((item, index) => (
        <div className="right" key={index}>
          <div className="image-item">
            <div className="image">
              <div className="item-name">
                <h3>{item.title}</h3>
                <h3>{item.year}</h3>
              </div>
              <img src={item.image} alt={item.title} className="left-image" />
            </div>
          </div>
          <Link to={item.button.to}>
            <button className="button">{item.button.text}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AboutMenu;
