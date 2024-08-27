import { FormattedMessage } from "react-intl";
//model image
import model_image1 from "../../../assets/OurWork/Image1.png";
import model_image2 from "../../../assets/OurWork/Image2.png";
import model_image3 from "../../../assets/OurWork/Image3.png";
import model_image4 from "../../../assets/OurWork/Image4.png";
import model_image5 from "../../../assets/OurWork/Image5.png";
import model_image6 from "../../../assets/OurWork/Image6.png";
import model_image7 from "../../../assets/OurWork/Image8.png";
import model_image8 from "../../../assets/OurWork/Image7.png";

//our work
// import our_work1 from "../../../assets/nav/portfolio1.svg";
import our_work2 from "../../../assets/nav/portfolio2.svg";
import our_work3 from "../../../assets/nav/portfolio3.svg";
import our_work4 from "../../../assets/nav/portfolio4.svg";
import our_work5 from "../../../assets/nav/portfolio5.svg";
// import our_work6 from "../../../assets/nav/portfolio6.svg";
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

import about_image from "../../../assets/WhatWeOffer/Icon2.svg";
import aboutIcon1red from "../../../assets/nav/aboutIcon1red.svg";
import aboutIcon1green from "../../../assets/nav/aboutIcon1green.svg";
import aboutIcon1blue from "../../../assets/nav/aboutIcon1blue.svg";
export const models = [
  {
    name: "Beatrise Ramosaj",
    to: "/",

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
    icon: our_work4,

    title: <FormattedMessage id="our-work" defaultMessage="Agency" />,
    link: [
      { name: "About Us" },
      { name: "Our Models" },
      { name: "Our Partners" },
      { name: "Our Team" },
      { name: " Our Partners" },
      { name: "Clients" },
    ],
  },
  {
    to: "/",
    icon: our_work4,

    title: <FormattedMessage id="our-work" defaultMessage="Models" />,
    link: [
      { name: "Be a Model" },
      { name: "Careers" },
      { name: "Magazine" },
      { name: "Lists" },
      { name: " New Faces" },
      { name: "Rankings" },
    ],
  },
];

export const Our_work2 = [
  {
    to: "/",
    img: model_image1,
    name: "Albina Myrtezaj",
    description: [
      { name: "Model" },
      { name: "Photography" },
      { name: "Artist" },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image2,
    name: "Klea Gashi",
    description: [
      { name: "Model" },
      { name: "Photography" },
      { name: "Artist" },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image3,
    name: "Arta Kalluri",
    description: [
      { name: "Model" },
      { name: "Photography" },
      { name: "Artist" },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image4,
    name: "Blina Beka",
    description: [
      { name: "Model" },
      { name: "Photography" },
      { name: "Artist" },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image5,
    name: "Blina Beka",
    description: [
      { name: "Model" },
      { name: "Photography" },
      { name: "Artist" },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image6,
    name: "Alora Gojani",
    description: [
      { name: "Model" },
      { name: "Photography" },
      { name: "Artist" },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image7,
    name: "Anila Xhaferi",
    description: [
      { name: "Model" },
      { name: "Photography" },
      { name: "Artist" },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: model_image8,
    name: "Anila Xhaferi",
    description: [
      { name: "Model" },
      { name: "Photography" },
      { name: "Artist" },
    ],
    date: "19 may 2022",
  },
];

export const Our_work1 = [
  {
    to: "/",
    icon: our_work4,

    title: <FormattedMessage id="our-work" defaultMessage="City" />,
    link: [
      { name: "Prishtina" },
      { name: "Peja" },
      { name: "Prizren" },
      { name: "Gjakov" },
      { name: " Gjilan" },
      { name: "Ferizaj" },
      { name: "Mitrovic" },
    ],
  },

  {
    to: "/",
    icon: our_work4,

    title: <FormattedMessage id="models" defaultMessage="Female" />,
    link: [{ name: "Main" }, { name: "Direct" }, { name: "B Plus" }],
  },
  {
    to: "/",
    icon: our_work3,
    title: <FormattedMessage id="about" defaultMessage="Male" />,
    link: [{ name: "Main" }, { name: "Direct" }, { name: "Big & Tall" }],
  },
  {
    to: "/",
    icon: our_work2,
    title: <FormattedMessage id="academy" defaultMessage="Kids" />,
    link: [
      { name: "Babies" },
      { name: "Todlers" },
      { name: "Preschool" },
      { name: "Grandschooler" },
      { name: "Teen" },
    ],
  },
  {
    to: "/",
    icon: our_work5,
    title: <FormattedMessage id="blog" defaultMessage="Erderly" />,
    link: [{ name: "Old Female" }, { name: "Old Male" }],
  },
];
