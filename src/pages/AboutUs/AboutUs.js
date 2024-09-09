import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import About from "../../components/pages/AboutUs/About";
import History from "../../components/pages/AboutUs/History";
import Benefits from "../../components/pages/AboutUs/Benefits";

import Footer from "../../components/shared/Footer/Footer";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar isColor />
      <About />
      <History />
      <Benefits />
      <Footer />
    </div>
  );
};

export default AboutUs;
