import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./megamenu.scss";
import { Our_work1, Our_work2 } from "../data";
import Carousel from "react-elastic-carousel";

const Our_work = () => {
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
    <div className="nav-megamenu portfolio-megamenu">
      <div className="menu-links">
        <h5>
          <FormattedMessage id="our_work" defaultMessage="Our Work" />
        </h5>
        <div className="inner-links">
          {Our_work1.map((props) => {
            return (
              <Link to={props.to} className="menu-main-link">
                <div className="bg" style={{ background: `${props.bg}` }}></div>
                <div className="main">
                  <div className="icon-container">
                    <div
                      className="icon"
                      style={{ content: `url(${props.icon})` }}
                    ></div>
                  </div>
                  <div className="block">
                    <h6>{props.title}</h6>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="right">
        <h5>
          <FormattedMessage id="latest" defaultMessage="Latest" />
        </h5>
        <Carousel
          className="slider"
          itemsToShow={2}
          ref={carouselRef}
          onPrevStart={onPrevStart}
          onNextStart={onNextStart}
          disableArrowsOnEnd={false}
        >
          {Our_work2.map((props) => {
            return (
              <div className="slider-item">
                <Link to={props.to}>
                  <div
                    className="img"
                    style={{ content: `url(${props.img})` }}
                  ></div>
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
