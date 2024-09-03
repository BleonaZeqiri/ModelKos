import React from "react";
import { Kosova_GirlsData, SharedTextData } from "../data";
import "./styles/Kosova_Girls.scss";
import { FormattedMessage } from "react-intl";
import StyledLink from "../../shared/StyledLink/StyledLink";

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
          <p>
            <FormattedMessage id="kosova-girls" defaultMessage="KosovaGirls " />
          </p>
        </div>
        <h1>{SharedTextData.title}</h1>
        <p className="text1">{SharedTextData.text}</p>

        <StyledLink
          to="/"
          link={
            <FormattedMessage id="find-model" defaultMessage="Learn More" />
          }
        />
      </div>
    </div>
  );
};

export default Kosova_Girls;
