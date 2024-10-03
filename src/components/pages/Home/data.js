import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";

import image1 from "../../../assets/Home/AboutUs-section/DeaGashi.png";
import image2 from "../../../assets/Home/AboutUs-section/BlertaBerisha.png";
import imageModel3 from "../../../assets/Home/AboutUs-section/Image3.jpg";
import imageModel4 from "../../../assets/Home/AboutUs-section/Image4.jpg";
import imageModel5 from "../../../assets/Home/AboutUs-section/Image5.jpg";
import imageModel6 from "../../../assets/Home/AboutUs-section/Image6.jpg";
import imageModel7 from "../../../assets/Home/AboutUs-section/Image7.jpg";
import imageModel8 from "../../../assets/Home/AboutUs-section/Image8.jpg";

//banner
import image4 from "../../../assets/Banner/Image2.png";
import image3 from "../../../assets/Banner/Imag1.png";
import image11 from "../../../assets/Banner/Text.svg";

//Modeling
import modeling1 from "../../../assets/Modeling/Imag1.png";
import modeling2 from "../../../assets/Modeling/Image2.png";
//Marketing
import { ReactComponent as Marketingbag } from "../../../assets/ModelsMarketing/bag.svg";
import { ReactComponent as Marketingschedule } from "../../../assets/ModelsMarketing/schedule.svg";
import { ReactComponent as Marketingclock } from "../../../assets/ModelsMarketing/oclock.svg";
import { ReactComponent as Marketingsearch } from "../../../assets/ModelsMarketing/search.svg";

//BeingClassy
import { ReactComponent as BeingClassy1 } from "../../../assets/BeingClassy/Logo.svg";
import { ReactComponent as BeingClassy2 } from "../../../assets/BeingClassy/BeingClassy.svg";
//ModelsSlider
import ModelsSlider1 from "../../../assets/Home/ModelsSlider/Img1.png";
import ModelsSlider2 from "../../../assets/Home/ModelsSlider/Img2.png";
import ModelsSlider3 from "../../../assets/Home/ModelsSlider/Img3.png";
import ModelsSlider4 from "../../../assets/Home/ModelsSlider/Img4.png";
import ModelsSlider5 from "../../../assets/Home/ModelsSlider/ImageFemale1.jpg";
import ModelsSlider6 from "../../../assets/Home/ModelsSlider/ImageFemale2.jpg";
import ModelsSlider7 from "../../../assets/Home/ModelsSlider/ImageFemale3.jpg";
import ModelsSlider8 from "../../../assets/Home/ModelsSlider/ImageMan1.jpg";
import ModelsSlider9 from "../../../assets/Home/ModelsSlider/ImageMan2.jpg";
import ModelsSlider10 from "../../../assets/Home/ModelsSlider/ImageFemale4.jpg";
import ModelsSlider11 from "../../../assets/Home/ModelsSlider/ImageMan3.jpg";
import ModelsSlider12 from "../../../assets/Home/ModelsSlider/ImageMan4.jpg";

import { SlLocationPin } from "react-icons/sl";
import { FiEye } from "react-icons/fi";

//What we offer
import { ReactComponent as What_we_offer2 } from "../../../assets/WhatWeOffer/Icon1.svg";
import { ReactComponent as What_we_offer3 } from "../../../assets/WhatWeOffer/Icon2.svg";
import { ReactComponent as What_we_offer4 } from "../../../assets/WhatWeOffer/Icon3.svg";
import { ReactComponent as What_we_offer5 } from "../../../assets/WhatWeOffer/Icon4.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
//Content
import ContentImage from "../../../assets/Content/BigText.svg";
import ContentImag1 from "../../../assets/Content/BottomLine.png";
import ContentImag2 from "../../../assets/Content/SmallText.svg";
import ContentImag3 from "../../../assets/Content/TopLine.png";

//Our-work
import Our_workImage from "../../../assets/Our-Work/Image1.png";
import Our_workImage1 from "../../../assets/Our-Work/Image2.png";
import Our_workImage2 from "../../../assets/Our-Work/Image3.png";
import Our_workImage3 from "../../../assets/Our-Work/Image4.png";
import Our_workImage4 from "../../../assets/Our-Work/Image5.png";
import Our_workImage5 from "../../../assets/Our-Work/Image6.png";
import Our_workImage6 from "../../../assets/Our-Work/Image7.png";
import Our_workImage7 from "../../../assets/Our-Work/Image8.png";
import Our_workImage8 from "../../../assets/Our-Work/Image9.png";

