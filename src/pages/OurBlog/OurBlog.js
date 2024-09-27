import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import OurBlogSearch from "../../components/pages/OurBlog/OurBlogSearch";

import Our_partners from "../../components/shared/Our_partners/Our_partners";

import Subscribe from "../../components/shared/Subscribe/Subscribe";
import Footer from "../../components/shared/Footer/Footer";
import MainComponent from "../../components/pages/OurBlog/MainComponent";

const OurBlog = () => {
  return (
    <div>
      <Navbar isColor />
      {/* <OurBlogSearch /> */}
      <MainComponent />
      <Our_partners />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default OurBlog;
