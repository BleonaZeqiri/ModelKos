import React from "react";
import { Our_partnersData } from "../data";
import "./styles/Our_partners.scss";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";
const Our_partners = () => {
  const language = useSelector((state) => state.language.language);

  return (
    <div className="home-our_partners">
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
