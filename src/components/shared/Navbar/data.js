import { FormattedMessage } from "react-intl";
//Our work image
import model_image1 from "../../../assets/OurWork/Image1.png";
import model_image2 from "../../../assets/OurWork/Image2.png";
import model_image3 from "../../../assets/OurWork/Image3.png";
import model_image4 from "../../../assets/OurWork/Image4.png";
import model_image5 from "../../../assets/OurWork/Image5.png";
import model_image6 from "../../../assets/OurWork/Image6.png";
import model_image7 from "../../../assets/OurWork/Image8.png";
import model_image8 from "../../../assets/OurWork/Image7.png";

//about
import about_image from "../../../assets/AboutUs/Image2.png";

export const AboutData1 = [
  {
    title: "Modelkos",
    year: "2022",
    image: about_image,
    button: {
      to: "/",
      text: "About us",
    },
  },
];

export const AboutData = [
  {
    section: "agency",
    title: <FormattedMessage id="agency" defaultMessage="Agency" />,
    links: [
      {
        to: "/",
        title: <FormattedMessage id="about-us" defaultMessage="About Us" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="our-models" defaultMessage="Our Models" />,
      },
      {
        to: "/",
        title: (
          <FormattedMessage id="our-partners" defaultMessage="Our Partners" />
        ),
      },
      {
        to: "/",
        title: <FormattedMessage id="our-team" defaultMessage="Our Team" />,
      },
      {
        to: "/",
        title: (
          <FormattedMessage id="our-partners1" defaultMessage="Our Partners" />
        ),
      },
      {
        to: "/",
        title: <FormattedMessage id="clients" defaultMessage="Clients" />,
      },
    ],
  },
  {
    section: "models",
    title: <FormattedMessage id="models" defaultMessage="Models" />,
    links: [
      {
        to: "/",
        title: <FormattedMessage id="be-a-model" defaultMessage="Be a Model" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="careers" defaultMessage="Careers" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="magazine" defaultMessage="Magazine" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="lists" defaultMessage="Lists" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="new-faces" defaultMessage="New Faces" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="ranking" defaultMessage="Rankings" />,
      },
    ],
  },
];

export const Our_work2 = [
  {
    to: "/",
    img: model_image3,
    name: "Anda Lßleshi",
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
    name: "Driada Lakna",
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
    img: model_image6,
    name: "Arta Kalludra",
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
  {
    to: "/",
    img: model_image7,
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
    img: model_image1,
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
    img: model_image2,
    name: "Alora Gojani",
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
    section: "city",
    title: <FormattedMessage id="city" defaultMessage="City" />,
    links: [
      {
        to: "/",
        title: <FormattedMessage id="city-1" defaultMessage="Prishtina" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-2" defaultMessage="Peja" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-3" defaultMessage="Prizren" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-4" defaultMessage="Gjakove" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-5" defaultMessage="Gjilan" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-6" defaultMessage="Ferizaj" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="city-7" defaultMessage="Mitrovice" />,
      },
    ],
  },
  {
    section: "Female",
    title: <FormattedMessage id="female" defaultMessage="Female" />,
    links: [
      {
        to: "/",
        title: <FormattedMessage id="female-1" defaultMessage="Main" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="female-2" defaultMessage="Direct" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="female-3" defaultMessage="B Plus" />,
      },
    ],
  },
  {
    section: "Male",
    title: <FormattedMessage id="male" defaultMessage="Male" />,
    links: [
      {
        to: "/",
        title: <FormattedMessage id="male-1" defaultMessage="Main" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="male-2" defaultMessage="Direct" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="male-3" defaultMessage="Big & Tall" />,
      },
    ],
  },
  {
    section: "Kids",
    title: <FormattedMessage id="kids" defaultMessage="Kids" />,
    links: [
      {
        to: "/",
        title: <FormattedMessage id="kids-1" defaultMessage="Babies" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="kids-2" defaultMessage="Todlers" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="kids-3" defaultMessage="Preschool" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="kids-3" defaultMessage="Grandschooler" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="kids-3" defaultMessage="Teen" />,
      },
    ],
  },
  {
    section: "Elderly",
    title: <FormattedMessage id="elderly" defaultMessage="Elderly" />,
    links: [
      {
        to: "/",
        title: <FormattedMessage id="elderly-1" defaultMessage="Old Female" />,
      },
      {
        to: "/",
        title: <FormattedMessage id="elderly-2" defaultMessage="Old Male" />,
      },
    ],
  },
];
