import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import Banner from "../../components/pages/Home/Banner";
import About from "../../components/pages/Home/About";
import Models from "../../components/pages/Home/Models";
import Modeling from "../../components/pages/Home/Modeling";
// import About_models from "../../components/pages/Home/About_models";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Banner />
      <About />
      <Modeling />

      <Models />
      {/* <About_models /> */}
      <Footer />
    </div>
  );
};

export default Home;
