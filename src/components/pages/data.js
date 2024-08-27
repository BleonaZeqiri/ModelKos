import image1 from "../../assets/AboutUs-section/DeaGashi.png";
import image2 from "../../assets/AboutUs-section/BlertaBerisha.png";
// models
import model1 from "../../assets/OurModels/Model1.png";
import model2 from "../../assets/OurModels/Model10.png";
import model3 from "../../assets/OurModels/Model11.png";
import model4 from "../../assets/OurModels/Model2.png";
import model5 from "../../assets/OurModels/Model3.png";
import model6 from "../../assets/OurModels/Model4.png";
import model7 from "../../assets/OurModels/Model5.png";
import model8 from "../../assets/OurModels/Model6.png";
import model9 from "../../assets/OurModels/Model7.png";
import model11 from "../../assets/OurModels/Model8.png";
import model10 from "../../assets/OurModels/Model9.png";
import modelText from "../../assets/OurModels/ModelText.svg";
import { FaTwitter, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

//Modeling
import modeling1 from "../../assets/Modeling/Imag1.png";
import modeling2 from "../../assets/Modeling/Image2.png";
//Marketing
import { IoSearch } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { IoBag } from "react-icons/io5";
import { ReactComponent as MarketingIcon } from "../../assets/ModelsMarketing/ModelsMarektingText.svg";

import marketing1 from "../../assets/ModelsMarketing/Image1.png";
import marketing2 from "../../assets/ModelsMarketing/Image2.png";
//BeingClassy
import { ReactComponent as BeingClassy1 } from "../../assets/BeingClassy/Logo.svg";
import { ReactComponent as BeingClassy2 } from "../../assets/BeingClassy/BeingClassy.svg";
//ModelsSlider
import ModelsSlider1 from "../../assets/ModelsSlider/Img1.png";
import ModelsSlider2 from "../../assets/ModelsSlider/Img2.png";
import ModelsSlider3 from "../../assets/ModelsSlider/Img3.png";
import ModelsSlider4 from "../../assets/ModelsSlider/Img4.png";

import { SlLocationPin } from "react-icons/sl";
import { FiEye } from "react-icons/fi";
export const BannerData = [
  {
    text1: "Hire a model or",
    text2: "become one",
    button_text: "Find model",
  },
];
export const AboutUsData = [
  {
    to: "/",
    img: image1,
    name: "Albina Myrtezaj",
    about: [{ name: "Model" }, { name: "Photography" }, { name: "Artist" }],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Klea Gashi",
    about: [{ name: "Model" }, { name: "Photography" }, { name: "Artist" }],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Arta Kalluri",
    about: [{ name: "Model" }, { name: "Photography" }, { name: "Artist" }],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Blina Beka",
    about: [{ name: "Model" }, { name: "Photography" }, { name: "Artist" }],
    date: "19 may 2022",
  },
];
export const AboutUsData2 = [
  {
    to: "/",
    img: image2,
    name: "Blina Beka",
    about: [{ name: "Model" }, { name: "Photography" }, { name: "Artist" }],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Alora Gojani",
    about: [{ name: "Model" }, { name: "Photography" }, { name: "Artist" }],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Anila Xhaferi",
    about: [{ name: "Model" }, { name: "Photography" }, { name: "Artist" }],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Anisa Xhaferi",
    about: [{ name: "Model" }, { name: "Photography" }, { name: "Artist" }],
    date: "19 may 2022",
  },
];
export const AboutUsData1 = [
  {
    Title: "ABOUT US",
    text: " ModelKos is the leading interactive fashion database connecting the world to models, creative talent, magazines, and luxury and commercial brands. With 1.1 million unique visits per month, the site stands as an essential tool to attribute credit and source new talent.",
  },
];

export const ModelingData = [
  {
    image: modeling1,
    image1: modeling2,
  },
  {
    image: modeling1,
    image1: modeling2,
  },
  {
    image: modeling1,
    image1: modeling2,
  },
];

export const ModelsData = [
  {
    name: "Any",
    models: [
      {
        image: model1,
        name: "Anda Lleshi",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
      {
        image: model7,
        name: "Anila Xhaferi",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 US",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },

      {
        image: model10,

        name: "Blerta Salihu",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
    ],
    models1: [
      {
        image: model4,

        name: "Drianda Lakna",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
      {
        image: model8,

        name: "Albina Myrtezaj",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
      {
        image: model2,

        name: "Iliada Sadriu",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
    ],
    models2: [
      {
        image: model5,

        name: "Klea Gashi",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },
          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
      {
        image: model9,

        name: "Drenusha Qaza",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
      {
        model_title: "Want to be here?",
        paragraph:
          "ModelKos is seeking new talent, so join the largest modeling agency in Kosovo and show off your skills. Be a model!",
        icon: modelText,
      },
    ],
    models3: [
      {
        image: model6,

        name: "Arta Kalludra",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
      {
        image: model11,

        name: "Klesta Trifoni",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
      {
        image: model3,

        name: "Melinda Ademi",
        paragraph1: "Height 5'10\"",
        paragraph2: 'Bust 34"A',
        paragraph3: 'Waist 24"',
        paragraph4: 'Hips 34"',
        paragraph5: "Dress 2 US",
        paragraph6: "Shoe 8 Us",
        paragraph7: "Hair Dark Blonde",
        paragraph8: "Eyes Brown ",
        socialMedia: [
          {
            to: "/",
            icon: <FaFacebookF />,
          },

          {
            to: "/",
            icon: <FaInstagram />,
          },
          {
            to: "/",
            icon: <FaTiktok />,
          },
          {
            to: "/",
            icon: <FaTwitter />,
          },
        ],
      },
    ],
  },
  {
    name: "Kids",
    models: [],
  },
  {
    name: "Female",
    models: [],
  },
  {
    name: "Male",
    models: [],
  },
  {
    name: "Mature",
    models: [],
  },
];
export const MarketingData = [
  {
    title: "MODEL MARKETING",
    description:
      " With a network of over 200,000 active members, ModelKos is the top market place for models, photographers, and creative talents in fashion to look for work. Add your online modeling portfolio to ModelKos so that prospective clients can view and make direct bookings. Modeling profiles are completely customizable, allowing you to add your Instagram feed for potential clients to view. So far, thousands of members have been scouted by industry professionals fo both castings and work. Join our community to get started!",
  },
];
export const MarketingData1 = [
  {
    number: "500,000+",
    name: "Portfolio Images",
  },
  {
    number: "520,000+",
    name: "Featured Talents",
  },
  {
    number: "100M",
    name: "Visits",
  },
];
export const MarketingData2 = [
  { icon: <MarketingIcon />, img1: marketing1, img2: marketing2 },
];
export const MarketingData3 = [
  {
    icon: <IoSearch />,
    title: "Search",
  },
  {
    icon: <GoClock />,
    title: "Book",
  },
  {
    icon: <IoBag />,

    title: "Schedule",
  },
  {
    icon: <IoBag />,
    title: "Work with us",
  },
];
export const BeingClassyData = [{ image1: BeingClassy1, image2: BeingClassy2 }];
export const ModelsSliderData = [
  {
    name: "All",
    models: [
      {
        image: ModelsSlider1,
        profession: "Model",
        name: "Anila Canolli",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,
        view: "290",
      },
      {
        image: ModelsSlider2,
        profession: "Model",
        name: "Klea Gashi",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider3,
        profession: "Model",
        name: "Ari Berisha",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider4,
        profession: "Model",
        name: "Jon Klaiqi",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider1,
        profession: "Model",
        name: "Anila Canolli",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,
        view: "290",
      },
      {
        image: ModelsSlider2,
        profession: "Model",
        name: "Klea Gashi",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider3,
        profession: "Model",
        name: "Ari Berisha",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider4,
        profession: "Model",
        name: "Jon Klaiqi",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },

      {
        image: ModelsSlider1,
        profession: "Model",
        name: "Anila Canolli",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,
        view: "290",
      },
      {
        image: ModelsSlider2,
        profession: "Model",
        name: "Klea Gashi",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider3,
        profession: "Model",
        name: "Ari Berisha",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider4,
        profession: "Model",
        name: "Jon Klaiqi",
        time: "$150 / hour",
        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
    ],
  },
  {
    name: "Prishtina",
    models: [],
  },
  {
    name: "Peja",
    models: [],
  },
  {
    name: "Ferizaji",
    models: [],
  },
  {
    name: "Mitrovica",
    models: [],
  },
  {
    name: "Gjakova",
    models: [],
  },
  {
    name: " Gjilani",
    models: [],
  },
  {
    name: "Prizereni",
    models: [],
  },
];
