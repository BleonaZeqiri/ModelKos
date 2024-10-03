import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { translate } from "../../../translation/translate";
import { FormattedMessage } from "react-intl";
import "./styles/Slider.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ModelsSliderData } from "./data";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as ArrowLeft } from "../../../assets/Home/ModelsSlider/arrow/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/Home/ModelsSlider/arrow/arrow-right.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
const Slider = () => {
  const language = useSelector((state) => state.language.language);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(4);

  const carouselRef = useRef(null);
  const modelsSliderData = ModelsSliderData(language);
  const shi = ModelsSliderData(language);

  useEffect(() => {
    if (modelsSliderData.length > 0) {
      setSelectedCategory(modelsSliderData[0].name);
    }
  }, [modelsSliderData]);

  useEffect(() => {
    const updateItemsToShow = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 550) {
        setItemsToShow(1);
      } else if (screenWidth <= 850) {
        setItemsToShow(2);
      } else if (screenWidth <= 1020) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => {
      window.removeEventListener("resize", updateItemsToShow);
    };
  }, []);

  const CustomArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === "PREV" ? <ArrowLeft /> : <ArrowRight />;
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        className={`custom-arrow ${type.toLowerCase()}`}
      >
        {pointer}
      </button>
    );
  };

  return (
    <div className="home-modelsSlider">
      <h1 className="big-title">
        <FormattedMessage id={translate[language].modelsSlider_title} />
      </h1>
      <Tabs className="tabs">
        <TabList data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <div className="row">
            <Tab>
              <FormattedMessage
                id={translate[language].modelsSlider_title_tab_list1}
              />
              <div className="line"></div>
            </Tab>
            <Tab>
              <FormattedMessage
                id={translate[language].modelsSlider_title_tab_list2}
              />
              <div className="line"></div>
            </Tab>
            <Tab>
              <FormattedMessage
                id={translate[language].modelsSlider_title_tab_list3}
              />
              <div className="line"></div>
            </Tab>
            <Tab>
              <FormattedMessage
                id={translate[language].modelsSlider_title_tab_list4}
              />
              <div className="line"></div>
            </Tab>
            <Tab>
              <FormattedMessage
                id={translate[language].modelsSlider_title_tab_list5}
              />
              <div className="line"></div>
            </Tab>
            <Tab>
              <FormattedMessage
                id={translate[language].modelsSlider_title_tab_list6}
              />
              <div className="line"></div>
            </Tab>
            <Tab>
              <FormattedMessage
                id={translate[language].modelsSlider_title_tab_list7}
              />
              <div className="line"></div>
            </Tab>
            <Tab>
              <FormattedMessage
                id={translate[language].modelsSlider_title_tab_list8}
              />
              <div className="line"></div>
            </Tab>
          </div>

          <div className="styledLink">
            <a className="styledLink unstyled" href="/">
              <p>
                <FormattedMessage
                  id={translate[language].modelsSlider_button_view_all}
                />
              </p>
              <div className="icon">
                <HiOutlineArrowLongRight />
              </div>
            </a>
          </div>
        </TabList>

        {shi.length === 0 ? (
          <p>No data available</p>
        ) : (
          shi.map((props, index) => {
            console.log(props.items[0].innerItems, "sss");
            return (
              <TabPanel key={index}>
                <Carousel
                  itemsToShow={itemsToShow}
                  ref={carouselRef}
                  onPrevStart={() => console.log("Navigating to previous item")}
                  onNextStart={() => console.log("Navigating to next item")}
                  disableArrowsOnEnd={false}
                  renderArrow={CustomArrow}
                >
                  {props?.items[0]?.innerItems?.map((model, chunkIndex) => (
                    <div key={chunkIndex} className="carousel-slide">
                      <div className="modelSliderCard" tabIndex="0">
                        <div
                          className="img"
                          style={{
                            backgroundImage: `url(${model.image})`,
                          }}
                        >
                          <div className="styledLink">
                            <Link className="styledLink black" to="/">
                              <p>
                                <FormattedMessage
                                  id={
                                    translate[language]
                                      .modelsSlider_button_view_details
                                  }
                                />
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div className="content">
                          <span>{model.profession}</span>
                          <div className="row1">
                            <h3>{model.name}</h3>
                            <p className="def-text">{model.time}</p>
                          </div>
                          <div className="row1 row-content">
                            <div className="item">
                              {model.icon}
                              <p className="def-text">{model.location}</p>
                            </div>
                            <div className="item">
                              {model.icon1}
                              <p className="def-text">{model.view}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </TabPanel>
            );
          })
        )}
      </Tabs>
    </div>
  );
};

export default Slider;
