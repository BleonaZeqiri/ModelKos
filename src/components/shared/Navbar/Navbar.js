import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { FormattedMessage } from "react-intl";
import { BsTriangleFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./navbar.scss";

import PortfolioMenu from "./Megamenus/PortfolioMenu";
import ServicesMenu from "./Megamenus/ServicesMenu";
import AboutMenu from "./Megamenus/AboutMenu";

import MobileNav from "../MobileNav/MobileNav";
// import { AiOutlineMenu } from "react-icons/ai";
// import ThemeSwitcher from "../Footer/ThemeSwitcher";

const Navbar = (props) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // const nav = document.querySelector(".nav");
    // const navHeight = nav.scrollHeight;

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
      className={clsx(`nav ${props.styles}`, isSticky ? "nav__sticky" : "")}
    >
      <div className="left-side">
        <Link to="/" className="nav-logo">
          <div className="logo-container"></div>
          <h1>MODELKOS</h1>
        </Link>
      </div>

      <div className="nav-links">
        <div className="nav-link home-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="academy" defaultMessage="Home" />
          </Link>
          <div className="line"></div>
        </div>
        <div className=" services-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="services" defaultMessage="Our Work" />
            <MdKeyboardArrowDown className="arrow1" />
          </Link>
          <div className="megamenu-arrow">
            <BsTriangleFill />
          </div>
          <div className="line"></div>
          <ServicesMenu />
        </div>

        <div className="portfolio-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="portfolio" defaultMessage="About" />
            <MdKeyboardArrowDown className="arrow1" />
          </Link>
          <div className="megamenu-arrow">
            <BsTriangleFill />
          </div>
          <div className="line"></div>
          <PortfolioMenu />
        </div>
        {/* nav-link */}
        <div className=" support-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="about" defaultMessage="Models" />
            <MdKeyboardArrowDown className="arrow1" />
          </Link>
          <div className="megamenu-arrow">
            <BsTriangleFill />
          </div>
          <div className="line"></div>
          <AboutMenu />
        </div>
        <div className="  support-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="about" defaultMessage="Academy" />
            <MdKeyboardArrowDown className="arrow1" />
          </Link>
          <div className="megamenu-arrow">
            <BsTriangleFill />
          </div>
          <div className="line"></div>
          <AboutMenu />
        </div>

        <div className="nav-link support-link">
          <Link to="/" className="inner-nav-link">
            <FormattedMessage id="support" defaultMessage="Blog" />
          </Link>
          <div className="line"></div>
        </div>
      </div>

      <div className="nav-auth">
        {/* <ThemeSwitcher /> */}
        <p className="apply-now">Apply now</p>
        <Link to="/" className="contact-us">
          <FormattedMessage id="contact-us" defaultMessage="Contact Us" />
        </Link>
      </div>

      <MobileNav />
    </div>
  );
};

export default Navbar;
