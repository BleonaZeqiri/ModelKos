import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import Banner from "../../components/pages/Home/Banner";
import About from "../../components/pages/Home/About";
import Models from "../../components/pages/Home/Models";
import Modeling from "../../components/pages/Home/Modeling";
import Marketing from "../../components/pages/Home/Marketing";
import BeingClassy from "../../components/pages/Home/BeingClassy";
import ModelsSlider from "../../components/pages/Home/ModelsSlider";
import What_we_offer from "../../components/pages/Home/What_we_offer";
import Content from "../../components/pages/Home/Content";
import What_people_say from "../../components/pages/Home/What_people_say";
import Our_partnerships from "../../components/pages/Home/Our_partnerships";
import Kosova_Girls from "../../components/pages/Home/Kosova_Girls";
import Our_blog from "../../components/pages/Home/Our_blog";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Banner />
      <About />
      <Modeling />

      <Models />
      <BeingClassy />
      <Marketing />
      <ModelsSlider />
      <What_we_offer />

      <Content />
      <What_people_say />
      <Our_partnerships />
      <Kosova_Girls />
      <Our_blog />

      <Footer />
    </div>
  );
};

export default Home;
