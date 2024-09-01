import React from "react";
import { Link } from "react-router-dom";
import { Kosova_GirlsData, SharedTextData } from "../data";
import "./styles/Kosova_Girls.scss";

const Kosova_Girls = () => {
  return (
    <div className="home-ksgirls">
      <div className="left">
        {Kosova_GirlsData.map((item, index) => (
          <div
            key={index}
            className="ksgirlsCard"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg"></div>
            <a href="/">
              {item.title} {item.icon}
            </a>
          </div>
        ))}
      </div>
      <div className="sharedText">
        <div className="logo">
          {SharedTextData.icon}
          <p>KosovaGirls</p>
        </div>
        <h1>{SharedTextData.title}</h1>
        <p className="text1">{SharedTextData.text}</p>
        <div className="styledLink">
          <Link className="styledLink black" to={SharedTextData.to}>
            <p>Learn More</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Kosova_Girls;
