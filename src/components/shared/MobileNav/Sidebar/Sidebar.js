import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdBusinessCenter, MdKeyboardArrowDown } from "react-icons/md";
import { BiSliderAlt, BiSupport } from "react-icons/bi";
import { RiInformationFill, RiApps2Fill } from "react-icons/ri";
import { AboutData, Our_work1, AcademyData } from "../../Navbar/data";
import "../../Navbar/navbar.scss";

const Sidebar = (props) => {
  const [list, showList] = useState(false);
  const [list2, showList2] = useState(false);
  const [list3, showList3] = useState(false);
  function show() {
    showList(!list);
  }
  function show2() {
    showList2(!list2);
  }
  function show3() {
    showList3(!list3);
  }

  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="mobile-logo-container"></div>
          <h1>modelkos</h1>
        </Link>
        <button onClick={props.click}>
          <CgClose />{" "}
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show}>
            <Link to="/" className="nav-anchor">
              <BiSliderAlt />
              <FormattedMessage id="services" defaultMessage="Services" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list === true && (
            <div className="mobile-dopdown">
              {AcademyData.map((props) => {
                return (
                  <div className="inner-links">
                    <Link to={props.to}>{props.title}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show3}>
            <Link to="/" className="nav-anchor">
              <HiOutlineDocumentDuplicate />
              <FormattedMessage id="portfolio" defaultMessage="Portfolio" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list3 === true && (
            <div className="mobile-dopdown">
              <div className="inner-links">
                {Our_work1.map((props) => {
                  return (
                    <div className="inner-links">
                      <Link to={props.to}>{props.title}</Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="nav-sidebar-link">
          <Link to="/Resources" className="nav-anchor">
            <MdBusinessCenter />
            <FormattedMessage id="academy" defaultMessage="Academy" />
          </Link>
        </div>

        <div className="sidebar-dropdown">
          <div className="nav-sidebar-link" onClick={show2}>
            <Link to="/AllServices" className="nav-anchor">
              <RiInformationFill />
              <FormattedMessage id="about" defaultMessage="About" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {list2 === true && (
            <div className="mobile-dopdown">
              {AboutData.map((props) => {
                return (
                  <div className="inner-links">
                    <Link to={props.to}>{props.title}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <BiSupport />
            <FormattedMessage id="support" defaultMessage="Support" />
          </Link>
        </div>
        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <RiApps2Fill />
            <FormattedMessage id="blog" defaultMessage="Blog" />
          </Link>
        </div>
      </div>

      <div className="sidebar-auth">
        <Link to="/" className="contact-us">
          <FormattedMessage id="contact-us" defaultMessage="Contact Us" />
        </Link>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Sidebar;
