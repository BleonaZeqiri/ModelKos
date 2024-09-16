import React from "react";
import Navbar from "../../components/shared/Navbar/Navbar";
import What_people_say from "../../components/shared/What_people_say/What_people_say";
import Our_blog from "../../components/pages/Home/Our_blog";
import Academy from "../../components/shared/Academy/Acadmey";
import Our_partners from "../../components/shared/Our_partners/Our_partners";
import Subscribe from "../../components/shared/Subscribe/Subscribe";
import Footer from "../../components/shared/Footer/Footer";
import BecomeModel from "../../components/pages/ApplyNow/BecomeModel";

const Apply = () => {
  return (
    <div>
      <Navbar isColor />
      <BecomeModel />

      <What_people_say />
      <Our_blog />
      <Academy />
      <Our_partners />
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Apply;