import { HiArrowLongRight } from "react-icons/hi2";

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
    img: imageModel3,
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
    img: imageModel4,
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
    img: imageModel5,
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
    img: imageModel6,
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
    img: imageModel7,
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
    img: imageModel8,
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
    image: Our_workImage8,
    date: <FormattedMessage id={translate[language].our_blog_date1} />,
    title: <FormattedMessage id={translate[language].our_blog_text4} />,

    text: <FormattedMessage id={translate[language].our_blog_textt4} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more1} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage6,
    date: <FormattedMessage id={translate[language].our_blog_date2} />,
    title: <FormattedMessage id={translate[language].our_blog_text5} />,

    text: <FormattedMessage id={translate[language].our_blog_textt5} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more2} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage7,
    date: <FormattedMessage id={translate[language].our_blog_date3} />,
    title: <FormattedMessage id={translate[language].our_blog_text6} />,

    text: <FormattedMessage id={translate[language].our_blog_textt6} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more3} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage4,
    date: <FormattedMessage id={translate[language].our_blog_date1} />,
    title: <FormattedMessage id={translate[language].our_blog_text7} />,

    text: <FormattedMessage id={translate[language].our_blog_textt7} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more1} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage3,
    date: <FormattedMessage id={translate[language].our_blog_date2} />,
    title: <FormattedMessage id={translate[language].our_blog_text8} />,

    text: <FormattedMessage id={translate[language].our_blog_textt8} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more2} />,
    icon: <HiArrowLongRight />,
  },
  {
    image: Our_workImage5,
    date: <FormattedMessage id={translate[language].our_blog_date3} />,
    title: <FormattedMessage id={translate[language].our_blog_text9} />,

    text: <FormattedMessage id={translate[language].our_blog_textt9} />,
    link: <FormattedMessage id={translate[language].our_blog_read_more3} />,
    icon: <HiArrowLongRight />,
  },
];

export const ModelsSliderData = (language) => [
  {
    cls: "tab1",
    items: [
      {
        col: "col1",
        innerItems: [
          {
            image: ModelsSlider1,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession1}
              />
            ),
            name: "Anila Canolli",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time1} />
            ),

            location: "Prishtina, Kosova",

            icon: <SlLocationPin />,
            icon1: <FiEye />,
            view: "290",
          },

          {
            image: ModelsSlider2,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession2}
              />
            ),

            name: "Klea Gashi",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time2} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
          {
            image: ModelsSlider3,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession3}
              />
            ),
            name: "Ari Berisha",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time3} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
          {
            image: ModelsSlider4,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession4}
              />
            ),
            name: "Jon Klaiqi",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time4} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
          {
            image: ModelsSlider5,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession5}
              />
            ),

            name: "Jora Preniqi",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time5} />
            ),

            location: "Prishtina, Kosova",

            icon: <SlLocationPin />,
            icon1: <FiEye />,
            view: "290",
          },
          {
            image: ModelsSlider6,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession6}
              />
            ),

            name: "Alea Kabashi",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time6} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
          {
            image: ModelsSlider7,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession7}
              />
            ),
            name: "Aulona Morina ",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time7} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
          {
            image: ModelsSlider8,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession8}
              />
            ),
            name: "Mal Behluli",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time8} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },

          {
            image: ModelsSlider9,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession9}
              />
            ),

            name: "Altin Shala",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time9} />
            ),

            location: "Prishtina, Kosova",

            icon: <SlLocationPin />,
            icon1: <FiEye />,
            view: "290",
          },
          {
            image: ModelsSlider10,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession10}
              />
            ),

            name: "Genta Salihu",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time10} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
          {
            image: ModelsSlider11,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession11}
              />
            ),
            name: "Dior Behrami",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time11} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
          {
            image: ModelsSlider12,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession12}
              />
            ),
            name: "Albios Avdiu",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time12} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
        ],
      },
    ],
  },

  {
    cls: "tab1",
    items: [
      {
        col: "col1",
        innerItems: [
          {
            image: ModelsSlider7,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession7}
              />
            ),
            name: "Dior Behrami",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time7} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
          {
            image: ModelsSlider8,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession8}
              />
            ),
            name: "Albios Avdiu",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time8} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },

          {
            image: ModelsSlider9,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession9}
              />
            ),

            name: "Daorsa Bindi",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time9} />
            ),

            location: "Prishtina, Kosova",

            icon: <SlLocationPin />,
            icon1: <FiEye />,
            view: "290",
          },
          {
            image: ModelsSlider10,
            profession: (
              <FormattedMessage
                id={translate[language].modelsSlider_profession10}
              />
            ),

            name: "Enda Doci",
            time: (
              <FormattedMessage id={translate[language].modelsSlider_time10} />
            ),

            location: "Prishtina, Kosova",
            icon: <SlLocationPin />,
            icon1: <FiEye />,

            view: "290",
          },
        ],
      },
    ],
  },
];
