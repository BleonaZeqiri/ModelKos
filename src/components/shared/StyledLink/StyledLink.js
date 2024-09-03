import React from "react";
import "./styledLink.scss";
import { Link } from "react-router-dom";

const StyledLink = (props) => {
  return (
    <div className="styledLink">
      <Link to={props.to} className="shared-styled-link1">
        <span>{props.link}</span>
      </Link>
    </div>
  );
};

export default StyledLink;
