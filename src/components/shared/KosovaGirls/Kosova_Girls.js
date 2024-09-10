import React from "react";
import { Kosova_GirlsData, SharedTextData } from "./data";
import "./Kosova_Girls.scss";
import { FormattedMessage } from "react-intl";
import StyledLink from "../StyledLink/StyledLink";
import { Link } from "react-router-dom";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";

const Kosova_Girls = () => {
  const language = useSelector((state) => state.language.language);
  const kosova_GirlsData = Kosova_GirlsData(language);
  const sharedTextData = SharedTextData(language);
  const { icon, title, text } = sharedTextData[0];
  return (
    <div className="ksgirls">
      <div className="left">
        {kosova_GirlsData.map((item, index) => (
          <div
            key={index}
            className="ksgirlsCard"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="bg"></div>
            <Link href="/">
              {item.title} {item.icon}
            </Link>
          </div>
        ))}
      </div>

      <div className="sharedText">
        <div className="logo">
          {icon}
          <p>
            <FormattedMessage id="kosova-girls" defaultMessage="KosovaGirls " />
          </p>
        </div>
        <h1>{title}</h1>
        <p className="text1">{text}</p>

        <StyledLink
          to="/"
          link={<FormattedMessage id={translate[language].ks_learn_more} />}
        />
      </div>
    </div>
  );
};

export default Kosova_Girls;
