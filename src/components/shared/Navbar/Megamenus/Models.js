import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./megamenu.scss";
import { models } from "../data";
import Carousel from "react-elastic-carousel";

const Models = () => {
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
    <div className="nav-megamenu portfolio-megamenu models-megamenu">
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
          {models.map((props) => {
            return (
              <div className="slider-item">
                <Link to={props.to}>
                  <div
                    className="img"
                    style={{ content: `url(${props.img})` }}
                  ></div>
                </Link>
                <div className="bottom">
                  <h3>{props.name}</h3>
                  <p>{props.about}</p>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Models;
