import React from "react";
import { useSelector } from "react-redux";
import { Our_partnersData } from "./data";
import "./Our_partners.scss";
import { FormattedMessage } from "react-intl";
import StyledLink from "../StyledLink/StyledLink";
import { translate } from "../../../translation/translate";
const Our_partners = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div className="our_partners">
      <p className="def-text">
        <FormattedMessage id={translate[language].our_partners_title} />
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
          <FormattedMessage
            id={translate[language].our_partners_see_all_partners}
          />
        }
      />
    </div>
  );
};

export default Our_partners;
