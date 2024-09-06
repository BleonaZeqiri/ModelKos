import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import { Our_work1, Our_work2 } from "../data";
import Carousel from "react-elastic-carousel";
import "./megamenu.scss";
import { useSelector } from "react-redux";
import { translate } from "../../../../translation/translate";

const Our_work = () => {
  const language = useSelector((state) => state.language.language);
  const our_work2 = Our_work2(language);
  const our_work1 = Our_work1(language);

  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo("single-slide".length);
    }
  };

  return (
    <div className="nav-megamenu ourwork-megamenu">
      <div className="menu-links">
        <div className="inner-links">
          {our_work1.map((item, index) => (
            <div className="main" key={index}>
              <div className="icon-container">
                <h3>{item.title}</h3>
              </div>
              <div className="block">
                <ul>
                  {item.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link to={link.to} className="menu-main-link">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="right">
        <div className="models">
          <h4>
            <FormattedMessage
              id={translate[language].our_work_megamenu_models1}
            />
          </h4>
          <Link>
            <FormattedMessage
              id={translate[language].our_work_megamenu_view_all}
            />
          </Link>
        </div>
        <Carousel
          className="slider"
          itemsToShow={2}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
        >
          {our_work2.map((item) => {
            return (
              <div className="slider-item">
                <Link to={item.to}>
                  <div
                    className="img"
                    style={{ content: `url(${item.img})` }}
                  ></div>
                  <div className="model-item">
                    <h3>{item.name}</h3>
                    <div className="item">
                      {item?.description?.map((description) => {
                        return <li>{description.name}</li>;
                      })}
                    </div>
                    <h3>{item.date}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Our_work;
