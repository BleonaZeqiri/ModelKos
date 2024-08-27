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
      <Footer />
    </div>
  );
};

export default Home;
