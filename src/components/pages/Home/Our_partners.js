import React from "react";
import { Our_partnersData } from "../data";
import "./styles/Our_partners.scss";

const Our_partners = () => {
  return (
    <div className="home-our_partners">
      <p className="def-text">OUR PARTNERS</p>
      <div className="logos-partner">
        <div className="inner-logos">
          {Our_partnersData.map((partner, index) => (
            <div key={index} className="logo-container">
              <div
                className="logo"
                style={{ backgroundImage: `url(${partner.logo})` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div class="styledLink">
        <a class="styledLink black" href="/">
          <p>See all partners</p>
        </a>
      </div>
    </div>
  );
};

export default Our_partners;
