import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import "./navbar.scss";
import OurWork from "./Megamenus/Out-work";
import AboutMenu from "./Megamenus/AboutMenu";
import MobileNav from "../MobileNav/MobileNav";
import { TiArrowSortedDown } from "react-icons/ti";
import { translate } from "../../../translation/translate";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const language = useSelector((state) => state.language.language);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.pageYOffset;
      setIsSticky(scrollHeight > 25 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      id="navbar"
      className={clsx(
        `nav ${props.styles}`,
        isSticky ? "nav__sticky" : "",
        props.isColor && "logo-black"
      )}
    >
      <div className="left-side">
        <Link
          to="/"
          className="nav-logo"
          style={{ color: props.isColor ? "black" : "white" }}
        >
          <div className="logo-container"></div>
          <h1>MODELKOS</h1>
        </Link>
      </div>

      <div className="nav-links">
        <div className="nav-link support-link ">
          <Link
            to="/"
            className="inner-nav-link"
            style={{ color: props.isColor || isSticky ? "black" : "white" }}
          >
            <FormattedMessage id={translate[language].home} />
          </Link>
          <div className="line"></div>
        </div>
        <div className="nav-link services-link">
          <Link
            to="/"
            className="inner-nav-link"
            style={{ color: props.isColor || isSticky ? "black" : "white" }}
          >
            <FormattedMessage id={translate[language].our_work} />
            <TiArrowSortedDown className="arrow1" />
          </Link>
          <div className="line"></div>
          <OurWork />
        </div>

        <div className="nav-link portfolio-link">
          <Link
            to="/"
            className="inner-nav-link"
            style={{ color: props.isColor || isSticky ? "black" : "white" }}
          >
            <FormattedMessage id={translate[language].about} />
            <TiArrowSortedDown className="arrow1" />
          </Link>

          <div className="line"></div>
          <AboutMenu />
        </div>
        <div className="nav-link support-link">
          <Link
            to="/"
            className="inner-nav-link"
            style={{ color: props.isColor || isSticky ? "black" : "white" }}
          >
            <FormattedMessage id={translate[language].models} />
            <TiArrowSortedDown className="arrow1" />
          </Link>
          <div className="line"></div>
        </div>
        <div className=" nav-link home-link">
          <Link
            to="/"
            className="inner-nav-link"
            style={{ color: props.isColor || isSticky ? "black" : "white" }}
          >
            <FormattedMessage id={translate[language].academy} />
            <TiArrowSortedDown className="arrow1" />
          </Link>
          <div className="line"></div>
        </div>

        <div className=" support-link">
          <Link
            to="/"
            className="inner-nav-link"
            style={{ color: props.isColor || isSticky ? "black" : "white" }}
          >
            <FormattedMessage id={translate[language].blog} />
          </Link>
          <div className="line"></div>
        </div>
      </div>

      <div className="nav-auth">
        {/* <ThemeSwitcher /> */}
        <Link
          to="/apply"
          className="apply-now"
          style={{ color: props.isColor || isSticky ? "black" : "white" }}
        >
          <FormattedMessage id={translate[language].apply} />
        </Link>

        <Link
          to="/"
          className="contact-us"
          style={{
            background: props.isColor || isSticky ? "black" : "white",
            color: props.isColor || isSticky ? "white" : "black",
          }}
        >
          <FormattedMessage id={translate[language].contact} />
        </Link>
      </div>

      <MobileNav isColor={props.isColor} />
    </div>
  );
};

export default Navbar;
