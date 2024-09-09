import { FormattedMessage } from "react-intl";
import { translate } from "../../../translation/translate";
// About
import image1 from "../../../assets/AboutUs-section/DeaGashi.png";
import image2 from "../../../assets/AboutUs-section/BlertaBerisha.png";

// History
//hheh
// import { ReactComponent as What_we_offer2 } from "../../assets/WhatWeOffer/Icon1.svg";
// import { ReactComponent as What_we_offer3 } from "../../assets/WhatWeOffer/Icon2.svg";
// import { ReactComponent as What_we_offer4 } from "../../assets/WhatWeOffer/Icon3.svg";
// import { ReactComponent as What_we_offer5 } from "../../assets/WhatWeOffer/Icon4.svg";
// import { HiOutlineArrowLongRight } from "react-icons/hi2";
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

export const BenefitsData = (language) => [
  {
    text: <FormattedMessage id={translate[language].benefits_text1} />,
  },
  {
    text: <FormattedMessage id={translate[language].benefits_text2} />,
  },
  {
    text: <FormattedMessage id={translate[language].benefits_text3} />,
  },
  {
    text: <FormattedMessage id={translate[language].benefits_text4} />,
  },
  {
    text: <FormattedMessage id={translate[language].benefits_text5} />,
  },
  {
    text: <FormattedMessage id={translate[language].benefits_text6} />,
  },
  {
    text: <FormattedMessage id={translate[language].benefits_text7} />,
  },
  {
    text: <FormattedMessage id={translate[language].benefits_text8} />,
  },
];
