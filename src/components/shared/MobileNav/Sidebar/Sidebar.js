import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import { MdBusinessCenter, MdKeyboardArrowDown } from "react-icons/md";
import { BiSliderAlt, BiSupport } from "react-icons/bi";
import { RiInformationFill, RiApps2Fill } from "react-icons/ri";
import { AboutData, Our_work1, AcademyData, models } from "../../Navbar/data";
import "../../Navbar/navbar.scss";

const Sidebar = (props) => {
  const [dropdowns, setDropdowns] = useState({
    list: false,
    list1: false,
    list2: false,
    list3: false,
  });

  const toggleDropdown = (dropdown) => {
    setDropdowns((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div className="mobile-sidebar">
      <div className="sidebar-logo-row">
        <Link to="/">
          <div className="mobile-logo-container"></div>
          <h1>modelkos</h1>
        </Link>
        <button onClick={props.click}>
          <CgClose />
        </button>
      </div>

      <div className="mobile-sidebar-links">
        <div className="nav-sidebar-link">
          <Link to="/Resources" className="nav-anchor">
            <MdBusinessCenter />
            <FormattedMessage id="Home" defaultMessage="Home" />
          </Link>
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("list")}
          >
            <Link to="/" className="nav-anchor">
              <BiSliderAlt />
              <FormattedMessage id="our-work" defaultMessage="Our-work" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list && (
            <div className="mobile-dropdown">
              {AcademyData.map((item) => (
                <div className="inner-links" key={item.title}>
                  <Link to={item.to}>{item.title}</Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("list1")}
          >
            <Link to="/" className="nav-anchor">
              <HiOutlineDocumentDuplicate />
              <FormattedMessage id="about" defaultMessage="About us" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list1 && (
            <div className="mobile-dropdown">
              {Our_work1.map((item) => (
                <div className="inner-links" key={item.title}>
                  <Link to={item.to}>{item.title}</Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("list2")}
          >
            <Link to="/" className="nav-anchor">
              <RiInformationFill />
              <FormattedMessage id="models" defaultMessage="Models" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list2 && (
            <div className="mobile-dropdown">
              {models.map((item) => (
                <div className="inner-links" key={item.name}>
                  <Link to={item.to}>{item.name}</Link>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("list3")}
          >
            <Link to="/AllServices" className="nav-anchor">
              <BiSupport />
              <FormattedMessage id="academy" defaultMessage="Academy" />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list3 && (
            <div className="mobile-dropdown">
              {AboutData.map((item) => (
                <div className="inner-links" key={item.title}>
                  <Link to={item.to}>{item.title}</Link>
                </div>
              ))}
            </div>
          )}
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
          <FormattedMessage id="apply" defaultMessage="Apply Now" />
        </Link>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Sidebar;
