import { FormattedMessage } from "react-intl";
//model image
import model_image1 from "../../../assets/Models/Img1.png";
import model_image2 from "../../../assets/Models/Img2.png";
import model_image3 from "../../../assets/Models/Img3.png";
//our work
import our_work1 from "../../../assets/nav/portfolio1.svg";
import our_work2 from "../../../assets/nav/portfolio2.svg";
import our_work3 from "../../../assets/nav/portfolio3.svg";
import our_work4 from "../../../assets/nav/portfolio4.svg";
import our_work5 from "../../../assets/nav/portfolio5.svg";
import our_work6 from "../../../assets/nav/portfolio6.svg";
//models
import model2 from "../../../assets/OurModels/Model2.png";
import model3 from "../../../assets/OurModels/Model3.png";
import model4 from "../../../assets/OurModels/Model4.png";
import model5 from "../../../assets/OurModels/Model5.png";
import model6 from "../../../assets/OurModels/Model6.png";
import model7 from "../../../assets/OurModels/Model7.png";
import model8 from "../../../assets/OurModels/Model8.png";
import model9 from "../../../assets/OurModels/Model9.png";
import model10 from "../../../assets/OurModels/Model10.png";

import services1 from "../../../assets/nav/services1.svg";
import services2 from "../../../assets/nav/services2.svg";
import services3 from "../../../assets/nav/services3.svg";
import services4 from "../../../assets/nav/services4.svg";
import services5 from "../../../assets/nav/services5.svg";
import services6 from "../../../assets/nav/services6.svg";
import services7 from "../../../assets/nav/services7.svg";
import services8 from "../../../assets/nav/services8.svg";
import services9 from "../../../assets/nav/services9.svg";
import services10 from "../../../assets/nav/services10.svg";
import services11 from "../../../assets/nav/services11.svg";
import services12 from "../../../assets/nav/services12.svg";

import about1 from "../../../assets/nav/about1.svg";
import about2 from "../../../assets/nav/about2.svg";
import about3 from "../../../assets/nav/about3.svg";
import about4 from "../../../assets/nav/about4.svg";
import about5 from "../../../assets/nav/about5.svg";
import about6 from "../../../assets/nav/about6.svg";

import about_image from "../../../assets/WhatWeOffer/Icon2.svg";
import aboutIcon1red from "../../../assets/nav/aboutIcon1red.svg";
import aboutIcon1green from "../../../assets/nav/aboutIcon1green.svg";
import aboutIcon1blue from "../../../assets/nav/aboutIcon1blue.svg";
export const models = [
  {
    name: "Beatrise Ramosaj",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    img: model7,
  },
  {
    name: "Melinda Ademi",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    to: "/",
    img: model2,
  },
  {
    name: "Xhensila Myrteza",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    to: "/",
    img: model3,
  },
  {
    name: "Ana Lleshi",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    to: "/",
    img: model4,
  },
  {
    name: "Afrona Dika",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    to: "/",
    img: model5,
  },
  {
    name: "Bleona Zeqiri",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    to: "/",
    img: model6,
  },
  {
    name: "Dhurata Ahmetaj",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    to: "/",
    img: model8,
  },
  {
    name: "Dafina Zeqiri",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    to: "/",
    img: model9,
  },
  {
    name: "Genta Ismajli",
    about:
      "A person whose profession is posing for artists or photographers. a person employed to wear clothing or pose with a product for purposes of display and advertising.",
    to: "/",
    img: model10,
  },
];
export const AboutData2 = [
  {
    icon: about_image,
    iconRed: aboutIcon1red,
    iconGreen: aboutIcon1green,
    iconBlue: aboutIcon1blue,
    title: <FormattedMessage id="our-strategy" defaultMessage="Our strategy" />,
    text: (
      <FormattedMessage
        id="about-megamenu-text1"
        defaultMessage="Our ability to create sustainable brand strategies based on real-world applications allows us to translate original ideas into unique brand solutions."
      />
    ),
  },
  {
    icon: about_image,
    iconRed: aboutIcon1red,
    iconGreen: aboutIcon1green,
    iconBlue: aboutIcon1blue,
    title: <FormattedMessage id="our-strategy" defaultMessage="Our strategy" />,
    text: (
      <FormattedMessage
        id="about-megamenu-text1"
        defaultMessage="Our ability to create sustainable brand strategies based on real-world applications allows us to translate original ideas into unique brand solutions."
      />
    ),
  },
  {
    icon: about_image,
    iconRed: aboutIcon1red,
    iconGreen: aboutIcon1green,
    iconBlue: aboutIcon1blue,
    title: <FormattedMessage id="our-strategy" defaultMessage="Our strategy" />,
    text: (
      <FormattedMessage
        id="about-megamenu-text1"
        defaultMessage="Our ability to create sustainable brand strategies based on real-world applications allows us to translate original ideas into unique brand solutions."
      />
    ),
  },
];

