import React from "react";
import { FormattedMessage } from "react-intl";
import { FooterData, SocialMedia } from "./data";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
// import ThemeSwitcher from "./ThemeSwitcher";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
import "./footer.scss";

const Footer = (props) => {
  // const [mode, setMode] = useState(() => localStorage.getItem("mode"));

  return (
    <div className="shared-footer">
      <div className="first-row">
        <h1>MODELING</h1>
        <div className="modeling"></div>
        <h1>MODELING</h1>
      </div>
      <div className="main-row">
        <div className="all-footer-links">
          {FooterData.map((props) => {
            return (
              <div className="footer-list">
                <h6>{props.category}</h6>
                <div className="links">
                  {props.links.map((l) => {
                    return (
                      <Link key={l.to} to={l.to} className="footer-item">
                        {l.link}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className="first-col">
          <div className="top">
            <Link to="/" className="logo-container">
              <h1>
                <FormattedMessage
                  id="modelkos-management"
                  defaultMessage="MODELS"
                />
              </h1>
            </Link>
            <div className="paragraph">
              <p>
                <FormattedMessage id="PHONE" defaultMessage="Women " />- 0207
                376 7764
              </p>
              <p>
                <FormattedMessage id="PHONE" defaultMessage="Men " />- 0207 376
                7764
              </p>
              <p>
                <FormattedMessage
                  id="EMAIL"
                  defaultMessage="bookamodel@modelkos.com "
                />
              </p>
            </div>
          </div>
          <div className="down">
            <Link to="/" className="logo-container">
              <h1>
                <FormattedMessage
                  id="modelkos-management"
                  defaultMessage="MODELKOS MANAGEMENT"
                />
              </h1>
            </Link>
            <div className="paragraph">
              <p>
                <FormattedMessage
                  id="footer-paragraph1"
                  defaultMessage="1st Floor"
                />
              </p>
              <p>
                <FormattedMessage
                  id="footer-paragraph1"
                  defaultMessage="5 Jubilee Place"
                />
              </p>
              <p>
                <FormattedMessage
                  id="footer-paragraph1"
                  defaultMessage="Prishtina, Kosovo"
                />
              </p>
            </div>
          </div>
          <div className="down-jobs">
            <h1>
              <FormattedMessage id="Email" defaultMessage="Jobs " />
            </h1>
            <div className="paragraph">
              <p>
                <FormattedMessage
                  id="EMAIL"
                  defaultMessage="jobs@modelkos.com "
                />
              </p>
            </div>
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
            <FormattedMessage id="footer-paragraph3" defaultMessage="©2022" />
          </p>
          <span className="span-footer"></span>
          <p>
            <FormattedMessage
              id="footer-paragraph5"
              defaultMessage=" MODELKOS "
            />
          </p>
        </div>
        <div className="footer-row">
          <p>
            <FormattedMessage
              id="footer-paragraph4"
              defaultMessage=" Privacy Statement "
            />
          </p>
          |
          <p>
            <FormattedMessage
              id="footer-paragraph5"
              defaultMessage=" 
              Terms of Service "
            />
          </p>
          |
          <p>
            <FormattedMessage
              id="footer-paragraph5"
              defaultMessage=" Help/FAQ "
            />
          </p>
        </div>
        <div className="right">
          <div className="social">
            {SocialMedia.map((props) => {
              return <Link to={props.to}>{props.icon}</Link>;
            })}
          </div>
          <div className="phone">
            <p>
              {/* <FaPhoneAlt /> */}
              <FormattedMessage
                id="footer-paragraph5"
                defaultMessage=" +383 (44) 000 - 558 "
              />
            </p>
          </div>
          <div className="flex">
            {/* <ThemeSwitcher /> */}

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
