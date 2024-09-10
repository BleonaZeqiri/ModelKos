import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import About from "../../components/pages/AboutUs/About";
import History from "../../components/pages/AboutUs/History";
import Benefits from "../../components/pages/AboutUs/Benefits";
import Our_partnerships from "../../components/shared/Our_Partnerships/Our_partnerships";
import Kosova_Girls from "../../components/shared/KosovaGirls/Kosova_Girls";

import Our_blog from "../../components/pages/Home/Our_blog";
import Academy from "../../components/shared/Academy/Acadmey";
import What_people_say from "../../components/shared/What_people_say/What_people_say";

import Our_partners from "../../components/shared/Our_partners/Our_partners";
import Subscribe from "../../components/shared/Subscribe/Subscribe";
import Footer from "../../components/shared/Footer/Footer";
import Content from "../../components/pages/AboutUs/Content";

const AboutUs = () => {
  return (
    <div className="about-page">
      <Navbar isColor />
      <About />
      <History />
      <Benefits />
      <Content />
      <Our_partnerships />
      <Kosova_Girls />
      <What_people_say />

      <Our_blog />
      <Academy />
      <Our_partners />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default AboutUs;
