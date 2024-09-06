import { FormattedMessage } from "react-intl";
import { translate } from "../../translation/translate";

import image1 from "../../assets/AboutUs-section/DeaGashi.png";
import image2 from "../../assets/AboutUs-section/BlertaBerisha.png";
//banner
import image4 from "../../assets/Banner/Image2.png";
import image3 from "../../assets/Banner/Imag1.png";
import image11 from "../../assets/Banner/Text.svg";

//Modeling
import modeling1 from "../../assets/Modeling/Imag1.png";
import modeling2 from "../../assets/Modeling/Image2.png";
//Marketing
import { ReactComponent as Marketingbag } from "../../assets/ModelsMarketing/bag.svg";
import { ReactComponent as Marketingschedule } from "../../assets/ModelsMarketing/schedule.svg";
import { ReactComponent as Marketingclock } from "../../assets/ModelsMarketing/oclock.svg";
import { ReactComponent as Marketingsearch } from "../../assets/ModelsMarketing/search.svg";

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

//What we offer
import { ReactComponent as What_we_offer2 } from "../../assets/WhatWeOffer/Icon1.svg";
import { ReactComponent as What_we_offer3 } from "../../assets/WhatWeOffer/Icon2.svg";
import { ReactComponent as What_we_offer4 } from "../../assets/WhatWeOffer/Icon3.svg";
import { ReactComponent as What_we_offer5 } from "../../assets/WhatWeOffer/Icon4.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
//Content
import ContentImage from "../../assets/Content/BigText.svg";
import ContentImag1 from "../../assets/Content/BottomLine.png";
import ContentImag2 from "../../assets/Content/SmallText.svg";
import ContentImag3 from "../../assets/Content/TopLine.png";
// What people sat
import What_people_sayImage from "../../assets/WhatPeopleSay/Profile1.png";
//Our partnerships
import { ReactComponent as Our_partnerships1 } from "../../assets/OurPartners/Logo.svg";
import Our_partnerships2 from "../../assets/OurPartners/Profile.png";
//Kosova Girls
import Kosova_GirlsImage from "../../assets/Kosova_Girls/Background1.jpg";
import Kosova_GirlsImage1 from "../../assets/Kosova_Girls/Background2.png";
import Kosova_GirlsImage2 from "../../assets/Kosova_Girls/Background3.png";
import Kosova_GirlsImage3 from "../../assets/Kosova_Girls/Background4.png";
import { ReactComponent as Kosova_GirlsImage4 } from "../../assets/Kosova_Girls/Logo.svg";
import { BsArrowRight } from "react-icons/bs";
//Our-work
import Our_workImage from "../../assets/Our-Work/Image1.png";
import Our_workImage1 from "../../assets/Our-Work/Image2.png";
import Our_workImage2 from "../../assets/Our-Work/Image3.png";
import { HiArrowLongRight } from "react-icons/hi2";
//Modelkos Academy
import { ReactComponent as ModelkosAcademy } from "../../assets/Academy/Logo.svg";
//Partners
import PartnersImage1 from "../../assets/Partners/bershka.svg";
import PartnersImage2 from "../../assets/Partners/boohoo.svg";
import PartnersImage3 from "../../assets/Partners/chanel.svg";
import PartnersImage4 from "../../assets/Partners/ck.svg";
import PartnersImage5 from "../../assets/Partners/mango.svg";
import PartnersImage6 from "../../assets/Partners/braty.svg";
import PartnersImage7 from "../../assets/Partners/kosovagirls.svg";
//Subscribe
import { ReactComponent as SubscribeIcon } from "../../assets/Subscribe/icon.svg";