export const AboutData = [
  {
    to: "/",
    icon: about1,
    title: <FormattedMessage id="about-us" defaultMessage="About us" />,
    bg: "#4F9AFF",
  },
  {
    to: "/",
    icon: about2,
    title: <FormattedMessage id="partners" defaultMessage="Partners" />,
    bg: "#585CBC",
  },
  {
    to: "/",
    icon: about3,
    title: <FormattedMessage id="our-team" defaultMessage="Our team" />,
    bg: "#854CDB",
  },
  {
    to: "/",
    icon: about4,
    title: <FormattedMessage id="careers" defaultMessage="Careers" />,
    bg: "#37B172",
  },
  {
    to: "/",
    icon: about5,
    title: <FormattedMessage id="our-clients" defaultMessage="Our clients" />,
    bg: "#EB8341",
  },
  {
    to: "/",
    icon: about6,
    title: <FormattedMessage id="culture" defaultMessage="Culture" />,
    bg: "#D662A0",
  },
];

export const Our_work2 = [
  {
    to: "/",
    img: model_image1,
  },
  {
    to: "/",
    img: model_image2,
  },
  {
    to: "/",
    img: model_image3,
  },
  {
    to: "/",
    img: model_image3,
  },
];

export const Our_work1 = [
  {
    to: "/",

    icon: our_work1,
    title: <FormattedMessage id="our-work" defaultMessage="Our work" />,
    bg: "#C173E7",
  },

  {
    to: "/",
    icon: our_work4,
    title: <FormattedMessage id="campaigns" defaultMessage="Models" />,
    bg: "#4F9AFF",
  },
  {
    to: "/",
    icon: our_work3,
    title: <FormattedMessage id="brands" defaultMessage="About Us" />,
    bg: "#37B172",
  },
  {
    to: "/",
    icon: our_work2,
    title: <FormattedMessage id="ui-ux-design" defaultMessage="Academy" />,
    bg: "#5C167E",
  },
  {
    to: "/",
    icon: our_work5,
    title: <FormattedMessage id="case-studies" defaultMessage="Blog" />,
    bg: "#CE6A6A",
  },
  {
    to: "/",
    icon: our_work6,
    title: <FormattedMessage id="game-design" defaultMessage="Apply now" />,
    bg: "#EB8341",
  },
];
export const AcademyData = [
  {
    to: "/",
    icon: services1,
    title: (
      <FormattedMessage id="graphic-design" defaultMessage="Runway Training" />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text1"
        defaultMessage="Learn the art of the catwalk with our experienced instructors."
      />
    ),
    bg: "#E28990",
  },
  {
    to: "/",
    icon: services2,
    title: (
      <FormattedMessage id="animation" defaultMessage="Personal Styling " />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text2"
        defaultMessage="Understand the essentials of fashion, including trends, designers, and wardrobe styling. "
      />
    ),
    bg: "#A01851",
  },
  {
    to: "/",
    icon: services3,
    title: (
      <FormattedMessage
        id="ui-ux-design"
        defaultMessage="Fitness & Nutrition"
      />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text3"
        defaultMessage="Maintain peak physical condition with our fitness program tailored for models. "
      />
    ),
    bg: "#F34040",
  },
  {
    to: "/",
    icon: services4,
    title: (
      <FormattedMessage
        id="video-production"
        defaultMessage="Professional Development"
      />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text4"
        defaultMessage="Gain insights into the business side of modeling, including how to build a portfolio, work with agencies, and navigate contracts"
      />
    ),
    bg: "#6A67C5",
  },
  {
    to: "/",
    icon: services5,
    title: (
      <FormattedMessage
        id="game-design"
        defaultMessage="Personality Building"
      />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text5"
        defaultMessage="We have professional game designer ready to innovate the gaming industry"
      />
    ),
    bg: "#64BC64",
  },
  {
    to: "/",
    icon: services6,
    title: (
      <FormattedMessage id="ui-ux-consulting" defaultMessage="Photo Modeling" />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text6"
        defaultMessage="Take your product’s user experience to the next level"
      />
    ),
    bg: "#8035A0",
  },
  {
    to: "/",
    icon: services7,
    title: (
      <FormattedMessage id="photography" defaultMessage="Photo Modeling" />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text7"
        defaultMessage="Master the techniques of posing, facial expressions, and body language in front of the camera. "
      />
    ),
    bg: "#DBBB73",
  },
  {
    to: "/",
    icon: services8,
    title: (
      <FormattedMessage
        id="marketing-design"
        defaultMessage="Fashion Knowledge"
      />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text8"
        defaultMessage="We provide strategy, creative, design and implementation services "
      />
    ),
    bg: "#F98715",
  },
  {
    to: "/",
    icon: services9,
    title: <FormattedMessage id="product-design" defaultMessage="Confidence" />,
    text: (
      <FormattedMessage
        id="services-menu-text9"
        defaultMessage="Develop the self-confidence and unique personality that will make you stand out in the industry. "
      />
    ),
    bg: "#224DC6",
  },
];
