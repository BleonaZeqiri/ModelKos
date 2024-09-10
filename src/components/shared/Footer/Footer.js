import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { FooterData, SocialMedia, FooterData1, FooterData2 } from "./data";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import "./footer.scss";
const Footer = (props) => {
  const language = useSelector((state) => state.language.language);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const footerData = FooterData(language);
  const footerData1 = FooterData1(language);
  const footerData2 = FooterData2(language);

  return (
    <div className="shared-footer">
      <div className="first-row">
        <h1>MODELING</h1>
        <div className="modeling"></div>
        <h1>MODELING</h1>
      </div>
      <div className="main-row">
        <div className="all-footer-links">
          {footerData.map((section, index) => (
            <div key={index} className="footer-list">
              <h6>{section.category}</h6>
              <div className="links">
                {section.links.map((link, idx) => (
                  <Link key={idx} to={link.to} className="footer-item">
                    {link.link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="first-col">
          <div className="top">
            {footerData1.map((section, index) => (
              <div key={index} className="section">
                <h1>{section.category}</h1>
                <div className="paragraph">
                  {section.find.map((item, idx) => (
                    <p key={idx}>{item.text}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="last-row">
        <div className="left">
          <Link to="/" className="footer-logo">
            <div className="logo"></div>
            <h3>MODELKOS</h3>
          </Link>
        </div>
        <div className="links">
          <p>
            <FormattedMessage id="footer-paragraph4" defaultMessage="©2022" />
          </p>
          <span className="span-footer"></span>
          <p>
            <FormattedMessage
              id="footer-paragraph5"
              defaultMessage="MODELKOS"
            />
          </p>
        </div>
        <div className="footer-row">
          {footerData2.map((item, index) => (
            <React.Fragment key={index}>
              <Link to={item.to}>
                <p>{item.link}</p>
              </Link>
              {item.span && index < footerData2.length - 1 && (
                <span>{item.span}</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="right">
          <div className="social">
            {SocialMedia.map((social, idx) => (
              <Link key={idx} to={social.to}>
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="phone">
            <p>
              <FormattedMessage
                id="footer-paragraph9"
                defaultMessage="+383 (44) 000 - 558"
              />
            </p>
          </div>
          <div className="flex">
            <SelectLanguage
              setLanguage={props.setLanguage}
              language={props.language}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