export const BannerData1 = [
  { image_1: image11, image_2: image3, image_3: image4 },
];
export const AboutUsData = (language) => [
  {
    to: "/",
    img: image1,
    name: "Albina Myrtezaj",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name1} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography1}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist1} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Klea Gashi",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name2} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography2}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist2} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Arta Kalluri",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name3} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography3}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist3} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image1,
    name: "Blina Beka",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name4} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography4}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist4} />
        ),
      },
    ],
    date: "19 may 2022",
  },
];
export const AboutUsData2 = (language) => [
  {
    to: "/",
    img: image2,
    name: "Blina Beka",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name5} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography5}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist5} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Alora Gojani",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name6} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography6}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist6} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Anila Xhaferi",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name7} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography7}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist7} />
        ),
      },
    ],
    date: "19 may 2022",
  },
  {
    to: "/",
    img: image2,
    name: "Anisa Xhaferi",
    about: [
      {
        name: <FormattedMessage id={translate[language].about_models_name8} />,
      },
      {
        name: (
          <FormattedMessage
            id={translate[language].about_models_photography8}
          />
        ),
      },
      {
        name: (
          <FormattedMessage id={translate[language].about_models_artist8} />
        ),
      },
    ],
    date: "19 may 2022",
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

// export const ModelsData = (language) => [
//   {
//     name: <FormattedMessage id={translate[language].about_models_tab_name1} />,

//     models: [
//       {
//         image: model1,
//         name: "Anda Lleshi",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height1} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust1} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist1} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips1} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress1} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe1} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair1} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes1} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//       {
//         image: model7,
//         name: "Anila Xhaferi",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height2} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust2} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist2} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips2} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress2} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe2} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair2} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes2} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },

//       {
//         image: model10,

//         name: "Blerta Salihu",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height3} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust3} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist3} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips3} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress3} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe3} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair3} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes3} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//     ],
//     models1: [
//       {
//         image: model4,

//         name: "Drianda Lakna",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height4} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust4} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist4} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips4} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress4} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe4} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair4} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes4} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//       {
//         image: model8,

//         name: "Albina Myrtezaj",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height5} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust5} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist5} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips5} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress5} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe5} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair5} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes5} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//       {
//         image: model2,

//         name: "Iliada Sadriu",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height6} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust6} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist6} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips6} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress6} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe6} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair6} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes7} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//     ],
//     models2: [
//       {
//         image: model5,

//         name: "Klea Gashi",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height7} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust7} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist7} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips7} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress7} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe7} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair7} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes7} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },
//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//       {
//         image: model9,

//         name: "Drenusha Qaza",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height8} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust8} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist8} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips8} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress8} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe8} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair8} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes8} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//       {
//         model_title: "Want to be here?",
//         paragraph:
//           "ModelKos is seeking new talent, so join the largest modeling agency in Kosovo and show off your skills. Be a model!",
//         icon: modelText,
//       },
//     ],
//     models3: [
//       {
//         image: model6,

//         name: "Arta Kalludra",
//         paragraph1: (
//           <FormattedMessage id={translate[language].about_models_tab_height9} />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust9} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist9} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips9} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress9} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe9} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair9} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes9} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//       {
//         image: model11,

//         name: "Klesta Trifoni",
//         paragraph1: (
//           <FormattedMessage
//             id={translate[language].about_models_tab_height10}
//           />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust10} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist10} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips10} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress10} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe10} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair10} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes10} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//       {
//         image: model3,

//         name: "Melinda Ademi",
//         paragraph1: (
//           <FormattedMessage
//             id={translate[language].about_models_tab_height10}
//           />
//         ),
//         paragraph2: (
//           <FormattedMessage id={translate[language].about_models_tab_bust11} />
//         ),
//         paragraph3: (
//           <FormattedMessage id={translate[language].about_models_tab_waist11} />
//         ),
//         paragraph4: (
//           <FormattedMessage id={translate[language].about_models_tab_hips11} />
//         ),
//         paragraph5: (
//           <FormattedMessage id={translate[language].about_models_tab_dress11} />
//         ),
//         paragraph6: (
//           <FormattedMessage id={translate[language].about_models_tab_shoe11} />
//         ),
//         paragraph7: (
//           <FormattedMessage id={translate[language].about_models_tab_hair11} />
//         ),
//         paragraph8: (
//           <FormattedMessage id={translate[language].about_models_tab_eyes11} />
//         ),
//         socialMedia: [
//           {
//             to: "/",
//             icon: <FaFacebookF />,
//           },

//           {
//             to: "/",
//             icon: <FaInstagram />,
//           },
//           {
//             to: "/",
//             icon: <FaTiktok />,
//           },
//           {
//             to: "/",
//             icon: <FaTwitter />,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: <FormattedMessage id={translate[language].about_models_tab_name2} />,

//     models: [],
//   },
//   {
//     name: <FormattedMessage id={translate[language].about_models_tab_name3} />,

//     models: [],
//   },
//   {
//     name: <FormattedMessage id={translate[language].about_models_tab_name4} />,

//     models: [],
//   },
//   {
//     name: <FormattedMessage id={translate[language].about_models_tab_name5} />,

//     models: [],
//   },
// ];

export const MarketingData1 = (language) => [
  {
    number: "500,000+",
    name: <FormattedMessage id={translate[language].marketing_portfolio} />,
  },
  {
    number: "520,000+",
    name: <FormattedMessage id={translate[language].marketing_featured} />,
  },
  {
    number: "100M",
    name: <FormattedMessage id={translate[language].marketing_visits} />,
  },
];

export const MarketingData3 = (language) => [
  {
    icon: <Marketingsearch />,
    title: <FormattedMessage id={translate[language].marketing_search} />,
  },
  {
    icon: <Marketingclock />,
    title: <FormattedMessage id={translate[language].marketing_book} />,
  },
  {
    icon: <Marketingschedule />,

    title: <FormattedMessage id={translate[language].marketing_schedule} />,
  },
  {
    icon: <Marketingbag />,
    title: <FormattedMessage id={translate[language].marketing_work_with_us} />,
  },
];
export const BeingClassyData = [{ image1: BeingClassy1, image2: BeingClassy2 }];
export const ModelsSliderData = (language) => [
  {
    cls: "tab1",
    models: [
      {
        image: ModelsSlider1,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession1} />
        ),
        name: "Anila Canolli",
        time: <FormattedMessage id={translate[language].modelsSlider_time1} />,

        location: "Prishtina, Kosova",

        icon: <SlLocationPin />,
        icon1: <FiEye />,
        view: "290",
      },

      {
        image: ModelsSlider2,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession2} />
        ),

        name: "Klea Gashi",
        time: <FormattedMessage id={translate[language].modelsSlider_time2} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider3,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession3} />
        ),
        name: "Ari Berisha",
        time: <FormattedMessage id={translate[language].modelsSlider_time3} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider4,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession4} />
        ),
        name: "Jon Klaiqi",
        time: <FormattedMessage id={translate[language].modelsSlider_time4} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider1,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession5} />
        ),

        name: "Anila Canolli",
        time: <FormattedMessage id={translate[language].modelsSlider_time5} />,

        location: "Prishtina, Kosova",

        icon: <SlLocationPin />,
        icon1: <FiEye />,
        view: "290",
      },
      {
        image: ModelsSlider2,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession6} />
        ),

        name: "Klea Gashi",
        time: <FormattedMessage id={translate[language].modelsSlider_time6} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider3,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession7} />
        ),
        name: "Ari Berisha",
        time: <FormattedMessage id={translate[language].modelsSlider_time7} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider4,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession8} />
        ),
        name: "Jon Klaiqi",
        time: <FormattedMessage id={translate[language].modelsSlider_time8} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },

      {
        image: ModelsSlider1,
        profession: (
          <FormattedMessage id={translate[language].modelsSlider_profession9} />
        ),

        name: "Anila Canolli",
        time: <FormattedMessage id={translate[language].modelsSlider_time9} />,

        location: "Prishtina, Kosova",

        icon: <SlLocationPin />,
        icon1: <FiEye />,
        view: "290",
      },
      {
        image: ModelsSlider2,
        profession: (
          <FormattedMessage
            id={translate[language].modelsSlider_profession10}
          />
        ),

        name: "Klea Gashi",
        time: <FormattedMessage id={translate[language].modelsSlider_time10} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider3,
        profession: (
          <FormattedMessage
            id={translate[language].modelsSlider_profession11}
          />
        ),
        name: "Ari Berisha",
        time: <FormattedMessage id={translate[language].modelsSlider_time11} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
      {
        image: ModelsSlider4,
        profession: (
          <FormattedMessage
            id={translate[language].modelsSlider_profession12}
          />
        ),
        name: "Jon Klaiqi",
        time: <FormattedMessage id={translate[language].modelsSlider_time12} />,

        location: "Prishtina, Kosova",
        icon: <SlLocationPin />,
        icon1: <FiEye />,

        view: "290",
      },
    ],
  },
];
export const What_we_offerData = (language) => [
  {
    icon: <What_we_offer2 />,

    course: <FormattedMessage id={translate[language].what_we_offer_course1} />,

    text: <FormattedMessage id={translate[language].what_we_offer_text1} />,

    button: {
      to: "/",
      text: (
        <FormattedMessage id={translate[language].what_we_offer_learn_more1} />
      ),

      icon: <HiOutlineArrowLongRight />,
    },
  },
  {
    icon: <What_we_offer3 />,

    course: <FormattedMessage id={translate[language].what_we_offer_course2} />,

    text: <FormattedMessage id={translate[language].what_we_offer_text2} />,

    button: {
      to: "/",

      text: (
        <FormattedMessage id={translate[language].what_we_offer_learn_more2} />
      ),

      icon: <HiOutlineArrowLongRight />,
    },
  },
  {
    icon: <What_we_offer4 />,

    course: <FormattedMessage id={translate[language].what_we_offer_course3} />,
    text: <FormattedMessage id={translate[language].what_we_offer_text3} />,

    button: {
      to: "/",
      text: (
        <FormattedMessage id={translate[language].what_we_offer_learn_more3} />
      ),

      icon: <HiOutlineArrowLongRight />,
    },
  },
  {
    icon: <What_we_offer5 />,

    course: <FormattedMessage id={translate[language].what_we_offer_course4} />,
    text: <FormattedMessage id={translate[language].what_we_offer_text4} />,

    button: {
      to: "/",
      text: (
        <FormattedMessage id={translate[language].what_we_offer_learn_more4} />
      ),

      icon: <HiOutlineArrowLongRight />,
    },
  },
  {
    icon: <What_we_offer2 />,

    course: <FormattedMessage id={translate[language].what_we_offer_course1} />,

    text: <FormattedMessage id={translate[language].what_we_offer_text1} />,

    button: {
      to: "/",
      text: (
        <FormattedMessage id={translate[language].what_we_offer_learn_more1} />
      ),

      icon: <HiOutlineArrowLongRight />,
    },
  },
  {
    icon: <What_we_offer3 />,

    course: <FormattedMessage id={translate[language].what_we_offer_course2} />,

    text: <FormattedMessage id={translate[language].what_we_offer_text2} />,

    button: {
      to: "/",

      text: (
        <FormattedMessage id={translate[language].what_we_offer_learn_more2} />
      ),

      icon: <HiOutlineArrowLongRight />,
    },
  },
  {
    icon: <What_we_offer4 />,

    course: <FormattedMessage id={translate[language].what_we_offer_course3} />,
    text: <FormattedMessage id={translate[language].what_we_offer_text3} />,

    button: {
      to: "/",
      text: (
        <FormattedMessage id={translate[language].what_we_offer_learn_more3} />
      ),

      icon: <HiOutlineArrowLongRight />,
    },
  },
  {
    icon: <What_we_offer5 />,

    course: <FormattedMessage id={translate[language].what_we_offer_course4} />,
    text: <FormattedMessage id={translate[language].what_we_offer_text4} />,

    button: {
      to: "/",
      text: (
        <FormattedMessage id={translate[language].what_we_offer_learn_more4} />
      ),

      icon: <HiOutlineArrowLongRight />,
    },
  },
];
export const ContentData = (language) => [
  {
    image3: ContentImag1,
    image: ContentImage,
    image1: ContentImag2,
    text: <FormattedMessage id={translate[language].content_text} />,
    image2: ContentImag3,
  },
];
export const What_people_sayData = (language) => [
  {
    title: (
      <FormattedMessage id={translate[language].What_people_say_agency1} />
    ),
    text: <FormattedMessage id={translate[language].What_people_say_text1} />,
    img: What_people_sayImage,

    profile: [
      {
        name: "Xhensila Halimi",
        profile: (
          <FormattedMessage id={translate[language].What_people_say_profile1} />
        ),
        text: (
          <FormattedMessage id={translate[language].What_people_say_rating1} />
        ),
        img: What_people_sayImage,
      },
    ],
  },
  {
    title: (
      <FormattedMessage id={translate[language].What_people_say_agency2} />
    ),
    text: <FormattedMessage id={translate[language].What_people_say_text2} />,
    img: What_people_sayImage,

    profile: [
      {
        name: "Xhensila Halimi",
        profile: (
          <FormattedMessage id={translate[language].What_people_say_profile2} />
        ),
        text: (
          <FormattedMessage id={translate[language].What_people_say_rating2} />
        ),
        img: What_people_sayImage,
      },
    ],
  },
  {
    title: (
      <FormattedMessage id={translate[language].What_people_say_agency3} />
    ),
    text: <FormattedMessage id={translate[language].What_people_say_text3} />,
    img: What_people_sayImage,

    profile: [
      {
        name: "Xhensila Halimi",
        profile: (
          <FormattedMessage id={translate[language].What_people_say_profile3} />
        ),
        text: (
          <FormattedMessage id={translate[language].What_people_say_rating3} />
        ),
        img: What_people_sayImage,
      },
    ],
  },
  {
    title: (
      <FormattedMessage id={translate[language].What_people_say_agency4} />
    ),
    text: <FormattedMessage id={translate[language].What_people_say_text4} />,
    img: What_people_sayImage,

    profile: [
      {
        name: "Xhensila Halimi",
        profile: (
          <FormattedMessage id={translate[language].What_people_say_profile4} />
        ),
        text: (
          <FormattedMessage id={translate[language].What_people_say_rating4} />
        ),
        img: What_people_sayImage,
      },
    ],
  },
];
export const Our_partnershipsData = (language) => [
  {
    icon: <Our_partnerships1 />,
    title: <FormattedMessage id={translate[language].Our_partnerships_text1} />,

    text: <FormattedMessage id={translate[language].Our_partnerships_text2} />,

    image: Our_partnerships2,
  },
];
export const Kosova_GirlsData = (language) => [
  {
    image: Kosova_GirlsImage,

    title: <FormattedMessage id={translate[language].ks_fashion} />,
    icon: <BsArrowRight />,
  },
  {
    image: Kosova_GirlsImage1,
    title: <FormattedMessage id={translate[language].ks_hair} />,
    icon: <BsArrowRight />,
  },
  {
    image: Kosova_GirlsImage2,
    title: <FormattedMessage id={translate[language].ks_photography} />,
    icon: <BsArrowRight />,
  },
  {
    image: Kosova_GirlsImage3,
    title: <FormattedMessage id={translate[language].ks_acting} />,
    icon: <BsArrowRight />,
  },
];
export const SharedTextData = (language) => [
  {
    icon: <Kosova_GirlsImage4 />,
    title: <FormattedMessage id={translate[language].ks_education} />,
    text: <FormattedMessage id={translate[language].ks_text} />,
  },
];
export const Our_workData = (language) => [
  {
    image: Our_workImage,
    date: <FormattedMessage id={translate[language].our_blog_date1} />,
    title: <FormattedMessage id={translate[language].our_blog_text1} />,

    text: <FormattedMessage id={translate[language].our_blog_textt1} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more1} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage1,
    date: <FormattedMessage id={translate[language].our_blog_date2} />,
    title: <FormattedMessage id={translate[language].our_blog_text2} />,

    text: <FormattedMessage id={translate[language].our_blog_textt2} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more2} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage2,
    date: <FormattedMessage id={translate[language].our_blog_date3} />,
    title: <FormattedMessage id={translate[language].our_blog_text3} />,

    text: <FormattedMessage id={translate[language].our_blog_textt3} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more3} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage,
    date: <FormattedMessage id={translate[language].our_blog_date1} />,
    title: <FormattedMessage id={translate[language].our_blog_text1} />,

    text: <FormattedMessage id={translate[language].our_blog_textt1} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more1} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage1,
    date: <FormattedMessage id={translate[language].our_blog_date2} />,
    title: <FormattedMessage id={translate[language].our_blog_text2} />,

    text: <FormattedMessage id={translate[language].our_blog_textt2} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more2} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage2,
    date: <FormattedMessage id={translate[language].our_blog_date3} />,
    title: <FormattedMessage id={translate[language].our_blog_text3} />,

    text: <FormattedMessage id={translate[language].our_blog_textt3} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more3} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage,
    date: <FormattedMessage id={translate[language].our_blog_date1} />,
    title: <FormattedMessage id={translate[language].our_blog_text1} />,

    text: <FormattedMessage id={translate[language].our_blog_textt1} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more1} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage1,
    date: <FormattedMessage id={translate[language].our_blog_date2} />,
    title: <FormattedMessage id={translate[language].our_blog_text2} />,

    text: <FormattedMessage id={translate[language].our_blog_textt2} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more2} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage2,
    date: <FormattedMessage id={translate[language].our_blog_date3} />,
    title: <FormattedMessage id={translate[language].our_blog_text3} />,

    text: <FormattedMessage id={translate[language].our_blog_textt3} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more3} />,
    icon: <HiArrowLongRight />,
  },
];
export const AcademyData = (language) => [
  {
    icon: <ModelkosAcademy />,
    text: <FormattedMessage id={translate[language].academy_text1} />,
  },
  {
    icon: <ModelkosAcademy />,
    text: <FormattedMessage id={translate[language].academy_text2} />,
  },
  {
    icon: <ModelkosAcademy />,
    text: <FormattedMessage id={translate[language].academy_text3} />,
  },
];
export const Our_partnersData = [
  {
    logo: PartnersImage3,
  },
  {
    logo: PartnersImage2,
  },
  {
    logo: PartnersImage5,
  },

  {
    logo: PartnersImage1,
  },
  {
    logo: PartnersImage4,
  },
  {
    logo: PartnersImage7,
  },
  {
    logo: PartnersImage6,
  },
  {
    logo: PartnersImage3,
  },
  {
    logo: PartnersImage2,
  },
  {
    logo: PartnersImage5,
  },

  {
    logo: PartnersImage1,
  },
  {
    logo: PartnersImage4,
  },
  {
    logo: PartnersImage7,
  },
  {
    logo: PartnersImage6,
  },
];
export const SubscribeData = (language) => [
  {
    title: <FormattedMessage id={translate[language].subscribe_title} />,

    text: <FormattedMessage id={translate[language].subscribe_text} />,

    icon: <SubscribeIcon />,
    button: <FormattedMessage id={translate[language].subscribe_subscribe} />,
  },
];
