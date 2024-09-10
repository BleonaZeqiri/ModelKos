import React from "react";
import "./Our_partnerships.scss";
import { Our_partnershipsData } from "./data";
import { FormattedMessage } from "react-intl";
import StyledLink from "../StyledLink/StyledLink";
import { useSelector } from "react-redux";
import { translate } from "../../../translation/translate";

const Our_partnerships = () => {
  const language = useSelector((state) => state.language.language);
  const our_partnershipsData = Our_partnershipsData(language);
  return (
    <div className="our_partnerships">
      <div className="text">
        <h1 className="big-title">
          <FormattedMessage id={translate[language].Our_partnerships_title} />
        </h1>
      </div>
      <div className="flex">
        {our_partnershipsData.map((item, index) => (
          <div className="sharedText" key={index}>
            <div className="logo">
              {item.icon}{" "}
              <span>
                <FormattedMessage id="logo" defaultMessage="MediaKos" />
              </span>
            </div>
            <h1>{item.title}</h1>
            <p className="text1">{item.text}</p>

            <StyledLink
              to="/"
              link={
                <FormattedMessage
                  id={translate[language].Our_partnerships_learn}
                />
              }
            />
          </div>
        ))}
        <div className="right">
          {our_partnershipsData.map((item, index) => (
            <div
              className="img"
              style={{ content: `url(${item.image})` }}
              alt={`Partnership ${index}`}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Our_partnerships;
