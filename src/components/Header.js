import React from "react";
import "../App.css";
import bgimage from "../pexels-scott-webb-1029612.jpg";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <img src={bgimage} alt="put the logo here" />
      <div className="main-info">
        <h1>Howdy. I'm Sandeep Reddy. </h1>
        <Typed
          className="typed-text"
          strings={[
            "I'm a Web Developer",
            "React focussed",
            "Working for Kroger Technology"
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a className="btn-main-offer">Contact Me</a>
      </div>
    </div>
  );
};

export default Header;
