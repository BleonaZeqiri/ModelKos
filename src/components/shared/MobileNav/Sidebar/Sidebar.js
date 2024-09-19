import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { translate } from "../../../../translation/translate";

import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import {
  MdBusinessCenter,
  MdKeyboardArrowDown,
  MdOutlineLanguage,
} from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { SiThemodelsresource, SiHtmlacademy } from "react-icons/si";
import { RiApps2Fill, RiContactsFill } from "react-icons/ri";
import { AboutData, Our_work1 } from "../../Navbar/data";
import "../../Navbar/navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import england from "../../../../assets/flags/uk.svg";
import albania from "../../../../assets/flags/albania.svg";
import { dataLocalStorage } from "../../../../../src/components/shared/SelectLanguage/dataLocalStorage";
import { chooseLanguage } from "../../../../store/actions/languageAction";
const Sidebar = (props) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);
  const aboutData = AboutData(language);

  const our_work1 = Our_work1(language);

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
  const languages = [
    { value: "en-GB", lang: "English", flag: england },
    { value: "sq-AL", lang: "Albanian", flag: albania },
  ];
  const handleLanguageChange = (language, locale) => {
    dispatch(chooseLanguage(locale));
    dataLocalStorage.setLanguage(language);
    dataLocalStorage.setLocale(locale);
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
            <FaHome />
            <FormattedMessage id={translate[language].home} />
          </Link>
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("list")}
          >
            <Link to="/" className="nav-anchor">
              <MdBusinessCenter />
              <FormattedMessage id={translate[language].our_work} />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list && (
            <div className="mobile-dropdown">
              {our_work1.map((item) => (
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
              <FormattedMessage id={translate[language].about} />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list1 && (
            <div className="mobile-dropdown">
              {aboutData?.map((item) => {
                return (
                  <div className="inner-links">
                    <Link to={item.to}>{item.title}</Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("list2")}
          >
            <Link to="/" className="nav-anchor">
              <SiThemodelsresource />
              <FormattedMessage id={translate[language].models} />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list2 && <div className="mobile-dropdown"></div>}
        </div>

        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("list2")}
          >
            <Link to="/" className="nav-anchor">
              <SiHtmlacademy />
              <FormattedMessage id={translate[language].academy} />
            </Link>
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list2 && <div className="mobile-dropdown"></div>}
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <RiApps2Fill />
            <FormattedMessage id={translate[language].blog} />
          </Link>
        </div>

        <div className="nav-sidebar-link">
          <Link to="/" className="nav-anchor">
            <RiContactsFill />
            <FormattedMessage id={translate[language].contact} />
          </Link>
        </div>
        <div className="sidebar-dropdown">
          <div
            className="nav-sidebar-link"
            onClick={() => toggleDropdown("list3")}
          >
            <MdOutlineLanguage />
            <FormattedMessage
              id={translate[language].language}
              // defaultMessage="Language"
            />
            <div className="dropdown-arrow">
              <MdKeyboardArrowDown />
            </div>
          </div>
          {dropdowns.list3 && (
            <div className="mobile-dropdown">
              {languages?.map((item) => {
                return (
                  <div className="inner-links" key={item.title}>
                    <div
                      className="flag"
                      onClick={() =>
                        handleLanguageChange(item.lang, item.value)
                      }
                    >
                      <div
                        className="img"
                        style={{ content: `url(${item.flag})` }}
                      ></div>
                      {item.lang}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      <div className="sidebar-auth">
        <Link to="/apply" className="contact-us">
          <FormattedMessage id={translate[language].apply} />
        </Link>
      </div>

      <div className="space"></div>
    </div>
  );
};

export default Sidebar;
