import { FormattedMessage } from "react-intl";

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

import portfolio1 from "../../../assets/nav/portfolio1.svg";
import portfolio2 from "../../../assets/nav/portfolio2.svg";
import portfolio3 from "../../../assets/nav/portfolio3.svg";
import portfolio4 from "../../../assets/nav/portfolio4.svg";
import portfolio5 from "../../../assets/nav/portfolio5.svg";
import portfolio6 from "../../../assets/nav/portfolio6.svg";

import about1 from "../../../assets/nav/about1.svg";
import about2 from "../../../assets/nav/about2.svg";
import about3 from "../../../assets/nav/about3.svg";
import about4 from "../../../assets/nav/about4.svg";
import about5 from "../../../assets/nav/about5.svg";
import about6 from "../../../assets/nav/about6.svg";

import portfolioImg1 from "../../../assets/nav/portfolioImg1.jpg";
import portfolioImg2 from "../../../assets/nav/portfolioImg2.jpg";

import aboutIcon1 from "../../../assets/nav/aboutIcon1.svg";
import aboutIcon1red from "../../../assets/nav/aboutIcon1red.svg";
import aboutIcon1green from "../../../assets/nav/aboutIcon1green.svg";
import aboutIcon1blue from "../../../assets/nav/aboutIcon1blue.svg";

export const AboutData2 = [
  {
    icon: aboutIcon1,
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
    icon: aboutIcon1,
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
    icon: aboutIcon1,
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

export const PortfolioData2 = [
  {
    to: "/",
    img: portfolioImg1,
  },
  {
    to: "/",
    img: portfolioImg2,
  },
  {
    to: "/",
    img: portfolioImg1,
  },
];

export const PortfolioData = [
  {
    to: "/",
    icon: portfolio1,
    title: <FormattedMessage id="our-work" defaultMessage="Our work" />,
    bg: "#C173E7",
  },
  {
    to: "/",
    icon: portfolio2,
    title: <FormattedMessage id="campaigns" defaultMessage="Campaigns" />,
    bg: "#4F9AFF",
  },
  {
    to: "/",
    icon: portfolio3,
    title: <FormattedMessage id="brands" defaultMessage="Brands" />,
    bg: "#37B172",
  },
  {
    to: "/",
    icon: portfolio4,
    title: <FormattedMessage id="ui-ux-design" defaultMessage="UI/UX Design" />,
    bg: "#5C167E",
  },
  {
    to: "/",
    icon: portfolio5,
    title: <FormattedMessage id="case-studies" defaultMessage="Case studies" />,
    bg: "#CE6A6A",
  },
  {
    to: "/",
    icon: portfolio6,
    title: <FormattedMessage id="game-design" defaultMessage="Game design" />,
    bg: "#EB8341",
  },
];
export const ServicesData = [
  {
    to: "/",
    icon: services1,
    title: (
      <FormattedMessage id="graphic-design" defaultMessage="Graphic Design" />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text1"
        defaultMessage="We create original graphical illustrations for you and your brand to stand out"
      />
    ),
    bg: "#E28990",
  },
  {
    to: "/",
    icon: services2,
    title: <FormattedMessage id="animation" defaultMessage="Animation" />,
    text: (
      <FormattedMessage
        id="services-menu-text2"
        defaultMessage="Our professionals will animate clips or full length animations as you need"
      />
    ),
    bg: "#A01851",
  },
  {
    to: "/",
    icon: services3,
    title: <FormattedMessage id="ui-ux-design" defaultMessage="UI/UX Design" />,
    text: (
      <FormattedMessage
        id="services-menu-text3"
        defaultMessage="Our team will can transform your ideas into great designs"
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
        defaultMessage="Video Production"
      />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text4"
        defaultMessage="We shoot and edit videos with our creative staff and marketing team"
      />
    ),
    bg: "#6A67C5",
  },
  {
    to: "/",
    icon: services5,
    title: <FormattedMessage id="game-design" defaultMessage="Game Design" />,
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
      <FormattedMessage
        id="ui-ux-consulting"
        defaultMessage="Ui/UX consulting"
      />
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
    title: <FormattedMessage id="photography" defaultMessage="Photography" />,
    text: (
      <FormattedMessage
        id="services-menu-text7"
        defaultMessage="Our photography team shoots the necessary photos to style products of your business"
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
        defaultMessage="Marketing Design"
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
    title: (
      <FormattedMessage id="product-design" defaultMessage="Product Design" />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text9"
        defaultMessage="We specialize in physical product design, helping our clients have winning products"
      />
    ),
    bg: "#224DC6",
  },
  {
    to: "/",
    icon: services10,
    title: <FormattedMessage id="3d-artwork" defaultMessage="3D Artwork" />,
    text: (
      <FormattedMessage
        id="services-menu-text10"
        defaultMessage="We create unique 3D assets that will bring focus and fresh perspective"
      />
    ),
    bg: "#7B7FC5",
  },
  {
    to: "/",
    icon: services11,
    title: (
      <FormattedMessage id="brand-identity" defaultMessage="Brand Identity" />
    ),
    text: (
      <FormattedMessage
        id="services-menu-text11"
        defaultMessage="Custom brand identity design from our professionals"
      />
    ),
    bg: "#0099FF",
  },
  {
    to: "/",
    icon: services12,
    title: <FormattedMessage id="Infographics" defaultMessage="Infographics" />,
    text: (
      <FormattedMessage
        id="services-menu-text12"
        defaultMessage="Turn your data into captivating artwork that will keep your audience engaged"
      />
    ),
    bg: "#619D9B",
  },
];
