import React from "react";
import { Our_partnersData } from "../data";
import "./styles/Our_partners.scss";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";

const Our_partners = () => {
  return (
    <div className="home-our_partners">
      <p className="def-text">
        <FormattedMessage
          id="home-partners-title"
          defaultMessage="OUR PARTNERS"
        />
      </p>
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
      <StyledLink
        to="/"
        link={
          <FormattedMessage id="find-model" defaultMessage="See all models" />
        }
      />
    </div>
  );
};

export default Our_partners;
