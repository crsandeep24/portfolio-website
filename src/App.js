import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Particles
        className="tsparticles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 2,
                color: 340744
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
    </>
  );
}
