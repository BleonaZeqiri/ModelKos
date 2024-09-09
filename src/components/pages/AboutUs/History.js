import React from "react";
import { FormattedMessage } from "react-intl";
// import { Link } from "react-router-dom";
import "./styles/History.scss";
import historyImage1 from "../../../assets/AboutUsPage/History/banner-5.png";
import historyImage2 from "../../../assets/AboutUsPage/History/banner-4.png";

const History = () => {
  return (
    <div className="aboutus-history">
      <div className="left">
        <h1>
          <FormattedMessage id="footer-paragraph4" defaultMessage="  history" />
        </h1>
        <div className="text">
          <p>
            <FormattedMessage
              id="footer-paragraph4"
              defaultMessage="ModelKos was created with the commitment and understanding that all talent
be equally represented and that appropriate rates and fees for services be
negotiated and paid to talent in a timely fashion. With it's own in house studio
and technical staff, ModelKos also understands the timely needs of the Model,
Talent, Client, Producer, Director, and all support staff in print, television and
movie production."
            ></FormattedMessage>
          </p>
          <p>
            <FormattedMessage
              id="footer-paragraph4"
              defaultMessage=" ModelKos's Social Media department is constantly working to add
          content, tags, mentions and other engagement for our models, talent,
          clients, and all our partners. "
            ></FormattedMessage>
          </p>
        </div>
      </div>
      <div className="right">
        <div className="img" style={{ content: `url(${historyImage1})` }}></div>

        <div className="img" style={{ content: `url(${historyImage2})` }}></div>
      </div>
    </div>
  );
};

export default History;
