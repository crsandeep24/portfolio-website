import React from "react";
import "../App.css";
import bgimage from "../wall-background.png";

const Header = () => {
  return (
    <div className="header-wrapper">
      <img src={bgimage} />
      <div className="main-info">
        <h1> Hello Sandeep Reddy </h1>
      </div>
    </div>
  );
};

export default Header;
