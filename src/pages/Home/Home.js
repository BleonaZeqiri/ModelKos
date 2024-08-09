import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";
import Banner from "../../components/pages/Home/Banner";
import Sidebar from "../../components/shared/MobileNav/Sidebar/Sidebar";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
