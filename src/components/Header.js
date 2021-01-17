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
        <a href="#" className="btn-main-offer">
          Contact Me
        </a>
      </div>
    </div>

    // <main>
    //   <img
    //     src={bgimage}
    //     alt="background-image"
    //     className="absolute object-cover w-full h-full"
    //   />
    //   <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
    //     <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug">
    //       Hello Sandeep
    //     </h1>
    //   </section>
    // </main>
  );
};

export default Header;
