import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { ModelsSliderData } from "../data";
import "../Home/styles/ModelsSlider.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../../assets/ModelsSlider/arrow/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../../assets/ModelsSlider/arrow/arrow-right.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const ModelsSlider = () => {
  const carouselRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(
    ModelsSliderData[0].name
  );
  const [itemsToShow, setItemsToShow] = useState(4);
  const onPrevStart = (prevItem, nextItem) => {
    console.log("Navigating to previous item");
  };

  const onNextStart = (prevItem, nextItem) => {
    console.log("Navigating to next item");
  };

  const selectedCategoryData = ModelsSliderData.find(
    (category) => category.name === selectedCategory
  );

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const modelChunks = chunkArray(selectedCategoryData.models, itemsToShow);

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

  return (
    <div className="home-modelsSlider">
      <h1 className="big-title">MODELS</h1>
      <div className="react-tabs" data-rttabs="true">
        <div className="row">
          <ul className="react-tabs__tab-list" role="tablist">
            {ModelsSliderData.map((tab) => (
              <li
                key={tab.name}
                className={`react-tabs__tab ${
                  tab.name === selectedCategory ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(tab.name)}
                role="tab"
                aria-selected={tab.name === selectedCategory}
                aria-controls={`panel:${tab.name}`}
              >
                {tab.name}
                <div className="line"></div>
              </li>
            ))}
          </ul>

          <div className="styledLink">
            <a className="styledLink unstyled" href="/">
              <p>View all</p>
              <div className="icon">
                <HiOutlineArrowLongRight />
              </div>
            </a>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel
            itemsToShow={1}
            ref={carouselRef}
            onPrevStart={onPrevStart}
            onNextStart={onNextStart}
            disableArrowsOnEnd={false}
            renderArrow={CustomArrow}
          >
            {modelChunks.map((chunk, index) => (
              <div key={index} className="carousel-slide">
                {chunk.map((model, idx) => (
                  <div className="modelSliderCard" tabIndex="0" key={idx}>
                    <div
                      className="img"
                      style={{
                        backgroundImage: `url(${model.image})`,
                      }}
                    >
                      <div className="styledLink">
                        <Link className="styledLink black" to="/">
                          <p>View details</p>
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
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ModelsSlider;
