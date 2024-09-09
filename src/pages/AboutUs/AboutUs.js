import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import About from "../../components/pages/AboutUs/About";
import History from "../../components/pages/AboutUs/History";

import Footer from "../../components/shared/Footer/Footer";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar isColor />
      <About />
      <History />
      <Footer />
    </div>
  );
};

export default AboutUs;
